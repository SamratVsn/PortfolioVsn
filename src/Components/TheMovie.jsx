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
  WifiOff,
} from 'lucide-react'
import SEO from './SEO'
import Lightbox from './Lightbox'
import CaseStudyLayout from './case-study/CaseStudyLayout'
import CaseStudyTabs from './case-study/CaseStudyTabs'
import CaseStudySection from './case-study/CaseStudySection'
import ScreenshotGallery from './case-study/ScreenshotGallery'
import DecisionList from './case-study/DecisionList'
import DataModelTable from './case-study/DataModelTable'
import { AsideCard, SpecList, BulletList, TagList } from './case-study/CaseStudyAside'
import { getProject } from '../data/projects'
import Card from './ui/Card'
import MovieDetails from '../assets/TheMovie/Details.png'
import MoviePoster from '../assets/TheMovie/MoviePoster.webp'

const REPO_URL = 'https://github.com/SamratVsn/TheMovie'
const movie = getProject('themovie')

const SPECS = [
  { label: 'Language', value: 'Kotlin 2.2.10' },
  { label: 'Architecture', value: 'MVVM + Repository' },
  { label: 'Interface', value: 'Jetpack Compose (M3)' },
  { label: 'Networking', value: 'Retrofit & OkHttp' },
  { label: 'Auth', value: 'Firebase Email/Password' },
  { label: 'Caching', value: 'OkHttp disk cache + in-memory' },
  { label: 'Storage', value: 'Jetpack DataStore' },
  { label: 'Min / Target SDK', value: 'API 24 / 37' },
]

const FEATURES = [
  { icon: Film, title: 'Browse & Discover', detail: 'Popular, Now Playing, and Top Rated sections, each expandable into a single-category grid with infinite scroll.' },
  { icon: Sparkles, title: 'Personalized Recommendations', detail: "A 'Because you like X' row built from your favorite genre." },
  { icon: Search, title: 'Debounced Live Search', detail: 'Type-ahead search across the TMDB database with debounce and paginated results.' },
  { icon: Image, title: 'Movie Details', detail: 'Full movie info with pull-to-refresh, offline fallback, and a favorite heart toggle with snackbar confirmations.' },
  { icon: Heart, title: 'Favorites / Watchlist', detail: 'A persistent Favorites tab that keeps saved movies across restarts.' },
  { icon: ShieldCheck, title: 'Firebase Auth', detail: 'Email/Password sign-up and login — your signup name becomes your in-app display name.' },
  { icon: User, title: 'Profile & Settings', detail: 'Profile overview with Settings in the top bar; edit name, bio, and genre picked from the official TMDB list.' },
  { icon: WifiOff, title: 'Offline Support', detail: 'HTTP disk cache plus in-memory cache with stale fallback, pull-to-refresh, and specific error messages with retry.' },
]

const SCREENSHOTS = [
  { src: MovieDetails, label: 'Movie Details', desc: 'Backdrops, ratings, and the full plot overview with pull-to-refresh and a favorite toggle.' },
  { src: MoviePoster, label: 'Poster', desc: 'Movie poster with title, rating, and release date.' },
]

const LIBRARIES = [
  { name: 'androidx.compose', purpose: 'Declarative UI framework' },
  { name: 'androidx.navigation', purpose: 'In-app routing' },
  { name: 'com.squareup.retrofit2', purpose: 'REST API requests' },
  { name: 'io.coil-kt:coil-compose', purpose: 'Async image loading' },
  { name: 'androidx.datastore', purpose: 'Reactive local persistence' },
  { name: 'com.google.firebase:firebase-auth', purpose: 'Email/Password authentication' },
  { name: 'kotlinx.serialization', purpose: 'Type-safe JSON parsing' },
  { name: 'okhttp3:logging-interceptor', purpose: 'Network debugging' },
]

const COMPONENTS = [
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
  'DataStore Preferences',
]

const TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'features', label: 'Features' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'system', label: 'System' },
]

