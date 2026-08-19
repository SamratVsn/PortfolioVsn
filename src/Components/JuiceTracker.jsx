import { useState } from 'react'
import {
  Github,
  ArrowUpRight,
  GlassWater,
  ClipboardList,
  Database,
  Layers,
  Zap,
  CheckCircle2,
  FolderTree,
  Cpu,
  GitBranch,
  Boxes
} from 'lucide-react'
import SEO from './SEO'
import BottomNav from './BottomNav'

function JuiceTracker() {
  const [activeTab, setActiveTab] = useState('overview')

  const specs = [
    { label: "Language", value: "Kotlin" },
    { label: "Architecture", value: "MVVM" },
    { label: "UI", value: "Compose + XML Views" },
    { label: "Storage", value: "Room Database" },
    { label: "Asynchrony", value: "Coroutines & StateFlow" },
    { label: "Interop", value: "Compose inside RecyclerView" }
  ]

  const features = [
    { icon: GlassWater, title: "Juice Logging", detail: "Save juice combinations with name, description, color, and rating." },
    { icon: Database, title: "Room Persistence", detail: "All juice data stored safely and managed locally with Room." },
    { icon: Layers, title: "Compose + Views Interop", detail: "Embeds Jetpack Compose elements inside a View-based architecture." },
    { icon: Zap, title: "Reactive UI", detail: "Kotlin StateFlow keeps the interface responsive to data changes." },
    { icon: CheckCircle2, title: "MVVM Architecture", detail: "Clean separation between UI, ViewModel, and Room data layer." },
    { icon: ClipboardList, title: "Detail & Ratings", detail: "Track color and rating for each juice combination you create." }
  ]

  const libraries = [
    { name: 'androidx.compose', purpose: 'Declarative UI framework' },
    { name: 'androidx.room', purpose: 'SQLite object mapping' },
    { name: 'lifecycle-viewmodel-compose', purpose: 'ViewModel integration' },
    { name: 'kotlinx.coroutines', purpose: 'Async + StateFlow' },
    { name: 'androidx.recyclerview', purpose: 'View-based lists hosting Compose' }
  ]

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-[#3B82F6]/30">
      <SEO
        title="Juice Tracker | SamratVsn"
        description="Native Android app for tracking juice combinations, details, and ratings — built with Kotlin, MVVM, Room, and Jetpack Compose + XML View interoperability. Built by Samrat Parajuli."
        ogUrl="https://www.samratparajuli0.com.np/projects/juicetracker"
      />

      {/* Header */}
      <div className="border-b border-slate-800/50 bg-[#020617]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 xl:max-w-7xl 2xl:max-w-[90rem] min-[1920px]:max-w-[100rem]">
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-2">Android App</p>
            <h1 className="text-2xl font-bold text-white tracking-[-0.03em]">
              Juice <span className="text-[#3B82F6]">Tracker</span>
            </h1>
          </div>
          <a
            href="https://github.com/SamratVsn/Juicetracker"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2.5 bg-[#3B82F6] text-[#020617] hover:bg-[#3B82F6]/90 rounded-lg font-semibold text-sm transition-all active:scale-[0.97]"
          >
            <Github size={16} /> View Code
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 xl:max-w-7xl 2xl:max-w-[90rem] min-[1920px]:max-w-[100rem]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">

            {/* Intro */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white tracking-[-0.03em]">
                Track juice combinations with modern Android architecture
              </h2>
              <p className="text-slate-400 leading-relaxed">
                Juice Tracker is a native Android application designed to track different juice combinations,
                details, and ratings. This project explores the transition and interoperability between
                traditional Android Views and Jetpack Compose — backed by local Room persistence and reactive
                StateFlow state.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                <div className="p-4 border border-slate-800/70 rounded-xl bg-[#0A101F]/70 backdrop-blur-xl hover:border-slate-700/80 transition-colors">
                  <p className="text-[#3B82F6] font-semibold text-sm mb-2">Views → Compose</p>
                  <p className="text-sm text-slate-400">Demonstrates a real migration path from XML Views to Jetpack Compose, mixing both in one app.</p>
                </div>
                <div className="p-4 border border-slate-800/70 rounded-xl bg-[#0A101F]/70 backdrop-blur-xl hover:border-slate-700/80 transition-colors">
                  <p className="text-[#3B82F6] font-semibold text-sm mb-2">Local-first</p>
                  <p className="text-sm text-slate-400">All data stays on-device in a Room database — no network layer, instant responsiveness.</p>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div>
              <div className="flex gap-1 mb-8 border-b border-slate-800">
                {['overview', 'features', 'architecture', 'system'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === tab
                        ? 'text-[#3B82F6] border-[#3B82F6]'
                        : 'text-slate-400 border-transparent hover:text-slate-300'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              <div className="min-h-[400px]">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <p className="text-slate-400 leading-relaxed">
                      This app demonstrates a complete local CRUD flow for juice entries — logging names,
                      descriptions, colors, and ratings — persisted with Room and rendered through a UI that
                      blends Jetpack Compose with classic Android Views.
                    </p>
                    <div className="space-y-4">
                      <h3 className="text-white font-semibold text-sm">Core Features</h3>
                      <ul className="space-y-3 text-sm text-slate-400">
                        <li className="flex items-start gap-3">
                          <span className="text-[#3B82F6] font-bold">→</span>
                          <span>Log juice entries with name, description, color, and rating</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#3B82F6] font-bold">→</span>
                          <span>Persist everything locally with the Room database</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#3B82F6] font-bold">→</span>
                          <span>Embed Compose UI inside a RecyclerView-based screen</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#3B82F6] font-bold">→</span>
                          <span>Reactive updates driven by Kotlin StateFlow</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#3B82F6] font-bold">→</span>
                          <span>MVVM separation between UI, ViewModel, and data layers</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === 'features' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {features.map((feat, i) => (
                      <div key={i} className="p-5 border border-slate-800/70 rounded-xl bg-[#0A101F]/60 hover:border-slate-700/80 hover:-translate-y-0.5 transition-all duration-300">
                        <div className="flex items-start gap-3">
                          <feat.icon size={20} className="text-[#3B82F6] mt-0.5 shrink-0" />
                          <div>
                            <h4 className="text-white font-semibold text-sm mb-1">{feat.title}</h4>
                            <p className="text-slate-400 text-sm">{feat.detail}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'architecture' && (
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-white font-semibold text-sm flex items-center gap-2">
                        <Layers size={16} className="text-[#3B82F6]" /> Layered Architecture
                      </h3>
                      <div className="space-y-3">
                        <div className="p-4 border border-slate-800/70 rounded-xl bg-[#0A101F]/50 hover:border-slate-700/80 transition-colors">
                          <p className="text-sm text-white font-semibold mb-1">Presentation Layer</p>
                          <p className="text-sm text-slate-400">Activities, Fragments, and Compose UI observe ViewModel state via StateFlow.</p>
                        </div>
                        <div className="p-4 border border-slate-800/70 rounded-xl bg-[#0A101F]/50 hover:border-slate-700/80 transition-colors">
                          <p className="text-sm text-white font-semibold mb-1">ViewModel Layer</p>
                          <p className="text-sm text-slate-400">Exposes UI state and business actions while keeping the UI free of persistence logic.</p>
                        </div>
                        <div className="p-4 border border-slate-800/70 rounded-xl bg-[#0A101F]/50 hover:border-slate-700/80 transition-colors">
                          <p className="text-sm text-white font-semibold mb-1">Data Layer</p>
                          <p className="text-sm text-slate-400">Room entities, DAOs, and database handle all local persistence.</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-white font-semibold text-sm flex items-center gap-2">
                        <Boxes size={16} className="text-[#3B82F6]" /> UI Interoperability
                      </h3>
                      <div className="space-y-3">
                        <div className="p-4 border border-slate-800/70 rounded-xl bg-[#0A101F]/50 hover:border-slate-700/80 transition-colors">
                          <p className="text-sm text-white font-semibold mb-2">Compose in a RecyclerView</p>
                          <p className="text-sm text-slate-400">Composable items are embedded directly inside View-based lists, proving incremental adoption works.</p>
                        </div>
                        <div className="p-4 border border-slate-800/70 rounded-xl bg-[#0A101F]/50 hover:border-slate-700/80 transition-colors">
                          <p className="text-sm text-white font-semibold mb-2">Incremental Migration</p>
                          <p className="text-sm text-slate-400">XML screens coexist with Compose elements, mirroring how real apps adopt Compose gradually.</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-white font-semibold text-sm flex items-center gap-2">
                        <GitBranch size={16} className="text-[#3B82F6]" /> Design Principles
                      </h3>
                      <div className="space-y-3">
                        <div className="p-4 border border-slate-800/70 rounded-xl bg-[#0A101F]/50 hover:border-slate-700/80 transition-colors">
                          <p className="text-sm text-white font-semibold mb-2">MVVM with StateFlow</p>
                          <p className="text-sm text-slate-400">Single source of truth flows from Room through ViewModels to the UI reactively.</p>
                        </div>
                        <div className="p-4 border border-slate-800/70 rounded-xl bg-[#0A101F]/50 hover:border-slate-700/80 transition-colors">
                          <p className="text-sm text-white font-semibold mb-2">Local-first Design</p>
                          <p className="text-sm text-slate-400">No network layer — every interaction is instantly reflected from the local database.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'system' && (
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-white font-semibold text-sm flex items-center gap-2">
                        <Cpu size={16} className="text-[#3B82F6]" /> Build Environment
                      </h3>
                      <div className="space-y-3">
                        {[
                          { label: 'Language', value: 'Kotlin' },
                          { label: 'UI Framework', value: 'Jetpack Compose + Android XML Views' },
                          { label: 'Architecture', value: 'MVVM (Model-View-ViewModel)' },
                          { label: 'Database', value: 'Room Persistence Library' },
                          { label: 'Asynchrony', value: 'Kotlin Coroutines & StateFlow' },
                          { label: 'Prerequisite', value: 'Android SDK 33+' }
                        ].map((item, i) => (
                          <div key={i} className="flex justify-between p-3 border border-slate-800 rounded-lg">
                            <span className="text-slate-500 text-sm">{item.label}</span>
                            <span className="text-slate-300 text-sm font-medium">{item.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-white font-semibold text-sm">Libraries Used</h3>
                      <div className="space-y-2">
                        {libraries.map((lib, i) => (
                          <div key={i} className="flex justify-between gap-4 p-3 border border-slate-800 rounded-lg">
                            <span className="text-slate-300 text-sm font-mono">{lib.name}</span>
                            <span className="text-slate-500 text-sm text-right">{lib.purpose}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-lg">
                      <p className="text-[#60A5FA] font-semibold text-sm mb-2">Roadmap</p>
                      <p className="text-sm text-[#93C5FD]/80">
                        Fully migrating remaining Views to Compose, adding recipe templates, image support, and
                        search/filtering are natural next steps for the tracker.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">

            {/* Specifications */}
            <div className="p-6 border border-slate-800/70 rounded-xl bg-[#0A101F]/70 backdrop-blur-xl shadow-[0_0_28px_-14px_rgba(59,130,246,0.25)]">
              <h3 className="text-sm font-semibold text-white mb-6">Specifications</h3>
              <div className="space-y-4">
                {specs.map((spec, i) => (
                  <div key={i} className="border-b border-slate-800 pb-4 last:border-0 last:pb-0">
                    <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">{spec.label}</p>
                    <p className="text-sm text-slate-300 font-medium">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Components */}
            <div className="p-6 border border-slate-800/70 rounded-xl bg-[#0A101F]/70 backdrop-blur-xl shadow-[0_0_28px_-14px_rgba(59,130,246,0.25)]">
              <h3 className="text-sm font-semibold text-white mb-4">Core Components</h3>
              <div className="space-y-2">
                {[
                  'Juice Entry Form',
                  'Juice List (RecyclerView)',
                  'Compose Item Composables',
                  'Room Entity & DAO',
                  'ViewModel + StateFlow',
                  'Rating & Color Fields'
                ].map((comp, i) => (
                  <div key={i} className="text-sm text-slate-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                    {comp}
                  </div>
                ))}
              </div>
            </div>

            {/* Stack */}
            <div className="p-6 border border-slate-800/70 rounded-xl bg-[#0A101F]/70 backdrop-blur-xl shadow-[0_0_28px_-14px_rgba(59,130,246,0.25)]">
              <h3 className="text-sm font-semibold text-white mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {['Kotlin', 'Jetpack Compose', 'XML Views', 'Room', 'ViewModel', 'Coroutines', 'StateFlow', 'RecyclerView', 'MVVM'].map((tech, i) => (
                  <span key={i} className="px-2.5 py-1 text-xs font-medium text-slate-300 bg-slate-800/60 border border-slate-700 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Repo Link */}
            <a
              href="https://github.com/SamratVsn/Juicetracker"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 border border-slate-800/70 rounded-xl bg-[#0A101F]/70 backdrop-blur-xl hover:border-[#3B82F6]/50 hover:shadow-[0_0_24px_-12px_rgba(59,130,246,0.35)] transition-all group"
            >
              <span className="text-sm text-slate-300 font-medium">View full README</span>
              <ArrowUpRight size={16} className="text-slate-500 group-hover:text-[#3B82F6] transition-colors" />
            </a>

          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  )
}

export default JuiceTracker
