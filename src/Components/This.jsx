import React, { useState } from 'react'
import { Code2, Palette, Zap, Layout, Sparkles, ExternalLink } from 'lucide-react'

export default function AllioVsn() {
  const [activeTab, setActiveTab] = useState('about')

  const techStack = [
    {
      icon: Code2,
      name: 'React.js',
      detail: 'Component-based architecture with hooks',
      color: 'cyan'
    },
    {
      icon: Palette,
      name: 'Tailwind CSS',
      detail: 'Utility-first styling system',
      color: 'blue'
    },
    {
      icon: Layout,
      name: 'React Router',
      detail: 'Client-side routing and navigation',
      color: 'purple'
    },
    {
      icon: Sparkles,
      name: 'Lucide Icons',
      detail: 'Modern icon library',
      color: 'pink'
    },
    {
      icon: Zap,
      name: 'Vercel',
      detail: 'Fast deployment and hosting',
      color: 'cyan'
    }
  ]

  const features = [
    {
      title: 'Project Showcase',
      desc: 'Interactive displays for BlogVsn, AllioVsn, and Student Management System with tabbed navigation'
    },
    {
      title: 'Responsive Design',
      desc: 'Fully mobile-responsive layout that adapts seamlessly across all device sizes'
    },
    {
      title: 'Dark Theme',
      desc: 'Professional dark color scheme with cyan accents for modern aesthetic'
    },
    {
      title: 'Interactive Elements',
      desc: 'Hover effects, image modals, and smooth transitions throughout'
    },
    {
      title: 'Clean Architecture',
      desc: 'Organized component structure with reusable patterns'
    },
    {
      title: 'Fast Performance',
      desc: 'Optimized build deployed on Vercel edge network'
    }
  ]

  const highlights = [
    {
      label: 'Components',
      value: '15+',
      desc: 'Reusable React components'
    },
    {
      label: 'Projects',
      value: '3',
      desc: 'Featured portfolio pieces'
    },
    {
      label: 'Load Time',
      value: '<2s',
      desc: 'Average page load'
    }
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      {/* Header */}
      <div className="border-b border-gray-800 bg-[#111]">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan-900/20 mb-4">
              <Code2 size={32} className="text-cyan-400" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Portfolio Website</h1>
            <p className="text-gray-400">You're looking at the project right now!</p>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-[#111] border border-gray-800 rounded-xl p-8 text-center">
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            This portfolio website itself is a full-fledged React project — designed to showcase 
            my work with clean UI, interactive elements, and modern web development practices.
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex gap-2 border-b border-gray-800">
          {['about', 'tech', 'features'].map(tab => (
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
        {activeTab === 'about' && (
          <div className="space-y-6">
            <div className="bg-[#111] border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">Project Overview</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                This portfolio website serves as both a showcase of my projects and a demonstration 
                of my frontend development capabilities. Built entirely with React and Tailwind CSS, 
                it features interactive project displays, smooth navigation, and a consistent design system.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Each project page includes tabbed navigation, image galleries with modal views, and 
                detailed breakdowns of technical challenges and solutions. The site is optimized for 
                performance and fully responsive across all devices.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {highlights.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-[#111] border border-gray-800 rounded-xl p-6 text-center hover:border-cyan-900 transition-colors"
                >
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                  <div className="font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-400">{stat.desc}</div>
                </div>
              ))}
            </div>

            <div className="bg-[#111] border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">Development Approach</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2 text-cyan-400">Component-Based Architecture</h3>
                  <p className="text-gray-300 text-sm">
                    Built with reusable React components for each project display, featuring shared 
                    layouts and consistent styling patterns throughout.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-cyan-400">Modern Styling Approach</h3>
                  <p className="text-gray-300 text-sm">
                    Utilized Tailwind CSS utility classes for rapid development and consistent design. 
                    Dark theme with cyan accents creates professional aesthetic.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-cyan-400">Interactive User Experience</h3>
                  <p className="text-gray-300 text-sm">
                    Implemented tabbed navigation, image modals, hover effects, and smooth transitions 
                    to enhance user engagement without overwhelming the interface.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'tech' && (
          <div className="space-y-4">
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className="bg-[#111] border border-gray-800 rounded-xl p-6 hover:border-cyan-900 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-900/20 flex items-center justify-center group-hover:bg-cyan-900/30 transition-colors flex-shrink-0">
                    <tech.icon size={24} className="text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{tech.name}</h3>
                    <p className="text-gray-400">{tech.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'features' && (
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-[#111] border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors"
              >
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-400">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-900/50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Explore the Full Experience</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Navigate through the site to see interactive project displays, check out my other work, 
            or get in touch to discuss opportunities.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="/"
              className="flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-lg font-medium transition-colors"
            >
              <Layout size={18} />
              View All Projects
            </a>
            <a
              href="/contact"
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-medium transition-colors"
            >
              <ExternalLink size={18} />
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}