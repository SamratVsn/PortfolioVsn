import React from 'react'
import Header from '../Components/Header'
import { motion } from 'framer-motion'
import myPhoto from '../assets/react.svg'

function About() {
  return (
    <div className="min-h-screen pb-20 bg-gradient-to-b from-[#0f172a] via-[#1e3a8a] to-[#0f172a] text-white">
      <Header />

      <div className="mt-[70px] w-full py-12 sm:py-16 px-6 sm:px-10 md:px-16 lg:px-24">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-sky-300 drop-shadow-md"
        >
          <span className='text-yellow-200 font-bold'>About</span> Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 md:gap-16 lg:gap-20 max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <img
              src={myPhoto}
              alt="Samrat Parajuli"
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 object-cover rounded-2xl shadow-lg border border-white/10 hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          {/* Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed text-center md:text-left backdrop-blur-sm bg-white/5 rounded-lg p-6 border border-white/10 shadow-xl"
          >
            Hey, I’m <span className="text-sky-300 font-semibold">Samrat Parajuli</span> — a grade 12 student from Nepal, passionate about
            <span className="text-cyan-300 font-semibold"> computer science</span> and
            <span className="text-blue-300 font-semibold"> web development</span>.
            I love creating projects with <span className="text-sky-200 font-semibold">React, JavaScript, and Tailwind</span>, and I’m currently exploring 
            <span className="text-sky-100 font-semibold"> computer networking</span> to deepen my technical foundation.

            <br /><br />
            Driven by curiosity and a growth mindset, I enjoy building clean, user-friendly interfaces and experimenting with new ideas. Every project helps me learn something new and push my limits further.

            <br /><br />
            I’m always open to <span className="text-green-300 font-semibold">collaborations</span>,
            <span className="text-purple-300 font-semibold">projects</span>, and meaningful
            <span className="text-pink-300 font-semibold">conversations</span> — let’s connect and create together 🚀
          </motion.p>
        </div>
      </div>
      <div>

        <div className="min-h-screen mt-16 sm:mt-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-sky-300 drop-shadow-md"
          >
            Skills
          </motion.h2>

          <div className="grid grid-cols-1 px-3 sm:px-2 lg:px-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* C Programming */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 shadow-xl hover:bg-white/10 hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-4">
                  C
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-sky-300">C Programming</h3>
                  <div className="flex items-center">
                    <span className="text-yellow-300 text-sm">✨ Intermediate</span>
                  </div>
                </div>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Solved algorithmic problems & built apps like Student-Management system, digital clock
              </p>
            </motion.div>

            {/* JavaScript */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 shadow-xl hover:bg-white/10 hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-lg mr-4">
                  JS
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-sky-300">JavaScript (ES6+)</h3>
                  <div className="flex items-center">
                    <span className="text-yellow-300 text-sm">✨ Intermediate</span>
                  </div>
                </div>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Used in interactive projects & dynamic portfolio features
              </p>
            </motion.div>

            {/* React */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 shadow-xl hover:bg-white/10 hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mr-4">
                  ⚛️
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-sky-300">React</h3>
                  <div className="flex items-center">
                    <span className="text-yellow-300 text-sm">✨ Intermediate</span>
                  </div>
                </div>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Built multiple projects, including blog & portfolio
              </p>
            </motion.div>

            {/* Tailwind CSS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 shadow-xl hover:bg-white/10 hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mr-4">
                  TW
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-sky-300">Tailwind CSS</h3>
                  <div className="flex items-center">
                    <span className="text-green-300 text-sm">✨ Comfortable</span>
                  </div>
                </div>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Designed responsive UIs & styled full websites
              </p>
            </motion.div>

            {/* Git & GitHub */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 shadow-xl hover:bg-white/10 hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center text-white font-bold text-sm mr-4">
                  🔧
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-sky-300">Git & GitHub</h3>
                  <div className="flex items-center">
                    <span className="text-blue-300 text-sm">✨ Familiar</span>
                  </div>
                </div>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Version control, commits, and pushing projects online
              </p>
            </motion.div>

            {/* Deployment */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 shadow-xl hover:bg-white/10 hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mr-4">
                  🚀
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-sky-300">Deployment</h3>
                  <div className="flex items-center">
                    <span className="text-orange-300 text-sm">✨ Beginner</span>
                  </div>
                </div>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Deployed sites with Vercel & GitHub Pages
              </p>
            </motion.div>

            {/* Problem-Solving */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 shadow-xl hover:bg-white/10 hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mr-4">
                  🧩
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-sky-300">Problem-Solving</h3>
                  <div className="flex items-center">
                    <span className="text-yellow-300 text-sm">✨ Intermediate</span>
                  </div>
                </div>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Solved algorithmic challenges & logical tasks in C
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 shadow-xl hover:bg-white/10 hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mr-4">
                  📚
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-sky-300">Currently Learning</h3>
                  <div className="flex items-center">
                    <span className="text-purple-300 text-sm">✨ Node.js</span>
                  </div>
                </div>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Basics, Server-side rendering & better React workflow
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
