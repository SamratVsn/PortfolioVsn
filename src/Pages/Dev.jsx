import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "../Components/SEO";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";

export default function Dev() {
  const [focusMode, setFocusMode] = useState(false);
  const [phase, setPhase] = useState(0);
  const [heroHighlighted, setHeroHighlighted] = useState(true);
  const [normalModeRevealed, setNormalModeRevealed] = useState(false);
  const [secretRevealed, setSecretRevealed] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [verseClicked, setVerseClicked] = useState(0);

  const timersRef = useRef([]);
  const canvasRef = useRef(null);
  const secretTimeoutRef = useRef(null);

  // Console easter egg
  useEffect(() => {
    const s = [
      "color: #2DD4BF; font-size: 12px; font-weight: bold;",
      "color: #64748B; font-size: 11px;",
    ];
    console.log("%c  ╔══════════════════════════════════╗", s[0]);
    console.log("%c  ║    ~ you found the hidden path ~   ║", s[1]);
    console.log("%c  ╠══════════════════════════════════╣", s[0]);
    console.log("%c  ║  samrat.sys // dev               ║", s[0]);
    console.log("%c  ║  session: established            ║", s[1]);
    console.log("%c  ╚══════════════════════════════════╝", s[0]);
    console.log("%c  \u{1F9D8} seeker of knowledge, builder of systems", "color: #2DD4BF; font-size: 13px;");
  }, []);

  // Dim hero on load
  useEffect(() => {
    const timer = setTimeout(() => setHeroHighlighted(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Phased reveal in focus mode
  useEffect(() => {
    if (!focusMode) {
      setPhase(0);
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
      return;
    }

    timersRef.current.push(setTimeout(() => setPhase(1), 1200));
    timersRef.current.push(setTimeout(() => setPhase(2), 2400));
    timersRef.current.push(setTimeout(() => setPhase(3), 3600));

    return () => {
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
    };
  }, [focusMode]);

  // Body scroll lock
  useEffect(() => {
    if (focusMode) {
      const timer = setTimeout(() => {
        document.body.style.overflow = "hidden";
      }, 400);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "auto";
      };
    }
  }, [focusMode]);

  // Keyboard easter eggs
  useEffect(() => {
    let buffer = "";
    const handler = (e) => {
      buffer += e.key.toLowerCase();
      if (buffer.length > 15) buffer = buffer.slice(-15);

      if (buffer.includes("samrat")) {
        setSecretRevealed("samrat");
        buffer = "";
      } else if (buffer.includes("42")) {
        setSecretRevealed("42");
        buffer = "";
      } else if (buffer.includes("bow")) {
        setSecretRevealed("bow");
        buffer = "";
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Auto-dismiss secret
  useEffect(() => {
    if (secretRevealed) {
      secretTimeoutRef.current = setTimeout(() => setSecretRevealed(null), 4000);
      return () => clearTimeout(secretTimeoutRef.current);
    }
  }, [secretRevealed]);

  // Mouse tracking in focus mode
  useEffect(() => {
    if (!focusMode) return;
    const handler = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [focusMode]);

  // Matrix rain canvas
  useEffect(() => {
    if (!focusMode) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789";
    const fontSize = 12;
    const columns = Math.ceil(canvas.width / fontSize);
    const drops = Array(columns).fill(1).map(() => Math.random() * -100);

    let animId;
    const draw = () => {
      ctx.fillStyle = "rgba(15, 23, 42, 0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillStyle = `rgba(45, 212, 191, ${0.06 + Math.random() * 0.1})`;
        ctx.font = `${fontSize}px monospace`;
        ctx.fillText(char, x, y);

        if (y > canvas.height && Math.random() > 0.98) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      animId = requestAnimationFrame(draw);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, [focusMode]);

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/samrat-parajuli-54310732b/",
      icon: FaLinkedinIn,
    },
    {
      name: "GitHub",
      url: "https://github.com/SamratVsn",
      icon: Github,
    },
    {
      name: "Portfolio",
      url: "https://www.samratparajuli0.com.np/",
      icon: ExternalLink,
    },
  ];

  const getSecretMessage = () => {
    switch (secretRevealed) {
      case "samrat":
        return { emoji: "\u{1F52E}", text: "SamratVsn was here — keep building, seeker." };
      case "42":
        return { emoji: "\u{1F30C}", text: "The answer to the ultimate question of life, the universe, and everything." };
      case "bow":
        return { emoji: "\u{1F64F}", text: "\u{0928}\u{092E}\u{0938}\u{094D}\u{0924}\u{0947} — the divine in me bows to the divine in you." };
      default:
        return null;
    }
  };

  const secretMsg = getSecretMessage();

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100 font-sans relative overflow-hidden">
      <SEO
        title="Dev | Samrat Parajuli"
        description="A meditative space — not everything needs a route. Some things are found. Explore the philosophy of focused development."
        ogUrl="https://www.samratparajuli0.com.np/dev"
      />

      {/* Dot grid background */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 pointer-events-none ${
          focusMode ? "opacity-0" : ""
        }`}
        style={{
          backgroundImage: "radial-gradient(circle, rgba(45,212,191,0.06) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Gradient orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#2DD4BF]/[0.02] rounded-full blur-3xl pointer-events-none" />

      {/* Matrix rain canvas */}
      {focusMode && (
        <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />
      )}

      {/* Mouse glow */}
      {focusMode && (
        <div
          className="fixed pointer-events-none z-[1] w-[400px] h-[400px] rounded-full bg-[#2DD4BF]/[0.04] blur-3xl transition-all duration-500"
          style={{ left: mousePos.x - 200, top: mousePos.y - 200 }}
        />
      )}

      <div
        className={`max-w-6xl mx-auto px-6 transition-all duration-1000 relative z-10 ${
          focusMode ? "py-0 flex items-center min-h-screen" : "py-24"
        }`}
      >
        <div className="w-full">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`flex items-center gap-2 mb-16 transition-all duration-1000 ${
              focusMode ? "opacity-0 h-0 overflow-hidden mb-0" : "opacity-100"
            }`}
          >
            <div className="h-px w-8 bg-[#2DD4BF]" />
            <span className="font-mono text-xs text-[#2DD4BF] uppercase tracking-widest">
              dev // hidden_path
            </span>
          </motion.div>

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`transition-all duration-1000 ${
              focusMode ? "opacity-0 mb-0 h-0 overflow-hidden" : "opacity-100 mb-32"
            }`}
          >
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 transition-all duration-1000 ${
                heroHighlighted ? "text-slate-100" : "text-slate-700"
              }`}
            >
              Not everything needs a route.
              <br />
              <span className={`transition-all duration-1000 ${
                heroHighlighted ? "text-[#2DD4BF]" : "text-slate-700"
              }`}>
                Some things are found.
              </span>
            </h1>
            <p
              className={`text-base md:text-lg font-mono leading-relaxed max-w-2xl transition-all duration-1000 ${
                heroHighlighted ? "text-slate-400" : "text-slate-800"
              }`}
            >
              You've found the page you were meant to.
            </p>
          </motion.div>

          {/* Verse section */}
          <div className={`transition-all duration-1000 ${focusMode ? "mb-0" : "mb-32"}`}>
            <div
              className={`transition-all duration-1000 overflow-hidden ${
                focusMode ? "opacity-0 mb-0 h-0" : "opacity-100 mb-6"
              }`}
            >
              <div className="flex items-center gap-2 opacity-50">
                <div className="h-px w-6 bg-[#2DD4BF]" />
                <span className="font-mono text-[10px] text-[#2DD4BF] uppercase tracking-widest">
                  verse // gita
                </span>
              </div>
            </div>

            <div
              className={`relative transition-all duration-1000 ${
                focusMode ? "" : ""
              }`}
            >
              {focusMode ? (
                <div className="text-center space-y-10">
                  {/* Phase 0+: Sanskrit */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative text-slate-100 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-relaxed font-light"
                  >
                    <div className="absolute inset-0 bg-[#2DD4BF]/[0.03] blur-[80px] rounded-full pointer-events-none" />
                    <div className="relative">
                      व्यवसायात्मिका बुद्धिरेकेह कुरुनन्दन।
                      <br />
                      बहुशाखा ह्यनन्ताश्च बुद्धयोऽव्यवसायिनाम्॥
                    </div>
                  </motion.div>

                  {/* Phase 1+: English */}
                  <motion.div
                    initial={false}
                    animate={{
                      opacity: phase >= 1 ? 1 : 0,
                      y: phase >= 1 ? 0 : 8,
                    }}
                    transition={{ duration: 0.7 }}
                  >
                    <p className="text-slate-500 text-base md:text-lg font-mono">
                      <span className="text-slate-600">// </span>
                      one-pointed focus vs endless branches
                    </p>
                  </motion.div>

                  {/* Phase 2+: Meta */}
                  <motion.div
                    initial={false}
                    animate={{
                      opacity: phase >= 2 ? 1 : 0,
                      y: phase >= 2 ? 0 : 8,
                    }}
                    transition={{ duration: 0.7 }}
                  >
                    <p className="text-slate-600 text-sm md:text-base font-mono">
                      build(mode=
                      <span className="text-[#2DD4BF]">"resolute"</span>)
                    </p>
                  </motion.div>

                  {/* Phase 3+: Blinking cursor */}
                  <motion.div
                    initial={false}
                    animate={{ opacity: phase >= 3 ? 1 : 0 }}
                    transition={{ duration: 0.7 }}
                    className="flex items-center justify-center gap-2"
                  >
                    <span className="w-2 h-5 bg-[#2DD4BF] rounded-sm animate-pulse shadow-[0_0_8px_rgba(45,212,191,0.5)]" />
                    <span className="text-slate-700 text-[10px] font-mono uppercase tracking-[0.3em]">
                      session_active
                    </span>
                  </motion.div>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div
                    className="group relative bg-[#0F172A]/40 border border-slate-800/60 rounded-lg p-8 md:p-10 overflow-hidden hover:border-slate-700 transition-all duration-300 cursor-default"
                    onMouseEnter={() => setNormalModeRevealed(true)}
                    onMouseLeave={() => setNormalModeRevealed(false)}
                    onClick={() => {
                      setNormalModeRevealed(!normalModeRevealed);
                      setVerseClicked((c) => c + 1);
                      if (verseClicked >= 4) {
                        setSecretRevealed("bow");
                        setVerseClicked(0);
                      }
                    }}
                  >
                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2DD4BF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Top accent line */}
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2DD4BF]/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 pointer-events-none" />

                    <div className="relative z-10">
                      {/* Verse header */}
                      <div className="flex items-center justify-between mb-6">
                        <span className="font-mono text-xs text-[#2DD4BF] opacity-70 bg-[#2DD4BF]/10 px-2 py-1 rounded">
                          01 // भगवद गीता
                        </span>
                        <span className="text-slate-600 group-hover:text-[#2DD4BF] transition-colors">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                      </div>

                      <div className="relative min-h-[120px]">
                        {/* Sanskrit verse */}
                        <div
                          className={`transition-all duration-500 ${
                            normalModeRevealed ? "opacity-0 scale-95" : "opacity-100 scale-100"
                          }`}
                        >
                          <p className="text-slate-100 text-xl sm:text-2xl md:text-3xl text-center leading-relaxed font-light">
                            व्यवसायात्मिका बुद्धिरेकेह कुरुनन्दन।
                            <br />
                            बहुशाखा ह्यनन्ताश्च बुद्धयोऽव्यवसायिनाम्॥
                          </p>
                        </div>

                        {/* English translation */}
                        <div
                          className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                            normalModeRevealed ? "opacity-100 scale-100" : "opacity-0 scale-95"
                          }`}
                        >
                          <p className="text-slate-300 text-center text-lg md:text-xl leading-relaxed font-light max-w-3xl">
                            Those who are resolute and focused have one-pointed intellect,
                            <br />
                            while the indecisive have scattered, endless thoughts.
                          </p>
                        </div>
                      </div>

                      {/* Hover hint */}
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-slate-700 text-[10px] font-mono tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        hover / tap to reveal
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Trigger button */}
          <div
            onClick={() => setFocusMode(true)}
            className={`text-center transition-all duration-1000 ${
              focusMode
                ? "opacity-0 mb-0 h-0 overflow-hidden pointer-events-none"
                : "opacity-100 mb-32"
            }`}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <button className="group inline-flex items-center gap-3 px-8 py-4 border border-slate-700/50 rounded-lg font-mono text-xs uppercase tracking-widest text-slate-400 hover:text-[#2DD4BF] hover:border-[#2DD4BF]/30 transition-all duration-300 cursor-pointer">
                --Start Building--
                <ArrowUpRight
                  size={14}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                />
              </button>
            </motion.div>
          </div>

          {/* Social links */}
          <div
            className={`transition-all duration-1000 ${
              focusMode ? "opacity-0 mb-0 h-0 overflow-hidden" : "opacity-100 mb-32"
            }`}
          >
            <div className="flex items-center gap-2 mb-8 opacity-50">
              <div className="h-px w-6 bg-[#2DD4BF]" />
              <span className="font-mono text-[10px] text-[#2DD4BF] uppercase tracking-widest">
                paths
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-800/50 border border-slate-800 overflow-hidden rounded-2xl">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-[#0F172A] p-8 transition-all duration-500 flex items-center justify-between hover:bg-[#0F172A]/60"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4 text-slate-600 group-hover:text-[#2DD4BF] transition-colors duration-300" />
                      <span className="text-slate-500 group-hover:text-slate-100 transition-colors duration-300 font-mono text-sm">
                        {link.name}
                      </span>
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="text-slate-700 group-hover:text-[#2DD4BF] transition-colors duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer */}
          <div
            className={`border-t border-slate-800 pt-12 transition-all duration-1000 ${
              focusMode ? "opacity-0 h-0 overflow-hidden" : "opacity-100"
            }`}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="text-slate-600 text-xs font-mono">
                <span className="text-slate-500">exit</span> 200
              </div>
              <div className="text-slate-600 text-xs font-mono">
                May your path be resolute.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Exit overlay */}
      {focusMode && (
        <div
          onClick={() => setFocusMode(false)}
          className="fixed inset-0 z-30 cursor-pointer"
        >
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none flex flex-col items-center gap-2">
            <div className="w-px h-8 bg-gradient-to-b from-[#2DD4BF]/30 to-transparent" />
            <div className="text-slate-700 text-[10px] font-mono animate-pulse uppercase tracking-[0.2em]">
              click to resume
            </div>
          </div>
        </div>
      )}

      {/* Secret toast */}
      <AnimatePresence>
        {secretRevealed && secretMsg && (
          <motion.div
            key={secretRevealed}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
          >
            <div className="bg-[#0F172A]/90 border border-slate-700/50 backdrop-blur-md px-6 py-4 rounded-lg shadow-xl">
              <div className="flex items-center gap-3">
                <span className="text-xl">{secretMsg.emoji}</span>
                <p className="text-slate-300 text-sm font-mono">{secretMsg.text}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
