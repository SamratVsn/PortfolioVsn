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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 hidden md:flex items-center transition-all duration-300 ${
        scrolled
          ? "h-14 bg-[#020617]/90 backdrop-blur-xl border-b border-slate-800/60"
          : "h-16 bg-[#020617]/60 backdrop-blur-sm"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 flex justify-between items-center 2xl:max-w-[90rem] min-[1920px]:max-w-[100rem]">

        {/* BRAND */}
        <Link
          to="/"
          className="flex items-center gap-2.5 shrink-0 group"
        >
          <div className="relative w-2.5 h-2.5 shrink-0">
            <span className="absolute inset-0 rounded-full border border-[#3B82F6]/25" />
            <span className="absolute inset-[2px] rounded-full bg-[#3B82F6]" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[14px] font-bold tracking-tight text-white group-hover:text-white/90 transition-colors">
              Samrat Parajuli
            </span>
            <span className="text-[8.5px] text-[#3B82F6] font-semibold tracking-[0.12em] uppercase mt-0.5">
              Android Developer
            </span>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <div className="flex items-center gap-0.5">
          {navLinks.map((link) => {
            const isActive = pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-3.5 py-2 text-[13px] font-medium rounded-lg transition-all duration-200 ${
                  isActive
                    ? "text-[#3B82F6]"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-px left-3 right-3 h-[2px] bg-[#3B82F6] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* DESKTOP RIGHT */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/SamratVsn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-500 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/[0.04]"
          >
            <FaGithub size={17} />
          </a>
          <Link
            to="/contact"
            className="bg-[#3393FF] hover:bg-[#3B82F6]/90 text-[#020617] text-[12px] font-bold px-4 py-2 rounded-lg transition-all active:scale-[0.97]"
          >
            Hire me
          </Link>
        </div>

      </div>
    </nav>
  );
}
