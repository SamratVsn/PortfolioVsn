import { createServer } from "vite";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { routes, buildSitemap } from "./routes.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");

const server = await createServer({
  root,
  server: { middlewareMode: true },
  appType: "custom",
  logLevel: "error",
});

const entry = await server.ssrLoadModule("/scripts/prerender-entry.jsx");
const { render } = entry;

// Hosting config is deliberately explicit (Vercel rewrites/redirects are easier
// to audit live than a generated file), so the build verifies it still matches
// the single route manifest. Drift fails the build instead of shipping a 404.
function checkHostingConfig() {
  const config = JSON.parse(fs.readFileSync(path.join(root, "vercel.json"), "utf-8"));
  const rewrites = new Map((config.rewrites || []).map((r) => [r.source, r.destination]));
  const redirects = new Map((config.redirects || []).map((r) => [r.source, r.destination]));
  const problems = [];

  for (const route of routes) {
    if (route.file === "404.html") continue;

    const expected = `/${route.file}`.replace(/^\/index\.html$/, "/index.html");
    const actual = rewrites.get(route.url);
    if (actual !== expected) {
      problems.push(`rewrite ${route.url}: expected ${expected}, found ${actual ?? "nothing"}`);
    }

    if (route.url !== "/") {
      const htmlSource = `${route.url}.html`;
      const dest = redirects.get(htmlSource);
      if (dest !== route.url) {
        problems.push(
          `redirect ${htmlSource}: expected ${route.url}, found ${dest ?? "nothing"}`
        );
      }
    }
  }

  // Reverse direction: every hosting rewrite must belong to a real route, so a
  // deleted route cannot linger in vercel.json.
  const knownUrls = new Set(routes.map((route) => route.url));
  for (const source of rewrites.keys()) {
    if (!knownUrls.has(source)) {
      problems.push(`rewrite ${source}: no matching route in the manifest`);
    }
  }

  if (problems.length > 0) {
    throw new Error(
      `vercel.json is out of sync with src/content/routes.js:\n  - ${problems.join("\n  - ")}`
    );
  }
  console.log(`Hosting config matches ${routes.length - 1} public routes.`);
}

const template = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");

const manifest = JSON.parse(
  fs.readFileSync(path.join(distDir, ".vite", "manifest.json"), "utf-8")
);
const assetMap = new Map();
for (const [key, value] of Object.entries(manifest)) {
  if (value && typeof value.file === "string") {
    assetMap.set(`/${key}`, `/${value.file}`);
  }
}

// Head-only tags must not appear inside #root: they would be duplicated when
// the prerendered markup hydrates. SEO.jsx only records head props during SSR,
// so nothing should match this — it stays as a safety net for future edits.
function stripHeadOnlyTags(html) {
  return html
    .replace(/<title[^>]*>[\s\S]*?<\/title>/gi, "")
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<(base|meta|link|noscript)[^>]*\/?>/gi, "");
}

// Vite rewrites imported assets to hashed files; the SSR render still emits the
// dev URL (/src/assets/…), so map it through the build manifest.
function rewriteAssetUrls(html) {
  return html.replace(/(src|href)="(\/src\/assets\/[^"]+)"/g, (match, attr, url) => {
    const mapped = assetMap.get(url);
    return mapped ? `${attr}="${mapped}"` : match;
  });
}

const START = "<!-- ROUTE_SEO_START -->";
const END = "<!-- ROUTE_SEO_END -->";

checkHostingConfig();

for (const route of routes) {
  const { content, head } = render(route.url);

  const startIdx = template.indexOf(START);
  const endIdx = template.indexOf(END);
  if (startIdx === -1 || endIdx === -1 || endIdx <= startIdx) {
    throw new Error("ROUTE_SEO markers not found in dist/index.html");
  }

  const prefix = template.slice(0, startIdx + START.length + 1);
  const suffix = "    " + template.slice(endIdx);
  let html = prefix + head + "\n" + suffix;

  html = html.replace(
    '<div id="root"></div>',
    `<div id="root">${stripHeadOnlyTags(content)}</div>`
  );
  html = rewriteAssetUrls(html);

  const outFile = path.join(distDir, route.file);
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, html, "utf-8");
  console.log(`Prerendered ${route.url} -> ${route.file}`);
}

fs.writeFileSync(path.join(distDir, "sitemap.xml"), buildSitemap(), "utf-8");
console.log("Wrote dist/sitemap.xml");

await server.close();
console.log("Prerendering complete.");
