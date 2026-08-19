import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import SEO from "../Components/SEO";
import Footer from "../Components/Footer";
import BackgroundFX from "../Components/BackgroundFX";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const articles = [
  {
    title: "Attending the Localhost Kathmandu Event by .Net Hub Kathmandu",
    excerpt:
      "How the Microsoft Build 2026 // Localhost : Kathmandu Event went from a student's perspective.",
    url: "https://medium.com/@samratvsn/attending-the-localhost-kathmandu-event-by-net-hub-kathmandu-d29a29dbed2d",
    date: "Jun 15, 2026",
    category: "Event Reflection",
    tags: ["learning-in-public", "events", "nepal"],
    image:
      "https://miro.medium.com/v2/resize:fill:640:360/1*KYyjeb2V91OfcgoM3iITlw.jpeg",
    featured: false,
  },
  {
    title: "A Random Networking Session turned fruitful",
    excerpt:
      "What a recent high school graduate learned from a tech specialist at Localhost Kathmandu.",
    url: "https://medium.com/@samratvsn/a-random-networking-session-turned-fruitful-e2123e919d60",
    date: "Jun 14, 2026",
    category: "Personal Growth",
    tags: ["networking", "mentorship", "career"],
    image:
      "https://miro.medium.com/v2/resize:fill:640:360/0*KTTKhNk5OK8HZPlJ",
    featured: false,
  },
  {
    title: "Time to Learn",
    excerpt:
      "Why waiting for the perfect time to start learning holds more people back than a lack of talent or resources.",
    url: "https://medium.com/@samratvsn/time-to-learn-0dd1697f2db3?sharedUserId=samratvsn",
    date: "Jul 29, 2026",
    category: "Learning",
    tags: ["learning", "productivity", "mindset"],
    image:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/0*peSb3OxLzdAtY7dm",
    featured: true,
  },
  {
    title: "How I Built a Productivity App from Scratch",
    excerpt:
      "The design decisions, architecture, and thought process behind building Viram, a platform focused on reducing digital addiction.",
    url: "https://medium.com/@samratvsn/how-i-built-a-productivity-app-from-scratch-9620eed54d57",
    date: "Jul 30, 2026",
    category: "Development",
    tags: ["android", "productivity", "software-development"],
    image:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*4hlT3BiQs6MJpCIKBSWDDw.png",
    featured: false,
  },
];

const milestones = [
  {
    period: "2024",
    title: "Started programming with C",
    description:
      "Began learning programming fundamentals through C. Built a Student Management System with binary file I/O, struct serialization, and direct byte-offset navigation.",
  },
  {
    period: "Early 2025",
    title: "Learned Web Concepts and JavaScript",
    description:
      "Learned HTML, CSS, and JavaScript to understand web development basics. Built simple interactive web pages and got familiar with the DOM.",
  },
  {
    period: "Mid 2025",
    title: "Started Learning Kotlin",
    description:
      "Transitioned to Kotlin to prepare for Android development. Explored language features like null safety, coroutines, and extension functions through small projects and exercises.",
  },
  {
    period: "Late 2025",
    title: "Started Android Development with Compose",
    description:
      "Began building Android apps using Jetpack Compose. Learned about composable functions, state management, and UI architecture.",
  },
  {
    period: "Early 2026",
    title: "Completed Android Basics with Compose",
    description:
      "Finished Google's Android Basics with Compose course. Learned Jetpack Compose fundamentals, state management, and Android app structure.",
  },
  {
    period: "Mid 2026",
    title: "Working toward production-quality Android development",
    description:
      "Currently focused on Android architecture patterns, testing strategies, and building production-quality applications. Learning Hilt, Room, and proper error handling.",
    active: true,
  },
];

const notePreviews = [
  {
    title: "Why I Chose Android Development",
    description:
      "A personal reflection on the journey into Android development, the challenges faced, and the reasons behind choosing this path.",
  },
  {
    title: "Compose State Management Lessons",
    description:
      "Lessons learned managing state in Jetpack Compose across screens and configuration changes. State hoisting, ViewModels, and derived state.",
  },
  {
    title: "Android Development Notes",
    description:
      "An ongoing collection of Android development insights, patterns, and gotchas.",
  },
  {
    title: "What I Learned Building an Android App myself",
    description:
      "Post-mortem reflections on specific projects and the engineering decisions behind them.",
  },
];

const categories = [
  "All",
  "Learning",
  "Development",
  "Event Reflection",
  "Personal Growth",
];

const learningTopics = [
  "Kotlin",
  "Jetpack Compose",
  "Android Architecture",
  "Testing",
  "Open Source",
];

/* ── animation helpers ───────────────────────────────────────────────────── */

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.45 },
};

const stagger = (i) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.35, delay: i * 0.06 },
});

/* ── component ────────────────────────────────────────────────────────────── */

