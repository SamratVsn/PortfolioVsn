import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Github, ExternalLink, ArrowUpRight, FolderOpen } from "lucide-react";
import PageHeader from "./PageHeader";
import SectionHeading from "./SectionHeading";
import CategoryFilter from "./CategoryFilter";

import Tasks from "../assets/ToDo/Home.png";
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
    id: "themovie",
    category: "Android",
    featured: true,
    title: "The Movie App",
    problem: "I wanted to build a real-world Android app that talks to a live REST API and handles real user data.",
    solution: "Built a Jetpack Compose app in Kotlin using the TMDB API, with movie browsing, search, details, profile, and DataStore-backed settings.",
    learning: "Learned client-server architecture end to end — Retrofit networking, Kotlinx Serialization, reactive state with Coroutines & Flow, and MVVM with manual DI.",
    tags: ["Kotlin", "Jetpack Compose", "Retrofit"],
    github: "https://github.com/SamratVsn/TheMovie",
    path: "/projects/themovie"
  },
  {
    id: "todo",
    category: "Android",
    featured: true,
    title: "Tasks",
    problem: "I wanted a lightweight task manager and a real project to apply modern Android architecture.",
    solution: "Built a Jetpack Compose app in Kotlin using MVVM + Repository, with Room persistence, Pomodoro-style focus sessions, smart reminders, and type-safe navigation.",
    learning: "Learned clean layering between UI, domain, and data, plus reactive state handling with StateFlow and Coroutines.",
    tags: ["Kotlin", "Jetpack Compose", "Room"],
    github: "https://github.com/SamratVsn/ToDo",
    path: "/projects/todo"
  },
  {
    id: "kathmandu",
    category: "Android",
    featured: true,
    title: "Kathmandu My-City App",
    problem: "I wanted to build a real app that showcases my city and completes the Android Basics with Compose course.",
    solution: "Built a Jetpack Compose recommendation app featuring Kathmandu's special places, temples, shops, and tourist destinations with MVVM and Navigation Compose.",
    learning: "Practiced Material 3 theming, ViewModel-backed state preservation across rotations, and adaptive layouts for different screen sizes.",
    tags: ["Kotlin", "Jetpack Compose", "Material 3"],
    github: "https://github.com/SamratVsn/Kathmandu",
    path: "/projects/kathmandu"
  },
  {
    id: "juicetracker",
    category: "Android",
    featured: false,
    title: "Juice Tracker",
    problem: "I wanted to explore how Jetpack Compose integrates with traditional Android Views while building something useful.",
    solution: "Built a Kotlin app that logs juice combinations, details, and ratings using Room for local persistence and a UI that mixes Compose with RecyclerView.",
    learning: "Learned Compose-View interoperability, Room database integration, and reactive state with StateFlow inside an MVVM structure.",
    tags: ["Kotlin", "Compose + Views", "Room"],
    github: "https://github.com/SamratVsn/Juicetracker",
    path: "/projects/juicetracker"
  },
  {
    id: "blogvsn",
    category: "Web",
    featured: false,
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
    id: "portfolio",
    category: "Web",
    featured: false,
    title: "Portfolio Website",
    problem: "I needed a portfolio that looks professional and shows who I am without feeling generic.",
    solution: "Built this site with React and Tailwind CSS, focusing on clean design and clear storytelling about my work.",
    learning: "Practiced React component design, responsive layouts, and making deliberate UX choices.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/SamratVsn",
    live: "https://www.samratparajuli0.com.np",
    path: "/projects/this"
  },
  {
    id: "sms",
    category: "C",
    featured: false,
    title: "Student Management System",
    problem: "I needed a way to store and manage student records persistently without using a database.",
    solution: "Built a program in C that saves data directly to a file and lets you add, search, update, and delete records.",
    learning: "Learned how files work at a low level — reading and writing data byte by byte, and keeping data safe even if the program crashes.",
    tags: ["C", "Binary I/O", "CLI"],
    github: "https://github.com/SamratVsn/C-codes",
    path: "/projects/sms"
  },
  {
    id: "bmsk",
    category: "Experiments",
    featured: false,
    title: "Bank Account Manager",
    problem: "I wanted to understand how banking applications handle accounts and transactions securely.",
    solution: "Created a Kotlin program with account creation, deposits, withdrawals, and balance checks — all with proper error handling.",
    learning: "Practiced object-oriented programming concepts like encapsulation, state management, and designing clean interfaces.",
    tags: ["Kotlin", "OOP", "CLI"],
    github: "https://github.com/SamratVsn/Kotlin-Beginner-Codes/blob/main/bankAccountManagement.kt",
    path: "/projects/bmsk"
  },
];

const CATEGORIES = ["All", "Android", "Web", "C", "Experiments"];

const TAG_DOT_COLORS = ["#7F52FF", "#3DDC84", "#4285F4"];

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/* ── small building blocks ─────────────────────────────────────────────────── */

function CategoryChip({ category }) {
  return (
    <span className="absolute top-4 left-5 inline-flex items-center rounded-md border border-white/10 bg-canvas/70 backdrop-blur px-2 py-0.5 text-[9px] font-mono font-medium uppercase tracking-widest text-slate-300">
      {category}
    </span>
  );
}

