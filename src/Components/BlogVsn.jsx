import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ExternalLink, Github, Code2, Zap, Lock, Mail, 
  Palette, Cloud
} from 'lucide-react'
import SEO from './SEO'
import CaseStudyHeader from './CaseStudyHeader'
import Lightbox from './Lightbox'

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
    { icon: Code2, name: 'React 19', detail: 'Hooks-based UI state management' },
    { icon: Lock, name: 'Google OAuth', detail: 'Google Identity Services sign-in' },
    { icon: Cloud, name: 'Blogger API', detail: 'RESTful content fetching' },
    { icon: Mail, name: 'EmailJS', detail: 'Client-side email delivery' },
    { icon: Palette, name: 'Framer Motion', detail: 'Declarative animation logic' },
    { icon: Zap, name: 'Vercel', detail: 'Static build and hosting' }
  ]

  const screenshots = [
    { src: B2, label: 'Data Feed', desc: 'Post list loaded from the Blogger API.' },
    { src: B3, label: 'Content Engine', desc: 'Blogger post HTML rendered inside the React app.' },
    { src: B4, label: 'Google Sign-in', desc: 'Google sign-in state reflected in the interface.' },
    { src: B5, label: 'Contact Form', desc: 'EmailJS contact form with client-side validation.' }
  ]

  return (
    <div className="min-h-screen bg-canvas text-slate-300 font-sans selection:bg-accent/30">
      <SEO
        title="BlogVsn — React Blog Platform | Samrat Parajuli"
        description="Blog platform that pairs a React 19 frontend with the Blogger API and Google sign-in, deployed on Vercel. Built by Samrat Parajuli."
        ogUrl="https://www.samratparajuli0.com.np/projects/blogvsn"
        ogType="article"
        imageAlt="BlogVsn — React blog platform built by Samrat Parajuli"
      schema={[
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            'itemListElement': [
              { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.samratparajuli0.com.np/' },
              { '@type': 'ListItem', 'position': 2, 'name': 'Projects', 'item': 'https://www.samratparajuli0.com.np/projects' },
              { '@type': 'ListItem', 'position': 3, 'name': 'BlogVsn Platform', 'item': 'https://www.samratparajuli0.com.np/projects/blogvsn' }
            ]
          },
          {
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            '@id': 'https://www.samratparajuli0.com.np/projects/blogvsn#app',
            'name': 'BlogVsn Platform',
            'applicationCategory': 'WebApplication',
            'operatingSystem': 'Web',
            'offers': { '@type': 'Offer', 'price': '0', 'priceCurrency': 'USD', 'availability': 'https://schema.org/InStock' },
            'description': 'Blog platform that pairs a React 19 frontend with the Blogger API and Google sign-in, deployed on Vercel.',
            'url': 'https://blogvsn.vercel.app/',
            'codeRepository': 'https://github.com/SamratVsn/BlogVsn',
            'author': { '@id': 'https://www.samratparajuli0.com.np/#person' }
          }
        ]}
      />
      
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 py-16 xl:max-w-7xl 2xl:max-w-[90rem] min-[1920px]:max-w-[100rem]">
        <CaseStudyHeader
          eyebrow="Web Platform"
          title={<>BlogVsn <span className="text-accent">Platform</span></>}
          summary="A React frontend for a Blogger-managed blog, with Google sign-in and a client-side contact form."
          actions={[
            {
              href: 'https://blogvsn.vercel.app/',
              label: 'Live Demo',
              icon: ExternalLink,
              primary: true,
            },
            {
              href: 'https://github.com/SamratVsn/BlogVsn',
              label: 'View Code',
              icon: Github,
            },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Hero Image */}
            <div className="rounded-xl overflow-hidden border border-slate-800/70 bg-slate-900">
              <motion.img
                layoutId="project-image-/projects/blogvsn"
                src={B1} 
                alt="BlogVsn Platform" 
                className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity" 
              
                style={{ willChange: "transform" }}/>
            </div>

            {/* Intro */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-paper tracking-[-0.03em]">
                Cloud-native blogging platform
              </h2>
              <p className="text-slate-400 leading-relaxed">
                BlogVsn keeps content management in Blogger and the interface in React. Posts are fetched through the Blogger API, so writing stays in a familiar editor while the site ships as a static React build on Vercel.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="p-4 border border-slate-800/70 rounded-xl bg-surface/70 hover:border-slate-700/80 transition-colors">
                  <p className="text-accent font-semibold text-sm mb-2">Performance</p>
                  <p className="text-sm text-slate-400">A static React build served by Vercel, with content fetched from the Blogger API at request time.</p>
                </div>
                <div className="p-4 border border-slate-800/70 rounded-xl bg-surface/70 hover:border-slate-700/80 transition-colors">
                  <p className="text-accent font-semibold text-sm mb-2">Authentication</p>
                  <p className="text-sm text-slate-400">Google Identity Services handles sign-in; the app never sees the Google password.</p>
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
                        ? 'text-accent border-accent' 
                        : 'text-slate-400 border-transparent hover:text-slate-300'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              <div className="min-h-[350px]">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <p className="text-slate-400 leading-relaxed">
                      This project shows how to connect Google sign-in and the Blogger API to a React frontend
                      while keeping authentication, data fetching, and content rendering separate.
                    </p>
                    <div className="space-y-4">
                      <h3 className="text-paper font-semibold text-sm">Architecture Highlights</h3>
                      <ul className="space-y-3 text-sm text-slate-400">
                        <li className="flex items-start gap-3">
                          <span className="text-accent font-bold">→</span>
                          <span>Decoupled CMS integration with Blogger API v3</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-accent font-bold">→</span>
                          <span>Google sign-in through Google Identity Services</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-accent font-bold">→</span>
                          <span>Static deployment on Vercel</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-accent font-bold">→</span>
                          <span>Client-side email delivery with EmailJS</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === 'tech' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {techStack.map((t, i) => (
                      <div key={i} className="p-5 border border-slate-800/70 rounded-xl bg-surface/60 hover:border-slate-700/80 hover:-translate-y-0.5 transition-all duration-300">
                        <div className="flex items-start gap-3">
                          <t.icon size={20} className="text-accent mt-1" />
                          <div>
                            <h4 className="text-paper font-semibold text-sm mb-1">{t.name}</h4>
                            <p className="text-slate-400 text-sm">{t.detail}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'challenges' && (
                  <div className="space-y-4">
                    <div className="p-5 border border-amber-900/50 bg-amber-900/10 rounded-xl">
                      <h4 className="text-amber-200 font-semibold text-sm mb-2">OAuth Callback Logic</h4>
                      <p className="text-slate-400 text-sm">
                        Managing URI redirection between local development environment and production Vercel deployment 
                        required careful configuration of OAuth consent screen and authorized redirect URIs.
                      </p>
                    </div>
                    <div className="p-5 border border-amber-900/50 bg-amber-900/10 rounded-xl">
                      <h4 className="text-amber-200 font-semibold text-sm mb-2">Session Persistence</h4>
                      <p className="text-slate-400 text-sm">
                        The signed-in state is kept in localStorage so a reload does not sign the reader out.
                        A production version would move session handling behind a backend instead.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Screenshots */}
            <div className="space-y-6">
              <h3 className="text-sm font-semibold text-accent uppercase tracking-widest">Screenshots</h3>
              <div className="grid grid-cols-2 gap-4">
                {screenshots.map((s, i) => (
                  <button
                    type="button"
                    key={i}
                    onClick={() => setSelectedImage(s)}
                    className="group relative border border-slate-800/70 rounded-xl overflow-hidden bg-slate-900 cursor-pointer text-left transition-all hover:border-slate-700/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-soft"
                  >
                    <img 
                      src={s.src}
                      loading="lazy"
                      decoding="async" 
                      alt={s.label} 
                      className="w-full h-40 object-cover opacity-60 group-hover:opacity-100 transition-opacity" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <p className="absolute bottom-3 left-3 right-3 text-xs font-medium text-slate-100 group-hover:text-accent-soft transition-colors">
                      {s.label}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Architecture */}
            <div className="p-6 border border-slate-800/70 rounded-xl bg-surface/70">
              <h3 className="text-sm font-semibold text-paper mb-4 flex items-center gap-2">
                <Cloud size={16} className="text-accent" />
                Data Flow
              </h3>
              <div className="space-y-3 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="text-accent font-bold">1.</span>
                  <span>Client makes request</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent font-bold">2.</span>
                  <span>Google sign-in (optional)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent font-bold">3.</span>
                  <span>Fetch from Blogger API</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent font-bold">4.</span>
                  <span>Render in React</span>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="p-6 border border-slate-800/70 rounded-xl bg-surface/70">
              <h3 className="text-sm font-semibold text-paper mb-4">Key Features</h3>
              <div className="space-y-3 text-sm">
                {[
                  'Google sign-in with OAuth',
                  'Blogger API content feed',
                  'EmailJS contact form',
                  'Client-side routing',
                  'Static Vercel deployment',
                  'Responsive design'
                ].map((feature, i) => (
                  <div key={i} className="text-slate-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Image viewer */}
      {selectedImage && (
        <Lightbox
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  )
}

export default BlogVsn
