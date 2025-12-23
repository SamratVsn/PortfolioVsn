import React, { useState } from 'react'
import { Github, Terminal, Code2, Cpu, ChevronRight } from 'lucide-react'
import BMSK1 from '../assets/BMSK/BMSK1.png'

function BMSK() {
  const [activeTab, setActiveTab] = useState('overview');

  const specs = [
    { label: "Language", value: "Kotlin 1.9" },
    { label: "Architecture", value: "OOPS / Structural" },
    { label: "Interface", value: "CLI (Terminal)" },
    { label: "Storage", value: "In-Memory / Collections" }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans">
      {/* Header / Breadcrumbs */}
      <div className="border-b border-slate-800 bg-[#020617]/50 backdrop-blur-md sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-2">
            <span>PROJECTS</span> <ChevronRight size={12} />
            <span className="text-[#2DD4BF]">BMS_KOTLIN.kt</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl font-mono font-bold text-slate-100 tracking-tighter uppercase">
                Bank Management System<span className="text-[#2DD4BF]">_</span>
              </h1>
            </div>
            <a
              href="https://github.com/SamratVsn/Kotlin-Beginner-Codes/blob/main/bankAccountManagement.kt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-black hover:bg-[#2DD4BF] rounded font-mono text-sm font-bold transition-all"
            >
              <Github size={18} />
              SOURCE_CODE
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-12">
            {/* Screenshot with "Terminal Container" look */}
            <div className="rounded-lg overflow-hidden border border-slate-800 bg-[#0a0f1e] shadow-2xl">
              <div className="bg-slate-900 px-4 py-2 border-b border-slate-800 flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
              </div>
              <img src={BMSK1} alt="Terminal Interface" className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* IDE-style Navigation */}
            <div className="border border-slate-800 rounded-lg bg-[#070d1f] overflow-hidden">
              <div className="flex bg-slate-900 border-b border-slate-800">
                {['overview', 'features', 'logic', 'system'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 font-mono text-xs uppercase tracking-widest transition-all relative ${activeTab === tab
                        ? 'bg-[#070d1f] text-[#2DD4BF] border-r border-slate-800'
                        : 'text-slate-500 hover:text-slate-300 border-r border-slate-800/50'
                      }`}
                  >
                    {tab}.md
                  </button>
                ))}
              </div>

              <div className="p-8 font-mono text-sm leading-relaxed min-h-[300px]">
                {activeTab === 'overview' && (
                  <div className="space-y-4 animate-in fade-in duration-500">
                    <p className="text-slate-400">
                      <span className="text-[#2DD4BF]"># PROJECT_SUMMARY</span><br />
                      This system was built to demonstrate proficiency in <span className="text-slate-100">Kotlin's Object-Oriented paradigm</span>. It simulates a core banking environment where account integrity and state management are prioritized.
                    </p>
                    <ul className="list-none space-y-2 text-slate-500">
                      <li>&gt; Built to handle real-time transaction logic.</li>
                      <li>&gt; Focuses on encapsulation and secure data access.</li>
                    </ul>
                  </div>
                )}
                {activeTab === 'features' && (
                  <div className="space-y-6 animate-in fade-in duration-500">
                    <div className="space-y-2">
                      <h4 className="text-[#2DD4BF] font-mono text-sm">// FUNCTIONAL_REQUIREMENTS</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { title: "Account Creation", detail: "Dynamic object instantiation with unique UUIDs." },
                          { title: "Balance Operations", detail: "Atomic deposit/withdraw logic with error handling." },
                          { title: "Data Integrity", detail: "Validation checks for negative inputs and overdrafts." },
                          { title: "Search Engine", detail: "O(n) search complexity for account retrieval." }
                        ].map((feat, i) => (
                          <div key={i} className="p-4 border border-slate-800 bg-[#020617] rounded">
                            <span className="text-slate-100 block mb-1">:: {feat.title}</span>
                            <span className="text-xs text-slate-500">{feat.detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'logic' && (
                  <div className="space-y-6 animate-in fade-in duration-500">
                    <div className="bg-slate-950 p-4 border border-slate-800 rounded font-mono text-[13px] text-slate-400">
                      <p className="text-[#2DD4BF] mb-2">// CORE_CLASS_STRUCTURE</p>
                      <p><span className="text-purple-400">class</span> <span className="text-yellow-200">Account</span>(</p>
                      <p className="pl-4"><span className="text-blue-300">val</span> accId: String,</p>
                      <p className="pl-4"><span className="text-blue-300">var</span> InitialBalance: Double = 0.0,</p>
                      <p className="pl-4"><span className="text-blue-300">val</span> customer: Customer</p>
                      <p>)</p>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-[#2DD4BF] font-mono text-sm">// ARCHITECTURAL_CONCEPTS</h4>
                      <ul className="space-y-3 text-sm text-slate-400">
                        <li className="flex gap-3">
                          <span className="text-[#2DD4BF]">[01]</span>
                          <span><b className="text-slate-200">Encapsulation:</b> Private state management for balance variables to prevent external corruption.</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-[#2DD4BF]">[02]</span>
                          <span><b className="text-slate-200">Polymorphism:</b> Utilizing interfaces for different account types (Savings vs Current).</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === 'system' && (
                  <div className="space-y-6 animate-in fade-in duration-500">
                    <div className="space-y-4">
                      <h4 className="text-[#2DD4BF] font-mono text-sm">// RUNTIME_ENVIRONMENT</h4>
                      <div className="space-y-2 font-mono text-xs">
                        <div className="flex justify-between border-b border-slate-800 py-2">
                          <span className="text-slate-500">OS_TARGET:</span>
                          <span className="text-slate-300">JVM / Android Runtime</span>
                        </div>
                        <div className="flex justify-between border-b border-slate-800 py-2">
                          <span className="text-slate-500">COMPILER:</span>
                          <span className="text-slate-300">kotlinc 1.9.0</span>
                        </div>
                        <div className="flex justify-between border-b border-slate-800 py-2">
                          <span className="text-slate-500">MEMORY_MANAGEMENT:</span>
                          <span className="text-slate-300">Automatic (GC)</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-red-900/10 border border-red-900/30 rounded">
                      <h5 className="text-red-400 text-xs font-mono mb-2">KNOWN_LIMITATIONS</h5>
                      <p className="text-xs text-red-300/70 font-mono">
                        &gt; Current build uses volatile memory; persistence layer (SQL/File) implementation pending in v2.0.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar Metadata */}
          <div className="lg:col-span-4 space-y-8">
            <div className="p-6 border border-slate-800 rounded-lg bg-[#070d1f]">
              <h3 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-6 border-b border-slate-800 pb-2">Technical Specs</h3>
              <div className="space-y-4">
                {specs.map(spec => (
                  <div key={spec.label} className="flex justify-between items-center">
                    <span className="text-xs text-slate-500 font-mono">{spec.label}</span>
                    <span className="text-xs text-[#2DD4BF] font-mono">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 border border-slate-800 rounded-lg bg-[#070d1f]">
              <h3 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">Core Modules</h3>
              <div className="flex flex-wrap gap-2">
                {['Account_Auth', 'Transaction_Engine', 'Data_Persistence', 'Validation_Logic'].map(tag => (
                  <span key={tag} className="text-[10px] font-mono bg-slate-900 text-slate-400 px-2 py-1 rounded border border-slate-800">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BMSK