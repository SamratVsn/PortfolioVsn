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
  Cpu,
  GitBranch,
  Boxes,
} from 'lucide-react'
import SEO from './SEO'
import CaseStudyLayout from './case-study/CaseStudyLayout'
import CaseStudyTabs from './case-study/CaseStudyTabs'
import CaseStudySection from './case-study/CaseStudySection'
import { AsideCard, SpecList, BulletList, TagList } from './case-study/CaseStudyAside'
import Card from './ui/Card'
import JuicePoster from '../assets/JuicePoster.jpeg'

const REPO_URL = 'https://github.com/SamratVsn/Juicetracker'

const SPECS = [
  { label: 'Language', value: 'Kotlin' },
  { label: 'Architecture', value: 'MVVM' },
  { label: 'UI', value: 'Compose + XML Views' },
  { label: 'Storage', value: 'Room Database' },
  { label: 'Asynchrony', value: 'Coroutines & StateFlow' },
  { label: 'Interop', value: 'Compose inside RecyclerView' },
]

const FEATURES = [
  { icon: GlassWater, title: 'Juice Logging', detail: 'Save juice combinations with name, description, color, and rating.' },
  { icon: Database, title: 'Room Persistence', detail: 'All juice data stored safely and managed locally with Room.' },
  { icon: Layers, title: 'Compose + Views Interop', detail: 'Embeds Jetpack Compose elements inside a View-based architecture.' },
  { icon: Zap, title: 'Reactive UI', detail: 'Kotlin StateFlow keeps the interface responsive to data changes.' },
  { icon: CheckCircle2, title: 'MVVM Architecture', detail: 'Clean separation between UI, ViewModel, and Room data layer.' },
  { icon: ClipboardList, title: 'Detail & Ratings', detail: 'Track color and rating for each juice combination you create.' },
]

const LIBRARIES = [
  { name: 'androidx.compose', purpose: 'Declarative UI framework' },
  { name: 'androidx.room', purpose: 'SQLite object mapping' },
  { name: 'lifecycle-viewmodel-compose', purpose: 'ViewModel integration' },
  { name: 'kotlinx.coroutines', purpose: 'Async + StateFlow' },
  { name: 'androidx.recyclerview', purpose: 'View-based lists hosting Compose' },
]

const COMPONENTS = [
  'Juice Entry Form',
  'Juice List (RecyclerView)',
  'Compose Item Composables',
  'Room Entity & DAO',
  'ViewModel + StateFlow',
  'Rating & Color Fields',
]

const TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'features', label: 'Features' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'system', label: 'System' },
]

