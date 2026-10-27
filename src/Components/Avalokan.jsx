import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  Bookmark,
  BookOpen,
  CalendarDays,
  Check,
  Cloud,
  Compass,
  Database,
  Github,
  Layers,
  Lock,
  Mountain,
  Palette,
  Play,
  Download,
  ShieldCheck,
  Smartphone,
  Sparkles,
  User,
  Video,
  WifiOff,
  X,
} from 'lucide-react'
import SEO from './SEO'
import BottomNav from './BottomNav'

import AvalokanHome from '../assets/Avalokan/home.png'
import AvalokanDiscover from '../assets/Avalokan/discover.png'
import AvalokanPlace from '../assets/Avalokan/place-detail.png'
import AvalokanEvents from '../assets/Avalokan/events.png'
import LaunchPoster from '../assets/Avalokan/launch-poster.jpg'

const REPO_URL = 'https://github.com/SamratVsn/Avalokan'
const APK_URL = 'https://github.com/SamratVsn/Avalokan/releases/download/v1.0.0/avalokan1.0.0.apk'
const RELEASE_URL = 'https://github.com/SamratVsn/Avalokan/releases/tag/v1.0.0'
const FILM_URL = '/media/avalokan-launch.mp4'
const SITE = 'https://www.samratparajuli0.com.np'

/* Heritage palette pulled from the app's own design system */
const SAGE = '#8FBFA4'
const TERRA = '#D98964'
const SAND = '#E8D7B7'

const specs = [
  { label: 'Platform', value: 'Android · min SDK 24' },
  { label: 'Language', value: 'Kotlin 2.2.10' },
  { label: 'UI', value: 'Jetpack Compose + Material 3' },
  { label: 'Architecture', value: 'MVVM + Repository (offline-first)' },
  { label: 'Dependency injection', value: 'Hilt 2.60.1 (KSP)' },
  { label: 'Local storage', value: 'Room 3 + DataStore' },
  { label: 'Cloud', value: 'Firebase Auth · Firestore · Analytics' },
  { label: 'Auth UX', value: 'Credential Manager + Google ID' },
  { label: 'Navigation', value: 'Navigation Compose 2.10.1' },
  { label: 'Build', value: 'AGP 9.4.1 · Java 11' },
  { label: 'Testing', value: 'JUnit · Turbine · coroutines-test' },
]

const features = [
  {
    icon: Mountain,
    title: 'Explore heritage',
    detail:
      'Historical landmarks, cultural destinations, and religious sites streamed from Firestore — each with facts, a story, and a gallery hook.',
  },
  {
    icon: BookOpen,
    title: 'Story of the Day',
    detail:
      'Editorial stories with a dedicated reading layout, surfaced daily on Home and browsable through the stories collection.',
  },
  {
    icon: CalendarDays,
    title: 'Festivals & events',
    detail:
      'A featured festival card, upcoming events, and a Book CTA with in-app confirmation driven by the events collection.',
  },
  {
    icon: Compass,
    title: 'Discover with search',
    detail:
      'Search and category-aware heritage cards with save toggles, so browsing stays fast on slow connections.',
  },
  {
    icon: Bookmark,
    title: 'Save & collect',
    detail:
      'Bookmark places locally into a personal collection that appears on Profile — no sign-in required to start.',
  },
  {
    icon: User,
    title: 'Your profile',
    detail:
      'Display name, bio, avatar, saved places, and activity stats. Edits sync to users/{uid} when signed in.',
  },
  {
    icon: Lock,
    title: 'Optional account',
    detail:
      'Anonymous session by default; upgrade through email/password or Google Sign-In, with credentials linked to the anonymous user when possible.',
  },
  {
    icon: WifiOff,
    title: 'Offline-first by design',
    detail:
      'Repositories emit the Room cache immediately, then merge Firestore snapshots. A dropped network keeps the last good UI state.',
  },
  {
    icon: ShieldCheck,
    title: 'Considered security',
    detail:
      'Failed email sign-ins are rate-limited on-device using a hashed identifier. Passwords are never stored locally.',
  },
  {
    icon: Smartphone,
    title: 'Edge-to-edge Compose',
    detail:
      'A floating bottom navigation bar, window insets handled properly, and an 8dp spacing grid across every screen.',
  },
]

