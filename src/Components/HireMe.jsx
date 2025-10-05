import React, { useState } from 'react'
import { FaHandshake, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function HireMe() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in-up">
      <div className="relative bg-gradient-to-tr from-indigo-700 via-purple-700 to-pink-600 text-white rounded-3xl shadow-2xl p-5 flex items-center gap-4 backdrop-blur-md border border-white/20 hover:shadow-pink-400/30 transition-all duration-500">
        
        {/* Message */}
        <div className="max-w-[220px]">
          <p className="text-sm md:text-base font-semibold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-sky-300">
            💡 Student • Learner • Builder
          </p>
          <p className="text-xs md:text-sm text-gray-200 leading-snug">
            Still learning — but open to <span className="text-sky-300 font-medium">collabs, ideas</span> & <span className="text-pink-300 font-medium">opportunities</span>!
          </p>
        </div>

        {/* Hire Me Button */}
        <Link
          to="/Contact"
          className="group flex items-center gap-2 bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-indigo-500 hover:to-sky-400 px-4 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-sky-400/40 active:scale-95"
        >
          <FaHandshake className="text-white text-lg group-hover:scale-110 transition-transform" />
          <span className="text-white font-semibold text-sm tracking-wide">Hire Me</span>
        </Link>

        {/* Close Button */}
        <button
          onClick={() => setVisible(false)}
          className="absolute -top-2 -right-2 bg-[#0f172a]/80 hover:bg-[#1e293b] transition-all duration-300 p-1 rounded-full border border-white/10 backdrop-blur-md"
        >
          <FaTimes className="text-xs text-gray-300" />
        </button>

        {/* Soft glow */}
        <div className="absolute inset-0 -z-10 rounded-3xl blur-2xl opacity-40 bg-gradient-to-tr from-purple-500/30 via-sky-400/30 to-pink-500/30 animate-pulse-slow"></div>
      </div>
    </div>
  )
}
