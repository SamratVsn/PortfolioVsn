import React from 'react';

const ProjectsDisplay = () => {
  const projects = [
    {
      title: "Calculator",
      description: "A fully functional calculator application built in C...",
      GitHub: "https://github.com/SamratVsn/C-codes/blob/main/Calculator.c",
      tech: ["C"],
      date: "2023",
      icon: "ri-calculator-line"
    },
    {
      title: "Guessing Game",
      description: "An interactive number guessing game...",
      GitHub: "https://github.com/SamratVsn/C-codes/blob/main/GUESS_It.c",
      tech: ["C"],
      date: "2023",
      icon: "ri-question-mark"
    },
    {
      title: "Student Management System",
      description: "A comprehensive console application...",
      GitHub: "https://github.com/SamratVsn/C-codes/blob/main/Student_Management.c",
      tech: ["C"],
      date: "2024",
      icon: "ri-graduation-cap-line"
    },
    {
      title: "Digital Clock",
      description: "A real-time digital clock...",
      GitHub: "https://github.com/SamratVsn/C-codes/blob/main/digiClock.c",
      tech: ["C"],
      date: "2023",
      icon: "ri-time-line"
    },
    {
      title: "Allio Pro Vsn",
      description: "An all combined website that launches all my mini projects in 1 website including tiktak toe, weather app & many more.",
      link: "https://allioprovsn.vercel.app/",
      GitHub: "https://github.com/SamratVsn/AllInOne",
      tech: ["React", "Tailwind"],
      date: "2025",
      icon: "ri-apps-2-line"
    },
    {
      title: "Kreatra - A Demo",
      description: "A learning App I hope to build...",
      link: "https://kreatra.vercel.app/",
      tech: ["React", "Tailwind"],
      date: "2025",
      icon: "ri-book-open-line"
    },
    {
      title: "GitHub",
      description: "Not a project but has source code of all that i have done till now",
      link: "https://github.com/SamratVsn",
      icon: "ri-github-line"
    },
    {
      title: "New Project Coming Soon",
      description: "I'm currently working on an exciting new project...",
      link: null,
      icon: "ri-rocket-line"
    }
  ];

  const getTechBadgeColor = (tech) => {
    const colors = {
      'C': 'bg-blue-600/20 text-blue-400 border-blue-600/30',
      'React': 'bg-cyan-600/20 text-cyan-400 border-cyan-600/30',
      'Tailwind': 'bg-teal-600/20 text-teal-400 border-teal-600/30',
    };
    return colors[tech] || 'bg-gray-600/20 text-gray-400 border-gray-600/30';
  };

  return (
    <div className="min-h-screen pt-[70px] bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-blue-800/30 border-b border-blue-600/20 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-center">
            <span className="text-cyan-400">Projects</span></h1>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-300 text-center mt-4 text-lg">
            A collection of my coding journey and technical experiments
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2"
            >
              {/* Project Icon/Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-900/50 to-cyan-900/50 flex items-center justify-center overflow-hidden">
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" />
                <i className={`${project.icon} text-6xl text-cyan-400 group-hover:scale-110 transition-transform duration-300`}></i>
                
                {/* Date Badge */}
                {project.date && (
                  <div className="absolute top-4 right-4 bg-blue-600/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.date}
                  </div>
                )}
                
                {/* Coming Soon Overlay */}
                {project.title === "New Project Coming Soon" && (
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 to-transparent"></div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                {project.tech && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 rounded-full text-xs font-medium border ${getTechBadgeColor(tech)}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  {project.link && project.link !== null && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      <i className="ri-external-link-line"></i>
                      Live Demo
                    </a>
                  )}
                  
                  {project.GitHub && (
                    <a
                      href={project.GitHub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${project.link ? 'px-4' : 'flex-1'} bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2`}
                    >
                      <i className="ri-github-line"></i>
                      {project.link ? '' : 'View Code'}
                    </a>
                  )}

                  {project.title === "New Project Coming Soon" && (
                    <div className="flex-1 bg-orange-600/20 border border-orange-500/30 text-orange-400 px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2">
                      <i className="ri-time-line"></i>
                      Coming Soon
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-900/30 border border-blue-600/30 rounded-full px-6 py-3 text-blue-400">
            <i className="ri-code-s-slash-line"></i>
            <span className="text-sm">More projects coming soon...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDisplay;