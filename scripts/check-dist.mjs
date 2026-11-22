// Post-build gate for the static output.
//
// Checks the things a bundler cannot: route/HTML parity, canonical uniqueness,
// internal links that 404 only after deploy, image-manifest drift, OG image
// dimensions, valid JSON-LD, and sitemap lastmod matching the route manifest.
//
// Run after `npm run build`: node scripts/check-dist.mjs

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { routes, SITE_ORIGIN, sitemapRoutes } from "./routes.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");

const problems = [];
const notes = [];

function fail(message) {
  problems.push(message);
}

function existsFile(file) {
  try {
    return fs.statSync(file).isFile();
  } catch {
    return false;
  }
}

function walk(dir, extension) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full, extension);
    return entry.name.endsWith(extension) ? [full] : [];
  });
}

function rel(file) {
  return path.relative(root, file).replace(/\\/g, "/");
}

function decode(value) {
  return value.replace(/&amp;/g, "&").replace(/&quot;/g, '"');
}

function expectedCanonical(route) {
  return route.url === "/" ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${route.url}`;
}

function resolveInternal(target) {
  const clean = decodeURIComponent(decode(target).split(/[?#]/)[0]);
  if (!clean.startsWith("/")) return null;
  if (clean === "/") return path.join(distDir, "index.html");

  const direct = path.join(distDir, clean);
  if (existsFile(direct)) return direct;
  if (existsFile(`${direct}.html`)) return `${direct}.html`;
  if (existsFile(path.join(direct, "index.html"))) return path.join(direct, "index.html");
  return null;
}

function attribute(tag, name) {
  const match = tag.match(new RegExp(`${name}="([^"]*)"`, "i"));
  return match ? decode(match[1]) : null;
}

// ── Route/HTML parity ───────────────────────────────────────────────────────
// Search-console verification files are intentionally public but are not
// routes; ignore them when comparing against the manifest.
const isVerificationFile = (file) => /^google[0-9a-f]+\.html$/i.test(path.basename(file));

const htmlFiles = walk(distDir, ".html").sort();
const routeHtmlFiles = htmlFiles.filter((file) => !isVerificationFile(file));
const expectedFiles = routes.map((route) => path.join(distDir, route.file)).sort();
const expectedSet = new Set(expectedFiles);
const actualSet = new Set(routeHtmlFiles);

for (const file of expectedFiles) {
  if (!actualSet.has(file)) fail(`missing prerendered HTML: ${rel(file)}`);
}
for (const file of routeHtmlFiles) {
  if (!expectedSet.has(file)) fail(`unexpected HTML file in dist: ${rel(file)}`);
}
if (routeHtmlFiles.length !== routes.length) {
  fail(`HTML count ${routeHtmlFiles.length} does not match ${routes.length} manifest routes`);
}

// ── Head metadata, JSON-LD and internal links ───────────────────────────────
const canonicals = new Map();
const titles = new Map();
const descriptions = new Map();
const ogImages = new Set();
const jsonLdByRoute = new Map();
const internalLinks = new Set();

