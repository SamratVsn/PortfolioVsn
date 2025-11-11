import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const footerLinks = [
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
    { name: "Privacy", path: "/privacy" },
  ];

  const socials = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/SamratVsn",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:samratvsn@email.com",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/samrat-parajuli-54310732b/",
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-400 py-10 sm:py-12 mt-16 border-t border-gray-800 overflow-hidden"
    >
      <div className="container mx-auto px-6 text-center flex flex-col items-center space-y-6 sm:space-y-8">
        {/* Logo / Name */}
        <motion.h3
          whileHover={{ scale: 1.05, color: "#38bdf8" }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-2xl sm:text-3xl font-semibold text-white tracking-wide cursor-pointer"
        >
          Samrat<span className="text-sky-400">Vsn</span>
        </motion.h3>

        {/* Navigation Links */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm sm:text-base"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {footerLinks.map((link, index) => (
            <motion.div key={index} whileHover={{ scale: 1.1, y: -2 }}>
              <Link
                to={link.path}
                className="hover:text-sky-400 transition duration-300"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-6 sm:gap-8">
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.3,
                y: -2,
                color: "#38bdf8",
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.9 }}
              className="hover:text-sky-400 transition duration-300"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "70%" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="border-t border-gray-800 my-4 sm:my-6"
        />

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xs sm:text-sm text-gray-500"
        >
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-medium">SamratVsn</span>. Built with 💻,
          ☕ & creativity.
        </motion.p>
      </div>

      {/* Subtle animated gradient line */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500 bg-[length:200%_200%]"
      />
    </motion.footer>
  );
}
