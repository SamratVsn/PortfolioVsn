import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import SEO from "../Components/SEO";
import Footer from "../Components/Footer";
import BottomNav from "../Components/BottomNav";
import BackgroundFX from "../Components/BackgroundFX";
import SectionHeading from "../Components/SectionHeading";
import {
  ArrowUpRight,
  MapPin,
  Code2,
  BookOpen,
  Users,
  Lightbulb,
  Layers,
  Database,
  GitBranch,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import PortfolioImage from "../assets/Profile.jpg";
import Himanshu from "../assets/image.png";
import Anish from "../assets/Anish.jpg";
import Ankit from "../assets/Ankit.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.45 },
};

const stagger = (i) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.4, delay: i * 0.07 },
});

/* ── data ─────────────────────────────────────────────────────────────────── */

const timeline = [
  {
    num: "01",
    title: "Curiosity",
    desc: "I became interested in software before I fully understood what being a software engineer actually meant.",
  },
  {
    num: "02",
    title: "C",
    desc: "I started with C and learned fundamental programming concepts such as memory, pointers, logic, and problem solving.",
  },
  {
    num: "03",
    title: "The Web",
    desc: "I explored HTML, CSS, JavaScript and eventually started building things for the web.",
  },
  {
    num: "04",
    title: "Kotlin",
    desc: "Kotlin changed the direction of my learning and led me deeper into Android development.",
  },
  {
    num: "05",
    title: "Android",
    desc: "I began building Android applications with Kotlin and Jetpack Compose, while learning architecture, networking, persistence, and state management.",
  },
  {
    num: "06",
    title: "Today",
    desc: "I'm building complete projects, documenting what I learn, and working toward becoming a professional Android engineer.",
    active: true,
  },
];

const learnSteps = [
  {
    num: "01",
    title: "Build",
    desc: "Turn concepts into working software instead of stopping at tutorials.",
  },
  {
    num: "02",
    title: "Break",
    desc: "Debug, inspect, question, and understand why something works.",
  },
  {
    num: "03",
    title: "Share",
    desc: "Document the process and lessons for others and my future self.",
  },
];

const arsenal = [
  {
    category: "Development",
    icon: Code2,
    items: [
      { name: "Kotlin", note: "Primary language" },
      { name: "Jetpack Compose", note: "Declarative UI" },
      { name: "Material 3", note: "Design system" },
    ],
  },
  {
    category: "Architecture",
    icon: Layers,
    items: [
      { name: "MVVM", note: "Pattern" },
      { name: "Repository Pattern", note: "Data layer" },
      { name: "State Management", note: "StateFlow & Composition" },
    ],
  },
  {
    category: "Infrastructure",
    icon: Database,
    items: [
      { name: "Room", note: "Local database" },
      { name: "DataStore", note: "Preferences" },
      { name: "Retrofit", note: "Networking" },
    ],
  },
  {
    category: "Workflow",
    icon: GitBranch,
    items: [
      { name: "Android Studio", note: "IDE" },
      { name: "Git & GitHub", note: "Version control" },
      { name: "APIs & Docs", note: "Integration & research" },
    ],
  },
];

const focusItems = [
  {
    title: "Android",
    desc: "Deepening Kotlin and Jetpack Compose.",
  },
  {
    title: "Architecture",
    desc: "Learning production-oriented patterns, separation of concerns, dependency injection, persistence, networking, and testing.",
  },
  {
    title: "Projects",
    desc: "Building and shipping complete applications rather than isolated tutorials.",
  },
  {
    title: "Open Source",
    desc: "Publishing projects, learning from existing codebases, and eventually contributing to open-source projects.",
  },
];

const testimonials = [
  {
    quote:
      "Samrat is a seeker. What I admire most is his curiosity and willingness to keep improving. He doesn't just code; he builds from what he learns.",
    author: "Himanshu Mishra",
    role: "Freelance Web Developer",
    photo: Himanshu,
  },
  {
    quote:
      "He approaches every task with creativity and a problem-solving mindset. His passion for technology is clear and his growth is consistent.",
    author: "Anish Sah",
    role: "Cyber-Security Enthusiast",
    photo: Anish,
  },
  {
    quote:
      "A dedicated developer who solves complex problems while maintaining clean, organized code. A dependable and valuable collaborator.",
    author: "Ankit",
    role: "Video Editor · Colleague",
    photo: Ankit,
  },
];

const beyondItems = [
  {
    icon: BookOpen,
    title: "Learning",
    desc: "Exploring subjects outside day-to-day development.",
  },
  {
    icon: Users,
    title: "Community",
    desc: "Attending developer events, talks, and community activities.",
  },
  {
    icon: Lightbulb,
    title: "Building",
    desc: "Experimenting with ideas and side projects outside structured tutorials.",
  },
];

