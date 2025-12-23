import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Heart, Code, Coffee, ArrowUp, Sparkles } from "lucide-react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const socials = [
    {
      icon: <Github />,
      href: "https://github.com/SamratVsn",
      label: "GitHub",
    },
    {
      icon: <Mail />,
      href: "mailto:std.samrat068@gmail.com",
      label: "Email",
    },
    {
      icon: <Linkedin />,
      href: "https://www.linkedin.com/in/samrat-parajuli-54310732b/",
      label: "LinkedIn",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-400 py-16 mt-16 border-t border-gray-800/50 overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.07, 0.03] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-sky-500/20 rounded-full blur-[120px]"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="lg:col-span-2 space-y-6">
              <motion.h3 className="text-3xl font-bold text-white flex items-center gap-2">
                Samrat <span className="text-sky-400">Vsn</span>
                <Sparkles className="w-5 h-5 text-sky-400" />
              </motion.h3>
              <p className="max-w-sm leading-relaxed text-gray-400">
                Crafting seamless digital experiences with a focus on clean code and user-centric design.
              </p>

              <div className="flex gap-8">
                {[["5+", "Projects"], ["8+", "Tools"], ["1yr+", "Experience"]].map(([val, label]) => (
                  <div key={label}>
                    <div className="text-xl font-bold text-white">{val}</div>
                    <div className="text-xs uppercase tracking-wider text-gray-500">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Explore</h4>
              <ul className="space-y-4">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.path} className="hover:text-sky-400 transition-colors flex items-center gap-2 group">
                      <span className="h-px w-0 group-hover:w-4 bg-sky-400 transition-all duration-300" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6">Social</h4>
              <div className="flex flex-col gap-4">
                {socials.map((social) => (
                  <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" 
                     className="flex items-center gap-3 hover:text-white transition-colors group">
                    <div className="p-2 rounded-lg bg-gray-800 group-hover:bg-sky-500/10 group-hover:text-sky-400 transition-all">
                      {React.cloneElement(social.icon, { size: 18 })}
                    </div>
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 flex flex-col md:row justify-between items-center gap-4 text-sm">
            <p>© {new Date().getFullYear()} SamratVsn. Built with passion.</p>
            <div className="flex items-center gap-4">
               <Heart className="w-4 h-4 text-red-500 fill-red-500" />
               <Code className="w-4 h-4 text-sky-500" />
               <Coffee className="w-4 h-4 text-amber-600" />
            </div>
          </div>
        </div>
      </motion.footer>
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-4 rounded-full bg-sky-500 text-white shadow-2xl shadow-sky-500/40 z-[100] hover:bg-sky-400 transition-colors"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}