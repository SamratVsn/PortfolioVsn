import React from 'react'
import { FaReact } from 'react-icons/fa'

export default function AllioVsn() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-8 bg-gradient-to-b from-[#0f172a] via-[#312e81] to-[#0f172a] text-white text-center">
      {/* Icon */}
      <div className="flex justify-center mb-6 animate-bounce">
        <FaReact className="text-sky-400 text-7xl drop-shadow-lg" />
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-300">
        AllioVsn Portfolio
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
        You’re already here! 😄  
        This <span className="text-sky-300 font-semibold">portfolio website</span> itself is the project —  
        designed, built, and deployed with <b>React</b> & <b>Tailwind CSS</b>.
      </p>

      {/* Footer Section */}
      <div className="mt-10 bg-[#1e293b]/60 backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-8 max-w-md">
        <p className="text-gray-300 mb-3">
          🔹 Built with <span className="text-sky-300 font-semibold">React.js</span>
        </p>
        <p className="text-gray-300 mb-3">
          🔹 Styled using <span className="text-indigo-300 font-semibold">Tailwind CSS</span>
        </p>
        <p className="text-gray-300">
          🔹 Deployed on <span className="text-pink-300 font-semibold">Vercel</span>
        </p>
      </div>

      {/* Glow ring animation */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="w-[800px] h-[800px] bg-gradient-to-tr from-purple-700/20 via-sky-500/10 to-indigo-700/10 rounded-full blur-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
    </div>
  )
}
