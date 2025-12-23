import React from 'react'
import Header from '../Components/Header'
import { motion } from 'framer-motion'
import PortfolioImage from '../assets/PortfolioImage.jpg'
import Footer from '../Components/Footer'

function About() {
  const skills = [
    { name: "Kotlin", level: "Intermediate", category: "Mobile" },
    { name: "Android Studio", level: "Learning", category: "Tools" },
    { name: "React", level: "Intermediate", category: "Web" },
    { name: "C Programming", level: "Intermediate", category: "Logic" },
    { name: "Git / GitHub", level: "Familiar", category: "Workflow" },
    {name: "JavaScript", level: "Intermediate", category: "Web" },
    { name: "Tailwind CSS", level: "Advanced", category: "Design" },
    {name: "HTML & CSS", level: "Advanced", category: "Web" },
    {name: "Figma", level: "Learning", category: "Design" },
  ];

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
                className="relative rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 border border-slate-800 object-cover w-full aspect-square"
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
                Hello. I’m <span className="text-slate-100 font-medium">Samrat Parajuli</span>. I reside at the intersection of logic and aesthetics. Currently a Grade 12 student in Nepal, my focus is directed toward the evolution of mobile and web ecosystems.
              </p>
              <p>
                My process involves transforming complex abstract ideas into <span className="text-slate-100 italic">intentional user experiences</span>. Whether I am architecting a React component or diving into the lifecycle of an Android app with <span className="text-slate-100">Kotlin</span>, I prioritize clean code and meaningful design.
              </p>
              <p className="text-sm border-l border-[#2DD4BF]/30 pl-6 italic">
                "Code is not just instructions for machines; it is a medium for human creativity."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Skills Section: The "System Log" Aesthetic */}
        <section className="mt-40">
          <div className="flex justify-between items-end mb-12 border-b border-slate-800 pb-4">
            <h3 className="text-slate-100 text-2xl font-mono tracking-tighter">Technical Stack</h3>
            <span className="text-slate-500 font-mono text-xs">// version_2.0.24</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-800 border border-slate-800 rounded-lg overflow-hidden">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ backgroundColor: "rgba(30, 41, 59, 0.5)" }}
                className="bg-[#020617] p-8 group transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-mono text-[#2DD4BF] uppercase tracking-tighter">[{skill.category}]</span>
                  <div className="w-2 h-2 rounded-full bg-slate-800 group-hover:bg-[#2DD4BF] transition-colors shadow-[0_0_8px_transparent] group-hover:shadow-[#2DD4BF]/50"></div>
                </div>
                <h4 className="text-slate-100 font-bold text-xl mb-1">{skill.name}</h4>
                <p className="text-slate-500 font-mono text-xs">{skill.level}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default About  