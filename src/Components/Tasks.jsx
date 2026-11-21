import { useState } from 'react'
import {
  Github,
  ArrowUpRight,
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
  Tag,
  BarChart3,
  Settings,
  ListTodo,
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
import Button from './ui/Button'
import { image } from '../content/images'
import ResponsiveImage from './ui/ResponsiveImage'

const RELEASE_URL = 'https://github.com/SamratVsn/Tasks/releases/latest/download/Tasks.apk'
const REPO_URL = 'https://github.com/SamratVsn/Tasks'
const tasks = getProject('todo')

const SPECS = [
  { label: 'Min SDK', value: '26 (Android 8.0)' },
  { label: 'Target SDK', value: '37 (Android 17)' },
  { label: 'Language', value: 'Kotlin 2.2.10' },
  { label: 'UI Framework', value: 'Jetpack Compose' },
  { label: 'Design System', value: 'Material Design 3 (M3)' },
  { label: 'Database', value: 'Room 3 (SQLite)' },
  { label: 'Preferences', value: 'Jetpack DataStore' },
  { label: 'Architecture', value: 'MVVM + Repository' },
  { label: 'Navigation', value: 'Navigation Compose (ToDoNavHost)' },
  { label: 'DI', value: 'Manual AppContainer' },
  { label: 'Build', value: 'AGP 9.4.0' },
]

const FEATURES = [
  { icon: ListTodo, title: 'Task Management', detail: 'Effortlessly create, edit, and delete tasks with a clean UI designed for productivity.' },
  { icon: Search, title: 'Search & Filter', detail: 'Quickly locate tasks with global search and dedicated category-based filtering.' },
  { icon: Timer, title: 'Focus Sessions', detail: 'Integrated Pomodoro-style timer with customizable durations (15m, 25m, 45m, 60m) and a beefy UI for better visibility.' },
  { icon: User, title: 'Personalized Profile', detail: "Track your progress with live statistics - All-time Created, Completed, and Today's Wins - along with motivational bios." },
  { icon: Palette, title: 'Dynamic Theming', detail: 'Support for System Default, Light Mode, and a specialized "Deep Sea" Dark Mode with a theme-adaptive UI.' },
  { icon: Navigation, title: 'Custom Navigation', detail: 'A unique floating navigation bar with an elevated Floating Action Button (FAB) for quick task entry.' },
  { icon: Bell, title: 'Smart Reminders', detail: 'Toggleable notifications to help you stay on track so important tasks never slip through the cracks.' },
  { icon: Tag, title: 'Category Management', detail: 'Pre-populated default categories (Study, Work, etc.) with the ability to add and safely delete custom ones.' },
  { icon: Database, title: 'Data Management', detail: 'Robust options to reset your progress or securely delete all data with confirmation dialogs.' },
  { icon: Layers, title: 'Persistent Storage', detail: 'Powered by Room Database for local task persistence and DataStore for user preferences.' },
  { icon: BarChart3, title: 'Polished UI/UX', detail: 'Custom animations, gradient backgrounds, and refined Material 3 components for a premium feel.' },
]

const SCREENSHOTS = [
  { src: image('todo-home'), label: 'Home', desc: 'Main task list with swipe-to-delete and smart grouping.' },
  { src: image('todo-focus'), label: 'Focus', desc: 'Pomodoro-style timer with customizable durations.' },
  { src: image('todo-categories'), label: 'Categories', desc: 'Organize tasks with pre-built and custom categories.' },
  { src: image('todo-profile'), label: 'Profile', desc: 'Live stats and personalized motivation.' },
  { src: image('todo-settings'), label: 'Settings', desc: 'Theme, reminders, and data management options.' },
  { src: image('todo-add'), label: 'Add Task', desc: 'Creating a new task entry with category selection.' },
  { src: image('todo-details'), label: 'Task Details', desc: 'Full description and status view.' },
]

const LAYERS = [
  { name: 'Presentation Layer', detail: 'UI Screens (Home, Focus, Category, Profile, Settings) and their respective ViewModels.' },
  { name: 'Domain Layer', detail: 'Business logic and data abstraction through Repositories.' },
  { name: 'Data Layer', detail: 'Room DAOs, Entities, and Preferences DataStore implementation.' },
  { name: 'Navigation Layer', detail: 'Centralized ToDoNavHost managing the app flow within a Single Activity.' },
]

const ROADMAP = [
  { title: 'Cloud Sync', detail: 'Firebase integration for multi-device synchronization.' },
  { title: 'Custom Tags', detail: 'Create personal labels for better task organization.' },
  { title: 'Interactive Widgets', detail: 'Access your tasks directly from the home screen.' },
  { title: 'Detailed Analytics', detail: 'Visual charts for weekly and monthly productivity trends.' },
]

const LIBRARIES = [
  { name: 'Jetpack Compose', purpose: 'Declarative UI toolkit' },
  { name: 'Material Design 3', purpose: 'Modern, customizable components' },
  { name: 'Room Database', purpose: 'Local SQLite for task persistence' },
  { name: 'Jetpack DataStore', purpose: 'Type-safe preferences storage' },
  { name: 'Navigation Compose', purpose: 'Type-safe in-app routing' },
  { name: 'Coroutines & Flow', purpose: 'Async ops & reactive state' },
  { name: 'ViewModel', purpose: 'Lifecycle-aware state management' },
  { name: 'SplashScreen API', purpose: 'Professional app launch' },
  { name: 'AppContainer', purpose: 'Manual dependency injection' },
]

const DEVELOPER = [
  { label: 'Developer', value: 'Samrat Parajuli' },
  { label: 'GitHub', value: 'github.com/SamratVsn', href: 'https://github.com/SamratVsn' },
  { label: 'Portfolio', value: 'samratparajuli0.com.np', href: 'https://www.samratparajuli0.com.np' },
  { label: 'LinkedIn', value: 'Samrat Parajuli', href: 'https://linkedin.com/in/samratvsn' },
  { label: 'License', value: 'MIT License' },
]

const TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'features', label: 'Features' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'roadmap', label: 'Roadmap' },
]

