import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Heart, Code, Coffee } from "lucide-react";

export default function Footer() {
  const footerLinks = [
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
    { name: "Home", path: "/" },
  ];

  const socials = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/SamratVsn",
      label: "GitHub",
      color: "hover:text-purple-400"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:samratvsn@email.com",
      label: "Email",
      color: "hover:text-red-400"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/samrat-parajuli-54310732b/",
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-400 py-12 sm:py-16 mt-16 border-t border-gray-800/50 overflow-hidden"
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
      </div>

      <div className="container mx-auto px-6 text-center flex flex-col items-center space-y-8 sm:space-y-10 relative z-10">
        {/* Logo / Name with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="space-y-3"
        >
          <motion.h3
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-3xl sm:text-4xl font-bold text-white tracking-wide cursor-pointer"
          >
            Samrat<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400">Vsn</span>
          </motion.h3>
          <p className="text-sm text-gray-500 max-w-md mx-auto">
            Crafting digital experiences with passion and precision
          </p>
        </motion.div>

        {/* Navigation Links with better spacing */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 sm:gap-10 text-sm sm:text-base"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {footerLinks.map((link, index) => (
            <motion.div 
              key={index} 
              whileHover={{ scale: 1.1, y: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Link
                to={link.path}
                className="relative group hover:text-sky-400 transition duration-300 font-medium"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Icons with enhanced effects */}
        <div className="flex justify-center items-center gap-5 sm:gap-6">
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.2,
                y: -4,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.9 }}
              className={`group relative p-3 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 ${social.color} transition-all duration-300 hover:border-sky-400/50 hover:shadow-lg hover:shadow-sky-400/20`}
            >
              {social.icon}
              
              {/* Tooltip */}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none border border-gray-700">
                {social.label}
              </span>
            </motion.a>
          ))}
        </div>

        {/* Animated Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"
        />

        {/* Enhanced Copyright with icons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="space-y-3"
        >
          <p className="text-xs sm:text-sm text-gray-500 flex items-center justify-center gap-2 flex-wrap">
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-semibold">SamratVsn</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-gray-600">All rights reserved</span>
          </p>
          
          <motion.p 
            className="text-xs text-gray-600 flex items-center justify-center gap-2"
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
            <Coffee className="w-3 h-3 text-amber-600 inline" />
            & creativity
          </motion.p>
        </motion.div>

        {/* Back to top button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-sky-500/10 to-cyan-500/10 border border-sky-400/30 text-sky-400 text-sm font-medium hover:from-sky-500/20 hover:to-cyan-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-sky-400/20"
        >
          Back to Top ↑
        </motion.button>
      </div>
    </motion.footer>
  );
}
