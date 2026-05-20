import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Terminal, Cpu, ShieldCheck, Box } from 'lucide-react';

const PROJECTS = [
  {
    id: "01",
    category: "C_SYSTEMS",
    title: "Student Management Kernel",
    description:
      "Low-overhead native core infrastructure built in pure C utilizing binary I/O, strict struct serialization schema, and fixed byte-offset record tracking navigation.",
    tags: ["C-Core", "Binary-IO", "CLI-Engine"],
    github: "https://github.com/SamratVsn/C-codes",
    live: null,
    status: "completed",
    path: "/projects/sms",
    icon: <Terminal size={14} />
  },
  {
    id: "02",
    category: "KOTLIN_RUNTIME",
    title: "Encapsulated Ledger System",
    description:
      "Object-oriented command-line architecture tracing financial state transitions, account isolation policies, and cryptographically sound token identity patterns.",
    tags: ["Kotlin", "OOP-Encapsulation", "State-Machine"],
    github: "https://github.com/SamratVsn/Kotlin-Beginner-Codes/blob/main/bankAccountManagement.kt",
    live: null,
    status: "completed",
    path: "/projects/bmsk",
    icon: <Cpu size={14} />
  },
  {
    id: "03",
    category: "CLOUD_INTERFACE",
    title: "BlogVsn Edge Aggregator",
    description:
      "High-throughput aggregation layer integrating third-party content pools securely via Google OAuth 2.0 protocol and the Blogger API v3 rendering pipeline.",
    tags: ["React-JS", "OAuth-Security", "REST-API"],
    github: "https://github.com/SamratVsn/BlogVsn",
    live: "https://blogvsn.vercel.app/",
    status: "completed",
    path: "/projects/blogvsn",
    icon: <ShieldCheck size={14} />
  },
  {
    id: "04",
    category: "PORTFOLIO",
    title: "Modular Shell Interface",
    description:
      "Dynamic developer environment built with React and Framer Motion, running low-latency layout changes and structured asynchronous content tracking loops.",
    tags: ["React-DOM", "Framer-Motion", "System-UI"],
    github: "https://github.com/SamratVsn",
    live: "https://www.samratparajuli0.com.np",
    status: "active",
    path: "/projects/this",
    icon: <Box size={14} />
  },
];

const STATUS_CONFIG = {
  completed: { dot: "bg-[#2DD4BF]", text: "text-[#2DD4BF]", label: "STABLE", pulse: false },
  active: { dot: "bg-emerald-400", text: "text-emerald-400", label: "RUNNING", pulse: true },
  wip: { dot: "bg-amber-500", text: "text-amber-500", label: "COMPILING", pulse: true },
};

const GithubIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

function ProjectCard({ project, index }) {
  const currentStatus = STATUS_CONFIG[project.status] ?? STATUS_CONFIG.completed;

  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 260, damping: 22, delay: index * 0.05 }}
      className="group relative flex flex-col bg-[#020617] p-8 transition-all duration-300 hover:bg-slate-950/40"
    >
      {/* Block Anchor Overlay Link */}
      <Link to={project.path} className="absolute inset-0 z-10" aria-label={`Inspect Subsystem Module ${project.title}`} />

      {/* Structured Category Header Row */}
      <div className="flex items-center justify-between mb-5 relative z-20">
        <span className="font-mono text-[10px] tracking-widest text-[#2DD4BF] border border-[#2DD4BF]/20 bg-[#2DD4BF]/5 px-2.5 py-0.5 rounded flex items-center gap-1.5 uppercase">
          {project.icon}
          {project.category}
        </span>
        <span className="font-mono text-slate-700 text-[11px] font-bold tracking-wider">
          NODE_IDX_0{project.id}
        </span>
      </div>

      {/* Target Module Name */}
      <h3 className="font-mono text-base font-bold text-slate-200 tracking-tight mb-2 group-hover:text-white transition-colors duration-200">
        {project.title}
        <span className="text-[#2DD4BF] inline-block animate-pulse ml-0.5 opacity-0 group-hover:opacity-100 transition-opacity">_</span>
      </h3>

      {/* Functional Context Description */}
      <p className="font-sans text-xs text-slate-500 leading-relaxed flex-1 mb-5 group-hover:text-slate-400 transition-colors duration-200">
        {project.description}
      </p>

      {/* System Framework Tags */}
      <div className="flex flex-wrap gap-1.5 mb-6 relative z-20">
        {project.tags.map((tag) => (
          <span key={tag} className="font-mono text-[10px] text-slate-500 border border-slate-900 bg-slate-950/60 px-2 py-0.5 rounded cursor-default group-hover:border-slate-800 transition-colors">
            {tag}
          </span>
        ))}
      </div>

      {/* Functional Action Pipeline Lower Matrix */}
      <div className="border-t border-slate-900 pt-4 mt-auto relative z-20">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5">
              {currentStatus.pulse && (
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-40 ${currentStatus.dot}`} />
              )}
              <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${currentStatus.dot}`} />
            </span>
            <span className={`font-mono text-[9px] font-bold tracking-widest uppercase ${currentStatus.text}`}>
              {currentStatus.label}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 font-mono text-[11px] text-slate-500 hover:text-[#2DD4BF] border border-transparent hover:border-slate-900 hover:bg-slate-950/60 rounded transition-all"
              >
                <GithubIcon />
                Source
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 font-mono text-[11px] text-slate-500 hover:text-[#2DD4BF] border border-transparent hover:border-slate-900 hover:bg-slate-950/60 rounded transition-all"
              >
                <ArrowIcon />
                Output
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Horizontal Glow Interceptor */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2DD4BF]/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </motion.article>
  );
}

export default function ProjectGrid() {
  return (
    <section className="max-w-6xl mx-auto px-6">
      
      {/* Section Header Telemetry Block */}
      <div className="mb-14">
        <p className="font-mono text-xs tracking-[0.3em] text-[#2DD4BF] mb-2 uppercase">
          // index: allocation_registry_2026
        </p>
        <h1 className="font-mono text-2xl md:text-3xl font-bold text-white tracking-tight uppercase">
          Subsystem_Directory<span className="text-[#2DD4BF] animate-pulse">_</span>
        </h1>
      </div>

      {/* Grid Network Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-900 border border-slate-900 rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.6)]">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* Counter Stream */}
      <p className="font-mono text-[10px] text-slate-600 tracking-wider mt-4 text-right uppercase">
        Compiled_Allocation_Count: {String(PROJECTS.length).padStart(2, "0")}_Modules_Loaded
      </p>
    </section>
  );
}