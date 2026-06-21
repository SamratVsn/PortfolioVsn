import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from '../Components/Header'
import SEO from '../Components/SEO'
import Footer from '../Components/Footer'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { ArrowUpRight, Code, BookOpen, Layers } from 'lucide-react'

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
        <p className="text-slate-400 max-w-lg text-sm leading-relaxed">{subtitle}</p>
      )}
    </div>
  )
}

function Home() {
  const featuredProjects = [
    {
      title: "Student Management System",
      problem: "I needed a way to store and manage student records persistently without using a database.",
      solution: "Built a program in C that saves data directly to a file and lets you add, search, update, and delete records.",
      learning: "Learned how files work at a low level — reading and writing data byte by byte, and keeping data safe even if the program crashes.",
      tags: ["C", "Binary I/O", "CLI"],
      github: "https://github.com/SamratVsn/C-codes",
      path: "/projects/sms"
    },
    {
      title: "Bank Account Manager",
      problem: "I wanted to understand how banking applications handle accounts and transactions securely.",
      solution: "Created a Kotlin program with account creation, deposits, withdrawals, and balance checks — all with proper error handling.",
      learning: "Practiced object-oriented programming concepts like encapsulation, state management, and designing clean interfaces.",
      tags: ["Kotlin", "OOP", "CLI"],
      github: "https://github.com/SamratVsn/Kotlin-Beginner-Codes/blob/main/bankAccountManagement.kt",
      path: "/projects/bmsk"
    },
    {
      title: "BlogVsn Platform",
      problem: "I wanted a fast blog site where content is managed separately from the frontend.",
      solution: "Connected a React website to Google's Blogger API so I can write posts in Blogger and have them appear on the site automatically.",
      learning: "Learned how OAuth authentication works, how to fetch data from REST APIs, and how to deploy with edge caching for speed.",
      tags: ["React", "OAuth", "REST API"],
      github: "https://github.com/SamratVsn/BlogVsn",
      live: "https://blogvsn.vercel.app/",
      path: "/projects/blogvsn"
    }
  ]

  const journeyItems = [
    { date: "2024", title: "Started learning programming with C" },
    { date: "2025", title: "Completed Android Basics with Compose" },
    { date: "2025", title: "Built first Kotlin Android projects" },
    { date: "2026", title: "Working toward production-quality Android engineering", current: true },
  ]

  const notePreviews = [
    { title: "Why I Chose MVVM", desc: "Thoughts on Android architecture patterns and why MVVM fits my current projects." },
    { title: "Compose State Management", desc: "Lessons learned managing state in Jetpack Compose across screens." },
    { title: "Android Development Notes", desc: "An ongoing collection of Android development insights and patterns." },
  ]

  const expertise = [
    {
      icon: Code,
      title: "Android Development",
      desc: "Building modern Android apps with the latest tools and patterns.",
      items: [
        { name: "Kotlin", note: "Primary language" },
        { name: "Jetpack Compose", note: "Declarative UI" },
        { name: "MVVM", note: "Architecture pattern" },
        { name: "Navigation Compose", note: "Screen routing" },
        { name: "Coroutines & Flow", note: "Async & streams" },
      ],
    },
    {
      icon: BookOpen,
      title: "Currently Learning",
      desc: "Actively deepening my expertise in production-grade Android.",
      items: [
        { name: "Advanced Compose", note: "Animations & layouts" },
        { name: "Android Testing", note: "JUnit, Espresso" },
        { name: "Clean Architecture", note: "Production patterns" },
        { name: "Hilt DI", note: "Dependency injection" },
      ],
    },
    {
      icon: Layers,
      title: "Tools & Platforms",
      desc: "Everyday tools that power my development workflow.",
      items: [
        { name: "Android Studio", note: "Primary IDE" },
        { name: "Git & GitHub", note: "Version control" },
        { name: "Firebase", note: "Backend services" },
        { name: "Postman", note: "API testing" },
      ],
    },
    {
      icon: Code,
      title: "Core Fundamentals",
      desc: "Foundational skills that support everything I build.",
      items: [
        { name: "C / C++", note: "Low-level foundations" },
        { name: "OOP Design", note: "SOLID principles" },
        { name: "Data Structures", note: "Algorithms & logic" },
        { name: "Problem Solving", note: "DSA practice" },
      ],
    },
  ]

  const philosophy = [
    { title: "Understand the problem first", desc: "Code is a solution, not the starting point. I invest time in understanding requirements before writing a single line." },
    { title: "Keep solutions simple", desc: "Simple code is easier to reason about, test, and maintain. I avoid over-engineering for scenarios that may never come." },
    { title: "Prioritize maintainability", desc: "Code is read far more often than it is written. I structure projects so future me can navigate them easily." },
    { title: "Learn publicly", desc: "Writing about what I build reinforces my understanding and helps others on the same path." },
    { title: "Focus on user experience", desc: "Good engineering serves the user. Performance, polish, and reliability matter more than implementation cleverness." },
  ]

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 selection:bg-[#2DD4BF]/20 selection:text-[#2DD4BF] overflow-x-hidden">
      <SEO ogUrl="https://www.samratparajuli0.com.np/" />
      <Header />

      {/* ─── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center pt-28 pb-20 px-6">
        <div className="max-w-4xl mx-auto relative w-full">
          <div className="flex items-center lg:gap-8 relative">

            {/* ── Left: content ── */}
            <motion.div
              className="flex-1 min-w-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-7xl sm:text-7xl lg:text-8xl font-bold text-white leading-[1] mb-8 tracking-[-0.03em]">
                Samrat <br />
                <span className="text-[#2DD4BF]">Parajuli</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 font-medium max-w-sm mb-5 leading-relaxed">
                Building polished Android experiences.
              </p>

              

              <p className="text-slate-400 leading-relaxed max-w-md mb-10 text-base">
                From Kathmandu, Nepal.
                <br />
                Focused on Android development, open-source learning, and continuously
                growing toward becoming a professional Android developer through
                real-world projects and public learning.
              </p>

              <div className="flex flex-wrap items-center gap-3 mb-11">
                <Link
                  to="/projects"
                  className="bg-[#2DD4BF] hover:bg-[#2DD4BF]/90 text-[#020617] font-semibold px-6 py-2.5 rounded-lg transition-colors inline-flex items-center gap-2 text-sm"
                >
                  View Projects <ArrowUpRight size={15} />
                </Link>
                <Link
                  to="/contact"
                  className="border border-slate-700/60 hover:border-slate-600 text-slate-300 hover:text-white font-medium px-6 py-2.5 rounded-lg transition-colors inline-flex items-center gap-2 text-sm"
                >
                  Contact Me
                </Link>
                <Link
                  to="/notes"
                  className="text-slate-500 hover:text-[#2DD4BF] text-sm font-medium transition-colors inline-flex items-center gap-1.5 ml-1"
                >
                  Notes <ArrowUpRight size={13} />
                </Link>
              </div>

              <div className="flex items-center gap-6">
                {[
                  { href: "https://github.com/SamratVsn", icon: FaGithub, label: "GitHub" },
                  { href: "https://www.linkedin.com/in/samratvsn/", icon: FaLinkedin, label: "LinkedIn" },
                  { href: "https://x.com/SamratVsn", icon: FaXTwitter, label: "X / Twitter" },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-slate-600 hover:text-[#2DD4BF] transition-colors duration-200"
                  >
                    <Icon size={26} />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* ── Right: SP mark — hidden on mobile ── */}
            <motion.div
              aria-hidden="true"
              className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 shrink-0 select-none pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              <svg
                width="360"
                height="420"
                viewBox="0 0 360 420"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="xl:w-[420px] xl:h-[490px]"
              >
                {/* ── SP outlined letterforms ── */}
                <text
                  x="-4"
                  y="340"
                  fontFamily="ui-sans-serif, system-ui, sans-serif"
                  fontWeight="900"
                  fontSize="320"
                  letterSpacing="-18"
                  fill="none"
                  stroke="rgba(45,212,191,0.22)"
                  strokeWidth="1.5"
                >
                  SP
                </text>

                {/* ── KOTLIN — top-left, into the S ── */}
                <circle cx="36" cy="64" r="2.5" fill="rgba(45,212,191,0.5)" />
                <line x1="36" y1="64" x2="80" y2="64" stroke="rgba(45,212,191,0.4)" strokeWidth="0.75" />
                <text
                  x="86"
                  y="69"
                  fontFamily="ui-sans-serif, system-ui, sans-serif"
                  fontWeight="700"
                  fontSize="10"
                  letterSpacing="2.5"
                  fill="rgba(45,212,191,0.6)"
                  textAnchor="start"
                >
                  KOTLIN
                </text>

                {/* ── COMPOSE — mid, spanning the gap between S and P ── */}
                <circle cx="140" cy="186" r="2.5" fill="rgba(45,212,191,0.35)" />
                <line x1="140" y1="186" x2="220" y2="186" stroke="rgba(45,212,191,0.25)" strokeWidth="0.75" strokeDasharray="4 3" />
                <circle cx="220" cy="186" r="2.5" fill="rgba(45,212,191,0.35)" />
                <text
                  x="180"
                  y="180"
                  fontFamily="ui-sans-serif, system-ui, sans-serif"
                  fontWeight="700"
                  fontSize="10"
                  letterSpacing="2.5"
                  fill="rgba(45,212,191,0.5)"
                  textAnchor="middle"
                >
                  COMPOSE
                </text>

                {/* ── ANDROID — lower-right, into the P bowl ── */}
                <circle cx="316" cy="290" r="2.5" fill="rgba(45,212,191,0.5)" />
                <line x1="272" y1="290" x2="316" y2="290" stroke="rgba(45,212,191,0.4)" strokeWidth="0.75" />
                <text
                  x="266"
                  y="286"
                  fontFamily="ui-sans-serif, system-ui, sans-serif"
                  fontWeight="700"
                  fontSize="10"
                  letterSpacing="2.5"
                  fill="rgba(45,212,191,0.6)"
                  textAnchor="end"
                >
                  ANDROID
                </text>

                {/* ── Baseline rule ── */}
                <line x1="0" y1="352" x2="360" y2="352" stroke="rgba(45,212,191,0.07)" strokeWidth="1" />
              </svg>
            </motion.div>

          </div>
        </div>
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
                <div className="p-2 bg-[#2DD4BF]/5 border border-[#2DD4BF]/10 rounded-lg w-fit mb-4 text-[#2DD4BF]">
                  <col.icon size={18} />
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">{col.title}</h3>
                <p className="text-slate-500 text-xs mb-4 leading-relaxed">{col.desc}</p>
                <ul className="space-y-2">
                  {col.items.map(item => (
                    <li key={item.name} className="text-sm flex items-baseline gap-2.5">
                      <span className="w-2.5 h-px bg-[#2DD4BF]/40 shrink-0 translate-y-[-1px]" />
                      <span className="text-slate-300">{item.name}</span>
                      <span className="text-slate-600 text-[11px]">{item.note}</span>
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
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-white font-medium text-sm">{item.title}</h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed pl-7">{item.desc}</p>
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
              className="hidden sm:inline-flex text-[#2DD4BF] text-sm font-medium items-center gap-1 mb-10 hover:gap-2 transition-all"
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
                  <div key={i} className={`flex gap-6 py-4 ${i < journeyItems.length - 1 ? 'border-b border-slate-800/40' : ''}`}>
                    <span className={`text-xs font-mono tabular-nums w-10 shrink-0 pt-0.5 ${item.current ? 'text-[#2DD4BF]' : 'text-slate-600'}`}>
                      {item.date}
                    </span>
                    <span className={`text-sm leading-snug ${item.current ? 'text-white font-medium' : 'text-slate-400'}`}>
                      {item.title}
                      {item.current && (
                        <span className="ml-2 text-[10px] text-[#2DD4BF] border border-[#2DD4BF]/25 px-1.5 py-0.5 rounded uppercase tracking-wider align-middle">
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
                  <div key={i} className={`py-4 ${i < notePreviews.length - 1 ? 'border-b border-slate-800/40' : ''}`}>
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h4 className="text-slate-300 text-sm font-medium leading-snug">{note.title}</h4>
                      <span className="shrink-0 text-[10px] text-slate-700 border border-slate-800 px-1.5 py-0.5 rounded uppercase tracking-wider whitespace-nowrap">
                        Soon
                      </span>
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed">{note.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Link to="/notes" className="sm:hidden mt-6 inline-flex text-[#2DD4BF] text-sm font-medium items-center gap-1">
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
              className="hidden sm:inline-flex text-[#2DD4BF] text-sm font-medium items-center gap-1 mb-10 hover:gap-2 transition-all"
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
                      <h3 className="text-white font-semibold text-base group-hover:text-[#2DD4BF] transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-[10px] text-slate-600 bg-slate-800/40 px-2 py-0.5 rounded font-medium">
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
                          <p className="text-[10px] uppercase tracking-[0.1em] text-slate-600 font-medium mb-1">{label}</p>
                          <p className="text-slate-400 text-xs leading-relaxed">{text}</p>
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
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(project.github, '_blank'); }}
                        onKeyDown={(e) => e.key === 'Enter' && window.open(project.github, '_blank')}
                        className="text-xs text-slate-600 hover:text-[#2DD4BF] transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <FaGithub size={13} /> Source
                      </span>
                    )}
                    {project.live && (
                      <span
                        role="link"
                        tabIndex={0}
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(project.live, '_blank'); }}
                        onKeyDown={(e) => e.key === 'Enter' && window.open(project.live, '_blank')}
                        className="text-xs text-slate-600 hover:text-[#2DD4BF] transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <ArrowUpRight size={13} /> Live
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <Link to="/projects" className="sm:hidden mt-6 inline-flex text-[#2DD4BF] text-sm font-medium items-center gap-1">
            View all <ArrowUpRight size={13} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home