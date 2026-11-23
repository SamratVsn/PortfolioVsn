import { useRef, useState } from 'react'
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
} from 'lucide-react'
import SEO from './SEO'
import Lightbox from './Lightbox'
import Container from './ui/Container'
import Card from './ui/Card'
import Eyebrow from './ui/Eyebrow'
import StatusPill from './ui/StatusPill'
import CaseStudyTabs from './case-study/CaseStudyTabs'
import CaseStudySection from './case-study/CaseStudySection'
import ScreenshotGallery from './case-study/ScreenshotGallery'
import DecisionList from './case-study/DecisionList'
import DataModelTable from './case-study/DataModelTable'
import { AsideCard, SpecList, TagList } from './case-study/CaseStudyAside'
import { getProject } from '../data/projects'
import { image } from '../content/images'
import ResponsiveImage from './ui/ResponsiveImage'

const REPO_URL = 'https://github.com/SamratVsn/Avalokan'
const APK_URL = 'https://github.com/SamratVsn/Avalokan/releases/download/v1.0.0/avalokan1.0.0.apk'
const RELEASE_URL = 'https://github.com/SamratVsn/Avalokan/releases/tag/v1.0.0'
const FILM_URL = '/media/avalokan-launch.mp4'
const SITE = 'https://www.samratparajuli0.com.np'
const avalokan = getProject('avalokan')

/* Heritage palette pulled from the app's own design system */
const SAGE = 'var(--p-accent-soft)'
const TERRA = 'var(--p-terra)'

