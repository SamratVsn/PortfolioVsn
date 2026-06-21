import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { ArrowUp, BookOpen } from "lucide-react";

const focusItems = [
  "Jetpack Compose",
  "Android Architecture",
  "Testing",
  "Open Source",
  "Learning in Public",
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Notes", path: "/notes" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const socials = [
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
  { icon: FaXTwitter, href: "https://x.com/SamratVsn", label: "X" },
  { icon: MdEmail, href: "mailto:samratvsn@gmail.com", label: "Email" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-[#020617] border-t border-slate-800/40 overflow-hidden">

      {/* subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: [
            "linear-gradient(rgba(45,212,191,0.5) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(45,212,191,0.5) 1px, transparent 1px)",
          ].join(", "),
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* ── GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pt-10 pb-10">

          {/* COL 1 — BRAND */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="relative w-2.5 h-2.5 shrink-0">
                <span className="absolute inset-0 rounded-full border border-[#2DD4BF]/25" />
                <span className="absolute inset-[2px] rounded-full bg-[#2DD4BF]" />
              </div>
              <div>
                <span className="block text-[14px] font-bold tracking-tight text-white leading-none">
                  Samrat
                </span>
                <span className="block text-[8.5px] text-[#2DD4BF] font-semibold tracking-[0.12em] uppercase mt-0.5">
                  Android Developer
                </span>
              </div>
            </div>
            <p className="text-[11.5px] text-slate-500 leading-relaxed max-w-[190px]">
              Building native Android experiences with clean architecture & modern Kotlin.
            </p>
            <div className="inline-flex items-center gap-1.5 bg-[#2DD4BF]/[0.07] border border-[#2DD4BF]/20 rounded-full px-2.5 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]" />
              <span className="text-[10px] text-[#2DD4BF] font-semibold tracking-wide">
                Open to work
              </span>
            </div>
          </div>

          {/* COL 2 — NAVIGATION */}
          <div>
            <p className="text-[10px] font-bold text-slate-600 tracking-[0.1em] uppercase mb-4">
              Navigation
            </p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-500 hover:text-white transition-colors text-[12.5px] inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-800 group-hover:bg-[#2DD4BF] transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 3 — CURRENT FOCUS */}
          <div>
            <p className="text-[10px] font-bold text-slate-600 tracking-[0.1em] uppercase mb-4">
              Current focus
            </p>
            <ul className="space-y-2.5">
              {focusItems.map((item) => (
                <li
                  key={item}
                  className="text-slate-500 text-[12.5px] flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-[#2DD4BF]/40 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* COL 4 — CONNECT */}
          <div>
            <p className="text-[10px] font-bold text-slate-600 tracking-[0.1em] uppercase mb-4">
              Connect
            </p>
            <div className="grid grid-cols-3 gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group relative flex items-center justify-center w-10 h-10 rounded-xl border border-slate-800/50 bg-[#0A0F1E] text-slate-500 hover:text-[#2DD4BF] hover:border-[#2DD4BF]/20 transition-all duration-200"
                >
                  <social.icon size={16} />
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] text-white bg-slate-800 px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 py-5 border-t border-slate-800/30">
          <p className="text-[11px] text-slate-600">
            &copy; {currentYear} Samrat Parajuli &mdash; Built with curiosity, driven by discipline.
          </p>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {["Kotlin", "Jetpack Compose", "Continuous Learning"].map((tag) => (
              <span
                key={tag}
                className="text-[10px] text-slate-600 bg-slate-900/60 border border-slate-800/50 rounded-md px-2 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── BACK TO TOP ── */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-40 flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#0A0F1E] border border-slate-800/60 text-slate-500 hover:text-[#2DD4BF] hover:border-[#2DD4BF]/20 transition-all text-[10px] font-medium"
          >
            <ArrowUp size={12} />
            Top
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}