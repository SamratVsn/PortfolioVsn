import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BookOpen } from "lucide-react";
import { X, Menu } from "lucide-react";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Projects", to: "/projects" },
  { name: "Notes", to: "/notes" },
  { name: "Contact", to: "/contact" },
];

const mobileSocials = [
  { icon: FaGithub, href: "https://github.com/SamratVsn", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/samratvsn/",
    label: "LinkedIn",
  },
  {
    icon: BookOpen,
    href: "https://medium.com/@samratvsn",
    label: "Medium",
  },
  { icon: MdEmail, href: "mailto:samratvsn@gmail.com", label: "Email" },
];

export default function Header() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 flex items-center transition-all duration-300 ${
          scrolled
            ? "h-14 bg-[#020617]/90 backdrop-blur-xl border-b border-slate-800/60"
            : "h-16 bg-[#020617]/60 backdrop-blur-sm"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-6 flex justify-between items-center">

          {/* BRAND */}
          <Link
            to="/"
            className="z-[1100] flex items-center gap-2.5 shrink-0 group"
            onClick={() => setIsOpen(false)}
          >
            <div className="relative w-2.5 h-2.5 shrink-0">
              <span className="absolute inset-0 rounded-full border border-[#3B82F6]/25" />
              <span className="absolute inset-[2px] rounded-full bg-[#3B82F6]" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[14px] font-bold tracking-tight text-white group-hover:text-white/90 transition-colors">
                Samrat
              </span>
              <span className="text-[8.5px] text-[#3B82F6] font-semibold tracking-[0.12em] uppercase mt-0.5">
                Android Dev
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-0.5">
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
          <div className="hidden lg:flex items-center gap-3">
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
              className="bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-[#020617] text-[12px] font-bold px-4 py-2 rounded-lg transition-all active:scale-[0.97]"
            >
              Hire me
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="md:hidden flex items-center gap-3 z-[1100]">
            <a
              href="https://github.com/SamratVsn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-500 hover:text-white transition-colors p-1.5"
            >
              <FaGithub size={17} />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col gap-1 p-1.5 text-slate-400 hover:text-[#3B82F6] transition-colors"
              aria-label={isOpen ? "Close navigation" : "Open navigation"}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div key="close" initial={{ rotate: -45, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 45, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 45, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -45, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>

        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-0 z-40 md:hidden"
          >
            <div className="bg-[#020617]/98 backdrop-blur-xl border-b border-slate-800/40 pt-[72px] pb-6 px-5">
              <div className="max-w-sm mx-auto">

                {/* Status badge */}
                <div className="flex justify-center mb-5">
                  <div className="inline-flex items-center gap-2 bg-[#3B82F6]/[0.06] border border-[#3B82F6]/15 rounded-full px-3 py-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                    <span className="text-[11px] text-[#3B82F6] font-semibold tracking-wide">
                      Open to opportunities
                    </span>
                  </div>
                </div>

                {/* Nav links */}
                <nav className="flex flex-col gap-1 mb-5">
                  {navLinks.map((link, i) => {
                    const isActive = pathname === link.to;
                    return (
                      <motion.div
                        key={link.to}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.18, delay: i * 0.04 }}
                      >
                        <Link
                          to={link.to}
                          onClick={() => setIsOpen(false)}
                          className={`block text-center px-4 py-2.5 rounded-xl text-[13px] font-medium transition-all border ${
                            isActive
                              ? "text-[#3B82F6] bg-[#3B82F6]/[0.05] border-[#3B82F6]/12"
                              : "text-slate-400 hover:text-white hover:bg-white/[0.03] border-transparent"
                          }`}
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                {/* CTA */}
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block text-center bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-[#020617] text-[13px] font-bold py-2.5 rounded-xl transition-all active:scale-[0.98] mb-6"
                >
                  Hire me
                </Link>

                {/* Socials */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.22 }}
                  className="pt-5 border-t border-slate-800/30"
                >
                  <div className="flex items-center justify-center gap-5">
                    {mobileSocials.map((social) => (
                      <a  
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="text-slate-500 hover:text-[#3B82F6] transition-colors p-1"
                      >
                        <social.icon size={17} />
                      </a>
                    ))}
                  </div>
                  <p className="text-center text-[10px] text-slate-700 mt-3 tracking-wide">
                    Learning publicly. Building deliberately.
                  </p>
                </motion.div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-black/50 md:hidden"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  );
}