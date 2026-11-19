import { useState } from "react";
import { Link } from "react-router-dom";
import {
  SiKotlin,
  SiJetpackcompose,
  SiFirebase,
  SiMaterialdesign,
} from "react-icons/si";
import { ArrowUpRight, Database, Download, Play, Syringe } from "lucide-react";
import HeroImage from "../assets/Hero_Image.webp";
import Button from "./ui/Button";
import Container from "./ui/Container";
import { SPECIALTY_PLAIN, TAGLINE } from "../content/site";

const APK_URL =
  "https://github.com/SamratVsn/Avalokan/releases/download/v1.0.0/avalokan1.0.0.apk";

// Credibility strip — brand marks where a real one exists, neutral glyphs for
// Room and Hilt (neither library has an official logo).
const stack = [
  { name: "Kotlin", Icon: SiKotlin },
  { name: "Jetpack Compose", Icon: SiJetpackcompose },
  { name: "Firebase", Icon: SiFirebase },
  { name: "Room", Icon: Database },
  { name: "Hilt", Icon: Syringe },
  { name: "Material 3", Icon: SiMaterialdesign },
];

// ── Environment ─────────────────────────────────────────────────────────────
// A single Himalayan ridge line, a nearer foothill band, and a low Kathmandu
// roofline. Drawn as flat silhouettes so they read as distance, not wallpaper.
// Three broad massifs rather than an even sawtooth, so the ridge reads as a
// landscape instead of a chart.
const FAR_RIDGE =
  "M0 372 L86 356 L142 364 L214 330 L268 344 L318 300 L362 262 L404 292 L452 318 L510 306 L566 338 L620 308 L668 268 L712 300 L764 282 L818 312 L870 296 L918 322 L972 288 L1020 240 L1068 284 L1112 262 L1160 300 L1210 288 L1258 316 L1306 298 L1362 324 L1404 310 L1440 328 L1440 460 L0 460 Z";

const FAR_RIDGE_EDGE =
  "M0 372 L86 356 L142 364 L214 330 L268 344 L318 300 L362 262 L404 292 L452 318 L510 306 L566 338 L620 308 L668 268 L712 300 L764 282 L818 312 L870 296 L918 322 L972 288 L1020 240 L1068 284 L1112 262 L1160 300 L1210 288 L1258 316 L1306 298 L1362 324 L1404 310 L1440 328";

const MID_RIDGE =
  "M0 424 L120 410 L236 420 L352 402 L470 418 L588 406 L700 420 L820 408 L940 422 L1060 410 L1180 423 L1300 412 L1440 424 L1440 460 L0 460 Z";

// A higher, hazier range that sits behind the portrait on wide screens.
const HIGH_RIDGE =
  "M0 300 L0 214 L74 192 L128 206 L198 148 L258 178 L318 118 L378 158 L432 138 L498 94 L558 142 L608 120 L678 158 L730 130 L800 172 L858 150 L900 168 L900 300 Z";

const HIGH_RIDGE_EDGE =
  "M0 214 L74 192 L128 206 L198 148 L258 178 L318 118 L378 158 L432 138 L498 94 L558 142 L608 120 L678 158 L730 130 L800 172 L858 150 L900 168";

function Pagoda({ cx }) {
  return (
    <g>
      <rect x={cx - 70} y={150} width={140} height={10} />
      <polygon
        points={`${cx - 84},150 ${cx - 46},132 ${cx + 46},132 ${cx + 84},150`}
      />
      <rect x={cx - 46} y={132} width={92} height={18} />
      <polygon
        points={`${cx - 64},132 ${cx - 34},116 ${cx + 34},116 ${cx + 64},132`}
      />
      <rect x={cx - 34} y={116} width={68} height={16} />
      <polygon
        points={`${cx - 44},116 ${cx - 22},102 ${cx + 22},102 ${cx + 44},116`}
      />
      <rect x={cx - 2} y={84} width={4} height={18} />
    </g>
  );
}

