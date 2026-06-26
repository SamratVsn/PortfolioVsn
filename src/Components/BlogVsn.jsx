import { useState } from 'react'
import { 
  ExternalLink, Github, Code2, Zap, Lock, Mail, 
  Palette, Cloud, Activity, X
} from 'lucide-react'
import SEO from './SEO'

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
    { src: B2, label: 'Data Feed', desc: 'Real-time synchronization with Blogger CMS.' },
    { src: B3, label: 'Content Engine', desc: 'Dynamic HTML parsing from API response.' },
    { src: B4, label: 'Auth Dashboard', desc: 'Protected route handling for authenticated users.' },
    { src: B5, label: 'SMTP Gateway', desc: 'EmailJS integration with validation logic.' }
  ]

  const services = [
    { name: 'Google OAuth', status: 'Connected' },
    { name: 'Blogger API', status: 'Healthy' },
    { name: 'Email Service', status: 'Active' }
  ]

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-[#3B82F6]/30">
      <SEO
        title="BlogVsn Platform | Samrat Parajuli"
        description="Cloud-integrated blog engine using Google OAuth 2.0, Blogger API v3, and React with edge-cached Vercel deployment. Built by Samrat Parajuli."
        ogUrl="https://www.samratparajuli0.com.np/projects/blogvsn"
      />
      
      {/* Header */}
      <div className="border-b border-slate-800/50 bg-[#020617]/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-2">Cloud Integration</p>
            <h1 className="text-2xl font-bold text-white tracking-[-0.03em]">
              BlogVsn <span className="text-[#3B82F6]">Platform</span>
            </h1>
          </div>
          <div className="flex flex-wrap gap-3">
            <a 
              href="https://blogvsn.vercel.app/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 bg-[#3B82F6] text-[#020617] hover:bg-[#3B82F6]/90 rounded-lg font-semibold text-sm transition-colors"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
            <a 
              href="https://github.com/SamratVsn/BlogVsn" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 border border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white rounded-lg font-semibold text-sm transition-colors"
            >
              <Github size={16} /> View Code
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Hero Image */}
            <div className="rounded-lg overflow-hidden border border-slate-800 bg-slate-900">
              <img 
                src={B1} 
                alt="BlogVsn Platform" 
                className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity" 
              />
            </div>

            {/* Intro */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white tracking-[-0.03em]">
                Cloud-native blogging platform
              </h2>
              <p className="text-slate-400 leading-relaxed">
                BlogVsn bridges the gap between traditional CMS content management and modern single-page application performance. 
                By utilizing the Blogger API v3, content management remains completely decoupled from the presentation layer, 
                enabling dynamic, real-time content delivery with edge-cached global distribution.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="p-4 border border-slate-800 rounded-lg bg-slate-900/30">
                  <p className="text-[#3B82F6] font-semibold text-sm mb-2">Performance</p>
                  <p className="text-sm text-slate-400">Edge-cached API responses for instantaneous loading and minimal latency.</p>
                </div>
                <div className="p-4 border border-slate-800 rounded-lg bg-slate-900/30">
                  <p className="text-[#3B82F6] font-semibold text-sm mb-2">Security</p>
                  <p className="text-sm text-slate-400">Google Identity Services for zero-knowledge authentication and data protection.</p>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div>
              <div className="flex gap-1 mb-8 border-b border-slate-800">
                {['overview', 'tech', 'challenges'].map(tab => (
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

              <div className="min-h-[350px]">
                {activeTab === 'overview' && (
                  <div className="space-y-6 animate-in fade-in">
                    <p className="text-slate-400 leading-relaxed">
                      This project demonstrates how to integrate cloud services (Google OAuth, Blogger API) with modern React patterns 
                      to build a scalable, performant blogging platform. The architecture separates concerns between authentication, 
                      data fetching, and content rendering.
                    </p>
                    <div className="space-y-4">
                      <h3 className="text-white font-semibold text-sm">Architecture Highlights</h3>
                      <ul className="space-y-3 text-sm text-slate-400">
                        <li className="flex items-start gap-3">
                          <span className="text-[#3B82F6] font-bold">→</span>
                          <span>Decoupled CMS integration with Blogger API v3</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#3B82F6] font-bold">→</span>
                          <span>OAuth 2.0 authentication with Google Identity Services</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#3B82F6] font-bold">→</span>
                          <span>Edge-cached content delivery via Vercel CDN</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#3B82F6] font-bold">→</span>
                          <span>Serverless email integration with EmailJS</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === 'tech' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in">
                    {techStack.map((t, i) => (
                      <div key={i} className="p-5 border border-slate-800 rounded-lg hover:border-slate-700 transition-colors">
                        <div className="flex items-start gap-3">
                          <t.icon size={20} className="text-[#3B82F6] mt-1" />
                          <div>
                            <h4 className="text-white font-semibold text-sm mb-1">{t.name}</h4>
                            <p className="text-slate-400 text-sm">{t.detail}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'challenges' && (
                  <div className="space-y-4 animate-in fade-in">
                    <div className="p-5 border border-amber-900/50 bg-amber-900/10 rounded-lg">
                      <h4 className="text-amber-200 font-semibold text-sm mb-2">OAuth Callback Logic</h4>
                      <p className="text-slate-400 text-sm">
                        Managing URI redirection between local development environment and production Vercel deployment 
                        required careful configuration of OAuth consent screen and authorized redirect URIs.
                      </p>
                    </div>
                    <div className="p-5 border border-amber-900/50 bg-amber-900/10 rounded-lg">
                      <h4 className="text-amber-200 font-semibold text-sm mb-2">Token Persistence & Security</h4>
                      <p className="text-slate-400 text-sm">
                        Implementing secure session management for OAuth tokens required balancing between local storage 
                        persistence and security best practices to prevent XSS attacks.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Screenshots */}
            <div className="space-y-6">
              <h3 className="text-sm font-semibold text-[#3B82F6] uppercase tracking-widest">Screenshots</h3>
              <div className="grid grid-cols-2 gap-4">
                {screenshots.map((s, i) => (
                  <div 
                    key={i} 
                    onClick={() => setSelectedImage(s)}
                    className="group relative border border-slate-800 rounded-lg overflow-hidden bg-slate-900 cursor-pointer hover:border-slate-700 transition-colors"
                  >
                    <img 
                      src={s.src} 
                      alt={s.label} 
                      className="w-full h-40 object-cover opacity-60 group-hover:opacity-100 transition-opacity" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <p className="absolute bottom-3 left-3 right-3 text-xs font-medium text-slate-100 group-hover:text-[#3B82F6] transition-colors">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Service Status */}
            <div className="p-6 border border-slate-800 rounded-lg bg-slate-900/30">
              <h3 className="text-sm font-semibold text-white mb-6 flex items-center gap-2">
                <Activity size={16} className="text-[#3B82F6]" />
                Service Status
              </h3>
              <div className="space-y-4">
                {services.map((service, i) => (
                  <div key={i} className="flex items-center justify-between p-3 border border-slate-800 rounded-lg">
                    <span className="text-sm text-slate-400">{service.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500" />
                      <span className="text-xs text-green-400 font-medium">{service.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture */}
            <div className="p-6 border border-slate-800 rounded-lg bg-slate-900/30">
              <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                <Cloud size={16} className="text-[#3B82F6]" />
                Data Flow
              </h3>
              <div className="space-y-3 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="text-[#3B82F6] font-bold">1.</span>
                  <span>Client makes request</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#3B82F6] font-bold">2.</span>
                  <span>OAuth verification</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#3B82F6] font-bold">3.</span>
                  <span>Fetch from Blogger API</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#3B82F6] font-bold">4.</span>
                  <span>Render in React</span>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="p-6 border border-slate-800 rounded-lg bg-slate-900/30">
              <h3 className="text-sm font-semibold text-white mb-4">Key Features</h3>
              <div className="space-y-3 text-sm">
                {[
                  'OAuth 2.0 Authentication',
                  'Real-time Content Sync',
                  'Email Notifications',
                  'Protected Routes',
                  'Edge Caching',
                  'Responsive Design'
                ].map((feature, i) => (
                  <div key={i} className="text-slate-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-6 backdrop-blur-sm" 
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-3xl w-full space-y-4 animate-in fade-in">
            <div className="flex justify-between items-center pb-4 border-b border-slate-800">
              <h3 className="text-white font-semibold">{selectedImage.label}</h3>
              <button 
                onClick={() => setSelectedImage(null)}
                className="p-1 hover:bg-slate-800 rounded transition-colors"
              >
                <X size={20} className="text-slate-400" />
              </button>
            </div>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.label} 
              className="w-full border border-slate-800 rounded-lg" 
            />
            <p className="text-sm text-slate-400 text-center">{selectedImage.desc}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default BlogVsn