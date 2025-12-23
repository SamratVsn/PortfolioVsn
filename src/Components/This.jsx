import React, { useState } from 'react'
import { 
  Code2, Palette, Zap, Layout, Sparkles, ExternalLink, 
  Terminal, Layers, Monitor, Share2, Cpu, Globe 
} from 'lucide-react'

export default function AllioVsn() {
  const [activeTab, setActiveTab] = useState('about')

  const techStack = [
    { icon: Code2, name: 'React.js', detail: 'Component-based architecture & State Management', color: 'cyan' },
    { icon: Palette, name: 'Tailwind CSS', detail: 'Design tokens & Utility-first styling', color: 'blue' },
    { icon: Layout, name: 'React Router', detail: 'Dynamic SPAs with client-side routing', color: 'purple' },
    { icon: Zap, name: 'Vercel Edge', detail: 'Global distribution & CI/CD deployment', color: 'cyan' }
  ]

  const metrics = [
    { label: 'Uptime', value: '99.9%', icon: Globe },
    { label: 'Latency', value: 'Minimal', icon: Zap },
    { label: 'Responsivity', value: '100%', icon: Monitor }
  ]

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-[#2DD4BF]/30">
      
      {/* 1. Header: System Identification */}
      <div className="border-b border-slate-800 bg-[#020617]/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
              <Cpu size={24} className="text-[#2DD4BF]" />
            </div>
            <div>
              <h1 className="text-xl font-mono font-bold text-slate-100 tracking-tighter uppercase">
                PORTFOLIO_ENGINE.v1
              </h1>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">System Online</span>
              </div>
            </div>
          </div>
          <div className="hidden md:flex gap-6 font-mono text-[10px] text-slate-500 uppercase tracking-widest">
            <div>Build: <span className="text-slate-300 underline underline-offset-4 decoration-[#2DD4BF]">stable-prod</span></div>
            <div>Region: <span className="text-slate-300">Global</span></div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* 2. Hero: The "Project Meta" Reveal */}
        <div className="relative mb-20 p-1 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-2xl overflow-hidden shadow-2xl">
          <div className="bg-[#070d1f] rounded-xl p-8 md:p-12 text-center relative overflow-hidden">
            {/* Background Decorative Grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(#2DD4BF 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
            
            <h2 className="text-3xl md:text-5xl font-mono font-black text-slate-100 mb-6 tracking-tighter">
              YOU ARE <span className="text-[#2DD4BF]">INSIDE</span> THE PROJECT
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto font-mono text-sm">
              &gt; This interface isn't just a container; it's a demonstration of modern component 
              orchestration, atomic design principles, and reactive state management.
            </p>
          </div>
        </div>

        {/* 3. Real-time Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {metrics.map((m, i) => (
            <div key={i} className="p-6 bg-[#070d1f] border border-slate-800 rounded-xl flex items-center gap-4 group hover:border-[#2DD4BF]/50 transition-all">
              <div className="p-3 bg-slate-900 rounded-lg text-[#2DD4BF]">
                <m.icon size={20} />
              </div>
              <div>
                <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{m.label}</p>
                <p className="text-xl font-bold text-slate-100">{m.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 4. Architecture Tabs */}
        <div className="flex gap-1 bg-slate-900/50 p-1 rounded-lg border border-slate-800 w-fit mb-8">
          {['about', 'tech', 'features'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 text-[10px] font-mono uppercase tracking-widest rounded-md transition-all ${
                activeTab === tab 
                ? 'bg-slate-800 text-[#2DD4BF] shadow-lg' 
                : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              {tab}.js
            </button>
          ))}
        </div>

        <div className="min-h-[400px]">
          {activeTab === 'about' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-2">
              <div className="space-y-6">
                <div className="p-8 border border-slate-800 bg-[#070d1f] rounded-2xl">
                  <h3 className="text-[#2DD4BF] font-mono text-xs uppercase tracking-[0.2em] mb-4">// Design_Philosophy</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    The core goal was to build a "low-friction" portfolio. By using **React State**, 
                    I eliminated page refreshes, creating a fluid desktop-application feel. 
                    The theme uses a custom slate palette to ensure code snippets and technical 
                    diagrams remain the primary focal point.
                  </p>
                </div>
                <div className="p-8 border border-slate-800 bg-[#070d1f] rounded-2xl">
                  <h3 className="text-[#2DD4BF] font-mono text-xs uppercase tracking-[0.2em] mb-4">// User_Flow</h3>
                  <div className="text-[10px] font-mono text-slate-500 space-y-2">
                    <div className="flex items-center gap-2"> <span className="text-[#2DD4BF]">1.</span> Router: Entry Point Initialization</div>
                    <div className="flex items-center gap-2"> <span className="text-[#2DD4BF]">2.</span> Component: Lazy Loading Assets</div>
                    <div className="flex items-center gap-2"> <span className="text-[#2DD4BF]">3.</span> State: Viewport Synchronization</div>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="h-full border border-dashed border-slate-700 rounded-2xl flex items-center justify-center bg-slate-900/20">
                   <Terminal className="text-slate-700" size={64} />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tech' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in">
              {techStack.map((tech, idx) => (
                <div key={idx} className="p-6 border border-slate-800 bg-[#070d1f] rounded-xl flex items-start gap-4 hover:bg-slate-900/50 transition-colors">
                  <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-[#2DD4BF]">
                    <tech.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-slate-100 font-bold text-sm mb-1">{tech.name}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{tech.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'features' && (
             <div className="grid md:grid-cols-3 gap-6 animate-in fade-in">
                {/* Feature Cards go here with the same mono-minimalist styling */}
             </div>
          )}
        </div>
      </div>

      {/* 5. Footer: Call to System Action */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="border border-[#2DD4BF]/20 bg-[#070d1f] p-10 rounded-3xl text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Share2 size={120} className="text-[#2DD4BF]" />
          </div>
          <h2 className="text-2xl font-bold text-slate-100 mb-4">Interested in the Architecture?</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto text-sm">
            This entire codebase is open-source. Feel free to explore the hooks, components, and layout logic.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/" className="px-8 py-3 bg-slate-100 text-black font-bold font-mono text-xs rounded-lg hover:bg-[#2DD4BF] transition-all">
              EXPLORE_CORE
            </a>
            <a href="/contact" className="px-8 py-3 border border-slate-800 text-slate-300 font-bold font-mono text-xs rounded-lg hover:bg-slate-800 transition-all flex items-center gap-2">
              <ExternalLink size={14} /> PING_SERVER
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}