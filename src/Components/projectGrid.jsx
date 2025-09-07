import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Database, 
  Globe, 
  Layers, 
  MoreHorizontal, 
  ArrowRight,
  ExternalLink,
  UserStar,
} from 'lucide-react';


export const ProjectGrid = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const projects = [
    {
      title: "Student Management System",
      desc: "A comprehensive student management system with file handling capabilities and CRUD operations built in C",
      link: "/projects/sms",
      category: "System Software",
      tags: ["C", "File Handling", "CRUD"],
      icon: Database,
      status: "Completed"
    },
    {
      title: "Blog VSN",
      desc: "A modern, responsive blog website featuring clean design and smooth user experience built with React & TailwindCSS",
      link: "/projects/blogvsn",
      category: "Web Application",
      tags: ["React", "TailwindCSS", "Blog"],
      icon: Globe,
      status: "Ongoing"
    },
    {
      title: "Allio VSN",
      desc: "A curated collection of mini projects showcasing various React components and TailwindCSS implementations",
      link: "/projects/alliovsn",
      category: "Project Collection",
      tags: ["React", "TailwindCSS", "Components"],
      icon: Layers,
      status: "Completed"
    },
    {
      title: "This",
      desc: "A Portfolio website showing my current progress & introcuding me to the tech world",
      link: "/projects/this",
      category: "Portfolio",
      tags: ["React", "TailwindCSS", "Components", "EmailJs"],
      icon: UserStar,
      status: "Completed"
    },
    {
      title: "More Projects",
      desc: "Explore additional projects and ongoing work including experimental features and upcoming releases",
      link: "/projects/more",
      category: "More",
      tags: ["Various", "In Progress"],
      icon: MoreHorizontal,
      status: "Ongoing"
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-500/30 text-green-200';
      case 'Live': return 'bg-blue-500/30 text-blue-200';
      case 'Active': return 'bg-purple-500/30 text-purple-200';
      case 'Ongoing': return 'bg-orange-500/30 text-orange-200';
      default: return 'bg-gray-500/30 text-gray-200';
    }
  };

  const handleProjectClick = (link) => {
    navigate(link);
  };

  const renderLoadingSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 animate-pulse">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-gray-600 rounded-lg"></div>
            <div className="w-16 h-6 bg-gray-600 rounded-full"></div>
          </div>
          <div className="h-6 bg-gray-600 rounded mb-3"></div>
          <div className="h-16 bg-gray-600 rounded mb-4"></div>
          <div className="flex justify-between items-center">
            <div className="h-4 bg-gray-600 rounded w-24"></div>
            <div className="flex gap-2">
              <div className="h-6 w-12 bg-gray-600 rounded"></div>
              <div className="h-6 w-16 bg-gray-600 rounded"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Projects Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent mb-4">
            My Projects
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore my collection of projects showcasing various technologies and creative solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        {loading ? renderLoadingSkeleton() : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, i) => {
              const IconComponent = project.icon;
              
              return (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                  role="article"
                  aria-labelledby={`project-title-${i}`}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer focus-within:ring-2 focus-within:ring-sky-400 focus-within:ring-opacity-50"
                  onClick={() => handleProjectClick(project.link)}
                >
                  {/* Header with Icon and Status */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-sky-500/20 rounded-lg group-hover:bg-sky-500/30 transition-colors">
                      <IconComponent className="w-6 h-6 text-sky-400 group-hover:text-sky-300 transition-colors" />
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className="text-xs bg-sky-500/20 text-sky-300 px-2 py-1 rounded-md font-medium">
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 
                    id={`project-title-${i}`} 
                    className="text-xl font-semibold text-sky-300 mb-3 group-hover:text-sky-200 transition-colors"
                  >
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 mb-5 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                    {project.desc}
                  </p>
                  
                  {/* Footer with Link and Tags */}
                  <div className="flex justify-between items-center mt-auto">
                    <Link
                      to={project.link}
                      className="text-sky-400 hover:text-sky-300 font-medium inline-flex items-center group-hover:translate-x-1 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-50 rounded px-2 py-1"
                      aria-label={`View ${project.title} project details`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="mr-2">View Project</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>
                    
                    {/* External Link Indicator for certain projects */}
                    {(project.status === 'Live' || project.status === 'Active') && (
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-300 transition-colors" />
                    )}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/10">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded-md font-medium hover:bg-gray-600/50 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectGrid ;