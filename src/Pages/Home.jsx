import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from '../Components/Header'
import { Typewriter } from 'react-simple-typewriter'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaGithub, FaGoogle } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import ReactI from '../assets/react.svg'
import HireMe from '../Components/HireMe'

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e3a8a] to-[#38bdf8] text-white font-sans">
      {loading ? (<motion.div
        className="fixed inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e3a8a] to-[#38bdf8] flex flex-col items-center justify-center z-50"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8 } }}
      >
        <div className="flex space-x-2 sm:space-x-3">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-yellow-100"
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 0.8,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
        <motion.h1
          className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg mt-4 sm:mt-5 text-center px-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <span className="text-sky-600 brightness-110">Connecting</span>{' '}
          <span className="text-blue-600">with</span>{' '}
          <span className="text-cyan-600">Vsn</span>
        </motion.h1>
        <motion.p
          className="text-white/70 mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl px-4 text-center max-w-xs sm:max-w-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Loading your experience...
        </motion.p>
      </motion.div>
      ) : (<>
        <Header />
        <div className="pt-[70px] flex flex-col">
          <div className="min-h-screen flex-1 flex flex-col items-center justify-center px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8">
            <div className="min-h-[25vh] items-center justify-center px-4 sm:max-w-6xl mx-auto flex flex-col text-center space-y-6 sm:space-y-8">

              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center"
              >
                Hello, I'm <span className="text-sky-300 cursor-pointer hover:text-cyan-200 transition-colors duration-300">Samrat</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-sm sm:text-base md:text-lg lg:text-xl text-sky-100 h-6 sm:h-8 flex items-center justify-center"
              >
                <Typewriter
                  words={["Learner of Tech", "Explorer of Consciousness", "Student", "Developer"]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={45}
                  delaySpeed={1100}
                />
              </motion.div>
              <HireMe />
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
                className="w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl"
              >
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 leading-relaxed px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8 backdrop-blur-sm bg-white/5 rounded-lg sm:rounded-xl md:rounded-2xl border border-white/10 shadow-xl">
                  I'm a <span className="text-sky-300 font-semibold bg-sky-300/10 px-1 py-0.5 sm:px-2 sm:py-1 rounded transition-all duration-300 hover:bg-sky-300/20">passionate learner</span> and <span className="text-cyan-300 font-semibold bg-cyan-300/10 px-1 py-0.5 sm:px-2 sm:py-1 rounded transition-all duration-300 hover:bg-cyan-300/20">aspiring developer</span> from Nepal, eager to create meaningful <span className="text-blue-300 font-semibold bg-blue-300/10 px-1 py-0.5 sm:px-2 sm:py-1 rounded transition-all duration-300 hover:bg-blue-300/20">projects</span> and grow my skills in technology and <span className="text-sky-200 font-bold bg-sky-200/10 px-1 py-0.5 sm:px-2 sm:py-1 rounded transition-all duration-300 hover:bg-sky-200/20">problem-solving</span>.
                </p>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <Link
                  to="/projects"
                  className="inline-block px-5 sm:px-6 md:px-8 lg:px-10 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-sky-500 to-cyan-400 text-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg hover:shadow-cyan-300/50 transition-all duration-300 font-medium text-sm sm:text-base lg:text-lg hover:scale-105 active:scale-95"
                >
                  See My Works
                </Link>
              </motion.div>

              <motion.div
                className="flex items-center justify-center gap-3 sm:mx-auto sm:gap-4 md:gap-6 pt-2 sm:pt-4 px-3 py-2 sm:px-6 sm:py-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                {[
                  { href: "https://www.linkedin.com/in/samrat-parajuli-54310732b/", icon: FaLinkedin, label: "LinkedIn", color: "hover:border-blue-400/50 hover:bg-blue-400/10" },
                  { href: "https://github.com/SamratVsn", icon: FaGithub, label: "GitHub", color: "hover:border-gray-400/50 hover:bg-gray-400/10" },
                  { href: "mailto:std.samrat068@gmail.com", icon: MdEmail, label: "Email", color: "hover:border-red-400/50 hover:bg-red-400/10" },
                  { href: "https://developers.google.com/profile/u/samratvsm", icon: FaGoogle, label: "Google", color: "hover:border-green-400/50 hover:bg-green-400/10" }
                ].map(({ href, icon: Icon, label, color }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 ${color}`}
                    whileHover={{
                      scale: 1.1,
                      y: -2,
                      boxShadow: "0 8px 20px rgba(34, 211, 238, 0.2)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-sky-200 group-hover:text-white transition-all duration-300 group-hover:scale-110" />

                    <div className="absolute -top-8 sm:-top-10 md:-top-12 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900/95 backdrop-blur-sm text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg border border-white/10">
                      {label}
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
          <div className="min-h-60 w-full bg-gradient-to-b from-[#1e3a8a]/30 via-[#0f172a]/60 to-[#0f172a] py-12 sm:py-16 px-6 sm:px-10 md:px-16 lg:px-24 mt-12">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 text-sky-300 drop-shadow-md"
            >
              About Me
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed max-w-3xl mx-auto text-center backdrop-blur-sm bg-white/5 rounded-lg p-6 border border-white/10 shadow-xl"
            >
              Hi, I’m <span className="text-sky-300 font-semibold">Samrat Parajuli</span> — a grade 12 student from Nepal passionate about
              <span className="text-cyan-300 font-semibold"> web development</span> and
              <span className="text-blue-300 font-semibold"> computer science</span>.
              I build projects with <span className="text-sky-200 font-semibold">React, JavaScript, and Tailwind</span> and enjoy exploring new ideas in
              <span className="text-sky-100 font-semibold"> computer networking & programming</span>. 🚀
              <br /><br />
              <Link
                to="/about"
                className="inline-block mt-4 px-5 sm:px-6 md:px-8 py-2.5 bg-gradient-to-r from-sky-500 to-cyan-400 text-white rounded-lg shadow-lg hover:shadow-cyan-300/50 transition-all duration-300 font-medium text-sm sm:text-base hover:scale-105 active:scale-95"
              >
                Learn More
              </Link>
            </motion.p>
            <motion.img
              src={ReactI}
              alt="React Logo"
              className="mt-20 w-32 h-32 mx-auto"
              initial={{ rotate: 0, scale: 1 }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
              whileHover={{
                scale: 1.3,
                rotate: 360,
                transition: { repeat: Infinity, duration: 2, ease: "linear" },
              }}
            />
          </div>
        </div>
      </>)
      }
    </div >
  )
}

export default Home