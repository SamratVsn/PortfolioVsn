import { useState } from 'react'
import { Github } from 'lucide-react'
import SEO from './SEO'
import CaseStudyLayout from './case-study/CaseStudyLayout'
import CaseStudyTabs from './case-study/CaseStudyTabs'
import CaseStudySection from './case-study/CaseStudySection'
import ScreenshotGallery from './case-study/ScreenshotGallery'
import { AsideCard, SpecList, BulletList } from './case-study/CaseStudyAside'
import Card from './ui/Card'
import BMSK1 from '../assets/BMSK/BMSK1.png'
import BMSK2 from '../assets/BMSK/BMSK2.png'

const REPO_URL = 'https://github.com/SamratVsn/Kotlin-Beginner-Codes/blob/main/bankAccountManagement.kt'

const SPECS = [
  { label: 'Language', value: 'Kotlin 1.9' },
  { label: 'Architecture', value: 'Object-Oriented' },
  { label: 'Interface', value: 'CLI (Terminal)' },
  { label: 'Storage', value: 'In-Memory Collections' },
]

const FEATURES = [
  { title: 'Account Creation', detail: 'Dynamic object instantiation with unique UUIDs.' },
  { title: 'Balance Operations', detail: 'Atomic deposit/withdraw logic with error handling.' },
  { title: 'Data Integrity', detail: 'Validation checks for negative inputs and overdrafts.' },
  { title: 'Search Engine', detail: 'Efficient account retrieval with O(n) complexity.' },
]

const COMPONENTS = [
  'Account Management',
  'Transaction Engine',
  'Validation Logic',
  'Balance Operations',
  'Search & Retrieve',
]

const TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'features', label: 'Features' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'system', label: 'System' },
]

