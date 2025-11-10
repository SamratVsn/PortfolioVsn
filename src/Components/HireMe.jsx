import React, { useState } from 'react'
import { FaHandshake, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function HireMe() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in-up">
      <div className="relative bg-gradient-to-tr from-cyan-500 via-sky-700 to-blue-900 text-white rounded-3xl shadow-2xl p-5 flex items-center gap-4 backdrop-blur-md border border-white/20 hover:shadow-indigo-700/40 transition-all duration-500">
        
        {/* Message */}
        <div className="max-w-[220px]">
          <p className="text-sm md:text-base font-semibold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-indigo-400">
            💡 Student • Learner • Developer
          </p>
          <p className="text-xs md:text-sm text-gray-100 leading-snug">
            Still learning — but open to <span className="text-cyan-300 font-medium">collabs, ideas</span> & <span className="text-indigo-300 font-medium">opportunities</span>!
          </p>
        </div>

        <Link
          to="/Contact"
          className="group flex items-center gap-2 bg-gradient-to-r from-red-700 via-red-400 to-cyan-500 hover:from-cyan-500 hover:to-red-500 px-4 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-red-400/50 active:scale-95"
        >
          <FaHandshake className="text-white text-lg group-hover:scale-110 transition-transform" />
          <span className="text-white font-semibold text-sm tracking-wide">Hire Me</span>
        </Link>

        {/* Close Button */}
        <button
          onClick={() => setVisible(false)}
          className="absolute -top-2 -right-2 bg-[#0f172a]/80 hover:bg-[#1e293b] transition-all duration-300 p-1 rounded-full border border-white/10 backdrop-blur-md"
        >
          <FaTimes className="text-xs text-gray-200" />
        </button>

        {/* Soft glow */}
        <div className="absolute inset-0 -z-10 rounded-3xl blur-2xl opacity-40 bg-gradient-to-tr from-cyan-400/40 via-sky-500/30 to-indigo-700/30 animate-pulse-slow"></div>
      </div>
    </div>
  )
}
