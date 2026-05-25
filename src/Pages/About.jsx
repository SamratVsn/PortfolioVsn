import Header from "../Components/Header";
import SEO from "../Components/SEO";
import { motion } from "framer-motion";
import PortfolioImage from "../assets/PortfolioImage.jpg";
import BrandLogo from '../assets/Brand-Logo.png';
import { Terminal, Code2, PenTool, GitBranch, Cpu, Layers, Radio } from "lucide-react";
import Footer from "../Components/Footer";

function About() {
  const skillsMatrix = [
    { name: "Kotlin Core", status: "STABLE", category: "Android Runtime Layer", runtime: "JVM / Native" },
    { name: "Jetpack Compose", status: "INITIALIZING", category: "Android Runtime Layer", runtime: "Compose Runtime" },
    { name: "Android Studio IDE", status: "OPTIMIZED", category: "IDE Pipeline Config", runtime: "Studio Build Chain" },
    { name: "Material Design 3", status: "INITIALIZING", category: "Declarative UI Engine", runtime: "Design Token System" },
    { name: "C Programming", status: "STABLE", category: "Systems Programming Interface", runtime: "POSIX Abstraction Layer" },
    { name: "Data Structures & Algos", status: "INITIALIZING", category: "Algorithmic Infrastructure", runtime: "Computational Complexity" },
    { name: "Git / Version Control", status: "STABLE", category: "Pipeline Orchestration", runtime: "Distributed VCS" },
    { name: "Debugging & Profiling", status: "STABLE", category: "Pipeline Orchestration", runtime: "Performance Profiler" },
    { name: "Android Lifecycle Architecture", status: "INITIALIZING", category: "Android Runtime Layer", runtime: "Lifecycle Observer" },
    { name: "HTML5 & CSS3 Architecture", status: "OPTIMIZED", category: "Browser Render Target", runtime: "CSSOM / Render Pipeline" },
    { name: "JavaScript / ES6+", status: "STABLE", category: "Browser Render Target", runtime: "JIT Compilation Target" },
    { name: "Figma Prototyping", status: "OPTIMIZED", category: "UX Compilation Suite", runtime: "Vector Design System" },
  ];

  const statusStyleMap = {
    INITIALIZING: { text: "text-amber-400 bg-amber-500/5 border-amber-500/20", dot: "bg-amber-400" },
    STABLE: { text: "text-[#2DD4BF] bg-[#2DD4BF]/5 border-[#2DD4BF]/10", dot: "bg-[#2DD4BF]" },
    OPTIMIZED: { text: "text-emerald-400 bg-emerald-500/5 border-emerald-500/20", dot: "bg-emerald-400" },
  };

  const toolchainDrivers = [
    { icon: Terminal, name: "Android Studio", detail: "Primary Android compilation IDE with Gradle build orchestration" },
    { icon: Code2, name: "VS Code Core", detail: "Multi-runtime editor for scripting & web targets" },
    { icon: GitBranch, name: "Git Control Engine", detail: "Branch isolation, merge conflict resolution & commit history" },
    { icon: PenTool, name: "Figma Workspace", detail: "UX wireframing, design token extraction & interaction mapping" },
    { icon: Cpu, name: "Unity Engine", detail: "Cross-platform runtime compilation & asset pipeline" },
  ];

  const operationalLog = [
    { target: "AUG 2024", phase: "COMPILED", event: "Initialized C Environments", descriptiveLog: "Parsed native paradigms, basic pointer spaces, binary structures, and custom stream operations." },
    { target: "JUN 2025", phase: "COMPILED", event: "Assembled Web Frameworks", descriptiveLog: "Assembled reactive platform trees; engineered BlogVsn aggregator using OAuth secure protocols." },
    { target: "OCT 2025", phase: "COMPILED", event: "Adopted Kotlin Runtime", descriptiveLog: "Integrated strict object patterns, memory configurations, and low-level terminal interfaces." },
    { target: "NOV 2025", phase: "COMPILED", event: "Configured Mobile Platforms", descriptiveLog: "Worked with Android Studio; structured baseline declarative interface layers using Jetpack Compose components." },
    { target: "MAY 2026", phase: "ACTIVE", event: "Android Lifecycle Optimization", descriptiveLog: "Deep diving into runtime thread telemetry, Activity recreation states, and non-volatile cache structures." },
  ];

  const operationalProcesses = [
    {
      id: "01",
      coreDomain: "Android Platform Architecture",
      condition: "STAGED_RUNNING",
      tint: "#2DD4BF",
      logDetail: "Deepening knowledge of declarative UI rendering pipelines via Jetpack Compose. Currently optimizing structural state mutations and analyzing Activity lifecycles to handle process death gracefully.",
      frameworks: ["Kotlin Native", "Jetpack Compose", "Lifecycle Architecture"],
    },
    {
      id: "02",
      coreDomain: "Computer Science Infrastructure",
      condition: "MAINTAINING",
      tint: "#6366F1",
      logDetail: "Solidifying core algorithmic systems, safe memory tracking paradigms, and data structure complexity targets to keep software execution completely overhead-free.",
      frameworks: ["Algorithms Analysis", "Memory Assertions", "Deterministic Logic"],
    },
    {
      id: "03",
      coreDomain: "Distributed Source Systems",
      condition: "PIPELINE_ACTIVE",
      tint: "#F59E0B",
      logDetail: "Maintaining modular open-source repositories. Shipping structural revisions and isolated testing setups through automated local environments.",
      frameworks: ["Git Shell Workflow", "Repository Branching", "Modular Deployments"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-[#2DD4BF]/20 selection:text-[#2DD4BF]">
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
        <img src={BrandLogo} alt="" className="w-[500px] h-[500px] object-contain" />
      </div>
      <SEO
        title="About | Samrat Parajuli - Systems & Mobile Engineer"
        description="Profile specifications for Samrat Parajuli: Student systems engineer specializing in native Android runtimes, reactive software flows, and clean decoupled architectures."
        ogUrl="https://www.samratparajuli0.com.np/about"
      />
      <Header />

      <main className="max-w-6xl mx-auto px-6 pt-24 lg:pt-32 pb-20">
        
        {/* OPERATOR DATA LAYER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* HARDWARE OVERLAY SIDEBAR */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <div className="relative group">
              <div className="absolute -inset-px bg-gradient-to-b from-[#2DD4BF]/20 to-transparent rounded-lg opacity-40" />
              <img
                src={PortfolioImage}
                alt="Samrat Parajuli Hardware Profile"
                className="relative rounded-lg border border-slate-900 object-cover w-full aspect-square grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              />
              <div className="mt-4 font-mono text-[10px] tracking-[0.25em] text-slate-600 uppercase flex justify-between items-center px-1">
                <span>// NODE_LOC_NEPAL</span>
                <span>27.7172° N, 85.3240° E</span>
              </div>
            </div>
          </motion.div>

          {/* SYSTEM BIOGRAPHY */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-8 space-y-6"
          >
            <div>
              <h2 className="text-white text-3xl font-mono font-bold tracking-tight mb-1">
                OPERATOR_SPECIFICATION<span className="text-[#2DD4BF]">_</span>
              </h2>
              <p className="text-[#2DD4BF] font-mono text-xs uppercase tracking-[0.3em]">
                Mobile App Development & Programming
              </p>
            </div>

            <div className="space-y-4 text-slate-400 font-sans text-sm leading-relaxed">
              <p>
                I am <span className="text-slate-100 font-semibold">Samrat Parajuli</span>, a mobile software developer based in Nepal. I focus my development routines around structural code mechanics, native component lifecycles, and performance profiles governing target mobile systems.
              </p>

              <p>
                My active runtime processing is centered heavily around building native Android frameworks using <span className="text-white font-mono text-xs border border-slate-900 bg-slate-950 px-1.5 py-0.5 rounded">Kotlin</span> and <span className="text-white font-mono text-xs border border-slate-900 bg-slate-950 px-1.5 py-0.5 rounded">Jetpack Compose UI</span>. I approach app architecture as a rigorous craft, focusing on decoupling application logic, optimizing activity execution chains, and keeping memory configurations tight and responsive.
              </p>

              <div className="text-[11px] font-mono border-l border-[#2DD4BF]/30 bg-[#2DD4BF]/[0.02] p-4 text-slate-400 leading-relaxed rounded-r border-y border-r border-slate-900">
                <span className="text-[#2DD4BF] font-bold block mb-1">{"// PRINCIPLE_STATEMENT"}</span>
                "Software development functions best when isolated down to pure intentionality. The objective is to deploy applications that operate with minimal complexity, highly transparent data architectures, and prolonged structural lifecycle stability."
              </div>

              {/* LIVE CONSOLE PARAMETERS */}
              <div className="p-4 bg-slate-950/60 border border-slate-900 rounded font-mono text-[11px]">
                <div className="text-slate-600 text-[9px] uppercase tracking-[0.2em] mb-3 flex items-center gap-2 border-b border-slate-900 pb-2">
                  <Terminal size={10} className="text-[#2DD4BF]" /> Core_Environment_Variables
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                  {[
                    { key: "COMPILER_TYPE", value: "Mobile Systems Engineer", color: "text-slate-300" },
                    { key: "FOCUS_TARGET", value: "Mobile Stack / System Design", color: "text-[#2DD4BF]" },
                    { key: "HOST_LOCALE", value: "Kathmandu, NP Workspace", color: "text-slate-300" },
                    { key: "LINK_AVAIL", value: "Open For Distributed Collab", color: "text-emerald-400" },
                  ].map((row) => (
                    <div key={row.key} className="flex justify-between items-center border-b border-slate-900 pb-1">
                      <span className="text-slate-600 tracking-tighter text-[10px]">{row.key}</span>
                      <span className={`${row.color} font-bold`}>{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RE-ENGINEERED CAPABILITY MATRIX */}
        <section className="mt-28">
          <div className="flex justify-between items-end mb-8 border-b border-slate-900 pb-3">
            <h3 className="text-slate-200 text-lg font-mono tracking-tight font-bold">
              Subsystem_Capability_Matrix<span className="text-[#2DD4BF]">_</span>
            </h3>
            <span className="text-slate-600 font-mono text-[10px] tracking-widest uppercase">// compiled_assets_v2</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-900 border border-slate-900 rounded overflow-hidden">
            {skillsMatrix.map((skill, index) => {
              const statusTheme = statusStyleMap[skill.status];
              return (
                <div
                  key={index}
                  className="bg-[#020617] p-5 relative group hover:bg-slate-950/40 transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[9px] font-mono px-2 py-0.5 border border-slate-900 rounded text-slate-500 uppercase font-bold tracking-tight">
                      {skill.category}
                    </span>
                    <span className="text-[9px] font-mono text-slate-700 font-bold">
                      0x{index.toString(16).toUpperCase().padStart(2, "0")}
                    </span>
                  </div>

                  <h4 className="text-slate-200 font-mono text-xs font-bold tracking-tight mb-3 group-hover:text-[#2DD4BF] transition-colors">
                    {skill.name}
                  </h4>

                  <div className="flex justify-between items-center pt-2 border-t border-slate-900/60 font-mono text-[9px]">
                    <span className="text-slate-600 uppercase tracking-tighter">RUNTIME: {skill.runtime}</span>
                    <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 border rounded uppercase tracking-widest font-bold ${statusTheme.text}`}>
                      <span className={`w-1 h-1 rounded-full ${statusTheme.dot}`} />
                      {skill.status}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* OPERATIONAL HARDWARE LOG */}
        <section className="mt-24">
          <div className="flex justify-between items-end mb-8 border-b border-slate-900 pb-3">
            <h3 className="text-slate-200 text-lg font-mono tracking-tight font-bold">
              Hardware_Toolchain_Drivers<span className="text-[#2DD4BF]">_</span>
            </h3>
            <span className="text-slate-600 font-mono text-[10px] tracking-widest uppercase">// core_utilities</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {toolchainDrivers.map((item, i) => (
              <div
                key={i}
                className="group p-4 bg-slate-950/20 border border-slate-900 rounded hover:border-slate-800 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="p-2 border border-slate-900 bg-slate-950 rounded text-slate-500 group-hover:text-[#2DD4BF] group-hover:border-[#2DD4BF]/20 w-fit mb-3 transition-colors">
                    <item.icon size={14} />
                  </div>
                  <h4 className="text-slate-200 font-mono text-xs font-bold tracking-tight mb-1">{item.name}</h4>
                </div>
                <p className="text-[10px] font-mono text-slate-600 leading-snug pt-2 border-t border-slate-900/40 group-hover:text-slate-500 transition-colors">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* RUNTIME TARGET CONTROLLERS */}
        <section className="mt-24">
          <div className="flex justify-between items-end mb-8 border-b border-slate-900 pb-3">
            <h3 className="text-slate-200 text-lg font-mono tracking-tight font-bold">
              Active_Runtime_Processes<span className="text-[#2DD4BF]">_</span>
            </h3>
            <span className="text-slate-600 font-mono text-[10px] tracking-widest uppercase">// thread_allocation</span>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {operationalProcesses.map((item) => (
              <div
                key={item.id}
                className="relative bg-slate-950/20 border border-slate-900 rounded overflow-hidden hover:border-slate-800 transition-colors duration-300"
              >
                <div className="flex items-start gap-5 p-5">
                  <div className="flex flex-col items-center gap-1.5 pt-0.5 shrink-0">
                    <span className="font-mono text-[10px] font-bold text-slate-700">
                      ID_{item.id}
                    </span>
                    <div 
                      className="w-px flex-1 min-h-[45px] rounded-full opacity-30" 
                      style={{ backgroundColor: item.tint }}
                    />
                  </div>

                  <div className="flex-1 min-w-0 font-mono">
                    <div className="flex items-center justify-between mb-2 gap-3 flex-wrap">
                      <span className="text-xs font-bold tracking-wider uppercase text-white">
                        {item.coreDomain}
                      </span>
                      <span 
                        className="inline-flex items-center gap-1.5 text-[9px] font-bold tracking-widest border rounded px-2 py-0.5"
                        style={{
                          color: item.tint,
                          borderColor: `${item.tint}30`,
                          backgroundColor: `${item.tint}05`,
                        }}
                      >
                        <span className="w-1 h-1 rounded-full animate-ping" style={{ backgroundColor: item.tint }} />
                        {item.condition}
                      </span>
                    </div>

                    <p className="text-xs text-slate-500 leading-relaxed mb-3 font-sans">
                      <span className="text-slate-700 font-mono font-bold mr-1.5">&gt;</span>
                      {item.logDetail}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {item.frameworks.map((framework) => (
                        <span
                          key={framework}
                          className="text-[10px] text-slate-600 border border-slate-900 bg-slate-950 px-2 py-0.5 rounded"
                        >
                          {framework}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* RESTRUCTURED COMPILED LIFECYCLE CHRONOLOGY */}
        <section className="mt-24">
          <div className="flex justify-between items-end mb-8 border-b border-slate-900 pb-3">
            <h3 className="text-slate-200 text-lg font-mono tracking-tight font-bold">
              Compiled_Lifecycle_Log<span className="text-[#2DD4BF]">_</span>
            </h3>
            <span className="text-slate-600 font-mono text-[10px] tracking-widest uppercase">// system_iterations</span>
          </div>

          <div className="relative">
            <div className="absolute left-1.5 top-2 bottom-2 w-px bg-slate-900" />

            <div className="space-y-4">
              {operationalLog.map((logItem, i) => {
                const isActiveLog = logItem.phase === "ACTIVE";
                return (
                  <div key={i} className="relative flex gap-6 pl-6">
                    <div className={`absolute left-0 top-2.5 w-3 h-3 rounded-sm border flex items-center justify-center rotate-45 ${
                      isActiveLog 
                        ? "border-[#2DD4BF] bg-[#2DD4BF]/10 shadow-[0_0_8px_rgba(45,212,191,0.3)]" 
                        : "border-slate-800 bg-slate-950"
                    }`}>
                      {isActiveLog && <div className="w-1 h-1 bg-[#2DD4BF]" />}
                    </div>

                    <div className="flex-1 bg-slate-950/10 border border-slate-900 rounded p-4 hover:border-slate-800 transition-colors font-mono">
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <span className="text-[10px] font-bold text-[#2DD4BF] tracking-wider">
                          [{logItem.target}]
                        </span>
                        <span className={`text-[9px] font-bold tracking-widest border px-1.5 py-0.2 rounded uppercase ${
                          isActiveLog 
                            ? "border-amber-500/30 text-amber-400 bg-amber-500/5" 
                            : "border-slate-800 text-slate-600"
                        }`}>
                          {isActiveLog ? "STAGE_RUNNING" : "LOG_COMPILED"}
                        </span>
                      </div>
                      <h4 className="text-slate-200 text-xs font-bold tracking-tight mb-1">{logItem.event}</h4>
                      <p className="text-[11px] font-sans text-slate-500 leading-relaxed">{logItem.descriptiveLog}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default About;