import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#0f172a] via-[#1e3a8a] to-[#0f172a] text-white px-4">
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-6xl sm:text-7xl md:text-8xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-600 drop-shadow-md"
      >
        404
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center text-lg sm:text-xl md:text-2xl mb-4"
      >
        Oops! The page you're looking for doesn’t exist.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center text-gray-300 mb-6 text-sm sm:text-base"
      >
        Return back to where you came from. This page is cooking for later.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <Link
          to="/"
          className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-medium shadow-lg hover:shadow-cyan-400/50 transition-all duration-300"
        >
          Go Back Home
        </Link>
      </motion.div>
    </div>
  );
}

export default NotFound;
