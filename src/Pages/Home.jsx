import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import SEO from '../Components/SEO'
import { FaLinkedin, FaGithub, FaGoogle, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { ArrowUpRight, Github as GithubLucide, Terminal, Cpu, HardDrive, Layers } from 'lucide-react'
import Footer from '../Components/Footer'
import Testimonials from '../Components/Testimonials'
import BrandLogo from '../assets/Brand-Logo.png'

function Home() {
  const [loading, setLoading] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const systemParameters = [
    { label: "FOCUS", value: "Android Runtime Optimization", detail: "Structuring native engine pipelines using Kotlin & Jetpack Compose." },
    { label: "STACK", value: "Modular Monolith Architecture", detail: "Isolating business logic into multi-module clean codebases with strict dependency boundaries." },
    { label: "MIND", value: "Deterministic Execution", detail: "Enforcing predictable state flows and strict data lineage tracing across all layers." }
  ];

  const expertiseMatrix = [
    {
      id: "01",
      title: "Native Android Craft",
      description: "Assembling declarative runtime interfaces with modern Kotlin, Jetpack Compose, and material UI pipelines.",
      tag: "UI_ENGINE",
      icon: <Cpu size={16} />
    },
    {
      id: "02",
      title: "Asynchronous Pipelines",
      description: "Managing non-blocking concurrency, custom schedulers, and reactive structural data via Coroutines & Flow.",
      tag: "ASYNC_CORE",
      icon: <Terminal size={16} />
    },
    {
      id: "03",
      title: "Local State Engines",
      description: "Engineering resilient caching systems and transaction isolation schemes using Room DB and DataStore.",
      tag: "STORAGE_SYS",
      icon: <HardDrive size={16} />
    },
    {
      id: "04",
      title: "Clean Architecture",
      description: "Enforcing clean separation of concerns using isolated Domain layers and Hilt for Dependency Injection.",
      tag: "INFRASTRUCTURE",
      icon: <Layers size={16} />
    }
  ];

  const featuredProjects = [
    {
      id: "01",
      category: "C_SYSTEMS",
      title: "Student Management Kernel",
      description: "Low-overhead console engine built in pure C utilizing binary I/O, strict struct serialization, and target byte-offset random file navigation access.",
      tags: ["#C", "#Binary-IO", "#Memory-Mapping"],
      github: "https://github.com/SamratVsn/C-codes",
      path: "/projects/sms"
    },
    {
      id: "02",
      category: "KOTLIN_RUNTIME",
      title: "Encapsulated Banking Core",
      description: "OOP-driven ledger environment tracking financial transaction isolation, cryptographically secure UUID-mapped identities, and strict mathematical state mutations.",
      tags: ["#Kotlin", "#OOP-Encapsulation", "#CLI-Engine"],
      github: "https://github.com/SamratVsn/Kotlin-Beginner-Codes/blob/main/bankAccountManagement.kt",
      path: "/projects/bmsk"
    },
    {
      id: "03",
      category: "CLOUD_INTERFACE",
      title: "BlogVsn Edge Aggregator",
      description: "High-performance interface aggregating network requests through Google OAuth 2.0 protocol and Blogger API v3, optimized with global edge-caching mechanics.",
      tags: ["#React", "#OAuth-Security", "#REST-API"],
      github: "https://github.com/SamratVsn/BlogVsn",
      live: "https://blogvsn.vercel.app/",
      path: "/projects/blogvsn"
    }
  ];

  const toolchainCategories = [
    {
      title: "Runtime Environments",
      skills: ["Kotlin", "Java", "C Programming", "Python", "JavaScript / ES6+"]
    },
    {
      title: "Android Architecture Stack",
      skills: ["Jetpack Compose", "Coroutines & Flow", "Clean Architecture", "Room Cache", "Retrofit Engine"]
    },
    {
      title: "Infrastructure & Tools",
      skills: ["Git Control", "Firebase Gateway", "Android Studio IDE", "Unity Engine", "Vercel Deployments"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-[#2DD4BF]/20 selection:text-[#2DD4BF]">
      <SEO ogUrl="https://www.samratparajuli0.com.np/" />

      {loading ? (
        <motion.div
          className="fixed inset-0 bg-[#020617] flex flex-col items-center justify-center z-50 font-mono overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            animate={{ opacity: [0.06, 0.12, 0.06], scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <img src={BrandLogo} alt="" className="w-[500px] h-[500px] object-contain" />
          </motion.div>

          <div className="relative flex items-center justify-center">
            <motion.div
              className="absolute w-32 h-32 bg-[#2DD4BF]/10 rounded-full blur-2xl"
              animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.4, 0.15] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            />
          </div>

          <div className="mt-8 text-center relative">
            <h1 className="text-slate-400 text-xs tracking-[0.4em] uppercase animate-pulse">
              [SYSTEM_INITIALIZE]
            </h1>
            <div className="mt-3 h-[1px] bg-slate-900 w-40 overflow-hidden relative mx-auto">
              <motion.div
                className="absolute inset-0 bg-[#2DD4BF]"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      ) : (
        <>
          <Header />
          <div className="pt-[65px] flex flex-col">
            
            {/* HERO MODULE */}
            <div className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 overflow-hidden border-b border-slate-900">
              <div className="absolute inset-0 [background-image:radial-gradient(circle,rgba(45,212,191,0.04)_1px,transparent_1px)] [background-size:32px_32px]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2DD4BF]/[0.02] rounded-full blur-[160px] pointer-events-none" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
                <img src={BrandLogo} alt="" className="w-[500px] h-[500px] object-contain" />
              </div>

              <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center space-y-8">
                
                <div className="inline-flex items-center gap-2 border border-[#2DD4BF]/20 bg-[#2DD4BF]/5 px-3 py-1 rounded-full font-mono text-[10px] uppercase tracking-widest text-[#2DD4BF]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF] animate-ping" />
                  Operator//Samrat_Vsn
                </div>

                <motion.h1
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white"
                >
                  Samrat Parajuli
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="w-full max-w-2xl border-x border-slate-900 bg-slate-950/30 backdrop-blur-sm p-6 rounded-xl"
                >
                  <p className="text-sm md:text-base text-slate-400 font-mono leading-relaxed">
                    <span className="text-slate-300 italic">"Seeker of knowledge, builder of systems."</span>
                    <br /><br />
                    Application Developer based in Nepal specialized in architecting deterministic, performant <span className="text-[#2DD4BF]">mobile network platforms</span> and scalable data configurations. Leaving zero operational waste between clean infrastructure layouts.
                  </p>
                </motion.div>

                {/* HIGH-INTENT TARGET CALL TO ACTIONS */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col sm:flex-row items-center gap-4 font-mono w-full justify-center"
                >
                  <Link 
                    to="/projects" 
                    className="w-full sm:w-auto text-center bg-[#2DD4BF] hover:bg-[#20ba1a] text-[#020617] font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded transition-all shadow-[0_0_20px_rgba(45,212,191,0.2)] hover:shadow-[0_0_25px_rgba(45,212,191,0.4)]"
                  >
                    [Execute_Project_Scan]
                  </Link>
                  <Link 
                    to="/contact" 
                    className="w-full sm:w-auto text-center bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-400 hover:text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded transition-all"
                  >
                    //Establish_Link
                  </Link>
                </motion.div>

                {/* NETWORK DEPLOYMENT NODES */}
                <motion.div
                  className="flex items-center gap-6 pt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {[
                    { href: "https://www.linkedin.com/in/samratvsn/", icon: FaLinkedin, label: "LinkedIn" },
                    { href: "https://github.com/SamratVsn", icon: FaGithub, label: "GitHub" },
                    { href: "https://x.com/SamratVsn", icon: FaXTwitter, label: "X" },
                    { href: "https://www.instagram.com/samratvsn/", icon: FaInstagram, label: "Instagram" },
                    { href: "https://g.dev/samratparajuli", icon: FaGoogle, label: "Google" }
                  ].map(({ href, icon: Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="group relative flex items-center justify-center p-2"
                    >
                      <Icon className="text-lg text-slate-600 group-hover:text-[#2DD4BF] transition-colors duration-300" />
                      <span className="absolute -top-8 scale-0 group-hover:scale-100 transition-all font-mono text-[9px] tracking-tighter text-[#2DD4BF] uppercase bg-slate-950 border border-slate-900 px-1.5 py-0.5 rounded">
                        {label}
                      </span>
                    </a>
                  ))}
                </motion.div>
              </div>

              {/* RADIAL TELEMETRY FEED */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40">
                <span className="font-mono text-[9px] text-slate-600 uppercase tracking-[0.3em]">Telemetry_Scroll</span>
                <div className="w-px h-6 bg-gradient-to-b from-[#2DD4BF] to-transparent mt-2 animate-bounce" />
              </div>
            </div>

            {/* SYSTEM PARAMETERS MODULE */}
            <div className="relative max-w-6xl w-full mx-auto mt-24 px-6 mb-12">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
                <img src={BrandLogo} alt="" className="w-72 h-72 object-contain" />
              </div>
              <div className="flex items-center gap-3 mb-10 opacity-60">
                <div className="h-px w-6 bg-[#2DD4BF]" />
                <span className="font-mono text-xs text-[#2DD4BF] uppercase tracking-widest">System_Parameters</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {systemParameters.map((item, index) => (
                  <div
                    key={index}
                    className="group relative bg-slate-950/20 border border-slate-900 p-6 rounded-lg overflow-hidden hover:border-slate-800 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2DD4BF]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="flex flex-col h-full justify-between space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-[10px] text-[#2DD4BF] bg-[#2DD4BF]/5 border border-[#2DD4BF]/10 px-2 py-0.5 rounded">
                          SYS_CONFIG_0{index + 1}
                        </span>
                        <span className="text-[10px] font-mono text-slate-700 uppercase">{item.label}</span>
                      </div>
                      <div>
                        <h3 className="text-base text-slate-200 font-bold font-mono mb-2 group-hover:text-[#2DD4BF] transition-colors">
                          {item.value}
                        </h3>
                        <p className="text-slate-500 text-xs leading-relaxed font-mono">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CORE EXPERTISE MATRIX */}
            <div className="relative max-w-6xl w-full mx-auto px-6 py-20">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
                <img src={BrandLogo} alt="" className="w-72 h-72 object-contain" />
              </div>
              <div className="mb-14">
                <h2 className="text-slate-100 text-2xl md:text-3xl font-mono tracking-tight mb-2">
                  Architecture_Expertise<span className="text-[#2DD4BF]">_</span>
                </h2>
                <p className="text-slate-600 font-mono text-xs uppercase tracking-widest">
                  // Core domains mapped to low-overhead functional logic
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-900 border border-slate-900 overflow-hidden rounded-xl">
                {expertiseMatrix.map((service, index) => (
                  <div
                    key={index}
                    className="bg-[#020617] p-8 md:p-10 transition-all duration-300 group relative hover:bg-slate-950/40"
                  >
                    <div className="absolute top-6 right-6 flex items-center gap-2 text-slate-600 group-hover:text-[#2DD4BF] transition-colors">
                      <span className="font-mono text-[10px] tracking-widest">{service.tag}</span>
                      {service.icon}
                    </div>

                    <div className="flex flex-col space-y-3">
                      <span className="text-[#2DD4BF]/50 font-mono text-xs">
                        MODULE_IDX_{service.id}
                      </span>
                      <h3 className="text-lg font-bold text-slate-200 group-hover:text-white transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-500 text-xs font-mono leading-relaxed max-w-xl group-hover:text-slate-400 transition-colors">
                        {service.description}
                      </p>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2DD4BF]/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </div>

            {/* SKILLS TOOLCHAIN MODULE */}
            <div className="relative max-w-6xl w-full mx-auto px-6 py-20">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
                <img src={BrandLogo} alt="" className="w-72 h-72 object-contain" />
              </div>
              <div className="mb-14">
                <h2 className="text-slate-100 text-2xl md:text-3xl font-mono tracking-tight mb-2">
                  Verified_Toolchain<span className="text-[#2DD4BF]">_</span>
                </h2>
                <p className="text-slate-600 font-mono text-xs uppercase tracking-widest">
                  // Hardware & framework parameters compiled dynamically
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {toolchainCategories.map((category, index) => (
                  <div
                    key={index}
                    className="bg-slate-950/40 border border-slate-900 rounded-lg p-6 hover:border-slate-800 transition-colors duration-300"
                  >
                    <div className="mb-5 flex justify-between items-center border-b border-slate-900 pb-3">
                      <span className="font-mono text-xs text-slate-300 font-bold">{category.title}</span>
                      <span className="font-mono text-[10px] text-slate-600">CC_0{index + 1}</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="font-mono text-[11px] text-slate-400 bg-slate-950 border border-slate-900 px-2.5 py-1 rounded hover:border-[#2DD4BF]/30 hover:text-[#2DD4BF] transition-colors cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CURATED SELECTED PROJECTS */}
            <div className="relative max-w-6xl w-full mx-auto px-6 py-20">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
                <img src={BrandLogo} alt="" className="w-72 h-72 object-contain" />
              </div>
              <div className="mb-14">
                <h2 className="text-slate-100 text-2xl md:text-3xl font-mono tracking-tight mb-2">
                  Featured_Subsystems<span className="text-[#2DD4BF]">_</span>
                </h2>
                <p className="text-slate-600 font-mono text-xs uppercase tracking-widest">
                  // Curated hardware logs and interface abstractions
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-900 border border-slate-900 overflow-hidden rounded-xl">
                {featuredProjects.map((project, index) => (
                  <div
                    key={index}
                    className="group relative bg-[#020617] p-8 transition-all duration-300 flex flex-col hover:bg-slate-950/30"
                  >
                    <Link to={project.path} className="absolute inset-0 z-10" />

                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-[10px] tracking-widest text-[#2DD4BF] border border-[#2DD4BF]/20 bg-[#2DD4BF]/5 px-2 py-0.5 rounded">
                        {project.category}
                      </span>
                      <span className="font-mono text-slate-700 text-xs">NODE_0{project.id}</span>
                    </div>

                    <h3 className="font-mono text-base font-bold text-slate-200 leading-snug mb-3 group-hover:text-[#2DD4BF] transition-colors">
                      {project.title}
                      <span className="text-[#2DD4BF] inline-block animate-pulse ml-1 opacity-0 group-hover:opacity-100">_</span>
                    </h3>

                    <p className="text-xs font-mono text-slate-500 leading-relaxed flex-1 mb-6 group-hover:text-slate-400 transition-colors">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span key={tag} className="font-mono text-[10px] text-slate-600 bg-slate-950 border border-slate-900/40 px-1.5 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="border-t border-slate-900 pt-4 mt-auto">
                      <div className="relative z-20 flex items-center gap-4">
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer"
                             onClick={(e) => e.stopPropagation()}
                             className="inline-flex items-center gap-1.5 font-mono text-[11px] text-slate-500 hover:text-[#2DD4BF] transition-colors">
                            <GithubLucide size={12} /> [Pull_Source]
                          </a>
                        )}
                        {project.live && (
                          <a href={project.live} target="_blank" rel="noopener noreferrer"
                             onClick={(e) => e.stopPropagation()}
                             className="inline-flex items-center gap-1.5 font-mono text-[11px] text-slate-500 hover:text-[#2DD4BF] transition-colors">
                            <ArrowUpRight size={12} /> [Deploy_Build]
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <Link
                  to="/projects"
                  className="group inline-flex items-center gap-3 px-6 py-3 border border-slate-900 bg-slate-950/40 rounded font-mono text-[11px] uppercase tracking-widest text-slate-400 hover:text-[#2DD4BF] hover:border-[#2DD4BF]/20 transition-all"
                >
                  Query Full Directory Index
                  <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            <Testimonials />
            <Footer />
          </div>

          {/* HAPTIC BACK TO TOP SYSTEM ACTION */}
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="fixed bottom-6 right-6 z-40 p-3 bg-slate-950 border border-slate-900 rounded text-slate-500 hover:text-[#2DD4BF] hover:border-[#2DD4BF]/20 shadow-xl backdrop-blur-md transition-all"
              aria-label="Reset System Offset"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M8 13V3M8 3L3 8M8 3L13 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.button>
          )}
        </>
      )}
    </div>
  )
}

export default Home