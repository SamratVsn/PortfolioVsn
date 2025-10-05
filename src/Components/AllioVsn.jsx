import React from 'react'
import A1 from '../assets/AllioVsn/A1.png'
import A2 from '../assets/AllioVsn/A2.png'
import A3 from '../assets/AllioVsn/A3.png'
import A4 from '../assets/AllioVsn/A4.png'
import A5 from '../assets/AllioVsn/A5.png'

export default function AllioVsn() {
  const screenshots = [A2, A3, A4, A5]

  return (
    <div className="min-h-screen p-8 md:p-12 bg-gradient-to-b from-[#0f172a] via-[#312e81] to-[#0f172a] text-white">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-300">
        AllioVsn
      </h1>
      <p className="text-center mb-10 text-lg">
        Built with: <span className="font-semibold text-purple-300">[Your Stack e.g. React, Next.js, API]</span>
      </p>

      {/* Intro Image */}
      <div className="flex justify-center mb-10">
        <img
          src={A1}
          alt="AllioVsn Home"
          className="rounded-xl shadow-xl max-w-lg w-full"
        />
      </div>

      {/* Overview / Development */}
      <div className="bg-[#1e293b]/60 backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-10 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-indigo-300">
          Project Overview
        </h2>
        <p className="mb-6 text-gray-200 leading-relaxed">
          <span className="font-semibold text-purple-300">AllioVsn</span> is a project that [...]
          (describe the core idea: what it does, who it’s for, main innovations).
        </p>

        <ol className="list-decimal list-inside space-y-5 text-gray-100">
          <li>
            <span className="font-semibold text-indigo-200">Feature One:</span> Explain a
            key feature or functionality.
          </li>
          <li>
            <span className="font-semibold text-indigo-200">Feature Two:</span> Another feature
            highlight or architecture point.
          </li>
          <li>
            <span className="font-semibold text-indigo-200">Feature Three:</span> Perhaps
            something about API integration, data flow, authentication, etc.
          </li>
          <li>
            <span className="font-semibold text-indigo-200">User Interface & UX:</span> Talk
            about design, responsiveness, interactivity.
          </li>
          <li>
            <span className="font-semibold text-indigo-200">Deployment & Hosting:</span> Platform,
            optimizations, CI/CD, etc.
          </li>
        </ol>

        <p className="mt-8 text-gray-300">
          This project showcases my abilities in [...], and demonstrates how the stack
          comes together to deliver a clean and performant solution.
        </p>
      </div>

      {/* Live / Source Links */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        <a
          href="https://alliovsn.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 text-lg font-semibold rounded-xl shadow-lg 
                     bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-400
                     hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500
                     transform hover:scale-105 transition duration-300 ease-in-out
                     text-white"
        >
          🚀 View Live
        </a>
        <a
          href="https://github.com/SamratVsn/AllInOne"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 text-lg font-semibold rounded-xl shadow-lg 
                     bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400
                     hover:from-purple-500 hover:via-pink-500 hover:to-indigo-400
                     transform hover:scale-105 transition duration-300 ease-in-out
                     text-white"
        >
          💻 Source Code
        </a>
      </div>

      {/* Challenges / Learnings */}
      <div className="bg-[#1e293b]/60 backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-10 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-pink-300">
          Challenges & Learnings
        </h2>
        <ul className="list-disc list-inside space-y-4 text-gray-200">
          <li>
            <span className="font-semibold text-pink-200">Challenge A:</span> What issue you faced
            and how you resolved it.
          </li>
          <li>
            <span className="font-semibold text-pink-200">Challenge B:</span> Another hurdle,
            e.g. with performance, state management, API limits.
          </li>
          <li>
            <span className="font-semibold text-pink-200">Design Trade-offs:</span> How you
            balanced usability vs complexity, mobile vs desktop, etc.
          </li>
          <li>
            <span className="font-semibold text-pink-200">Scaling / Optimization:</span> Any
            techniques you used to make the app faster or leaner.
          </li>
        </ul>
        <p className="mt-6 text-gray-300">
          Working on AllioVsn deepened my understanding of [...] and taught me how to tackle
          real-world challenges in web development.
        </p>
      </div>

      {/* Screenshots */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-purple-300">
        Application Screenshots
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {screenshots.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
          >
            <img src={src} alt={`Screenshot ${index + 2}`} className="w-full h-auto" />
          </div>
        ))}
      </div>
    </div>
  )
}
