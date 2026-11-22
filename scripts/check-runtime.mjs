// Runtime verification against the built site:
//   - hydration must not log React mismatch errors
//   - CLS must stay <= 0.05 at mobile width
//   - homepage pre-interaction images must stay <= 400 kB (mobile and desktop)
//   - prefers-reduced-motion must collapse CSS transitions/animations
//
// Usage: npm run build && node scripts/check-runtime.mjs
// This is intentionally a gate: a failure means a real user-visible regression.

import fs from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer-core";
import { routes } from "./routes.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const PORT = Number(process.env.RUNTIME_PORT || 4177);
const BASE = `http://127.0.0.1:${PORT}`;
const CLS_BUDGET = 0.05;
const MEDIA_BUDGET = 400 * 1024;

function findChrome() {
  const candidates = [
    process.env.CHROME_PATH,
    "C:/Program Files/Google/Chrome/Application/chrome.exe",
    "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
    "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
    "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
    "/usr/bin/google-chrome",
    "/usr/bin/google-chrome-stable",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
  ].filter(Boolean);
  return candidates.find((candidate) => fs.existsSync(candidate)) || null;
}

function startServer() {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [path.join(__dirname, "serve-dist.mjs"), String(PORT)], {
      cwd: root,
      stdio: ["ignore", "pipe", "pipe"],
    });
    let settled = false;
    const timer = setTimeout(() => {
      if (!settled) reject(new Error("serve-dist did not start within 15s"));
    }, 15000);
    child.stdout.on("data", (chunk) => {
      if (!settled && chunk.toString().includes("Static dist server")) {
        settled = true;
        clearTimeout(timer);
        resolve(child);
      }
    });
    child.stderr.on("data", (chunk) => process.stderr.write(chunk));
    child.on("exit", (code) => {
      if (!settled) {
        settled = true;
        clearTimeout(timer);
        reject(new Error(`serve-dist exited early (code ${code})`));
      }
    });
  });
}

const HYDRATION_PATTERNS = [
  /hydrat/i,
  /Minified React error #(418|422|423|425)/i,
  /did not match/i,
  /server rendered HTML/i,
  /text content does not match/i,
];

async function settle(page) {
  await page.evaluate(() => document.fonts?.ready || Promise.resolve());
  await new Promise((resolve) => setTimeout(resolve, 750));
}