function Stupa({ cx }) {
  return (
    <g>
      <rect x={cx - 56} y={152} width={112} height={8} />
      <path d={`M ${cx - 46} 160 A 46 46 0 0 1 ${cx + 46} 160 Z`} />
      <rect x={cx - 14} y={104} width={28} height={12} />
      <polygon points={`${cx - 8},104 ${cx},66 ${cx + 8},104`} />
    </g>
  );
}

function HeroBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Atmosphere: a cool forest gradient lifting toward the top, with a
          single wide sage wash coming in from the upper left. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #121b17 0%, #0e1311 46%, #0e1311 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(108deg, rgba(107,143,122,0.16) 0%, rgba(107,143,122,0.05) 30%, rgba(14,19,17,0) 58%)",
        }}
      />

      {/* A faint band of warm light where the ridges meet the valley — the
          only warm note in the scene, echoing the portrait's key light. */}
      <div
        className="absolute inset-x-0 bottom-[20%] h-28"
        style={{
          background:
            "linear-gradient(180deg, rgba(232,215,183,0) 0%, rgba(232,215,183,0.055) 58%, rgba(232,215,183,0) 100%)",
          WebkitMaskImage:
            "linear-gradient(90deg, rgba(0,0,0,0) 6%, rgba(0,0,0,0.7) 42%, rgba(0,0,0,1) 70%)",
          maskImage:
            "linear-gradient(90deg, rgba(0,0,0,0) 6%, rgba(0,0,0,0.7) 42%, rgba(0,0,0,1) 70%)",
        }}
      />

      {/* Higher, hazier range behind the portrait — reads as distance */}
      <svg
        viewBox="0 0 900 300"
        preserveAspectRatio="none"
        className="absolute bottom-[26%] right-0 hidden h-[17rem] w-[64%] sm:block"
        style={{
          filter: "blur(1px)",
          opacity: 0.55,
          WebkitMaskImage:
            "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 34%, rgba(0,0,0,1) 58%)",
          maskImage:
            "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 34%, rgba(0,0,0,1) 58%)",
        }}
      >
        <path d={HIGH_RIDGE} fill="#1a2620" />
        <path
          d={HIGH_RIDGE_EDGE}
          fill="none"
          stroke="#e8d7b7"
          strokeOpacity="0.12"
          strokeWidth="1"
        />
      </svg>

      {/* Far Himalaya — faded out on the left so the copy column stays quiet */}
      <svg
        viewBox="0 0 1440 460"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 h-[46%] max-h-[22rem] w-full"
        style={{
          WebkitMaskImage:
            "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 26%, rgba(0,0,0,1) 52%)",
          maskImage:
            "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 26%, rgba(0,0,0,1) 52%)",
        }}
      >
        <path d={FAR_RIDGE} fill="#1a251f" opacity="0.9" />
        <path
          d={FAR_RIDGE_EDGE}
          fill="none"
          stroke="#e8d7b7"
          strokeOpacity="0.18"
          strokeWidth="1"
        />
      </svg>

      {/* Foothills — nearer, darker, lower contrast */}
      <svg
        viewBox="0 0 1440 460"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 h-[30%] max-h-[14rem] w-full"
        style={{
          WebkitMaskImage:
            "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,1) 56%)",
          maskImage:
            "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,1) 56%)",
        }}
      >
        <path d={MID_RIDGE} fill="#101815" />
      </svg>

      {/* Kathmandu roofline — tiered pagodas and a stupa dome, kept as a
          whisper of skyline rather than a cultural illustration. */}
      <svg
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 h-32 w-full"
      >
        <g fill="#080c0a" opacity="0.92">
          <rect x={0} y={122} width={132} height={38} />
          <rect x={142} y={112} width={94} height={48} />
          <rect x={246} y={128} width={118} height={32} />
          <rect x={374} y={106} width={82} height={54} />
          <rect x={466} y={120} width={126} height={40} />
          <rect x={812} y={114} width={104} height={46} />
          <rect x={926} y={126} width={88} height={34} />
          <rect x={1024} y={108} width={118} height={52} />
          <rect x={1152} y={120} width={104} height={40} />
          <rect x={1266} y={110} width={174} height={50} />
          <Stupa cx={186} />
          <Pagoda cx={712} />
          <Pagoda cx={1382} />
        </g>
      </svg>

      {/* Fog at the very bottom so the roofline dissolves into the page */}
      <div
        className="absolute inset-x-0 bottom-0 h-20"
        style={{
          background:
            "linear-gradient(180deg, rgba(14,19,17,0) 0%, rgba(14,19,17,0.6) 62%, #0e1311 100%)",
        }}
      />
    </div>
  );
}