const SPECS = [
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

const FEATURES = [
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
      'Display name, bio, avatar, saved places, and visited/saved/favourite counts. Name, bio, and a remote avatar URL sync to users/{uid} when signed in; saved places and counts stay on the device.',
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

const SCREENS = [
  {
    src: image('avalokan-home'),
    label: 'Home',
    desc: 'Greeting, Story of the Day, Historical Gems, and event discovery.',
  },
  {
    src: image('avalokan-discover'),
    label: 'Discover',
    desc: 'Search, category chips, heritage cards, and save toggles.',
  },
  {
    src: image('avalokan-place-detail'),
    label: 'Place details',
    desc: 'Bhaktapur Durbar Square with facts, story, and Save to Collection.',
  },
  {
    src: image('avalokan-events'),
    label: 'Events',
    desc: 'Featured Tihar festival card and upcoming events with booking.',
  },
]

const LAYERS = [
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

const PALETTE = [
  { name: 'Forest green', hex: '#1B4332' },
  { name: 'Sage', hex: '#6B8F7A' },
  { name: 'Sand', hex: '#E8D7B7' },
  { name: 'Terracotta', hex: '#C86F4A' },
  { name: 'Warm ivory', hex: '#F5F3ED' },
]

const ROADMAP_DONE = [
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

const ROADMAP_NEXT = [
  'Persist event bookings to Firestore (in-app confirmation works today)',
  'Cloud sync for saved places across devices',
  'Calendar export and a notification center',
  'Production Firestore rules review and monitoring',
  'Release package ID, R8/ProGuard, Play Store listing assets',
  'Privacy policy and Data safety disclosure for Play Console',
]

const TECH_STACK = [
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

const DEVELOPER = [
  { label: 'Developer', value: 'Samrat Parajuli' },
  { label: 'GitHub', value: 'github.com/SamratVsn', href: 'https://github.com/SamratVsn' },
  { label: 'Portfolio', value: 'samratparajuli0.com.np', href: 'https://www.samratparajuli0.com.np' },
  { label: 'LinkedIn', value: 'Samrat Parajuli', href: 'https://www.linkedin.com/in/samratvsn/' },
  { label: 'Latest release', value: 'v1.0.0 — 27 Oct 2026', href: RELEASE_URL },
  { label: 'Status', value: 'Android · v1.0.0 Released' },
]

const RELATED = [
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

const TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'features', label: 'Features' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'roadmap', label: 'Roadmap' },
]

export default function Avalokan() {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedImage, setSelectedImage] = useState(null)
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
    <div className="min-h-screen bg-canvas font-sans text-slate-300 selection:bg-accent/30">
      <SEO
        title="Avalokan — Nepal Heritage Android App | Samrat Parajuli"
        description="Avalokan is a native Android heritage explorer for Nepal — places, cultural stories, festivals and events, built with Kotlin, Jetpack Compose and Room."
        ogUrl={`${SITE}/projects/avalokan`}
        ogImage={`${SITE}/media/avalokan-og.jpg`}
        ogType="website"
        imageAlt="Avalokan — Nepal heritage explorer app for Android"
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
            image: `${SITE}/media/avalokan-og.jpg`,
            author: { '@id': `${SITE}/#person` },
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
            keywords:
              'Avalokan, Nepal heritage app, Kotlin, Jetpack Compose, Firebase, Room, Hilt, offline-first Android',
          },
          {
            '@context': 'https://schema.org',
            '@type': 'SoftwareSourceCode',
            '@id': `${SITE}/projects/avalokan#source`,
            name: 'Avalokan',
            description:
              'Kotlin and Jetpack Compose source for the Avalokan Android heritage explorer.',
            codeRepository: REPO_URL,
            programmingLanguage: 'Kotlin',
            runtimePlatform: 'Android',
            author: { '@id': `${SITE}/#person` },
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
      <section className="relative overflow-hidden border-b border-border">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(27,67,50,0.4) 0%, rgba(14,19,17,0) 62%)',
          }}
        />
        <Container className="relative py-12 sm:py-16">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 font-mono text-label uppercase tracking-[0.12em] text-slate-500">
              <li><Link to="/" className="rounded transition-colors hover:text-slate-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-soft">Home</Link></li>
              <li aria-hidden="true" className="text-slate-700">/</li>
              <li><Link to="/projects" className="rounded transition-colors hover:text-slate-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-soft">Projects</Link></li>
              <li aria-hidden="true" className="text-slate-700">/</li>
              <li><span aria-current="page" className="text-slate-400">Avalokan</span></li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Copy */}
            <div className="lg:col-span-7">
              <div className="mb-5 flex flex-wrap items-center gap-2.5">
                <StatusPill tone="accent">
                  <Sparkles size={11} aria-hidden="true" /> New project
                </StatusPill>
                <StatusPill tone="neutral">Android · v1.0.0 Released</StatusPill>
              </div>

              <Eyebrow wide dot={false} rule={false} className="mb-3">
                अवलोकन · to observe
              </Eyebrow>

              <h1 className="hero-enter text-display font-bold text-paper">
                Avalokan
                <span style={{ color: TERRA }}>.</span>
              </h1>

              <p className="mt-4 max-w-xl text-body-lg font-medium text-slate-300">
                Discover Nepal. Explore its heritage. Experience its stories.
              </p>
              <p className="mt-3 max-w-xl text-body text-slate-400">
                A native Android heritage explorer for Nepal — historical places, cultural
                stories, festivals, and the details worth knowing before you go. Built with
                Kotlin, Jetpack Compose, and Material 3, backed by Firebase and cached offline
                with Room.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={APK_URL}
                  className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-small font-semibold transition-all active:scale-[0.97]"
                  style={{ backgroundColor: 'var(--p-accent)', color: 'var(--p-ink)' }}
                >
                  <Download size={15} aria-hidden="true" /> Download APK
                </a>
                <button
                  type="button"
                  onClick={playFilm}
                  className="inline-flex items-center gap-2 rounded-lg border border-border-strong px-5 py-2.5 text-small font-semibold text-slate-200 transition-all hover:border-border-strong hover:text-paper active:scale-[0.97]"
                >
                  <Play size={15} fill="currentColor" aria-hidden="true" /> Watch launch film
                </button>
                <a
                  href={REPO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg px-2 py-2.5 text-small font-semibold text-slate-400 transition-colors hover:text-paper"
                  aria-label="View Avalokan source on GitHub"
                >
                  <Github size={15} aria-hidden="true" /> Source
                </a>
              </div>
              <p className="mt-3 font-mono text-label tracking-normal text-slate-400">
                v1.0.0 · 20 MB APK · Android 7.0+ · 22s launch film inside
              </p>
            </div>

            {/* Logo poster */}
            <div className="lg:col-span-5">
              <div className="hero-enter-visual relative mx-auto max-w-[300px] lg:max-w-[360px]">
                <div className="relative overflow-hidden rounded-[1.5rem] border border-border-strong bg-paper">
                  <ResponsiveImage
                    image={image('avalokan-logo')}
                    alt="Avalokan logo — Nepal Heritage Explorer"
                    sizes="(min-width: 1024px) 360px, 300px"
                    className="h-auto w-full object-contain"
                    loading="eager"
                  />
                </div>
                <p className="mt-4 text-center font-mono text-label uppercase tracking-[0.28em] text-slate-400">
                  Nepal Heritage Explorer
                </p>
              </div>
            </div>
          </div>

          {/* Quick stats */}
          <dl className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { k: '4', v: 'Firestore collections' },
              { k: '9', v: 'Compose screens' },
              { k: 'Offline-first', v: 'Reads after first sync' },
              { k: 'API 24+', v: 'Android support' },
            ].map((stat) => (
              <div key={stat.v} className="rounded-xl border border-border bg-surface/40 px-4 py-3">
                <dd className="text-h4 font-bold tracking-tight text-paper">{stat.k}</dd>
                <dt className="mt-0.5 text-label tracking-normal text-slate-400">{stat.v}</dt>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <Container className="py-14">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* ═══ Main ═══ */}
          <div className="min-w-0 space-y-12 lg:col-span-2">
            {/* Launch film */}
            <section id="film" ref={filmRef} className="scroll-mt-24 space-y-4">
              <div className="flex items-end justify-between gap-4">
                <Eyebrow as="h2" tone="accent" dot={false} rule={false}>
                  Launch film
                </Eyebrow>
                <a
                  href={FILM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-small font-medium text-slate-400 transition-colors hover:text-paper"
                >
                  Open full size <ArrowUpRight size={12} aria-hidden="true" />
                </a>
              </div>

              <div className="relative mx-auto w-full max-w-[360px] overflow-hidden rounded-2xl border border-border bg-black">
                <video
                  ref={videoRef}
                  poster="/media/avalokan-poster.jpg"
                  controls
                  playsInline
                  preload="none"
                  className="block aspect-[9/16] w-full bg-black object-cover"
                  aria-label="Avalokan 22-second launch film"
                >
                  <source src={FILM_URL} type="video/mp4" />
                  Your browser does not support embedded video. You can{' '}
                  <a href={FILM_URL}>download the launch film</a> instead.
                </video>
              </div>

              <p className="text-label leading-relaxed tracking-normal text-slate-400">
                Cut from real captures of the app running on a 1080×2400 emulator — no mockups, no
                invented screens. Assembled with{' '}
                <a
                  href="https://hyperframes.heygen.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 underline decoration-slate-700 transition-colors hover:text-paper"
                >
                  HyperFrames
                </a>
                .
              </p>
            </section>

            {/* Intro */}
            <CaseStudySection title="One place for Nepal's places, stories, and happenings">
              <p className="text-body text-slate-400">
                Nepal holds centuries of history, living traditions, sacred places, architectural
                wonders, and festivals that bring communities together. Finding the stories behind
                those places — and what is happening next — usually means searching across many
                different sources.
              </p>
              <p className="text-body text-slate-400">
                Avalokan brings those experiences together in one app: discover destinations, read
                editorial stories, browse events, save places to a personal collection, and
                optionally sign in to sync a profile with Firestore. Content streams from Cloud
                Firestore into an offline-first Room cache, so the app still reads well on a
                mountain road with one bar of signal.
              </p>

              <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
                <Card variant="subtle" padding="sm">
                  <p className="mb-2 text-small font-semibold" style={{ color: SAGE }}>
                    Content that feels curated
                  </p>
                  <p className="text-small text-slate-400">
                    Places, stories, and events are separate Firestore collections — each with its
                    own editorial layout instead of one generic detail screen.
                  </p>
                </Card>
                <Card variant="subtle" padding="sm">
                  <p className="mb-2 text-small font-semibold" style={{ color: TERRA }}>
                    Designed after the landscape
                  </p>
                  <p className="text-small text-slate-400">
                    Forest green, sage, sand, and terracotta with Montserrat and Inter — an earthy
                    system built to make heritage feel present, not archival.
                  </p>
                </Card>
              </div>
            </CaseStudySection>

            {/* Tabs */}
            <div>
              <CaseStudyTabs tabs={TABS} active={activeTab} onChange={setActiveTab} />

              <div className="min-h-[400px]">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <p className="text-body text-slate-400">
                      Avalokan is a single-activity Compose app organised around a repository layer
                      that hides two data sources. Snapshot listeners keep Firestore live, Room keeps
                      the last known good state on disk, and ViewModels expose one state stream to
                      the UI — so screens never care where the data came from.
                    </p>

                    <div className="space-y-4">
                      <h3 className="text-h4 font-semibold text-paper">Core experience</h3>
                      <ul className="space-y-3 text-small text-slate-400">
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
                            <Check size={15} aria-hidden="true" className="mt-0.5 shrink-0" style={{ color: SAGE }} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-xl border border-border bg-surface/40 p-5">
                      <p className="mb-1 text-small font-medium text-slate-300">The name matters</p>
                      <p className="text-small text-slate-400">
                        <em>Avalokan</em> (अवलोकन) means observation — looking closely at something
                        with attention. That's the whole product thesis: look at Nepal properly,
                        then tell its stories well.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'features' && (
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {FEATURES.map((feature) => (
                      <Card key={feature.title} variant="subtle" interactive>
                        <div className="flex items-start gap-3">
                          <feature.icon size={19} aria-hidden="true" className="mt-0.5 shrink-0" style={{ color: SAGE }} />
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
                        <Layers size={16} aria-hidden="true" style={{ color: SAGE }} /> Layered by responsibility
                      </h3>
                      <div className="space-y-3">
                        {LAYERS.map((layer) => (
                          <Card key={layer.name} variant="subtle" padding="sm">
                            <p className="mb-1 text-small font-semibold text-paper">{layer.name}</p>
                            <p className="text-small text-slate-400">{layer.detail}</p>
                          </Card>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="flex items-center gap-2 text-h4 font-semibold text-paper">
                        <Database size={16} aria-hidden="true" style={{ color: SAGE }} /> Offline-first flow
                      </h3>
                      <pre className="overflow-x-auto rounded-xl border border-border bg-canvas p-4 font-mono text-label tracking-normal leading-relaxed text-slate-400 sm:text-small">
                        <code>{`UI → ViewModel → Repository
├── Room       // cached reads, instant first paint
└── Firestore  // snapshot listeners merge into Room

// listeners log errors and keep the last good UI state`}</code>
                      </pre>
                    </div>

                    <div className="space-y-4">
                      <h3 className="flex items-center gap-2 text-h4 font-semibold text-paper">
                        <Cloud size={16} aria-hidden="true" style={{ color: SAGE }} /> Project structure
                      </h3>
                      <pre className="overflow-x-auto rounded-xl border border-border bg-canvas p-4 font-mono text-label tracking-normal leading-relaxed text-slate-400 sm:text-small">
                        <code>{`app/src/main/java/com/example/avalokan/
├── MainActivity.kt          // entry, edge-to-edge, theme
├── AvalokanApp.kt           // scaffold, floating nav, NavHost
├── AvalokanApplication.kt   // Hilt + anonymous auth bootstrap
├── data/
│   ├── di/ · local/ · auth/
│   ├── place/ · event/ · story/ · user/
│   └── AvalokanDatabase.kt
└── ui/
    ├── home/ · discover/ · events/ · profile/
    ├── settings/ · auth/ · detail/
    └── components/ · navigation/ · theme/`}</code>
                      </pre>
                    </div>
                  </div>
                )}

                {activeTab === 'roadmap' && (
                  <div className="space-y-7">
                    <div className="space-y-3">
                      <h3 className="flex items-center gap-2 text-h4 font-semibold text-paper">
                        <Check size={16} aria-hidden="true" style={{ color: SAGE }} /> Shipped
                      </h3>
                      <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {ROADMAP_DONE.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 rounded-lg border border-border bg-surface/40 p-3">
                            <Check size={14} aria-hidden="true" className="mt-0.5 shrink-0" style={{ color: SAGE }} />
                            <span className="text-small leading-snug text-slate-400">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h3 className="flex items-center gap-2 text-h4 font-semibold text-paper">
                        <Sparkles size={16} aria-hidden="true" style={{ color: TERRA }} /> Next up
                      </h3>
                      <ul className="space-y-2.5">
                        {ROADMAP_NEXT.map((item) => (
                          <li key={item} className="flex items-start gap-3 rounded-lg border border-border p-3">
                            <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: TERRA }} />
                            <span className="text-small leading-snug text-slate-400">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <CaseStudySection
              eyebrow="Engineering decisions"
              title="Decisions behind the cache"
            >
              <p className="text-body text-slate-400">
                Avalokan's hardest problems are not visual. They are about which
                source the interface reads, when cached data may be replaced, and
                where user state belongs. These are the decisions implemented in
                the repository today.
              </p>
              <DecisionList decisions={avalokan?.decisions} />
            </CaseStudySection>

            <CaseStudySection
              eyebrow="Data model"
              title="The entities behind the app"
            >
              <p className="text-body text-slate-400">
                The Room tables mirror three Firestore content collections, plus a
                small sync layer and device-local preferences. This is the subset
                that explains how the app is put together, not a full schema dump.
              </p>
              <DataModelTable
                entities={avalokan?.dataModel}
                caption="Avalokan Room entities, sync layer, and device-local preferences"
              />
            </CaseStudySection>

            {/* Screens */}
            <ScreenshotGallery
              screenshots={SCREENS}
              onSelect={setSelectedImage}
              columns={4}
              title="Screens"
              caption="Captured on a 1080×2400 emulator"
            />

            {/* Design system */}
            <section className="space-y-5">
              <Eyebrow as="h2" tone="accent" dot={false} rule={false}>
                Design system
              </Eyebrow>
              <div className="flex flex-wrap gap-2">
                {PALETTE.map((color) => (
                  <div key={color.hex} className="flex items-center gap-2.5 rounded-lg border border-border bg-surface/40 px-3 py-2">
                    <span aria-hidden="true" className="h-6 w-6 rounded-md border border-border-strong" style={{ backgroundColor: color.hex }} />
                    <span className="text-small text-slate-300">{color.name}</span>
                    <span className="font-mono text-label tracking-normal text-slate-400">{color.hex}</span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 gap-3 text-small sm:grid-cols-3">
                {[
                  { icon: Palette, k: 'Typography', v: 'Montserrat headings, Inter body' },
                  { icon: Layers, k: 'Layout', v: '8dp grid, floating bottom bar' },
                  { icon: Smartphone, k: 'Window', v: 'Edge-to-edge with correct insets' },
                ].map((item) => (
                  <Card key={item.k} variant="subtle" padding="md">
                    <item.icon size={16} aria-hidden="true" style={{ color: SAGE }} className="mb-2" />
                    <p className="mb-1 font-mono text-label uppercase text-slate-400">{item.k}</p>
                    <p className="text-small text-slate-300">{item.v}</p>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* ═══ Sidebar ═══ */}
          <aside aria-label="Project details" className="space-y-6 lg:col-span-1">
            <AsideCard title="Technical stack" className="border-accent-border">
              <SpecList items={SPECS} />
            </AsideCard>

            <AsideCard title="Built with">
              <TagList items={TECH_STACK} />
            </AsideCard>

            <AsideCard title="Developer & source">
              <SpecList items={DEVELOPER} />
            </AsideCard>

            <a
              href={APK_URL}
              className="flex flex-col gap-1 rounded-xl p-4 transition-all active:scale-[0.97]"
              style={{ backgroundColor: 'var(--p-accent)', color: 'var(--p-ink)' }}
            >
              <span className="flex items-center justify-center gap-2 text-small font-bold">
                <Download size={16} aria-hidden="true" /> Download Avalokan v1.0.0
              </span>
              <span className="text-center text-label font-medium tracking-normal text-ink">
                Direct APK · 20 MB · Android 7.0+
              </span>
            </a>

            <a
              href={RELEASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-xl border border-border bg-surface/40 p-4 transition-all hover:border-border-strong"
            >
              <span className="text-small font-medium text-slate-300">Release notes</span>
              <ArrowUpRight size={16} aria-hidden="true" className="text-slate-400 transition-colors group-hover:text-paper" />
            </a>

            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl border border-border-strong bg-surface/50 p-4 text-small font-semibold text-slate-200 transition-all hover:border-border-strong hover:text-paper active:scale-[0.97]"
            >
              <Github size={16} aria-hidden="true" /> Open on GitHub
            </a>

            <a
              href={FILM_URL}
              download
              className="group flex items-center justify-between rounded-xl border border-border bg-surface/40 p-4 transition-all hover:border-border-strong"
            >
              <span className="flex items-center gap-2 text-small font-medium text-slate-300">
                <Video size={15} aria-hidden="true" style={{ color: TERRA }} /> Download launch film
              </span>
              <ArrowUpRight size={16} aria-hidden="true" className="text-slate-400 transition-colors group-hover:text-paper" />
            </a>

            <a
              href={`${REPO_URL}#readme`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-xl border border-border bg-surface/40 p-4 transition-all hover:border-border-strong"
            >
              <span className="text-small font-medium text-slate-300">Read the full README</span>
              <ArrowUpRight size={16} aria-hidden="true" className="text-slate-400 transition-colors group-hover:text-paper" />
            </a>
          </aside>
        </div>

        {/* ═══ Related ═══ */}
        <section className="mt-16 border-t border-border pt-10">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <Eyebrow wide dot={false} rule={false} className="mb-2">
                Keep exploring
              </Eyebrow>
              <h2 className="text-h3 font-semibold tracking-tight text-paper">Related projects</h2>
            </div>
            <Link
              to="/projects"
              className="hidden items-center gap-1 text-small font-medium transition-colors hover:gap-2 sm:inline-flex"
              style={{ color: SAGE }}
            >
              All projects <ArrowUpRight size={13} aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {RELATED.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="group rounded-xl border border-border bg-surface/40 p-5 transition-all hover:border-border-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-soft"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="mb-1.5 font-mono text-label uppercase tracking-widest text-slate-400">
                      {item.tag}
                    </p>
                    <h3 className="mb-1.5 font-semibold text-paper transition-colors group-hover:text-accent-soft">
                      {item.title}
                    </h3>
                    <p className="text-small leading-relaxed text-slate-400">{item.blurb}</p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-slate-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-paper"
                  />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Credits */}
        <p className="mt-10 text-label leading-relaxed tracking-normal text-slate-400">
          Launch film music: <em>Happy Beats Business Moves, Vol. 12</em> by Sascha Ende
          (ende.app), licensed under CC BY 4.0.
        </p>
      </Container>

      {/* ═══ Lightbox ═══ */}
      {selectedImage && (
        <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </div>
  )
}
