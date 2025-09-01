import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/About" },
    { name: "Skills", to: "/Skills" },
    { name: "Projects", to: "/Projects" },
    { name: "Contact", to: "/Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full h-[70px] bg-gradient-to-r from-[#061666] to-[#0a26dd] backdrop-blur-md shadow-md border-b border-cyan-300/20 z-[1000] flex justify-center">
      <div className="w-full max-w-[1200px] px-4 md:px-8 flex justify-between items-center gap-2 md:gap-8">

        {/* Logo */}
        <div className="font-mono font-semibold text-[#f2f2f2] flex items-center nav-logo text-[0.8rem] md:text-[1.2rem]">
          <span className="text-[#0080ff] font-orbitron font-bold tracking-wide drop-shadow-[0_0_10px_rgba(0,195,255,0.3)] text-[1rem] md:text-[1.5rem]">
            &lt;
          </span>

          <Link
            to="/"
            className="mx-1 no-underline text-[#0ac9eb] font-orbitron font-bold tracking-wide drop-shadow-[0_0_10px_rgba(0,195,255,0.3)] text-[1rem] md:text-[1.5rem]"
          >
            SAMRAT
          </Link>

          <span className="text-[#0080ff] font-orbitron font-bold tracking-wide drop-shadow-[0_0_10px_rgba(0,195,255,0.3)] text-[1rem] md:text-[1.5rem]">
            /&gt;
          </span>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-6 list-none flex-nowrap justify-start md:justify-center">
          {navLinks.map(({ name, to }) => (
            <li key={to}>
              <Link
                to={to}
                className={`relative font-medium text-base px-1 py-2 transition-all duration-300
                  ${
                    pathname === to
                      ? "text-[#00c3ff] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#00c3ff] after:animate-fadein"
                      : "text-slate-200 hover:text-[#00c3ff]"
                  }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Icons - hidden on mobile */}
        <div className="hidden md:flex items-center gap-4">
          {[ // same social icons array as before
            { href: "https://www.linkedin.com", fill: "#0A66C2", icon: "linkedin" },
            { href: "https://github.com", fill: "#181717", icon: "github" },
            { href: "https://facebook.com", fill: "#1877F2", icon: "facebook" },
            { href: "https://developers.google.com/", fill: "#4285F4", icon: "google" }
          ].map(({ href, fill, icon }) => (
            <a
              key={icon}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-cyan-300/20 transition-all duration-300 transform hover:-translate-y-[2px]"
            >
              <svg className="w-4 h-4 md:w-[18px] md:h-[18px]" fill={fill} viewBox="0 0 24 24">
                {getSVGPath(icon)}
              </svg>
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-cyan-200 focus:outline-none"
            aria-label="Toggle menu"
          >
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
        <div className="md:hidden bg-gradient-to-b from-[#0a26dd] via-[#061666] to-[#020b33] bg-opacity-50 backdrop-blur-md shadow-xl w-full absolute top-[70px] left-0 z-50">
          <ul className="flex flex-col px-6 py-4 space-y-3 text-base font-medium list-none">
            {navLinks.map(({ name, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  onClick={closeMenu}
                  className={`block transition ${pathname === to ? "text-[#00c3ff]" : "text-slate-200 hover:text-[#00c3ff]"
                    }`}
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

export default Navbar;

/* Utility function */
function getSVGPath(icon) {
  switch (icon) {
    case "linkedin":
      return (
        <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0H13v2.3h.1c.8-1.5 2.8-3 5.4-3 5.7 0 6.5 3.7 6.5 8.5V24h-5v-7c0-1.7 0-4-2.5-4s-2.9 2-2.9 4v7H7.5V8z" />
      );
    case "github":
      return (
        <path d="M12 0a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.07 1.84 2.8 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.48 5.93.43.37.82 1.1.82 2.22v3.29c0 .32.22.69.83.58A12 12 0 0 0 12 0z" />
      );
    case "facebook":
      return (
        <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.82v-9.294H9.692V11.08h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.098 2.795.142v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.626h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
      );
    case "google":
      return (
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09zM12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23zM5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62zM12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#4285F4" />
      );
    default:
      return null;
  }
}