// ── The shipped app, inside a restrained Pixel-class body ───────────────────
// The launch film is never fetched until the visitor asks for it. Until then
// the device shows the still poster, so the homepage stays light on first load.
function DeviceFrame() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="device-bezel relative rounded-[1.9rem] p-[5px] shadow-[0_26px_60px_-26px_rgba(0,0,0,0.95)] ring-1 ring-white/[0.08] sm:rounded-[2.1rem] sm:p-[6px]">
      <div
        className="relative overflow-hidden rounded-[1.55rem] bg-black sm:rounded-[1.7rem]"
        style={{ aspectRatio: "9 / 19.2" }}
      >
        {playing ? (
          <video
            src="/media/avalokan-launch.mp4"
            poster="/media/avalokan-poster.jpg"
            className="h-full w-full object-cover"
            controls
            autoPlay
            playsInline
            preload="metadata"
            aria-label="Avalokan 22-second launch film captured from a real Android emulator"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group relative block h-full w-full cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent-soft"
            aria-label="Play the 22-second Avalokan launch film"
          >
            <img
              src="/media/avalokan-poster.jpg"
              alt="Avalokan home screen: Boudhanath Stupa story of the day, historical gems, and local events"
              className="h-full w-full object-cover object-top"
              loading="lazy"
              decoding="async"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 grid place-items-center bg-black/35 transition-colors group-hover:bg-black/25"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-paper/90 text-ink shadow-lg">
                <Play size={18} fill="currentColor" className="ml-0.5" />
              </span>
            </span>
          </button>
        )}
        {/* Punch-hole camera */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[2.2%] h-1 w-1 -translate-x-1/2 rounded-full bg-black/80 ring-1 ring-white/15"
        />
      </div>

      {/* Glass reflection — a single restrained diagonal, not a glow */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[1.9rem] sm:rounded-[2.1rem]"
        style={{
          background:
            "linear-gradient(126deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.02) 16%, rgba(255,255,255,0) 32%)",
        }}
      />

      {/* Side keys */}
      <span
        aria-hidden="true"
        className="absolute -right-[2px] top-[20%] h-9 w-[2px] rounded-r-full bg-white/20"
      />
      <span
        aria-hidden="true"
        className="absolute -right-[2px] top-[34%] h-5 w-[2px] rounded-r-full bg-white/15"
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden pb-16 pt-11 sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-20"
    >
      <HeroBackdrop />

      <Container className="relative grid grid-cols-1 items-center gap-14 lg:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)] lg:gap-10 xl:gap-14">
        {/* ── Introduction ─────────────────────────────────────────────── */}
        <div className="hero-enter min-w-0 lg:pb-6">
          <p className="flex items-center gap-3 font-mono text-label uppercase tracking-[0.22em] text-sand">
            <span
              aria-hidden="true"
              className="h-px w-7 shrink-0 bg-sand/45"
            />
            Samrat Parajuli · Kathmandu, Nepal
          </p>

          <h1
            id="hero-heading"
            className="mt-6 text-balance text-display font-semibold text-paper"
          >
            {"Native Android apps"}
            <br className="hidden sm:block" />
            {" built for "}
            <span className="text-accent-soft">
              <span className="whitespace-nowrap">real-world</span>
              {" reliability."}
            </span>
          </h1>

          <p
            id="hero-intro"
            className="mt-6 max-w-[46ch] text-body text-slate-400"
          >
            {TAGLINE} My deepest specialism is {SPECIALTY_PLAIN}, with product
            thinking across the data model, interface, and the build that ships
            it.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button to="/projects" size="md">
              View Projects
              <ArrowUpRight size={15} aria-hidden="true" />
            </Button>
            <Button to="/projects/avalokan" variant="secondary" size="md">
              Avalokan Case Study
            </Button>
          </div>

          {/* Technical signature */}
          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-border pt-5">
            <span className="font-mono text-label font-medium uppercase tracking-[0.2em] text-slate-500">
              Core stack
            </span>
            {stack.map(({ name, Icon }) => (
              <span
                key={name}
                className="inline-flex items-center gap-1.5 text-small font-medium text-slate-300"
              >
                <Icon
                  size={12}
                  aria-hidden="true"
                  className="shrink-0 text-accent-soft/85"
                />
                {name}
              </span>
            ))}
          </div>
        </div>

        {/* ── Portrait and the app that was actually shipped ───────────── */}
        <div className="hero-enter-visual relative min-w-0">
          <div className="relative mx-auto w-full max-w-[23rem] sm:max-w-[30rem] lg:max-w-none">
            <div className="relative h-[23rem] sm:h-[29rem] lg:h-[33rem] xl:h-[36rem]">
              {/* A single sweeping line, held inside the visual column so it
                  never crosses the copy. It echoes the ridge behind it. */}
              <svg
                aria-hidden="true"
                viewBox="0 0 600 600"
                preserveAspectRatio="none"
                className="pointer-events-none absolute inset-0 h-full w-full"
              >
                <path
                  d="M-40 596 C 120 556 250 428 348 300 C 418 210 496 132 640 74"
                  fill="none"
                  stroke="var(--p-accent-soft)"
                  strokeOpacity="0.22"
                  strokeWidth="1"
                />
                <path
                  d="M-40 620 C 128 584 262 456 360 326 C 430 236 508 156 642 96"
                  fill="none"
                  stroke="var(--p-accent-soft)"
                  strokeOpacity="0.08"
                  strokeWidth="1"
                />
              </svg>

              {/* Ground shadow — anchors the figure in the scene */}
              <div
                aria-hidden="true"
                className="absolute bottom-2 left-[6%] h-6 w-[62%] rounded-[50%] bg-black/55 blur-lg"
              />

              <img
                src={HeroImage}
                alt="Portrait of Samrat Parajuli, product-minded systems and application engineer"
                width={1127}
                height={1396}
                fetchPriority="high"
                decoding="async"
                className="portrait-fade absolute bottom-0 left-0 h-[94%] w-auto max-w-none object-contain object-bottom brightness-[0.95] saturate-[0.94] contrast-[1.03] drop-shadow-[0_24px_44px_rgba(0,0,0,0.45)] lg:h-full"
              />

              <div className="absolute bottom-8 right-0 z-10 w-[8.25rem] sm:bottom-10 sm:w-[9.5rem] lg:bottom-14 lg:w-[11rem] xl:w-[12rem]">
                <DeviceFrame />
              </div>
            </div>

            {/* Caption + APK, set like a plate caption rather than a card */}
            <div className="mt-5 flex flex-wrap items-end justify-between gap-x-6 gap-y-3 border-t border-border pt-4">
              <Link
                to="/projects/avalokan"
                className="group min-w-0 rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-soft"
              >
                <span className="flex items-center gap-2 font-mono text-label font-medium uppercase tracking-[0.18em] text-sand">
                  <span
                    aria-hidden="true"
                    className="h-1 w-1 shrink-0 rounded-full bg-accent"
                  />
                  Avalokan · v1.0.0 Released
                </span>
                <span className="mt-1.5 flex items-center gap-1 text-small text-slate-400 transition-colors group-hover:text-paper">
                  Offline-first Nepal Heritage Explorer
                  <ArrowUpRight
                    size={12}
                    aria-hidden="true"
                    className="shrink-0 opacity-60 transition-opacity group-hover:opacity-100"
                  />
                </span>
              </Link>
              <a
                href={APK_URL}
                aria-label="Download Avalokan v1.0.0 APK · 20 MB"
                className="inline-flex items-center gap-1.5 rounded text-small font-medium text-slate-400 transition-colors hover:text-sand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-soft"
              >
                <Download size={12} aria-hidden="true" />
                APK · 20 MB
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
