import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import Header from "../Components/Header";
import SEO from "../Components/SEO";
import Footer from "../Components/Footer";
import BackgroundFX from "../Components/BackgroundFX";
import SectionHeading from "../Components/SectionHeading";
import BottomNav from "../Components/BottomNav";
import { FaGithub } from "react-icons/fa";
import {
  ArrowUpRight,
  ArrowRight,
  Code,
  Layers,
  Wrench,
  BookOpen,
} from "lucide-react";
import Hero from "../Components/Hero";
import ToDoVsn from "../assets/ToDo/ToDoVsn.png";
import MoviePoster from "../assets/TheMovie/MoviePoster.png";
import BlogVsnB1 from "../assets/BlogVsn/B1.png";
import SMS1 from "../assets/SMS/SMS1.png";
import Retrofit from "../assets/retrofit.webp";
import Room from "../assets/Room.webp";
import JetpackCompose from "../assets/Jetpack.webp";
import Android from "../assets/Android.webp";

// ── Expertise data ──────────────────────────────────────────────────────────
const expertise = [
  {
    icon: Code,
    title: "Android Development",
    desc: "Building modern, reactive Android apps with Kotlin and Jetpack Compose.",
    tags: ["Kotlin", "Jetpack Compose", "Material 3", "Coroutines & Flow"],
    screenshots: [MoviePoster, ToDoVsn],
  },
  {
    icon: Layers,
    title: "Architecture",
    desc: "Structuring apps with clear separation between UI, data, and business logic.",
    tags: ["MVVM", "Repository Pattern", "Room", "DataStore", "Retrofit"],
    screenshots: [Room, Retrofit],
  },
  {
    icon: Wrench,
    title: "Tools & Workflow",
    desc: "The day-to-day toolkit that keeps development smooth and version-controlled.",
    tags: ["Android Studio", "Git & GitHub", "REST APIs", "Documentation"],
    screenshots: [JetpackCompose, Android],
  },
];

// ── Featured projects data ──────────────────────────────────────────────────
const featuredProjects = [
  {
    title: "The Movie App",
    description:
      "A Jetpack Compose app that browses, searches, and explores movies using the TMDB API — with profiles, settings, and offline-ready data caching.",
    tags: ["Kotlin", "Jetpack Compose", "Retrofit"],
    github: "https://github.com/SamratVsn/TheMovie",
    path: "/projects/themovie",
    screenshot: MoviePoster,
  },
  {
    title: "ToDo Vsn App",
    description:
      "A distraction-free task manager built with MVVM, Room persistence, and type-safe Compose navigation.",
    tags: ["Kotlin", "Jetpack Compose", "Room"],
    github: "https://github.com/SamratVsn/ToDo",
    path: "/projects/todo",
    screenshot: ToDoVsn,
  },
  {
    title: "Juice Tracker",
    description:
      "Explores Compose-View interop with Room, RecyclerView, and reactive state in a practical logging app.",
    tags: ["Kotlin", "Compose + Views", "Room"],
    github: "https://github.com/SamratVsn/Juicetracker",
    path: "/projects/juicetracker",
  },
  {
    title: "BlogVsn Platform",
    description:
      "A React blog powered by Google's Blogger API — OAuth authentication, REST data, and Vercel edge caching.",
    tags: ["React", "OAuth", "REST API"],
    github: "https://github.com/SamratVsn/BlogVsn",
    live: "https://blogvsn.vercel.app/",
    path: "/projects/blogvsn",
    screenshot: BlogVsnB1,
  },
  {
    title: "Kathmandu My-City App",
    description:
      "A Material 3 recommendation app showcasing Kathmandu's places, temples, and destinations with adaptive layouts.",
    tags: ["Kotlin", "Jetpack Compose", "Material 3"],
    github: "https://github.com/SamratVsn/Kathmandu",
    path: "/projects/kathmandu",
  },
  {
    title: "Student Management System",
    description:
      "A C program handling persistent student records through binary file I/O — add, search, update, and delete.",
    tags: ["C", "Binary I/O", "CLI"],
    github: "https://github.com/SamratVsn/C-codes",
    path: "/projects/sms",
    screenshot: SMS1,
  },
];

