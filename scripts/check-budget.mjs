// Enforces the Phase 4 JavaScript budgets against the real emitted chunks.
//
// Homepage initial JS  <= 110 kB gzip
// Case-study lazy JS   <=  40 kB gzip extra (chunk + its static imports)
//
// Vite's manifest is the source of truth; sizes are measured on disk, not the
// values printed during the build. Run after `npm run build`.

import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");
const manifestFile = path.join(distDir, ".vite", "manifest.json");

const HOME_BUDGET = 110 * 1024;
const CASE_STUDY_BUDGET = 40 * 1024;

const CASE_STUDY_CHUNKS = {
  avalokan: "src/Components/Avalokan.jsx",
  todo: "src/Components/Tasks.jsx",
  themovie: "src/Components/TheMovie.jsx",
  juicetracker: "src/Components/JuiceTracker.jsx",
  kathmandu: "src/Components/Kathmandu.jsx",
  sms: "src/Components/SMS.jsx",
  bmsk: "src/Components/BMSK.jsx",
  blogvsn: "src/Components/BlogVsn.jsx",
  this: "src/Components/This.jsx",
};

if (!fs.existsSync(manifestFile)) {
  console.error("dist/.vite/manifest.json is missing; run: npm run build");
  process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(manifestFile, "utf-8"));

function gzipSize(file) {
  const absolute = path.join(distDir, file);
  if (!fs.existsSync(absolute)) throw new Error(`manifest references missing file: ${file}`);
  return zlib.gzipSync(fs.readFileSync(absolute), { level: 9 }).length;
}

function closure(key, seen = new Set()) {
  if (seen.has(key)) return seen;
  const entry = manifest[key];
  if (!entry) return seen;
  seen.add(key);
  for (const imported of entry.imports || []) closure(imported, seen);
  return seen;
}

function sizeOf(keys) {
  const files = new Set([...keys].map((key) => manifest[key].file));
  let total = 0;
  for (const file of files) total += gzipSize(file);
  return total;
}

function kb(bytes) {
  return `${(bytes / 1024).toFixed(1)} kB`;
}

let failed = false;

const homeKeys = closure("index.html");
const homeSize = sizeOf(homeKeys);
console.log(`Homepage initial JS: ${kb(homeSize)} gzip (budget ${kb(HOME_BUDGET)})`);
if (homeSize > HOME_BUDGET) {
  failed = true;
  console.error("  FAIL homepage JS exceeds budget");
}

console.log("\nCase-study extra lazy JS:");
for (const [id, key] of Object.entries(CASE_STUDY_CHUNKS)) {
  if (!manifest[key]) {
    failed = true;
    console.error(`  FAIL ${id}: ${key} not found in manifest`);
    continue;
  }
  const keys = closure(key);
  keys.delete("index.html");
  const size = sizeOf(keys);
  const mark = size <= CASE_STUDY_BUDGET ? "ok  " : "FAIL";
  if (size > CASE_STUDY_BUDGET) failed = true;
  console.log(
    `  ${mark} ${id.padEnd(12)} ${kb(size).padStart(8)} / ${kb(CASE_STUDY_BUDGET)} (${keys.size} chunks)`
  );
}

if (failed) process.exit(1);
console.log("\ncheck-budget passed.");
