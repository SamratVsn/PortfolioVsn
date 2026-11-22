// Generates the four case-study Open Graph cards (1200x630 JPEG).
//
// The images are committed so social crawlers get a stable URL without a build
// step at request time. Text is intentionally limited to claims already made on
// each case study: no invented metrics or capabilities.
//
// Run with: npm run og

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "public", "og");

const WIDTH = 1200;
const HEIGHT = 630;
const MAX_BYTES = 120 * 1024;

const CARDS = [
  {
    slug: "tasks",
    eyebrow: "CASE STUDY · ANDROID APP",
    title: "Tasks",
    lines: [
      "A local-first task manager with Pomodoro",
      "focus sessions, categories, reminders,",
      "and dynamic theming.",
    ],
    stack: "Kotlin · Jetpack Compose",
    motif: "focus",
  },
  {
    slug: "themovie",
    eyebrow: "CASE STUDY · ANDROID APP",
    title: "The Movie App",
    lines: [
      "A TMDB client with debounced search,",
      "a watchlist, Firebase sign-in, and",
      "offline caching.",
    ],
    stack: "Kotlin · Jetpack Compose",
    motif: "film",
  },
  {
    slug: "blogvsn",
    eyebrow: "CASE STUDY · WEB PLATFORM",
    title: "BlogVsn",
    lines: [
      "A React 19 frontend for a Blogger-managed",
      "blog, with Google sign-in and a",
      "client-side contact form.",
    ],
    stack: "React · Blogger API · Vercel",
    motif: "browser",
  },
];

const ACCENT = "#a3b18a";
const ACCENT_SOFT = "#c8795a";

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function motifSvg(kind) {
  const stroke = `stroke="${ACCENT}" fill="none"`;

  if (kind === "focus") {
    return `
      <g transform="translate(930 302)">
        <circle r="128" ${stroke} stroke-opacity="0.18" stroke-width="2" />
        <circle r="104" ${stroke} stroke-width="3" />
        <path d="M 0 -104 A 104 104 0 0 1 90 52" ${stroke} stroke-width="10" stroke-linecap="round" stroke-opacity="0.85" />
        <circle cx="74" cy="-73" r="9" fill="${ACCENT_SOFT}" />
        <path d="M -30 2 L -8 24 L 40 -28" ${stroke} stroke-width="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M 0 -136 L 0 -118" ${stroke} stroke-width="6" stroke-linecap="round" />
      </g>`;
  }

  if (kind === "film") {
    const holes = [];
    for (let i = 0; i < 6; i += 1) {
      holes.push(
        `<rect x="${-104 + i * 38}" y="-82" width="20" height="14" rx="3" fill="${ACCENT}" fill-opacity="0.55" />`,
        `<rect x="${-104 + i * 38}" y="68" width="20" height="14" rx="3" fill="${ACCENT}" fill-opacity="0.55" />`
      );
    }
    return `
      <g transform="translate(930 302)">
        <rect x="-150" y="-128" width="300" height="256" rx="24" ${stroke} stroke-opacity="0.18" stroke-width="2" />
        <rect x="-118" y="-104" width="236" height="208" rx="18" ${stroke} stroke-width="3" />
        ${holes.join("\n        ")}
        <path d="M -22 -36 L 42 0 L -22 36 Z" fill="${ACCENT}" fill-opacity="0.9" />
        <circle cx="0" cy="0" r="86" ${stroke} stroke-width="2" stroke-opacity="0.28" />
      </g>`;
  }

  return `
      <g transform="translate(930 302)">
        <rect x="-160" y="-126" width="320" height="252" rx="22" ${stroke} stroke-opacity="0.2" stroke-width="2" />
        <rect x="-140" y="-106" width="280" height="212" rx="16" ${stroke} stroke-width="3" />
        <line x1="-140" y1="-66" x2="140" y2="-66" ${stroke} stroke-width="2" stroke-opacity="0.7" />
        <circle cx="-112" cy="-86" r="7" fill="${ACCENT}" fill-opacity="0.75" />
        <circle cx="-88" cy="-86" r="7" fill="${ACCENT}" fill-opacity="0.45" />
        <circle cx="-64" cy="-86" r="7" fill="${ACCENT_SOFT}" fill-opacity="0.7" />
        <rect x="-108" y="-38" width="156" height="12" rx="6" fill="${ACCENT}" fill-opacity="0.75" />
        <rect x="-108" y="-12" width="216" height="8" rx="4" fill="${ACCENT}" fill-opacity="0.28" />
        <rect x="-108" y="10" width="188" height="8" rx="4" fill="${ACCENT}" fill-opacity="0.28" />
        <rect x="-108" y="32" width="204" height="8" rx="4" fill="${ACCENT}" fill-opacity="0.28" />
        <rect x="-108" y="54" width="132" height="8" rx="4" fill="${ACCENT}" fill-opacity="0.28" />
        <path d="M 74 34 L 108 56 L 74 78 Z" fill="${ACCENT_SOFT}" fill-opacity="0.75" />
      </g>`;
}

