import React, { useState } from 'react'
import { 
  ExternalLink, Github, Code2, Zap, Lock, Mail, 
  Palette, Cloud, ChevronRight, Activity, Terminal 
} from 'lucide-react'

// Assets
import B1 from '../assets/BlogVsn/B1.png'
import B2 from '../assets/BlogVsn/B2.png'
import B3 from '../assets/BlogVsn/B3.png'
import B4 from '../assets/BlogVsn/B4.png'
import B5 from '../assets/BlogVsn/B5.png'

const BlogVsn = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedImage, setSelectedImage] = useState(null)

  const techStack = [
    { icon: Code2, name: 'React 18', detail: 'Hooks-based UI state management' },
    { icon: Lock, name: 'OAuth 2.0', detail: 'Google Cloud Identity integration' },
    { icon: Cloud, name: 'Blogger API', detail: 'RESTful content fetching' },
    { icon: Mail, name: 'EmailJS', detail: 'Client-side SMTP relay service' },
    { icon: Palette, name: 'Framer Motion', detail: 'Declarative animation logic' },
    { icon: Zap, name: 'Vercel CDN', detail: 'Edge-cached deployment' }
  ]

  const screenshots = [
    { src: B2, label: 'DATA_FEED_INTERACTION', desc: 'Real-time synchronization with Blogger CMS.' },
    { src: B3, label: 'CONTENT_RENDER_ENGINE', desc: 'Dynamic HTML parsing from API response.' },
    { src: B4, label: 'AUTH_DASHBOARD', desc: 'Protected route handling for authenticated users.' },
    { src: B5, label: 'SMTP_GATEWAY', desc: 'EmailJS integration with validation logic.' }
  ]

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-[#2DD4BF]/30">
      
      {/* 1. TOP NAV / METADATA */}
      <div className="border-b border-slate-800 bg-[#020617]/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-slate-900 border border-slate-800 rounded">
              <Cloud size={20} className="text-[#2DD4BF]" />
            </div>
            <div>
              <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                <span>Services</span> <ChevronRight size={10} /> <span>Cloud_Integration</span>
              </div>
              <h1 className="text-xl font-mono font-bold text-slate-100 uppercase tracking-tighter">
                BlogVsn.cloud<span className="text-[#2DD4BF]">_</span>
              </h1>
            </div>
          </div>
          <div className="flex gap-3">
            <a href="https://blogvsn.vercel.app/" target="_blank" className="flex items-center gap-2 px-4 py-2 bg-[#2DD4BF] text-black hover:bg-[#26bba8] rounded font-mono text-xs font-bold transition-all">
              <ExternalLink size={14} /> LIVE_DEMO
            </a>
            <a href="https://github.com/SamratVsn/BlogVsn" target="_blank" className="flex items-center gap-2 px-4 py-2 border border-slate-800 hover:bg-slate-800 rounded font-mono text-xs font-bold transition-all">
              <Github size={14} /> SOURCE
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* MAIN DOCUMENTATION */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* HERO PREVIEW */}
            <div className="group relative rounded-lg overflow-hidden border border-slate-800 bg-black shadow-2xl">
              <div className="absolute top-0 inset-x-0 h-8 bg-slate-900 border-b border-slate-800 flex items-center px-4 justify-between">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                </div>
                <span className="text-[10px] font-mono text-slate-600">HTTPS://BLOGVSN.APP</span>
              </div>
              <img src={B1} alt="Hero" className="w-full h-auto mt-8 opacity-90 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* TABBED INTERFACE */}
            <div className="bg-[#070d1f] border border-slate-800 rounded-lg overflow-hidden">
              <div className="flex bg-slate-900/50 border-b border-slate-800 p-1">
                {['overview', 'tech', 'challenges'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 font-mono text-[10px] uppercase tracking-wider rounded transition-all ${
                      activeTab === tab ? 'bg-slate-800 text-[#2DD4BF]' : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    {tab}.md
                  </button>
                ))}
              </div>

              <div className="p-8 font-mono text-sm leading-relaxed min-h-[350px]">
                {activeTab === 'overview' && (
                  <div className="space-y-6 animate-in fade-in">
                    <p className="text-slate-400 italic">// Cloud-Native Blogging Environment</p>
                    <p>BlogVsn bridges the gap between traditional CMS content and modern SPA performance. By utilizing the <strong>Blogger API v3</strong>, content management remains decoupled from the presentation layer.</p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 bg-slate-900/50 border border-slate-800 rounded">
                           <div className="text-[#2DD4BF] text-[10px] mb-1 tracking-widest uppercase font-bold">Latency</div>
                           <p className="text-xs">Edge-cached API responses for instantaneous loading.</p>
                        </div>
                        <div className="p-3 bg-slate-900/50 border border-slate-800 rounded">
                           <div className="text-[#2DD4BF] text-[10px] mb-1 tracking-widest uppercase font-bold">Security</div>
                           <p className="text-xs">Google Identity Services for zero-knowledge auth.</p>
                        </div>
                    </div>
                  </div>
                )}

                {activeTab === 'tech' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in">
                    {techStack.map((t, i) => (
                      <div key={i} className="flex gap-4 p-4 border border-slate-800 rounded bg-[#020617] group hover:border-[#2DD4BF]/40 transition-all">
                        <t.icon size={18} className="text-[#2DD4BF] shrink-0" />
                        <div>
                          <div className="text-slate-200 text-xs font-bold uppercase">{t.name}</div>
                          <div className="text-[11px] text-slate-500 mt-1">{t.detail}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'challenges' && (
                  <div className="space-y-4 animate-in fade-in">
                    {[
                      { t: "OAuth Callback Logic", d: "Handled URI redirection for localized development vs production Vercel environments." },
                      { t: "Token Persistence", d: "Secure session management using local storage encryption." }
                    ].map((c, i) => (
                      <div key={i} className="p-4 border-l-2 border-red-900/30 bg-red-950/10 rounded-r-lg">
                        <div className="text-xs font-bold text-red-200 uppercase mb-1">{c.t}</div>
                        <p className="text-xs text-slate-500">{c.d}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* SCREENSHOTS GRID */}
            <div className="space-y-6">
              <h3 className="font-mono text-xs text-slate-500 tracking-[0.3em] uppercase underline underline-offset-8 decoration-slate-800">System_Captures</h3>
              <div className="grid grid-cols-2 gap-4">
                {screenshots.map((s, i) => (
                  <div key={i} onClick={() => setSelectedImage(s)} className="group relative border border-slate-800 rounded-lg bg-slate-900 overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]">
                    <img src={s.src} alt={s.label} className="w-full h-40 object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-x-0 bottom-0 p-3 bg-slate-900/90 border-t border-slate-800 backdrop-blur-sm">
                      <p className="text-[10px] font-mono text-[#2DD4BF] font-bold">{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 border border-slate-800 bg-[#070d1f] rounded-lg">
              <h3 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                <Activity size={14} className="text-[#2DD4BF]" /> API_STATUS
              </h3>
              <div className="space-y-4 font-mono text-[11px]">
                <div className="flex justify-between border-b border-slate-800/50 pb-2">
                  <span className="text-slate-500">GOOGLE_OAUTH</span>
                  <span className="text-green-500">CONNECTED</span>
                </div>
                <div className="flex justify-between border-b border-slate-800/50 pb-2">
                  <span className="text-slate-500">BLOGGER_V3</span>
                  <span className="text-green-500">HEALTHY</span>
                </div>
                <div className="flex justify-between border-b border-slate-800/50 pb-2">
                  <span className="text-slate-500">EMAIL_RELAY</span>
                  <span className="text-green-500">ACTIVE</span>
                </div>
              </div>
            </div>

            <div className="p-6 border border-slate-800 bg-[#070d1f] rounded-lg">
              <h3 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Terminal size={14} /> CLOUD_ARCHITECTURE
              </h3>
              <div className="p-4 bg-slate-950 border border-slate-900 rounded font-mono text-[9px] text-slate-600 leading-loose">
                 [REQUEST] -&gt; Client <br/>
                 [AUTH] -&gt;  Google OAuth 2.0 <br/>
                 [FETCH] -&gt; Blogger REST API <br/>
                 [RENDER] -&gt; React Virtual DOM <br/>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-6 backdrop-blur-sm" onClick={() => setSelectedImage(null)}>
          <div className="max-w-4xl w-full space-y-4">
            <div className="flex justify-between items-center font-mono border-b border-slate-800 pb-2 text-xs">
              <span className="text-[#2DD4BF] tracking-widest">{selectedImage.label}</span>
              <span className="text-slate-600">CLOSE [ESC]</span>
            </div>
            <img src={selectedImage.src} alt="View" className="w-full border border-slate-800 rounded-lg shadow-2xl" />
            <p className="font-mono text-[10px] text-slate-500 text-center italic">{selectedImage.desc}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default BlogVsn