for (const route of routes) {
  const file = path.join(distDir, route.file);
  if (!existsFile(file)) continue;

  const html = fs.readFileSync(file, "utf-8");
  const routeLabel = route.url;

  const titleMatches = [...html.matchAll(/<title[^>]*>([\s\S]*?)<\/title>/gi)];
  if (titleMatches.length !== 1) {
    fail(`${routeLabel}: expected exactly 1 <title>, found ${titleMatches.length}`);
  } else {
    const title = titleMatches[0][1].trim();
    if (!title) fail(`${routeLabel}: empty <title>`);
    if (titles.has(title)) fail(`${routeLabel}: duplicate title also used by ${titles.get(title)}`);
    titles.set(title, routeLabel);
  }

  const descriptionTag = html.match(/<meta[^>]*name="description"[^>]*>/i);
  if (!descriptionTag) {
    fail(`${routeLabel}: missing meta description`);
  } else {
    const description = attribute(descriptionTag[0], "content");
    if (!description) fail(`${routeLabel}: empty meta description`);
    if (descriptions.has(description)) {
      fail(`${routeLabel}: duplicate description also used by ${descriptions.get(description)}`);
    }
    descriptions.set(description, routeLabel);
  }

  const canonicalTags = [...html.matchAll(/<link[^>]*rel="canonical"[^>]*>/gi)].map((m) => m[0]);
  if (route.id === "not-found") {
    if (canonicalTags.length !== 0) fail(`${routeLabel}: 404 must not declare a canonical`);
    if (!/<meta[^>]*name="robots"[^>]*content="noindex/i.test(html)) {
      fail(`${routeLabel}: 404 must be noindex`);
    }
  } else {
    if (canonicalTags.length !== 1) {
      fail(`${routeLabel}: expected exactly 1 canonical, found ${canonicalTags.length}`);
    } else {
      const href = attribute(canonicalTags[0], "href");
      const expected = expectedCanonical(route);
      if (href !== expected) fail(`${routeLabel}: canonical ${href} != ${expected}`);
      if (canonicals.has(href)) fail(`${routeLabel}: canonical duplicates ${canonicals.get(href)}`);
      canonicals.set(href, routeLabel);
    }
  }

  for (const match of html.matchAll(/<meta[^>]*property="og:image"[^>]*>/gi)) {
    const value = attribute(match[0], "content");
    if (value) ogImages.add(value);
  }

  // Internal anchors and asset URLs.
  for (const match of html.matchAll(/\s(?:href|src)="([^"]+)"/gi)) {
    const value = decode(match[1]);
    if (!value.startsWith("/") || value.startsWith("//")) continue;
    if (!resolveInternal(value)) fail(`${routeLabel}: broken internal URL ${value}`);
    else internalLinks.add(value.split(/[?#]/)[0]);
  }
  for (const match of html.matchAll(/\ssrcset="([^"]+)"/gi)) {
    for (const candidate of decode(match[1]).split(",")) {
      const url = candidate.trim().split(/\s+/)[0];
      if (!url || !url.startsWith("/")) continue;
      if (!resolveInternal(url)) fail(`${routeLabel}: broken srcset URL ${url}`);
    }
  }

  const schemas = [];
  for (const match of html.matchAll(
    /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi
  )) {
    try {
      schemas.push(JSON.parse(match[1]));
    } catch (error) {
      fail(`${routeLabel}: invalid JSON-LD (${error.message})`);
    }
  }
  jsonLdByRoute.set(route.url, schemas);
}

// ── Case-study JSON-LD contract ──────────────────────────────────────────────
for (const route of routes.filter((candidate) => candidate.slug)) {
  const schemas = jsonLdByRoute.get(route.url) || [];
  const pages = schemas.filter((schema) => schema["@type"] === "WebPage");
  if (pages.length !== 1) {
    fail(`${route.url}: expected exactly 1 WebPage schema, found ${pages.length}`);
    continue;
  }
  if (pages[0].dateModified !== route.lastmod) {
    fail(
      `${route.url}: WebPage dateModified ${pages[0].dateModified} != route lastmod ${route.lastmod}`
    );
  }

  for (const schema of schemas) {
    if (schema.offers && schema.offers.availability) {
      fail(`${route.url}: free offer must not declare availability`);
    }
  }
}

for (const [url, schemas] of jsonLdByRoute) {
  if (!schemas.some((schema) => schema["@type"] === "Person")) fail(`${url}: missing Person schema`);
  if (!schemas.some((schema) => schema["@type"] === "WebSite")) fail(`${url}: missing WebSite schema`);
}

// ── Image manifest ─────────────────────────────────────────────────────────
const manifestPath = path.join(root, "src", "content", "image-manifest.json");
if (!existsFile(manifestPath)) {
  fail("src/content/image-manifest.json is missing; run: npm run images");
} else {
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));
  let checked = 0;
  for (const [key, entry] of Object.entries(manifest)) {
    for (const candidate of [entry, ...(entry.variants || [])]) {
      const file = path.join(distDir, candidate.src);
      if (!existsFile(file)) fail(`image manifest ${key}: missing ${candidate.src}`);
      else checked += 1;
    }
  }
  notes.push(`${Object.keys(manifest).length} image keys, ${checked} files present in dist`);
}

// ── OG images ──────────────────────────────────────────────────────────────
for (const url of ogImages) {
  const pathname = decodeURIComponent(new URL(url, SITE_ORIGIN).pathname);
  const file = path.join(distDir, pathname);
  if (!existsFile(file)) {
    fail(`og:image ${url} does not exist in dist`);
    continue;
  }
  const meta = await sharp(file).metadata();
  if (meta.width !== 1200 || meta.height !== 630) {
    fail(`${pathname}: og:image is ${meta.width}x${meta.height}, expected 1200x630`);
  }
  const bytes = fs.statSync(file).size;
  if (bytes > 120 * 1024) fail(`${pathname}: og:image is ${(bytes / 1024).toFixed(1)} kB (max 120 kB)`);
}

// ── Sitemap ────────────────────────────────────────────────────────────────
const sitemapFile = path.join(distDir, "sitemap.xml");
if (!existsFile(sitemapFile)) {
  fail("dist/sitemap.xml is missing");
} else {
  const xml = fs.readFileSync(sitemapFile, "utf-8");
  const urls = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((match) => match[1]);
  if (urls.length !== sitemapRoutes().length) {
    fail(`sitemap has ${urls.length} URLs, expected ${sitemapRoutes().length}`);
  }

  const seen = new Set();
  for (const block of urls) {
    const loc = block.match(/<loc>([^<]+)<\/loc>/)?.[1];
    const lastmod = block.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1];
    if (!loc) {
      fail("sitemap entry without <loc>");
      continue;
    }
    if (seen.has(loc)) fail(`sitemap duplicate loc: ${loc}`);
    seen.add(loc);

    const route = sitemapRoutes().find((candidate) => expectedCanonical(candidate) === loc);
    if (!route) {
      fail(`sitemap loc not in route manifest: ${loc}`);
      continue;
    }
    if (lastmod !== route.lastmod) {
      fail(`sitemap lastmod for ${loc}: ${lastmod} != route lastmod ${route.lastmod}`);
    }
    if (lastmod && lastmod === new Date().toISOString().slice(0, 10)) {
      notes.push(`${loc}: lastmod is today (verify it reflects a real content change)`);
    }
  }
}

// ── Report ─────────────────────────────────────────────────────────────────
notes.push(`${routeHtmlFiles.length} route HTML files match ${routes.length} routes`);
notes.push(`${canonicals.size} unique canonicals`);
notes.push(`${internalLinks.size} internal URLs resolved`);
notes.push(`${ogImages.size} OG image references checked`);

for (const note of notes) console.log(`  ${note}`);

if (problems.length > 0) {
  console.error(`\ncheck-dist failed with ${problems.length} problem(s):`);
  for (const problem of problems) console.error(`  - ${problem}`);
  process.exit(1);
}

console.log("\ncheck-dist passed.");
