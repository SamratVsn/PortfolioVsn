import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative flex flex-col bg-[#020617] p-6 border border-slate-800/50 rounded-lg hover:border-slate-700/50 transition-all"
    >
      <Link to={project.path} className="absolute inset-0 z-10" aria-label={`View project: ${project.title}`} />

      <div className="flex-1">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs text-slate-500 font-mono">Project 0{project.id}</span>
        </div>

        <h3 className="text-white font-medium text-lg mb-3 group-hover:text-[#2DD4BF] transition-colors">
          {project.title}
        </h3>

        <div className="space-y-2 mb-4 text-sm">
          <div>
            <span className="text-[10px] text-slate-500 uppercase tracking-wider font-medium">Problem</span>
            <p className="text-slate-400 leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <span className="text-[10px] text-slate-500 uppercase tracking-wider font-medium">Solution</span>
            <p className="text-slate-400 leading-relaxed">{project.solution}</p>
          </div>
          <div>
            <span className="text-[10px] text-slate-500 uppercase tracking-wider font-medium">What I Learned</span>
            <p className="text-slate-400 leading-relaxed">{project.learning}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="text-[11px] text-slate-500 bg-slate-800/30 px-2 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3 mt-4 pt-4 border-t border-slate-800/30">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-xs text-slate-500 hover:text-[#2DD4BF] transition-colors flex items-center gap-1"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            Source
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-xs text-slate-500 hover:text-[#2DD4BF] transition-colors flex items-center gap-1"
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
            Live
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default function ProjectGrid() {
  return (
    <section className="max-w-4xl mx-auto px-6">
      <div className="mb-10">
        <h1 className="text-white text-3xl font-bold mb-2">
          Projects<span className="text-[#2DD4BF]">.</span>
        </h1>
        <p className="text-slate-400 text-sm">
          Real projects that shaped my engineering thinking. Each one presented
          specific problems that required thoughtful solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
