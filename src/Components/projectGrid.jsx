import React from 'react';
import { motion } from 'framer-motion';

const PROJECTS = [
  {
    id: "01",
    category: "C_SYSTEM",
    title: "Student Management System",
    description:
      "Console-based CRUD system written in C, focusing on file handling, structured data storage, and basic memory management.",
    tags: ["#c", "#file-handling", "#cli"],
    github: "https://github.com/SamratVsn/student-management-system",
    live: null,
    status: "completed",
  },
  {
    id: "02",
    category: "KOTLIN_CLI",
    title: "Bank Management System",
    description:
      "A Kotlin CLI project exploring object-oriented programming concepts such as classes, state management, and modular logic.",
    tags: ["#kotlin", "#oop", "#cli"],
    github: "https://github.com/SamratVsn/bank-management-kotlin",
    live: null,
    status: "completed",
  },
  {
    id: "03",
    category: "ANDROID_APP",
    title: "Compose Learning Apps",
    description:
      "A collection of small Android applications built while following the Android Basics with Jetpack Compose pathway.",
    tags: ["#android", "#kotlin", "#compose"],
    github: "https://github.com/SamratVsn",
    live: null,
    status: "wip",
  },
  {
    id: "04",
    category: "PORTFOLIO",
    title: "Developer Portfolio",
    description:
      "Personal portfolio built with React and Framer Motion, designed to showcase projects and document my development journey.",
    tags: ["#react", "#framer-motion", "#portfolio"],
    github: "https://github.com/SamratVsn",
    live: "https://www.samratparajuli0.com.np",
    status: "completed",
  },
];

const STATUS_CONFIG = {
  completed: { dot: "#2DD4BF", pulse: false },
  wip: { dot: "#F59E0B", pulse: true },
  archived: { dot: "#475569", pulse: false },
};

const GithubIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

function ProjectCard({ project, index }) {
  const s = STATUS_CONFIG[project.status] ?? STATUS_CONFIG.completed;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className="group relative flex flex-col bg-[#070d1a] border border-slate-800/70 
                 rounded-xl overflow-hidden cursor-default
                 hover:border-[#2DD4BF]/30 hover:bg-[#0a1120]
                 transition-all duration-300"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
        style={{ boxShadow: "inset 0 0 40px 0 rgba(45,212,191,0.04)" }}
      />

      <div className="flex flex-col flex-1 p-7">
        <div className="flex items-center justify-between mb-6">
          <span
            className="font-mono text-[11px] tracking-widest text-[#2DD4BF]
                       border border-[#2DD4BF]/25 bg-[#2DD4BF]/5
                       px-2.5 py-1 rounded"
          >
            {project.category}
          </span>
          <span className="font-mono text-slate-700 text-xs tabular-nums">
            {project.id}
          </span>
        </div>

        <h3 className="font-mono text-xl font-semibold text-slate-100 leading-snug mb-3
                       group-hover:text-white transition-colors duration-200">
          {project.title}
          <span className="text-[#2DD4BF] opacity-0 group-hover:opacity-100 transition-opacity duration-200">_</span>
        </h3>

        <p className="text-sm text-slate-500 leading-relaxed flex-1 mb-6
                      group-hover:text-slate-400 transition-colors duration-200">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-x-3 gap-y-1 mb-6">
          {project.tags.map((tag) => (
            <span key={tag} className="font-mono text-xs text-slate-600">
              {tag}
            </span>
          ))}
        </div>

        <div className="border-t border-slate-800/80 group-hover:border-slate-700/80 transition-colors duration-300 pt-4">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5">
              <span
                className={`w-1.5 h-1.5 rounded-full ${s.pulse ? "animate-pulse" : ""}`}
                style={{ background: s.dot }}
              />
              <span className="font-mono text-[11px] capitalize text-slate-600">
                {project.status}
              </span>
            </span>

            <div className="flex items-center gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs
                             text-slate-600 hover:text-[#2DD4BF] transition-colors duration-200"
                >
                  <GithubIcon />
                  Code
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs
                             text-slate-600 hover:text-[#2DD4BF] transition-colors duration-200"
                >
                  <ArrowIcon />
                  Live
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6">
      <div className="mb-20">
        <p className="font-mono text-xs tracking-[0.25em] text-[#2DD4BF] mb-4 uppercase">
          // repository: build_log_2025
        </p>
        <h1 className="font-mono text-6xl font-bold text-slate-100 tracking-tight leading-none">
          SELF PROJECTS
          <span className="text-[#2DD4BF] animate-pulse">_</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-800/40 rounded-xl overflow-hidden border border-slate-800/40">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      <p className="font-mono text-xs text-slate-700 mt-6 text-right">
        {String(PROJECTS.length).padStart(2, "0")} projects loaded
      </p>
    </section>
  );
}