const screens = [
  {
    src: AvalokanHome,
    label: 'Home',
    desc: 'Greeting, Story of the Day, Historical Gems, and event discovery.',
  },
  {
    src: AvalokanDiscover,
    label: 'Discover',
    desc: 'Search, category chips, heritage cards, and save toggles.',
  },
  {
    src: AvalokanPlace,
    label: 'Place details',
    desc: 'Bhaktapur Durbar Square with facts, story, and Save to Collection.',
  },
  {
    src: AvalokanEvents,
    label: 'Events',
    desc: 'Featured Tihar festival card and upcoming events with booking.',
  },
]

const layers = [
  {
    name: 'UI layer',
    detail:
      'Home · Discover · Events · Profile · Settings · Login · Detail screens — Compose screens with ViewModels.',
  },
  {
    name: 'Repository layer',
    detail:
      'Place · Event · Story · User repositories expose a single source of truth to the ViewModels.',
  },
  {
    name: 'Data layer',
    detail:
      'Room caches Firestore documents for offline reads while snapshot listeners keep the cache warm.',
  },
  {
    name: 'Session & preferences',
    detail:
      'AuthRepository wraps Firebase Auth; PreferencesStore holds theme, notifications, saves, and avatar in DataStore.',
  },
]

const palette = [
  { name: 'Forest green', hex: '#1B4332' },
  { name: 'Sage', hex: '#6B8F7A' },
  { name: 'Sand', hex: '#E8D7B7' },
  { name: 'Terracotta', hex: '#C86F4A' },
  { name: 'Warm ivory', hex: '#F5F3ED' },
]

const roadmapDone = [
  'Main UI screens, design system, and navigation',
  'Hilt DI and ViewModels',
  'Firestore repositories with Room offline cache',
  'Data-driven Home, Discover, Events, and detail screens',
  'Local saved-place collections in DataStore',
  'Firebase Auth — anonymous, email/password, Google',
  'User profile read/write to Firestore',
  'Search and category filtering on Discover',
  '22-second launch film cut from real app captures',
]

const roadmapNext = [
  'Persist event bookings to Firestore (in-app confirmation works today)',
  'Cloud sync for saved places across devices',
  'Calendar export and a notification center',
  'Production Firestore rules review and monitoring',
  'Release package ID, R8/ProGuard, Play Store listing assets',
  'Privacy policy and Data safety disclosure for Play Console',
]

const techStack = [
  'Kotlin',
  'Jetpack Compose',
  'Material 3',
  'Hilt',
  'Room',
  'DataStore',
  'Firebase Auth',
  'Firestore',
  'Coroutines & Flow',
  'Navigation Compose',
  'Coil',
  'Credential Manager',
]

const developer = [
  { label: 'Developer', value: 'Samrat Parajuli' },
  { label: 'GitHub', value: 'github.com/SamratVsn', href: 'https://github.com/SamratVsn' },
  { label: 'Portfolio', value: 'samratparajuli0.com.np', href: 'https://www.samratparajuli0.com.np' },
  { label: 'LinkedIn', value: 'Samrat Parajuli', href: 'https://www.linkedin.com/in/samratvsn/' },
  { label: 'Latest release', value: 'v1.0.0 — 27 Oct 2026', href: RELEASE_URL },
  { label: 'Status', value: 'Feature-complete beta' },
]

const related = [
  {
    title: 'Kathmandu My-City',
    blurb: 'The earlier Material 3 love letter to Kathmandu — the app that started the heritage thread.',
    path: '/projects/kathmandu',
    tag: 'Compose · Material 3',
  },
  {
    title: 'Tasks',
    blurb: 'Offline-first task management with Room, DataStore, and Pomodoro focus sessions.',
    path: '/projects/todo',
    tag: 'Compose · Room',
  },
]

