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
  LayoutGrid,
} from 'lucide-react'
import SEO from './SEO'
import CaseStudyLayout from './case-study/CaseStudyLayout'
import CaseStudyTabs from './case-study/CaseStudyTabs'
import CaseStudySection from './case-study/CaseStudySection'
import { AsideCard, SpecList, BulletList, TagList } from './case-study/CaseStudyAside'
import Card from './ui/Card'
import KathmanduPoster from '../assets/KathmanduPoster.jpeg'

const REPO_URL = 'https://github.com/SamratVsn/Kathmandu'

const SPECS = [
  { label: 'Language', value: 'Kotlin 1.9.0' },
  { label: 'Architecture', value: 'MVVM' },
  { label: 'Interface', value: 'Jetpack Compose (M3)' },
  { label: 'Navigation', value: 'Navigation Compose' },
  { label: 'State', value: 'ViewModel & StateFlow' },
  { label: 'Min API', value: 'API 24+' },
]

const FEATURES = [
  { icon: Landmark, title: 'Special Places', detail: 'Iconic and historically significant buildings across Kathmandu.' },
  { icon: Church, title: 'Temples', detail: 'Prominent Hindu and Buddhist temples, including Pashupatinath.' },
  { icon: Store, title: 'Major Shops', detail: 'Popular shopping streets, markets, and commercial areas.' },
  { icon: MapPin, title: 'Tourist Destinations', detail: 'Well-known attractions and places of interest for visitors.' },
  { icon: Compass, title: 'Seamless Navigation', detail: 'Smooth transitions between categories and location details.' },
  { icon: RefreshCw, title: 'State Preservation', detail: 'ViewModel-backed state survives screen rotation and configuration changes.' },
  { icon: Palette, title: 'Material 3 Design', detail: "Custom color scheme and typography reflecting Kathmandu's cultural aesthetics." },
  { icon: Layers, title: 'MVVM + StateFlow', detail: 'Clean separation of UI, business logic, and data with reactive state.' },
]

const LIBRARIES = [
  { name: 'androidx.compose', purpose: 'Declarative UI framework' },
  { name: 'material3', purpose: 'Material Design 3 components' },
  { name: 'navigation-compose', purpose: 'In-app routing' },
  { name: 'lifecycle-viewmodel-compose', purpose: 'ViewModel integration' },
  { name: 'kotlinx.coroutines', purpose: 'Async + StateFlow' },
]

const COMPONENTS = [
  'Start / Categories / Options Screens',
  'CityViewModel',
  'Places DataSource',
  'CityUiState + Place Models',
  'Material 3 Theme',
  'Navigation Graph',
]

const TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'features', label: 'Features' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'system', label: 'System' },
]

