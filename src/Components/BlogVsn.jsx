import React, { useState } from 'react'
import { ExternalLink, Github, Code2, Zap, Lock, Mail, Palette, Cloud } from 'lucide-react'
import B1 from '../assets/BlogVsn/B1.png'
import B2 from '../assets/BlogVsn/B2.png'
import B3 from '../assets/BlogVsn/B3.png'
import B4 from '../assets/BlogVsn/B4.png'
import B5 from '../assets/BlogVsn/B5.png'

function BlogVsn() {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedImage, setSelectedImage] = useState(null)

  const techStack = [
    { icon: Code2, name: 'React', detail: 'Component-based UI' },
    { icon: Lock, name: 'Google OAuth', detail: 'Secure authentication' },
    { icon: Cloud, name: 'Blogger API', detail: 'Real-time content' },
    { icon: Mail, name: 'EmailJS', detail: 'Contact integration' },
    { icon: Palette, name: 'Framer Motion', detail: 'Smooth animations' },
    { icon: Zap, name: 'Vercel', detail: 'Fast deployment' }
  ]

  const challenges = [
    {
      title: 'OAuth Configuration',
      desc: 'Configuring Google Cloud Console credentials for both development and production environments.',
      impact: 'Learned environment-specific auth flows'
    },
    {
      title: 'API Permissions',
      desc: 'Managing Blogger API scopes and handling authentication tokens securely throughout the app.',
      impact: 'Deepened understanding of OAuth2 flows'
    },
    {
      title: 'EmailJS Integration',
      desc: 'Implementing form validation and handling rate limits to ensure reliable message delivery.',
      impact: 'Improved error handling strategies'
    },
    {
      title: 'Responsive Animations',
      desc: 'Balancing smooth transitions with performance across different devices and screen sizes.',
      impact: 'Mastered Framer Motion optimization'
    }
  ]

  const screenshots = [
    { src: B2, label: 'Blog Feed' },
    { src: B3, label: 'Article View' },
    { src: B4, label: 'User Dashboard' },
    { src: B5, label: 'Contact Form' }
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      {/* Header */}
      <div className="border-b border-gray-800 bg-[#111]">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">BlogVsn</h1>
              <p className="text-gray-400">React + Google APIs blogging platform</p>
            </div>
            <div className="flex gap-3">
              <a
                href="https://blogvsn.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-cyan-600 hover:bg-cyan-700 rounded-lg font-medium transition-colors"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
              <a
                href="https://github.com/SamratVsn/BlogVsn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-gray-800 hover:bg-gray-700 rounded-lg font-medium transition-colors"
              >
                <Github size={18} />
                Source
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="relative rounded-xl overflow-hidden border border-gray-800 shadow-2xl">
          <img src={B1} alt="BlogVsn Platform" className="w-full h-auto" />
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex gap-2 border-b border-gray-800">
          {['overview', 'tech', 'challenges'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-medium capitalize transition-colors relative ${
                activeTab === tab
                  ? 'text-cyan-400'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="bg-[#111] border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">Project Overview</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                BlogVsn is a modern blogging platform that integrates directly with Google's Blogger API 
                to fetch and display articles in real-time. The platform features secure Google OAuth 
                authentication, allowing users to log in with their Google accounts, and includes a 
                contact form powered by EmailJS for direct communication.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Built with React and enhanced with Framer Motion animations, the platform delivers 
                a smooth, responsive user experience. The entire application is deployed on Vercel, 
                ensuring fast load times and reliable performance.
              </p>
            </div>

            <div className="bg-[#111] border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-900/30 flex items-center justify-center flex-shrink-0">
                    <Lock size={16} className="text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Google OAuth Login</h3>
                    <p className="text-sm text-gray-400">Secure authentication with Google accounts</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-900/30 flex items-center justify-center flex-shrink-0">
                    <Cloud size={16} className="text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Real-time Blog Sync</h3>
                    <p className="text-sm text-gray-400">Direct integration with Blogger API</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-900/30 flex items-center justify-center flex-shrink-0">
                    <Mail size={16} className="text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Contact Form</h3>
                    <p className="text-sm text-gray-400">EmailJS integration for messaging</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-900/30 flex items-center justify-center flex-shrink-0">
                    <Palette size={16} className="text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Smooth Animations</h3>
                    <p className="text-sm text-gray-400">Framer Motion powered transitions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'tech' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className="bg-[#111] border border-gray-800 rounded-xl p-5 hover:border-cyan-900 transition-colors group"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-900/20 flex items-center justify-center group-hover:bg-cyan-900/30 transition-colors">
                    <tech.icon size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{tech.name}</h3>
                    <p className="text-sm text-gray-400">{tech.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'challenges' && (
          <div className="space-y-4">
            {challenges.map((challenge, idx) => (
              <div
                key={idx}
                className="bg-[#111] border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors"
              >
                <h3 className="text-lg font-semibold mb-2">{challenge.title}</h3>
                <p className="text-gray-300 mb-3">{challenge.desc}</p>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-cyan-400">→</span>
                  <span className="text-gray-400">{challenge.impact}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Screenshots Gallery */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold mb-6">Screenshots</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {screenshots.map((shot, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(shot)}
              className="relative rounded-xl overflow-hidden border border-gray-800 cursor-pointer group hover:border-cyan-900 transition-colors"
            >
              <img src={shot.src} alt={shot.label} className="w-full h-auto" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-medium">{shot.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-5xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">{selectedImage.label}</h3>
              <button className="text-gray-400 hover:text-white">Close</button>
            </div>
            <img
              src={selectedImage.src}
              alt={selectedImage.label}
              className="w-full rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default BlogVsn