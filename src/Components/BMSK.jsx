import { useState } from 'react'
import { Github, ArrowUpRight } from 'lucide-react'
import SEO from './SEO'
import BMSK1 from '../assets/BMSK/BMSK1.png'
import BMSK2 from '../assets/BMSK/BMSK2.png'

function BMSK() {
  const [activeTab, setActiveTab] = useState('overview');

  const specs = [
    { label: "Language", value: "Kotlin 1.9" },
    { label: "Architecture", value: "Object-Oriented" },
    { label: "Interface", value: "CLI (Terminal)" },
    { label: "Storage", value: "In-Memory Collections" }
  ];

  const features = [
    { title: "Account Creation", detail: "Dynamic object instantiation with unique UUIDs." },
    { title: "Balance Operations", detail: "Atomic deposit/withdraw logic with error handling." },
    { title: "Data Integrity", detail: "Validation checks for negative inputs and overdrafts." },
    { title: "Search Engine", detail: "Efficient account retrieval with O(n) complexity." }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-[#3B82F6]/30">
      <SEO
        title="Bank Management System | Samrat Parajuli"
        description="OOP-driven banking simulation in Kotlin with account encapsulation, transaction logic, and UUID-based identity. Built by Samrat Parajuli."
        ogUrl="https://www.samratparajuli0.com.np/projects/bmsk"
      />

      {/* Header */}
      <div className="border-b border-slate-800/50 bg-[#020617]/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-2">Backend System</p>
            <h1 className="text-2xl font-bold text-white tracking-[-0.03em]">
              Bank Management <span className="text-[#3B82F6]">System</span>
            </h1>
          </div>
          <a
            href="https://github.com/SamratVsn/Kotlin-Beginner-Codes/blob/main/bankAccountManagement.kt"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2.5 bg-[#3B82F6] text-[#020617] hover:bg-[#3B82F6]/90 rounded-lg font-semibold text-sm transition-colors"
          >
            <Github size={16} /> View Code
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Hero Image */}
            <div className="rounded-lg overflow-hidden border border-slate-800 bg-slate-900">
              <img 
                src={BMSK1} 
                alt="Bank Management System terminal interface" 
                className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity cursor-pointer" 
                loading="lazy"
              />
            </div>

            {/* Intro */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white tracking-[-0.03em]">
                Banking system built with Kotlin
              </h2>
              <p className="text-slate-400 leading-relaxed">
                This system demonstrates proficiency in Kotlin's object-oriented paradigm by simulating a core banking 
                environment where account integrity and state management are prioritized. Built to handle real-time 
                transaction logic with focus on encapsulation and secure data access.
              </p>
            </div>

            {/* Tabs */}
            <div>
              <div className="flex gap-1 mb-8 border-b border-slate-800">
                {['overview', 'features', 'architecture', 'system'].map(tab => (
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

              <div className="min-h-[400px]">
                {activeTab === 'overview' && (
                  <div className="space-y-6 animate-in fade-in">
                    <p className="text-slate-400 leading-relaxed">
                      This banking simulation demonstrates core principles of object-oriented design in Kotlin. 
                      The system manages multiple accounts with transaction handling, validation, and state preservation.
                    </p>
                    <div className="space-y-4">
                      <h3 className="text-white font-semibold text-sm">Core Features</h3>
                      <ul className="space-y-3 text-sm text-slate-400">
                        <li className="flex items-start gap-3">
                          <span className="text-[#3B82F6] font-bold">→</span>
                          <span>Real-time transaction processing with validation</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#3B82F6] font-bold">→</span>
                          <span>Account encapsulation with secure state management</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#3B82F6] font-bold">→</span>
                          <span>UUID-based unique account identification</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#3B82F6] font-bold">→</span>
                          <span>Comprehensive error handling for edge cases</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === 'features' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in">
                    {features.map((feat, i) => (
                      <div key={i} className="p-5 border border-slate-800 rounded-lg hover:border-slate-700 transition-colors">
                        <h4 className="text-white font-semibold text-sm mb-2">{feat.title}</h4>
                        <p className="text-slate-400 text-sm">{feat.detail}</p>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'architecture' && (
                  <div className="space-y-6 animate-in fade-in">
                    <div className="space-y-4">
                      <h3 className="text-white font-semibold text-sm">Class Structure</h3>
                      <div className="p-4 bg-slate-950 border border-slate-800 rounded-lg font-mono text-sm text-slate-400 leading-relaxed">
                        <p><span className="text-purple-400">class</span> <span className="text-cyan-300">Account</span> {`{`}</p>
                        <p className="ml-4"><span className="text-blue-300">val</span> accId: <span className="text-slate-300">String</span></p>
                        <p className="ml-4"><span className="text-blue-300">var</span> balance: <span className="text-slate-300">Double</span></p>
                        <p className="ml-4"><span className="text-blue-300">val</span> customer: <span className="text-slate-300">Customer</span></p>
                        <p>{`}`}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-white font-semibold text-sm">Design Principles</h3>
                      <div className="space-y-3">
                        <div className="p-4 border border-slate-800 rounded-lg">
                          <p className="text-sm text-white font-semibold mb-2">Encapsulation</p>
                          <p className="text-sm text-slate-400">Private state management for balance variables to prevent external corruption and ensure data integrity.</p>
                        </div>
                        <div className="p-4 border border-slate-800 rounded-lg">
                          <p className="text-sm text-white font-semibold mb-2">Polymorphism</p>
                          <p className="text-sm text-slate-400">Interface-based design for different account types (Savings, Current) with specialized behavior.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'system' && (
                  <div className="space-y-6 animate-in fade-in">
                    <div className="space-y-4">
                      <h3 className="text-white font-semibold text-sm">Runtime Environment</h3>
                      <div className="space-y-3">
                        {[
                          { label: 'Platform', value: 'JVM / Android Runtime' },
                          { label: 'Compiler', value: 'kotlinc 1.9.0' },
                          { label: 'Memory', value: 'Automatic Garbage Collection' },
                          { label: 'Build Tool', value: 'Gradle / Maven' }
                        ].map((item, i) => (
                          <div key={i} className="flex justify-between p-3 border border-slate-800 rounded-lg">
                            <span className="text-slate-500 text-sm">{item.label}</span>
                            <span className="text-slate-300 text-sm font-medium">{item.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 bg-amber-900/10 border border-amber-900/50 rounded-lg">
                      <p className="text-amber-200 font-semibold text-sm mb-2">Known Limitation</p>
                      <p className="text-sm text-amber-200/70">
                        Current implementation uses volatile in-memory storage. Persistence layer (database/file I/O) 
                        planned for v2.0 release.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Screenshots */}
            <div className="space-y-6">
              <h3 className="text-sm font-semibold text-[#3B82F6] uppercase tracking-widest">Screenshots</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { src: BMSK1, label: 'Main Interface', desc: 'Account management menu with CRUD operations.' },
                  { src: BMSK2, label: 'Transaction Flow', desc: 'Deposit and withdrawal logic with validation.' }
                ].map((s, i) => (
                  <div 
                    key={i} 
                    className="group relative border border-slate-800 rounded-lg overflow-hidden bg-slate-900 hover:border-slate-700 transition-colors"
                  >
                    <img 
                      src={s.src} 
                      alt={s.label} 
                      className="w-full h-40 object-cover opacity-60 group-hover:opacity-100 transition-opacity" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 inset-x-0 p-4">
                      <p className="text-sm font-semibold text-slate-100 group-hover:text-[#3B82F6] transition-colors">{s.label}</p>
                      <p className="text-xs text-slate-400 mt-1">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Specifications */}
            <div className="p-6 border border-slate-800 rounded-lg bg-slate-900/30">
              <h3 className="text-sm font-semibold text-white mb-6">Specifications</h3>
              <div className="space-y-4">
                {specs.map((spec, i) => (
                  <div key={i} className="border-b border-slate-800 pb-4 last:border-0 last:pb-0">
                    <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">{spec.label}</p>
                    <p className="text-sm text-slate-300 font-medium">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Components */}
            <div className="p-6 border border-slate-800 rounded-lg bg-slate-900/30">
              <h3 className="text-sm font-semibold text-white mb-4">Core Components</h3>
              <div className="space-y-2">
                {[
                  'Account Management',
                  'Transaction Engine',
                  'Validation Logic',
                  'Balance Operations',
                  'Search & Retrieve'
                ].map((comp, i) => (
                  <div key={i} className="text-sm text-slate-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                    {comp}
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="p-6 border border-slate-800 rounded-lg bg-slate-900/30">
              <h3 className="text-sm font-semibold text-white mb-4">Project Stats</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">Lines of Code</span>
                  <span className="text-slate-300 font-medium">~300</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Classes</span>
                  <span className="text-slate-300 font-medium">4</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Complexity</span>
                  <span className="text-slate-300 font-medium">Beginner</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default BMSK