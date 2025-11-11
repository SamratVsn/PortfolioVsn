import React, { useState } from 'react';
import { Github, Linkedin, Mail, Heart, Coffee, Code } from 'lucide-react';

export default function Footer() {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [likeCount, setLikeCount] = useState(10);
  const [hasLiked, setHasLiked] = useState(false);

  const handleLike = () => {
    if (!hasLiked) {
      setLikeCount(prev => prev + 1);
      setHasLiked(true);
    }
  };

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/SamratVsn', 
      label: 'GitHub',
      color: 'hover:text-purple-400'
    },
    { 
      icon: Mail, 
      href: 'mailto:samratvsn@email.com', 
      label: 'Email',
      color: 'hover:text-red-400'
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/samrat-parajuli-54310732b/', 
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
  ];

  const navLinks = [
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
    { to: '/privacy', label: 'Privacy' },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-400 py-8 sm:py-12 mt-16 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 text-center space-y-6 sm:space-y-8">
        {/* Animated Logo */}
        <div className="space-y-2">
          <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-wide transform transition-transform hover:scale-105 cursor-default">
            Samrat<span className="text-sky-400 inline-block hover:rotate-12 transition-transform">Vsn</span>
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto px-4">
            Crafting digital experiences with passion and precision
          </p>
        </div>

        {/* Navigation Links - Stacked on mobile, inline on desktop */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-sm sm:text-base px-4">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.to}
              className="relative group px-2 py-1 hover:text-sky-400 transition-all duration-300"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Social Links with Hover Effects */}
        <div className="flex justify-center items-center gap-4 sm:gap-6 px-4">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                target={social.href.startsWith('mailto') ? undefined : '_blank'}
                rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className={`relative p-3 rounded-full bg-gray-800/50 ${social.color} transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-400/20`}
                onMouseEnter={() => setHoveredIcon(index)}
                onMouseLeave={() => setHoveredIcon(null)}
                aria-label={social.label}
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                {hoveredIcon === index && (
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    {social.label}
                  </span>
                )}
              </a>
            );
          })}
        </div>

        {/* Interactive Like Button */}
        <div className="flex justify-center items-center gap-3 py-2">
          <button
            onClick={handleLike}
            disabled={hasLiked}
            className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 ${
              hasLiked
                ? 'bg-red-500/20 text-red-400 cursor-not-allowed'
                : 'bg-gray-800 hover:bg-red-500/20 hover:text-red-400 hover:scale-105 active:scale-95'
            }`}
          >
            <Heart
              className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 ${
                hasLiked ? 'fill-current animate-pulse' : ''
              }`}
            />
            <span className="text-sm sm:text-base font-medium">{likeCount}</span>
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8 space-y-3">
          {/* Built With Icons */}
          <div className="flex justify-center items-center gap-2 sm:gap-3 text-gray-500">
            <span className="text-xs sm:text-sm">Built with</span>
            <Code className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400 animate-pulse" />
            <Coffee className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
          </div>

          {/* Copyright */}
          <p className="text-xs sm:text-sm text-gray-500 px-4">
            © {new Date().getFullYear()}{' '}
            <span className="text-white font-medium">SamratVsn</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