function BMSK() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <>
      <SEO
        title="Bank Management System in Kotlin | Samrat Parajuli"
        description="OOP-driven banking simulation in Kotlin with account encapsulation, transaction logic, and UUID-based identity. Built by Samrat Parajuli."
        ogUrl="https://www.samratparajuli0.com.np/projects/bmsk"
        ogType="article"
        imageAlt="Bank Account Manager — Kotlin banking simulation built by Samrat Parajuli"
        schema={[
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.samratparajuli0.com.np/' },
              { '@type': 'ListItem', position: 2, name: 'Projects', item: 'https://www.samratparajuli0.com.np/projects' },
              { '@type': 'ListItem', position: 3, name: 'Bank Management System', item: 'https://www.samratparajuli0.com.np/projects/bmsk' },
            ],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'SoftwareSourceCode',
            '@id': 'https://www.samratparajuli0.com.np/projects/bmsk#app',
            name: 'Bank Management System',
            programmingLanguage: 'Kotlin',
            description: 'OOP-driven banking simulation in Kotlin with account encapsulation, transaction logic, and UUID-based identity.',
            codeRepository: REPO_URL,
            author: { '@id': 'https://www.samratparajuli0.com.np/#person' },
          },
        ]}
      />

      <CaseStudyLayout
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Projects', to: '/projects' },
          { label: 'Bank Management System' },
        ]}
        eyebrow="Backend System"
        title="Bank Management System"
        summary="An object-oriented Kotlin banking simulation: account encapsulation, transaction rules, and validation at the CLI boundary."
        actions={[{ href: REPO_URL, label: 'View Code', icon: Github, primary: true }]}
        aside={
          <>
            <AsideCard title="Specifications">
              <SpecList items={SPECS} />
            </AsideCard>

            <AsideCard title="Core Components">
              <BulletList items={COMPONENTS} />
            </AsideCard>

            <AsideCard title="Project Stats">
              <dl className="space-y-3">
                {[
                  { label: 'Lines of Code', value: '~300' },
                  { label: 'Classes', value: '4' },
                  { label: 'Complexity', value: 'Beginner' },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between gap-4">
                    <dt className="text-small text-slate-400">{item.label}</dt>
                    <dd className="text-small font-medium text-slate-300">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </AsideCard>
          </>
        }
      >
        <div className="overflow-hidden rounded-xl border border-border bg-surface">
          <img
            src={BMSK1}
            alt="Bank Management System terminal interface"
            className="h-auto w-full opacity-90 transition-opacity hover:opacity-100"
            loading="lazy"
          />
        </div>

        <CaseStudySection title="Banking system built with Kotlin">
          <p className="text-body text-slate-400">
            This system demonstrates proficiency in Kotlin's object-oriented paradigm by simulating a core banking
            environment where account integrity and state management are prioritized. Built to handle immediate
            transaction logic with focus on encapsulation and secure data access.
          </p>
        </CaseStudySection>

        <div>
          <CaseStudyTabs tabs={TABS} active={activeTab} onChange={setActiveTab} />

          <div className="min-h-[400px]">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <p className="text-body text-slate-400">
                  This banking simulation demonstrates core principles of object-oriented design in Kotlin.
                  The system manages multiple accounts with transaction handling, validation, and state preservation.
                </p>
                <div className="space-y-4">
                  <h3 className="text-h4 font-semibold text-paper">Core Features</h3>
                  <BulletList
                    items={[
                      'Immediate transaction processing with validation',
                      'Account encapsulation with secure state management',
                      'UUID-based unique account identification',
                      'Comprehensive error handling for edge cases',
                    ]}
                  />
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {FEATURES.map((feat) => (
                  <Card key={feat.title} interactive>
                    <h4 className="mb-2 text-h4 font-semibold text-paper">{feat.title}</h4>
                    <p className="text-small text-slate-400">{feat.detail}</p>
                  </Card>
                ))}
              </div>
            )}

            {activeTab === 'architecture' && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-h4 font-semibold text-paper">Class Structure</h3>
                  <div className="rounded-xl border border-border bg-canvas p-4 font-mono text-small leading-relaxed text-slate-400">
                    <p><span className="text-purple-400">class</span> <span className="text-cyan-300">Account</span> {'{'}</p>
                    <p className="ml-4"><span className="text-blue-300">val</span> accId: <span className="text-slate-300">String</span></p>
                    <p className="ml-4"><span className="text-blue-300">var</span> balance: <span className="text-slate-300">Double</span></p>
                    <p className="ml-4"><span className="text-blue-300">val</span> customer: <span className="text-slate-300">Customer</span></p>
                    <p>{'}'}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-h4 font-semibold text-paper">Design Principles</h3>
                  <div className="space-y-3">
                    <Card variant="subtle" padding="sm">
                      <p className="mb-2 text-small font-semibold text-paper">Encapsulation</p>
                      <p className="text-small text-slate-400">Private state management for balance variables to prevent external corruption and ensure data integrity.</p>
                    </Card>
                    <Card variant="subtle" padding="sm">
                      <p className="mb-2 text-small font-semibold text-paper">Polymorphism</p>
                      <p className="text-small text-slate-400">Interface-based design for different account types (Savings, Current) with specialized behavior.</p>
                    </Card>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'system' && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-h4 font-semibold text-paper">Runtime Environment</h3>
                  <dl className="space-y-3">
                    {[
                      { label: 'Platform', value: 'JVM / Android Runtime' },
                      { label: 'Compiler', value: 'kotlinc 1.9.0' },
                      { label: 'Memory', value: 'Automatic Garbage Collection' },
                      { label: 'Build Tool', value: 'Gradle / Maven' },
                    ].map((item) => (
                      <div key={item.label} className="flex justify-between gap-4 rounded-xl border border-border bg-surface/50 p-3">
                        <dt className="text-small text-slate-400">{item.label}</dt>
                        <dd className="text-small font-medium text-slate-300">{item.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="rounded-xl border border-amber-900/50 bg-amber-900/10 p-4">
                  <p className="mb-2 text-small font-semibold text-amber-200">Known Limitation</p>
                  <p className="text-small text-amber-200/70">
                    Current implementation uses volatile in-memory storage. Persistence layer (database/file I/O)
                    planned for v2.0 release.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <ScreenshotGallery
          screenshots={[
            { src: BMSK1, label: 'Main Interface', desc: 'Account management menu with CRUD operations.' },
            { src: BMSK2, label: 'Transaction Flow', desc: 'Deposit and withdrawal logic with validation.' },
          ]}
          columns={2}
        />
      </CaseStudyLayout>
    </>
  )
}

export default BMSK
