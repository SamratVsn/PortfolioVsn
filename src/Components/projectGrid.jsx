import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Terminal, Code2, Globe, Cpu, ArrowUpRight } from 'lucide-react';

export const ProjectGrid = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Student Management System",
      desc: "Console-based CRUD implementation focusing on binary file handling and memory management.",
      link: "/projects/sms",
      category: "C_LOGIC",
      tags: ["C", "System"],
      icon: Cpu,
    },
    {
      title: "Bank Management (Kotlin)",
      desc: "An exploration of OOPS principles and state management within a CLI banking environment.",
      link: "/projects/bmsk",
      category: "KOTLIN_CLI",
      tags: ["Kotlin", "OOPS"],
      icon: Terminal,
    },
    {
      title: "BlogVsn Platform",
      desc: "Integration-heavy blogging engine utilizing Google OAuth and RESTful API structures.",
      link: "/projects/blogvsn",
      category: "WEB_APP",
      tags: ["React", "OAuth"],
      icon: Globe,
    },
    {
      title: "Unified Portfolio",
      desc: "The current interface: A study in technical minimalism and motion design.",
      link: "/projects/this",
      category: "FRONTEND",
      tags: ["Framer", "Tailwind"],
      icon: Code2,
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Refined Header */}
      <header className="mb-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-block"
        >
          <span className="text-[#2DD4BF] font-mono text-xs uppercase tracking-[0.3em] mb-4 block">
            // Repository: Build_Log_2025
          </span>
          <h1 className="text-4xl md:text-6xl font-mono tracking-tighter text-slate-100 uppercase">
            Self Projects<span className="text-[#2DD4BF]">_</span>
          </h1>
        </motion.div>
      </header>

      {/* Grid: Border-collapse style (The Engineer look) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-800/50 border border-slate-800 rounded-lg overflow-hidden shadow-2xl shadow-black/50">
        {projects.map((project, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative bg-[#020617] p-8 md:p-12 hover:bg-[#070d1f] transition-all duration-500 cursor-pointer"
            onClick={() => navigate(project.link)}
          >
            {/* Project Index Number */}
            <span className="absolute top-8 right-8 font-mono text-[10px] text-slate-700 group-hover:text-[#2DD4BF] transition-colors">
              0{i + 1}
            </span>

            <div className="flex flex-col h-full">
              <div className="mb-6">
                <span className="text-[10px] font-mono text-slate-500 bg-slate-900 border border-slate-800 px-2 py-1 rounded">
                  {project.category}
                </span>
              </div>

              <h3 className="text-2xl font-mono font-bold text-slate-100 mb-4 flex items-center gap-3">
                {project.title}
                <ArrowUpRight className="w-4 h-4 text-[#2DD4BF] opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
                {project.desc}
              </p>

              {/* Tag system: clean and lowercase */}
              <div className="mt-auto flex gap-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[11px] font-mono text-slate-600 group-hover:text-slate-400 transition-colors">
                    #{tag.toLowerCase()}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;