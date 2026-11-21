// Build-time image optimisation, run manually before committing.
//
// Source renders live in src/assets and stay in the repository for
// reproducibility. This script emits responsive WebP variants into public/img
// at stable URLs (no content hashing, so the manifest and markup can reference
// them) and writes src/content/image-manifest.json.
//
// Usage: npm run images
//
// The script only processes files that the app actually references, either
// through a direct `assets/...` import (legacy) or an `image("key")` lookup.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const assetsDir = path.join(root, "src", "assets");
const outDir = path.join(root, "public", "img");
const manifestPath = path.join(root, "src", "content", "image-manifest.json");

const RASTER = /\.(png|jpe?g|webp|avif)$/i;
const WIDTHS = [480, 960];
const QUALITY = 74;
const MAX_BYTES = 120 * 1024;

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else files.push(full);
  }
  return files;
}

function slug(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// "Avalokan/home.png" -> "avalokan-home"; "Hero_Image.webp" -> "hero-image".
function keyFor(file) {
  const rel = path.relative(assetsDir, file).replace(/\\/g, "/");
  const ext = path.extname(rel);
  return slug(rel.slice(0, -ext.length));
}

const assetFiles = walk(assetsDir).filter((file) => RASTER.test(file));
const byKey = new Map(assetFiles.map((file) => [keyFor(file), file]));

// Every source file referenced by the app.
const sources = new Set();
const sourceFiles = walk(path.join(root, "src")).filter((file) =>
  /\.(jsx?|mjs)$/.test(file)
);
for (const file of sourceFiles) {
  const text = fs.readFileSync(file, "utf8");
  for (const match of text.matchAll(/from\s+['"]([^'"]*assets\/[^'"]+)['"]/g)) {
    sources.add(path.resolve(path.dirname(file), match[1]));
  }
  for (const match of text.matchAll(/\bimage\(\s*['"]([^'"]+)['"]\s*\)/g)) {
    const source = byKey.get(match[1]);
    if (!source) {
      throw new Error(`image("${match[1]}") has no matching file in src/assets`);
    }
    sources.add(source);
  }
}

if (!sources.size) {
  throw new Error("No image sources found");
}

fs.mkdirSync(outDir, { recursive: true });

const manifest = {};
const overBudget = [];
let totalBytes = 0;

for (const file of [...sources].sort()) {
  const key = keyFor(file);
  const image = sharp(file);
  const meta = await image.metadata();
  if (!meta.width || !meta.height) {
    throw new Error(`Could not read dimensions for ${file}`);
  }

  const widths = WIDTHS.filter((width) => width < meta.width);
  widths.push(Math.min(meta.width, WIDTHS[WIDTHS.length - 1]));

  const variants = [];
  for (const width of [...new Set(widths)].sort((a, b) => a - b)) {
    const outName = `${key}-${width}.webp`;
    const outFile = path.join(outDir, outName);
    const info = await sharp(file)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: QUALITY, effort: 5, smartSubsample: true })
      .toFile(outFile);

    const bytes = fs.statSync(outFile).size;
    totalBytes += bytes;
    if (bytes > MAX_BYTES) {
      overBudget.push(`${outName} ${(bytes / 1024).toFixed(1)} kB`);
    }

    variants.push({
      src: `/img/${outName}`,
      width: info.width,
      height: info.height,
      bytes,
    });
  }

  const largest = variants[variants.length - 1];
  manifest[key] = {
    src: largest.src,
    width: largest.width,
    height: largest.height,
    variants,
  };
}

const sorted = Object.fromEntries(
  Object.keys(manifest)
    .sort()
    .map((key) => [key, manifest[key]])
);

fs.writeFileSync(manifestPath, `${JSON.stringify(sorted, null, 2)}\n`);

console.log(
  `Wrote ${Object.keys(sorted).length} entries to src/content/image-manifest.json`
);
console.log(
  `${Object.values(sorted).reduce((n, image) => n + image.variants.length, 0)} WebP variants, ` +
    `${(totalBytes / 1024 / 1024).toFixed(2)} MB total`
);

if (overBudget.length) {
  console.error(`Variants over ${MAX_BYTES / 1024} kB:`);
  for (const line of overBudget) console.error(`  ${line}`);
  process.exitCode = 1;
}
