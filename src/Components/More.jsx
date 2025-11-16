import React, { useState } from 'react'
import { Smartphone, Code2, Wrench, Rocket, Layers, Zap } from 'lucide-react'

function More() {
  const [activeTab, setActiveTab] = useState('transition')

  const upcomingTech = [
    {
      icon: Smartphone,
      name: 'Kotlin',
      detail: 'Native Android development',
      status: 'Learning'
    },
    {
      icon: Code2,
      name: 'React Native',
      detail: 'Cross-platform mobile apps',
      status: 'Exploring'
    },
    {
      icon: Layers,
      name: 'Jetpack Compose',
      detail: 'Modern Android UI toolkit',
      status: 'Next up'
    }
  ]

  const currentSkills = [
    { name: 'React.js', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'C Programming', level: 75 },
    { name: 'File Handling', level: 70 },
    { name: 'API Integration', level: 75 }
  ]

  const focusAreas = [
    {
      title: 'Mobile UI/UX',
      desc: 'Learning mobile-first design patterns and touch interactions',
      icon: Smartphone
    },
    {
      title: 'State Management',
      desc: 'Exploring Redux, Context API, and mobile-specific patterns',
      icon: Layers
    },
    {
      title: 'Native Features',
      desc: 'Integrating camera, location, notifications, and device APIs',
      icon: Zap
    },
    {
      title: 'Performance',
      desc: 'Optimizing app performance and reducing bundle sizes',
      icon: Rocket
    }
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      {/* Header */}
      <div className="border-b border-gray-800 bg-[#111]">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-cyan-900/20 flex items-center justify-center">
                <Code2 size={28} className="text-cyan-400" />
              </div>
              <div className="w-14 h-14 rounded-2xl bg-green-900/20 flex items-center justify-center">
                <Smartphone size={28} className="text-green-400" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Expanding to Mobile Development</h1>
            <p className="text-gray-400">Transitioning from web to mobile app development</p>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-[#111] border border-gray-800 rounded-xl p-8 text-center">
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            After building several web projects with React, I'm now expanding my skillset into mobile 
            app development. Learning Kotlin and React Native to create native Android experiences and 
            cross-platform applications.
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex gap-2 border-b border-gray-800">
          {['transition', 'learning', 'skills'].map(tab => (
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
        {activeTab === 'transition' && (
          <div className="space-y-6">
            <div className="bg-[#111] border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">Why Mobile Development?</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Web development has given me a strong foundation in UI/UX, state management, and 
                API integration. Mobile development is a natural next step that will allow me to 
                create more immersive, native experiences and reach users on their primary devices.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Mobile apps offer unique opportunities to work with device features like cameras, 
                sensors, and push notifications. I'm excited to bring my web development experience 
                into the mobile space while learning platform-specific patterns and best practices.
              </p>
            </div>

            <div className="bg-[#111] border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">Current Status</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-green-900/10 border border-green-900/30 rounded-lg">
                  <div className="w-10 h-10 rounded-lg bg-green-900/30 flex items-center justify-center flex-shrink-0">
                    <Wrench size={20} className="text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-400 mb-1">Active Learning Phase</h3>
                    <p className="text-sm text-gray-300">
                      Currently working through Kotlin fundamentals and Android development basics. 
                      Building small practice apps to understand mobile architecture patterns.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-cyan-900/10 border border-cyan-900/30 rounded-lg">
                  <div className="w-10 h-10 rounded-lg bg-cyan-900/30 flex items-center justify-center flex-shrink-0">
                    <Rocket size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-cyan-400 mb-1">First Projects Planned</h3>
                    <p className="text-sm text-gray-300">
                      Planning initial mobile projects that leverage my web dev knowledge while 
                      exploring mobile-specific features like offline storage and native UI components.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[#111] border border-gray-800 rounded-xl p-6">
                <h3 className="font-semibold mb-3 text-cyan-400">Web Foundation</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span>React component architecture</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span>State management patterns</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span>API integration & async handling</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span>Responsive UI design</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#111] border border-gray-800 rounded-xl p-6">
                <h3 className="font-semibold mb-3 text-green-400">Mobile Goals</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex gap-2">
                    <span className="text-green-400">→</span>
                    <span>Native Android with Kotlin</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-400">→</span>
                    <span>Cross-platform with React Native</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-400">→</span>
                    <span>Device API integration</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-400">→</span>
                    <span>Mobile-first architecture</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'learning' && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {upcomingTech.map((tech, idx) => (
                <div
                  key={idx}
                  className="bg-[#111] border border-gray-800 rounded-xl p-6 hover:border-green-900 transition-colors group"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-xl bg-green-900/20 flex items-center justify-center mb-4 group-hover:bg-green-900/30 transition-colors">
                      <tech.icon size={28} className="text-green-400" />
                    </div>
                    <h3 className="font-semibold mb-2">{tech.name}</h3>
                    <p className="text-sm text-gray-400 mb-3">{tech.detail}</p>
                    <span className="px-3 py-1 bg-green-900/20 text-green-400 rounded-full text-xs">
                      {tech.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#111] border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">Focus Areas</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {focusAreas.map((area, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-900/30 flex items-center justify-center flex-shrink-0">
                      <area.icon size={16} className="text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{area.title}</h3>
                      <p className="text-sm text-gray-400">{area.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#111] border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">Learning Path</h2>
              <div className="space-y-3">
                {[
                  { phase: 'Phase 1', title: 'Kotlin Fundamentals', status: 'In Progress' },
                  { phase: 'Phase 2', title: 'Android UI Components', status: 'Upcoming' },
                  { phase: 'Phase 3', title: 'Navigation & Lifecycle', status: 'Planned' },
                  { phase: 'Phase 4', title: 'Data Persistence & APIs', status: 'Planned' },
                  { phase: 'Phase 5', title: 'React Native Basics', status: 'Planned' }
                ].map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-mono text-cyan-400">{step.phase}</span>
                      <span className="text-gray-200">{step.title}</span>
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full ${
                      step.status === 'In Progress' 
                        ? 'bg-green-900/20 text-green-400'
                        : 'bg-gray-700 text-gray-400'
                    }`}>
                      {step.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="space-y-6">
            <div className="bg-[#111] border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-6">Current Skill Levels</h2>
              <div className="space-y-5">
                {currentSkills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#111] border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">Transferable Skills</h2>
              <p className="text-gray-300 mb-4">
                Many concepts from web development translate directly to mobile:
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  'Component architecture',
                  'State management',
                  'Async data handling',
                  'RESTful API integration',
                  'UI/UX principles',
                  'Version control (Git)',
                  'Debugging techniques',
                  'Performance optimization'
                ].map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-3 bg-gray-800/50 rounded-lg">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                    <span className="text-sm text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Coming Soon */}
      <div className="max-w-6xl mx-auto px-6 py-8 mb-8">
        <div className="bg-gradient-to-r from-green-900/20 to-cyan-900/20 border border-green-900/50 rounded-xl p-8 text-center">
          <Smartphone size={48} className="mx-auto mb-4 text-green-400" />
          <h2 className="text-2xl font-bold mb-3">Mobile Projects Coming Soon</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Follow my journey as I build mobile applications. The first projects will showcase both 
            native Android development and cross-platform capabilities.
          </p>
        </div>
      </div>
    </div>
  )
}

export default More