function Tasks() {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <>
      <SEO
        title="Tasks — Android To-Do & Pomodoro App | Samrat Parajuli"
        description="Tasks is an Android task manager with Pomodoro sessions, categories, reminders, and dynamic theming. Built with Kotlin & Jetpack Compose by Samrat Parajuli."
        ogUrl="https://www.samratparajuli0.com.np/projects/todo"
        ogType="article"
        imageAlt="Tasks — Android task manager built with Kotlin and Jetpack Compose"
        schema={[
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.samratparajuli0.com.np/' },
              { '@type': 'ListItem', position: 2, name: 'Projects', item: 'https://www.samratparajuli0.com.np/projects' },
              { '@type': 'ListItem', position: 3, name: 'Tasks', item: 'https://www.samratparajuli0.com.np/projects/todo' },
            ],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            '@id': 'https://www.samratparajuli0.com.np/projects/todo#app',
            name: 'Tasks',
            applicationCategory: 'ProductivityApplication',
            operatingSystem: 'Android',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
            description: 'Tasks is an Android task manager with Pomodoro sessions, categories, reminders, and dynamic theming. Built with Kotlin & Jetpack Compose by Samrat Parajuli.',
            url: REPO_URL,
            downloadUrl: RELEASE_URL,
            author: { '@id': 'https://www.samratparajuli0.com.np/#person' },
          },
        ]}
      />

      <CaseStudyLayout
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Projects', to: '/projects' },
          { label: 'Tasks' },
        ]}
        eyebrow="Android App"
        title="Tasks"
        badge="v2.1.0"
        summary="A local-first task manager with Pomodoro focus sessions, categories, reminders, and dynamic theming."
        actions={[
          { href: RELEASE_URL, label: 'Download App', icon: Download, primary: true, download: true },
          { href: REPO_URL, label: 'View Code', icon: Github },
        ]}
        aside={
          <>
            <AsideCard title="Technical Stack">
              <SpecList items={SPECS} />
            </AsideCard>

            <AsideCard title="Developer & Source">
              <SpecList items={DEVELOPER} />
            </AsideCard>

            <AsideCard title="Tech Stack">
              <TagList
                items={[
                  'Kotlin',
                  'Jetpack Compose',
                  'Material 3',
                  'Room',
                  'DataStore',
                  'Coroutines & Flow',
                  'Navigation Compose',
                  'AppContainer',
                  'ViewModel',
                  'SplashScreen API',
                ]}
              />
            </AsideCard>

            <Button href={RELEASE_URL} variant="primary" className="w-full" download>
              <Download size={16} aria-hidden="true" /> Download App Release
            </Button>

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
              setSelectedImage({ src: image('todo-home'), label: 'Tasks', desc: 'A sleek, modern task management app built with Kotlin & Jetpack Compose.' })
            }
            aria-label="Open Tasks app screenshot"
            className="block w-full cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent-soft"
          >
            <ResponsiveImage
              image={image('todo-home')}
              alt="Tasks app"
              sizes="(min-width: 1024px) 720px, 100vw"
              className="h-auto w-full opacity-90 transition-opacity hover:opacity-100"
              loading="lazy"
            />
          </button>
        </div>

        <CaseStudySection title="A sleek, modern task manager for Android">
          <p className="text-body text-slate-400">
            Tasks is designed to help you stay organized, focused, and achieve your goals.
            It features Pomodoro-style focus sessions, category management, smart reminders,
            and full System, Light, and "Deep Sea" Dark theme support — all wrapped in a
            polished Material 3 experience. Built entirely with modern Jetpack Compose,
            backed by a clean MVVM + Repository architecture with Room and DataStore persistence.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Card variant="subtle" padding="sm">
              <p className="mb-2 text-small font-semibold text-accent-text">Focus Sessions</p>
              <p className="text-small text-slate-400">Pomodoro-style timer with customizable durations (15m, 25m, 45m, 60m) for deep-work productivity.</p>
            </Card>
            <Card variant="subtle" padding="sm">
              <p className="mb-2 text-small font-semibold text-accent-text">Category Management</p>
              <p className="text-small text-slate-400">Pre-populated categories (Study, Work, etc.) with the ability to add and safely delete custom ones.</p>
            </Card>
          </div>
        </CaseStudySection>

        <div>
          <CaseStudyTabs tabs={TABS} active={activeTab} onChange={setActiveTab} />

          <div className="min-h-[400px]">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <p className="text-body text-slate-400">
                  Tasks is engineered around a strict separation of concerns so it stays scalable
                  and testable. StateFlow-driven ViewModels keep a single source of truth, clean
                  repository interfaces abstract the data sources, and Room plus DataStore handle
                  local persistence for tasks and preferences.
                </p>
                <div className="space-y-4">
                  <h3 className="text-h4 font-semibold text-paper">Key Features</h3>
                  <BulletList
                    items={[
                      'Effortlessly create, edit, and delete tasks with a clean UI',
                      'Global search and category-based filtering',
                      'Pomodoro-style Focus Sessions (15m, 25m, 45m, 60m)',
                      "Live profile stats: Created, Completed, Today's Wins",
                      'System, Light, and "Deep Sea" Dark theme support',
                      'Toggleable reminder notifications',
                      'Pre-populated and custom category management',
                      'Floating navigation bar with elevated FAB',
                      'Custom animations and gradient backgrounds',
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
                    <Layers size={16} aria-hidden="true" className="text-accent-text" /> App Architecture
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
                    <FolderTree size={16} aria-hidden="true" className="text-accent-text" /> Project Structure
                  </h3>
                  <pre className="overflow-x-auto rounded-xl border border-border bg-canvas p-4 font-mono text-small leading-relaxed text-slate-400">
                    <code>{`app/
├── data/             // Database entities, DAOs, Repositories & DataStore
├── ui/
│   ├── home/         // Home screen logic & UI
│   ├── screens/      // Focus, Profile, Settings, Category, Add/Edit
│   ├── navigation/   // NavHost & Destination definitions
│   └── theme/        // Deep Sea schemes, typography & shapes
├── ToDoApp.kt        // Custom Floating Navigation & Scaffold
└── MainActivity.kt   // Entry point with theme & splash`}</code>
                  </pre>
                </div>
              </div>
            )}

            {activeTab === 'roadmap' && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="flex items-center gap-2 text-h4 font-semibold text-paper">
                    <Download size={16} aria-hidden="true" className="text-accent-text" /> Future Roadmap
                  </h3>
                  <div className="space-y-3">
                    {ROADMAP.map((item) => (
                      <Card key={item.title} variant="subtle" padding="sm">
                        <p className="mb-1 flex items-center gap-2 text-small font-semibold text-paper">
                          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
                          {item.title}
                        </p>
                        <p className="text-small text-slate-400">{item.detail}</p>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="flex items-center gap-2 text-h4 font-semibold text-paper">
                    <Cpu size={16} aria-hidden="true" className="text-accent-text" /> Runtime Environment
                  </h3>
                  <dl className="space-y-3">
                    {[
                      { label: 'Minimum SDK', value: 'API 26 (Android 8.0)' },
                      { label: 'Target / Compile SDK', value: 'API 37 (Android 17)' },
                      { label: 'Kotlin Version', value: '2.2.10' },
                      { label: 'Build Tool', value: 'Gradle 9.3.1' },
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
              </div>
            )}
          </div>
        </div>

        <CaseStudySection
          eyebrow="Engineering decisions"
          title="Local-first choices that keep tasks safe"
        >
          <p className="text-body text-slate-400">
            Tasks has no backend in its current source. That makes persistence,
            category deletion, and dependency wiring the decisions that matter
            most.
          </p>
          <DecisionList decisions={tasks?.decisions} />
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Data model"
          title="Tasks, categories, and local state"
        >
          <p className="text-body text-slate-400">
            Two Room tables hold the task data. Preferences and focus statistics
            live in DataStore, and the timer itself is runtime state rather than a
            database row.
          </p>
          <DataModelTable
            entities={tasks?.dataModel}
            caption="Tasks Room entities, DataStore preferences, and timer state"
          />
        </CaseStudySection>

        <ScreenshotGallery screenshots={SCREENSHOTS} onSelect={setSelectedImage} columns={3} />
      </CaseStudyLayout>

      {selectedImage && (
        <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </>
  )
}

export default Tasks