const TABS = ['overview', 'features', 'architecture', 'roadmap']

export default function Avalokan() {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedImage, setSelectedImage] = useState(null)
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef(null)
  const filmRef = useRef(null)

  const playFilm = () => {
    filmRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    const video = videoRef.current
    if (video) {
      video.play?.().catch(() => {})
    }
  }

  return (
    <div className="min-h-screen bg-[#04080C] text-slate-300 font-sans selection:bg-[#8FBFA4]/30">
      <SEO
        title="Avalokan | SamratVsn"
        description="Avalokan is a native Android heritage explorer for Nepal — historical places, cultural stories, festivals, and events. Built with Kotlin, Jetpack Compose, Firebase, and an offline-first Room cache."
        ogUrl={`${SITE}/projects/avalokan`}
        ogImage={`${SITE}/media/avalokan-poster.jpg`}
        schema={[
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
              { '@type': 'ListItem', position: 2, name: 'Projects', item: `${SITE}/projects` },
              { '@type': 'ListItem', position: 3, name: 'Avalokan', item: `${SITE}/projects/avalokan` },
            ],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            '@id': `${SITE}/projects/avalokan#app`,
            name: 'Avalokan',
            applicationCategory: 'TravelApplication',
            operatingSystem: 'Android',
            softwareVersion: '1.0.0',
            datePublished: '2026-10-27',
            description:
              'Avalokan is a native Android heritage explorer for Nepal — discover historical places, read cultural stories, browse festivals and events, and save places to a personal collection. Built with Kotlin, Jetpack Compose, Firebase, and an offline-first Room cache.',
            url: REPO_URL,
            downloadUrl: APK_URL,
            sameAs: RELEASE_URL,
            image: `${SITE}/media/avalokan-poster.jpg`,
            author: { '@id': `${SITE}/#person` },
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
            },
            keywords:
              'Avalokan, Nepal heritage app, Kotlin, Jetpack Compose, Firebase, Room, Hilt, offline-first Android',
          },
          {
            '@context': 'https://schema.org',
            '@type': 'VideoObject',
            name: 'Avalokan — 22-second launch film',
            description:
              'A 22-second launch film cut from real Avalokan app captures on a 1080×2400 emulator.',
            thumbnailUrl: `${SITE}/media/avalokan-poster.jpg`,
            uploadDate: '2026-10-27',
            contentUrl: `${SITE}/media/avalokan-launch.mp4`,
            embedUrl: `${SITE}/projects/avalokan`,
            duration: 'PT22S',
            width: '1080',
            height: '1920',
          },
        ]}
      />

      {/* ═══ Hero ═══ */}
      <section className="relative overflow-hidden border-b border-white/[0.05]">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(900px 420px at 15% 0%, rgba(27,67,50,0.55), transparent 65%), radial-gradient(700px 380px at 90% 20%, rgba(200,111,74,0.18), transparent 70%)',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 py-12 sm:py-16 xl:max-w-7xl 2xl:max-w-[90rem] min-[1920px]:max-w-[100rem]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Copy */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2.5 mb-5">
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-mono font-semibold uppercase tracking-widest"
                  style={{
                    color: SAGE,
                    backgroundColor: 'rgba(143,191,164,0.10)',
                    border: '1px solid rgba(143,191,164,0.28)',
                  }}
                >
                  <Sparkles size={11} /> New project
                </span>
                <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest text-slate-400">
                  Android app
                </span>
                <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest text-slate-400">
                  v1.0.0 · released
                </span>
              </div>

              <p className="text-[11px] font-mono uppercase tracking-[0.35em] text-slate-500 mb-3">
                अवलोकन · to observe
              </p>

              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.04em] text-white leading-[1.02]"
              >
                Avalokan
                <span style={{ color: TERRA }}>.</span>
              </motion.h1>

              <p className="mt-4 text-lg sm:text-xl text-slate-300 font-medium max-w-xl">
                Discover Nepal. Explore its heritage. Experience its stories.
              </p>
              <p className="mt-3 text-slate-400 leading-relaxed max-w-xl">
                A native Android heritage explorer for Nepal — historical places, cultural
                stories, festivals, and the details worth knowing before you go. Built with
                Kotlin, Jetpack Compose, and Material 3, backed by Firebase and cached offline
                with Room.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={APK_URL}
                  className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all active:scale-[0.97]"
                  style={{ backgroundColor: SAGE, color: '#04080C' }}
                >
                  <Download size={15} /> Download APK
                </a>
                <button
                  type="button"
                  onClick={playFilm}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/12 px-5 py-2.5 text-sm font-semibold text-slate-200 transition-all hover:border-white/25 hover:text-white active:scale-[0.97]"
                >
                  <Play size={15} fill="currentColor" /> Watch launch film
                </button>
                <a
                  href={REPO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg px-2 py-2.5 text-sm font-semibold text-slate-400 transition-colors hover:text-white"
                  aria-label="View Avalokan source on GitHub"
                >
                  <Github size={15} /> Source
                </a>
              </div>
              <p className="mt-3 text-[11px] font-mono text-slate-500">
                v1.0.0 · 20 MB APK · Android 7.0+ · 22s launch film inside
              </p>
            </div>

            {/* Poster */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative mx-auto max-w-[300px] lg:max-w-[340px]"
              >
                <div
                  className="absolute -inset-6 rounded-[2rem] blur-2xl"
                  style={{ background: 'radial-gradient(circle, rgba(143,191,164,0.22), transparent 70%)' }}
                />
                <button
                  type="button"
                  onClick={playFilm}
                  aria-label="Play the Avalokan launch film"
                  className="group relative block w-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-black text-left shadow-2xl"
                >
                  <img
                    src={LaunchPoster}
                    alt="Avalokan launch film poster"
                    className="h-auto w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
                  <span
                    className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full backdrop-blur-md transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundColor: 'rgba(143,191,164,0.92)', color: '#04080C' }}
                  >
                    <Play size={26} fill="currentColor" className="ml-0.5" />
                  </span>
                  <span className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-[11px] font-medium text-white/90">
                    <Video size={13} style={{ color: SAGE }} /> Avalokan — launch film
                  </span>
                </button>
              </motion.div>
            </div>
          </div>

          {/* Quick stats */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { k: '4', v: 'Firestore collections' },
              { k: '9', v: 'Compose screens' },
              { k: '100%', v: 'Offline-first reads' },
              { k: 'API 24+', v: 'Android support' },
            ].map((stat) => (
              <div
                key={stat.v}
                className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 backdrop-blur-sm"
              >
                <p className="text-lg font-bold text-white tracking-tight">{stat.k}</p>
                <p className="text-[11px] text-slate-500 mt-0.5">{stat.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-14 xl:max-w-7xl 2xl:max-w-[90rem] min-[1920px]:max-w-[100rem]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* ═══ Main ═══ */}
          <div className="lg:col-span-2 space-y-12">
            {/* Launch film */}
            <div id="film" ref={filmRef} className="space-y-4 scroll-mt-24">
              <div className="flex items-end justify-between gap-4">
                <h2 className="text-sm font-semibold uppercase tracking-widest" style={{ color: SAGE }}>
                  Launch film
                </h2>
                <a
                  href={FILM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  Open full size <ArrowUpRight size={12} />
                </a>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-black">
                <video
                  ref={videoRef}
                  poster={LaunchPoster}
                  controls
                  playsInline
                  preload="metadata"
                  onPlay={() => setPlaying(true)}
                  onPause={() => setPlaying(false)}
                  className="mx-auto block max-h-[640px] w-auto max-w-full"
                  aria-label="Avalokan 22-second launch film"
                >
                  <source src={FILM_URL} type="video/mp4" />
                  Your browser does not support embedded video. You can{' '}
                  <a href={FILM_URL}>download the launch film</a> instead.
                </video>

                {!playing && (
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/50 via-transparent to-black/30">
                    <button
                      type="button"
                      onClick={() => videoRef.current?.play?.()}
                      aria-label="Play the launch film"
                      className="pointer-events-auto group flex h-16 w-16 items-center justify-center rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
                      style={{ backgroundColor: 'rgba(143,191,164,0.92)', color: '#04080C' }}
                    >
                      <Play size={26} fill="currentColor" className="ml-0.5" />
                    </button>
                  </div>
                )}
              </div>

              <p className="text-xs text-slate-500 leading-relaxed">
                Cut from real captures of the app running on a 1080×2400 emulator — no mockups, no
                invented screens. Assembled with{' '}
                <a
                  href="https://hyperframes.heygen.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 underline decoration-slate-700 hover:text-white transition-colors"
                >
                  HyperFrames
                </a>
                .
              </p>
            </div>

            {/* Intro */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white tracking-[-0.03em]">
                One place for Nepal's places, stories, and happenings
              </h2>
              <p className="text-slate-400 leading-relaxed">
                Nepal holds centuries of history, living traditions, sacred places, architectural
                wonders, and festivals that bring communities together. Finding the stories behind
                those places — and what is happening next — usually means searching across many
                different sources.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Avalokan brings those experiences together in one app: discover destinations, read
                editorial stories, browse events, save places to a personal collection, and
                optionally sign in to sync a profile with Firestore. Content streams from Cloud
                Firestore into an offline-first Room cache, so the app still reads well on a
                mountain road with one bar of signal.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 border border-white/[0.07] rounded-xl bg-white/[0.02] hover:border-white/15 transition-colors">
                  <p className="font-semibold text-sm mb-2" style={{ color: SAGE }}>
                    Content that feels curated
                  </p>
                  <p className="text-sm text-slate-400">
                    Places, stories, and events are separate Firestore collections — each with its
                    own editorial layout instead of one generic detail screen.
                  </p>
                </div>
                <div className="p-4 border border-white/[0.07] rounded-xl bg-white/[0.02] hover:border-white/15 transition-colors">
                  <p className="font-semibold text-sm mb-2" style={{ color: TERRA }}>
                    Designed after the landscape
                  </p>
                  <p className="text-sm text-slate-400">
                    Forest green, sage, sand, and terracotta with Montserrat and Inter — an earthy
                    system built to make heritage feel present, not archival.
                  </p>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div>
              <div className="flex gap-1 mb-8 border-b border-white/10 overflow-x-auto">
                {TABS.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    aria-pressed={activeTab === tab}
                    className={`shrink-0 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === tab
                        ? 'border-[#8FBFA4] text-[#8FBFA4]'
                        : 'border-transparent text-slate-400 hover:text-slate-200'
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
                      Avalokan is a single-activity Compose app organised around a repository layer
                      that hides two data sources. Snapshot listeners keep Firestore live, Room keeps
                      the last known good state on disk, and ViewModels expose one state stream to
                      the UI — so screens never care where the data came from.
                    </p>

                    <div className="space-y-4">
                      <h3 className="text-white font-semibold text-sm">Core experience</h3>
                      <ul className="space-y-3 text-sm text-slate-400">
                        {[
                          'Explore heritage — landmarks, cultural destinations, and religious sites',
                          'Read stories — Story of the Day plus a full editorial reader',
                          'Find events — featured festival card, upcoming list, and booking CTA',
                          'Discover places — search and category-aware cards with save toggles',
                          'Save & collect — bookmarks live locally, no sign-in required',
                          'Your profile — name, bio, avatar, saved places, and stats',
                          'Account (optional) — anonymous by default, upgrade any time',
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <Check size={15} className="mt-0.5 shrink-0" style={{ color: SAGE }} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-5">
                      <p className="text-sm text-slate-300 font-medium mb-1">
                        The name matters
                      </p>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        <em>Avalokan</em> (अवलोकन) means observation — looking closely at something
                        with attention. That's the whole product thesis: look at Nepal properly,
                        then tell its stories well.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'features' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {features.map((feat) => (
                      <div
                        key={feat.title}
                        className="p-5 border border-white/[0.07] rounded-xl bg-white/[0.02] hover:border-white/15 hover:-translate-y-0.5 transition-all duration-300"
                      >
                        <div className="flex items-start gap-3">
                          <feat.icon size={19} className="mt-0.5 shrink-0" style={{ color: SAGE }} />
                          <div>
                            <h4 className="text-white font-semibold text-sm mb-1">{feat.title}</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">{feat.detail}</p>
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
                        <Layers size={16} style={{ color: SAGE }} /> Layered by responsibility
                      </h3>
                      <div className="space-y-3">
                        {layers.map((layer) => (
                          <div
                            key={layer.name}
                            className="p-4 border border-white/[0.07] rounded-xl bg-white/[0.02] hover:border-white/15 transition-colors"
                          >
                            <p className="text-sm text-white font-semibold mb-1">{layer.name}</p>
                            <p className="text-sm text-slate-400">{layer.detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-white font-semibold text-sm flex items-center gap-2">
                        <Database size={16} style={{ color: SAGE }} /> Offline-first flow
                      </h3>
                      <div className="p-4 bg-black/50 border border-white/[0.07] rounded-xl font-mono text-[12px] sm:text-sm text-slate-400 leading-relaxed overflow-x-auto">
                        <p>
                          <span className="text-slate-500">UI</span> → ViewModel → Repository
                        </p>
                        <p className="ml-4">├── <span style={{ color: SAGE }}>Room</span> <span className="text-slate-500">// cached reads, instant first paint</span></p>
                        <p className="ml-4">└── <span style={{ color: TERRA }}>Firestore</span> <span className="text-slate-500">// snapshot listeners merge into Room</span></p>
                        <p className="mt-3 text-slate-500">// listeners log errors and keep the last good UI state</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-white font-semibold text-sm flex items-center gap-2">
                        <Cloud size={16} style={{ color: SAGE }} /> Project structure
                      </h3>
                      <div className="p-4 bg-black/50 border border-white/[0.07] rounded-xl font-mono text-[12px] sm:text-sm text-slate-400 leading-relaxed overflow-x-auto">
                        <p>app/src/main/java/com/example/avalokan/</p>
                        <p className="ml-4">├── <span style={{ color: SAGE }}>MainActivity.kt</span> <span className="text-slate-500">// entry, edge-to-edge, theme</span></p>
                        <p className="ml-4">├── <span style={{ color: SAGE }}>AvalokanApp.kt</span> <span className="text-slate-500">// scaffold, floating nav, NavHost</span></p>
                        <p className="ml-4">├── <span style={{ color: SAGE }}>AvalokanApplication.kt</span> <span className="text-slate-500">// Hilt + anonymous auth bootstrap</span></p>
                        <p className="ml-4">├── <span style={{ color: TERRA }}>data/</span></p>
                        <p className="ml-8">│   ├── di/ · local/ · auth/</p>
                        <p className="ml-8">│   ├── place/ · event/ · story/ · user/</p>
                        <p className="ml-8">│   └── AvalokanDatabase.kt</p>
                        <p className="ml-4">└── <span style={{ color: TERRA }}>ui/</span></p>
                        <p className="ml-8">    ├── home/ · discover/ · events/ · profile/</p>
                        <p className="ml-8">    ├── settings/ · auth/ · detail/</p>
                        <p className="ml-8">    ├── components/ · navigation/ · theme/</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'roadmap' && (
                  <div className="space-y-7">
                    <div className="space-y-3">
                      <h3 className="text-white font-semibold text-sm flex items-center gap-2">
                        <Check size={16} style={{ color: SAGE }} /> Shipped
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {roadmapDone.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 p-3 border border-white/[0.06] rounded-lg bg-white/[0.02]"
                          >
                            <Check size={14} className="mt-0.5 shrink-0" style={{ color: SAGE }} />
                            <span className="text-[13px] text-slate-400 leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-white font-semibold text-sm flex items-center gap-2">
                        <Sparkles size={16} style={{ color: TERRA }} /> Next up
                      </h3>
                      <ul className="space-y-2.5">
                        {roadmapNext.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 p-3 border border-white/[0.06] rounded-lg"
                          >
                            <span
                              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                              style={{ backgroundColor: TERRA }}
                            />
                            <span className="text-[13px] text-slate-400 leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Screens */}
            <div className="space-y-6">
              <div className="flex items-end justify-between gap-4">
                <h2 className="text-sm font-semibold uppercase tracking-widest" style={{ color: SAGE }}>
                  Screens
                </h2>
                <p className="text-[11px] text-slate-500 text-right">
                  Captured on a 1080×2400 emulator
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {screens.map((screen) => (
                  <button
                    key={screen.label}
                    type="button"
                    onClick={() => setSelectedImage(screen)}
                    className="group relative overflow-hidden rounded-xl border border-white/[0.07] bg-black text-left transition-all hover:border-[#8FBFA4]/40"
                  >
                    <img
                      src={screen.src}
                      alt={`${screen.label} screen`}
                      className="h-52 sm:h-64 w-full object-cover object-top opacity-80 transition-all duration-500 group-hover:opacity-100 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-3">
                      <p className="text-[13px] font-semibold text-white">{screen.label}</p>
                      <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-2">{screen.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Design system */}
            <div className="space-y-5">
              <h2 className="text-sm font-semibold uppercase tracking-widest" style={{ color: SAGE }}>
                Design system
              </h2>
              <div className="flex flex-wrap gap-2">
                {palette.map((c) => (
                  <div
                    key={c.hex}
                    className="flex items-center gap-2.5 rounded-lg border border-white/[0.07] bg-white/[0.02] px-3 py-2"
                  >
                    <span
                      className="h-6 w-6 rounded-md border border-white/10"
                      style={{ backgroundColor: c.hex }}
                    />
                    <span className="text-xs text-slate-300">{c.name}</span>
                    <span className="text-[10px] font-mono text-slate-500">{c.hex}</span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                {[
                  { icon: Palette, k: 'Typography', v: 'Montserrat headings, Inter body' },
                  { icon: Layers, k: 'Layout', v: '8dp grid, floating bottom bar' },
                  { icon: Smartphone, k: 'Window', v: 'Edge-to-edge with correct insets' },
                ].map((item) => (
                  <div
                    key={item.k}
                    className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4"
                  >
                    <item.icon size={16} style={{ color: SAGE }} className="mb-2" />
                    <p className="text-xs uppercase tracking-widest text-slate-500 mb-1">{item.k}</p>
                    <p className="text-[13px] text-slate-300">{item.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ═══ Sidebar ═══ */}
          <aside className="lg:col-span-1 space-y-6">
            {/* Specs */}
            <div
              className="p-6 border rounded-xl bg-white/[0.02] backdrop-blur-xl"
              style={{ borderColor: 'rgba(143,191,164,0.18)' }}
            >
              <h3 className="text-sm font-semibold text-white mb-6">Technical stack</h3>
              <div className="space-y-4">
                {specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="border-b border-white/[0.06] pb-3 last:border-0 last:pb-0"
                  >
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">
                      {spec.label}
                    </p>
                    <p className="text-sm text-slate-300 font-medium">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="p-6 border border-white/[0.07] rounded-xl bg-white/[0.02] backdrop-blur-xl">
              <h3 className="text-sm font-semibold text-white mb-4">Built with</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Developer */}
            <div className="p-6 border border-white/[0.07] rounded-xl bg-white/[0.02] backdrop-blur-xl">
              <h3 className="text-sm font-semibold text-white mb-4">Developer & source</h3>
              <div className="space-y-3">
                {developer.map((dev) => (
                  <div key={dev.label}>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">
                      {dev.label}
                    </p>
                    {dev.href ? (
                      <a
                        href={dev.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium break-words transition-colors hover:text-white"
                        style={{ color: SAGE }}
                      >
                        {dev.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-slate-300 break-words">{dev.value}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <a
              href={APK_URL}
              className="flex flex-col gap-1 rounded-xl p-4 transition-all active:scale-[0.97]"
              style={{ backgroundColor: SAGE, color: '#04080C' }}
            >
              <span className="flex items-center justify-center gap-2 text-sm font-bold">
                <Download size={16} /> Download Avalokan v1.0.0
              </span>
              <span className="text-center text-[11px] font-medium text-[#04080C]/70">
                Direct APK · 20 MB · Android 7.0+
              </span>
            </a>

            <a
              href={RELEASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-xl border border-white/[0.07] bg-white/[0.02] p-4 transition-all hover:border-white/20 group"
            >
              <span className="text-sm font-medium text-slate-300">Release notes</span>
              <ArrowUpRight
                size={16}
                className="text-slate-500 transition-colors group-hover:text-white"
              />
            </a>

            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm font-semibold text-slate-200 transition-all hover:border-white/25 hover:text-white active:scale-[0.97]"
            >
              <Github size={16} /> Open on GitHub
            </a>

            <a
              href={FILM_URL}
              download
              className="flex items-center justify-between rounded-xl border border-white/[0.07] bg-white/[0.02] p-4 transition-all hover:border-white/20 group"
            >
              <span className="flex items-center gap-2 text-sm font-medium text-slate-300">
                <Video size={15} style={{ color: TERRA }} /> Download launch film
              </span>
              <ArrowUpRight
                size={16}
                className="text-slate-500 transition-colors group-hover:text-white"
              />
            </a>

            <a
              href={`${REPO_URL}#readme`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-xl border border-white/[0.07] bg-white/[0.02] p-4 transition-all hover:border-white/20 group"
            >
              <span className="text-sm font-medium text-slate-300">Read the full README</span>
              <ArrowUpRight
                size={16}
                className="text-slate-500 transition-colors group-hover:text-white"
              />
            </a>
          </aside>
        </div>

        {/* ═══ Related ═══ */}
        <section className="mt-16 border-t border-white/[0.06] pt-10">
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-slate-500 mb-2">
                Keep exploring
              </p>
              <h2 className="text-xl font-semibold text-white tracking-tight">Related projects</h2>
            </div>
            <Link
              to="/projects"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-medium transition-colors hover:gap-2"
              style={{ color: SAGE }}
            >
              All projects <ArrowUpRight size={13} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {related.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="group rounded-xl border border-white/[0.07] bg-white/[0.02] p-5 transition-all hover:border-white/20 hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-1.5">
                      {item.tag}
                    </p>
                    <h3 className="text-white font-semibold mb-1.5 group-hover:text-[#8FBFA4] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[13px] text-slate-400 leading-relaxed">{item.blurb}</p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="mt-1 shrink-0 text-slate-500 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                  />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Credits */}
        <p className="mt-10 text-[11px] text-slate-600 leading-relaxed">
          Launch film music: <em>Happy Beats Business Moves, Vol. 12</em> by Sascha Ende
          (ende.app), licensed under CC BY 4.0.
        </p>
      </div>

      {/* ═══ Lightbox ═══ */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 p-6 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedImage.label} screenshot`}
        >
          <div className="max-w-sm w-full space-y-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-white font-semibold text-sm">{selectedImage.label}</h3>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                aria-label="Close screenshot"
                className="rounded p-1 transition-colors hover:bg-white/10"
              >
                <X size={20} className="text-slate-400" />
              </button>
            </div>
            <img
              src={selectedImage.src}
              alt={`${selectedImage.label} screen`}
              className="max-h-[70vh] w-full rounded-lg border border-white/10 object-contain"
            />
            <p className="text-sm text-slate-400 text-center">{selectedImage.desc}</p>
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  )
}
