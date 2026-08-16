import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../Components/Header";
import SEO from "../Components/SEO";
import Footer from "../Components/Footer";
import BackgroundFX from "../Components/BackgroundFX";
import SectionHeading from "../Components/SectionHeading";
import { FaGithub } from "react-icons/fa";
import { Code, ArrowUpRight, Cpu, BookOpen, Layers } from "lucide-react";
import Hero from "../Components/Hero";

function Home() {
  const featuredProjects = [
    {
      title: "ToDo Vsn App",
      problem:
        "I wanted a distraction-free task manager and a real project to apply modern Android architecture.",
      solution:
        "Built a Jetpack Compose app in Kotlin with MVVM + Repository architecture, Room persistence, swipe-to-delete, and type-safe navigation.",
      learning:
        "Learned how to separate presentation, domain, and data layers cleanly, and how reactive state with StateFlow drives a Compose UI.",
      tags: ["Kotlin", "Jetpack Compose", "Room"],
      github: "https://github.com/SamratVsn/ToDo",
      path: "/projects/todo",
    },
    {
      title: "The Movie App",
      problem:
        "I wanted to build a real-world Android app that talks to a live REST API and handles real user data.",
      solution:
        "Built a Jetpack Compose app in Kotlin using the TMDB API, with movie browsing, search, details, profile, and DataStore-backed settings.",
      learning:
        "Learned client-server architecture end to end — Retrofit networking, Kotlinx Serialization, reactive state with Coroutines & Flow, and MVVM with manual DI.",
      tags: ["Kotlin", "Jetpack Compose", "Retrofit"],
      github: "https://github.com/SamratVsn/TheMovie",
      path: "/projects/themovie",
    },
    {
      title: "Juice Tracker",
      problem:
        "I wanted to explore how Jetpack Compose integrates with traditional Android Views while building something useful.",
      solution:
        "Built a Kotlin app that logs juice combinations, details, and ratings using Room for local persistence and a UI that mixes Compose with RecyclerView.",
      learning:
        "Learned Compose-View interoperability, Room database integration, and reactive state with StateFlow inside an MVVM structure.",
      tags: ["Kotlin", "Compose + Views", "Room"],
      github: "https://github.com/SamratVsn/Juicetracker",
      path: "/projects/juicetracker",
    },
    {
      title: "Kathmandu My-City App",
      problem:
        "I wanted to build a real app that showcases my city and completes the Android Basics with Compose course.",
      solution:
        "Built a Jetpack Compose recommendation app featuring Kathmandu's special places, temples, shops, and tourist destinations with MVVM and Navigation Compose.",
      learning:
        "Practiced Material 3 theming, ViewModel-backed state preservation across rotations, and adaptive layouts for different screen sizes.",
      tags: ["Kotlin", "Jetpack Compose", "Material 3"],
      github: "https://github.com/SamratVsn/Kathmandu",
      path: "/projects/kathmandu",
    },
    {
      title: "Bank Account Manager",
      problem:
        "I wanted to understand how banking applications handle accounts and transactions securely.",
      solution:
        "Created a Kotlin program with account creation, deposits, withdrawals, and balance checks — all with proper error handling.",
      learning:
        "Practiced object-oriented programming concepts like encapsulation, state management, and designing clean interfaces.",
      tags: ["Kotlin", "OOP", "CLI"],
      github:
        "https://github.com/SamratVsn/Kotlin-Beginner-Codes/blob/main/bankAccountManagement.kt",
      path: "/projects/bmsk",
    },
    {
      title: "Student Management System",
      problem:
        "I needed a way to store and manage student records persistently without using a database.",
      solution:
        "Built a program in C that saves data directly to a file and lets you add, search, update, and delete records.",
      learning:
        "Learned how files work at a low level — reading and writing data byte by byte, and keeping data safe even if the program crashes.",
      tags: ["C", "Binary I/O", "CLI"],
      github: "https://github.com/SamratVsn/C-codes",
      path: "/projects/sms",
    },
  ];

  const journeyItems = [
    { date: "2024", title: "Started learning programming with C" },
    { date: "2025", title: "Completed Android Basics with Compose" },
    { date: "2025", title: "Built first Kotlin Android projects" },
    {
      date: "2026",
      title: "Working toward production-quality Android engineering",
      current: true,
    },
  ];

  const notePreviews = [
    {
      title: "Why I Chose MVVM",
      desc: "Thoughts on Android architecture patterns and why MVVM fits my current projects.",
    },
    {
      title: "Compose State Management",
      desc: "Lessons learned managing state in Jetpack Compose across screens.",
    },
    {
      title: "Android Development Notes",
      desc: "An ongoing collection of Android development insights and patterns.",
    },
  ];

  const expertise = [
  {
    icon: Code,
    title: "Android Development",
    desc: "Building modern, reactive Android apps using Kotlin and Jetpack Compose.",
    items: [
      { name: "Kotlin", note: "Primary Language" },
      { name: "Jetpack Compose", note: "Declarative UI" },
      { name: "MVVM Architecture", note: "Clean separation" },
      { name: "Coroutines & Flow", note: "Asynchronous programming" },
      { name: "Navigation Compose", note: "App routing" },
    ],
  },
  {
    icon: BookOpen,
    title: "Currently Leveling Up",
    desc: "Expanding knowledge into enterprise-grade Android patterns and testing.",
    items: [
      { name: "Advanced Compose", note: "Custom layouts & animations" },
      { name: "Hilt / Dagger", note: "Dependency injection" },
      { name: "Clean Architecture", note: "Scalable codebase structure" },
      { name: "Android Testing", note: "JUnit & Espresso" },
    ],
  },
  {
    icon: Layers,
    title: "Tools & Ecosystem",
    desc: "Key libraries and environments that power my development workflow.",
    items: [
      { name: "Android Studio", note: "Primary IDE" },
      { name: "Git & GitHub", note: "Version control & CI/CD" },
      { name: "Firebase", note: "Auth, Firestore & Analytics" },
      { name: "Retrofit", note: "REST API integration" },
    ],
  },
  {
    icon: Cpu,
    title: "Core Engineering",
    desc: "Solid foundational knowledge behind writing efficient code.",
    items: [
      { name: "C / C++", note: "Low-level concepts" },
      { name: "OOP & SOLID", note: "Maintainable code design" },
      { name: "Data Structures", note: "Algorithmic thinking" },
      { name: "Problem Solving", note: "LeetCode & DSA practice" },
    ],
  },
];

  const philosophy = [
    {
      title: "Understand the problem first",
      desc: "Code is a solution, not the starting point. I invest time in understanding requirements before writing a single line.",
    },
    {
      title: "Keep solutions simple",
      desc: "Simple code is easier to reason about, test, and maintain. I avoid over-engineering for scenarios that may never come.",
    },
    {
      title: "Prioritize maintainability",
      desc: "Code is read far more often than it is written. I structure projects so future me can navigate them easily.",
    },
    {
      title: "Learn publicly",
      desc: "Writing about what I build reinforces my understanding and helps others on the same path.",
    },
    {
      title: "Focus on user experience",
      desc: "Good engineering serves the user. Performance, polish, and reliability matter more than implementation cleverness.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 selection:bg-[#3B82F6]/20 selection:text-[#3B82F6] overflow-x-hidden">
      <SEO ogUrl="https://www.samratparajuli0.com.np/" />
      <Header />
      <Hero />

      {/* ─── EXPERTISE ─────────────────────────────────────────────────────── */}
      <section className="relative py-24 px-6 border-t border-slate-800/40">
        <BackgroundFX />
        <div className="relative max-w-5xl mx-auto xl:max-w-6xl 2xl:max-w-7xl min-[1920px]:max-w-[90rem]">
          <SectionHeading animated
            eyebrow="Skills"
            title="Core Expertise"
            subtitle="Technologies and concepts I work with daily."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-4">
            {expertise.map((col, i) => (
              <motion.div
                key={col.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: (i % 2) * 0.08 }}
                className="group border border-slate-800/70 rounded-xl p-6 bg-[#0A101F]/70 backdrop-blur-xl hover:border-slate-700/80 transition-colors duration-300"
              >
                <div className="p-2.5 bg-[#3B82F6]/10 border border-[#3B82F6]/15 rounded-lg w-fit mb-4 text-[#3B82F6] group-hover:bg-[#3B82F6]/15 transition-colors duration-300">
                  <col.icon size={18} />
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">
                  {col.title}
                </h3>
                <p className="text-slate-500 text-xs mb-4 leading-relaxed">
                  {col.desc}
                </p>
                <ul className="space-y-2">
                  {col.items.map((item) => (
                    <li
                      key={item.name}
                      className="text-sm flex items-baseline gap-2.5"
                    >
                      <span className="w-2.5 h-px bg-[#3B82F6]/40 shrink-0 translate-y-[-1px]" />
                      <span className="text-slate-300">{item.name}</span>
                      <span className="text-slate-600 text-[11px]">
                        {item.note}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PHILOSOPHY ────────────────────────────────────────────────────── */}
      <section className="relative py-24 px-6 border-t border-slate-800/40">
        <BackgroundFX gridOpacity={0.02} />
        <div className="relative max-w-4xl mx-auto xl:max-w-5xl">
          <SectionHeading animated
            eyebrow="Approach"
            title="How I Build Software"
            subtitle="Principles that guide my engineering decisions."
          />

          {/* Two-column text list — different from the card grid in Expertise */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
            {philosophy.map((item, i) => (
              <div key={i} className="group rounded-lg p-3 -m-3 hover:bg-white/[0.02] transition-colors duration-200">
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="text-[11px] tabular-nums text-slate-700 font-mono group-hover:text-[#3B82F6] transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-white font-medium text-sm">
                    {item.title}
                  </h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed pl-7">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 px-6 border-t border-slate-800/40">
        <BackgroundFX gridOpacity={0.02} />
        <div className="relative max-w-4xl mx-auto xl:max-w-5xl 2xl:max-w-6xl min-[1920px]:max-w-7xl">
          <div className="flex items-end justify-between mb-10">
            <SectionHeading animated
              eyebrow="Notes"
              title="Notes"
              subtitle="Android journey timeline and engineering notes."
            />
            <Link
              to="/notes"
              className="hidden sm:inline-flex text-[#3B82F6] text-sm font-medium items-center gap-1 mb-10 hover:gap-2 transition-all"
            >
              View all <ArrowUpRight size={13} />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Journey — table layout, distinct from cards */}
            <div className="rounded-xl border border-slate-800/60 bg-[#0A101F]/60 backdrop-blur-xl p-6">
              <p className="text-xs uppercase tracking-[0.12em] text-slate-500 font-medium mb-2">
                Android Journey
              </p>
              <div className="space-y-0">
                {journeyItems.map((item, i) => (
                  <div
                    key={i}
                    className={`flex gap-6 py-4 ${i < journeyItems.length - 1 ? "border-b border-slate-800/40" : ""}`}
                  >
                    <span
                      className={`text-xs font-mono tabular-nums w-10 shrink-0 pt-0.5 ${item.current ? "text-[#3B82F6]" : "text-slate-600"}`}
                    >
                      {item.date}
                    </span>
                    <span
                      className={`text-sm leading-snug ${item.current ? "text-white font-medium" : "text-slate-400"}`}
                    >
                      {item.title}
                      {item.current && (
                        <span className="ml-2 text-[10px] text-[#3B82F6] border border-[#3B82F6]/25 px-1.5 py-0.5 rounded uppercase tracking-wider align-middle">
                          Now
                        </span>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Engineering notes — simple list */}
            <div className="rounded-xl border border-slate-800/60 bg-[#0A101F]/60 backdrop-blur-xl p-6">
              <p className="text-xs uppercase tracking-[0.12em] text-slate-500 font-medium mb-2">
                Engineering Notes
              </p>
              <div className="space-y-0">
                {notePreviews.map((note, i) => (
                  <div
                    key={i}
                    className={`py-4 group cursor-default ${i < notePreviews.length - 1 ? "border-b border-slate-800/40" : ""}`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h4 className="text-slate-300 text-sm font-medium leading-snug group-hover:text-white transition-colors duration-200">
                        {note.title}
                      </h4>
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      {note.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Link
            to="/notes"
            className="sm:hidden mt-6 inline-flex text-[#3B82F6] text-sm font-medium items-center gap-1"
          >
            View all <ArrowUpRight size={13} />
          </Link>
        </div>
      </section>

      {/* ─── FEATURED PROJECTS ─────────────────────────────────────────────── */}
      <section className="relative py-24 px-6 border-t border-slate-800/40">
        <BackgroundFX />
        <div className="relative max-w-4xl mx-auto xl:max-w-5xl 2xl:max-w-6xl min-[1920px]:max-w-7xl">
          <div className="flex items-end justify-between mb-10">
            <SectionHeading animated
              eyebrow="Work"
              title="Projects"
              subtitle="Real projects that shaped my engineering thinking."
            />
            <Link
              to="/projects"
              className="hidden sm:inline-flex text-[#3B82F6] text-sm font-medium items-center gap-1 mb-10 hover:gap-2 transition-all"
            >
              View all <ArrowUpRight size={13} />
            </Link>
          </div>

          <div className="space-y-4">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: (i % 2) * 0.08 }}
              >
              <Link
                to={project.path}
                className="group block border border-slate-800/70 rounded-xl p-6 bg-[#0A101F]/70 backdrop-blur-xl hover:border-slate-700/80 transition-colors duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-white font-semibold text-base group-hover:text-[#3B82F6] transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag, idx) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1 text-[10px] text-slate-400 bg-white/[0.02] border border-slate-800/70 px-2 py-0.5 rounded font-medium"
                          >
                            <span
                              className="w-1 h-1 rounded-full"
                              style={{ backgroundColor: ["#7F52FF", "#3DDC84", "#4285F4"][idx % 3] }}
                            />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {[
                        { label: "Problem", text: project.problem },
                        { label: "Solution", text: project.solution },
                        { label: "Learned", text: project.learning },
                      ].map(({ label, text }) => (
                        <div key={label}>
                          <p className="text-[10px] uppercase tracking-[0.1em] text-slate-600 font-medium mb-1">
                            {label}
                          </p>
                          <p className="text-slate-400 text-xs leading-relaxed">
                            {text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Links — separated from card click */}
                  <div className="flex md:flex-col gap-3 shrink-0 pt-1">
                    {project.github && (
                      <span
                        role="link"
                        tabIndex={0}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(project.github, "_blank");
                        }}
                        onKeyDown={(e) =>
                          e.key === "Enter" &&
                          window.open(project.github, "_blank")
                        }
                        className="text-xs text-slate-600 hover:text-[#3B82F6] transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <FaGithub size={13} /> Source
                      </span>
                    )}
                    {project.live && (
                      <span
                        role="link"
                        tabIndex={0}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(project.live, "_blank");
                        }}
                        onKeyDown={(e) =>
                          e.key === "Enter" &&
                          window.open(project.live, "_blank")
                        }
                        className="text-xs text-slate-600 hover:text-[#3B82F6] transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <ArrowUpRight size={13} /> Live
                      </span>
                    )}
                  </div>
                </div>
              </Link>
              </motion.div>
            ))}
          </div>

          <Link
            to="/projects"
            className="sm:hidden mt-6 inline-flex text-[#3B82F6] text-sm font-medium items-center gap-1"
          >
            View all <ArrowUpRight size={13} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
