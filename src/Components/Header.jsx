import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function SpiritualNavbar () {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/About" },
    { name: "Projects", to: "/Projects" },
    { name: "Contact", to: "/Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full h-[70px] bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#1981ad] backdrop-blur-md shadow-md border-b border-cyan-300/20 z-[1000] flex justify-center">
      <div className="w-full max-w-[1200px] px-4 md:px-8 flex justify-between items-center gap-2 md:gap-8">

        {/* Logo */}
        <div className="font-mono font-semibold flex items-center text-sky-200 drop-shadow-lg text-[1.2rem] md:text-[1.5rem]">
          <span className="text-cyan-400 font-bold mr-1">&lt;</span>
          <Link to="/" className="text-sky-300 font-bold tracking-wide drop-shadow-md mx-1">SAMRAT</Link>
          <span className="text-cyan-400 font-bold ml-1">/&gt;</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 list-none flex-nowrap justify-center">
          {navLinks.map(({ name, to }) => (
            <li key={to}>
              <Link
                to={to}
                className={`relative font-medium text-base px-2 py-1 transition-all duration-300 hover:scale-105 hover:text-cyan-300 ${pathname === to ? 'text-cyan-400 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-cyan-400 after:animate-fadein' : 'text-sky-100'}`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-4">
          {[{ href: "mailto:std.samrat068@.com", icon: <FaEnvelope /> }, { href: "https://github.com/SamratVsn", icon: <FaGithub /> }, { href: "https://www.linkedin.com/in/samrat-parajuli-54310732b/", icon: <FaLinkedin /> }].map(({ href, icon }, i) => (
            <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-cyan-300/20 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
              {icon}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-cyan-200 focus:outline-none">
            {isOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <line x1="6" y1="6" x2="18" y2="18" strokeWidth="2" strokeLinecap="round" />
                <line x1="6" y1="18" x2="18" y2="6" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <line x1="4" y1="6" x2="20" y2="6" strokeWidth="2" strokeLinecap="round" />
                <line x1="4" y1="12" x2="20" y2="12" strokeWidth="2" strokeLinecap="round" />
                <line x1="4" y1="18" x2="20" y2="18" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-[#0f172a] via-[#1e3a8a] to-[#38bdf8] bg-opacity-80 backdrop-blur-md shadow-xl w-full absolute top-[70px] left-0 z-50">
          <ul className="flex flex-col px-6 py-4 space-y-3 text-base font-medium list-none">
            {navLinks.map(({ name, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  onClick={() => setIsOpen(false)}
                  className={`block transition hover:text-cyan-300 ${pathname === to ? 'text-cyan-400' : 'text-sky-100'}`}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};