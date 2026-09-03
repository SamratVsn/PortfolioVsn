import { useState } from 'react'
import {
  Github,
  ArrowUpRight,
  CheckCircle2,
  Search,
  Timer,
  User,
  Palette,
  Navigation,
  Bell,
  Database,
  Layers,
  FolderTree,
  Cpu,
  Download,
  X,
  Tag,
  BarChart3,
  Settings,
  ListTodo
} from 'lucide-react'
import SEO from './SEO'
import BottomNav from './BottomNav'
import ToDoHome from '../assets/ToDo/Home.png'
import ToDoAdd from '../assets/ToDo/Add.png'
import ToDoDetails from '../assets/ToDo/Details.png'
import ToDoFocus from '../assets/ToDo/Focus.png'
import ToDoCategories from '../assets/ToDo/Categories.png'
import ToDoProfile from '../assets/ToDo/Profile.png'
import ToDoSettings from '../assets/ToDo/Settings.png'
import ToDoApp from '../assets/ToDo/Home.png'

const RELEASE_URL = "https://github.com/SamratVsn/ToDo/releases/latest/download/app-release.apk"
const REPO_URL = "https://github.com/SamratVsn/ToDo"

function Tasks() {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedImage, setSelectedImage] = useState(null)

  const specs = [
    { label: "Min SDK", value: "24 (Android 7.0)" },
    { label: "Target SDK", value: "37 (Android 15)" },
    { label: "Language", value: "Kotlin 2.2.10" },
    { label: "UI Framework", value: "Jetpack Compose" },
    { label: "Design System", value: "Material Design 3 (M3)" },
    { label: "Database", value: "Room (SQLite)" },
    { label: "Preferences", value: "Jetpack DataStore" },
    { label: "Architecture", value: "MVVM + Repository" },
    { label: "Navigation", value: "Navigation Compose (ToDoNavHost)" },
    { label: "DI", value: "Hilt / AppContainer" },
    { label: "Build", value: "Gradle 9.3.1" }
  ]

  const features = [
    { icon: ListTodo, title: "Task Management", detail: "Effortlessly create, edit, and delete tasks with a clean UI designed for productivity." },
    { icon: Search, title: "Search & Filter", detail: "Quickly locate tasks with global search and dedicated category-based filtering." },
    { icon: Timer, title: "Focus Sessions", detail: "Integrated Pomodoro-style timer with customizable durations (15m, 25m, 45m, 60m) and a beefy UI for better visibility." },
    { icon: User, title: "Personalized Profile", detail: "Track your progress with real-time statistics — All-time Created, Completed, and Today's Wins — along with motivational bios." },
    { icon: Palette, title: "Dynamic Theming", detail: "Support for System Default, Light Mode, and a specialized \"Deep Sea\" Dark Mode with a theme-adaptive UI." },
    { icon: Navigation, title: "Custom Navigation", detail: "A unique floating navigation bar with an elevated Floating Action Button (FAB) for quick task entry." },
    { icon: Bell, title: "Smart Reminders", detail: "Toggleable notifications to help you stay on track so important tasks never slip through the cracks." },
    { icon: Tag, title: "Category Management", detail: "Pre-populated default categories (Study, Work, etc.) with the ability to add and safely delete custom ones." },
    { icon: Database, title: "Data Management", detail: "Robust options to reset your progress or securely delete all data with confirmation dialogs." },
    { icon: Layers, title: "Persistent Storage", detail: "Powered by Room Database for local task persistence and DataStore for user preferences." },
    { icon: BarChart3, title: "Polished UI/UX", detail: "Custom animations, gradient backgrounds, and refined Material 3 components for a premium feel." }
  ]

  const screenshots = [
    { src: ToDoHome, label: 'Home', desc: 'Main task list with swipe-to-delete and smart grouping.' },
    { src: ToDoFocus, label: 'Focus', desc: 'Pomodoro-style timer with customizable durations.' },
    { src: ToDoCategories, label: 'Categories', desc: 'Organize tasks with pre-built and custom categories.' },
    { src: ToDoProfile, label: 'Profile', desc: 'Real-time stats and personalized motivation.' },
    { src: ToDoSettings, label: 'Settings', desc: 'Theme, reminders, and data management options.' },
    { src: ToDoAdd, label: 'Add Task', desc: 'Creating a new task entry with category selection.' },
    { src: ToDoDetails, label: 'Task Details', desc: 'Full description and status view.' }
  ]

  const layers = [
    { name: "Presentation Layer", detail: "UI Screens (Home, Focus, Category, Profile, Settings) and their respective ViewModels." },
    { name: "Domain Layer", detail: "Business logic and data abstraction through Repositories." },
    { name: "Data Layer", detail: "Room DAOs, Entities, and Preferences DataStore implementation." },
    { name: "Navigation Layer", detail: "Centralized ToDoNavHost managing the app flow within a Single Activity." }
  ]

  const roadmap = [
    { title: "Cloud Sync", detail: "Firebase integration for multi-device synchronization." },
    { title: "Custom Tags", detail: "Create personal labels for better task organization." },
    { title: "Interactive Widgets", detail: "Access your tasks directly from the home screen." },
    { title: "Detailed Analytics", detail: "Visual charts for weekly and monthly productivity trends." }
  ]

  const libraries = [
    { name: 'Jetpack Compose', purpose: 'Declarative UI toolkit' },
    { name: 'Material Design 3', purpose: 'Modern, customizable components' },
    { name: 'Room Database', purpose: 'Local SQLite for task persistence' },
    { name: 'Jetpack DataStore', purpose: 'Type-safe preferences storage' },
    { name: 'Navigation Compose', purpose: 'Type-safe in-app routing' },
    { name: 'Coroutines & Flow', purpose: 'Async ops & reactive state' },
    { name: 'ViewModel', purpose: 'Lifecycle-aware state management' },
    { name: 'SplashScreen API', purpose: 'Professional app launch' },
    { name: 'Hilt / AppContainer', purpose: 'Dependency injection' }
  ]

  const developer = [
    { label: 'Developer', value: 'Samrat Parajuli' },
    { label: 'GitHub', value: 'github.com/SamratVsn', href: 'https://github.com/SamratVsn' },
    { label: 'Portfolio', value: 'samratparajuli0.com.np', href: 'https://www.samratparajuli0.com.np' },
    { label: 'LinkedIn', value: 'Samrat Parajuli', href: 'https://linkedin.com/in/samratvsn' },
    { label: 'License', value: 'MIT License' }
  ]

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-[#3B82F6]/30">
      <SEO
        title="Tasks | SamratVsn"
        description="Tasks is a sleek, modern task management app for Android built with Kotlin, Jetpack Compose & Material 3. Features Pomodoro focus sessions, category management, smart reminders, dynamic theming, and MVVM architecture. Built by Samrat Parajuli."
        ogUrl="https://www.samratparajuli0.com.np/projects/todo"
      />

      {/* Header */}
      <div className="border-b border-slate-800/50 bg-[#020617]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 xl:max-w-7xl 2xl:max-w-[90rem] min-[1920px]:max-w-[100rem]">
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-2">Android App</p>
            <h1 className="text-2xl font-bold text-white tracking-[-0.03em] flex items-center gap-3">
              Tasks
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#3B82F6]/10 border border-[#3B82F6]/30 text-[#60A5FA]">
                v1.1.0
              </span>
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={RELEASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 bg-[#3B82F6] text-[#020617] hover:bg-[#3B82F6]/90 rounded-lg font-semibold text-sm transition-all active:scale-[0.97]"
            >
              <Download size={16} /> Download App
            </a>
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 border border-slate-700/80 text-slate-300 hover:border-slate-600 hover:text-white rounded-lg font-semibold text-sm transition-all active:scale-[0.97]"
            >
              <Github size={16} /> View Code
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 xl:max-w-7xl 2xl:max-w-[90rem] min-[1920px]:max-w-[100rem]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">

            {/* Hero Image */}
            <div className="rounded-xl overflow-hidden border border-slate-800/70 bg-slate-900 shadow-[0_0_36px_-14px_rgba(59,130,246,0.3)]">
              <img
                src={ToDoApp}
                alt="Tasks app"
                className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity cursor-pointer"
                onClick={() => setSelectedImage({ src: ToDoApp, label: 'Tasks', desc: 'A sleek, modern task management app built with Kotlin & Jetpack Compose.' })}
                loading="lazy"
              />
            </div>

            {/* Intro */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white tracking-[-0.03em]">
                A sleek, modern task manager for Android
              </h2>
              <p className="text-slate-400 leading-relaxed">
                Tasks is designed to help you stay organized, focused, and achieve your goals.
                It features Pomodoro-style focus sessions, category management, smart reminders,
                and full System, Light, and "Deep Sea" Dark theme support — all wrapped in a
                polished Material 3 experience. Built entirely with modern Jetpack Compose,
                backed by a clean MVVM + Repository architecture with Room and DataStore persistence.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                <div className="p-4 border border-slate-800/70 rounded-xl bg-[#0A101F]/70 backdrop-blur-xl hover:border-slate-700/80 transition-colors">
                  <p className="text-[#3B82F6] font-semibold text-sm mb-2">Focus Sessions</p>
                  <p className="text-sm text-slate-400">Pomodoro-style timer with customizable durations (15m, 25m, 45m, 60m) for deep-work productivity.</p>
                </div>
                <div className="p-4 border border-slate-800/70 rounded-xl bg-[#0A101F]/70 backdrop-blur-xl hover:border-slate-700/80 transition-colors">
                  <p className="text-[#3B82F6] font-semibold text-sm mb-2">Category Management</p>
                  <p className="text-sm text-slate-400">Pre-populated categories (Study, Work, etc.) with the ability to add and safely delete custom ones.</p>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div>
              <div className="flex gap-1 mb-8 border-b border-slate-800">
                {['overview', 'features', 'architecture', 'roadmap'].map(tab => (
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
                      Tasks is engineered around a strict separation of concerns so it stays scalable
                      and testable. StateFlow-driven ViewModels keep a single source of truth, clean
                      repository interfaces abstract the data sources, and Room plus DataStore handle
                      local persistence for tasks and preferences.
                    </p>
                    <div className="space-y-4">
                      <h3 className="text-white font-semibold text-sm">Key Features</h3>
                      <ul className="space-y-3 text-sm text-slate-400">
                        <li className="flex items-start gap-3">
                          <span className="text-[#3B82F6] font-bold">→</span>
                          <span>Effortlessly create, edit, and delete tasks with a clean UI</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#3B82F6] font-bold">→</span>
                          <span>Global search and category-based filtering</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#3B82F6] font-bold">→</span>
                          <span>Pomodoro-style Focus Sessions (15m, 25m, 45m, 60m)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#3B82F6] font-bold">→</span>
                          <span>Real-time profile stats: Created, Completed, Today's Wins</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#3B82F6] font-bold">→</span>
                          <span>System, Light, and "Deep Sea" Dark theme support</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#3B82F6] font-bold">→</span>
                          <span>Toggleable reminder notifications</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#3B82F6] font-bold">→</span>
                          <span>Pre-populated and custom category management</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#3B82F6] font-bold">→</span>
                          <span>Floating navigation bar with elevated FAB</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#3B82F6] font-bold">→</span>
                          <span>Custom animations and gradient backgrounds</span>
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
                        <Layers size={16} className="text-[#3B82F6]" /> App Architecture
                      </h3>
                      <div className="space-y-3">
                        {layers.map((layer, i) => (
                          <div key={i} className="p-4 border border-slate-800/70 rounded-xl bg-[#0A101F]/50 hover:border-slate-700/80 transition-colors">
                            <p className="text-sm text-white font-semibold mb-1">{layer.name}</p>
                            <p className="text-sm text-slate-400">{layer.detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-white font-semibold text-sm flex items-center gap-2">
                        <FolderTree size={16} className="text-[#3B82F6]" /> Project Structure
                      </h3>
                      <div className="p-4 bg-slate-950/80 border border-slate-800/70 rounded-xl font-mono text-sm text-slate-400 leading-relaxed">
                        <p>app/</p>
                        <p className="ml-4">├── <span className="text-[#3B82F6]">data/</span> <span className="text-slate-500">// Database entities, DAOs, Repositories & DataStore</span></p>
                        <p className="ml-4">├── <span className="text-[#3B82F6]">ui/</span></p>
                        <p className="ml-8">│   ├── <span className="text-[#3B82F6]">home/</span> <span className="text-slate-500">// Home screen logic & UI</span></p>
                        <p className="ml-8">│   ├── <span className="text-[#3B82F6]">screens/</span> <span className="text-slate-500">// Focus, Profile, Settings, Category, Add/Edit</span></p>
                        <p className="ml-8">│   ├── <span className="text-[#3B82F6]">navigation/</span> <span className="text-slate-500">// NavHost & Destination definitions</span></p>
                        <p className="ml-8">│   └── <span className="text-[#3B82F6]">theme/</span> <span className="text-slate-500">// Deep Sea schemes, typography & shapes</span></p>
                        <p className="ml-4">├── ToDoApp.kt <span className="text-slate-500">// Custom Floating Navigation & Scaffold</span></p>
                        <p className="ml-4">└── MainActivity.kt <span className="text-slate-500">// Entry point with theme & splash</span></p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'roadmap' && (
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-white font-semibold text-sm flex items-center gap-2">
                        <Download size={16} className="text-[#3B82F6]" /> Future Roadmap
                      </h3>
                      <div className="space-y-3">
                        {roadmap.map((item, i) => (
                          <div key={i} className="p-4 border border-slate-800/70 rounded-xl bg-[#0A101F]/50 hover:border-slate-700/80 transition-colors">
                            <p className="text-sm text-white font-semibold mb-1 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                              {item.title}
                            </p>
                            <p className="text-sm text-slate-400">{item.detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-white font-semibold text-sm flex items-center gap-2">
                        <Cpu size={16} className="text-[#3B82F6]" /> Runtime Environment
                      </h3>
                      <div className="space-y-3">
                        {[
                          { label: 'Minimum SDK', value: 'API 24 (Android 7.0)' },
                          { label: 'Target / Compile SDK', value: 'API 37 (Android 15)' },
                          { label: 'Kotlin Version', value: '2.2.10' },
                          { label: 'Build Tool', value: 'Gradle 9.3.1' }
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
                    className="group relative border border-slate-800/70 rounded-xl overflow-hidden bg-slate-900 cursor-pointer hover:border-slate-700/80 hover:shadow-[0_0_24px_-12px_rgba(59,130,246,0.35)] transition-all"
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
            <div className="p-6 border border-slate-800/70 rounded-xl bg-[#0A101F]/70 backdrop-blur-xl shadow-[0_0_28px_-14px_rgba(59,130,246,0.25)]">
              <h3 className="text-sm font-semibold text-white mb-6">Technical Stack</h3>
              <div className="space-y-4">
                {specs.map((spec, i) => (
                  <div key={i} className="border-b border-slate-800 pb-4 last:border-0 last:pb-0">
                    <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">{spec.label}</p>
                    <p className="text-sm text-slate-300 font-medium">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Developer & Source */}
            <div className="p-6 border border-slate-800/70 rounded-xl bg-[#0A101F]/70 backdrop-blur-xl shadow-[0_0_28px_-14px_rgba(59,130,246,0.25)]">
              <h3 className="text-sm font-semibold text-white mb-4">Developer & Source</h3>
              <div className="space-y-3">
                {developer.map((dev, i) => (
                  <div key={i}>
                    <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">{dev.label}</p>
                    {dev.href ? (
                      <a
                        href={dev.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[#3B82F6] hover:text-[#60A5FA] transition-colors font-medium break-words"
                      >
                        {dev.value}
                      </a>
                    ) : (
                      <p className="text-sm text-slate-300 font-medium break-words">{dev.value}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Stack */}
            <div className="p-6 border border-slate-800/70 rounded-xl bg-[#0A101F]/70 backdrop-blur-xl shadow-[0_0_28px_-14px_rgba(59,130,246,0.25)]">
              <h3 className="text-sm font-semibold text-white mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {['Kotlin', 'Jetpack Compose', 'Material 3', 'Room', 'DataStore', 'Coroutines & Flow', 'Navigation Compose', 'Hilt', 'ViewModel', 'SplashScreen API'].map((tech, i) => (
                  <span key={i} className="px-2.5 py-1 text-xs font-medium text-slate-300 bg-slate-800/60 border border-slate-700 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Download */}
            <a
              href={RELEASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-4 bg-[#3B82F6] text-[#020617] hover:bg-[#3B82F6]/90 rounded-xl font-bold text-sm transition-all group active:scale-[0.97]"
            >
              <Download size={16} /> Download App Release
            </a>

            {/* Repo Link */}
            <a
              href={REPO_URL}
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

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-6 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-3xl w-full space-y-4">
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
      <BottomNav />
    </div>
  )
}

export default Tasks
