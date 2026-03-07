import React from "react";
import Header from "../Components/Header";
import { motion } from "framer-motion";
import PortfolioImage from "../assets/PortfolioImage.jpg";
import Footer from "../Components/Footer";

function About() {
  const skills = [
    { name: "Kotlin", level: "Intermediate", category: "Mobile Development" },
    {
      name: "Jetpack Compose",
      level: "Beginner",
      category: "Mobile Development",
    },
    {
      name: "Android Studio",
      level: "Proficient",
      category: "Development Tools",
    },
    {
      name: "Material Design (Material 3)",
      level: "Beginner",
      category: "UI Design",
    },

    { name: "C Programming", level: "Intermediate", category: "Programming" },
    {
      name: "Data Structures & Algorithms",
      level: "Beginner",
      category: "Foundations",
    },

    { name: "Git / GitHub", level: "Familiar", category: "Version Control" },
    {
      name: "Debugging & Problem Solving",
      level: "Intermediate",
      category: "Workflow",
    },
    {
      name: "Android Activity Lifecycle",
      level: "Beginner",
      category: "Mobile Foundations",
    },

    { name: "HTML & CSS", level: "Advanced", category: "Web Fundamentals" },
    { name: "JavaScript", level: "Intermediate", category: "Web Fundamentals" },

    { name: "Figma", level: "Proficient", category: "Design Tools" },
  ];

  const levelColor = {
    Beginner: "text-yellow-400",
    Intermediate: "text-blue-400",
    Advanced: "text-emerald-400",
    Proficient: "text-cyan-400",
    Familiar: "text-slate-400",
  };

  const focuses = [
    {
      id: "01",
      label: "Android Dev",
      status: "IN_PROGRESS",
      accent: "#2DD4BF",
      description: (
        <>
          Advancing Android development with{" "}
          <span className="text-white">Kotlin</span> and{" "}
          <span className="text-white">Jetpack Compose</span> — currently
          completing the official Android Basics pathway (Unit 6).
        </>
      ),
      tags: ["Kotlin", "Jetpack Compose", "Android SDK"],
    },
    {
      id: "02",
      label: "CS Foundations",
      status: "ONGOING",
      accent: "#6366F1",
      description: (
        <>
          Strengthening core programming foundations through{" "}
          <span className="text-white">problem solving</span>,{" "}
          <span className="text-white">data structures</span>, and practical
          debugging techniques.
        </>
      ),
      tags: ["DSA", "Algorithms", "Debugging"],
    },
    {
      id: "03",
      label: "Open Source",
      status: "ACTIVE",
      accent: "#F59E0B",
      description: (
        <>
          Building Android projects and refining code through{" "}
          <span className="text-white">experimentation</span>,{" "}
          <span className="text-white">iteration</span>, and open-source
          learning.
        </>
      ),
      tags: ["Projects", "GitHub", "Iteration"],
    },
  ];

  const statusColor = {
    IN_PROGRESS: "#2DD4BF",
    ONGOING: "#6366F1",
    ACTIVE: "#F59E0B",
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-[#2DD4BF]/30">
      <Header />

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Image Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#2DD4BF] to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <img
                src={PortfolioImage}
                alt="Samrat Parajuli"
                className="relative rounded-2xl transition-all duration-700 border border-slate-800 object-cover w-full aspect-square rayscale-0 lg:grayscale lg:hover:grayscale-0"
              />
              <div className="mt-6 font-mono text-xs tracking-widest uppercase text-slate-500">
                // Loc: Nepal_27.7172° N
              </div>
            </div>
          </motion.div>

          {/* Biography Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 space-y-8"
          >
            <div>
              <h2 className="text-slate-100 text-4xl md:text-5xl font-mono tracking-tighter mb-2">
                The Creative One<span className="text-[#2DD4BF]">_</span>
              </h2>
              <p className="text-[#2DD4BF] font-mono text-sm uppercase tracking-[0.2em]">
                Student & Software Developer
              </p>
            </div>

            <div className="space-y-6 text-slate-400 leading-relaxed text-lg font-light">
              <p>
                Hello. I’m{" "}
                <span className="text-slate-100 font-medium">
                  Samrat Parajuli
                </span>
                . A student from Nepal with a growing interest in how thoughtful
                code and design shape the digital experiences people interact
                with every day. My curiosity currently revolves around the
                evolving landscape of mobile technology.
              </p>

              <p>
                I spend much of my time exploring Android development with{" "}
                <span className="text-slate-100">Kotlin</span> and{" "}
                <span className="text-slate-100">Jetpack Compose</span>. What
                motivates me most is the process of turning abstract ideas into{" "}
                <span className="text-slate-100 italic">
                  intentional user experiences
                </span>
                , built through simple architecture and clean, readable code.
              </p>

              <p className="text-sm border-l border-[#2DD4BF]/30 pl-6 italic">
                "I approach development as a craft — continuously learning,
                refining ideas, and building systems that aim to be simple,
                useful, and long-lasting."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <section className="mt-40">
          <div className="flex justify-between items-end mb-12 border-b border-slate-800 pb-4">
            <h3 className="text-slate-100 text-2xl font-mono tracking-tighter">
              Technical Stack
            </h3>
            <span className="text-slate-500 font-mono text-xs">
              // system_log.v2
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-800 border border-slate-800 rounded-lg overflow-hidden">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative bg-[#020617] p-8 pl-10 group"
              >
                {/* Signal Rail */}
                <span className="absolute left-0 top-0 h-full w-[2px] bg-slate-800 group-hover:bg-[#2DD4BF] transition-colors" />

                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-mono px-2 py-0.5 border border-slate-700 rounded text-[#2DD4BF] uppercase">
                    {skill.category}
                  </span>
                  <span className="text-[10px] font-mono text-slate-600">
                    ID:{String(index).padStart(2, "0")}
                  </span>
                </div>

                {/* Skill Name */}
                <h4 className="text-slate-100 font-semibold text-lg">
                  {skill.name}
                </h4>

                {/* Status */}
                <p className="text-[10px] font-mono mt-2 text-slate-500">
                  STATUS:{" "}
                  <span className={levelColor[skill.level]}>{skill.level}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Current Focus Section */}
        <section className="mt-32">
          {/* Section Header */}
          <div className="flex justify-between items-end mb-10 border-b border-slate-800 pb-4">
            <h3 className="text-slate-100 text-2xl font-mono tracking-tighter">
              Current Focus
            </h3>
            <span className="text-slate-500 font-mono text-xs">
              // active_processes
            </span>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 gap-4">
            {focuses.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="group relative bg-[#020617] border border-slate-800 rounded-lg overflow-hidden
                       hover:border-slate-600 transition-colors duration-300"
              >
                <span
                  className="absolute top-0 left-0 w-full h-[1px] opacity-60"
                  style={{ background: item.accent }}
                />

                <div className="flex items-start gap-5 p-6">
                  <div className="flex flex-col items-center gap-2 pt-0.5 shrink-0">
                    <span className="font-mono text-xs text-slate-600">
                      {item.id}
                    </span>
                    <span
                      className="w-[2px] flex-1 min-h-[40px] rounded-full"
                      style={{ background: item.accent }}
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-3 gap-3 flex-wrap">
                      <span
                        className="font-mono text-xs font-semibold tracking-widest uppercase"
                        style={{ color: item.accent }}
                      >
                        {item.label}
                      </span>
                      <span
                        className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-widest
                               border rounded-full px-2.5 py-0.5"
                        style={{
                          color: item.accent,
                          borderColor: `${item.accent}40`,
                          backgroundColor: `${item.accent}0D`,
                        }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full animate-pulse"
                          style={{ background: item.accent }}
                        />
                        {item.status}
                      </span>
                    </div>

                    <p className="font-mono text-sm text-slate-400 leading-relaxed mb-4">
                      <span className="text-slate-600 mr-1">&gt;</span>
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[11px] text-slate-500 border border-slate-800
                                 rounded px-2 py-0.5 group-hover:border-slate-700 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default About;
