// WCAG gate: runs axe-core on every public route at desktop and mobile widths.
// Only serious and critical violations fail the build; moderate/minor are
// printed as warnings so they stay visible without blocking unrelated work.
//
// Usage: npm run build && node scripts/check-a11y.mjs

import fs from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer-core";
import { routes } from "./routes.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const axePath = path.join(root, "node_modules", "axe-core", "axe.min.js");
const PORT = Number(process.env.A11Y_PORT || 4176);
const BASE = `http://127.0.0.1:${PORT}`;

const VIEWPORTS = [
  { name: "desktop", width: 1366, height: 900 },
  { name: "mobile", width: 390, height: 844, isMobile: true, hasTouch: true },
];

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

  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) return candidate;
  }
  return null;
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

async function main() {
  if (!fs.existsSync(axePath)) throw new Error("axe-core is not installed; run npm ci");
  if (!fs.existsSync(path.join(root, "dist", "index.html"))) {
    throw new Error("dist/index.html is missing; run npm build first");
  }

  const executablePath = findChrome();
  if (!executablePath) {
    throw new Error("No Chrome/Edge executable found. Set CHROME_PATH.");
  }

  const server = await startServer();
  const browser = await puppeteer.launch({
    executablePath,
    headless: true,
    args: ["--no-sandbox", "--disable-dev-shm-usage", "--font-render-hinting=none"],
  });

  const publicRoutes = routes.filter((route) => route.id !== "not-found");
  const report = { generatedAt: new Date().toISOString(), viewports: VIEWPORTS, results: [] };
  let failures = 0;
  let warnings = 0;

  try {
    for (const viewport of VIEWPORTS) {
      for (const route of publicRoutes) {
        const page = await browser.newPage();
        await page.setViewport({
          width: viewport.width,
          height: viewport.height,
          isMobile: Boolean(viewport.isMobile),
          hasTouch: Boolean(viewport.hasTouch),
          deviceScaleFactor: 1,
        });
        await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
        await page.goto(`${BASE}${route.url}`, { waitUntil: "networkidle2", timeout: 60000 });
        await page.addScriptTag({ path: axePath });

        const result = await page.evaluate(async () => {
          const axeResult = await window.axe.run(document, {
            runOnly: {
              type: "tag",
              values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"],
            },
            resultTypes: ["violations"],
          });
          return {
            violations: axeResult.violations.map((violation) => ({
              id: violation.id,
              impact: violation.impact,
              help: violation.help,
              nodes: violation.nodes.map((node) => ({
                target: node.target,
                html: node.html,
              })),
            })),
          };
        });

        const blocking = result.violations.filter(
          (violation) => violation.impact === "serious" || violation.impact === "critical"
        );
        const advisory = result.violations.filter(
          (violation) => violation.impact !== "serious" && violation.impact !== "critical"
        );
        failures += blocking.length;
        warnings += advisory.length;
        report.results.push({ route: route.url, viewport: viewport.name, ...result });

        if (blocking.length === 0) {
          console.log(`  ok   ${viewport.name.padEnd(7)} ${route.url}`);
        } else {
          console.log(`  FAIL ${viewport.name.padEnd(7)} ${route.url}`);
          for (const violation of blocking) {
            console.log(
              `         ${violation.id} (${violation.impact}) — ${violation.help} [${violation.nodes.length} node(s)]`
            );
            for (const node of violation.nodes.slice(0, 3)) {
              console.log(`           ${node.target.join(" ")}`);
            }
          }
        }
        for (const violation of advisory) {
          console.log(`  warn ${viewport.name.padEnd(7)} ${route.url} ${violation.id} (${violation.impact})`);
        }

        await page.close();
      }
    }
  } finally {
    await browser.close();
    server.kill();
  }

  fs.mkdirSync(path.join(root, "reports"), { recursive: true });
  fs.writeFileSync(
    path.join(root, "reports", "axe.json"),
    JSON.stringify(report, null, 2),
    "utf-8"
  );

  console.log(
    `\nAxe checked ${publicRoutes.length} routes x ${VIEWPORTS.length} viewports: ${failures} serious/critical, ${warnings} advisory.`
  );
  if (failures > 0) process.exit(1);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
