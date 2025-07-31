import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { pathname } = useLocation();

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/About" },
    { name: "Skills", to: "/Skills" },
    { name: "Projects", to: "/Projects" },
    { name: "Contact", to: "/Contact" },
  ];
  return (
    <nav className="fixed top-0 left-0 w-full h-[70px] bg-gradient-to-r from-[#061666] to-[#0a26dd] backdrop-blur-md shadow-md border-b border-cyan-300/20 z-[1000] flex justify-center">
      {/* nav-container */}
      <div className="w-full max-w-[1200px] px-4 md:px-8 flex justify-between items-center gap-2 md:gap-8">

        {/* Logo */}
        <div className="font-mono font-semibold text-[#f2f2f2] flex items-center nav-logo
          text-[0.8rem] md:text-[1.2rem]">
          <span className="text-[#0080ff] font-orbitron font-bold tracking-wide drop-shadow-[0_0_10px_rgba(0,195,255,0.3)]
            text-[1rem] md:text-[1.5rem] logo-bracket"
          >
            &lt;
          </span>

          <Link to="/" className="mx-1 no-underline text-[#0ac9eb] font-orbitron font-bold tracking-wide drop-shadow-[0_0_10px_rgba(0,195,255,0.3)]
            text-[1rem] md:text-[1.5rem] logo-text"
          >
            SAMRAT
          </Link>

          <span className="text-[#0080ff] font-orbitron font-bold tracking-wide drop-shadow-[0_0_10px_rgba(0,195,255,0.3)]
            text-[1rem] md:text-[1.5rem] logo-bracket"
          >
            /&gt;
          </span>
        </div>

        {/* Nav Links */}
        <ul className="flex gap-6 list-none flex-nowrap justify-start md:justify-center sm:flex-row sm:gap-2 md:gap-6">
          {navLinks.map(({ name, to }) => (
            <li key={to}>
              <Link
                to={to}
                className={`relative font-medium text-base px-1 py-2 transition-all duration-300
                  ${pathname === to
                    ? 'text-[#00c3ff] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#00c3ff] after:animate-fadein'
                    : 'text-slate-200 hover:text-[#00c3ff]'
                  }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex items-center gap-4 social-icons max-[720px]:hidden">
          {[
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
              <svg
                className="w-4 h-4 md:w-[18px] md:h-[18px]"
                fill={fill}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {getSVGPath(icon)}
              </svg>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

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
        <path d="M113.7 85.3 0 256l113.7 170.7h94.6L94.6 256 208.3 85.3H113.7zM303.1 85.3 189.4 256l113.7 170.7h94.6L384 426.7 398.7 448 512 256 398.7 64l-14.7 21.3-14.6 21.3h-94.6z" />
      );
    default:
      return null;
  }
}