async function main() {
  if (!fs.existsSync(path.join(root, "dist", "index.html"))) {
    throw new Error("dist/index.html is missing; run npm build first");
  }
  const executablePath = findChrome();
  if (!executablePath) throw new Error("No Chrome/Edge executable found. Set CHROME_PATH.");

  const server = await startServer();
  const browser = await puppeteer.launch({
    executablePath,
    headless: true,
    args: ["--no-sandbox", "--disable-dev-shm-usage"],
  });

  let failures = 0;
  const publicRoutes = routes.filter((route) => route.id !== "not-found");

  try {
    // ── Hydration + CLS, mobile ─────────────────────────────────────────────
    console.log("Hydration and CLS (mobile 390x844):");
    for (const route of publicRoutes) {
      const page = await browser.newPage();
      const errors = [];
      page.on("console", (message) => {
        if (message.type() === "error" && HYDRATION_PATTERNS.some((p) => p.test(message.text()))) {
          errors.push(message.text());
        }
      });
      page.on("pageerror", (error) => {
        if (HYDRATION_PATTERNS.some((p) => p.test(String(error)))) errors.push(String(error));
      });

      await page.evaluateOnNewDocument(() => {
        window.__cls = 0;
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) window.__cls += entry.value;
          }
        }).observe({ type: "layout-shift", buffered: true });
      });
      await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 2 });
      await page.goto(`${BASE}${route.url}`, { waitUntil: "networkidle2", timeout: 60000 });
      await settle(page);

      const result = await page.evaluate(() => ({
        cls: window.__cls,
        hasContent: (document.getElementById("root")?.childElementCount || 0) > 0,
        title: document.title,
      }));

      const problems = [];
      if (errors.length > 0) problems.push(`hydration: ${errors[0].slice(0, 160)}`);
      if (!result.hasContent) problems.push("#root is empty");
      if (!result.title) problems.push("missing title");
      if (result.cls > CLS_BUDGET) problems.push(`CLS ${result.cls.toFixed(3)} > ${CLS_BUDGET}`);

      if (problems.length === 0) {
        console.log(`  ok   ${route.url.padEnd(24)} CLS ${result.cls.toFixed(3)}`);
      } else {
        failures += 1;
        console.log(`  FAIL ${route.url.padEnd(24)} ${problems.join("; ")}`);
      }
      await page.close();
    }

    // ── Homepage media transfer ─────────────────────────────────────────────
    console.log("\nHomepage pre-interaction media transfer:");
    for (const viewport of [
      { name: "desktop", width: 1366, height: 900, deviceScaleFactor: 1 },
      { name: "mobile", width: 390, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 2 },
    ]) {
      const page = await browser.newPage();
      await page.setCacheEnabled(false);
      await page.setViewport(viewport);
      await page.goto(`${BASE}/`, { waitUntil: "networkidle2", timeout: 60000 });
      await settle(page);
      const media = await page.evaluate(() =>
        performance
          .getEntriesByType("resource")
          .filter(
            (entry) =>
              entry.initiatorType === "img" || /\.(webp|jpe?g|png|gif|mp4|webm)(\?|$)/i.test(entry.name)
          )
          .map((entry) => ({ name: new URL(entry.name).pathname, bytes: entry.transferSize || 0 }))
      );
      const total = media.reduce((sum, entry) => sum + entry.bytes, 0);
      const mark = total <= MEDIA_BUDGET ? "ok  " : "FAIL";
      if (total > MEDIA_BUDGET) failures += 1;
      console.log(
        `  ${mark} ${viewport.name.padEnd(7)} ${(total / 1024).toFixed(1)} kB / 400 kB across ${media.length} requests`
      );
      if (process.env.RUNTIME_VERBOSE) {
        for (const entry of media.sort((a, b) => b.bytes - a.bytes)) {
          console.log(`         ${(entry.bytes / 1024).toFixed(1).padStart(7)} kB ${entry.name}`);
        }
      }
      await page.close();
    }

    // ── Reduced motion ─────────────────────────────────────────────────────
    console.log("\nprefers-reduced-motion: reduce:");
    const motionPage = await browser.newPage();
    await motionPage.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
    await motionPage.goto(`${BASE}/`, { waitUntil: "networkidle2", timeout: 60000 });
    await settle(motionPage);
    const motion = await motionPage.evaluate(() => {
      const samples = [...document.querySelectorAll(".reveal, .hero-enter, .hero-enter-visual")].slice(0, 12);
      return {
        matches: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
        durations: samples.map((element) => {
          const style = getComputedStyle(element);
          return {
            transition: style.transitionDuration,
            animation: style.animationDuration,
          };
        }),
      };
    });
    const longDurations = motion.durations.filter((entry) =>
      [entry.transition, entry.animation].some((value) =>
        value.split(",").some((part) => Number.parseFloat(part) > 0.01)
      )
    );
    if (motion.matches && longDurations.length === 0) {
      console.log(`  ok   ${motion.durations.length} animated elements collapsed to <=0.01s`);
    } else {
      failures += 1;
      console.log(
        `  FAIL reduced motion matches=${motion.matches}, ${longDurations.length} element(s) still animate`
      );
    }
    await motionPage.close();
  } finally {
    await browser.close();
    server.kill();
  }

  if (failures > 0) {
    console.error(`\ncheck-runtime failed with ${failures} problem(s).`);
    process.exit(1);
  }
  console.log("\ncheck-runtime passed.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
