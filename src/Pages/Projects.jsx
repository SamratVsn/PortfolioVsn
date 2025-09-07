import React from "react";
import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHammer } from "react-icons/fa";
import SMS from "../Components/SMS";
import BlogVsn from "../Components/BlogVsn";
import AllioVsn from "../Components/AllioVsn";
import This from "../Components/This";
import More from "../Components/More";
import Header from "../Components/Header";

export default function Project() {
  return (
    <>
      <div className="min-h-screen pb-20 bg-gradient-to-b from-[#0f172a] via-[#1e3a8a] to-[#0f172a] text-white">
        <Header />
        <div className="mt-[70px] w-full py-12 sm:py-16 px-6 sm:px-10 md:px-16 lg:px-24">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-sky-300 drop-shadow-md"
          >
            Projects
          </motion.h2>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 shadow-lg max-w-lg mx-auto text-center"
          >
            <FaHammer className="w-12 h-12 mx-auto text-yellow-400 animate-bounce mb-4" />
            <h3 className="text-xl sm:text-2xl font-semibold text-cyan-400">
              Development is going on...
            </h3>
            <p className="text-gray-300 mt-3 text-sm sm:text-base">
              🚧 This page is under construction.
              <br /> Please check back later!
            </p>
          </motion.div>
        </div>
      </div>

      {/* Project-specific routes */}
      <Routes>
        <Route path="/sms" element={<SMS />} />
        <Route path="/blogvsn" element={<BlogVsn />} />
        <Route path="/alliovsn" element={<AllioVsn />} />
        <Route path="/portfolio" element={<This />} />
        <Route path="/more" element={<More />} />
      </Routes>
    </>
  );
}
