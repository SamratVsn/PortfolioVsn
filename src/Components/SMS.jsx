import { useState } from 'react';
import { 
  Github, ChevronRight, Activity, 
  HardDrive, Box, Search, Trash2, Edit, ArrowUpRight, X
} from 'lucide-react';
import SEO from './SEO';

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
    { src: SMS2, label: 'Add Record', desc: 'Validating struct serialization to disk.' },
    { src: SMS3, label: 'Database Dump', desc: 'Iterating through binary stream using fread().' },
    { src: SMS4, label: 'Query Engine', desc: 'Testing fseek() jump logic by Roll No.' },
    { src: SMS5, label: 'Update Buffer', desc: 'Overwriting specific byte offsets in rb+ mode.' },
    { src: SMS6, label: 'Delete Rewrite', desc: 'Temporary file swap logic for record removal.' },
    { src: SMS7, label: 'Integrity Check', desc: 'Validating file pointers and end-of-file markers.' }
  ];

  const features = [
    { icon: Box, title: "Serialization", desc: "Writing struct blocks directly to disk." },
    { icon: Search, title: "Fseek Navigation", desc: "Direct access to records via byte offsets." },
    { icon: Trash2, title: "Atomic Delete", desc: "Temporary file swap to ensure data safety." },
    { icon: Edit, title: "In-Place Edit", desc: "Using rb+ mode for non-destructive updates." }
  ];

  const specs = [
    { label: 'Language', value: 'ANSI C / C99' },
    { label: 'Compiler', value: 'GCC / Clang' },
    { label: 'I/O Mode', value: 'Unbuffered Binary' },
    { label: 'Pattern', value: 'Direct Memory Access' }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-[#3B82F6]/30">
      <SEO
        title="Student Management System | Samrat Parajuli"
        description="A console-based CRUD system in C with binary file I/O, struct serialization, and direct byte-offset navigation. Built by Samrat Parajuli."
        ogUrl="https://www.samratparajuli0.com.np/projects/sms"
      />
      
      {/* Header */}
      <div className="border-b border-slate-800/50 bg-[#020617]/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-2">System Software</p>
            <h1 className="text-2xl font-bold text-white tracking-[-0.03em]">
              Student Management <span className="text-[#3B82F6]">System</span>
            </h1>
          </div>
          <a 
            href="https://github.com/SamratVsn/C-codes" 
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
                src={SMS1} 
                alt="CLI Interface" 
                className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity cursor-pointer" 
                onClick={() => setSelectedImage({src: SMS1, label: 'Main Menu', desc: 'Interactive command-line interface'})}
              />
            </div>

            {/* Intro */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white tracking-[-0.03em]">
                Low-level database engine in C
              </h2>
              <p className="text-slate-400 leading-relaxed">
                A high-performance CRUD system that bypasses high-level abstractions to manipulate raw data streams directly. 
                This project demonstrates deep understanding of file I/O, memory management, and binary serialization using 
                the C Standard Library.
              </p>
              <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
                <p className="text-sm text-slate-300">
                  <span className="text-[#3B82F6] font-semibold">Key Pattern:</span> Synchronous file I/O with manual buffer 
                  flushing to ensure data persistence even in the event of software interrupt.
                </p>
              </div>
            </div>

            {/* Tabs */}
            <div>
              <div className="flex gap-1 mb-8 border-b border-slate-800">
                {['overview', 'features', 'challenges'].map(tab => (
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

              <div className="min-h-[300px]">
                {activeTab === 'overview' && (
                  <div className="space-y-6 animate-in fade-in">
                    <p className="text-slate-400 leading-relaxed">
                      This project demonstrates a low-level implementation of a database engine using the C Standard Library. 
                      It showcases how modern databases work under the hood by directly manipulating binary data streams.
                    </p>
                    <div className="space-y-4">
                      <h3 className="text-white font-semibold text-sm">Core Architecture</h3>
                      <ul className="space-y-3 text-sm text-slate-400">
                        <li className="flex items-start gap-3">
                          <span className="text-[#3B82F6] font-bold">→</span>
                          <span>Binary file storage with struct serialization</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#3B82F6] font-bold">→</span>
                          <span>Direct byte-offset navigation using fseek()</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#3B82F6] font-bold">→</span>
                          <span>Atomic operations with temporary file swapping</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#3B82F6] font-bold">→</span>
                          <span>In-place updates using rb+ file mode</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === 'features' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in">
                    {features.map((f, i) => (
                      <div key={i} className="p-5 border border-slate-800 rounded-lg hover:border-slate-700 transition-colors">
                        <div className="flex items-start gap-3">
                          <f.icon size={20} className="text-[#3B82F6] mt-1" />
                          <div>
                            <h4 className="text-white font-semibold text-sm mb-1">{f.title}</h4>
                            <p className="text-slate-400 text-sm">{f.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'challenges' && (
                  <div className="space-y-6 animate-in fade-in">
                    <div className="p-5 border border-amber-900/50 bg-amber-900/10 rounded-lg">
                      <h4 className="text-amber-200 font-semibold text-sm mb-2">Struct Padding Issue</h4>
                      <p className="text-slate-400 text-sm mb-3">
                        Records became unreadable due to memory alignment differences across architectures.
                      </p>
                      <div className="p-3 bg-slate-900 rounded text-xs font-mono text-slate-300">
                        <span className="text-[#3B82F6]">Solution:</span> #pragma pack(1)
                      </div>
                    </div>
                    <div className="p-5 border border-amber-900/50 bg-amber-900/10 rounded-lg">
                      <h4 className="text-amber-200 font-semibold text-sm mb-2">File Pointer Management</h4>
                      <p className="text-slate-400 text-sm">
                        Managing file pointers across multiple operations required careful tracking to prevent 
                        data corruption. Implemented validation checks to ensure pointer consistency.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Screenshots */}
            <div className="space-y-6">
              <h3 className="text-sm font-semibold text-[#3B82F6] uppercase tracking-widest">Execution Screenshots</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {screenshots.map((s, i) => (
                  <div 
                    key={i} 
                    className="group relative border border-slate-800 rounded overflow-hidden bg-slate-900 cursor-pointer hover:border-slate-700 transition-colors"
                    onClick={() => setSelectedImage(s)}
                  >
                    <img 
                      src={s.src} 
                      alt={s.label} 
                      className="w-full h-32 object-cover opacity-60 group-hover:opacity-100 transition-opacity" 
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
            
            {/* Specifications */}
            <div className="p-6 border border-slate-800 rounded-lg bg-slate-900/30">
              <h3 className="text-sm font-semibold text-white mb-6 flex items-center gap-2">
                <Activity size={16} className="text-[#3B82F6]" />
                Specifications
              </h3>
              <div className="space-y-4">
                {specs.map((spec, i) => (
                  <div key={i} className="border-b border-slate-800 pb-4 last:border-0 last:pb-0">
                    <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">{spec.label}</p>
                    <p className="text-sm text-slate-300 font-medium">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Data Structure */}
            <div className="p-6 border border-slate-800 rounded-lg bg-slate-900/30">
              <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                <HardDrive size={16} className="text-[#3B82F6]" />
                Data Structure
              </h3>
              <div className="p-4 bg-slate-950 border border-slate-900 rounded text-xs font-mono text-slate-400 leading-relaxed space-y-1">
                <div><span className="text-[#3B82F6]">struct</span> Student {`{`}</div>
                <div className="ml-4">
                  <div><span className="text-slate-500">char</span> name[50];</div>
                  <div><span className="text-slate-500">int</span> rollNo;</div>
                  <div><span className="text-slate-500">float</span> gpa;</div>
                </div>
                <div>{`}`};</div>
              </div>
            </div>

            {/* Stats */}
            <div className="p-6 border border-slate-800 rounded-lg bg-slate-900/30">
              <h3 className="text-sm font-semibold text-white mb-4">Project Stats</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">Lines of Code</span>
                  <span className="text-slate-300 font-medium">~450</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Functions</span>
                  <span className="text-slate-300 font-medium">8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Complexity</span>
                  <span className="text-slate-300 font-medium">Intermediate</span>
                </div>
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
            <p className="text-sm text-slate-400">{selectedImage.desc}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SMS;