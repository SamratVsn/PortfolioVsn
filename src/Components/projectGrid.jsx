import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

const PROJECTS = [
  {
    id: " 0 ! 0 ",
    title: "ToDo Vsn App",
    problem: "I wanted a lightweight task manager and a real project to apply modern Android architecture.",
    solution: "Built a Jetpack Compose app in Kotlin using MVVM + Repository, with Room persistence, swipe-to-delete, and type-safe navigation.",
    learning: "Learned clean layering between UI, domain, and data, plus reactive state handling with StateFlow and Coroutines.",
    tags: ["Kotlin", "Jetpack Compose", "Room"],
    github: "https://github.com/SamratVsn/ToDo",
    path: "/projects/todo"
  },
  {
    id: "01",
    title: "The Movie App",
    problem: "I wanted to build a real-world Android app that talks to a live REST API and handles real user data.",
    solution: "Built a Jetpack Compose app in Kotlin using the TMDB API, with movie browsing, search, details, profile, and DataStore-backed settings.",
    learning: "Learned client-server architecture end to end — Retrofit networking, Kotlinx Serialization, reactive state with Coroutines & Flow, and MVVM with manual DI.",
    tags: ["Kotlin", "Jetpack Compose", "Retrofit"],
    github: "https://github.com/SamratVsn/TheMovie",
    path: "/projects/themovie"
  },
  {
    id: "02",
    title: "Juice Tracker",
    problem: "I wanted to explore how Jetpack Compose integrates with traditional Android Views while building something useful.",
    solution: "Built a Kotlin app that logs juice combinations, details, and ratings using Room for local persistence and a UI that mixes Compose with RecyclerView.",
    learning: "Learned Compose-View interoperability, Room database integration, and reactive state with StateFlow inside an MVVM structure.",
    tags: ["Kotlin", "Compose + Views", "Room"],
    github: "https://github.com/SamratVsn/Juicetracker",
    path: "/projects/juicetracker"
  },
  {
    id: "03",
    title: "Kathmandu My-City App",
    problem: "I wanted to build a real app that showcases my city and completes the Android Basics with Compose course.",
    solution: "Built a Jetpack Compose recommendation app featuring Kathmandu's special places, temples, shops, and tourist destinations with MVVM and Navigation Compose.",
    learning: "Practiced Material 3 theming, ViewModel-backed state preservation across rotations, and adaptive layouts for different screen sizes.",
    tags: ["Kotlin", "Jetpack Compose", "Material 3"],
    github: "https://github.com/SamratVsn/Kathmandu",
    path: "/projects/kathmandu"
  },
  {
    id: "04",
    title: "Student Management System",
    problem: "I needed a way to store and manage student records persistently without using a database.",
    solution: "Built a program in C that saves data directly to a file and lets you add, search, update, and delete records.",
    learning: "Learned how files work at a low level — reading and writing data byte by byte, and keeping data safe even if the program crashes.",
    tags: ["C", "Binary I/O", "CLI"],
    github: "https://github.com/SamratVsn/C-codes",
    path: "/projects/sms"
  },
  {
    id: "05",
    title: "Bank Account Manager",
    problem: "I wanted to understand how banking applications handle accounts and transactions securely.",
    solution: "Created a Kotlin program with account creation, deposits, withdrawals, and balance checks — all with proper error handling.",
    learning: "Practiced object-oriented programming concepts like encapsulation, state management, and designing clean interfaces.",
    tags: ["Kotlin", "OOP", "CLI"],
    github: "https://github.com/SamratVsn/Kotlin-Beginner-Codes/blob/main/bankAccountManagement.kt",
    path: "/projects/bmsk"
  },
  {
    id: "06",
    title: "BlogVsn Platform",
    problem: "I wanted a fast blog site where content is managed separately from the frontend.",
    solution: "Connected a React website to Google's Blogger API so I can write posts in Blogger and have them appear on the site automatically.",
    learning: "Learned how OAuth authentication works, how to fetch data from REST APIs, and how to deploy with edge caching for speed.",
    tags: ["React", "OAuth", "REST API"],
    github: "https://github.com/SamratVsn/BlogVsn",
    live: "https://blogvsn.vercel.app/",
    path: "/projects/blogvsn"
  },
  {
    id: "07",
    title: "Portfolio Website",
    problem: "I needed a portfolio that looks professional and shows who I am without feeling generic.",
    solution: "Built this site with React and Tailwind CSS, focusing on clean design and clear storytelling about my work.",
    learning: "Practiced React component design, responsive layouts, and making deliberate UX choices.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/SamratVsn",
    live: "https://www.samratparajuli0.com.np",
    path: "/projects/this"
  },
];

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col rounded-xl border border-slate-800/70 bg-[#0A101F]/80 backdrop-blur-xl hover:border-slate-700/80 transition-colors duration-300"
    >
      <Link to={project.path} className="absolute inset-0 z-10" aria-label={`View project: ${project.title}`} />

      <div className="flex-1 p-7 sm:p-8">
        <div className="flex items-start justify-between mb-5">
          <span className="text-xs text-slate-500 font-medium uppercase tracking-widest">
            Project {project.id}
          </span>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowRight size={16} className="text-[#3B82F6]" />
          </div>
        </div>

        <h3 className="text-lg sm:text-xl font-semibold text-white mb-5 group-hover:text-[#3B82F6] transition-colors">
          {project.title}
        </h3>

        <div className="space-y-4 mb-6">
          <div>
            <span className="text-[11px] text-slate-500 uppercase tracking-widest font-semibold block mb-2">Problem</span>
            <p className="text-slate-400 text-sm leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <span className="text-[11px] text-slate-500 uppercase tracking-widest font-semibold block mb-2">Solution</span>
            <p className="text-slate-400 text-sm leading-relaxed">{project.solution}</p>
          </div>
          <div>
            <span className="text-[11px] text-slate-500 uppercase tracking-widest font-semibold block mb-2">Learning</span>
            <p className="text-slate-400 text-sm leading-relaxed">{project.learning}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 bg-white/[0.02] border border-slate-800/70 px-3 py-1 rounded-md group-hover:border-slate-700/80 transition-colors"
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: ["#7F52FF", "#3DDC84", "#4285F4"][i % 3] }}
              />
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4 px-7 sm:px-8 py-5 border-t border-slate-800/50 bg-[#0A101F]/60 rounded-b-xl">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-sm text-slate-500 hover:text-[#3B82F6] transition-colors flex items-center gap-1.5 relative z-20"
            title="View source code on GitHub"
          >
            <Github size={14} />
            <span className="hidden sm:inline">Code</span>
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-sm text-slate-500 hover:text-[#3B82F6] transition-colors flex items-center gap-1.5 relative z-20"
            title="View live project"
          >
            <ExternalLink size={14} />
            <span className="hidden sm:inline">Live</span>
          </a>
        )}
        <div className="flex-grow" />
        <span className="text-xs text-slate-600 group-hover:text-[#3B82F6] transition-colors">View details →</span>
      </div>
    </motion.article>
  );
}

export default function ProjectGrid() {
  return (
    <section className="max-w-4xl mx-auto px-6 xl:max-w-5xl 2xl:max-w-6xl min-[1920px]:max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <div className="flex items-center gap-2 mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]/60" />
          <span className="w-6 h-px bg-[#3B82F6]/30" />
          <span className="text-[11px] uppercase tracking-[0.14em] text-slate-500 font-medium">
            Work
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-[-0.03em]">
          Projects<span className="text-[#3B82F6]">.</span>
        </h1>
        <p className="text-slate-400 text-base leading-relaxed max-w-2xl">
          Real projects that shaped my engineering thinking. Each one presented specific 
          problems that required thoughtful solutions and deep learning.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 2xl:grid-cols-2 gap-5 sm:gap-6">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}