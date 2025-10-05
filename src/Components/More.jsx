import React from 'react'
import { FaReact, FaMobileAlt } from 'react-icons/fa'

function More() {
   return (
    <div className="h-auto flex flex-col justify-center items-center p-8 bg-gradient-to-b from-[#0f172a] via-[#312e81] to-[#0f172a] text-white text-center relative">
      
      {/* Icon */}
      <div className="flex justify-center mb-6 animate-bounce space-x-4">
        <FaReact className="text-sky-400 text-7xl drop-shadow-lg" />
        <FaMobileAlt className="text-green-400 text-7xl drop-shadow-lg" />
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-300">
        Shifting to App Development
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
        While my web projects are live, I'm now diving into <span className="text-green-300 font-semibold">app development</span>! 🚀  
        Exciting mobile projects are coming soon, so stay tuned for updates.
      </p>

      {/* Footer Section */}
      <div className="mt-10 bg-[#1e293b]/60 backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-8 max-w-md">
        <p className="text-gray-300 mb-3">
          🔹 Built with <span className="text-sky-300 font-semibold">React.js</span> (for web)
        </p>
        <p className="text-gray-300 mb-3">
          🔹 Moving into <span className="text-green-300 font-semibold">Kotlin / React Native</span> for apps
        </p>
        <p className="text-gray-300">
          🔹 Deployed on <span className="text-pink-300 font-semibold">Vercel</span> for web projects
        </p>
      </div>

      {/* Glow ring animation */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="w-[800px] h-[800px] bg-gradient-to-tr from-purple-700/20 via-sky-500/10 to-indigo-700/10 rounded-full blur-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
    </div>
  )
}

export default More
