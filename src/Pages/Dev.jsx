import React, { useState, useEffect, useRef } from "react";

export default function Dev() {
  const [focusMode, setFocusMode] = useState(false);
  const [phase, setPhase] = useState(0);
  const [heroHighlighted, setHeroHighlighted] = useState(true);
  const timersRef = useRef([]);
  const [normalModeRevealed, setNormalModeRevealed] = useState(false);

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

    // Phase 1 → 2 → 3
    timersRef.current.push(setTimeout(() => setPhase(1), 1200));
    timersRef.current.push(setTimeout(() => setPhase(2), 2400));

    // Console output (once)
    const logs = [
      "व्यवसायात्मिका बुद्धिरेकेह कुरुनन्दन।",
      "बहुशाखा ह्यनन्ताश्च बुद्धयोऽव्यवसायिनाम्॥",
      "",
      "// one-pointed vs scattered",
      "",
      "session: 200 OK",
    ];
    logs.forEach((line, i) => {
      timersRef.current.push(setTimeout(() => console.log(line), i * 350));
    });

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

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/samrat-parajuli-54310732b/",
    },
    { name: "GitHub", url: "https://github.com/SamratVsn" },
    { name: "Portfolio", url: "https://www.samratparajuli0.com.np/" },
  ];

  return (
    <div className="min-h-screen bg-black text-zinc-400 relative overflow-hidden">
      {/* Grid */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${focusMode ? "opacity-0" : "opacity-[0.015]"}`}
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div
        className={`max-w-4xl mx-auto px-8 transition-all duration-1000 relative z-10 ${
          focusMode ? "py-0 flex items-center min-h-screen" : "py-24"
        }`}
      >
        <div className="w-full">
          {/* Hero */}
          <div
            className={`transition-all duration-1000 ${
              focusMode
                ? "opacity-0 mb-0 h-0 overflow-hidden"
                : "opacity-100 mb-32"
            }`}
          >
            <h1
              className={`text-5xl md:text-6xl font-light mb-6 leading-tight tracking-tight transition-all duration-1000 ${
                heroHighlighted ? "text-white" : "text-zinc-700"
              }`}
            >
              Not everything needs a route. Some things are found.
            </h1>
            <p
              className={`text-2xl font-light transition-all duration-1000 ${
                heroHighlighted ? "text-zinc-400" : "text-zinc-800"
              }`}
            >
              You've found the page you were meant to.
            </p>
          </div>

          {/* Sloka section */}
          <div
            className={`transition-all duration-1000 ${focusMode ? "mb-0" : "mb-32"}`}
          >
            <div
              className={`transition-all duration-1000 overflow-hidden ${
                focusMode ? "opacity-0 mb-0 h-0" : "opacity-100 mb-4"
              }`}
            >
              <span className="text-zinc-600 text-sm font-mono">
                // Beginning the meditation of code
              </span>
            </div>

            <div
              className={`relative transition-all duration-1000 ${
                focusMode ? "py-0 px-0" : "py-12 px-8"
              }`}
            >
              {focusMode ? (
                // Focus mode: phased reveal
                <div className="text-center space-y-8">
                  {/* Phase 0+: Sanskrit */}
                  <div className="text-white text-4xl md:text-5xl leading-relaxed font-light">
                    व्यवसायात्मिका बुद्धिरेकेह कुरुनन्दन।
                    <br />
                    बहुशाखा ह्यनन्ताश्च बुद्धयोऽव्यवसायिनाम्॥
                  </div>

                  {/* Phase 1+: English paraphrase */}
                  <div
                    className={`text-zinc-500 text-base md:text-lg font-light transition-opacity duration-700 ${
                      phase >= 1 ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <span className="text-zinc-600">// </span>one-pointed focus
                    vs endless branches
                  </div>

                  {/* Phase 2+: Meta line */}
                  <div
                    className={`text-zinc-700 text-sm md:text-base font-mono transition-opacity duration-700 ${
                      phase >= 2 ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    build(mode=<span className="text-zinc-600">"resolute"</span>
                    )
                  </div>
                </div>
              ) : (
                // Normal mode: just Sanskrit
                <div
                  className="relative py-12 px-8 cursor-default"
                  onMouseEnter={() => setNormalModeRevealed(true)}
                  onMouseLeave={() => setNormalModeRevealed(false)}
                  onClick={() => setNormalModeRevealed(!normalModeRevealed)}
                >
                  <div
                    className={`text-white text-3xl md:text-4xl text-center leading-relaxed font-light transition-opacity duration-500 ${
                      normalModeRevealed ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    व्यवसायात्मिका बुद्धिरेकेह कुरुनन्दन।
                    <br />
                    बहुशाखा ह्यनन्ताश्च बुद्धयोऽव्यवसायिनाम्॥
                  </div>

                  <div
                    className={`absolute inset-0 flex items-center justify-center px-8 transition-opacity duration-500 ${
                      normalModeRevealed ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <p className="text-zinc-300 text-center text-xl md:text-2xl leading-relaxed font-light max-w-3xl">
                      Those who are resolute and focused have one-pointed
                      intellect,
                      <br />
                      while the indecisive have scattered, endless thoughts.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Trigger */}
          <div
            onClick={() => setFocusMode(true)}
            className={`text-center cursor-pointer group transition-all duration-1000 ${
              focusMode
                ? "opacity-0 mb-0 h-0 overflow-hidden pointer-events-none"
                : "opacity-100 mb-32"
            }`}
          >
            <p className="text-zinc-600 group-hover:text-zinc-400 transition-colors duration-300 text-sm font-mono tracking-wide">
              --Start Building--
            </p>
          </div>

          {/* Social links */}
          <div
            className={`transition-all duration-1000 ${
              focusMode
                ? "opacity-0 mb-0 h-0 overflow-hidden"
                : "opacity-100 mb-32"
            }`}
          >
            <div className="border-t border-zinc-900 pt-12">
              <p className="text-zinc-700 mb-8 text-xs font-light tracking-widest uppercase">
                Paths
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative py-6 px-8 border border-zinc-900 hover:border-zinc-700 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-500 group-hover:text-white transition-colors duration-300 font-light text-sm">
                        {link.name}
                      </span>
                      <svg
                        className="w-4 h-4 text-zinc-700 group-hover:text-zinc-400 transition-colors duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div
            className={`border-t border-zinc-900 pt-12 transition-all duration-1000 ${
              focusMode ? "opacity-0 h-0 overflow-hidden" : "opacity-100"
            }`}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="text-zinc-700 text-xs font-mono">
                <span className="text-zinc-600">exit</span> 200
              </div>
              <div className="text-zinc-700 text-xs font-light">
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
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none">
            <div className="text-zinc-800 text-xs font-mono animate-pulse">
              click to resume
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
