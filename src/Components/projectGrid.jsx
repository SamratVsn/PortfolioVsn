import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

const PROJECTS = [
  {
    id: "01",
    title: "Student Management System",
    problem: "I needed a way to store and manage student records persistently without using a database.",
    solution: "Built a program in C that saves data directly to a file and lets you add, search, update, and delete records.",
    learning: "Learned how files work at a low level — reading and writing data byte by byte, and keeping data safe even if the program crashes.",
    tags: ["C", "Binary I/O", "CLI"],
    github: "https://github.com/SamratVsn/C-codes",
    path: "/projects/sms"
  },
  {
    id: "02",
    title: "Bank Account Manager",
    problem: "I wanted to understand how banking applications handle accounts and transactions securely.",
    solution: "Created a Kotlin program with account creation, deposits, withdrawals, and balance checks — all with proper error handling.",
    learning: "Practiced object-oriented programming concepts like encapsulation, state management, and designing clean interfaces.",
    tags: ["Kotlin", "OOP", "CLI"],
    github: "https://github.com/SamratVsn/Kotlin-Beginner-Codes/blob/main/bankAccountManagement.kt",
    path: "/projects/bmsk"
  },
  {
    id: "03",
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
    id: "04",
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
      className="group relative flex flex-col bg-slate-900/30 border border-slate-800 rounded-lg hover:bg-slate-900/50 hover:border-slate-700 transition-all duration-300"
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
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="text-xs font-medium text-slate-400 bg-slate-800/50 px-3 py-1.5 rounded border border-slate-800/50 group-hover:border-slate-700 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4 px-7 sm:px-8 py-5 border-t border-slate-800/50 bg-slate-900/20">
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
        <span className="text-xs text-slate-600">View details →</span>
      </div>
    </motion.article>
  );
}

export default function ProjectGrid() {
  return (
    <section className="max-w-4xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-[-0.03em]">
          Projects<span className="text-[#3B82F6]">.</span>
        </h1>
        <p className="text-slate-400 text-base leading-relaxed max-w-2xl">
          Real projects that shaped my engineering thinking. Each one presented specific 
          problems that required thoughtful solutions and deep learning.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-5 sm:gap-6">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}