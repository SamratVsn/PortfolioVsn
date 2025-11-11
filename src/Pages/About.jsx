import React from 'react'
import Header from '../Components/Header'
import { motion } from 'framer-motion'
import PortfolioImage from '../assets/PortfolioImage.jpg'
import HireMe from '../Components/HireMe'

function About() {
  return (
    <div className="min-h-screen pb-20 bg-gradient-to-b from-[#0f172a] via-[#1e3a8a] to-[#0f172a] text-white">
      <Header />
    <HireMe />
      <div className="mt-[70px] w-full py-12 sm:py-16 px-6 sm:px-10 md:px-16 lg:px-24 relative">
  {/* Interactive Heading */}
  <motion.h2
    initial={{ opacity: 0, y: -20, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    whileHover={{ scale: 1.05, rotate: 2 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-cyan-300 drop-shadow-lg"
  >
    <span className="text-yellow-200 font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400">
      Get to Know
    </span>{" "}
    Me
  </motion.h2>

  <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 max-w-6xl mx-auto">

    {/* Interactive Image */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.12, rotate: 4, transition: { duration: 0.3 } }}
      viewport={{ once: true }}
      className="flex-shrink-0 w-44 h-44 sm:w-52 sm:h-52 md:w-64 md:h-64 mb-6 md:mb-0"
    >
      <img
        src={PortfolioImage}
        alt="Samrat Parajuli"
        className="w-full h-full object-cover rounded-3xl shadow-2xl border-2 border-white/20 hover:shadow-cyan-400/50 transition-transform duration-300 mx-auto md:mx-0"
      />
    </motion.div>

    {/* Text Card */}
    <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.3 }}
  viewport={{ once: true }}
  className="flex-1 backdrop-blur-md bg-white/5 rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl w-full md:max-w-2xl"
>
  <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed mb-4">
    Hello! I’m <span className="text-sky-300 font-semibold">Samrat Parajuli</span>, a Grade 12 student from Nepal with a deep passion for <span className="text-cyan-300 font-semibold">computer science</span> and <span className="text-blue-300 font-semibold">mobile app development</span>.  
    I love turning ideas into <span className="text-sky-200 font-semibold">interactive, user-focused experiences</span> using <span className="text-sky-100 font-semibold">React</span> and now exploring <span className="text-indigo-300 font-semibold">Kotlin</span> for <span className="text-indigo-300 font-semibold">Android development</span>.  
    Currently, I’m diving deeper into <span className="text-indigo-300 font-semibold">Android Studio</span> to strengthen my technical foundation and problem-solving skills.
  </p>

  <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed mb-4">
    Driven by curiosity, creativity, and a growth-oriented mindset, I enjoy crafting clean, intuitive interfaces and experimenting with new technologies.  
    Every project I take on is an opportunity to learn, grow, and push the boundaries of what’s possible.
  </p>

  <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed mb-4">
    Beyond coding, I’m always eager to <span className="text-green-300 font-semibold">collaborate</span>, contribute to exciting <span className="text-purple-300 font-semibold">projects</span>, and engage in meaningful <span className="text-pink-300 font-semibold">conversations</span>.  
    Each interaction helps me gain new perspectives and become a better creator.
  </p>

  <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
    Let’s connect and build something that blends <span className="text-sky-300 font-semibold">creativity</span>, <span className="text-blue-300 font-semibold">functionality</span>, and <span className="text-indigo-300 font-semibold">beautiful design</span> 🚀
  </p>
</motion.div>
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
            <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  viewport={{ once: true }}
  className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 shadow-xl hover:bg-white/10 hover:scale-105 transition-all duration-300"
>
  <div className="flex items-center mb-4">
    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-lg mr-4">
      KT
    </div>
    <div>
      <h3 className="text-lg font-semibold text-cyan-300">Kotlin</h3>
      <div className="flex items-center">
        <span className="text-purple-300 text-sm">✨ Beginner</span>
      </div>
    </div>
  </div>
  <p className="text-white/80 text-sm leading-relaxed">
    Using it in Android development & building clean, concise mobile applications
  </p>
</motion.div>

<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  viewport={{ once: true }}
  className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 shadow-xl hover:bg-white/10 hover:scale-105 transition-all duration-300"
>
  <div className="flex items-center mb-4">
    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-lg mr-4">
      AS
    </div>
    <div>
      <h3 className="text-lg font-semibold text-cyan-300">Android Studio</h3>
      <div className="flex items-center">
        <span className="text-green-300 text-sm">✨ Starter</span>
      </div>
    </div>
  </div>
  <p className="text-white/80 text-sm leading-relaxed">
    Learning to use it for Kotlin & Applications. Exploring the uses & doing it regularly
  </p>
</motion.div>


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
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
