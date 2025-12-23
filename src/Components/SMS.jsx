import React, { useState } from 'react';
import { 
  Github, Terminal, ChevronRight, Activity, 
  Cpu, HardDrive, AlertTriangle, CheckCircle2, 
  ShieldAlert, Box, Search, Trash2, Edit 
} from 'lucide-react';

// Assets
import SMS1 from '../assets/SMS/SMS1.png';
import SMS2 from '../assets/SMS/SMS2.png';
import SMS3 from '../assets/SMS/SMS3.png';
import SMS4 from '../assets/SMS/SMS4.png';
import SMS5 from '../assets/SMS/SMS5.png';
import SMS6 from '../assets/SMS/SMS6.png';
import SMS7 from '../assets/SMS/SMS7.png';

const SMS = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedImage, setSelectedImage] = useState(null);

  const screenshots = [
    { src: SMS2, label: 'ADD_RECORD_PROCEDURE', desc: 'Validating struct serialization to disk.' },
    { src: SMS3, label: 'DATABASE_DUMP', desc: 'Iterating through binary stream using fread().' },
    { src: SMS4, label: 'QUERY_ENGINE', desc: 'Testing fseek() jump logic by Roll No.' },
    { src: SMS5, label: 'UPDATE_BUFFER', desc: 'Overwriting specific byte offsets in rb+ mode.' },
    { src: SMS6, label: 'DELETE_REWRITE', desc: 'Temporary file swap logic for record removal.' },
    { src: SMS7, label: 'INTEGRITY_CHECK', desc: 'Validating file pointers and end-of-file markers.' }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-[#2DD4BF]/30">
      
      {/* HEADER: METADATA STYLE */}
      <div className="border-b border-slate-800 bg-[#020617]/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-slate-900 border border-slate-800 rounded">
              <Cpu size={20} className="text-[#2DD4BF]" />
            </div>
            <div>
              <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                <span>Modules</span> <ChevronRight size={10} /> <span>System_Software</span>
              </div>
              <h1 className="text-xl font-mono font-bold text-slate-100 uppercase tracking-tighter">
                Student_Management.c<span className="text-[#2DD4BF]">_</span>
              </h1>
            </div>
          </div>
          <a href="https://github.com/SamratVsn/C-codes" target="_blank" className="flex items-center gap-2 px-4 py-2 bg-[#2DD4BF] text-black hover:bg-[#26bba8] rounded font-mono text-xs font-bold transition-all">
            <Github size={16} /> CLONE_REPOSITORY
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* MAIN DOCUMENTATION */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* TERMINAL HERO */}
            <div className="group relative rounded-lg overflow-hidden border border-slate-800 bg-black shadow-2xl">
              <div className="absolute top-0 inset-x-0 h-8 bg-slate-900 border-b border-slate-800 flex items-center px-4 justify-between">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                </div>
                <span className="text-[10px] font-mono text-slate-600 tracking-widest">STDOUT -- ANSI_C</span>
              </div>
              <img src={SMS1} alt="CLI Interface" className="w-full h-auto mt-8 opacity-90 group-hover:opacity-100 transition-opacity cursor-pointer" onClick={() => setSelectedImage({src: SMS1, label: 'Main Menu'})} />
            </div>

            {/* CONTENT TABS */}
            <div className="bg-[#070d1f] border border-slate-800 rounded-lg overflow-hidden">
              <div className="flex bg-slate-900/50 border-b border-slate-800 p-1">
                {['overview', 'features', 'challenges'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 font-mono text-[10px] uppercase tracking-wider rounded transition-all ${
                      activeTab === tab ? 'bg-slate-800 text-[#2DD4BF]' : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    {tab}.log
                  </button>
                ))}
              </div>

              <div className="p-8 font-mono text-sm leading-relaxed min-h-[400px]">
                {activeTab === 'overview' && (
                  <div className="space-y-6 animate-in fade-in duration-300">
                    <p className="text-slate-500 italic">// High-performance binary CRUD</p>
                    <p>A low-level implementation of a database engine using the C Standard Library. This project bypasses high-level abstractions to manipulate <span className="text-[#2DD4BF]">raw data streams</span> directly.</p>
                    <div className="p-4 bg-slate-900/50 border-l-2 border-[#2DD4BF]">
                      <span className="text-xs text-slate-500">KEY_DESIGN_PATTERN:</span>
                      <p className="text-slate-300">Synchronous file I/O with manual buffer flushing to ensure data persistence even in the event of software interrupt.</p>
                    </div>
                  </div>
                )}

                {activeTab === 'features' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in">
                    {[
                      { icon: Box, t: "Serialization", d: "Writing struct blocks directly to disk." },
                      { icon: Search, t: "Fseek Navigation", d: "Direct access to records via byte offsets." },
                      { icon: Trash2, t: "Atomic Delete", d: "Temporary file swap to ensure data safety." },
                      { icon: Edit, t: "In-Place Edit", d: "Using rb+ mode for non-destructive updates." }
                    ].map((f, i) => (
                      <div key={i} className="p-4 border border-slate-800 rounded bg-[#020617]">
                        <f.icon size={16} className="text-[#2DD4BF] mb-2" />
                        <div className="text-slate-200 text-xs mb-1 tracking-tighter uppercase font-bold">{f.t}</div>
                        <p className="text-[11px] text-slate-500">{f.d}</p>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'challenges' && (
                  <div className="space-y-6 animate-in fade-in">
                    <div className="space-y-4">
                      <div className="flex gap-4 p-4 border border-red-900/20 bg-red-900/5 rounded">
                        <ShieldAlert className="text-red-500 shrink-0" size={18} />
                        <div>
                          <p className="text-xs text-red-200 uppercase font-bold tracking-widest mb-1">Issue: Struct Padding</p>
                          <p className="text-[11px] text-slate-400">Records became unreadable due to memory alignment differences across architectures.</p>
                          <code className="text-[10px] text-[#2DD4BF] mt-2 block">Fixed via: #pragma pack(1)</code>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* IMAGE GALLERY: THE "ENGINEER'S PROOF" */}
            <div className="space-y-6">
              <h3 className="font-mono text-xs text-slate-500 tracking-[0.3em] uppercase underline underline-offset-8">Execution_Screenshots</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {screenshots.map((s, i) => (
                  <div key={i} className="group relative border border-slate-800 rounded bg-slate-900 overflow-hidden cursor-pointer" onClick={() => setSelectedImage(s)}>
                    <img src={s.src} alt={s.label} className="w-full h-24 object-cover opacity-40 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 inset-x-0 p-2 bg-slate-900/90 border-t border-slate-800">
                      <p className="text-[9px] font-mono text-slate-400 truncate tracking-tighter">{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SIDEBAR STATUS */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 border border-slate-800 bg-[#070d1f] rounded-lg">
              <h3 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                <Activity size={14} className="text-[#2DD4BF]" /> SYSTEM_DIAGNOSTICS
              </h3>
              <div className="space-y-4 font-mono text-[11px]">
                <div className="flex justify-between border-b border-slate-800/50 pb-2">
                  <span className="text-slate-500">STANDARD</span>
                  <span className="text-slate-200">C99 / POSIX</span>
                </div>
                <div className="flex justify-between border-b border-slate-800/50 pb-2">
                  <span className="text-slate-500">COMPILER</span>
                  <span className="text-slate-200">GCC / Clang</span>
                </div>
                <div className="flex justify-between border-b border-slate-800/50 pb-2">
                  <span className="text-slate-500">IO_MODE</span>
                  <span className="text-slate-200">Unbuffered Binary</span>
                </div>
              </div>
            </div>

            <div className="p-6 border border-slate-800 bg-[#070d1f] rounded-lg">
              <h3 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                <HardDrive size={14} /> PERSISTENCE_LAYER
              </h3>
              <div className="p-4 bg-slate-950 border border-slate-900 rounded font-mono text-[9px] text-slate-500 leading-relaxed">
                 $ cat data.dat <br/>
                 [0x00A1] "Samrat" [Roll: 01] <br/>
                 [0x00D4] "Binary" [Roll: 02]
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
            <img src={selectedImage.src} alt="Full View" className="w-full border border-slate-800" />
            <p className="font-mono text-[10px] text-slate-500 italic">{selectedImage.desc}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SMS;