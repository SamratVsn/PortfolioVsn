import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

import Tasks from "../assets/ToDo/Tasks.png";
import MoviePoster from "../assets/TheMovie/MoviePoster.png";
import BlogVsnB1 from '../assets/BlogVsn/B1.png';
import SMS1 from '../assets/SMS/SMS1.png';
import Portfolio from "../assets/Profile.jpg"
import BMSK from '../assets/BMSK/BMSK1.png'
import Kathmandu from '../assets/KathmanduPoster.jpeg'
import JuicePoster from '../assets/JuicePoster.jpeg'

const screenshots = {
  '/projects/todo': Tasks,
  '/projects/themovie': MoviePoster,
  '/projects/blogvsn': BlogVsnB1,
  '/projects/sms': SMS1,
  '/projects/this': Portfolio,
  '/projects/bmsk': BMSK,
  '/projects/kathmandu': Kathmandu,
  '/projects/juicetracker': JuicePoster,
};

const PROJECTS = [
  {
    id: " 0 ! 0 ",
    title: "Tasks",
    problem: "I wanted a lightweight task manager and a real project to apply modern Android architecture.",
    solution: "Built a Jetpack Compose app in Kotlin using MVVM + Repository, with Room persistence, Pomodoro-style focus sessions, smart reminders, and type-safe navigation.",
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

const TAG_DOT_COLORS = ["#7F52FF", "#3DDC84", "#4285F4"];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.08,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const headerVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

function ProjectCard({ project, index }) {
  const screenshot = screenshots[project.path];
  const showImage = Boolean(screenshot);
  const number = String(index).padStart(2, '0');

  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="group relative flex flex-col rounded-2xl border border-white/[0.05] bg-surface/60 backdrop-blur-md hover:border-accent/20 transition-all duration-300 overflow-hidden"
    >
      <Link
        to={project.path}
        className="absolute inset-0 z-10"
        aria-label={`View project: ${project.title}`}
      />

      {showImage ? (
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <img
            src={screenshot}
            alt={`${project.title} screenshot`}
            className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface/0 via-surface/40 to-surface/90" />
          <span className="absolute top-4 left-5 font-mono text-[11px] text-slate-500 uppercase tracking-widest">
            {number}
          </span>
        </div>
      ) : (
        <div className="relative h-48 sm:h-56 flex items-center justify-center bg-gradient-to-br from-surface/80 to-surface/30 border-b border-white/[0.04]">
          <span className="font-mono text-[64px] sm:text-[80px] font-bold text-white/[0.03] select-none leading-none">
            {number}
          </span>
          <span className="absolute top-4 left-5 font-mono text-[11px] text-slate-500 uppercase tracking-widest">
            {number}
          </span>
          <span className="absolute bottom-4 right-5 font-mono text-[10px] text-slate-600 uppercase tracking-widest">
            {project.tags[0]}
          </span>
        </div>
      )}

      <div className="flex-1 flex flex-col p-6 sm:p-7">
        <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 group-hover:text-accent transition-colors duration-300 pr-6">
          {project.title}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed mb-5 line-clamp-3">
          {project.solution}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.map((tag, i) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1.5 text-[10px] text-slate-400 bg-white/[0.02] border border-white/[0.04] px-2.5 py-1 rounded-full transition-colors duration-300 group-hover:border-white/[0.08]"
            >
              <span
                className="w-1 h-1 rounded-full shrink-0"
                style={{ backgroundColor: TAG_DOT_COLORS[i % 3] }}
              />
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-3 pt-4 border-t border-white/[0.04]">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-slate-500 hover:text-accent transition-colors flex items-center gap-1.5 relative z-20"
              title="View source code on GitHub"
            >
              <Github size={14} />
              <span className="text-xs hidden sm:inline">Code</span>
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-slate-500 hover:text-accent transition-colors flex items-center gap-1.5 relative z-20"
              title="View live project"
            >
              <ExternalLink size={14} />
              <span className="text-xs hidden sm:inline">Live</span>
            </a>
          )}
          <div className="flex-grow" />
          <span className="text-xs text-slate-600 group-hover:text-accent transition-colors duration-300 flex items-center gap-1 relative z-20">
            View details
            <ArrowUpRight size={12} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectGrid() {
  return (
    <section className="bg-canvas">
      <div className="max-w-5xl mx-auto px-6 lg:max-w-6xl xl:max-w-7xl">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex items-center gap-2 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
            <span className="w-6 h-px bg-accent/30" />
            <span className="text-[11px] uppercase tracking-[0.14em] text-slate-500 font-medium">
              Work
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-[-0.03em]">
            Projects<span className="text-accent">.</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed max-w-2xl">
            Real projects that shaped my engineering thinking. Each one presented
            specific problems that required thoughtful solutions and deep learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 pb-24">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
