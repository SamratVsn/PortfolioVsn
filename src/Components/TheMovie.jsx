import { useState } from 'react'
import {
  Github,
  ArrowUpRight,
  Search,
  Film,
  User,
  Image,
  Layers,
  FolderTree,
  Cpu,
  Sparkles,
  Heart,
  ShieldCheck,
  WifiOff
} from 'lucide-react'
import SEO from './SEO'
import CaseStudyHeader from './CaseStudyHeader'
import Lightbox from './Lightbox'
import MovieDetails from '../assets/TheMovie/Details.png'
import MoviePoster from "../assets/TheMovie/MoviePoster.webp";
import { motion } from 'framer-motion';


function TheMovie() {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedImage, setSelectedImage] = useState(null)

  const specs = [
    { label: "Language", value: "Kotlin 2.2.10" },
    { label: "Architecture", value: "MVVM + Repository" },
    { label: "Interface", value: "Jetpack Compose (M3)" },
    { label: "Networking", value: "Retrofit & OkHttp" },
    { label: "Auth", value: "Firebase Email/Password" },
    { label: "Caching", value: "OkHttp disk cache + in-memory" },
    { label: "Storage", value: "Jetpack DataStore" },
    { label: "Min / Target SDK", value: "API 24 / 37" }
  ]

  const features = [
    { icon: Film, title: "Browse & Discover", detail: "Popular, Now Playing, and Top Rated sections, each expandable into a single-category grid with infinite scroll." },
    { icon: Sparkles, title: "Personalized Recommendations", detail: "A 'Because you like X' row built from your favorite genre." },
    { icon: Search, title: "Debounced Live Search", detail: "Type-ahead search across the TMDB database with debounce and paginated results." },
    { icon: Image, title: "Movie Details", detail: "Full movie info with pull-to-refresh, offline fallback, and a favorite heart toggle with snackbar confirmations." },
    { icon: Heart, title: "Favorites / Watchlist", detail: "A persistent Favorites tab that keeps saved movies across restarts." },
    { icon: ShieldCheck, title: "Firebase Auth", detail: "Email/Password sign-up and login — your signup name becomes your in-app display name." },
    { icon: User, title: "Profile & Settings", detail: "Profile overview with Settings in the top bar; edit name, bio, and genre picked from the official TMDB list." },
    { icon: WifiOff, title: "Offline Support", detail: "HTTP disk cache plus in-memory cache with stale fallback, pull-to-refresh, and specific error messages with retry." }
  ]

  const screenshots = [
    { src: MovieDetails, label: 'Movie Details', desc: 'Backdrops, ratings, and the full plot overview with pull-to-refresh and a favorite toggle.' },
    { src: MoviePoster, label: 'Poster', desc: 'Movie poster with title, rating, and release date.' }
  ]

  const libraries = [
    { name: 'androidx.compose', purpose: 'Declarative UI framework' },
    { name: 'androidx.navigation', purpose: 'In-app routing' },
    { name: 'com.squareup.retrofit2', purpose: 'REST API requests' },
    { name: 'io.coil-kt:coil-compose', purpose: 'Async image loading' },
    { name: 'androidx.datastore', purpose: 'Reactive local persistence' },
    { name: 'com.google.firebase:firebase-auth', purpose: 'Email/Password authentication' },
    { name: 'kotlinx.serialization', purpose: 'Type-safe JSON parsing' },
    { name: 'okhttp3:logging-interceptor', purpose: 'Network debugging' }
  ]

  return (
    <div className="min-h-screen bg-canvas text-slate-300 font-sans selection:bg-accent/30">
      <SEO
        title="The Movie App — Android TMDB Client | Samrat Parajuli"
        description="Android movie app using the TMDB API — debounced search, watchlist, Firebase auth, and offline caching. Built with Kotlin & Jetpack Compose by Samrat Parajuli."
        ogUrl="https://www.samratparajuli0.com.np/projects/themovie"
        ogType="article"
        imageAlt="The Movie App — Android movie browser built with Kotlin and Jetpack Compose"
        schema={[
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            'itemListElement': [
              { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.samratparajuli0.com.np/' },
              { '@type': 'ListItem', 'position': 2, 'name': 'Projects', 'item': 'https://www.samratparajuli0.com.np/projects' },
              { '@type': 'ListItem', 'position': 3, 'name': 'The Movie App', 'item': 'https://www.samratparajuli0.com.np/projects/themovie' }
            ]
          },
          {
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            '@id': 'https://www.samratparajuli0.com.np/projects/themovie#app',
            'name': 'The Movie App',
            'applicationCategory': 'EntertainmentApplication',
            'operatingSystem': 'Android',
            'offers': { '@type': 'Offer', 'price': '0', 'priceCurrency': 'USD', 'availability': 'https://schema.org/InStock' },
            'description': 'Native Android movie browser using the TMDB API with debounced search, watchlist, Firebase auth, and offline caching. Built with Kotlin & Jetpack Compose.',
            'url': 'https://github.com/SamratVsn/TheMovie',
            'author': { '@id': 'https://www.samratparajuli0.com.np/#person' }
          }
        ]}
      />

      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 py-16 xl:max-w-7xl 2xl:max-w-[90rem] min-[1920px]:max-w-[100rem]">
        <CaseStudyHeader
          eyebrow="Android App"
          title={<>The <span className="text-accent">Movie</span> App</>}
          summary="A Jetpack Compose client for the TMDB API: browse, debounced search, favorites, Firebase auth, and offline caching."
          actions={[
            {
              href: 'https://github.com/SamratVsn/TheMovie',
              label: 'View Code',
              icon: Github,
              primary: true,
            },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">

            {/* Hero Image */}
            <div className="rounded-xl overflow-hidden border border-slate-800/70 bg-slate-900">
              <button
                type="button"
                onClick={() => setSelectedImage({ src: MoviePoster, label: 'The Movie App', desc: 'Native Android movie browser built with Kotlin & Jetpack Compose.' })}
                aria-label="Open The Movie App poster"
                className="block w-full cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent-soft"
              >
                <motion.img
                  layoutId="project-image-/projects/themovie"
                  src={MoviePoster}
                  alt="The Movie App poster"
                  className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  style={{ willChange: "transform" }}
                />
              </button>
            </div>

            {/* Intro */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-paper tracking-[-0.03em]">
                Native movie browser powered by the TMDB API
              </h2>
              <p className="text-slate-400 leading-relaxed">
                The Movie App is a modern Android application built with Jetpack Compose that leverages the
                TMDB API to showcase popular, now playing, and top-rated movies. It adds Firebase email/password
                authentication, a persistent Favorites watchlist, personalized recommendations, and full offline
                support on top of a clean Material 3 design with DataStore-backed preferences.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                <div className="p-4 border border-slate-800/70 rounded-xl bg-surface/70 hover:border-slate-700/80 transition-colors">
                  <p className="text-accent font-semibold text-sm mb-2">Single Activity</p>
                  <p className="text-sm text-slate-400">All navigation handled within one MainActivity using Navigation Compose.</p>
                </div>
                <div className="p-4 border border-slate-800/70 rounded-xl bg-surface/70 hover:border-slate-700/80 transition-colors">
                  <p className="text-accent font-semibold text-sm mb-2">Manual DI</p>
                  <p className="text-sm text-slate-400">Repositories (Movie, Preferences, Watchlist, Auth) and services are provisioned by MovieApplication and injected into ViewModels via factories.</p>
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
                      This app demonstrates a full client-server Android workflow: fetching real movie data from
                      the TMDB REST API, rendering it with a reactive Compose UI, and persisting user preferences
                      with DataStore — all wrapped in a clean MVVM architecture with type-safe navigation.
                    </p>
                    <div className="space-y-4">
                      <h3 className="text-paper font-semibold text-sm">Core Features</h3>
                      <ul className="space-y-3 text-sm text-slate-400">
                        <li className="flex items-start gap-3">
                          <span className="text-accent font-bold">→</span>
                          <span>Browse Popular, Now Playing, and Top Rated sections, plus single-category grids with infinite scroll</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-accent font-bold">→</span>
                          <span>"Because you like X" recommendations derived from your favorite genre</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-accent font-bold">→</span>
                          <span>Debounced live search with pagination</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-accent font-bold">→</span>
                          <span>Movie details with pull-to-refresh, offline fallback, and a favorite heart toggle with snackbar confirmations</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-accent font-bold">→</span>
                          <span>Persistent Favorites/Watchlist tab</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-accent font-bold">→</span>
                          <span>Firebase Email/Password auth — your signup name becomes your in-app display name</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-accent font-bold">→</span>
                          <span>Profile overview with Settings in the top bar; Settings edits name, bio, and genre picked from the official TMDB list</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-accent font-bold">→</span>
                          <span>Offline support (HTTP disk cache + in-memory cache with stale fallback), pull-to-refresh, and specific error messages with retry</span>
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
                        <Layers size={16} className="text-accent" /> Layered Architecture
                      </h3>
                      <div className="space-y-3">
                        <div className="p-4 border border-slate-800/70 rounded-xl bg-surface/50 hover:border-slate-700/80 transition-colors">
                          <p className="text-sm text-paper font-semibold mb-1">Presentation Layer</p>
                          <p className="text-sm text-slate-400">Jetpack Compose screens and ViewModels manage UI state and user interactions.</p>
                        </div>
                        <div className="p-4 border border-slate-800/70 rounded-xl bg-surface/50 hover:border-slate-700/80 transition-colors">
                          <p className="text-sm text-paper font-semibold mb-1">Data Layer</p>
                          <p className="text-sm text-slate-400">Repositories and DataStore handle API fetching and local preference persistence.</p>
                        </div>
                        <div className="p-4 border border-slate-800/70 rounded-xl bg-surface/50 hover:border-slate-700/80 transition-colors">
                          <p className="text-sm text-paper font-semibold mb-1">Network Layer</p>
                          <p className="text-sm text-slate-400">Retrofit service and API client configuration with Kotlinx Serialization DTOs.</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-paper font-semibold text-sm flex items-center gap-2">
                        <FolderTree size={16} className="text-accent" /> Project Structure
                      </h3>
                      <div className="p-4 bg-slate-950/80 border border-slate-800/70 rounded-xl font-mono text-sm text-slate-400 leading-relaxed">
                        <p>app/</p>
                        <p className="ml-4">├── <span className="text-accent">data/</span></p>
                        <p className="ml-8">│   ├── auth/ <span className="text-slate-400">// AuthRepository, AuthState (Firebase session)</span></p>
                        <p className="ml-8">│   ├── MovieRepository.kt <span className="text-slate-400">// TMDB access + in-memory cache</span></p>
                        <p className="ml-8">│   ├── PreferencesRepository.kt <span className="text-slate-400">// Theme, profile (DataStore)</span></p>
                        <p className="ml-8">│   ├── WatchlistRepository.kt <span className="text-slate-400">// Favorites (DataStore JSON)</span></p>
                        <p className="ml-8">│   ├── MovieErrors.kt <span className="text-slate-400">// HTTP errors → friendly messages</span></p>
                        <p className="ml-8">│   └── UserPreferences.kt <span className="text-slate-400">// ThemeMode, categories, genres</span></p>
                        <p className="ml-4">├── <span className="text-accent">model/</span> <span className="text-slate-400">// Movie / MovieDetail / Genre DTOs</span></p>
                        <p className="ml-4">├── <span className="text-accent">network/</span> <span className="text-slate-400">// Retrofit service & OkHttp client</span></p>
                        <p className="ml-4">├── <span className="text-accent">ui/</span></p>
                        <p className="ml-8">│   ├── components/ <span className="text-slate-400">// Reusable widgets</span></p>
                        <p className="ml-8">│   ├── detail/ <span className="text-slate-400">// Movie detail + favorite toggle</span></p>
                        <p className="ml-8">│   ├── home/ <span className="text-slate-400">// Home + recommendations</span></p>
                        <p className="ml-8">│   ├── profile/ <span className="text-slate-400">// Profile + Auth (login/signup)</span></p>
                        <p className="ml-8">│   ├── search/ <span className="text-slate-400">// Debounced search + pagination</span></p>
                        <p className="ml-8">│   ├── settings/ <span className="text-slate-400">// Profile editing, appearance</span></p>
                        <p className="ml-8">│   ├── watchlist/ <span className="text-slate-400">// Favorites screen</span></p>
                        <p className="ml-8">│   ├── theme/ <span className="text-slate-400">// Color, Type, Theme</span></p>
                        <p className="ml-8">│   └── NavGraph.kt <span className="text-slate-400">// All routes + bottom bar</span></p>
                        <p className="ml-4">├── MainActivity.kt <span className="text-slate-400">// Entry point</span></p>
                        <p className="ml-4">└── MovieApplication.kt <span className="text-slate-400">// DI provisioning + network init</span></p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-paper font-semibold text-sm">Design Principles</h3>
                      <div className="space-y-3">
                        <div className="p-4 border border-slate-800/70 rounded-xl bg-surface/50 hover:border-slate-700/80 transition-colors">
                          <p className="text-sm text-paper font-semibold mb-2">MVVM + Repository Pattern</p>
                          <p className="text-sm text-slate-400">UI, data, and network concerns stay cleanly separated for maintainability and testing.</p>
                        </div>
                        <div className="p-4 border border-slate-800/70 rounded-xl bg-surface/50 hover:border-slate-700/80 transition-colors">
                          <p className="text-sm text-paper font-semibold mb-2">Single Activity Architecture</p>
                          <p className="text-sm text-slate-400">All screens flow through one MainActivity with Navigation Compose handling transitions.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'system' && (
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-paper font-semibold text-sm flex items-center gap-2">
                        <Cpu size={16} className="text-accent" /> Runtime Environment
                      </h3>
                      <div className="space-y-3">
                        {[
                          { label: 'Minimum SDK', value: 'API 24 (Android 7.0)' },
                          { label: 'Target / Compile SDK', value: 'API 37 (Android 17)' },
                          { label: 'Kotlin Version', value: '2.2.10' },
                          { label: 'Build Tool', value: 'Gradle 9.3.1 (AGP)' },
                          { label: 'Serialization', value: 'Kotlinx Serialization' }
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
                        Cloud-synced watchlist via Firestore, YouTube trailer embedding, Paging 3 with Room-based
                        caching, Google Sign-In and email verification, and push notifications are planned for
                        future releases.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Screenshots */}
            <div className="space-y-6">
              <h3 className="text-sm font-semibold text-accent uppercase tracking-widest">Screenshots</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {screenshots.map((s, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setSelectedImage(s)}
                    className="group relative border border-slate-800/70 bg-slate-900 rounded-xl overflow-hidden cursor-pointer text-left hover:border-slate-700/80 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-soft"
                  >
                    <img
                      src={s.src}
                      loading="lazy"
                      decoding="async"
                      alt={s.label}
                      className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                    <div className="absolute bottom-0 inset-x-0 p-4">
                      <p className="text-sm font-semibold text-slate-100 group-hover:text-accent-soft transition-colors">{s.label}</p>
                      <p className="text-xs text-slate-400 mt-1">{s.desc}</p>
                    </div>
                  </button>
                ))}
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
                  'Home (Popular / Now Playing / Top Rated)',
                  'Search Screen',
                  'Movie Details View',
                  'Favorites Screen',
                  'Auth Screens (Login / Signup)',
                  'Settings Screen',
                  'Profile Screen',
                  'WatchlistRepository',
                  'AuthRepository',
                  'Retrofit Service + DTOs',
                  'DataStore Preferences'
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
                {['Kotlin', 'Jetpack Compose', 'Material 3', 'Retrofit', 'OkHttp', 'Firebase Auth', 'Coil', 'DataStore', 'Navigation Compose', 'ViewModel', 'Coroutines & Flow', 'Kotlinx Serialization'].map((tech, i) => (
                  <span key={i} className="px-2.5 py-1 text-xs font-medium text-slate-300 bg-slate-800/60 border border-slate-700 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Repo Link */}
            <a
              href="https://github.com/SamratVsn/TheMovie"
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

      {/* Image viewer */}
      {selectedImage && (
        <Lightbox
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  )
}

export default TheMovie
