import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Terminal, Cpu, HardDrive, ShieldAlert } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function SystemFooter() {
  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const socials = [
    {
      icon: <FaLinkedin size={14} />,
      href: "https://www.linkedin.com/in/samratvsn/",
      label: "LinkedIn",
    },
    {
      icon: <FaXTwitter size={14} />,
      href: "https://x.com/SamratVsn",
      label: "X_Network",
    },
    {
      icon: <Mail size={14} />,
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=samratvsn@gmail.com",
      label: "Secure_Mail",
    },
  ];

  const handleReturnToOrigin = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative bg-[#020617] text-slate-400 py-16 mt-20 border-t border-slate-900 font-mono text-xs"
    >
      {/* Decorative Matrix Background Overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.02]">
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: 'radial-gradient(circle at 100% 100%, #2DD4BF 1px, transparent 1px)', 
            backgroundSize: '24px 24px' 
          }} 
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-900/60">
          
          {/* BRAND DATA LAYER */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-sm font-black tracking-wider text-white uppercase">
              SAMRAT<span className="text-[#2DD4BF] animate-pulse">.sys</span>
            </h3>
            <p className="max-w-sm leading-relaxed text-slate-500 font-sans text-xs">
              Architecting native android platforms with modern Kotlin and Jetpack Compose pipelines. Engineered for maximum data containment and deterministic performance profiles.
            </p>

            {/* HARDWARE METRICS */}
            <div className="flex gap-6 pt-2">
              {[
                { val: "2.0.0", label: "STABLE_RELEASE", icon: <ShieldAlert size={10} className="text-[#2DD4BF]" /> },
                { val: "26+", label: "REPOSITORIES", icon: <HardDrive size={10} className="text-slate-600" /> },
                { val: "2+ YRS", label: "RUNTIME_EXP", icon: <Cpu size={10} className="text-slate-600" /> }
              ].map((metric) => (
                <div key={metric.label} className="border border-slate-900 bg-slate-950/40 px-3 py-2 rounded">
                  <div className="flex items-center gap-1.5 text-slate-200 font-bold tracking-tight">
                    {metric.icon}
                    {metric.val}
                  </div>
                  <div className="text-[9px] uppercase tracking-widest text-slate-600 mt-0.5">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* INDEX PATHS */}
          <div>
            <h4 className="text-slate-200 font-bold tracking-wider mb-5 text-[11px] uppercase">// DIRECTORY</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="hover:text-[#2DD4BF] transition-colors flex items-center gap-2 group tracking-widest uppercase text-[11px]"
                  >
                    <span className="text-slate-700 group-hover:text-[#2DD4BF] transition-colors">{">"}</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL CHANNELS */}
          <div>
            <h4 className="text-slate-200 font-bold tracking-wider mb-5 text-[11px] uppercase">// CONNECTIONS</h4>
            <div className="flex flex-col gap-3">
              {socials.map((social) => (
                <a 
                  key={social.label} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 text-slate-500 hover:text-white transition-colors group tracking-widest uppercase text-[11px]"
                >
                  <div className="p-1.5 rounded border border-slate-900 bg-slate-950 text-slate-600 group-hover:text-[#2DD4BF] group-hover:border-[#2DD4BF]/20 transition-all">
                    {social.icon}
                  </div>
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* METADATA LOWER BAR */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-slate-600 tracking-wider">
          <div className="flex items-center gap-2">
            <Terminal size={12} className="text-[#2DD4BF]" />
            <p>© {new Date().getFullYear()} SAMRAT_VSN // ALL SYSTEM RUNTIMES RESERVED.</p>
          </div>
          
          {/* INLINE HAPTIC ANCHOR BACK TO TOP */}
          <button 
            onClick={handleReturnToOrigin}
            className="hover:text-[#2DD4BF] border border-slate-900 hover:border-[#2DD4BF]/20 bg-slate-950/40 px-3 py-1.5 rounded transition-all uppercase tracking-widest text-[9px]"
          >
            [Execute_Return_To_Origin]
          </button>
        </div>
      </div>
    </motion.footer>
  );
}