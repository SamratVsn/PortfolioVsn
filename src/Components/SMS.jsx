import React, { useState } from 'react'
import { Github, Terminal, FileText, Search, Edit, Trash2, Database, AlertCircle } from 'lucide-react'
import SMS1 from '../assets/SMS/SMS1.png'
import SMS2 from '../assets/SMS/SMS2.png'
import SMS3 from '../assets/SMS/SMS3.png'
import SMS4 from '../assets/SMS/SMS4.png'
import SMS5 from '../assets/SMS/SMS5.png'
import SMS6 from '../assets/SMS/SMS6.png'
import SMS7 from '../assets/SMS/SMS7.png'

function SMS() {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedImage, setSelectedImage] = useState(null)

  const features = [
    {
      icon: FileText,
      name: 'Add Student',
      desc: 'Store new student records with details like name, roll number, and marks',
      code: 'fwrite()'
    },
    {
      icon: Database,
      name: 'Display All',
      desc: 'List all student records stored in the file system',
      code: 'fread()'
    },
    {
      icon: Search,
      name: 'Search Student',
      desc: 'Find specific student by roll number using file seeking',
      code: 'fseek()'
    },
    {
      icon: Edit,
      name: 'Update Record',
      desc: 'Modify existing student information and save changes',
      code: 'fseek() + fwrite()'
    },
    {
      icon: Trash2,
      name: 'Delete Record',
      desc: 'Remove student from system by rewriting file without that record',
      code: 'File rewrite'
    },
    {
      icon: Terminal,
      name: 'Menu Interface',
      desc: 'Clean console-based navigation with numbered options',
      code: 'switch-case'
    }
  ]

  const developmentSteps = [
    {
      title: 'Feature Planning',
      desc: 'Designed the core CRUD operations needed for managing student records'
    },
    {
      title: 'Menu System',
      desc: 'Built menu-driven interface with switch-case for user operation selection'
    },
    {
      title: 'File Handling Setup',
      desc: 'Implemented persistent storage using fopen, fread, fwrite, and fseek functions'
    },
    {
      title: 'CRUD Implementation',
      desc: 'Developed add, display, search, update, and delete functionalities'
    },
    {
      title: 'Input Validation',
      desc: 'Added checks for invalid inputs to prevent crashes and data corruption'
    },
    {
      title: 'Testing & Debugging',
      desc: 'Tested each operation with edge cases and fixed file handling bugs'
    }
  ]

  const challenges = [
    {
      title: 'File Mode Confusion',
      problem: 'Used incorrect file modes (rb, wb, ab+) causing data to be overwritten or lost unexpectedly.',
      solution: 'Studied each mode thoroughly. Used rb+ for reading/updating, wb for fresh writes, and ab+ for appending.',
      impact: 'Understood when to use each file mode for different operations'
    },
    {
      title: 'Data Persistence Issues',
      problem: 'Student records disappeared after program restart because data wasn\'t being written to file correctly.',
      solution: 'Properly used fwrite to save struct data and ensured fclose was called to flush buffers.',
      impact: 'Learned importance of proper file closing and buffer management'
    },
    {
      title: 'Update Operation Complexity',
      problem: 'Updating specific records required precise file pointer positioning without corrupting adjacent data.',
      solution: 'Used fseek with SEEK_SET to calculate exact byte offset based on record size and position.',
      impact: 'Mastered file pointer manipulation and binary file operations'
    },
    {
      title: 'Delete Without Native Support',
      problem: 'C has no built-in delete operation for file records - couldn\'t simply remove one entry.',
      solution: 'Implemented temporary file approach: read all records except deleted one, write to new file, replace original.',
      impact: 'Learned workarounds for language limitations and file system constraints'
    },
    {
      title: 'Input Validation',
      problem: 'Program crashed when users entered unexpected data types or out-of-range values.',
      solution: 'Added input validation loops, cleared input buffers, and handled scanf return values.',
      impact: 'Developed defensive programming habits and error handling skills'
    },
    {
      title: 'File Corruption',
      problem: 'Files got corrupted due to improper closing or misaligned struct padding.',
      solution: 'Always called fclose, used #pragma pack to control struct alignment, added file integrity checks.',
      impact: 'Understood low-level memory layout and importance of cleanup operations'
    }
  ]

  const screenshots = [
    { src: SMS2, label: 'Add Student' },
    { src: SMS3, label: 'Display Records' },
    { src: SMS4, label: 'Search Function' },
    { src: SMS5, label: 'Update Record' },
    { src: SMS6, label: 'Delete Operation' },
    { src: SMS7, label: 'File Operations' }
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      {/* Header */}
      <div className="border-b border-gray-800 bg-[#111]">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Student Management System</h1>
              <p className="text-gray-400">Console-based CRUD application in C with file handling</p>
            </div>
            <div className="flex gap-3">
              <a
                href="https://github.com/SamratVsn/C-codes/blob/main/Student_Management.c"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-cyan-600 hover:bg-cyan-700 rounded-lg font-medium transition-colors"
              >
                <Github size={18} />
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="relative rounded-xl overflow-hidden border border-gray-800 shadow-2xl bg-black">
          <img src={SMS1} alt="SMS Menu Interface" className="w-full h-auto" />
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex gap-2 border-b border-gray-800">
          {['overview', 'features', 'development', 'challenges'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-medium capitalize transition-colors relative ${ activeTab === tab  ? 'text-cyan-400' : 'text-gray-400 hover:text-gray-200'}`}>
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
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="bg-[#111] border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">Project Overview</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                A console-based student management system built entirely in C, demonstrating core file 
                handling concepts and CRUD operations. The system manages student records persistently 
                using binary file operations, allowing users to add, view, search, update, and delete 
                student information through a menu-driven interface.
              </p>
              <p className="text-gray-300 leading-relaxed">
                This project was developed to understand low-level file operations in C, including proper 
                use of file pointers, seeking, and binary data manipulation. All student data is stored 
                in a binary file, making it persistent across program executions.
              </p>
            </div>

            <div className="bg-[#111] border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">Technical Implementation</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2"></div>
                  <div>
                    <span className="font-medium">Language:</span>
                    <span className="text-gray-400 ml-2">C (ANSI C standard)</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2"></div>
                  <div>
                    <span className="font-medium">Storage:</span>
                    <span className="text-gray-400 ml-2">Binary file with struct serialization</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2"></div>
                  <div>
                    <span className="font-medium">Key Functions:</span>
                    <span className="text-gray-400 ml-2">fopen, fread, fwrite, fseek, fclose</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2"></div>
                  <div>
                    <span className="font-medium">Interface:</span>
                    <span className="text-gray-400 ml-2">Console-based menu with numbered options</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#111] border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">Learning Outcomes</h2>
              <ul className="space-y-2 text-gray-300">
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Deep understanding of binary file operations in C</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Practical experience with file modes and pointer manipulation</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Structured programming and modular function design</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Input validation and error handling techniques</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'features' && (
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-[#111] border border-gray-800 rounded-xl p-5 hover:border-cyan-900 transition-colors group"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-900/20 flex items-center justify-center group-hover:bg-cyan-900/30 transition-colors">
                    <feature.icon size={20} className="text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{feature.name}</h3>
                    <p className="text-sm text-gray-400">{feature.desc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-800">
                  <code className="text-xs bg-gray-800 px-2 py-1 rounded text-cyan-400">
                    {feature.code}
                  </code>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'development' && (
          <div className="space-y-3">
            {developmentSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#111] border border-gray-800 rounded-xl p-5 hover:border-gray-700 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-900/20 flex items-center justify-center">
                    <span className="text-sm font-semibold text-cyan-400">{idx + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-400">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'challenges' && (
          <div className="space-y-6">
            {challenges.map((challenge, idx) => (
              <div
                key={idx}
                className="bg-[#111] border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors"
              >
                <div className="flex items-start gap-3 mb-4">
                  <AlertCircle size={20} className="text-orange-400 mt-0.5 flex-shrink-0" />
                  <h3 className="text-lg font-semibold">{challenge.title}</h3>
                </div>
                
                <div className="space-y-3 ml-8">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                      <span className="text-sm font-medium text-red-400">Problem</span>
                    </div>
                    <p className="text-gray-300 text-sm">{challenge.problem}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                      <span className="text-sm font-medium text-green-400">Solution</span>
                    </div>
                    <p className="text-gray-300 text-sm">{challenge.solution}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                      <span className="text-sm font-medium text-cyan-400">Impact</span>
                    </div>
                    <p className="text-gray-300 text-sm">{challenge.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Screenshots Gallery */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold mb-6">System Screenshots</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {screenshots.map((shot, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(shot)}
              className="relative rounded-xl overflow-hidden border border-gray-800 cursor-pointer group hover:border-cyan-900 transition-colors bg-black"
            >
              <img src={shot.src} alt={shot.label} className="w-full h-auto" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-medium">{shot.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-5xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">{selectedImage.label}</h3>
              <button className="text-gray-400 hover:text-white">Close</button>
            </div>
            <img
              src={selectedImage.src}
              alt={selectedImage.label}
              className="w-full rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default SMS