function TheMovie() {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <>
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
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.samratparajuli0.com.np/' },
              { '@type': 'ListItem', position: 2, name: 'Projects', item: 'https://www.samratparajuli0.com.np/projects' },
              { '@type': 'ListItem', position: 3, name: 'The Movie App', item: 'https://www.samratparajuli0.com.np/projects/themovie' },
            ],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            '@id': 'https://www.samratparajuli0.com.np/projects/themovie#app',
            name: 'The Movie App',
            applicationCategory: 'EntertainmentApplication',
            operatingSystem: 'Android',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
            description: 'Native Android movie browser using the TMDB API with debounced search, watchlist, Firebase auth, and offline caching. Built with Kotlin & Jetpack Compose.',
            url: REPO_URL,
            author: { '@id': 'https://www.samratparajuli0.com.np/#person' },
          },
        ]}
      />

      <CaseStudyLayout
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Projects', to: '/projects' },
          { label: 'The Movie App' },
        ]}
        eyebrow="Android App"
        title="The Movie App"
        summary="A Jetpack Compose client for the TMDB API: browse, debounced search, favorites, Firebase auth, and offline caching."
        actions={[{ href: REPO_URL, label: 'View Code', icon: Github, primary: true }]}
        aside={
          <>
            <AsideCard title="Specifications">
              <SpecList items={SPECS} />
            </AsideCard>

            <AsideCard title="Core Components">
              <BulletList items={COMPONENTS} />
            </AsideCard>

            <AsideCard title="Tech Stack">
              <TagList
                items={[
                  'Kotlin',
                  'Jetpack Compose',
                  'Material 3',
                  'Retrofit',
                  'OkHttp',
                  'Firebase Auth',
                  'Coil',
                  'DataStore',
                  'Navigation Compose',
                  'ViewModel',
                  'Coroutines & Flow',
                  'Kotlinx Serialization',
                ]}
              />
            </AsideCard>

            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-xl border border-border bg-surface p-4 transition-colors hover:border-accent-border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-soft"
            >
              <span className="text-small font-medium text-slate-300">View full README</span>
              <ArrowUpRight size={16} aria-hidden="true" className="text-slate-400 transition-colors group-hover:text-accent-soft" />
            </a>
          </>
        }
      >
        <div className="overflow-hidden rounded-xl border border-border bg-surface">
          <button
            type="button"
            onClick={() =>
              setSelectedImage({
                src: MoviePoster,
                label: 'The Movie App',
                desc: 'Native Android movie browser built with Kotlin & Jetpack Compose.',
              })
            }
            aria-label="Open The Movie App poster"
            className="block w-full cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent-soft"
          >
            <img
              src={MoviePoster}
              alt="The Movie App poster"
              className="h-auto w-full opacity-90 transition-opacity hover:opacity-100"
              loading="lazy"
            />
          </button>
        </div>

        <CaseStudySection title="Native movie browser powered by the TMDB API">
          <p className="text-body text-slate-400">
            The Movie App is a modern Android application built with Jetpack Compose that leverages the
            TMDB API to showcase popular, now playing, and top-rated movies. It adds Firebase email/password
            authentication, a persistent Favorites watchlist, personalized recommendations, and cached
            reads with a stale fallback on top of a clean Material 3 design with DataStore-backed preferences.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Card variant="subtle" padding="sm">
              <p className="mb-2 text-small font-semibold text-accent-text">Single Activity</p>
              <p className="text-small text-slate-400">All navigation handled within one MainActivity using Navigation Compose.</p>
            </Card>
            <Card variant="subtle" padding="sm">
              <p className="mb-2 text-small font-semibold text-accent-text">Manual DI</p>
              <p className="text-small text-slate-400">Repositories (Movie, Preferences, Watchlist, Auth) and services are provisioned by MovieApplication and injected into ViewModels via factories.</p>
            </Card>
          </div>
        </CaseStudySection>

        <div>
          <CaseStudyTabs tabs={TABS} active={activeTab} onChange={setActiveTab} />

          <div className="min-h-[400px]">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <p className="text-body text-slate-400">
                  This app demonstrates a full client-server Android workflow: fetching real movie data from
                  the TMDB REST API, rendering it with a reactive Compose UI, and persisting user preferences
                  with DataStore — all wrapped in a clean MVVM architecture with type-safe navigation.
                </p>
                <div className="space-y-4">
                  <h3 className="text-h4 font-semibold text-paper">Core Features</h3>
                  <BulletList
                    items={[
                      'Browse Popular, Now Playing, and Top Rated sections, plus single-category grids with infinite scroll',
                      '"Because you like X" recommendations derived from your favorite genre',
                      'Debounced live search with pagination',
                      'Movie details with pull-to-refresh, offline fallback, and a favorite heart toggle with snackbar confirmations',
                      'Persistent Favorites/Watchlist tab',
                      'Firebase Email/Password auth — your signup name becomes your in-app display name',
                      'Profile overview with Settings in the top bar; Settings edits name, bio, and genre picked from the official TMDB list',
                      'Offline support (HTTP disk cache + in-memory cache with stale fallback), pull-to-refresh, and specific error messages with retry',
                    ]}
                  />
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {FEATURES.map((feature) => (
                  <Card key={feature.title} interactive>
                    <div className="flex items-start gap-3">
                      <feature.icon size={20} aria-hidden="true" className="mt-0.5 shrink-0 text-accent-text" />
                      <div>
                        <h4 className="mb-1 text-h4 font-semibold text-paper">{feature.title}</h4>
                        <p className="text-small text-slate-400">{feature.detail}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}

            {activeTab === 'architecture' && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="flex items-center gap-2 text-h4 font-semibold text-paper">
                    <Layers size={16} aria-hidden="true" className="text-accent-text" /> Layered Architecture
                  </h3>
                  <div className="space-y-3">
                    <Card variant="subtle" padding="sm">
                      <p className="mb-1 text-small font-semibold text-paper">Presentation Layer</p>
                      <p className="text-small text-slate-400">Jetpack Compose screens and ViewModels manage UI state and user interactions.</p>
                    </Card>
                    <Card variant="subtle" padding="sm">
                      <p className="mb-1 text-small font-semibold text-paper">Data Layer</p>
                      <p className="text-small text-slate-400">Repositories and DataStore handle API fetching and local preference persistence.</p>
                    </Card>
                    <Card variant="subtle" padding="sm">
                      <p className="mb-1 text-small font-semibold text-paper">Network Layer</p>
                      <p className="text-small text-slate-400">Retrofit service and API client configuration with Kotlinx Serialization DTOs.</p>
                    </Card>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="flex items-center gap-2 text-h4 font-semibold text-paper">
                    <FolderTree size={16} aria-hidden="true" className="text-accent-text" /> Project Structure
                  </h3>
                  <div className="rounded-xl border border-border bg-canvas p-4 font-mono text-small leading-relaxed text-slate-400">
                    <p>app/</p>
                    <p className="ml-4">├── <span className="text-accent-text">data/</span></p>
                    <p className="ml-8">│   ├── auth/ <span className="text-slate-400">// AuthRepository, AuthState (Firebase session)</span></p>
                    <p className="ml-8">│   ├── MovieRepository.kt <span className="text-slate-400">// TMDB access + in-memory cache</span></p>
                    <p className="ml-8">│   ├── PreferencesRepository.kt <span className="text-slate-400">// Theme, profile (DataStore)</span></p>
                    <p className="ml-8">│   ├── WatchlistRepository.kt <span className="text-slate-400">// Favorites (DataStore JSON)</span></p>
                    <p className="ml-8">│   ├── MovieErrors.kt <span className="text-slate-400">// HTTP errors → friendly messages</span></p>
                    <p className="ml-8">│   └── UserPreferences.kt <span className="text-slate-400">// ThemeMode, categories, genres</span></p>
                    <p className="ml-4">├── <span className="text-accent-text">model/</span> <span className="text-slate-400">// Movie / MovieDetail / Genre DTOs</span></p>
                    <p className="ml-4">├── <span className="text-accent-text">network/</span> <span className="text-slate-400">// Retrofit service & OkHttp client</span></p>
                    <p className="ml-4">├── <span className="text-accent-text">ui/</span></p>
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
                  <h3 className="text-h4 font-semibold text-paper">Design Principles</h3>
                  <div className="space-y-3">
                    <Card variant="subtle" padding="sm">
                      <p className="mb-2 text-small font-semibold text-paper">MVVM + Repository Pattern</p>
                      <p className="text-small text-slate-400">UI, data, and network concerns stay cleanly separated for maintainability and testing.</p>
                    </Card>
                    <Card variant="subtle" padding="sm">
                      <p className="mb-2 text-small font-semibold text-paper">Single Activity Architecture</p>
                      <p className="text-small text-slate-400">All screens flow through one MainActivity with Navigation Compose handling transitions.</p>
                    </Card>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'system' && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="flex items-center gap-2 text-h4 font-semibold text-paper">
                    <Cpu size={16} aria-hidden="true" className="text-accent-text" /> Runtime Environment
                  </h3>
                  <dl className="space-y-3">
                    {[
                      { label: 'Minimum SDK', value: 'API 24 (Android 7.0)' },
                      { label: 'Target / Compile SDK', value: 'API 37 (Android 17)' },
                      { label: 'Kotlin Version', value: '2.2.10' },
                      { label: 'Build Tool', value: 'Gradle 9.3.1 (AGP)' },
                      { label: 'Serialization', value: 'Kotlinx Serialization' },
                    ].map((item) => (
                      <div key={item.label} className="flex justify-between gap-4 rounded-xl border border-border p-3">
                        <dt className="text-small text-slate-400">{item.label}</dt>
                        <dd className="text-right text-small font-medium text-slate-300">{item.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="space-y-4">
                  <h3 className="text-h4 font-semibold text-paper">Libraries Used</h3>
                  <dl className="space-y-2">
                    {LIBRARIES.map((lib) => (
                      <div key={lib.name} className="flex justify-between gap-4 rounded-xl border border-border p-3">
                        <dt className="font-mono text-small text-slate-300">{lib.name}</dt>
                        <dd className="text-right text-small text-slate-400">{lib.purpose}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="rounded-xl border border-accent-border bg-accent-muted p-4">
                  <p className="mb-2 text-small font-semibold text-terra">Roadmap</p>
                  <p className="text-small text-sand/80">
                    Cloud-synced watchlist via Firestore, YouTube trailer embedding, Paging 3 with Room-based
                    caching, Google Sign-In and email verification, and push notifications are planned for
                    future releases.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <CaseStudySection
          eyebrow="Engineering decisions"
          title="Caching, identity, and where state lives"
        >
          <p className="text-body text-slate-400">
            The Movie App is a client for someone else's API. Its useful
            engineering is in how it reduces repeated network work, handles a
            failed request, and keeps a small watchlist without adding a server.
          </p>
          <DecisionList decisions={movie?.decisions} />
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Data model"
          title="TMDB responses and local profile state"
        >
          <p className="text-body text-slate-400">
            The DTOs follow TMDB's response shape, while the watchlist and profile
            preferences are stored locally. Auth state is a separate reactive
            stream from Firebase.
          </p>
          <DataModelTable
            entities={movie?.dataModel}
            caption="The Movie App DTOs, watchlist, auth state, and preferences"
          />
        </CaseStudySection>

        <ScreenshotGallery screenshots={SCREENSHOTS} onSelect={setSelectedImage} columns={2} />
      </CaseStudyLayout>

      {selectedImage && (
        <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </>
  )
}

export default TheMovie
