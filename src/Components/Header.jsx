import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, Code, Cpu, User, Mail } from "lucide-react";

export default function SystemNavbar() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll telemetry detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Viewport scroll locking on mobile expand
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Global escape-key binder
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const navLinks = [
    { name: "Home", to: "/", icon: <Cpu size={14} /> },
    { name: "About", to: "/about", icon: <User size={14} /> },
    { name: "Projects", to: "/projects", icon: <Code size={14} /> },
    { name: "Contact", to: "/contact", icon: <Mail size={14} /> },
  ];

  // System animation definitions
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full h-[65px] z-[900] flex items-center transition-all duration-300 ${
          scrolled 
            ? "bg-[#020617]/75 backdrop-blur-md border-b border-[#2DD4BF]/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" 
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* LOGO SYSTEM BRANDING */}
          <Link 
            to="/" 
            className="z-[1100] flex items-center gap-3 group font-mono"
            onClick={() => setIsOpen(false)}
          >
            <span className="relative flex items-center">
              <span className="w-2 h-2 rounded-full bg-[#2DD4BF] shadow-[0_0_10px_#2DD4BF] animate-pulse" />
              <span className="absolute w-2 h-2 rounded-full bg-[#2DD4BF] animate-ping opacity-30" />
            </span>
            <div className="flex flex-col items-start leading-none">
              <span className="text-sm font-black tracking-wider text-white group-hover:text-[#2DD4BF] transition-colors duration-300">
                SAMRAT<span className="text-[#2DD4BF]">.sys</span>
              </span>
              <span className="text-[9px] text-slate-500 tracking-widest mt-0.5 uppercase hidden sm:inline-block group-hover:text-slate-400 transition-colors">
                [sys_online]
              </span>
            </div>
          </Link>

          {/* DESKTOP CORE NAV */}
          <div className="hidden md:flex items-center gap-1.5 relative">
            {navLinks.map((link) => {
              const isActive = pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`group relative font-mono text-[11px] uppercase tracking-widest transition-colors duration-300 flex items-center gap-2 px-4 py-2 rounded-md ${
                    isActive ? "text-[#2DD4BF]" : "text-slate-400 hover:text-white"
                  }`}
                >
                  <span 
                    aria-hidden="true"
                    className={`transition-transform duration-300 group-hover:scale-110 ${
                      isActive ? "text-[#2DD4BF]" : "text-slate-500 group-hover:text-[#2DD4BF]"
                    }`}
                  >
                    {link.icon}
                  </span>
                  
                  <span>
                    {link.name}
                    {isActive && <span className="inline-block animate-pulse ml-0.5 text-[#2DD4BF]">_</span>}
                  </span>

                  {/* FLUID BACKGROUND MAGNETIC CAPSULE */}
                  {isActive && (
                    <motion.span
                      layoutId="activeSystemNav"
                      className="absolute inset-0 bg-[#2DD4BF]/5 border border-[#2DD4BF]/10 rounded-md -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* HAPTIC MOBILE TOGGLE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden z-[1100] p-2 text-slate-400 hover:text-[#2DD4BF] transition-colors focus:outline-none"
            aria-label="Toggle Navigation Terminal"
          >
             <div className="relative w-6 h-6 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -45, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 45, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <X size={24} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 45, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -45, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Menu size={24} />
                    </motion.div>
                  ) }
                </AnimatePresence>
             </div>
          </button>
        </div>
      </nav>

      {/* FULL TERMINAL OVERLAY GRID */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-[#020617] z-[1000] flex flex-col items-center justify-center md:hidden"
          >
            {/* Matrix Decorative Accent Layer */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-[0.03]" 
              style={{ 
                backgroundImage: 'radial-gradient(circle at 50% 50%, #2DD4BF 1px, transparent 1px)', 
                backgroundSize: '32px 32px' 
              }} 
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[#2DD4BF]/5 rounded-full blur-[120px] pointer-events-none" />

            {/* Structured Navigation Nodes */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="flex flex-col items-center space-y-4 z-10 w-full px-8"
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.to;
                return (
                  <motion.div key={link.to} variants={itemVariants} className="w-full max-w-xs">
                    <Link
                      to={link.to}
                      onClick={() => setIsOpen(false)}
                      className={`group flex items-center justify-between p-4 rounded-lg font-mono border backdrop-blur-sm transition-all duration-300 ${
                        isActive 
                          ? "border-[#2DD4BF]/30 bg-[#2DD4BF]/5 shadow-[0_0_20px_rgba(45,212,191,0.08)]" 
                          : "border-white/5 bg-white/[0.02] hover:bg-white/5 hover:border-white/10"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className={`${isActive ? "text-[#2DD4BF]" : "text-slate-500 group-hover:text-[#2DD4BF] transition-colors"}`}>
                          {link.icon}
                        </span>
                        <span className={`text-sm font-bold tracking-widest uppercase ${
                          isActive ? "text-[#2DD4BF]" : "text-slate-300 group-hover:text-white"
                        }`}>
                          {link.name}
                          {isActive && <span className="animate-pulse ml-1 text-[#2DD4BF]">_</span>}
                        </span>
                      </div>
                      
                      <span className="text-[10px] text-slate-600 font-mono group-hover:text-[#2DD4BF]/50 transition-colors">
                        {isActive ? "[active]" : "//0" + navLinks.indexOf(link)}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Persistent Peripheral Systems Terminal Data */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-12 flex flex-col items-center gap-6 z-10"
            >
              <div className="flex gap-6">
                <a href="https://github.com/SamratVsn" target="_blank" rel="noopener noreferrer" aria-label="GitHub Network Node" className="text-slate-500 hover:text-[#2DD4BF] transition-colors transform hover:-translate-y-0.5"><FaGithub size={20} /></a>
                <a href="https://www.linkedin.com/in/samratvsn/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Network Node" className="text-slate-500 hover:text-[#2DD4BF] transition-colors transform hover:-translate-y-0.5"><FaLinkedin size={20} /></a>
                <a href="mailto:std.samrat068@gmail.com" aria-label="Secure Mail Node" className="text-slate-500 hover:text-[#2DD4BF] transition-colors transform hover:-translate-y-0.5"><FaEnvelope size={20} /></a>
              </div>
              
              <div className="font-mono text-[9px] text-slate-600 tracking-[0.25em] uppercase">
                Telemetry_Status: Secure_Link
              </div>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}