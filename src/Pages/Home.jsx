import React, { useEffect, useState } from 'react'
import { motion} from 'framer-motion'
import Header from '../Components/Header'
import { FaLinkedin, FaGithub, FaGoogle } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import Footer from '../Components/Footer'
import Testimonials from '../Components/Testimonials'

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const details = [
    { label: "FOCUS", value: "Mobile App Development", detail: "Building interfaces that feel natural." },
    { label: "PATH", value: "Continuous Learning", detail: "Deep diving into learning & Problem Solving." },
    { label: "MIND", value: "Spiritual Tech", detail: "Merging logic with mindful execution." }
  ];

  const services = [
    {
      id: "01",
      title: "Problem Solving",
      description: "Tackling complex challenges with clean, efficient code and innovative solutions",
      tag: "Logic"
    },
    {
      id: "02",
      title: "Android Development",
      description: "Building native mobile experiences with Kotlin and Jetpack Compose",
      tag: "Mobile"
    },
    {
      id: "03",
      title: "Interface Design",
      description: "Creating intentional, intuitive interfaces that prioritize user harmony",
      tag: "UI/UX"
    },
    {
      id: "04",
      title: "Frontend Systems",
      description: "Developing robust client-side solutions with modern reactive frameworks",
      tag: "Web"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100 font-sans">
      {loading ? (
        <motion.div
          className="fixed inset-0 bg-[#0F172A] flex flex-col items-center justify-center z-50"
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* The Iris: A soft, breathing glow instead of a spin */}
          <div className="relative flex items-center justify-center">
            <motion.div
              className="absolute w-12 h-12 bg-[#2DD4BF]/20 rounded-full blur-xl"
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />
            <motion.div
              className="w-2 h-2 bg-[#2DD4BF] rounded-full shadow-[0_0_15px_#2DD4BF]"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />
          </div>

          <div className="mt-12 text-center">
            <motion.h1
              className="text-slate-100 text-xl font-mono tracking-[0.3em] uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              Initializing
            </motion.h1>

            <motion.div
              className="mt-2 h-[1px] bg-slate-800 w-48 overflow-hidden relative mx-auto"
            >
              <motion.div
                className="absolute inset-0 bg-[#2DD4BF]"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
            </motion.div>

            <motion.p
              className="text-slate-500 mt-4 font-mono text-[10px] uppercase tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 2, times: [0, 0.5, 1] }}
            >
              Preparing the space
            </motion.p>
          </div>
        </motion.div>
      ) : (
        <>
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
                  <span className="text-slate-100 font-bold tracking-tight">
                    Samrat Parajuli
                  </span>

                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.7, duration: 0.9 }}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#2DD4BF] rounded-full shadow-[0_0_15px_rgba(45,212,191,0.4)]"
                  />
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9, duration: 1 }}
                  className="w-full max-w-2xl border-l border-slate-800 pl-6 py-4 my-8"
                >
                  <p className="text-base md:text-lg text-slate-400 font-mono leading-relaxed">
                    <span className="text-slate-100 italic">"Seeker of knowledge, builder of systems."</span>
                    <br /><br />
                    Hi! I'm a developer from Nepal focused on
                    <span className="text-[#2DD4BF]"> mobile architecture </span>
                    and <span className="text-[#2DD4BF]"> user-centric design</span>.
                    I view coding as a craft—a continuous journey of learning and sharing
                    what I discover along the way.
                  </p>
                </motion.div>

                <motion.div
                  className="flex items-center gap-8 pt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  {[
                    { href: "https://www.linkedin.com/in/samrat-parajuli-54310732b/", icon: FaLinkedin, label: "LinkedIn" },
                    { href: "https://github.com/SamratVsn", icon: FaGithub, label: "GitHub" },
                    { href: "mailto:std.samrat068@gmail.com", icon: MdEmail, label: "Email" },
                    { href: "https://developers.google.com/profile/u/samratvsm", icon: FaGoogle, label: "Google" }
                  ].map(({ href, icon: Icon, label }, index) => (
                    <motion.a
                      key={index}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex items-center justify-center"
                      whileHover={{ y: -3 }}>
                      <div className="absolute -bottom-4 w-1 h-1 bg-[#2DD4BF] rounded-full opacity-0 group-hover:opacity-100 transition-all" />

                      <Icon className="text-xl md:text-2xl text-slate-500 group-hover:text-slate-100 transition-colors duration-300" />

                      <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-all font-mono text-[10px] tracking-tighter text-[#2DD4BF] uppercase">
                        {label}
                      </span>
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </div>

            <div className="max-w-3xl mx-auto space-y-8 mt-12 px-6">
              {details.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.3 }}
                  className="group flex flex-col md:flex-row md:items-start gap-4 border-l border-slate-800 pl-6 py-2 hover:border-[#2DD4BF] transition-colors duration-500"
                >
                  <span className="font-mono text-xs text-[#2DD4BF] mt-1 opacity-60">
                    [{item.label}]
                  </span>
                  <div>
                    <h3 className="text-xl text-slate-200 font-semibold font-mono">
                      {item.value}
                    </h3>
                    <p className="text-slate-500 text-sm mt-1 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto px-6 py-24"
            >
              {/* Header: Solid & Monospace */}
              <div className="mb-16">
                <motion.h2
                  className="text-slate-100 text-3xl md:text-4xl font-mono tracking-tighter mb-4"
                >
                  Expertise<span className="text-[#2DD4BF]">_</span>
                </motion.h2>
                <p className="text-slate-500 font-mono text-sm uppercase tracking-widest">
      // Merging technical precision with mindful design
                </p>
              </div>

              {/* Grid: Border-based instead of Box-based */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-800/50 border border-slate-800 overflow-hidden rounded-2xl">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ backgroundColor: "rgba(15, 23, 42, 0.6)" }}
                    className="bg-[#0F172A] p-8 md:p-12 transition-all duration-500 group relative"
                  >
                    {/* Subtle accent corner */}
                    <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity">
                      <span className="font-mono text-[#2DD4BF] text-xs tracking-widest uppercase">
                        {service.tag}
                      </span>
                    </div>

                    <div className="flex flex-col gap-4">
                      <span className="text-[#2DD4BF] font-mono text-sm mb-2 opacity-50">
                        {service.id} //
                      </span>

                      <h3 className="text-xl md:text-2xl font-bold text-slate-100 group-hover:text-[#2DD4BF] transition-colors duration-300">
                        {service.title}
                      </h3>

                      <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-sm">
                        {service.description}
                      </p>
                    </div>

                    {/* The "Glow" - appears only on hover */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#2DD4BF]/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <Testimonials />
            <Footer />
          </div>
        </>
      )}
    </div>
  )
}

export default Home