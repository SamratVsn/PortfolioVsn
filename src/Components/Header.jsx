import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Projects", to: "/projects" },
  { name: "Notes", to: "/notes" },
  { name: "Contact", to: "/contact" },
];

export default function Header() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 hidden md:flex justify-center transition-all duration-500 ${
        scrolled ? "pt-3" : "pt-5"
      }`}
    >
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center gap-2 rounded-2xl border border-white/[0.06] bg-[#0A101F]/80 backdrop-blur-xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.5)] px-2 py-1.5"
      >
        {/* Brand */}
        <Link
          to="/"
          className="flex items-center gap-2 pl-3 pr-4 border-r border-white/[0.06] mr-1 group shrink-0"
        >
          <div className="relative w-2 h-2 shrink-0">
            <span className="absolute inset-0 rounded-full border border-accent/25" />
            <span className="absolute inset-[2px] rounded-full bg-accent" />
          </div>
          <span className="text-[13px] font-semibold text-white/90 tracking-tight group-hover:text-white transition-colors whitespace-nowrap">
            Samrat
          </span>
        </Link>

        {/* Nav links */}
        <div className="flex items-center gap-0.5">
          {navLinks.map((link) => {
            const isActive = pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-3.5 py-2 text-[12.5px] font-medium rounded-xl transition-all duration-200 ${
                  isActive
                    ? "text-accent"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="navPill"
                    className="absolute inset-0 bg-accent/[0.08] border border-accent/[0.12] rounded-xl -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-1.5 pl-3 border-l border-white/[0.06] ml-1">
          <a
            href="https://github.com/SamratVsn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-500 hover:text-white transition-colors p-2 rounded-xl hover:bg-white/[0.04]"
          >
            <FaGithub size={15} />
          </a>
          <Link
            to="/contact"
            className="bg-accent hover:bg-accent-hover text-[#020617] text-[11.5px] font-bold px-4 py-2 rounded-xl transition-all active:scale-[0.97] ml-0.5"
          >
            Hire me
          </Link>
        </div>
      </motion.nav>
    </header>
  );
}
