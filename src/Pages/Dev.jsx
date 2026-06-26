import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "../Components/SEO";
import { ArrowUpRight, X, ArrowLeft } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { BookOpen } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/SamratVsn",
    icon: FaGithub,
    desc: "Code & projects",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/samratvsn/",
    icon: FaLinkedin,
    desc: "Connect professionally",
  },
  {
    name: "Writing",
    url: "https://medium.com/@samratvsn",
    icon: BookOpen,
    desc: "Notes & essays",
  },
];

export default function Dev() {
  const [focusMode, setFocusMode] = useState(false);

  // Scroll lock
  useEffect(() => {
    document.body.style.overflow = focusMode ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [focusMode]);

  // Escape exits focus
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape" && focusMode) setFocusMode(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [focusMode]);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-400 relative overflow-hidden selection:bg-[#3B82F6]/20 selection:text-[#3B82F6]">
      <SEO
        title="Dev | Samrat Parajuli"
        description="A verse I return to often. Enter focus mode."
        ogUrl="https://www.samratparajuli0.com.np/dev"
      />

      {/* Ambient orb */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(59,130,246,0.055) 0%, transparent 70%)",
        }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(59,130,246,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* ── FOCUS MODE OVERLAY ── */}
      <AnimatePresence>
        {focusMode && (
          <motion.div
            key="focus-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center px-6"
            style={{ background: "rgba(2, 6, 23, 0.98)" }}
          >
            {/* Soft vignette edges */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 40%, rgba(2,6,23,0.6) 100%)",
              }}
            />

            {/* Central ambient glow — breathes with the text */}
            <motion.div
              className="absolute pointer-events-none"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "700px",
                height: "500px",
                background:
                  "radial-gradient(ellipse at center, rgba(59,130,246,0.06) 0%, transparent 65%)",
              }}
            />

            {/* Exit button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              onClick={() => setFocusMode(false)}
              aria-label="Exit focus mode"
              className="absolute top-7 right-7 flex items-center gap-2 text-slate-700 hover:text-slate-300 transition-colors duration-300 text-xs tracking-widest uppercase group"
            >
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[10px]">
                Exit
              </span>
              <X size={15} />
            </motion.button>

            {/* Verse content — enters as one composed unit */}
            <motion.div
              className="relative max-w-2xl w-full text-center"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* Sanskrit verse */}
              <p className="text-slate-100 text-2xl sm:text-3xl md:text-[2.15rem] leading-[1.75] font-light tracking-wide mb-10">
                व्यवसायात्मिका बुद्धिरेकेह कुरुनन्दन।
                <br />
                बहुशाखा ह्यनन्ताश्च बुद्धयोऽव्यवसायिनाम्॥
              </p>

              {/* Divider */}
              <div
                className="w-10 h-px mx-auto mb-10"
                style={{ background: "rgba(59,130,246,0.25)" }}
              />

              {/* Translation */}
              <div className="space-y-3 mb-12">
                <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-light">
                  Those who are resolute and focused have one-pointed intellect,
                  <br className="hidden sm:block" />
                  while the indecisive have scattered, endless thoughts.
                </p>
                <p
                  className="text-xs tracking-[0.14em] uppercase"
                  style={{ color: "rgba(59,130,246,0.4)" }}
                >
                  Bhagavad Gita · 2.41
                </p>
              </div>

              {/* Closing line */}
              <p
                className="text-sm italic"
                style={{ color: "rgba(148,163,184,0.28)" }}
              >
                Deep work begins with undivided attention.
              </p>
            </motion.div>

            {/* Esc hint */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.25 }}
              transition={{ delay: 2, duration: 1 }}
              className="absolute bottom-8 text-[10px] text-slate-700 tracking-[0.2em] uppercase"
            >
              Esc to exit
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── NORMAL PAGE ── */}
      <div className="relative z-10 max-w-xl mx-auto px-6 pt-20 pb-28">

        {/* Top nav row: back home + page label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-16"
        >
          {/* Back to home */}
          <a
            href="/"
            className="group flex items-center gap-2 text-slate-600 hover:text-slate-300 transition-colors duration-250"
          >
            <ArrowLeft
              size={13}
              className="group-hover:-translate-x-0.5 transition-transform duration-200"
              style={{ color: "rgba(59,130,246,0.55)" }}
            />
            <span className="text-[11px] tracking-[0.12em] uppercase">Home</span>
          </a>

          {/* Page label */}
          <div className="flex items-center gap-3">
            <span
              className="block w-5 h-px"
              style={{ background: "#3B82F6", opacity: 0.4 }}
            />
            <span className="text-[10px] text-slate-600 uppercase tracking-[0.15em]">
              dev
            </span>
          </div>
        </motion.div>

        {/* Verse card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mb-10 relative group"
        >
          {/* Card top-edge glow — sharpens on hover */}
          <div
            className="absolute -inset-px rounded-2xl pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background:
                "radial-gradient(ellipse at 50% -10%, rgba(59,130,246,0.11) 0%, transparent 55%)",
            }}
          />

          <div
            className="relative rounded-2xl p-7 sm:p-10"
            style={{
              background: "rgba(8, 13, 28, 0.75)",
              border: "0.5px solid rgba(59,130,246,0.11)",
              backdropFilter: "blur(10px)",
            }}
          >
            {/* Eyebrow */}
            <p
              className="text-[10px] uppercase tracking-[0.15em] mb-8"
              style={{ color: "rgba(59,130,246,0.5)" }}
            >
              A verse I return to often
            </p>

            {/* Sanskrit */}
            <p className="text-slate-100 text-xl sm:text-2xl leading-[1.8] font-light mb-8 tracking-wide">
              व्यवसायात्मिका बुद्धिरेकेह कुरुनन्दन।
              <br />
              बहुशाखा ह्यनन्ताश्च बुद्धयोऽव्यवसायिनाम्॥
            </p>

            {/* Divider */}
            <div
              className="w-8 h-px mb-7"
              style={{ background: "rgba(59,130,246,0.18)" }}
            />

            {/* Translation */}
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-5">
              Those who are resolute and focused have one-pointed intellect,
              while the indecisive have scattered, endless thoughts.
            </p>

            {/* Source + Focus button — same line */}
            <div className="flex items-center justify-between">
              <p
                className="text-[11px] tracking-[0.1em]"
                style={{ color: "rgba(59,130,246,0.4)" }}
              >
                Bhagavad Gita · 2.41
              </p>

              <button
                onClick={() => setFocusMode(true)}
                className="group/focus flex items-center gap-2 text-slate-600 hover:text-slate-200 transition-all duration-300"
              >
                <span className="text-[11px] tracking-[0.1em] uppercase">Focus</span>
                <ArrowUpRight
                  size={11}
                  className="opacity-50 group-hover/focus:opacity-100 group-hover/focus:translate-x-0.5 group-hover/focus:-translate-y-0.5 transition-all duration-200"
                  style={{ color: "#3B82F6" }}
                />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Divider between card and links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mb-10"
          style={{
            height: "1px",
            background:
              "linear-gradient(to right, transparent, rgba(59,130,246,0.1) 40%, rgba(59,130,246,0.1) 60%, transparent)",
          }}
        />

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <p
            className="text-[10px] uppercase tracking-[0.14em] mb-5"
            style={{ color: "rgba(148,163,184,0.25)" }}
          >
            Find me
          </p>

          <div className="space-y-0">
            {socialLinks.map((link, i) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.35 + i * 0.07 }}
                  className="group flex items-center justify-between py-4 border-b transition-colors duration-200"
                  style={{ borderColor: "rgba(148,163,184,0.07)" }}
                >
                  <div className="flex items-center gap-3.5">
                    <Icon
                      size={14}
                      style={{ color: "rgba(148,163,184,0.3)" }}
                      className="group-hover:text-slate-400 transition-colors duration-200"
                    />
                    <span
                      className="text-sm transition-colors duration-200 group-hover:text-slate-100"
                      style={{ color: "rgba(148,163,184,0.55)" }}
                    >
                      {link.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span
                      className="text-xs transition-colors duration-200 group-hover:text-slate-500"
                      style={{ color: "rgba(148,163,184,0.2)" }}
                    >
                      {link.desc}
                    </span>
                    <ArrowUpRight
                      size={11}
                      className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                      style={{ color: "#3B82F6" }}
                    />
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Sign-off */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="space-y-1.5"
        >
          <p
            className="text-sm italic leading-relaxed"
            style={{ color: "rgba(148,163,184,0.3)" }}
          >
            Discipline compounds.
          </p>
          <p
            className="text-xs tracking-wide"
            style={{ color: "rgba(148,163,184,0.16)" }}
          >
            — Samrat
          </p>
        </motion.div>
      </div>
    </div>
  );
}