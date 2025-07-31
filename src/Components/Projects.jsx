import React from 'react';

function Projects() {
  return (
    <div className="relative mx-auto max-w-7xl px-6 py-16 flex items-center justify-center">
      <div className="relative rounded-[2rem] overflow-hidden">
        <div className="absolute inset-0 blur-[30px] opacity-80" style={{ background: 'linear-gradient(135deg, #00b4ff, #0047ff, #001f80)',}} ></div>
        <div className="relative bg-black/60 backdrop-blur-xl border border-blue-500/20 rounded-[2rem] shadow-[0_25px_70px_rgba(0,0,80,0.4)] p-10 md:p-16 transition-all duration-300">
          <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            My Projects
          </h1>
          <p className="text-blue-200 text-base md:text-lg leading-relaxed">
            A collection of creative work including web apps, UI experiments, and collaborative builds. Modern, sleek, and inspired by real-world needs.
          </p>

          {/* Example Project Card */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-xl hover:scale-[1.03] hover:shadow-xl transition-all duration-300">
              <h2 className="text-lg font-medium text-white mb-2">Project Title</h2>
              <p className="text-sm text-blue-100">Brief description of the project goes here. Clean, elegant, and responsive.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
