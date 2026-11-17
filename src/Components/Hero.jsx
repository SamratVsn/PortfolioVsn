import { Link } from "react-router-dom";
import { useReducedMotion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter, FaGoogle } from "react-icons/fa6";
import { ArrowUpRight, Download } from "lucide-react";
import HeroImage from "../assets/Hero_Image.webp";
import AvalokanHome from "../assets/Avalokan/home.png";

const APK_URL =
  "https://github.com/SamratVsn/Avalokan/releases/download/v1.0.0/avalokan1.0.0.apk";

const socials = [
  { href: "https://github.com/SamratVsn", icon: FaGithub, label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/samratvsn/",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  { href: "https://x.com/SamratVsn", icon: FaXTwitter, label: "X / Twitter" },
  { href: "https://g.dev/samratparajuli", icon: FaGoogle, label: "Google Developer profile" },
];

// Typography-only proof line: verified facts, no counters or cards.
const proofPoints = [
  {
    label: "Latest release",
    value: "Avalokan v1.0.0",
    meta: "Kotlin · Compose · Room · Hilt",
  },
  { label: "Writing", value: "5 published articles" },
  { label: "Availability", value: "Open to Android roles" },
];

function DeviceFrame() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="device-bezel rounded-[1.6rem] border border-border-strong p-[5px] sm:rounded-[1.85rem] sm:p-[6px]">
      <div
        className="relative overflow-hidden rounded-[1.25rem] bg-black sm:rounded-[1.5rem]"
        style={{ aspectRatio: "9 / 19.2" }}
      >
        {reduceMotion ? (
          <img
            src={AvalokanHome}
            alt="Avalokan home screen: Boudhanath Stupa story of the day, historical gems, and local events"
            className="h-full w-full object-cover object-top"
            width={540}
            height={1170}
            loading="lazy"
          />
        ) : (
          <video
            src="/media/avalokan-launch.mp4"
            poster="/media/avalokan-poster.jpg"
            className="h-full w-full object-cover"
            muted
            loop
            playsInline
            autoPlay
            preload="metadata"
            aria-label="Avalokan launch film captured from a real Android emulator"
          />
        )}
        {/* Selfie camera punch-hole, drawn so the frame reads as a Pixel-class device */}
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-[2.5%] h-1 w-1 -translate-x-1/2 rounded-full bg-black/70 ring-1 ring-white/10"
        />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative px-5 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:pb-20 lg:pt-16"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-end gap-12 xl:max-w-7xl 2xl:max-w-[90rem] min-[1920px]:max-w-[100rem] lg:grid-cols-[minmax(0,1fr)_minmax(0,28rem)] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_minmax(0,31rem)]">
        {/* ── Copy ─────────────────────────────────────────────────────── */}
        <div className="hero-enter min-w-0">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-sand">
            Samrat Parajuli · Kathmandu, Nepal
          </p>

          <h1
            id="hero-heading"
            className="mt-5 max-w-[19ch] text-balance text-[2.15rem] font-semibold leading-[1.06] tracking-[-0.03em] text-paper xs:text-[2.4rem] sm:text-[2.9rem] lg:text-[3.15rem] xl:text-[3.5rem]"
          >
            Native Android apps built for real-world{" "}
            <span className="text-accent-soft">reliability.</span>
          </h1>

          <p
            id="hero-intro"
            className="mt-5 max-w-[46ch] text-[14.5px] leading-relaxed text-slate-400 sm:text-[15.5px]"
          >
            Android developer crafting Kotlin, Jetpack Compose, and Material 3
            applications—from offline-first heritage tools built for
            mountain-road connectivity to clean daily utilities. Learning in
            public and sharing what I ship.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-[13.5px] font-semibold text-ink transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-soft active:scale-[0.99]"
            >
              View Projects
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
            <Link
              to="/projects/avalokan"
              className="inline-flex items-center gap-2 rounded-lg border border-border-strong px-5 py-3 text-[13.5px] font-medium text-slate-200 transition-colors hover:border-accent-border hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-soft"
            >
              Avalokan Case Study
            </Link>
          </div>

          {/* Proof line */}
          <ul className="mt-8 flex flex-wrap items-center gap-y-2 border-t border-border pt-5 text-[12px] leading-relaxed text-slate-500">
            {proofPoints.map((point, index) => (
              <li key={point.label} className="flex items-baseline">
                {index > 0 && (
                  <span aria-hidden="true" className="px-3 text-slate-700">
                    ·
                  </span>
                )}
                <span>
                  <span className="text-slate-500">{point.label}: </span>
                  <span className="font-medium text-slate-200">{point.value}</span>
                  {point.meta && (
                    <span className="text-slate-500"> ({point.meta})</span>
                  )}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex items-center gap-5">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label} (opens in a new tab)`}
                className="rounded text-slate-500 transition-colors hover:text-sand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-soft"
              >
                <Icon size={16} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {/* ── Portrait + the app that was actually shipped ─────────────── */}
        <div className="hero-enter-visual min-w-0 w-full">
          <div className="mx-auto flex w-full max-w-[27rem] items-end justify-center gap-3 sm:gap-5 lg:mr-0">
            <img
              src={HeroImage}
              alt="Portrait of Samrat Parajuli, Android developer"
              width={1127}
              height={1396}
              fetchPriority="high"
              decoding="async"
              className="portrait-fade block h-auto w-[56%] max-w-[16.5rem] shrink-0 object-contain sm:max-w-[18rem] lg:max-w-[19rem] xl:max-w-[21rem]"
            />

            <div className="w-[36%] max-w-[9.5rem] shrink-0 pb-5 sm:pb-7">
              <DeviceFrame />
            </div>
          </div>

          <div className="mx-auto mt-4 flex w-full max-w-[27rem] flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t border-border pt-3 lg:mr-0">
            <Link
              to="/projects/avalokan"
              className="group inline-flex items-center gap-1.5 rounded text-[11.5px] text-slate-400 transition-colors hover:text-sand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-soft"
            >
              <span
                aria-hidden="true"
                className="h-1 w-1 shrink-0 rounded-full bg-accent"
              />
              Avalokan v1.0.0 · Real emulator capture
              <ArrowUpRight
                size={12}
                aria-hidden="true"
                className="opacity-60 transition-opacity group-hover:opacity-100"
              />
            </Link>
            <a
              href={APK_URL}
              className="inline-flex items-center gap-1.5 rounded text-[11.5px] font-medium text-slate-400 transition-colors hover:text-sand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-soft"
            >
              <Download size={12} aria-hidden="true" />
              APK · 20 MB
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