// ── Philosophy data ─────────────────────────────────────────────────────────
const philosophy = [
  {
    number: "01",
    title: "Understand the problem",
    desc: "I try to understand what I'm actually solving before jumping into implementation. A clear problem statement saves more time than a fast keyboard.",
  },
  {
    number: "02",
    title: "Keep it understandable",
    desc: "I prefer solutions that are clear enough to debug, maintain, and explain. If I can't walk through it later, it's not done yet.",
  },
  {
    number: "03",
    title: "Learn by building",
    desc: "Tutorials help me learn concepts, but building without the tutorial is where I actually understand them. Real projects teach what courses can't.",
  },
];

// ── Journey data ────────────────────────────────────────────────────────────
const journeyItems = [
  {
    period: "2024",
    title: "Started programming with C",
    description:
      "Learned fundamentals through C — loops, structs, binary file I/O, and a Student Management System built from scratch.",
  },
  {
    period: "Early 2025",
    title: "Learned web basics",
    description:
      "HTML, CSS, and JavaScript to understand how the web works. Built simple interactive pages and got familiar with the DOM.",
  },
  {
    period: "Mid 2025",
    title: "Started learning Kotlin",
    description:
      "Transitioned to Kotlin to prepare for Android. Explored null safety, coroutines, and extension functions through small projects.",
  },
  {
    period: "Late 2025",
    title: "Started Android with Compose",
    description:
      "Began building Android apps using Jetpack Compose — composable functions, state management, and UI architecture.",
  },
  {
    period: "Early 2026",
    title: "Completed Android Basics with Compose",
    description:
      "Finished Google's course. Solidified Compose fundamentals, state handling, and Android app structure.",
  },
  {
    period: "Mid 2026",
    title: "Building complete applications",
    description:
      "Currently focused on architecture patterns, testing strategies, and building production-quality Android applications.",
    active: true,
  },
];

// ── Note previews (from actual Notes page) ──────────────────────────────────
const notePreviews = [
  {
    title: "Time to Learn",
    date: "Jul 29, 2026",
    category: "Learning",
    url: "https://medium.com/@samratvsn/time-to-learn-0dd1697f2db3",
  },
  {
    title: "How I Built a Productivity App from Scratch",
    date: "Jul 30, 2026",
    category: "Development",
    url: "https://medium.com/@samratvsn/how-i-built-a-productivity-app-from-scratch-9620eed54d57",
  },
  {
    title: "Attending the Localhost Kathmandu Event",
    date: "Jun 15, 2026",
    category: "Event Reflection",
    url: "https://medium.com/@samratvsn/attending-the-localhost-kathmandu-event-by-net-hub-kathmandu-d29a29dbed2d",
  },
];

