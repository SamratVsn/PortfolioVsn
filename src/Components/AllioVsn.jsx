import React, { useState } from 'react'
import { ExternalLink, Github, Grid3x3, Zap, Code, Layers, Gauge, Sparkles } from 'lucide-react'
import A1 from '../assets/AllioVsn/A1.png'
import A2 from '../assets/AllioVsn/A2.png'
import A3 from '../assets/AllioVsn/A3.png'
import A4 from '../assets/AllioVsn/A4.png'
import A5 from '../assets/AllioVsn/A5.png'

export default function AllioVsn() {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedImage, setSelectedImage] = useState(null)

  const miniProjects = [
    {
      icon: Grid3x3,
      name: 'Weather Dashboard',
      api: 'OpenWeather API',
      desc: 'Real-time weather data with forecasts'
    },
    {
      icon: Sparkles,
      name: 'To-Do List',
      api: 'None',
      desc: 'Just a to-do list with local storage'
    },
    {
      icon: Layers,
      name: 'Random Joke Generator',
      api: 'JokeAPI',
      desc: 'Api-powered random jokes on demand'
    },
    {
      icon: Code,
      name: 'GitHub Stats',
      api: 'GitHub API',
      desc: 'Display repository statistics'
    }
  ]

  const keyFeatures = [
    {
      title: 'Unified Dashboard',
      desc: 'All mini projects accessible from a single interface with smooth navigation',
      icon: Grid3x3
    },
    {
      title: 'Multiple API Integrations',
      desc: 'Successfully integrated various third-party APIs with proper error handling',
      icon: Zap
    },
    {
      title: 'React Router Implementation',
      desc: 'Complex routing structure managing multiple project views and navigation states',
      icon: Layers
    },
    {
      title: 'Performance Optimization',
      desc: 'Implemented lazy loading and code splitting for improved load times',
      icon: Gauge
    }
  ]

  const challenges = [
    {
      title: 'API Integration & Error Handling',
      problem: 'Working with multiple APIs using Axios was initially confusing. Each API had different authentication methods, rate limits, and response structures.',
      solution: 'Created a centralized API service layer with consistent error handling and retry logic. Implemented loading states and fallback UI for failed requests.',
      learned: 'Mastered Axios interceptors, async/await patterns, and proper API error management'
    },
    {
      title: 'Performance Bottlenecks',
      problem: 'Website performance suffered when loading multiple API calls simultaneously. Initial renders were slow and caused poor user experience.',
      solution: 'Implemented React.lazy() for code splitting, added skeleton loaders, and optimized re-renders using React.memo and useMemo hooks.',
      learned: 'Deep understanding of React performance optimization and bundle size management'
    },
    {
      title: 'Complex Routing Architecture',
      problem: 'Managing navigation between multiple mini-projects while maintaining state and ensuring smooth transitions was challenging.',
      solution: 'Designed a modular routing structure with nested routes and implemented context for shared state between projects.',
      learned: 'Advanced React Router concepts including nested routes and programmatic navigation'
    }
  ]

  const screenshots = [
    { src: A2, label: 'Dashboard View' },
    { src: A3, label: 'Weather Module' },
    { src: A4, label: 'Recipe Finder' },
    { src: A5, label: 'Movie Browser' }
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      {/* Header */}
      <div className="border-b border-gray-800 bg-[#111]">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">AllioVsn</h1>
              <p className="text-gray-400">Multi-project React dashboard with API integrations</p>
            </div>
            <div className="flex gap-3">
              <a
                href="https://alliovsn.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-cyan-600 hover:bg-cyan-700 rounded-lg font-medium transition-colors"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
              <a
                href="https://github.com/SamratVsn/AllInOne"
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
          <img src={A1} alt="AllioVsn Dashboard" className="w-full h-auto" />
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex gap-2 border-b border-gray-800">
          {['overview', 'projects', 'challenges'].map(tab => (
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
              <h2 className="text-xl font-semibold mb-4">What is AllioVsn?</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                AllioVsn is a unified platform that consolidates multiple mini-projects into a single, 
                cohesive web application. Rather than maintaining separate deployments for each small 
                project, I built this dashboard to showcase various API integrations and React concepts 
                in one place.
              </p>
              <p className="text-gray-300 leading-relaxed">
                The platform demonstrates proficiency in React Router for complex navigation, Axios 
                for API management, and Framer Motion for smooth transitions. Each mini-project within 
                AllioVsn functions independently while sharing a common routing structure and design system.
              </p>
            </div>

            <div className="bg-[#111] border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {keyFeatures.map((feature, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-900/30 flex items-center justify-center flex-shrink-0">
                      <feature.icon size={16} className="text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{feature.title}</h3>
                      <p className="text-sm text-gray-400">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#111] border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">Technical Stack</h2>
              <div className="flex flex-wrap gap-2">
                {['React', 'React Router', 'Axios', 'Framer Motion', 'Tailwind CSS', 'Vercel'].map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1.5 bg-gray-800 rounded-lg text-sm border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="space-y-4">
            <p className="text-gray-400 mb-6">
              Each mini-project integrates with a different API and demonstrates specific React concepts:
            </p>
            {miniProjects.map((project, idx) => (
              <div
                key={idx}
                className="bg-[#111] border border-gray-800 rounded-xl p-6 hover:border-cyan-900 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-900/20 flex items-center justify-center group-hover:bg-cyan-900/30 transition-colors flex-shrink-0">
                    <project.icon size={24} className="text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                      <h3 className="text-lg font-semibold">{project.name}</h3>
                      <span className="px-2.5 py-1 bg-cyan-900/20 text-cyan-400 rounded text-sm">
                        {project.api}
                      </span>
                    </div>
                    <p className="text-gray-400">{project.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'challenges' && (
          <div className="space-y-6">
            {challenges.map((challenge, idx) => (
              <div
                key={idx}
                className="bg-[#111] border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors"
              >
                <h3 className="text-lg font-semibold mb-3">{challenge.title}</h3>
                
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                      <span className="text-sm font-medium text-red-400">Problem</span>
                    </div>
                    <p className="text-gray-300 text-sm pl-3.5">{challenge.problem}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                      <span className="text-sm font-medium text-green-400">Solution</span>
                    </div>
                    <p className="text-gray-300 text-sm pl-3.5">{challenge.solution}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                      <span className="text-sm font-medium text-cyan-400">What I Learned</span>
                    </div>
                    <p className="text-gray-300 text-sm pl-3.5">{challenge.learned}</p>
                  </div>
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