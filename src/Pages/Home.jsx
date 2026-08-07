import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../Components/Header";
import SEO from "../Components/SEO";
import Footer from "../Components/Footer";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter, FaGoogle } from "react-icons/fa6";
import { Code, ArrowUpRight, Cpu, BookOpen, Layers } from "lucide-react";

// ── Shared section heading component ──────────────────────────────────────────
function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-10">
      <p className="text-[11px] uppercase tracking-[0.14em] text-slate-600 font-medium mb-3">
        {eyebrow}
      </p>
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-[-0.02em]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 max-w-lg text-sm leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

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
      title: "BlogVsn Platform",
      problem:
        "I wanted a fast blog site where content is managed separately from the frontend.",
      solution:
        "Connected a React website to Google's Blogger API so I can write posts in Blogger and have them appear on the site automatically.",
      learning:
        "Learned how OAuth authentication works, how to fetch data from REST APIs, and how to deploy with edge caching for speed.",
      tags: ["React", "OAuth", "REST API"],
      github: "https://github.com/SamratVsn/BlogVsn",
      live: "https://blogvsn.vercel.app/",
      path: "/projects/blogvsn",
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

  const socials = [
    { href: "https://github.com/SamratVsn", icon: FaGithub, label: "GitHub" },
    {
      href: "https://www.linkedin.com/in/samratvsn/",
      icon: FaLinkedin,
      label: "LinkedIn",
    },
    { href: "https://x.com/SamratVsn", icon: FaXTwitter, label: "X / Twitter" },
    {
      href: "https://g.dev/samratparajuli",
      icon: FaGoogle,
      label: "GoogleDev",
    },
  ];

  const nodes = [
    { label: "Kotlin", angle: -90, radius: 108 },
    { label: "Compose", angle: 30, radius: 108 },
    { label: "Android", angle: 150, radius: 108 },
  ];

  function OrbitGraphic() {
    const size = 380;
    const c = size / 2;

    return (
      <div
        className="relative shrink-0 select-none"
        style={{ width: size, height: size }}
        aria-hidden="true"
      >
        {/* ambient glows */}
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            width: 260,
            height: 260,
            left: c - 130,
            top: c - 130,
            background:
              "radial-gradient(circle, rgba(201,162,75,0.16) 0%, rgba(201,162,75,0) 70%)",
          }}
        />
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            width: 220,
            height: 220,
            left: c - 110 + 40,
            top: c - 110 - 30,
            background:
              "radial-gradient(circle, rgba(143,127,232,0.14) 0%, rgba(143,127,232,0) 70%)",
          }}
        />

        {/* breathing core */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 34,
            height: 34,
            left: c - 17,
            top: c - 17,
            background:
              "radial-gradient(circle, rgba(224, 242, 254, 0.9) 0%, rgba(56, 189, 248, 0.4) 50%, rgba(56, 189, 248, 0) 100%)",
          }}
          animate={{ scale: [1, 1.35, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 8,
            height: 8,
            left: c - 4,
            top: c - 4,
            background: "#F0F9FF",
            boxShadow: "0 0 10px rgba(56, 189, 248, 0.5)",
          }}
        />

        {/* Mandala rings */}
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="absolute inset-0"
          fill="none"
        >
          <circle
            cx={c}
            cy={c}
            r={70}
            stroke="rgba(56, 189, 248, 0.12)"
            strokeWidth="1"
          />
          <circle
            cx={c}
            cy={c}
            r={150}
            stroke="rgba(14, 165, 233, 0.1)"
            strokeWidth="1"
          />
        </svg>

        {/* rotating orbit ring with nodes */}
        <motion.svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="absolute inset-0"
          fill="none"
          animate={{ rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        >
          <circle
            cx={c}
            cy={c}
            r={108}
            stroke="rgba(201,162,75,0.35)"
            strokeWidth="1"
            strokeDasharray="1 7"
            strokeLinecap="round"
          />
          {nodes.map(({ angle, radius }, i) => {
            const rad = (angle * Math.PI) / 180;
            const x = c + radius * Math.cos(rad);
            const y = c + radius * Math.sin(rad);
            return (
              <g key={i}>
                <line
                  x1={c}
                  y1={c}
                  x2={x}
                  y2={y}
                  stroke="rgba(201,162,75,0.14)"
                  strokeWidth="0.75"
                />
                <circle cx={x} cy={y} r={4} fill="#00F0FF" />
                <circle
                  cx={x}
                  cy={y}
                  r={9}
                  stroke="rgba(0,240,255,0.4)"
                  strokeWidth="0.75"
                />
              </g>
            );
          })}
        </motion.svg>

        {/* counter-rotating labels, kept upright */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: -360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        >
          {nodes.map(({ label, angle, radius }, i) => {
            const rad = (angle * Math.PI) / 180;
            const x = c + radius * Math.cos(rad);
            const y = c + radius * Math.sin(rad);
            return (
              <span
                key={i}
                className="absolute text-[10px] font-medium tracking-[0.2em] text-[#EDEAE3] whitespace-nowrap"
                style={{
                  left: x,
                  top: y,
                  transform: "translate(-50%, 14px)",
                }}
              >
                {label.toUpperCase()}
              </span>
            );
          })}
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 selection:bg-[#3B82F6]/20 selection:text-[#3B82F6] overflow-x-hidden">
      <SEO ogUrl="https://www.samratparajuli0.com.np/" />
      <Header />
      <section
        className="relative min-h-[80vh] flex items-center px-6 py-34 overflow-hidden bg-[#020617]"
      >
        
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 20% 30%, rgba(201,162,75,0.05) 0%, rgba(201,162,75,0) 60%), radial-gradient(50% 45% at 85% 70%, rgba(143,127,232,0.06) 0%, rgba(143,127,232,0) 60%)",
          }}
        />

        <div className="max-w-5xl mx-auto w-full relative">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
            {/* left content */}
            <motion.div
              className="flex-1 min-w-0 text-center lg:text-left"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <p className="text-[11px] font-medium tracking-[0.14em] text-slate-600 mb-6">
                KATHMANDU, NEPAL
              </p>

              <h1
                className="text-6xl sm:text-7xl lg:text-[5.5rem] leading-[1.03] font-semibold text-white mb-6 tracking-[-0.02em]"
                style={{ fontFamily: "'Fraunces', ui-serif, Georgia, serif" }}
              >
                Samrat
                <br />
                <span className="italic font-normal text-[#3B82F6]">
                  Parajuli
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-400 font-normal max-w-md mx-auto lg:mx-0 mb-12 leading-relaxed">
                Focused on modern Android development with Kotlin & Jetpack Compose—building in public and learning through real-world software craft.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-14">
                <Link
                  to="/projects"
                  className="bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-[#020617] font-bold px-7 py-3 rounded-lg transition-all active:scale-[0.97] inline-flex items-center gap-2 text-sm"
                >
                  View Projects <ArrowUpRight size={15} />
                </Link>
                <Link
                  to="/notes"
                  className="border border-slate-800/60 hover:border-slate-700 text-slate-400 hover:text-white font-medium px-7 py-3 rounded-lg transition-all hover:bg-white/[0.03] inline-flex items-center gap-2 text-sm"
                >
                  Read Blogs
                </Link>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-6">
                {socials.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-[#565B66] hover:text-[#3B82F6] transition-colors duration-200"
                  >
                    <Icon size={19} strokeWidth={1.6} />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* right graphic */}
            <motion.div
              className="shrink-0"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              <OrbitGraphic />
            </motion.div>
          </div>
        </div>

        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,500;0,600;1,400&display=swap');
      `}</style>
      </section>

      {/* ─── EXPERTISE ─────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 border-t border-slate-800/40">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="Skills"
            title="Core Expertise"
            subtitle="Technologies and concepts I work with daily."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {expertise.map((col) => (
              <div
                key={col.title}
                className="border border-slate-800/60 rounded-xl p-6 hover:border-slate-700/80 transition-colors duration-200"
              >
                <div className="p-2 bg-[#3B82F6]/5 border border-[#3B82F6]/10 rounded-lg w-fit mb-4 text-[#3B82F6]">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PHILOSOPHY ────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 border-t border-slate-800/40">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="Approach"
            title="How I Build Software"
            subtitle="Principles that guide my engineering decisions."
          />

          {/* Two-column text list — different from the card grid in Expertise */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
            {philosophy.map((item, i) => (
              <div key={i} className="group">
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="text-[11px] tabular-nums text-slate-700 font-mono">
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

      {/* ─── NOTES ─────────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 border-t border-slate-800/40">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <SectionHeader
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
            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-slate-600 font-medium mb-5">
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
            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-slate-600 font-medium mb-5">
                Engineering Notes
              </p>
              <div className="space-y-0">
                {notePreviews.map((note, i) => (
                  <div
                    key={i}
                    className={`py-4 ${i < notePreviews.length - 1 ? "border-b border-slate-800/40" : ""}`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h4 className="text-slate-300 text-sm font-medium leading-snug">
                        {note.title}
                      </h4>
                      <span className="shrink-0 text-[10px] text-slate-700 border border-slate-800 px-1.5 py-0.5 rounded uppercase tracking-wider whitespace-nowrap">
                        Soon
                      </span>
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
      <section className="py-24 px-6 border-t border-slate-800/40">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <SectionHeader
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
              <Link
                key={i}
                to={project.path}
                className="group block border border-slate-800/60 rounded-xl p-6 hover:border-slate-700/80 transition-colors duration-200"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-white font-semibold text-base group-hover:text-[#3B82F6] transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] text-slate-600 bg-slate-800/40 px-2 py-0.5 rounded font-medium"
                          >
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
