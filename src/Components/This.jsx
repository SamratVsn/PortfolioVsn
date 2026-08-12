import { useState } from 'react'
import { 
  Code2, Palette, Zap, Layout, ArrowUpRight
} from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from './SEO'

export default function This() {
  const [activeTab, setActiveTab] = useState('about')

  const techStack = [
    { icon: Code2, name: 'React.js', detail: 'Component-based architecture & State Management' },
    { icon: Palette, name: 'Tailwind CSS', detail: 'Design tokens & Utility-first styling' },
    { icon: Layout, name: 'React Router', detail: 'Dynamic SPAs with client-side routing' },
    { icon: Zap, name: 'Vercel Edge', detail: 'Global distribution & CI/CD deployment' }
  ]

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-[#3B82F6]/30">
      <SEO
        title="Developer Portfolio | Samrat Parajuli"
        description="This portfolio website built with React, Framer Motion, and Tailwind CSS. Explore the architecture and design philosophy behind samratparajuli0.com.np."
        ogUrl="https://www.samratparajuli0.com.np/projects/this"
      />
      
      {/* Header */}
      <div className="border-b border-slate-800/50 bg-[#020617]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <h1 className="text-2xl font-bold text-white tracking-[-0.03em]">
            Portfolio <span className="text-[#3B82F6]">Engine v2</span>
          </h1>
          <p className="text-sm text-slate-400 mt-1">Built with React, Tailwind CSS & Vercel Edge</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        
        {/* Hero Section */}
        <div className="mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 tracking-[-0.03em]">
            Modern portfolio architecture with zero friction.
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
            A fast, responsive, and beautifully designed portfolio website that showcases projects and work. Built to demonstrate modern React patterns and optimal performance.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-12 border-b border-slate-800">
          {['about', 'tech', 'features'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab 
                  ? 'text-[#3B82F6] border-[#3B82F6]' 
                  : 'text-slate-400 border-transparent hover:text-slate-300'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          
          {activeTab === 'about' && (
            <div className="space-y-8">
              <div>
                <h3 className="text-[#3B82F6] text-sm font-semibold uppercase tracking-widest mb-4">Design Philosophy</h3>
                <p className="text-slate-300 leading-relaxed">
                  The core goal was to build a low-friction portfolio experience. By using React State management, 
                  I eliminated unnecessary page refreshes, creating a fluid single-page application feel. 
                  The design uses a custom slate palette to ensure code snippets and technical content remain 
                  the primary focal point while maintaining visual hierarchy.
                </p>
              </div>
              
              <div>
                <h3 className="text-[#3B82F6] text-sm font-semibold uppercase tracking-widest mb-4">User Experience Flow</h3>
                <div className="space-y-3">
                  {[
                    { num: '01', text: 'Router Entry Point Initialization' },
                    { num: '02', text: 'Lazy Load Assets & Components' },
                    { num: '03', text: 'Viewport Synchronization & State Management' },
                    { num: '04', text: 'Smooth Transitions & Animations' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <span className="text-[#3B82F6] font-semibold text-sm">{item.num}</span>
                      <p className="text-slate-400 text-sm pt-0.5">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tech' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {techStack.map((tech, idx) => (
                <div key={idx} className="p-6 border border-slate-800/70 rounded-xl bg-[#0A101F]/60 hover:border-slate-700/80 hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-slate-900 rounded-lg text-[#3B82F6]">
                      <tech.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1 text-sm">{tech.name}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{tech.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'features' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Dynamic Routing", detail: "React Router with nested layouts, catch-all 404 handling, and automatic scroll-to-top on navigation." },
                { title: "Framer Motion", detail: "Animated page transitions, scroll-triggered reveals, staggered animations, and smooth layout shifts." },
                { title: "Responsive Design", detail: "Adaptive grid system that responds seamlessly to all viewports without explicit media queries." },
                { title: "Dark-Optimized", detail: "Custom slate palette designed for reduced eye strain during extended reading sessions." }
              ].map((feat, i) => (
                <div key={i} className="p-6 border border-slate-800/70 rounded-xl bg-[#0A101F]/60 hover:border-slate-700/80 hover:-translate-y-0.5 transition-all duration-300">
                  <p className="text-[#3B82F6] text-xs font-semibold uppercase tracking-widest mb-3">
                    Feature {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-white font-semibold mb-2 text-sm">{feat.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{feat.detail}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-20 pt-20 border-t border-slate-800">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white tracking-[-0.03em]">
              Interested in the architecture?
            </h2>
            <p className="text-slate-400 max-w-xl">
              This codebase demonstrates modern React patterns, component composition, and performance optimization. 
              Feel free to explore the full source code and architecture.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="https://github.com/SamratVsn/devPortfoli0"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-[#020617] font-semibold px-6 py-2.5 rounded-lg transition-all inline-flex items-center gap-2 text-sm active:scale-[0.97]"
              >
                View Full Source <ArrowUpRight size={15} />
              </a>
              <Link 
                to="/contact"
                className="border border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white font-medium px-6 py-2.5 rounded-lg transition-all inline-flex items-center gap-2 text-sm active:scale-[0.97]"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}