import React from 'react'
import { Github } from 'lucide-react'
import BMSK1 from '../assets/BMSK/BMSK1.png'

function BMSK() {
  return (
    <>
      <div className="min-h-screen bg-[#0a0a0a] text-gray-100">

        <div className="border-b border-gray-800 bg-[#111]">
          <div className="max-w-6xl mx-auto px-6 py-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Bank Management System</h1>
                <p className="text-gray-400">Console-based CRUD application in Kotlin using OOPS Concepts</p>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://github.com/SamratVsn/C-codes/blob/main/Student_Management.c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-cyan-600 hover:bg-cyan-700 rounded-lg font-medium transition-colors"
                >
                  <Github size={20} />
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="relative rounded-xl overflow-hidden border border-gray-800 shadow-2xl bg-black">
            <img src={BMSK1} alt="SMS Menu Interface" className="w-full h-auto" />
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-2 border-b border-gray-800">
            {['overview', 'features', 'development', 'challenges'].map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 py-3 font-medium capitalize transition-colors relative ${activeTab === tab ? 'text-cyan-400' : 'text-gray-400 hover:text-gray-200'}`}>
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400" />)}
              </button>))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-8">
          {activeTab === 'overview' && (
            <div>
              Hi
            </div>
          )}

          {activeTab === 'features' && (
            <div>
              Hi
            </div>
          )}

          {activeTab === 'development' && (
            <div>
              Hi
            </div>
          )}

          {activeTab === 'challenges' && (
            <div>
              Hi
            </div>
          )}
        </div>

      </div>
    </>
  )
}

export default BMSK