function JuiceTracker() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <>
      <SEO
        title="Juice Tracker — Android App in Kotlin | Samrat Parajuli"
        description="Android app for tracking juice combinations and ratings — Kotlin, MVVM, Room, and Jetpack Compose + View interoperability. Built by Samrat Parajuli."
        ogUrl="https://www.samratparajuli0.com.np/projects/juicetracker"
        ogType="article"
        imageAlt="Juice Tracker — Android app for logging juice combinations and ratings"
        schema={[
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.samratparajuli0.com.np/' },
              { '@type': 'ListItem', position: 2, name: 'Projects', item: 'https://www.samratparajuli0.com.np/projects' },
              { '@type': 'ListItem', position: 3, name: 'Juice Tracker', item: 'https://www.samratparajuli0.com.np/projects/juicetracker' },
            ],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            '@id': 'https://www.samratparajuli0.com.np/projects/juicetracker#app',
            name: 'Juice Tracker',
            applicationCategory: 'LifestyleApplication',
            operatingSystem: 'Android',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
            description: 'Android app for tracking juice combinations, details, and ratings. Explores Compose-View interop with Room, RecyclerView, and reactive state. Built with Kotlin, MVVM, Room, and Jetpack Compose + View interoperability.',
            url: REPO_URL,
            author: { '@id': 'https://www.samratparajuli0.com.np/#person' },
          },
        ]}
      />

      <CaseStudyLayout
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Projects', to: '/projects' },
          { label: 'Juice Tracker' },
        ]}
        eyebrow="Android App"
        title="Juice Tracker"
        summary="A small Kotlin app for logging juice combinations — and a deliberate exercise in Compose/View interoperability with Room and StateFlow."
        actions={[{ href: REPO_URL, label: 'View Code', icon: Github, primary: true }]}
        banner={
          <div className="relative overflow-hidden rounded-2xl border border-border">
            <img
              src={JuicePoster}
              alt="Juice Tracker app poster"
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
                  'XML Views',
                  'Room',
                  'ViewModel',
                  'Coroutines',
                  'StateFlow',
                  'RecyclerView',
                  'MVVM',
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
        <CaseStudySection title="Track juice combinations with modern Android architecture">
          <p className="text-body text-slate-400">
            Juice Tracker is a native Android application designed to track different juice combinations,
            details, and ratings. This project explores the transition and interoperability between
            traditional Android Views and Jetpack Compose — backed by local Room persistence and reactive
            StateFlow state.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Card variant="subtle" padding="sm">
              <p className="mb-2 text-small font-semibold text-accent-text">Views → Compose</p>
              <p className="text-small text-slate-400">Demonstrates a real migration path from XML Views to Jetpack Compose, mixing both in one app.</p>
            </Card>
            <Card variant="subtle" padding="sm">
              <p className="mb-2 text-small font-semibold text-accent-text">Local-first</p>
              <p className="text-small text-slate-400">All data stays on-device in a Room database — no network layer, instant responsiveness.</p>
            </Card>
          </div>
        </CaseStudySection>

        <div>
          <CaseStudyTabs tabs={TABS} active={activeTab} onChange={setActiveTab} />

          <div className="min-h-[400px]">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <p className="text-body text-slate-400">
                  This app demonstrates a complete local CRUD flow for juice entries — logging names,
                  descriptions, colors, and ratings — persisted with Room and rendered through a UI that
                  blends Jetpack Compose with classic Android Views.
                </p>
                <div className="space-y-4">
                  <h3 className="text-h4 font-semibold text-paper">Core Features</h3>
                  <BulletList
                    items={[
                      'Log juice entries with name, description, color, and rating',
                      'Persist everything locally with the Room database',
                      'Embed Compose UI inside a RecyclerView-based screen',
                      'Reactive updates driven by Kotlin StateFlow',
                      'MVVM separation between UI, ViewModel, and data layers',
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
                      <p className="text-small text-slate-400">Activities, Fragments, and Compose UI observe ViewModel state via StateFlow.</p>
                    </Card>
                    <Card variant="subtle" padding="sm">
                      <p className="mb-1 text-small font-semibold text-paper">ViewModel Layer</p>
                      <p className="text-small text-slate-400">Exposes UI state and business actions while keeping the UI free of persistence logic.</p>
                    </Card>
                    <Card variant="subtle" padding="sm">
                      <p className="mb-1 text-small font-semibold text-paper">Data Layer</p>
                      <p className="text-small text-slate-400">Room entities, DAOs, and database handle all local persistence.</p>
                    </Card>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="flex items-center gap-2 text-h4 font-semibold text-paper">
                    <Boxes size={16} aria-hidden="true" className="text-accent-text" /> UI Interoperability
                  </h3>
                  <div className="space-y-3">
                    <Card variant="subtle" padding="sm">
                      <p className="mb-2 text-small font-semibold text-paper">Compose in a RecyclerView</p>
                      <p className="text-small text-slate-400">Composable items are embedded directly inside View-based lists, proving incremental adoption works.</p>
                    </Card>
                    <Card variant="subtle" padding="sm">
                      <p className="mb-2 text-small font-semibold text-paper">Incremental Migration</p>
                      <p className="text-small text-slate-400">XML screens coexist with Compose elements, mirroring how real apps adopt Compose gradually.</p>
                    </Card>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="flex items-center gap-2 text-h4 font-semibold text-paper">
                    <GitBranch size={16} aria-hidden="true" className="text-accent-text" /> Design Principles
                  </h3>
                  <div className="space-y-3">
                    <Card variant="subtle" padding="sm">
                      <p className="mb-2 text-small font-semibold text-paper">MVVM with StateFlow</p>
                      <p className="text-small text-slate-400">Single source of truth flows from Room through ViewModels to the UI reactively.</p>
                    </Card>
                    <Card variant="subtle" padding="sm">
                      <p className="mb-2 text-small font-semibold text-paper">Local-first Design</p>
                      <p className="text-small text-slate-400">No network layer — every interaction is instantly reflected from the local database.</p>
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
                      { label: 'Language', value: 'Kotlin' },
                      { label: 'UI Framework', value: 'Jetpack Compose + Android XML Views' },
                      { label: 'Architecture', value: 'MVVM (Model-View-ViewModel)' },
                      { label: 'Database', value: 'Room Persistence Library' },
                      { label: 'Asynchrony', value: 'Kotlin Coroutines & StateFlow' },
                      { label: 'Prerequisite', value: 'Android SDK 33+' },
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
                    Fully migrating remaining Views to Compose, adding recipe templates, image support, and
                    search/filtering are natural next steps for the tracker.
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

export default JuiceTracker
