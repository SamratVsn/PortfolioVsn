import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-400 py-10 mt-16 border-t border-gray-800"
    >
      <div className="container mx-auto px-6 text-center space-y-6">
        {/* Logo or Name */}
        <h3 className="text-2xl font-semibold text-white tracking-wide">
          Samrat<span className="text-sky-400">Vsn</span>
        </h3>

        {/* Navigation Links */}
        <div className="flex justify-center space-x-6 text-sm sm:text-base">
          <Link to="/about" className="hover:text-sky-400 transition duration-300">About</Link>
          <Link to="/projects" className="hover:text-sky-400 transition duration-300">Projects</Link>
          <Link to="/contact" className="hover:text-sky-400 transition duration-300">Contact</Link>
          <Link to="/privacy" className="hover:text-sky-400 transition duration-300">Privacy</Link>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/SamratVsn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition duration-300"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="mailto:samratvsn@email.com"
            className="hover:text-sky-400 transition duration-300"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/samrat-parajuli-54310732b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition duration-300"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-800 pt-6">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} <span className="text-white">SamratVsn</span>. Built with 💻, ☕, and creativity.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
