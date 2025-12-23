import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, Code, Cpu, User, Mail } from "lucide-react";

export default function SpiritualNavbar() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll detection for the navbar background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Home", to: "/", icon: <Cpu size={18} /> },
    { name: "About", to: "/About", icon: <User size={18} /> },
    { name: "Projects", to: "/Projects", icon: <Code size={18} /> },
    { name: "Contact", to: "/Contact", icon: <Mail size={18} /> },
  ];

  // Animation variants for the staggered list
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full h-[70px] z-[900] flex items-center transition-all duration-300 ${
          scrolled ? "bg-[#020617]/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* LOGO */}
          <Link 
            to="/" 
            className="z-[1100] font-mono text-xl font-bold tracking-tighter text-white hover:text-[#2DD4BF] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            SAMRAT<span className="text-[#2DD4BF]">.sys</span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-mono text-xs uppercase tracking-widest transition-colors duration-300 flex items-center gap-2 ${
                  pathname === link.to ? "text-[#2DD4BF]" : "text-slate-400 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* MOBILE TOGGLE BUTTON */}
          {/* We keep this OUTSIDE the motion div so it never disappears */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden z-[1100] p-2 text-white hover:text-[#2DD4BF] transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
             {/* Icon swap animation */}
             <div className="relative w-6 h-6 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={28} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={28} />
                    </motion.div>
                  )}
                </AnimatePresence>
             </div>
          </button>
        </div>
      </nav>

      {/* FULL SCREEN MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-[#020617] z-[1000] flex flex-col items-center justify-center md:hidden"
          >
            {/* Background Decor */}
            <div className="absolute inset-0 pointer-events-none opacity-20" 
                 style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #2DD4BF 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
            />
            
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#2DD4BF]/10 rounded-full blur-[80px] pointer-events-none" />

            {/* Links Container */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="flex flex-col items-center space-y-8 z-10 w-full px-8"
            >
              {navLinks.map((link, i) => (
                <motion.div key={link.to} variants={itemVariants} className="w-full max-w-xs">
                  <Link
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={`group flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm transition-all duration-300 ${
                      pathname === link.to 
                        ? "border-[#2DD4BF]/50 bg-[#2DD4BF]/10 shadow-[0_0_20px_rgba(45,212,191,0.2)]" 
                        : "hover:bg-white/10 hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`${pathname === link.to ? "text-[#2DD4BF]" : "text-slate-400 group-hover:text-white"}`}>
                        {link.icon}
                      </span>
                      <span className={`font-mono text-lg font-bold tracking-wide ${
                        pathname === link.to ? "text-[#2DD4BF]" : "text-slate-200 group-hover:text-white"
                      }`}>
                        {link.name}
                      </span>
                    </div>
                    {/* Active Indicator Dot */}
                    {pathname === link.to && (
                      <motion.div 
                        layoutId="active-dot"
                        className="w-2 h-2 rounded-full bg-[#2DD4BF] shadow-[0_0_10px_#2DD4BF]" 
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Footer Socials */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-10 flex gap-8 z-10"
            >
              <a href="#" className="text-slate-500 hover:text-[#2DD4BF] transition-colors transform hover:scale-110"><FaGithub size={24} /></a>
              <a href="#" className="text-slate-500 hover:text-[#2DD4BF] transition-colors transform hover:scale-110"><FaLinkedin size={24} /></a>
              <a href="mailto:std.samrat068@gmail.com" className="text-slate-500 hover:text-[#2DD4BF] transition-colors transform hover:scale-110"><FaEnvelope size={24} /></a>
            </motion.div>

            {/* System Status Line */}
            <div className="absolute bottom-4 font-mono text-[10px] text-slate-700 uppercase tracking-widest">
              System_Status: Online
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}