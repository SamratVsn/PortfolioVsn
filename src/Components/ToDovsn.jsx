import { useState } from 'react'
import {
  Github,
  ArrowUpRight,
  CheckCircle2,
  Trash2,
  Database,
  Palette,
  Info,
  Navigation,
  FileText,
  Image,
  Layers,
  FolderTree,
  Cpu,
  X
} from 'lucide-react'
import SEO from './SEO'
import ToDoHome from '../assets/ToDo/Home.png'
import ToDoAdd from '../assets/ToDo/Add.png'
import ToDoEdit from '../assets/ToDo/Edit.png'
import ToDoDetails from '../assets/ToDo/Details.png'
import ToDoInfo from '../assets/ToDo/Info.png'
import ToDoEmpty from '../assets/ToDo/Empty.png'
import ToDoApp from '../assets/ToDo/ToDoVsn.png'

function ToDoVsn() {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedImage, setSelectedImage] = useState(null)

  const specs = [
    { label: "Language", value: "Kotlin 2.2.10" },
    { label: "Architecture", value: "MVVM + Repository" },
    { label: "Interface", value: "Jetpack Compose (M3)" },
    { label: "Storage", value: "Room Database" },
    { label: "Navigation", value: "Navigation Compose" },
    { label: "Min / Target SDK", value: "API 24 / 37" }
  ]

  const features = [
    { icon: CheckCircle2, title: "Task Management", detail: "Add, edit, delete, and mark tasks complete with real-time state updates." },
    { icon: Trash2, title: "Swipe to Delete", detail: "Quick, intuitive swipe-to-dismiss gesture on the home screen." },
    { icon: FileText, title: "Task Details", detail: "Dedicated detail view showing full descriptions and status." },
    { icon: Database, title: "Persistent Storage", detail: "Room Database ensures every task survives app restarts." },
    { icon: Palette, title: "Material 3 UI", detail: "Modern, clean design following the latest Material guidelines." },
    { icon: Navigation, title: "Type-safe Navigation", detail: "Strictly-typed routes across Home, Add, Edit, Details, and Info screens." },
    { icon: Info, title: "Info / About Screen", detail: "Dedicated section with developer info and tech stack details." },
    { icon: Image, title: "Adaptive Launcher Icon", detail: "Professional icon support across Android device themes." }
  ]

  const screenshots = [
    { src: ToDoEmpty, label: 'Empty State', desc: 'Elegant placeholder when no tasks exist.' },
    { src: ToDoAdd, label: 'Add Task', desc: 'Creating a new task entry.' },
    { src: ToDoEdit, label: 'Edit Task', desc: 'Updating task details in place.' },
    { src: ToDoDetails, label: 'Task Details', desc: 'Full description and status view.' },
    { src: ToDoInfo, label: 'About Screen', desc: 'Developer info and tech stack.' },
    { src: ToDoHome, label: 'Home / Tasks', desc: 'Main task list with swipe-to-delete.' }
  ]

  const libraries = [
    { name: 'androidx.compose.ui', purpose: 'Declarative UI framework' },
    { name: 'material3', purpose: 'Material Design 3 components' },
    { name: 'navigation-compose', purpose: 'In-app routing' },
    { name: 'Room (androidx.room)', purpose: 'SQLite object mapping' },
    { name: 'lifecycle-viewmodel-compose', purpose: 'ViewModel integration' },
    { name: 'kotlinx.coroutines', purpose: 'Async task handling' }
  ]

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-[#3B82F6]/30">
      <SEO
        title="To-Do Vsn App | Samrat Parajuli"
        description="Modern task management Android app built with Kotlin & Jetpack Compose, following MVVM + Repository architecture with Room persistence and type-safe Navigation Compose. Built by Samrat Parajuli."
        ogUrl="https://www.samratparajuli0.com.np/projects/todo"
      />

      {/* Header */}
      <div className="border-b border-slate-800/50 bg-[#020617]/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-2">Android App</p>
            <h1 className="text-2xl font-bold text-white tracking-[-0.03em]">
              To-Do <span className="text-[#3B82F6]">Vsn</span>
            </h1>
          </div>
          <a
            href="https://github.com/SamratVsn/ToDo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2.5 bg-[#3B82F6] text-[#020617] hover:bg-[#3B82F6]/90 rounded-lg font-semibold text-sm transition-colors"
          >
            <Github size={16} /> View Code
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">

            {/* Hero Image */}
            <div className="rounded-lg overflow-hidden border border-slate-800 bg-slate-900">
              <img
                src={ToDoApp}
                alt="To-Do Vsn app"
                className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity cursor-pointer"
                onClick={() => setSelectedImage({ src: ToDoVsn, label: 'To-Do Vsn App', desc: 'Modern task management built with Kotlin & Jetpack Compose.' })}
                loading="lazy"
              />
            </div>

            {/* Intro */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white tracking-[-0.03em]">
                Task management app built with Jetpack Compose
              </h2>
              <p className="text-slate-400 leading-relaxed">
                To-Do Vsn is a lightweight, modern task management application built with Jetpack Compose
                and Material 3. It follows MVVM and Repository architecture with a Room-backed persistence
                layer, delivering a fast, polished task-tracking experience focused on simplicity and
                performance.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                <div className="p-4 border border-slate-800 rounded-lg bg-slate-900/30">
                  <p className="text-[#3B82F6] font-semibold text-sm mb-2">Single Activity</p>
                  <p className="text-sm text-slate-400">Entire navigation handled within one MainActivity using Navigation Compose.</p>
                </div>
                <div className="p-4 border border-slate-800 rounded-lg bg-slate-900/30">
                  <p className="text-[#3B82F6] font-semibold text-sm mb-2">Reactive State</p>
                  <p className="text-sm text-slate-400">StateFlow and mutableStateOf drive UI recomposition as task data changes.</p>
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
                  <div className="space-y-6 animate-in fade-in">
                    <p className="text-slate-400 leading-relaxed">
                      This app demonstrates a full mobile CRUD workflow: creating, editing, completing, and
                      deleting tasks — all backed by a local Room database with reactive state handling
                      throughout the UI layer and type-safe navigation between screens.
                    </p>
                    <div className="space-y-4">
                      <h3 className="text-white font-semibold text-sm">Core Features</h3>
                      <ul className="space-y-3 text-sm text-slate-400">
                        <li className="flex items-start gap-3">
                          <span className="text-[#3B82F6] font-bold">→</span>
                          <span>Add, edit, and delete tasks with instant UI feedback</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#3B82F6] font-bold">→</span>
                          <span>Toggle task status between pending and completed</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#3B82F6] font-bold">→</span>
                          <span>Swipe-to-dismiss gesture for quick task removal</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#3B82F6] font-bold">→</span>
                          <span>Detailed task view with descriptions and status</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#3B82F6] font-bold">→</span>
                          <span>Elegant empty-state handling when no tasks exist</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#3B82F6] font-bold">→</span>
                          <span>Type-safe navigation across Home, Add, Edit, Details, and Info screens</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === 'features' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in">
                    {features.map((feat, i) => (
                      <div key={i} className="p-5 border border-slate-800 rounded-lg hover:border-slate-700 transition-colors">
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
                  <div className="space-y-6 animate-in fade-in">
                    <div className="space-y-4">
                      <h3 className="text-white font-semibold text-sm flex items-center gap-2">
                        <Layers size={16} className="text-[#3B82F6]" /> Layered Architecture
                      </h3>
                      <div className="space-y-3">
                        <div className="p-4 border border-slate-800 rounded-lg">
                          <p className="text-sm text-white font-semibold mb-1">Presentation Layer</p>
                          <p className="text-sm text-slate-400">Jetpack Compose screens and ViewModels handle UI state and user interactions.</p>
                        </div>
                        <div className="p-4 border border-slate-800 rounded-lg">
                          <p className="text-sm text-white font-semibold mb-1">Domain Layer</p>
                          <p className="text-sm text-slate-400">Repository interfaces abstract the data sources from the UI.</p>
                        </div>
                        <div className="p-4 border border-slate-800 rounded-lg">
                          <p className="text-sm text-white font-semibold mb-1">Data Layer</p>
                          <p className="text-sm text-slate-400">Room Database implementation, DAOs, and entities handle persistence.</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-white font-semibold text-sm flex items-center gap-2">
                        <FolderTree size={16} className="text-[#3B82F6]" /> Project Structure
                      </h3>
                      <div className="p-4 bg-slate-950 border border-slate-800 rounded-lg font-mono text-sm text-slate-400 leading-relaxed">
                        <p>app/</p>
                        <p className="ml-4">├── <span className="text-[#3B82F6]">data/</span> <span className="text-slate-500">// Entities, DAOs, Database, Repository</span></p>
                        <p className="ml-4">├── <span className="text-[#3B82F6]">ui/</span></p>
                        <p className="ml-8">│   ├── home/ <span className="text-slate-500">// Home screen + ViewModel</span></p>
                        <p className="ml-8">│   ├── screens/ <span className="text-slate-500">// Add, Edit, Details, Info</span></p>
                        <p className="ml-8">│   ├── navigation/ <span className="text-slate-500">// Navigation graph & destinations</span></p>
                        <p className="ml-8">│   └── theme/ <span className="text-slate-500">// M3 colors, typography, shapes</span></p>
                        <p className="ml-4">├── ToDoApp.kt <span className="text-slate-500">// Top-level app composables</span></p>
                        <p className="ml-4">└── MainActivity.kt <span className="text-slate-500">// Entry point</span></p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-white font-semibold text-sm">Design Principles</h3>
                      <div className="space-y-3">
                        <div className="p-4 border border-slate-800 rounded-lg">
                          <p className="text-sm text-white font-semibold mb-2">MVVM + Repository Pattern</p>
                          <p className="text-sm text-slate-400">Presentation, domain (repository interfaces), and data (Room DAOs/entities) layers stay cleanly separated.</p>
                        </div>
                        <div className="p-4 border border-slate-800 rounded-lg">
                          <p className="text-sm text-white font-semibold mb-2">Single Activity Architecture</p>
                          <p className="text-sm text-slate-400">All navigation flows through one MainActivity, keeping the app lightweight and predictable.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'system' && (
                  <div className="space-y-6 animate-in fade-in">
                    <div className="space-y-4">
                      <h3 className="text-white font-semibold text-sm flex items-center gap-2">
                        <Cpu size={16} className="text-[#3B82F6]" /> Runtime Environment
                      </h3>
                      <div className="space-y-3">
                        {[
                          { label: 'Minimum SDK', value: 'API 24 (Android 7.0)' },
                          { label: 'Target / Compile SDK', value: 'API 37 (Android 15)' },
                          { label: 'Kotlin Version', value: '2.2.10' },
                          { label: 'Build Tool', value: 'Gradle 9.3.1 (AGP)' },
                          { label: 'Annotation Processing', value: 'KSP' }
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
                        Search functionality, task categories, due-date notifications, cloud sync, and
                        priority levels are planned for future releases — along with a dark/light mode override.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Screenshots */}
            <div className="space-y-6">
              <h3 className="text-sm font-semibold text-[#3B82F6] uppercase tracking-widest">Screenshots</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {screenshots.map((s, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedImage(s)}
                    className="group relative border border-slate-800 rounded-lg overflow-hidden bg-slate-900 cursor-pointer hover:border-slate-700 transition-colors"
                  >
                    <img
                      src={s.src}
                      alt={s.label}
                      className="w-full h-40 object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 inset-x-0 p-4">
                      <p className="text-sm font-semibold text-slate-100 group-hover:text-[#3B82F6] transition-colors">{s.label}</p>
                      <p className="text-xs text-slate-400 mt-1">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">

            {/* Specifications */}
            <div className="p-6 border border-slate-800 rounded-lg bg-slate-900/30">
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
            <div className="p-6 border border-slate-800 rounded-lg bg-slate-900/30">
              <h3 className="text-sm font-semibold text-white mb-4">Core Components</h3>
              <div className="space-y-2">
                {[
                  'Home / Task List',
                  'Add & Edit Screens',
                  'Task Details View',
                  'Info / About Screen',
                  'Room DAO & Entities',
                  'ViewModel + StateFlow'
                ].map((comp, i) => (
                  <div key={i} className="text-sm text-slate-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                    {comp}
                  </div>
                ))}
              </div>
            </div>

            {/* Stack */}
            <div className="p-6 border border-slate-800 rounded-lg bg-slate-900/30">
              <h3 className="text-sm font-semibold text-white mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {['Kotlin', 'Jetpack Compose', 'Material 3', 'Room', 'Navigation Compose', 'ViewModel', 'Coroutines', 'KSP', 'AndroidX'].map((tech, i) => (
                  <span key={i} className="px-2.5 py-1 text-xs font-medium text-slate-300 bg-slate-800/60 border border-slate-700 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Repo Link */}
            <a
              href="https://github.com/SamratVsn/ToDo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 border border-slate-800 rounded-lg bg-slate-900/30 hover:border-[#3B82F6]/50 transition-colors group"
            >
              <span className="text-sm text-slate-300 font-medium">View full README</span>
              <ArrowUpRight size={16} className="text-slate-500 group-hover:text-[#3B82F6] transition-colors" />
            </a>

          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-6 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-3xl w-full space-y-4 animate-in fade-in">
            <div className="flex justify-between items-center pb-4 border-b border-slate-800">
              <h3 className="text-white font-semibold">{selectedImage.label}</h3>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-1 hover:bg-slate-800 rounded transition-colors"
              >
                <X size={20} className="text-slate-400" />
              </button>
            </div>
            <img
              src={selectedImage.src}
              alt={selectedImage.label}
              className="w-full border border-slate-800 rounded-lg"
            />
            <p className="text-sm text-slate-400 text-center">{selectedImage.desc}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default ToDoVsn