function Home() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 selection:bg-[#3B82F6]/20 selection:text-[#3B82F6] overflow-x-hidden">
      <SEO ogUrl="https://www.samratparajuli0.com.np/" />
      <Header />
      <Hero />

      {/* ═══════════════════════════════════════════════════════════════════════
          EXPERTISE
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 sm:py-28 px-5 sm:px-6 border-t border-slate-800/40">
        <BackgroundFX />
        <div className="relative max-w-5xl mx-auto xl:max-w-6xl 2xl:max-w-7xl min-[1920px]:max-w-[90rem]">
          <SectionHeading
            animated
            eyebrow="Skills"
            title="What I build with"
            subtitle="The core technologies and concepts I use to ship real projects."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {expertise.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="group border border-slate-800/70 rounded-xl bg-[#0A101F]/70 backdrop-blur-xl overflow-hidden hover:border-slate-700/80 transition-colors duration-300"
              >
                {/* Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-[#3B82F6]/10 border border-[#3B82F6]/15 rounded-lg text-[#3B82F6] group-hover:bg-[#3B82F6]/15 transition-colors duration-300">
                      <card.icon size={16} />
                    </div>
                    <h3 className="text-white font-semibold text-[15px]">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-slate-500 text-[13px] leading-relaxed mb-4">
                    {card.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] text-slate-400 bg-white/[0.02] border border-slate-800/70 px-2 py-0.5 rounded font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Screenshots */}
                {card.screenshots && (
                  <div className="px-6 pb-6">
                    <div className="flex gap-2 rounded-lg overflow-hidden border border-slate-800/40">
                      {card.screenshots.map((src, idx) => (
                        <div
                          key={idx}
                          className="flex-1 bg-[#020617] overflow-hidden"
                        >
                          <img
                            src={src}
                            alt=""
                            className="w-full h-28 sm:h-32 object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          FEATURED PROJECTS
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 sm:py-28 px-5 sm:px-6 border-t border-slate-800/40">
        <BackgroundFX gridOpacity={0.015} />
        <div className="relative max-w-5xl mx-auto xl:max-w-6xl 2xl:max-w-7xl min-[1920px]:max-w-[90rem]">
          <div className="flex items-end justify-between mb-10">
            <SectionHeading
              animated
              eyebrow="Work"
              title="Featured Projects"
              subtitle="Real projects that shaped my engineering thinking."
            />
            <Link
              to="/projects"
              className="hidden sm:inline-flex text-[#3B82F6] text-sm font-medium items-center gap-1 mb-10 hover:gap-2 transition-all"
            >
              View all <ArrowUpRight size={13} />
            </Link>
          </div>

          {/* Row 1: Large + 2 stacked */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-4">
            {/* Large: The Movie App */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45 }}
              className="lg:col-span-3 group"
            >
              <Link
                to={featuredProjects[0].path}
                className="block h-full border border-slate-800/70 rounded-xl bg-[#0A101F]/70 backdrop-blur-xl overflow-hidden hover:border-[#3B82F6]/30 transition-all duration-300"
              >
                {/* Screenshot */}
                <div className="relative overflow-hidden bg-[#020617] border-b border-slate-800/40">
                  <img
                    src={featuredProjects[0].screenshot}
                    alt="The Movie App screenshot"
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A101F] via-transparent to-transparent opacity-60" />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-white font-semibold text-base group-hover:text-[#3B82F6] transition-colors">
                      {featuredProjects[0].title}
                    </h3>
                    <ArrowUpRight
                      size={16}
                      className="text-slate-600 group-hover:text-[#3B82F6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                    />
                  </div>
                  <p className="text-slate-400 text-[13px] leading-relaxed mb-4">
                    {featuredProjects[0].description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {featuredProjects[0].tags.map((tag, idx) => (
                      <span
                        key={tag}
                        className="text-[10px] text-slate-400 bg-white/[0.02] border border-slate-800/70 px-2 py-0.5 rounded font-medium"
                      >
                        <span
                          className="w-1 h-1 rounded-full inline-block mr-1.5"
                          style={{
                            backgroundColor: ["#7F52FF", "#3DDC84", "#4285F4"][idx % 3],
                          }}
                        />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Stacked right */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {[featuredProjects[1], featuredProjects[2]].map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, delay: (i + 1) * 0.08 }}
                  className="flex-1 group"
                >
                  <Link
                    to={project.path}
                    className="block h-full border border-slate-800/70 rounded-xl bg-[#0A101F]/70 backdrop-blur-xl overflow-hidden hover:border-[#3B82F6]/30 transition-all duration-300"
                  >
                    {/* Screenshot if available */}
                    {project.screenshot && (
                      <div className="relative overflow-hidden bg-[#020617] border-b border-slate-800/40">
                        <img
                          src={project.screenshot}
                          alt={`${project.title} screenshot`}
                          className="w-full h-32 sm:h-36 object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A101F] via-transparent to-transparent opacity-60" />
                      </div>
                    )}

                    <div className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-white font-semibold text-sm group-hover:text-[#3B82F6] transition-colors">
                          {project.title}
                        </h3>
                        <ArrowUpRight
                          size={14}
                          className="text-slate-600 group-hover:text-[#3B82F6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                        />
                      </div>
                      <p className="text-slate-400 text-[12px] leading-relaxed mb-3 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag, idx) => (
                          <span
                            key={tag}
                            className="text-[9px] text-slate-400 bg-white/[0.02] border border-slate-800/70 px-2 py-0.5 rounded font-medium"
                          >
                            <span
                              className="w-1 h-1 rounded-full inline-block mr-1"
                              style={{
                                backgroundColor: ["#7F52FF", "#3DDC84", "#4285F4"][idx % 3],
                              }}
                            />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Row 2: 2 small + large */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            {/* Stacked left */}
            <div className="lg:col-span-2 flex flex-col gap-4 order-2 lg:order-1">
              {[featuredProjects[3], featuredProjects[4]].map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="flex-1 group"
                >
                  <Link
                    to={project.path}
                    className="block h-full border border-slate-800/70 rounded-xl bg-[#0A101F]/70 backdrop-blur-xl overflow-hidden hover:border-[#3B82F6]/30 transition-all duration-300"
                  >
                    {project.screenshot && (
                      <div className="relative overflow-hidden bg-[#020617] border-b border-slate-800/40">
                        <img
                          src={project.screenshot}
                          alt={`${project.title} screenshot`}
                          className="w-full h-32 sm:h-36 object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A101F] via-transparent to-transparent opacity-60" />
                      </div>
                    )}

                    <div className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-white font-semibold text-sm group-hover:text-[#3B82F6] transition-colors">
                          {project.title}
                        </h3>
                        <ArrowUpRight
                          size={14}
                          className="text-slate-600 group-hover:text-[#3B82F6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                        />
                      </div>
                      <p className="text-slate-400 text-[12px] leading-relaxed mb-3 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag, idx) => (
                          <span
                            key={tag}
                            className="text-[9px] text-slate-400 bg-white/[0.02] border border-slate-800/70 px-2 py-0.5 rounded font-medium"
                          >
                            <span
                              className="w-1 h-1 rounded-full inline-block mr-1"
                              style={{
                                backgroundColor: ["#7F52FF", "#3DDC84", "#4285F4"][idx % 3],
                              }}
                            />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Large: Student Management System */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45 }}
              className="lg:col-span-3 group order-1 lg:order-2"
            >
              <Link
                to={featuredProjects[5].path}
                className="block h-full border border-slate-800/70 rounded-xl bg-[#0A101F]/70 backdrop-blur-xl overflow-hidden hover:border-[#3B82F6]/30 transition-all duration-300"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] text-slate-500 font-medium uppercase tracking-widest">
                      Foundation Project
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="text-slate-600 group-hover:text-[#3B82F6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                    />
                  </div>
                  {featuredProjects[5].screenshot && (
                      <div className="relative overflow-hidden bg-[#020617] border-b border-slate-800/40">
                        <img
                          src={featuredProjects[5].screenshot}
                          alt={`${featuredProjects[5].title} screenshot`}
                          className="w-full h-32 sm:h-36 object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A101F] via-transparent to-transparent opacity-60" />
                      </div>
                    )}
                  <h3 className="text-white font-semibold text-lg sm:text-xl group-hover:text-[#3B82F6] transition-colors mb-3">
                    {featuredProjects[5].title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5 max-w-lg">
                    {featuredProjects[5].description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {featuredProjects[5].tags.map((tag, idx) => (
                      <span
                        key={tag}
                        className="text-[10px] text-slate-400 bg-white/[0.02] border border-slate-800/70 px-2 py-0.5 rounded font-medium"
                      >
                        <span
                          className="w-1 h-1 rounded-full inline-block mr-1.5"
                          style={{
                            backgroundColor: ["#7F52FF", "#3DDC84", "#4285F4"][idx % 3],
                          }}
                        />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>

          <Link
            to="/projects"
            className="sm:hidden mt-6 inline-flex text-[#3B82F6] text-sm font-medium items-center gap-1"
          >
            View all projects <ArrowUpRight size={13} />
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          HOW I BUILD
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 sm:py-28 px-5 sm:px-6 border-t border-slate-800/40">
        <BackgroundFX gridOpacity={0.02} />
        <div className="relative max-w-4xl mx-auto xl:max-w-5xl">
          <SectionHeading
            animated
            eyebrow="Approach"
            title="How I build"
            subtitle="Three principles that guide how I approach every project."
          />

          <div>
            {philosophy.map((item, i) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 py-7 border-b border-slate-800/40 last:border-b-0">
                  <span className="text-[13px] font-mono tabular-nums text-slate-700 group-hover:text-[#3B82F6] transition-colors shrink-0 pt-0.5">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="text-white font-medium text-[15px] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-[13px] leading-relaxed max-w-xl">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          ANDROID JOURNEY
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 sm:py-28 px-5 sm:px-6 border-t border-slate-800/40">
        <BackgroundFX gridOpacity={0.02} />
        <div className="relative max-w-4xl mx-auto xl:max-w-5xl">
          <SectionHeading
            animated
            eyebrow="Journey"
            title="My Android Journey"
            subtitle="From my first line of code to building complete Android applications."
          />

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[5px] top-1 bottom-1 w-px bg-slate-800/40" />

            {journeyItems.map((item, i) => (
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
                        Current
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
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          LEARNING IN PUBLIC
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 sm:py-28 px-5 sm:px-6 border-t border-slate-800/40">
        <BackgroundFX gridOpacity={0.015} />
        <div className="relative max-w-4xl mx-auto xl:max-w-5xl">
          <div className="flex items-end justify-between mb-10">
            <SectionHeading
              animated
              eyebrow="Writing"
              title="Learning in public"
              subtitle="I document what I learn, the problems I run into, and the things I build along the way."
            />
            <Link
              to="/notes"
              className="hidden sm:inline-flex text-[#3B82F6] text-sm font-medium items-center gap-1 mb-10 hover:gap-2 transition-all"
            >
              All notes <ArrowUpRight size={13} />
            </Link>
          </div>

          <div className="border-t border-slate-800/50">
            {notePreviews.map((note, i) => (
              <motion.a
                key={note.url}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                href={note.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-5 sm:gap-8 py-5 border-b border-slate-800/40 last:border-b-0 hover:bg-white/[0.01] transition-colors duration-200 -mx-3 px-3 rounded-lg"
              >
                <div className="w-16 sm:w-20 shrink-0 pt-0.5">
                  <span className="text-[11px] text-slate-600 font-medium tabular-nums uppercase tracking-wider">
                    {note.date}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-medium text-[15px] sm:text-base leading-snug mb-1.5 group-hover:text-[#3B82F6] transition-colors duration-200">
                    {note.title}
                  </h3>
                  <span className="text-[10px] font-medium tracking-wider uppercase text-[#3B82F6]/60">
                    {note.category}
                  </span>
                </div>

                <div className="shrink-0 pt-1 text-slate-700 group-hover:text-[#3B82F6] group-hover:translate-x-0.5 transition-all duration-200">
                  <ArrowRight size={15} />
                </div>
              </motion.a>
            ))}
          </div>

          <Link
            to="/notes"
            className="sm:hidden mt-6 inline-flex text-[#3B82F6] text-sm font-medium items-center gap-1"
          >
            All notes <ArrowUpRight size={13} />
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          CTA
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 sm:py-28 px-5 sm:px-6 border-t border-slate-800/40">
        <BackgroundFX gridOpacity={0.015} />
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-[-0.02em] mb-4">
              Have something interesting in mind?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8 max-w-md mx-auto">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of something meaningful.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="bg-[#3B82F6] hover:bg-[#3393FF]/90 text-[#020617] font-bold px-6 sm:px-7 py-2.5 sm:py-3 rounded-lg transition-all active:scale-[0.97] inline-flex items-center gap-2 text-sm"
              >
                Get in touch <ArrowUpRight size={15} />
              </Link>
              <a
                href="https://github.com/SamratVsn"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-slate-800/60 hover:border-slate-700 text-slate-400 hover:text-white font-medium px-6 sm:px-7 py-2.5 sm:py-3 rounded-lg transition-all hover:bg-white/[0.03] inline-flex items-center gap-2 text-sm"
              >
                <FaGithub size={15} />
                View GitHub
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

export default Home;