function Kathmandu() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <>
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
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.samratparajuli0.com.np/' },
              { '@type': 'ListItem', position: 2, name: 'Projects', item: 'https://www.samratparajuli0.com.np/projects' },
              { '@type': 'ListItem', position: 3, name: 'Kathmandu My-City App', item: 'https://www.samratparajuli0.com.np/projects/kathmandu' },
            ],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            '@id': 'https://www.samratparajuli0.com.np/projects/kathmandu#app',
            name: 'Kathmandu My-City App',
            applicationCategory: 'TravelApplication',
            operatingSystem: 'Android',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
            description: 'Android app showcasing Kathmandu temples, shops, and destinations with adaptive layouts. Built with Kotlin, Jetpack Compose (M3), MVVM, and Navigation Compose.',
            url: REPO_URL,
            author: { '@id': 'https://www.samratparajuli0.com.np/#person' },
          },
        ]}
      />

      <CaseStudyLayout
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Projects', to: '/projects' },
          { label: 'Kathmandu My-City' },
        ]}
        eyebrow="Android App"
        title="Kathmandu My-City"
        summary="A Material 3 recommendation app for Kathmandu's places, temples, shops, and tourist destinations, built around Compose navigation and ViewModel state."
        actions={[{ href: REPO_URL, label: 'View Code', icon: Github, primary: true }]}
        banner={
          <div className="relative overflow-hidden rounded-2xl border border-border">
            <img
              src={KathmanduPoster}
              alt="Kathmandu My-City app poster"
              className="h-64 w-full object-cover sm:h-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-canvas via-transparent to-transparent" />
          </div>
        }
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
                  'Navigation Compose',
                  'ViewModel',
                  'StateFlow',
                  'MVVM',
                  'Adaptive Layouts',
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
        footer={
          <Link
            to="/projects/avalokan"
            className="group flex flex-col justify-between gap-4 rounded-xl border border-accent-border bg-surface p-5 transition-colors hover:border-accent-border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-soft sm:flex-row sm:items-center sm:p-6"
          >
            <div>
              <p className="mb-2 font-mono text-label uppercase tracking-[0.3em] text-accent-soft">
                Next chapter · New
              </p>
              <h3 className="text-h4 font-semibold tracking-tight text-paper transition-colors group-hover:text-accent-soft">
                Avalokan
              </h3>
              <p className="mt-1 max-w-xl text-small text-slate-400">
                The heritage thread this app started, grown into a full Firestore-backed Android
                explorer for Nepal — with stories, events, offline caching, and an optional account.
              </p>
            </div>
            <span
              className="inline-flex shrink-0 items-center gap-2 rounded-lg px-4 py-2 text-small font-semibold text-ink transition-transform group-hover:translate-x-0.5"
              style={{ backgroundColor: 'var(--p-accent)' }}
            >
              Explore Avalokan <ArrowUpRight size={15} aria-hidden="true" />
            </span>
          </Link>
        }
      >
        <CaseStudySection title="Discover Kathmandu through curated local recommendations">
          <p className="text-body text-slate-400">
            Kathmandu My-City is a recommendation app that helps users discover the cultural richness and
            iconic destinations of Kathmandu, Nepal. It features an intuitive, category-based interface
            highlighting must-visit locations across special places, temples, shopping areas, and tourist
            destinations — built as the final project for Unit 4 of the Android Basics with Compose course.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Card variant="subtle" padding="sm">
              <p className="mb-2 text-small font-semibold text-accent-text">Adaptive Layouts</p>
              <p className="text-small text-slate-400">Responsive UI components that adjust to different screen sizes and orientations.</p>
            </Card>
            <Card variant="subtle" padding="sm">
              <p className="mb-2 text-small font-semibold text-accent-text">Cultural Theming</p>
              <p className="text-small text-slate-400">Custom Material 3 color scheme reflecting Kathmandu's cultural aesthetics.</p>
            </Card>
          </div>
        </CaseStudySection>

        <div>
          <CaseStudyTabs tabs={TABS} active={activeTab} onChange={setActiveTab} />

          <div className="min-h-[400px]">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <p className="text-body text-slate-400">
                  This app demonstrates a complete category-based recommendation flow: users pick a category,
                  browse curated places, and open detailed views — with state preserved across configuration
                  changes through a ViewModel and a reactive Material 3 UI.
                </p>
                <div className="space-y-4">
                  <h3 className="text-h4 font-semibold text-paper">Core Features</h3>
                  <BulletList
                    items={[
                      'Browse Special Places, Temples, Major Shops, and Tourist Destinations',
                      'View curated recommendations with names, details, and photos',
                      'Smooth transitions between category and location detail screens',
                      'State preserved across screen rotation via ViewModel',
                      'Full Material 3 theming with a cultural color palette',
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
                    <LayoutGrid size={16} aria-hidden="true" className="text-accent-text" /> Screen Flow
                  </h3>
                  <div className="space-y-3">
                    <Card variant="subtle" padding="sm">
                      <p className="mb-1 text-small font-semibold text-paper">Start Screen</p>
                      <p className="text-small text-slate-400">App entry point that introduces the Kathmandu My-City experience.</p>
                    </Card>
                    <Card variant="subtle" padding="sm">
                      <p className="mb-1 text-small font-semibold text-paper">Categories Screen</p>
                      <p className="text-small text-slate-400">Browse Special Places, Temples, Major Shops, and Tourist Destinations.</p>
                    </Card>
                    <Card variant="subtle" padding="sm">
                      <p className="mb-1 text-small font-semibold text-paper">Options Screen</p>
                      <p className="text-small text-slate-400">Detailed location cards with names, descriptions, and imagery.</p>
                    </Card>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="flex items-center gap-2 text-h4 font-semibold text-paper">
                    <FolderTree size={16} aria-hidden="true" className="text-accent-text" /> Project Structure
                  </h3>
                  <div className="rounded-xl border border-border bg-canvas p-4 font-mono text-small leading-relaxed text-slate-400">
                    <p>com.example.kathmandu/</p>
                    <p className="ml-4">├── <span className="text-accent-text">data/</span> <span className="text-slate-400">// Local data provider (DataSource)</span></p>
                    <p className="ml-4">├── <span className="text-accent-text">model/</span> <span className="text-slate-400">// Places.kt, CityUiState</span></p>
                    <p className="ml-4">├── <span className="text-accent-text">ui/</span></p>
                    <p className="ml-8">│   ├── theme/ <span className="text-slate-400">// M3 color, type, shapes</span></p>
                    <p className="ml-8">│   ├── CityViewModel.kt <span className="text-slate-400">// Business logic & state</span></p>
                    <p className="ml-8">│   ├── CityScreen.kt <span className="text-slate-400">// Root Composable</span></p>
                    <p className="ml-8">│   └── screens/ <span className="text-slate-400">// Start, Categories, Options</span></p>
                    <p className="ml-4">└── MainActivity.kt <span className="text-slate-400">// App entry point</span></p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="flex items-center gap-2 text-h4 font-semibold text-paper">
                    <Layers size={16} aria-hidden="true" className="text-accent-text" /> Design Principles
                  </h3>
                  <div className="space-y-3">
                    <Card variant="subtle" padding="sm">
                      <p className="mb-2 text-small font-semibold text-paper">MVVM + Reactive State</p>
                      <p className="text-small text-slate-400">CityViewModel exposes UI state via StateFlow, keeping screens dumb and data-driven.</p>
                    </Card>
                    <Card variant="subtle" padding="sm">
                      <p className="mb-2 text-small font-semibold text-paper">State Preservation</p>
                      <p className="text-small text-slate-400">ViewModel-scoped state survives rotation, keeping navigation and selections intact.</p>
                    </Card>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'system' && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="flex items-center gap-2 text-h4 font-semibold text-paper">
                    <Cpu size={16} aria-hidden="true" className="text-accent-text" /> Build Environment
                  </h3>
                  <dl className="space-y-3">
                    {[
                      { label: 'Language', value: 'Kotlin 1.9.0' },
                      { label: 'UI Framework', value: 'Jetpack Compose (Material 3)' },
                      { label: 'Architecture', value: 'MVVM (Model-View-ViewModel)' },
                      { label: 'Navigation', value: 'Jetpack Navigation Compose' },
                      { label: 'State Management', value: 'ViewModel & StateFlow' },
                      { label: 'Min API', value: 'API 24+ (Android 7.0)' },
                      { label: 'Course', value: 'Android Basics with Compose — Unit 4' },
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
                    Real-time place photos, Google Maps integration, user ratings and reviews, a favorites
                    list, and expanded coverage across Nepal's cities are natural next steps.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </CaseStudyLayout>
    </>
  )
}

export default Kathmandu