/* ── component ────────────────────────────────────────────────────────────── */

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-canvas text-slate-400 selection:bg-accent/20 selection:text-accent overflow-x-hidden">
      <SEO
        title="About Samrat Parajuli | Android Developer"
        description="Samrat Parajuli is an Android developer from Nepal focused on Kotlin, Jetpack Compose, and building production-quality mobile applications."
        ogUrl="https://www.samratparajuli0.com.np/about"
      />
      <Header />

      {/* ═══════════════════════════════════════════════════════════════════
          1. HERO INTRO — Split layout
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative pt-28 pb-16 sm:pb-24 px-6 overflow-hidden">
        <BackgroundFX />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: [
              "linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px)",
              "linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)",
            ].join(", "),
            backgroundSize: "64px 64px",
          }}
        />

        <div className="max-w-6xl mx-auto min-[1920px]:max-w-7xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* left: portrait — 7 cols */}
            <motion.div
              className="lg:col-span-7 flex justify-center lg:justify-start"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="relative w-full max-w-md">
                <div
                  className="absolute rounded-full blur-3xl pointer-events-none"
                  style={{
                    width: "75%",
                    height: "60%",
                    left: "50%",
                    top: "40%",
                    transform: "translate(-50%, -50%)",
                    background:
                      "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(34,211,238,0.04) 45%, rgba(59,130,246,0) 72%)",
                    zIndex: 0,
                  }}
                />
                <div className="absolute -inset-3 sm:-inset-4 border border-white/[0.05] rounded-2xl pointer-events-none" />
                <img
                  src={PortfolioImage}
                  alt="Samrat Parajuli, Android developer"
                  className="relative z-10 block w-full aspect-[4/5] object-cover rounded-2xl border border-white/[0.06]"
                  loading="eager"
                />
                <motion.div
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="absolute top-6 sm:top-8 -left-2 sm:left-0 z-20"
                >
                  <div className="bg-surface/60 backdrop-blur-md border border-white/[0.06] rounded-xl px-3 py-1.5 shadow-[0_0_16px_-6px_rgba(59,130,246,0.3)]">
                    <span className="text-[9px] font-mono font-bold tracking-[0.1em] uppercase text-accent">
                      Kotlin
                    </span>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.65 }}
                  className="absolute top-[35%] -right-2 sm:right-0 z-20"
                >
                  <div className="bg-surface/60 backdrop-blur-md border border-white/[0.06] rounded-xl px-3 py-1.5 shadow-[0_0_16px_-6px_rgba(59,130,246,0.3)]">
                    <span className="text-[9px] font-mono font-bold tracking-[0.1em] uppercase text-emerald-400">
                      Android
                    </span>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 z-20"
                >
                  <div className="bg-surface/60 backdrop-blur-md border border-white/[0.06] rounded-xl px-3 py-1.5 shadow-[0_0_16px_-6px_rgba(59,130,246,0.3)]">
                    <span className="text-[9px] font-mono font-bold tracking-[0.1em] uppercase text-purple-400">
                      Jetpack Compose
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* right: text content — 5 cols */}
            <motion.div
              className="lg:col-span-5 min-w-0"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              <div className="flex items-center gap-2.5 mb-6">
                <span className="text-[11px] font-mono font-bold tracking-[0.14em] uppercase text-accent/70">
                  01
                </span>
                <span className="w-8 h-px bg-accent/25" />
                <span className="text-[11px] font-mono font-medium tracking-[0.14em] uppercase text-slate-600">
                  About
                </span>
              </div>

              <h1 className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] xl:text-[3.25rem] font-bold text-white tracking-[-0.03em] leading-[1.08] mb-2">
                Samrat
                <br />
                Parajuli
              </h1>

              <p className="text-accent text-sm font-medium mb-6">
                Android Developer
              </p>

              <p className="text-slate-400 text-[15px] sm:text-base leading-relaxed max-w-lg mb-8">
                I&apos;m an aspiring Android App Developer based in Kathmandu,
                Nepal. I build things with Kotlin and Jetpack Compose, and I
                document the process along the way.
              </p>

              <div className="grid grid-cols-2 gap-x-8 gap-y-5">
                {[
                  { label: "Location", value: "Kathmandu, Nepal", icon: MapPin },
                  { label: "Focus", value: "Android / Kotlin / Compose", icon: Code2 },
                  { label: "Stack", value: "Kotlin, Compose, Room, Retrofit, MVVM", icon: Layers },
                  { label: "Approach", value: "Learn by building", icon: BookOpen },
                ].map(({ label, value, icon: Icon }) => (
                  <div key={label}>
                    <div className="flex items-center gap-1.5 mb-1">
                      <Icon size={10} className="text-accent/50" />
                      <span className="text-[9px] font-mono font-bold tracking-[0.12em] uppercase text-slate-600">
                        {label}
                      </span>
                    </div>
                    <p className="text-slate-300 text-[13px]">{value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          2. PATH SO FAR — Timeline
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-24 px-6 border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto min-[1920px]:max-w-7xl">
          <motion.div {...fadeUp} className="mb-10">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="text-[11px] font-mono font-bold tracking-[0.14em] uppercase text-accent/70">
                02
              </span>
              <span className="w-8 h-px bg-accent/25" />
              <span className="text-[11px] font-mono font-medium tracking-[0.14em] uppercase text-slate-600">
                Journey
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-[-0.02em] mb-2">
              The path so far
            </h2>
            <p className="text-slate-400 max-w-lg text-sm leading-relaxed">
              How I got here and what changed along the way.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-[5px] top-1 bottom-1 w-px bg-white/[0.08]" />

            <div className="space-y-0">
              {timeline.map((step, i) => (
                <motion.div
                  key={i}
                  initial={
                    reduceMotion ? { opacity: 1 } : { opacity: 0, x: -10 }
                  }
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="relative flex gap-5 group"
                >
                  <div className="relative z-10 flex items-start pt-1.5 shrink-0">
                    <span
                      className={`w-[11px] h-[11px] rounded-full border-2 transition-colors duration-300 ${
                        step.active
                          ? "bg-accent border-accent shadow-[0_0_8px_rgba(59,130,246,0.4)]"
                          : "bg-canvas border-slate-600 group-hover:border-slate-500"
                      }`}
                    />
                  </div>

                  <div className="pb-7 pt-0.5">
                    <div className="flex items-baseline gap-3 mb-1">
                      <span
                        className={`text-[10px] font-mono font-bold tracking-[0.1em] ${
                          step.active ? "text-accent" : "text-slate-600"
                        }`}
                      >
                        {step.num}
                      </span>
                      <h3
                        className={`text-sm font-semibold ${
                          step.active ? "text-accent" : "text-white"
                        }`}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-slate-500 text-[13px] leading-relaxed max-w-lg">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          3. HOW I LEARN
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-24 px-6 border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto min-[1920px]:max-w-7xl">
          <motion.div {...fadeUp} className="mb-10">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="text-[11px] font-mono font-bold tracking-[0.14em] uppercase text-accent/70">
                03
              </span>
              <span className="w-8 h-px bg-accent/25" />
              <span className="text-[11px] font-mono font-medium tracking-[0.14em] uppercase text-slate-600">
                Process
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-[-0.02em] mb-2">
              How I learn
            </h2>
          </motion.div>

          <div className="space-y-0">
            {learnSteps.map((step, i) => (
              <motion.div
                key={i}
                {...stagger(i)}
                className="relative"
              >
                <div className="flex items-start gap-5 sm:gap-6">
                  <div className="flex flex-col items-center shrink-0">
                    <span className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-accent/[0.08] border border-accent/20 flex items-center justify-center text-[11px] font-mono font-bold text-accent/70 tracking-wider">
                      {step.num}
                    </span>
                    {i < learnSteps.length - 1 && (
                      <div className="w-px flex-1 min-h-[24px] bg-white/[0.06] my-1" />
                    )}
                  </div>

                  <div className="pt-2 pb-6">
                    <h3 className="text-white text-base font-semibold mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 text-[13px] leading-relaxed max-w-md">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fadeUp}
            className="flex items-center justify-center gap-3 mt-6 text-[11px] text-slate-600 font-mono font-medium tracking-wide"
          >
            <span>Build</span>
            <span className="w-4 h-px bg-white/[0.08]" />
            <span>Break</span>
            <span className="w-4 h-px bg-white/[0.08]" />
            <span>Share</span>
            <span className="w-4 h-px bg-white/[0.08]" />
            <span className="text-accent/50">Build again</span>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          4. TECHNICAL ARSENAL
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-24 px-6 border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto min-[1920px]:max-w-7xl">
          <motion.div {...fadeUp} className="mb-10">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="text-[11px] font-mono font-bold tracking-[0.14em] uppercase text-accent/70">
                04
              </span>
              <span className="w-8 h-px bg-accent/25" />
              <span className="text-[11px] font-mono font-medium tracking-[0.14em] uppercase text-slate-600">
                Arsenal
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-[-0.02em] mb-2">
              Technical arsenal
            </h2>
            <p className="text-slate-400 max-w-lg text-sm leading-relaxed">
              The tools and technologies I work with daily.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {arsenal.map((group, gi) => {
              const Icon = group.icon;
              return (
                <motion.div
                  key={gi}
                  {...stagger(gi)}
                  className="bg-surface/60 backdrop-blur-md border border-white/[0.05] rounded-2xl p-5 sm:p-6 hover:border-white/[0.1] transition-colors duration-300"
                >
                  <div className="flex items-center gap-2.5 mb-4">
                    <Icon size={16} className="text-accent/60" />
                    <h3 className="text-white text-sm font-semibold">
                      {group.category}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {group.items.map((item, ii) => (
                      <div key={ii} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/40 shrink-0" />
                        <span className="text-slate-300 text-[13px] font-medium">
                          {item.name}
                        </span>
                        <span className="text-slate-600 text-[11px]">
                          {item.note}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          5. CURRENTLY — Focus items
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-24 px-6 border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto min-[1920px]:max-w-7xl">
          <motion.div {...fadeUp} className="mb-10">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="text-[11px] font-mono font-bold tracking-[0.14em] uppercase text-accent/70">
                05
              </span>
              <span className="w-8 h-px bg-accent/25" />
              <span className="text-[11px] font-mono font-medium tracking-[0.14em] uppercase text-slate-600">
                Focus
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-[-0.02em] mb-2">
              Currently
            </h2>
            <p className="text-slate-400 max-w-lg text-sm leading-relaxed">
              What I am focused on right now.
            </p>
          </motion.div>

          <div className="border border-white/[0.06] rounded-2xl overflow-hidden">
            {focusItems.map((item, i) => (
              <motion.div
                key={i}
                {...stagger(i)}
                className={`flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 px-5 sm:px-6 py-4 sm:py-5 ${
                  i < focusItems.length - 1
                    ? "border-b border-white/[0.04]"
                    : ""
                } hover:bg-white/[0.015] transition-colors duration-300`}
              >
                <span className="text-[10px] font-mono font-bold tracking-[0.1em] uppercase text-accent/70 sm:w-28 shrink-0">
                  {item.title}
                </span>
                <p className="text-slate-500 text-[13px] leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          6. WHAT OTHERS SAY — Testimonials
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-24 px-6 border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto min-[1920px]:max-w-7xl">
          <motion.div {...fadeUp} className="mb-10">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="text-[11px] font-mono font-bold tracking-[0.14em] uppercase text-accent/70">
                06
              </span>
              <span className="w-8 h-px bg-accent/25" />
              <span className="text-[11px] font-mono font-medium tracking-[0.14em] uppercase text-slate-600">
                Perspectives
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-[-0.02em] mb-2">
              What others say
            </h2>
            <p className="text-slate-400 max-w-lg text-sm leading-relaxed">
              From people I&apos;ve worked or learned alongside.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                {...stagger(i)}
                className="bg-surface/60 backdrop-blur-md border border-white/[0.05] rounded-2xl p-5 sm:p-6 flex flex-col hover:border-white/[0.1] transition-colors duration-300"
              >
                <div className="text-[32px] leading-none mb-2 select-none text-accent/10 font-serif">
                  &ldquo;
                </div>
                <p className="text-slate-400 text-[13px] leading-relaxed flex-1 mb-5">
                  {t.quote}
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/[0.05]">
                  <img
                    src={t.photo}
                    alt={t.author}
                    className="w-8 h-8 rounded-full object-cover border border-white/[0.08] shrink-0"
                    loading="lazy"
                  />
                  <div>
                    <p className="text-white text-[12px] font-medium">
                      {t.author}
                    </p>
                    <p className="text-slate-600 text-[11px]">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          7. BEYOND CODE
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-24 px-6 border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto min-[1920px]:max-w-7xl">
          <motion.div {...fadeUp} className="mb-10">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="text-[11px] font-mono font-bold tracking-[0.14em] uppercase text-accent/70">
                07
              </span>
              <span className="w-8 h-px bg-accent/25" />
              <span className="text-[11px] font-mono font-medium tracking-[0.14em] uppercase text-slate-600">
                Outside
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-[-0.02em]">
              Beyond code
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {beyondItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  {...stagger(i)}
                  className="flex gap-4 p-5 bg-surface/60 backdrop-blur-md border border-white/[0.05] rounded-2xl hover:border-white/[0.1] transition-colors duration-300"
                >
                  <div className="shrink-0 mt-0.5">
                    <Icon size={15} className="text-accent/40" />
                  </div>
                  <div>
                    <h3 className="text-white text-[13px] font-semibold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-[12.5px] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          8. CTA
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-24 px-6 border-t border-white/[0.04]">
        <div className="max-w-lg mx-auto text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-[-0.025em] mb-3">
              Let&apos;s build something.
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              Have an Android project, an idea, or something interesting to
              discuss?
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-[#020617] font-bold text-sm px-6 py-2.5 rounded-xl transition-all active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Get in touch <ArrowUpRight size={14} />
              </Link>
              <a
                href="https://github.com/SamratVsn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/[0.08] text-slate-400 hover:text-white hover:border-white/[0.15] text-sm font-medium px-6 py-2.5 rounded-xl transition-all hover:bg-white/[0.03] active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
              >
                <FaGithub size={15} /> GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <BottomNav />
    </div>
  );
}