export default function Notes() {
  const [activeCategory, setActiveCategory] = useState("All");
  const reduceMotion = useReducedMotion();

  const featured = articles.find((a) => a.featured);
  const nonFeatured = articles.filter((a) => !a.featured);

  const filtered =
    activeCategory === "All"
      ? nonFeatured
      : nonFeatured.filter((a) => a.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 selection:bg-[#3B82F6]/20 selection:text-[#3B82F6] overflow-x-hidden">
      <SEO
        title="Notes | SamratVsn"
        description="Learning in public — Android journey, engineering notes, and event reflections by Samrat Parajuli."
        ogUrl="https://www.samratparajuli0.com.np/notes"
      />
      <Header />
      <BackgroundFX />

      {/* grid overlay */}
      <div
        className="fixed inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: [
            "linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)",
          ].join(", "),
          backgroundSize: "64px 64px",
        }}
      />

      <main className="relative max-w-3xl mx-auto px-6 pt-32 pb-24">

        {/* ═══════════════════════════════════════════════════════════════════
            PAGE HEADER
            ═══════════════════════════════════════════════════════════════════ */}
        <motion.div
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* section label */}
          <div className="flex items-center gap-2.5 mb-5">
            <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#3B82F6]/70">
              03
            </span>
            <span className="w-8 h-px bg-[#3B82F6]/25" />
            <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-slate-600">
              Notes
            </span>
          </div>

          <h1 className="text-white text-3xl sm:text-4xl lg:text-[2.75rem] font-bold mb-3 tracking-[-0.03em] leading-[1.1]">
            Engineering Notes
          </h1>
          <p className="text-slate-400 text-[15px] leading-relaxed max-w-lg mb-8">
            Things I&apos;m learning, building, debugging, and figuring out along
            the way.
          </p>

          {/* currently learning */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[9px] font-bold tracking-[0.12em] uppercase text-slate-600 mr-1">
              Currently learning
            </span>
            {learningTopics.map((topic) => (
              <span
                key={topic}
                className="text-[10px] text-slate-500 bg-[#0A101F]/60 border border-slate-800/50 rounded-md px-2 py-1"
              >
                {topic}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════════════════════════════
            FEATURED NOTE
            ═══════════════════════════════════════════════════════════════════ */}
        {featured && (
          <motion.section {...fadeUp} className="mb-16">
            <a
              href={featured.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border border-slate-800/40 rounded-xl overflow-hidden hover:border-slate-700/60 transition-colors duration-300"
            >
              <div className="flex flex-col sm:flex-row">
                {/* image */}
                {featured.image && (
                  <div className="sm:w-64 md:w-72 shrink-0 overflow-hidden bg-slate-800/30">
                    <img
                      src={featured.image}
                      alt=""
                      className="w-full h-48 sm:h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* text */}
                <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2.5 mb-3">
                      <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-[#3B82F6]/80">
                        Featured
                      </span>
                      <span className="w-1 h-1 rounded-full bg-slate-700" />
                      <span className="text-[11px] text-slate-500">
                        {featured.date}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-slate-700" />
                      <span className="text-[11px] text-slate-500">
                        {featured.category}
                      </span>
                    </div>
                    <h2 className="text-white text-lg sm:text-xl font-semibold mb-2 leading-snug group-hover:text-[#3B82F6] transition-colors duration-200">
                      {featured.title}
                    </h2>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-prose">
                      {featured.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-5 pt-4 border-t border-slate-800/30">
                    <div className="flex flex-wrap gap-1.5">
                      {featured.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] text-slate-500 bg-slate-900/60 border border-slate-800/50 rounded px-2 py-0.5 uppercase tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-[13px] text-slate-500 group-hover:text-[#3B82F6] transition-colors duration-200 shrink-0 ml-4">
                      Read <ArrowUpRight size={13} />
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </motion.section>
        )}

        {/* ═══════════════════════════════════════════════════════════════════
            CATEGORY FILTER
            ═══════════════════════════════════════════════════════════════════ */}
        <motion.div {...fadeUp} className="mb-8">
          <div className="flex items-center gap-1 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[11px] font-medium tracking-wide px-3 py-1.5 rounded-lg transition-all duration-200 ${
                  activeCategory === cat
                    ? "text-[#3B82F6] bg-[#3B82F6]/[0.08] border border-[#3B82F6]/20"
                    : "text-slate-500 hover:text-slate-300 hover:bg-white/[0.03] border border-transparent"
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════════════════════════════
            NOTE LIST
            ═══════════════════════════════════════════════════════════════════ */}
        <section className="mb-16">
          <div className="border-t border-slate-800/50">
            {filtered.map((article, i) => (
              <motion.a
                key={article.url}
                {...stagger(i)}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-5 sm:gap-8 py-6 border-b border-slate-800/40 hover:bg-white/[0.01] transition-colors duration-200 -mx-3 px-3 rounded-lg"
              >
                {/* date */}
                <div className="w-16 sm:w-20 shrink-0 pt-0.5">
                  <span className="text-[11px] text-slate-600 font-medium tabular-nums uppercase tracking-wider">
                    {article.date}
                  </span>
                </div>

                {/* content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-medium text-[15px] sm:text-base leading-snug mb-1.5 group-hover:text-[#3B82F6] transition-colors duration-200">
                    {article.title}
                  </h3>
                  <p className="text-slate-500 text-[13px] leading-relaxed line-clamp-2 mb-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-medium tracking-wider uppercase text-[#3B82F6]/60">
                      {article.category}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-slate-700" />
                    <div className="flex gap-1.5">
                      {article.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] text-slate-600 bg-slate-900/40 border border-slate-800/40 rounded px-1.5 py-0.5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* arrow */}
                <div className="shrink-0 pt-1 text-slate-700 group-hover:text-[#3B82F6] group-hover:translate-x-0.5 transition-all duration-200">
                  <ArrowRight size={15} />
                </div>
              </motion.a>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-slate-600 text-sm py-8 text-center">
              No notes in this category yet.
            </p>
          )}
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            ANDROID JOURNEY
            ═══════════════════════════════════════════════════════════════════ */}
        <section className="mb-16">
          {/* section label */}
          <motion.div {...fadeUp} className="mb-8">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#3B82F6]/70">
                02
              </span>
              <span className="w-8 h-px bg-[#3B82F6]/25" />
              <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-slate-600">
                Journey
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-[-0.02em] mb-2">
              Android Journey
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              From writing my first line of C to building Android apps with
              Jetpack Compose.
            </p>
          </motion.div>

          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-[5px] top-1 bottom-1 w-px bg-slate-800/40" />

            {milestones.map((item, i) => (
              <motion.div
                key={i}
                initial={
                  reduceMotion ? { opacity: 1 } : { opacity: 0, x: -8 }
                }
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="relative flex gap-5 sm:gap-6 group"
              >
                {/* dot */}
                <div className="relative z-10 flex items-start pt-1.5 shrink-0">
                  <span
                    className={`w-[11px] h-[11px] rounded-full border-2 transition-colors duration-300 ${
                      item.active
                        ? "bg-[#3B82F6] border-[#3B82F6] shadow-[0_0_8px_rgba(59,130,246,0.4)]"
                        : "bg-[#020617] border-slate-600 group-hover:border-slate-500"
                    }`}
                  />
                </div>

                {/* content */}
                <div className="pb-7 pt-0.5">
                  <div className="flex items-center gap-3 mb-1">
                    <span
                      className={`text-[11px] font-medium tabular-nums ${
                        item.active ? "text-[#3B82F6]" : "text-slate-600"
                      }`}
                    >
                      {item.period}
                    </span>
                    {item.active && (
                      <span className="text-[9px] text-[#3B82F6] border border-[#3B82F6]/25 px-1.5 py-0.5 rounded uppercase tracking-wider leading-none font-medium">
                        Now
                      </span>
                    )}
                  </div>
                  <h3
                    className={`font-medium text-sm sm:text-base leading-snug mb-1 ${
                      item.active ? "text-white" : "text-slate-300"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-[13px] leading-relaxed max-w-lg">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            ENGINEERING NOTES (DRAFTS)
            ═══════════════════════════════════════════════════════════════════ */}
        <section className="mb-16">
          {/* section label */}
          <motion.div {...fadeUp} className="mb-8">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#3B82F6]/70">
                04
              </span>
              <span className="w-8 h-px bg-[#3B82F6]/25" />
              <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-slate-600">
                In Progress
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-[-0.02em] mb-2">
              Engineering Notes
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Technical writing in progress — drafts on architecture, Compose
              patterns, and lessons from building.
            </p>
          </motion.div>

          <div className="border border-slate-800/40 rounded-xl overflow-hidden">
            {notePreviews.map((note, i) => (
              <motion.div
                key={i}
                {...stagger(i)}
                className={`flex items-start gap-4 px-5 sm:px-6 py-4 sm:py-5 ${
                  i < notePreviews.length - 1
                    ? "border-b border-slate-800/30"
                    : ""
                }`}
              >
                {/* status dot */}
                <div className="shrink-0 pt-1.5">
                  <span className="block w-1.5 h-1.5 rounded-full bg-slate-700" />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-slate-300 font-medium text-sm sm:text-[15px] mb-1 leading-snug">
                    {note.title}
                  </h3>
                  <p className="text-slate-500 text-[12.5px] leading-relaxed">
                    {note.description}
                  </p>
                </div>

                <span className="text-[9px] font-medium tracking-wider uppercase text-slate-600 shrink-0 pt-1">
                  Draft
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            FOOTER CTA
            ═══════════════════════════════════════════════════════════════════ */}
        <motion.section {...fadeUp} className="pt-8 border-t border-slate-800/30">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-[-0.02em] mb-3">
              Still learning.
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-md mx-auto">
              I write these notes as I learn — sometimes to explain something,
              sometimes just to remember it.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-[#3B82F6] transition-colors duration-200 font-medium"
            >
              About my journey <ArrowUpRight size={14} />
            </Link>
          </div>
        </motion.section>

      </main>

      <Footer />
    </div>
  );
}