function TagsRow({ tags }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.map((tag, i) => (
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
  );
}

function ProjectLinks({ project }) {
  return (
    <div className="mt-auto flex items-center gap-3 pt-4 border-t border-white/[0.04]">
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="text-slate-500 hover:text-accent transition-colors flex items-center gap-1.5 relative z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded"
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
          className="text-slate-500 hover:text-accent transition-colors flex items-center gap-1.5 relative z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded"
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
  );
}

/* ── featured card (larger, stronger emphasis) ─────────────────────────────── */

function FeaturedCard({ project, wide = false }) {
  const screenshot = screenshots[project.path];

  return (
    <motion.article
      variants={cardVariants}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.05] bg-surface/60 backdrop-blur-md transition-all duration-300 hover:border-accent/20 focus-within:border-accent/40 ${
        wide ? "lg:col-span-2 md:flex-row" : ""
      }`}
    >
      <Link
        to={project.path}
        className="absolute inset-0 z-10 rounded-2xl"
        aria-label={`View project: ${project.title}`}
      />

      <div
        className={`relative overflow-hidden ${
          wide
            ? "h-56 sm:h-64 md:h-72 lg:h-80 md:w-1/2 shrink-0"
            : "h-48 sm:h-56"
        }`}
      >
        <img
          src={screenshot}
          alt={`${project.title} screenshot`}
          className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/0 via-surface/40 to-surface/90" />
        <CategoryChip category={project.category} />
      </div>

      <div
        className={`flex-1 flex flex-col ${
          wide ? "p-6 sm:p-8" : "p-6"
        }`}
      >
        <h3
          className={`font-semibold text-white mb-2 group-hover:text-accent transition-colors duration-300 ${
            wide ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"
          }`}
        >
          {project.title}
        </h3>
        <p
          className={`text-slate-400 text-sm leading-relaxed mb-4 ${
            wide ? "max-w-lg" : ""
          }`}
        >
          {project.solution}
        </p>
        <div className="mb-5">
          <TagsRow tags={project.tags} />
        </div>
        <ProjectLinks project={project} />
      </div>
    </motion.article>
  );
}

/* ── compact card (other projects) ─────────────────────────────────────────── */

function ProjectCard({ project }) {
  const screenshot = screenshots[project.path];

  return (
    <motion.article
      variants={cardVariants}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.05] bg-surface/60 backdrop-blur-md transition-all duration-300 hover:border-accent/20 focus-within:border-accent/40"
    >
      <Link
        to={project.path}
        className="absolute inset-0 z-10 rounded-2xl"
        aria-label={`View project: ${project.title}`}
      />

      <div className="relative h-40 sm:h-44 overflow-hidden">
        <img
          src={screenshot}
          alt={`${project.title} screenshot`}
          className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/0 via-surface/40 to-surface/90" />
        <CategoryChip category={project.category} />
      </div>

      <div className="flex-1 flex flex-col p-5">
        <h3 className="text-base font-semibold text-white mb-2 group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-slate-400 text-[13px] leading-relaxed mb-4 line-clamp-2">
          {project.solution}
        </p>
        <div className="mb-4">
          <TagsRow tags={project.tags} />
        </div>
        <ProjectLinks project={project} />
      </div>
    </motion.article>
  );
}

/* ── page ──────────────────────────────────────────────────────────────────── */

export default function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const matches = (p) =>
    activeCategory === "All" || p.category === activeCategory;

  const featured = PROJECTS.filter((p) => p.featured && matches(p));
  const others = PROJECTS.filter((p) => !p.featured && matches(p));
  const hasAny = featured.length > 0 || others.length > 0;

  return (
    <div className="max-w-6xl mx-auto px-6 xl:max-w-7xl 2xl:max-w-[90rem] min-[1920px]:max-w-[100rem] pb-6">
      <PageHeader
        eyebrow="Work"
        title={
          <>
            Projects<span className="text-accent">.</span>
          </>
        }
        description="Things I've built while learning, experimenting, and solving problems with software."
      />

      <CategoryFilter
        categories={CATEGORIES}
        active={activeCategory}
        onChange={setActiveCategory}
        label="Filter projects by category"
      />

      {featured.length > 0 && (
        <section className="mb-14 sm:mb-16">
          <SectionHeading
            eyebrow="Featured"
            title="Featured Projects"
            subtitle="The projects I consider most important — where architecture, UI, and real engineering decisions came together."
          />
          <motion.div
            key={`featured-${activeCategory}`}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6"
          >
            {featured.map((project, i) => (
              <FeaturedCard
                key={project.id}
                project={project}
                wide={i === 0}
              />
            ))}
          </motion.div>
        </section>
      )}

      {others.length > 0 && (
        <section>
          <SectionHeading
            eyebrow="More"
            title="Other Projects"
            subtitle="Experiments, smaller applications, and earlier work that shaped how I think."
          />
          <motion.div
            key={`others-${activeCategory}`}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          >
            {others.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </section>
      )}

      {!hasAny && (
        <div className="flex flex-col items-center justify-center border border-white/[0.05] rounded-2xl py-20 px-6 text-center">
          <FolderOpen size={28} className="text-slate-600 mb-4" />
          <p className="text-white text-sm font-medium mb-1">
            Nothing here yet
          </p>
          <p className="text-slate-500 text-sm max-w-sm">
            I haven't published anything in this category yet. Check back soon.
          </p>
        </div>
      )}
    </div>
  );
}