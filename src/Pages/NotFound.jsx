import React from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Terminal, AlertTriangle, Cpu } from "lucide-react";

const NotFound = () => {
  // Glitch animation variants for the 404 text
  const glitchVariants = {
    initial: { skew: 0 },
    animate: {
      skew: [0, -2, 2, -1, 0],
      x: [0, 2, -2, 1, 0],
      transition: {
        duration: 0.4,
        repeat: Infinity,
        repeatType: "mirror",
        repeatDelay: 2
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#020617] text-slate-300 px-4 relative overflow-hidden font-sans">
      
      {/* 1. ARCHITECTURAL BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(#2DD4BF 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        
        {/* Background Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2DD4BF]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px]" />
      </div>

      {/* 2. MAIN TERMINAL CONTENT */}
      <div className="relative z-10 text-center max-w-2xl">
        
        {/* Error Code Group */}
        <div className="mb-12 relative inline-block">
          <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-red-500 uppercase tracking-[0.4em] mb-4">
            <AlertTriangle size={12} /> ERR_ROUTE_NOT_FOUND
          </div>
          
          <motion.div
            variants={glitchVariants}
            initial="initial"
            animate="animate"
            className="relative"
          >
            <h1 className="text-[12rem] sm:text-[14rem] font-mono font-black leading-none tracking-tighter text-slate-100 opacity-90 select-none">
              404
            </h1>
            {/* Split color layer for "chromatic aberration" effect */}
            <h1 className="absolute inset-0 text-[12rem] sm:text-[14rem] font-mono font-black leading-none tracking-tighter text-[#2DD4BF] opacity-20 -translate-x-1 translate-y-1 -z-10">
              404
            </h1>
          </motion.div>
        </div>

        {/* System Message */}
        <div className="space-y-4 mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl md:text-2xl font-mono font-bold text-slate-100 uppercase tracking-tight"
          >
            Requested_Resource_Unavailable
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base text-slate-500 font-mono leading-relaxed"
          >
            &gt; The routing engine could not resolve the path. <br className="hidden md:block" /> 
            Either the source has been moved or the URL is malformed.
          </motion.p>
        </div>

        {/* 3. NAVIGATION OPTIONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <motion.a
            href="/"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-3 px-8 py-4 bg-[#2DD4BF] text-black rounded font-mono text-xs font-black uppercase tracking-widest transition-all hover:shadow-[0_0_20px_rgba(45,212,191,0.3)]"
          >
            <Home size={16} /> RETURN_TO_HOME
          </motion.a>
          
          <motion.button
            onClick={() => window.history.back()}
            whileHover={{ scale: 1.02 }}
            className="group flex items-center gap-3 px-8 py-4 border border-slate-800 bg-[#070d1f] hover:bg-slate-800 text-slate-300 rounded font-mono text-xs font-bold uppercase tracking-widest transition-all"
          >
            <ArrowLeft size={16} /> STEP_BACK
          </motion.button>
        </div>

        {/* 4. SYSTEM DIRECTORY (Quick Links) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="pt-10 border-t border-slate-800/50"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Cpu size={14} className="text-slate-700" />
            <span className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">Active_Modules</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: 'Root', path: '/' },
              { name: 'Portfolio', path: '/About' },
              { name: 'Projects', path: '/Projects' },
              { name: 'Comm_Link', path: '/Contact' }
            ].map((link, idx) => (
              <a
                key={idx}
                href={link.path}
                className="px-4 py-2 bg-slate-900/50 border border-slate-800 hover:border-[#2DD4BF]/50 rounded font-mono text-[10px] text-slate-500 hover:text-[#2DD4BF] transition-all"
              >
                ./{link.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer System Info */}
      <div className="absolute bottom-8 font-mono text-[9px] text-slate-800 uppercase tracking-widest">
        Session_ID: {Math.random().toString(36).substring(7).toUpperCase()} | Status: 404_RES_MISSING
      </div>
    </div>
  );
};

export default NotFound;