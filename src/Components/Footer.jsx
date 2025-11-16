import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Heart, Code, Coffee, ArrowUp, Sparkles } from "lucide-react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
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
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/SamratVsn",
      label: "GitHub",
      color: "hover:bg-purple-500/20 hover:border-purple-400/50 hover:text-purple-400"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:std.samrat068@gmail.com",
      label: "Email",
      color: "hover:bg-red-500/20 hover:border-red-400/50 hover:text-red-400"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/samrat-parajuli-54310732b/",
      label: "LinkedIn",
      color: "hover:bg-blue-500/20 hover:border-blue-400/50 hover:text-blue-400"
    },
  ];

  const stats = [
    { label: "Projects Built", value: "5+" },
    { label: "Technologies", value: "8+" },
    { label: "Active Days", value: "365+" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <motion.footer
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-400 py-16 sm:py-20 mt-16 border-t border-gray-800/50 overflow-hidden"
      >
        {/* Animated background gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.03, 0.06, 0.03],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-sky-500 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.03, 0.05, 0.03],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"
          />
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="lg:col-span-2 space-y-4"
            >
              <motion.h3
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-3xl sm:text-4xl font-bold text-white tracking-wide cursor-pointer inline-flex items-center gap-2"
              >
                Samrat
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400">
                  Vsn
                </span>
                <Sparkles className="w-5 h-5 text-sky-400" />
              </motion.h3>
              <p className="text-sm text-gray-400 max-w-md leading-relaxed">
                A passionate developer crafting digital experiences with modern technologies. 
                Building many things, one project at a time.
              </p>
              
              {/* Stats */}
              <div className="flex gap-6 pt-4">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-xl font-bold text-sky-400">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-4"
            >
              <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
              <div className="flex flex-col gap-3">
                {footerLinks.map((link, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <a
                      href={link.path}
                      className="relative group hover:text-sky-400 transition duration-300 text-sm inline-flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-sky-400 transition-colors" />
                      {link.name}
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Connect Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-4"
            >
              <h4 className="text-white font-semibold text-lg mb-4">Connect</h4>
              <div className="flex flex-col gap-3">
                {socials.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className="group flex items-center gap-3 text-sm hover:text-sky-400 transition-colors"
                  >
                    <span className="w-8 h-8 rounded-lg bg-gray-800/50 border border-gray-700/50 flex items-center justify-center group-hover:border-sky-400/50 transition-colors">
                      {React.cloneElement(social.icon, { className: "w-4 h-4" })}
                    </span>
                    {social.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"
          />

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <p className="text-xs sm:text-sm text-gray-500 flex items-center gap-2 flex-wrap justify-center md:justify-start">
              © {new Date().getFullYear()}{" "}
              <span className="text-white font-semibold">SamratVsn</span>
              <span className="hidden sm:inline">•</span>
              <span className="text-gray-600">All rights reserved</span>
            </p>
            
            <motion.p 
              className="text-xs text-gray-600 flex items-center gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Built with
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              >
                <Heart className="w-3 h-3 text-red-500 fill-red-500 inline" />
              </motion.span>
              <Code className="w-3 h-3 text-sky-400 inline" />
              and
              <Coffee className="w-3 h-3 text-amber-600 inline" />
            </motion.p>
          </motion.div>
        </div>
      </motion.footer>

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 shadow-lg shadow-sky-500/30 flex items-center justify-center text-white hover:shadow-xl hover:shadow-sky-500/40 transition-all duration-300 group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}