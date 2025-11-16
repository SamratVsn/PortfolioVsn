import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from '../Components/Header'
import { Typewriter } from 'react-simple-typewriter'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaGithub, FaGoogle } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import Footer from '../Components/Footer'
import Testimonials from '../Components/Testimonials'

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e3a8a] via-[#2563eb] to-[#38bdf8] text-white font-sans">
      {loading ? (<motion.div
        className="fixed inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e3a8a] via-[#2563eb] to-[#38bdf8] flex flex-col items-center justify-center z-50"
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
          <span className="text-cyan-600">Vision</span>
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
                className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center relative pb-5"
              >
                <span
                  className="bg-gradient-to-r from-sky-500 via-sky-300 to-teal-300 bg-clip-text text-transparent font-extrabold"
                  style={{
                    textShadow: `
        2px 2px 0 rgba(30, 58, 138, 0.5),
        8px 8px 30px rgba(0, 0, 0, 0.6)
      `
                  }}
                >
                  Samrat Parajuli
                </span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.7, duration: 0.9 }}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-blue-900 via-emerald-400 via-teal-300 to-sky-200 rounded-full"
                />
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-sm sm:text-base md:text-lg lg:text-xl text-sky-100 h-6 sm:h-8 flex items-center justify-center cursor-pointer group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                <Typewriter
                  words={["⚡ Problem Solver", "💻 Kotlin Programmer", "⚡ Student", "💻 Developer"]} loop={true} cursor cursorStyle="|" typeSpeed={50} deleteSpeed={30} delaySpeed={2000} />
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-xs"> ✨ </span>
                <span className="ml-3 opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs">
                  <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-sky-500/20 to-cyan-500/20 border border-sky-400/30 rounded-full px-3 py-1 backdrop-blur-sm">
                    <span className="text-sky-200">More:</span>
                    <Link to="/projects" className="text-cyan-400 hover:text-cyan-300 font-bold transition-colors hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">Projects ✦</Link>
                  </span> </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
                className="w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl"
              >
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 leading-relaxed px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8 backdrop-blur-sm bg-white/5 rounded-lg sm:rounded-xl md:rounded-2xl border border-white/10 shadow-xl">
                  Hi! I’m a <span className="text-sky-300 font-semibold bg-sky-300/10 px-1 py-0.5 sm:px-2 sm:py-1 rounded transition-all duration-300 hover:bg-sky-300/20">passionate learner</span> and <span className="text-cyan-300 font-semibold bg-cyan-300/10 px-1 py-0.5 sm:px-2 sm:py-1 rounded transition-all duration-300 hover:bg-cyan-300/20">aspiring developer</span> from Nepal. I love building <span className="text-blue-300 font-semibold bg-blue-300/10 px-1 py-0.5 sm:px-2 sm:py-1 rounded transition-all duration-300 hover:bg-blue-300/20">projects</span> that make a difference and challenge my <span className="text-sky-200 font-bold bg-sky-200/10 px-1 py-0.5 sm:px-2 sm:py-1 rounded transition-all duration-300 hover:bg-sky-200/20">problem-solving</span> skills. Exploring new technologies and improving my craft is what drives me. When I’m not coding, I enjoy learning, experimenting, and sharing what I’ve learned with others. Welcome to my portfolio—I’m glad you’re here!
                </p>
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
          <Testimonials />
          <Footer />
        </div>
      </>)
      }
    </div >
  )
}

export default Home