function cardSvg(card) {
  const titleSize = card.title.length > 10 ? 72 : 82;
  const lineStart = 384;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#0e1411" />
        <stop offset="1" stop-color="#090d0b" />
      </linearGradient>
      <radialGradient id="glow" cx="82%" cy="16%" r="72%">
        <stop offset="0" stop-color="${ACCENT}" stop-opacity="0.22" />
        <stop offset="0.55" stop-color="${ACCENT}" stop-opacity="0.05" />
        <stop offset="1" stop-color="${ACCENT}" stop-opacity="0" />
      </radialGradient>
      <pattern id="dots" width="26" height="26" patternUnits="userSpaceOnUse">
        <circle cx="1.5" cy="1.5" r="1.2" fill="#ffffff" fill-opacity="0.05" />
      </pattern>
    </defs>

    <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)" />
    <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#glow)" />
    <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#dots)" />
    <rect x="22" y="22" width="${WIDTH - 44}" height="${HEIGHT - 44}" rx="22" fill="none" stroke="#2c3832" stroke-width="1.5" />

    <rect x="72" y="92" width="58" height="4" rx="2" fill="${ACCENT}" />
    <text x="72" y="146" font-family="Consolas, 'Courier New', monospace" font-size="19" letter-spacing="3.2" fill="${ACCENT}">${escapeXml(card.eyebrow)}</text>

    <text x="72" y="266" font-family="'Segoe UI', Arial, sans-serif" font-weight="700" font-size="${titleSize}" letter-spacing="-2" fill="#f3f6f2">${escapeXml(card.title)}</text>

    ${card.lines
      .map(
        (line, index) =>
          `<text x="72" y="${lineStart + index * 42}" font-family="'Segoe UI', Arial, sans-serif" font-size="24" fill="#b9c4bb">${escapeXml(line)}</text>`
      )
      .join("\n    ")}

    ${motifSvg(card.motif)}

    <line x1="72" y1="524" x2="1128" y2="524" stroke="#28332d" stroke-width="1.5" />
    <text x="72" y="566" font-family="'Segoe UI', Arial, sans-serif" font-size="19" fill="#8f9d92">Samrat Parajuli · ${escapeXml(card.stack)}</text>
    <text x="1128" y="566" text-anchor="end" font-family="Consolas, 'Courier New', monospace" font-size="17" letter-spacing="1.6" fill="${ACCENT}">SAMRATPARAJULI0.COM.NP</text>
  </svg>`;
}

async function main() {
  fs.mkdirSync(outDir, { recursive: true });
  let failures = 0;

  for (const card of CARDS) {
    const file = path.join(outDir, `${card.slug}.jpg`);
    const buffer = await sharp(Buffer.from(cardSvg(card)))
      .jpeg({ quality: 88, chromaSubsampling: "4:4:4", mozjpeg: true })
      .toBuffer();

    await fs.promises.writeFile(file, buffer);

    const meta = await sharp(buffer).metadata();
    const kb = buffer.length / 1024;
    const within = buffer.length <= MAX_BYTES && meta.width === WIDTH && meta.height === HEIGHT;
    if (!within) failures += 1;

    console.log(
      `${within ? "ok  " : "FAIL"} og/${card.slug}.jpg — ${meta.width}x${meta.height}, ${kb.toFixed(1)} kB`
    );
  }

  if (failures > 0) {
    throw new Error(`${failures} OG image(s) missed the 1200x630 / 120 kB budget`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
