import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function SpiritualNavbar() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position for navbar effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/About" },
    { name: "Projects", to: "/Projects" },
    { name: "Contact", to: "/Contact" },
  ];

  const socialLinks = [
    { href: "mailto:std.samrat068@gmail.com", icon: <FaEnvelope />, label: "Email" },
    { href: "https://github.com/SamratVsn", icon: <FaGithub />, label: "GitHub" },
    { href: "https://www.linkedin.com/in/samrat-parajuli-54310732b/", icon: <FaLinkedin />, label: "LinkedIn" }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full h-[70px] backdrop-blur-md shadow-md border-b z-[1000] flex justify-center transition-all duration-300 ${
        scrolled 
          ? 'bg-gradient-to-r from-[#0f172a]/95 via-[#1e3a8a]/95 to-[#1981ad]/95 border-cyan-300/30 shadow-lg' 
          : 'bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#1981ad] border-cyan-300/20'
      }`}
    >
      <div className="w-full max-w-[1200px] px-4 md:px-8 flex justify-between items-center gap-2 md:gap-8">

        {/* Logo */}
        <div className="font-mono font-semibold flex items-center text-sky-200 drop-shadow-lg text-[1.2rem] md:text-[1.5rem]">
          <span className="text-cyan-400 font-bold mr-1 transition-transform hover:scale-110">&lt;</span>
          <Link 
            to="/" 
            className="text-sky-300 font-bold tracking-wide drop-shadow-md mx-1 hover:text-cyan-300 transition-colors duration-300"
          >
            SAMRAT
          </Link>
          <span className="text-cyan-400 font-bold ml-1 transition-transform hover:scale-110">/&gt;</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 list-none flex-nowrap justify-center">
          {navLinks.map(({ name, to }) => (
            <li key={to}>
              <Link
                to={to}
                className={`relative font-medium text-base px-2 py-1 transition-all duration-300 hover:scale-105 group ${
                  pathname === to ? 'text-cyan-400' : 'text-sky-100 hover:text-cyan-300'
                }`}
              >
                {name}
                <span 
                  className={`absolute bottom-0 left-0 h-[2px] bg-cyan-400 transition-all duration-300 ${
                    pathname === to ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-3">
          {socialLinks.map(({ href, icon, label }, i) => (
            <a 
              key={i} 
              href={href} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-cyan-300/20 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-400/20 group"
            >
              <span className="text-sky-200 group-hover:text-cyan-300 transition-colors duration-300">
                {icon}
              </span>
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded p-1 transition-all"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <div className="relative w-7 h-7">
            <span 
              className={`absolute top-2 left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                isOpen ? 'rotate-45 top-3.5' : ''
              }`}
            />
            <span 
              className={`absolute top-3.5 left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <span 
              className={`absolute top-5 left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                isOpen ? '-rotate-45 top-3.5' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div 
        className={`md:hidden bg-gradient-to-b from-[#0f172a]/95 via-[#1e3a8a]/95 to-[#38bdf8]/95 backdrop-blur-md shadow-xl w-full absolute top-[70px] left-0 border-b border-cyan-300/20 transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <ul className="flex flex-col px-6 py-4 space-y-3 text-base font-medium list-none">
          {navLinks.map(({ name, to }) => (
            <li key={to} className="transform transition-all hover:translate-x-2">
              <Link
                to={to}
                onClick={() => setIsOpen(false)}
                className={`block transition-colors duration-200 ${
                  pathname === to ? 'text-cyan-400' : 'text-sky-100 hover:text-cyan-300'
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Social Icons */}
        <div className="flex items-center justify-center gap-4 px-6 pb-4 pt-2 border-t border-cyan-300/20">
          {socialLinks.map(({ href, icon, label }, i) => (
            <a 
              key={i} 
              href={href} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-cyan-300/20 transition-all duration-300 transform hover:scale-110 text-sky-200 hover:text-cyan-300"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}