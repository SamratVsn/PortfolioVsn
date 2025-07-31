import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaGraduationCap, FaCode } from 'react-icons/fa';
import { FaReact, FaCss3Alt } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import AboutMeB from '../assets/AboutMeB.png';

function About() {
  return (
    <div
      className="min-h-screen flex items-center py-24 bg-cover bg-center text-white pt-[120px]"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 25, 47, 0.85), rgba(10, 25, 47, 0.85)), url(${AboutMeB})`,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-[90%] max-w-6xl mx-auto px-6 flex flex-col gap-12 lg:flex-row lg:gap-16"
      >
        <div className="w-full">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300">
              About Me
            </h2>
            <div className="w-[120px] h-[3px] mx-auto bg-gradient-to-r from-[#00e0ff] to-[#00ff95] rounded-full" />
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-3 gap-10 items-start">
            {/* Left Column (Text + Info Cards) */}
            <div className="md:col-span-2 space-y-6">
              <p className="text-lg leading-loose text-slate-300">
                Hey, I’m <span className="font-semibold text-white">Samrat Parajuli</span> — a high school student from Nepal, passionate about computer science and web development. With a strong grasp on HTML, CSS, and JS, I’m on a journey to master C and explore networking.
              </p>
              <p className="text-lg leading-loose text-slate-300">
                Guided by my devotion to <section className="italic text-[#87f7cf]">Lord Krishna</section>, I bring focus, discipline, and purpose into my learning. Whether it’s solving bugs or understanding system internals, I strive to grow with every step.
              </p>
              <p className="text-lg leading-loose text-slate-300">
                Open to collaborations, mentorship, and meaningful conversations. Let's build, learn, and grow together 🚀
              </p>

              {/* Info Cards */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.15 }}
                className="grid sm:grid-cols-3 gap-4"
              >
                {[
                  {
                    icon: <FaMapMarkerAlt className="text-[#00e0ff] text-2xl mb-2" />,
                    text: 'Kathmandu, Nepal',
                  },
                  {
                    icon: <FaGraduationCap className="text-[#00e0ff] text-2xl mb-2" />,
                    text: 'CS Student',
                  },
                  {
                    icon: <FaCode className="text-[#00e0ff] text-2xl mb-2" />,
                    text: 'Web Dev Enthusiast',
                  },
                ].map(({ icon, text }, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:translate-y-[-4px] transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="text-[#00e0ff] text-xl">{icon}</div>
                    <span className="text-sm text-slate-200">{text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Stats Column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.15 }}
              className="flex flex-col gap-6"
            >
              {[
                { stat: '9+', label: 'Months Learning' },
                { stat: '5+', label: 'Projects Built' },
                { stat: '100+', label: 'Hours Coded' },
              ].map(({ stat, label }, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white/5 backdrop-blur-lg p-6 text-center rounded-2xl border border-white/10 hover:border-[#00e0ff] hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)] transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="text-4xl font-bold text-[#00e0ff] mb-1 font-mono">{stat}</div>
                  <div className="text-xs uppercase tracking-wider text-slate-300">{label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Currently Exploring Section */}
          <div className="mt-12 max-w-3xl mx-auto">
            <h4 className="text-cyan-400 font-semibold mb-6 text-xl text-center lg:text-left">
              Currently Exploring:
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* React */}
              <div className="flex flex-col items-center bg-white/5 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/10 hover:shadow-lg hover:border-cyan-400 transition-shadow cursor-default">
                <FaReact className="text-cyan-400 text-4xl mb-3" />
                <p className="text-slate-300 font-medium text-sm">
                  React (Hooks & <br /> Advanced Patterns)
                </p>
              </div>

              {/* Tailwind */}
              <div className="flex flex-col items-center bg-white/5 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/10 hover:shadow-lg hover:border-cyan-400 transition-shadow cursor-default">
                <SiTailwindcss className="text-cyan-400 text-4xl mb-3" />
                <p className="text-slate-300 font-medium text-sm">Tailwind CSS Deep Dive</p>
              </div>

              {/* Next.js */}
              <div className="flex flex-col items-center bg-white/5 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/10 hover:shadow-lg hover:border-cyan-400 transition-shadow cursor-default">
                <SiNextdotjs className="text-cyan-400 text-4xl mb-3" />
                <p className="text-slate-300 font-medium text-sm">Next.js (SSR & API Routes)</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
