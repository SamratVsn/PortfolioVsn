import React from 'react'
import B1 from '../assets/BlogVsn/B1.png'
import B2 from '../assets/BlogVsn/B2.png'
import B3 from '../assets/BlogVsn/B3.png'
import B4 from '../assets/BlogVsn/B4.png'
import B5 from '../assets/BlogVsn/B5.png'

function BlogVsn() {
  return (
    <div className="min-h-screen p-8 md:p-12 bg-gradient-to-b from-[#0f172a] via-[#312e81] to-[#0f172a] text-white">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-300">
        BlogVsn
      </h1>
      <p className="text-center mb-10 text-lg">
        Built with: <span className="font-semibold text-purple-300">React & Google APIs</span>
      </p>

      {/* Intro image */}
      <div className="flex justify-center mb-10">
        <img src={B1} alt="BlogVsn Home" className="rounded-xl shadow-xl max-w-lg w-full" />
      </div>

      {/* Overview / Development Process */}
      <div className="bg-[#1e293b]/60 backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-10 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-indigo-300">Development Overview</h2>
        <p className="mb-6 text-gray-200 leading-relaxed">
          <span className="font-semibold text-purple-300">BlogVsn</span> is a dynamic blogging
          platform that connects directly to Google’s <b>Blogger API</b>, fetching real-time
          articles from my personal Blogger account. It features Google OAuth login, a contact form
          powered by <b>EmailJS</b>, and smooth <b>Framer Motion</b> animations.
        </p>

        <ol className="list-decimal list-inside space-y-5 text-gray-100">
          <li>
            <span className="font-semibold text-indigo-200">Google OAuth Authentication:</span>
            Implemented secure login using the <code>@react-oauth/google</code> library, managing
            auth states with React hooks like <code>useEffect</code> and <code>useState</code>.
          </li>
          <li>
            <span className="font-semibold text-indigo-200">Blogger API Integration:</span>
            Fetched posts directly from Blogger using Google APIs for always-updated content.
          </li>
          <li>
            <span className="font-semibold text-indigo-200">Contact Form with EmailJS:</span>
            Allowed users to send messages directly to my inbox — no backend required.
          </li>
          <li>
            <span className="font-semibold text-indigo-200">Smooth Animations:</span>
            Used <b>Framer Motion</b> for modern, fluid page transitions and fade-ins.
          </li>
          <li>
            <span className="font-semibold text-indigo-200">Deployment:</span>
            Fully hosted on <b>Vercel</b> for performance and simplicity.
          </li>
        </ol>

        <p className="mt-8 text-gray-300">
          BlogVsn combines the power of Google APIs with modern React design, creating a seamless
          reading and interaction experience.
        </p>
      </div>

      {/* Source Code + Live */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        <a
          href="https://blogvsn.vercel.app/"
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
          href="https://github.com/SamratVsn/BlogVsn"
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

      {/* Challenges Faced */}
      <div className="bg-[#1e293b]/60 backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-10 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-pink-300">Challenges Faced</h2>
        <ul className="list-disc list-inside space-y-4 text-gray-200">
          <li>
            <span className="font-semibold text-pink-200">OAuth Setup:</span> Configuring
            <code>Google Cloud Console</code> credentials for local and production URLs was
            challenging at first.
          </li>
          <li>
            <span className="font-semibold text-pink-200">API Permissions:</span> Handling Blogger
            API scopes and authentication tokens securely.
          </li>
          <li>
            <span className="font-semibold text-pink-200">EmailJS Rate Limits:</span> Ensuring form
            submissions don’t exceed EmailJS request limits or fail silently.
          </li>
          <li>
            <span className="font-semibold text-pink-200">Animation Timing:</span> Fine-tuning motion
            delays to keep transitions smooth but snappy.
          </li>
          <li>
            <span className="font-semibold text-pink-200">Responsive Design:</span> Maintaining a
            consistent feel across mobile and desktop viewports.
          </li>
        </ul>
        <p className="mt-6 text-gray-300">
          These challenges strengthened my understanding of API integrations, OAuth, and modern
          front-end deployment workflows.
        </p>
      </div>

      {/* Screenshots */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-purple-300">
        Platform Screenshots
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[B2, B3, B4, B5].map((src, index) => (
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

export default BlogVsn
    