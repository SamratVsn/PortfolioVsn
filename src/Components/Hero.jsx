import { useId } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter, FaGoogle } from "react-icons/fa6";
import {
  ArrowUpRight,
  Calendar,
  Layers,
  Sparkles,
  GraduationCap,
  Rocket,
  Code2,
  PenLine,
} from "lucide-react";
import HeroImage from "../assets/Hero_Image.png";

// ── Data ────────────────────────────────────────────────────────────────────
const techBadges = [
  { label: "Kotlin", dot: "#7F52FF" },
  { label: "Jetpack Compose", dot: "#4285F4" },
  { label: "Android", dot: "#3DDC84" },
];

const stats = [
  { icon: Calendar, value: "1+ Yrs", label: "Dev Experience" },
  { icon: Rocket, value: "10+", label: "Completed Projects" },
  { icon: PenLine, value: "4+", label: "Published Articles" },
  { icon: Code2, value: "30+", label: "Public Repositories" },
];

const socials = [
  { href: "https://github.com/SamratVsn", icon: FaGithub, label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/samratvsn/",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  { href: "https://x.com/SamratVsn", icon: FaXTwitter, label: "X / Twitter" },
  { href: "https://g.dev/samratparajuli", icon: FaGoogle, label: "GoogleDev" },
];

const taskItems = [
  { label: "Learn Jetpack Compose", done: true },
  { label: "Build Movie App", done: true },
  { label: "Write Tech Blog", done: false },
  { label: "Improve UI/UX", done: false },
];

function AndroidMark({ className = "w-3.5 h-3.5 sm:w-4 sm:h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.6 9.48l1.84-3.18a.5.5 0 00-.87-.5l-1.87 3.23a11.44 11.44 0 00-9.4 0L5.43 5.8a.5.5 0 10-.87.5l1.84 3.18A10.9 10.9 0 001 18h22a10.9 10.9 0 00-5.4-8.52zM7 15a1 1 0 110-2 1 1 0 010 2zm10 0a1 1 0 110-2 1 1 0 010 2z" />
    </svg>
  );
}

function KotlinMark({ className = "w-3.5 h-3.5 sm:w-4 sm:h-4" }) {
  const gradId = useId();
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M3 3H21L12 12L21 21H3V3Z" fill={`url(#${gradId})`} />
      <defs>
        <linearGradient
          id={gradId}
          x1="3"
          y1="3"
          x2="21"
          y2="21"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B98CFF" />
          <stop offset="0.5" stopColor="#7F52FF" />
          <stop offset="1" stopColor="#4285F4" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function ComposeMark({ className = "w-3.5 h-3.5 sm:w-4 sm:h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 2L21 7V17L12 22L3 17V7L12 2Z"
        stroke="#4285F4"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M12 2V22M3 7L12 12M21 7L12 12"
        stroke="#4285F4"
        strokeWidth="1.1"
        strokeLinejoin="round"
        opacity="0.55"
      />
    </svg>
  );
}

function CodeCard({ compact = false }) {
  return (
    <div
      className={`rounded-xl border border-slate-800/70 bg-[#0A101F]/95 backdrop-blur-xl shadow-[0_0_28px_-12px_rgba(59,130,246,0.4)] overflow-hidden ${
        compact ? "w-[132px]" : "w-[175px] lg:w-[195px]"
      }`}
    >
      <div
        className={`flex items-center gap-1.5 border-b border-slate-800/60 ${compact ? "px-2 py-1.5" : "px-3 py-2"}`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
        <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
        <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
        {!compact && (
          <span className="ml-1 text-[9px] text-slate-600 font-mono">
            Greeting.kt
          </span>
        )}
      </div>
      <pre
        className={`font-mono overflow-hidden ${compact ? "px-2 py-1.5 text-[7px] leading-[1.5]" : "px-3 py-2.5 text-[9px] leading-[1.6]"}`}
      >
        <code>
          <span className="text-[#3B82F6]">@Composable</span>
          {"\n"}
          <span className="text-slate-500">fun</span>{" "}
          <span className="text-[#93C5FD]">Greeting</span>
          <span className="text-slate-400">
            ({compact ? "" : "name: String"}) {"{"}
          </span>
          {"\n"}
          {"  "}
          <span className="text-[#93C5FD]">Text</span>
          <span className="text-slate-400">(</span>
          {!compact && "\n    text = "}
          <span className="text-emerald-400">
            "Hi{compact ? "!" : ", $name!"}"
          </span>
          {!compact && <span className="text-slate-400">,</span>}
          {!compact &&
            "\n    style = MaterialTheme\n      .typography.headlineMedium\n  "}
          <span className="text-slate-400">)</span>
          {"\n"}
          <span className="text-slate-400">{"}"}</span>
        </code>
      </pre>
    </div>
  );
}

function TasksCard({ compact = false }) {
  const items = compact ? taskItems.slice(0, 3) : taskItems;
  return (
    <div
      className={`rounded-2xl border border-slate-800/70 bg-[#0A101F]/95 backdrop-blur-xl shadow-[0_0_28px_-12px_rgba(59,130,246,0.4)] ${
        compact ? "w-[108px] p-1.5" : "w-[142px] p-2"
      }`}
    >
      <div
        className={`rounded-xl border border-slate-800/50 bg-[#020617] ${compact ? "px-2.5 py-2.5" : "px-3 py-3"}`}
      >
        <p
          className={`font-semibold text-white ${compact ? "text-[8px] mb-1.5" : "text-[9px] mb-2"}`}
        >
          My Tasks
        </p>
        <ul className={compact ? "space-y-1" : "space-y-1.5"}>
          {items.map((t) => (
            <li key={t.label} className="flex items-center gap-1.5">
              <span
                className={`rounded-[3px] border flex items-center justify-center shrink-0 ${
                  compact ? "w-1.5 h-1.5" : "w-2 h-2"
                } ${t.done ? "bg-[#3B82F6] border-[#3B82F6]" : "border-slate-700"}`}
              />
              <span
                className={`leading-tight ${compact ? "text-[6.5px]" : "text-[7.5px]"} ${t.done ? "text-slate-500 line-through" : "text-slate-300"}`}
              >
                {t.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function DesktopHeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative inline-block">
      {/* depth glow, scales with the image's rendered box */}
      <div
        className="absolute rounded-full blur-3xl pointer-events-none"
        style={{
          width: "85%",
          height: "70%",
          left: "50%",
          top: "35%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.18) 0%, rgba(34,211,238,0.05) 45%, rgba(59,130,246,0) 72%)",
          zIndex: 0,
        }}
      />

      {/* the full portrait — natural aspect ratio, nothing cropped or masked */}
      <img
        src={HeroImage}
        alt="Full portrait of Samrat Parajuli, Android app developer"
        className="relative z-10 block w-[340px] sm:w-[390px] lg:w-[420px] xl:w-[460px] h-auto object-contain"
      />

      {/* code card — hugs the top-right corner, above the head */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="absolute -top-6 -right-4 xl:-right-10 z-20"
      >
        <CodeCard />
      </motion.div>

      {/* Kotlin — level with the torso, hugging the left edge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={
          reduceMotion
            ? { opacity: 1, scale: 1 }
            : { opacity: 1, scale: 1, y: [0, -4, 0] }
        }
        transition={{
          opacity: { duration: 0.6, delay: 0.45 },
          scale: { duration: 0.6, delay: 0.45 },
          y: {
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.45,
          },
        }}
        className="absolute top-[38%] -left-4 xl:-left-9 z-20 w-10 h-10 rounded-xl border border-slate-700/60 bg-[#0A101F]/95 backdrop-blur-xl flex items-center justify-center shadow-[0_0_20px_-8px_rgba(59,130,246,0.4)]"
      >
        <KotlinMark className="w-4 h-4" />
      </motion.div>

      {/* Compose — level with the chest, hugging the right edge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={
          reduceMotion
            ? { opacity: 1, scale: 1 }
            : { opacity: 1, scale: 1, y: [0, 4, 0] }
        }
        transition={{
          opacity: { duration: 0.6, delay: 0.6 },
          scale: { duration: 0.6, delay: 0.6 },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 },
        }}
        className="absolute top-[24%] -right-4 xl:-right-10 z-20 w-10 h-10 rounded-xl border border-slate-700/60 bg-[#0A101F]/95 backdrop-blur-xl flex items-center justify-center shadow-[0_0_20px_-8px_rgba(59,130,246,0.4)]"
      >
        <ComposeMark className="w-4 h-4" />
      </motion.div>

      {/* My Tasks — hugs the bottom-right, beside the legs, clear of the face */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.75, ease: "easeOut" }}
        className="absolute bottom-4 -right-4 xl:-right-9 z-20"
      >
        <TasksCard />
      </motion.div>
    </div>
  );
}

// ── MOBILE portrait: full image, centered, no crop. Decorative marks sit in
// a quiet row underneath rather than overlapping the photo, per spec. ──
function MobileHeroVisual() {
  return (
    <div className="flex flex-col items-center">
      {/* quiet row of stack marks, below the photo — nothing overlaps the portrait */}
      <div className="flex items-center gap-3 mt-6">
        {[
          { Mark: AndroidMark, color: "#3DDC84" },
          { Mark: KotlinMark, color: "#B98CFF" },
          { Mark: ComposeMark, color: "#4285F4" },
        ].map(({ Mark, color }, i) => (
          <div
            key={i}
            className="w-10 h-10 rounded-xl border border-slate-700/60 bg-[#0A101F]/95 backdrop-blur-xl flex items-center justify-center shadow-[0_0_16px_-6px_rgba(59,130,246,0.35)]"
            style={{ color }}
          >
            <Mark className="w-4 h-4" />
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Stats row: Projects / Years Learning / Blog Posts / Commits ────────────
function StatsRow() {
  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-2.5 max-w-xs sm:max-w-md mx-auto lg:mx-0 mb-7 lg:mb-8">
      {stats.map(({ icon: Icon, value, label }) => (
        <div
          key={label}
          className="border border-slate-800/60 rounded-lg sm:rounded-xl px-1.5 sm:px-2 py-2.5 sm:py-3 text-center lg:text-left"
        >
          <Icon
            size={12}
            className="text-[#3B82F6] mb-1 sm:mb-1.5 mx-auto lg:mx-0 sm:w-[13px] sm:h-[13px]"
          />
          <p className="text-sm sm:text-base font-bold text-white leading-none mb-1">
            {value}
          </p>
          <p className="text-[8px] sm:text-[9px] text-slate-500 leading-tight">
            {label}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative flex items-center lg:w-full px-5 xs:px-6 sm:px-6 pt-20 sm:pt-28 pb-10 sm:pb-14 lg:mb-20 lg:pb-20 lg:py-28 overflow-hidden bg-[#020617]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 45% at 12% 20%, rgba(59,130,246,0.07) 0%, rgba(59,130,246,0) 60%), radial-gradient(45% 40% at 92% 78%, rgba(34,211,238,0.05) 0%, rgba(34,211,238,0) 60%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015] lg:opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="max-w-6xl mx-auto w-full relative">
        <div className="flex flex-col lg:flex-row lg:items-end gap-10 sm:gap-12 lg:gap-6">
          {/* ── content: badge → headline → copy → pills → CTAs → stats, then (mobile only) the full portrait, then proof points/socials ── */}
          <motion.div
            className="lg:basis-[58%] min-w-0 w-full text-center lg:text-left"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-[#3B82F6]/[0.06] border border-[#3B82F6]/15 rounded-full px-3 py-1.5 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse motion-reduce:animate-none" />
              <span className="text-[11px] text-[#3B82F6] font-semibold tracking-wide">
                Open to opportunities
              </span>
            </div>

            <h1
              className="text-[2.1rem] xs:text-[2.5rem] sm:text-5xl lg:text-[3.75rem] leading-[1.06] font-semibold text-white mb-4 tracking-[-0.02em]"
              style={{ fontFamily: "'Fraunces', ui-serif, Georgia, serif" }}
            >
              <span className="whitespace-nowrap">
                Hi, I'm{" "}
                <span className="italic font-normal text-[#3B82F6]">
                  Samrat
                </span>
              </span>

              <br />

              <span className="whitespace-nowrap">
                Android App
                <br className="sm:hidden" /> Developer
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-400 max-w-md mx-auto lg:mx-0 mb-6 leading-relaxed">
              I build modern, clean and scalable Android apps with Kotlin &
              Jetpack Compose — learning in public, one commit at a time.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-2.5 mb-7">
              {techBadges.map((b) => (
                <span
                  key={b.label}
                  className="inline-flex items-center gap-1.5 sm:gap-2 border border-slate-800/70 bg-white/[0.02] text-slate-300 text-[11px] sm:text-[12px] font-medium px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: b.dot }}
                  />
                  {b.label}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-7 lg:mb-8">
              <Link
                to="/projects"
                className="bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-[#020617] font-bold px-6 sm:px-7 py-2.5 sm:py-3 rounded-lg transition-all active:scale-[0.97] inline-flex items-center gap-2 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B82F6]"
              >
                View Projects <ArrowUpRight size={15} />
              </Link>
              <Link
                to="/notes"
                className="border border-slate-800/60 hover:border-slate-700 text-slate-400 hover:text-white font-medium px-6 sm:px-7 py-2.5 sm:py-3 rounded-lg transition-all hover:bg-white/[0.03] inline-flex items-center gap-2 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
              >
                Read Blogs
              </Link>
            </div>

            <StatsRow />

            <div className="block lg:hidden my-8">
              <MobileHeroVisual />
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-5 sm:gap-6">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-[#565B66] hover:text-[#3B82F6] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B82F6] rounded"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="hidden lg:flex lg:basis-[42%] shrink-0 w-full justify-center items-center"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          >
            <DesktopHeroVisual />
          </motion.div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,500;0,600;1,400&display=swap');
      `}</style>
    </section>
  );
}
