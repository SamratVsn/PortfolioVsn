import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Github,
  ArrowUpRight,
  Landmark,
  Church,
  Store,
  MapPin,
  Compass,
  RefreshCw,
  Palette,
  Layers,
  FolderTree,
  Cpu,
  LayoutGrid
} from 'lucide-react'
import SEO from './SEO'
import CaseStudyHeader from './CaseStudyHeader'
import KathmanduPoster from '../assets/KathmanduPoster.jpeg'
import { motion } from 'framer-motion';


function Kathmandu() {
  const [activeTab, setActiveTab] = useState('overview')

  const specs = [
    { label: "Language", value: "Kotlin 1.9.0" },
    { label: "Architecture", value: "MVVM" },
    { label: "Interface", value: "Jetpack Compose (M3)" },
    { label: "Navigation", value: "Navigation Compose" },
    { label: "State", value: "ViewModel & StateFlow" },
    { label: "Min API", value: "API 24+" }
  ]

  const features = [
    { icon: Landmark, title: "Special Places", detail: "Iconic and historically significant buildings across Kathmandu." },
    { icon: Church, title: "Temples", detail: "Prominent Hindu and Buddhist temples, including Pashupatinath." },
    { icon: Store, title: "Major Shops", detail: "Popular shopping streets, markets, and commercial areas." },
    { icon: MapPin, title: "Tourist Destinations", detail: "Well-known attractions and places of interest for visitors." },
    { icon: Compass, title: "Seamless Navigation", detail: "Smooth transitions between categories and location details." },
    { icon: RefreshCw, title: "State Preservation", detail: "ViewModel-backed state survives screen rotation and configuration changes." },
    { icon: Palette, title: "Material 3 Design", detail: "Custom color scheme and typography reflecting Kathmandu's cultural aesthetics." },
    { icon: Layers, title: "MVVM + StateFlow", detail: "Clean separation of UI, business logic, and data with reactive state." }
  ]

  const libraries = [
    { name: 'androidx.compose', purpose: 'Declarative UI framework' },
    { name: 'material3', purpose: 'Material Design 3 components' },
    { name: 'navigation-compose', purpose: 'In-app routing' },
    { name: 'lifecycle-viewmodel-compose', purpose: 'ViewModel integration' },
    { name: 'kotlinx.coroutines', purpose: 'Async + StateFlow' }
  ]

  return (
    <div className="min-h-screen bg-canvas text-slate-300 font-sans selection:bg-accent/30">
      <SEO
        title="Kathmandu My-City — Android App | Samrat Parajuli"
        description="Android app showcasing Kathmandu's temples, shops, and destinations — Kotlin, Jetpack Compose (M3), MVVM, Navigation Compose. Built by Samrat Parajuli."
        ogUrl="https://www.samratparajuli0.com.np/projects/kathmandu"
        ogType="article"
        imageAlt="Kathmandu My-City — Android app showcasing places in Kathmandu"
        schema={[
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            'itemListElement': [
              { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.samratparajuli0.com.np/' },
              { '@type': 'ListItem', 'position': 2, 'name': 'Projects', 'item': 'https://www.samratparajuli0.com.np/projects' },
              { '@type': 'ListItem', 'position': 3, 'name': 'Kathmandu My-City App', 'item': 'https://www.samratparajuli0.com.np/projects/kathmandu' }
            ]
          },
          {
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            '@id': 'https://www.samratparajuli0.com.np/projects/kathmandu#app',
            'name': 'Kathmandu My-City App',
            'applicationCategory': 'TravelApplication',
            'operatingSystem': 'Android',
            'offers': { '@type': 'Offer', 'price': '0', 'priceCurrency': 'USD', 'availability': 'https://schema.org/InStock' },
            'description': 'Android app showcasing Kathmandu temples, shops, and destinations with adaptive layouts. Built with Kotlin, Jetpack Compose (M3), MVVM, and Navigation Compose.',
            'url': 'https://github.com/SamratVsn/Kathmandu',
            'author': { '@id': 'https://www.samratparajuli0.com.np/#person' }
          }
        ]}
      />

      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 pt-16 xl:max-w-7xl 2xl:max-w-[90rem] min-[1920px]:max-w-[100rem]">
        <CaseStudyHeader
          eyebrow="Android App"
          title={<>Kathmandu <span className="text-accent">My-City</span></>}
          summary="A Material 3 recommendation app for Kathmandu's places, temples, shops, and tourist destinations, built around Compose navigation and ViewModel state."
          actions={[
            {
              href: 'https://github.com/SamratVsn/Kathmandu',
              label: 'View Code',
              icon: Github,
              primary: true,
            },
          ]}
        />

        <div className="relative rounded-2xl overflow-hidden border border-border mb-10">
          <motion.img
                layoutId="project-image-/projects/kathmandu"
                src={KathmanduPoster}
            alt="Kathmandu My-City app poster"
            className="w-full h-64 sm:h-80 object-cover"
          
                style={{ willChange: "transform" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-canvas via-transparent to-transparent" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 xl:max-w-7xl 2xl:max-w-[90rem] min-[1920px]:max-w-[100rem]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">

            {/* Intro */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-paper tracking-[-0.03em]">
                Discover Kathmandu through curated local recommendations
              </h2>
              <p className="text-slate-400 leading-relaxed">
                Kathmandu My-City is a recommendation app that helps users discover the cultural richness and
                iconic destinations of Kathmandu, Nepal. It features an intuitive, category-based interface
                highlighting must-visit locations across special places, temples, shopping areas, and tourist
                destinations — built as the final project for Unit 4 of the Android Basics with Compose course.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                <div className="p-4 border border-slate-800/70 rounded-xl bg-surface/70 hover:border-slate-700/80 transition-colors">
                  <p className="text-accent font-semibold text-sm mb-2">Adaptive Layouts</p>
                  <p className="text-sm text-slate-400">Responsive UI components that adjust to different screen sizes and orientations.</p>
                </div>
                <div className="p-4 border border-slate-800/70 rounded-xl bg-surface/70 hover:border-slate-700/80 transition-colors">
                  <p className="text-accent font-semibold text-sm mb-2">Cultural Theming</p>
                  <p className="text-sm text-slate-400">Custom Material 3 color scheme reflecting Kathmandu's cultural aesthetics.</p>
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
                        ? 'text-accent border-accent'
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
                      This app demonstrates a complete category-based recommendation flow: users pick a category,
                      browse curated places, and open detailed views — with state preserved across configuration
                      changes through a ViewModel and a reactive Material 3 UI.
                    </p>
                    <div className="space-y-4">
                      <h3 className="text-paper font-semibold text-sm">Core Features</h3>
                      <ul className="space-y-3 text-sm text-slate-400">
                        <li className="flex items-start gap-3">
                          <span className="text-accent font-bold">→</span>
                          <span>Browse Special Places, Temples, Major Shops, and Tourist Destinations</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-accent font-bold">→</span>
                          <span>View curated recommendations with names, details, and photos</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-accent font-bold">→</span>
                          <span>Smooth transitions between category and location detail screens</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-accent font-bold">→</span>
                          <span>State preserved across screen rotation via ViewModel</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-accent font-bold">→</span>
                          <span>Full Material 3 theming with a cultural color palette</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === 'features' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {features.map((feat, i) => (
                      <div key={i} className="p-5 border border-slate-800/70 rounded-xl bg-surface/60 hover:border-slate-700/80 hover:-translate-y-0.5 transition-all duration-300">
                        <div className="flex items-start gap-3">
                          <feat.icon size={20} className="text-accent mt-0.5 shrink-0" />
                          <div>
                            <h4 className="text-paper font-semibold text-sm mb-1">{feat.title}</h4>
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
                      <h3 className="text-paper font-semibold text-sm flex items-center gap-2">
                        <LayoutGrid size={16} className="text-accent" /> Screen Flow
                      </h3>
                      <div className="space-y-3">
                        <div className="p-4 border border-slate-800/70 rounded-xl bg-surface/50 hover:border-slate-700/80 transition-colors">
                          <p className="text-sm text-paper font-semibold mb-1">Start Screen</p>
                          <p className="text-sm text-slate-400">App entry point that introduces the Kathmandu My-City experience.</p>
                        </div>
                        <div className="p-4 border border-slate-800/70 rounded-xl bg-surface/50 hover:border-slate-700/80 transition-colors">
                          <p className="text-sm text-paper font-semibold mb-1">Categories Screen</p>
                          <p className="text-sm text-slate-400">Browse Special Places, Temples, Major Shops, and Tourist Destinations.</p>
                        </div>
                        <div className="p-4 border border-slate-800/70 rounded-xl bg-surface/50 hover:border-slate-700/80 transition-colors">
                          <p className="text-sm text-paper font-semibold mb-1">Options Screen</p>
                          <p className="text-sm text-slate-400">Detailed location cards with names, descriptions, and imagery.</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-paper font-semibold text-sm flex items-center gap-2">
                        <FolderTree size={16} className="text-accent" /> Project Structure
                      </h3>
                      <div className="p-4 bg-slate-950/80 border border-slate-800/70 rounded-xl font-mono text-sm text-slate-400 leading-relaxed">
                        <p>com.example.kathmandu/</p>
                        <p className="ml-4">├── <span className="text-accent">data/</span> <span className="text-slate-400">// Local data provider (DataSource)</span></p>
                        <p className="ml-4">├── <span className="text-accent">model/</span> <span className="text-slate-400">// Places.kt, CityUiState</span></p>
                        <p className="ml-4">├── <span className="text-accent">ui/</span></p>
                        <p className="ml-8">│   ├── theme/ <span className="text-slate-400">// M3 color, type, shapes</span></p>
                        <p className="ml-8">│   ├── CityViewModel.kt <span className="text-slate-400">// Business logic & state</span></p>
                        <p className="ml-8">│   ├── CityScreen.kt <span className="text-slate-400">// Root Composable</span></p>
                        <p className="ml-8">│   └── screens/ <span className="text-slate-400">// Start, Categories, Options</span></p>
                        <p className="ml-4">└── MainActivity.kt <span className="text-slate-400">// App entry point</span></p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-paper font-semibold text-sm flex items-center gap-2">
                        <Layers size={16} className="text-accent" /> Design Principles
                      </h3>
                      <div className="space-y-3">
                        <div className="p-4 border border-slate-800/70 rounded-xl bg-surface/50 hover:border-slate-700/80 transition-colors">
                          <p className="text-sm text-paper font-semibold mb-2">MVVM + Reactive State</p>
                          <p className="text-sm text-slate-400">CityViewModel exposes UI state via StateFlow, keeping screens dumb and data-driven.</p>
                        </div>
                        <div className="p-4 border border-slate-800/70 rounded-xl bg-surface/50 hover:border-slate-700/80 transition-colors">
                          <p className="text-sm text-paper font-semibold mb-2">State Preservation</p>
                          <p className="text-sm text-slate-400">ViewModel-scoped state survives rotation, keeping navigation and selections intact.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'system' && (
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-paper font-semibold text-sm flex items-center gap-2">
                        <Cpu size={16} className="text-accent" /> Build Environment
                      </h3>
                      <div className="space-y-3">
                        {[
                          { label: 'Language', value: 'Kotlin 1.9.0' },
                          { label: 'UI Framework', value: 'Jetpack Compose (Material 3)' },
                          { label: 'Architecture', value: 'MVVM (Model-View-ViewModel)' },
                          { label: 'Navigation', value: 'Jetpack Navigation Compose' },
                          { label: 'State Management', value: 'ViewModel & StateFlow' },
                          { label: 'Min API', value: 'API 24+ (Android 7.0)' },
                          { label: 'Course', value: 'Android Basics with Compose — Unit 4' }
                        ].map((item, i) => (
                          <div key={i} className="flex justify-between p-3 border border-slate-800 rounded-lg">
                            <span className="text-slate-400 text-sm">{item.label}</span>
                            <span className="text-slate-300 text-sm font-medium">{item.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-paper font-semibold text-sm">Libraries Used</h3>
                      <div className="space-y-2">
                        {libraries.map((lib, i) => (
                          <div key={i} className="flex justify-between gap-4 p-3 border border-slate-800 rounded-lg">
                            <span className="text-slate-300 text-sm font-mono">{lib.name}</span>
                            <span className="text-slate-400 text-sm text-right">{lib.purpose}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 bg-accent-muted border border-accent-border rounded-lg">
                      <p className="text-terra font-semibold text-sm mb-2">Roadmap</p>
                      <p className="text-sm text-sand/80">
                        Real-time place photos, Google Maps integration, user ratings and reviews, a favorites
                        list, and expanded coverage across Nepal's cities are natural next steps.
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
            <div className="p-6 border border-slate-800/70 rounded-xl bg-surface/70">
              <h3 className="text-sm font-semibold text-paper mb-6">Specifications</h3>
              <div className="space-y-4">
                {specs.map((spec, i) => (
                  <div key={i} className="border-b border-slate-800 pb-4 last:border-0 last:pb-0">
                    <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">{spec.label}</p>
                    <p className="text-sm text-slate-300 font-medium">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Components */}
            <div className="p-6 border border-slate-800/70 rounded-xl bg-surface/70">
              <h3 className="text-sm font-semibold text-paper mb-4">Core Components</h3>
              <div className="space-y-2">
                {[
                  'Start / Categories / Options Screens',
                  'CityViewModel',
                  'Places DataSource',
                  'CityUiState + Place Models',
                  'Material 3 Theme',
                  'Navigation Graph'
                ].map((comp, i) => (
                  <div key={i} className="text-sm text-slate-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {comp}
                  </div>
                ))}
              </div>
            </div>

            {/* Stack */}
            <div className="p-6 border border-slate-800/70 rounded-xl bg-surface/70">
              <h3 className="text-sm font-semibold text-paper mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {['Kotlin', 'Jetpack Compose', 'Material 3', 'Navigation Compose', 'ViewModel', 'StateFlow', 'MVVM', 'Adaptive Layouts'].map((tech, i) => (
                  <span key={i} className="px-2.5 py-1 text-xs font-medium text-slate-300 bg-slate-800/60 border border-slate-700 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Repo Link */}
            <a
              href="https://github.com/SamratVsn/Kathmandu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 border border-slate-800/70 rounded-xl bg-surface/70 hover:border-accent-border hover: transition-all group"
            >
              <span className="text-sm text-slate-300 font-medium">View full README</span>
              <ArrowUpRight size={16} className="text-slate-400 group-hover:text-accent-soft transition-colors" />
            </a>

          </div>
        </div>
      </div>

      {/* Next chapter */}
      <div className="max-w-6xl mx-auto px-6 pb-16 xl:max-w-7xl 2xl:max-w-[90rem] min-[1920px]:max-w-[100rem]">
        <Link
          to="/projects/avalokan"
          className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-accent-border bg-surface/70 p-5 sm:p-6 transition-all hover:border-accent-border "
        >
          <div>
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent-soft mb-2">
              Next chapter · New
            </p>
            <h3 className="text-paper font-semibold text-lg tracking-tight group-hover:text-accent-soft transition-colors">
              Avalokan
            </h3>
            <p className="text-sm text-slate-400 mt-1 max-w-xl">
              The heritage thread this app started, grown into a full Firestore-backed Android
              explorer for Nepal — with stories, events, offline caching, and an optional account.
            </p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-ink transition-transform group-hover:translate-x-0.5" style={{ backgroundColor: 'var(--p-accent)' }}>
            Explore Avalokan <ArrowUpRight size={15} />
          </span>
        </Link>
      </div>

    </div>
  )
}

export default Kathmandu
