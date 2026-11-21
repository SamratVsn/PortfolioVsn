import { useState } from 'react'
import { Github, Activity, HardDrive, Box, Search, Trash2, Edit } from 'lucide-react'
import SEO from './SEO'
import Lightbox from './Lightbox'
import CaseStudyLayout from './case-study/CaseStudyLayout'
import CaseStudyTabs from './case-study/CaseStudyTabs'
import CaseStudySection from './case-study/CaseStudySection'
import ScreenshotGallery from './case-study/ScreenshotGallery'
import { AsideCard, SpecList, BulletList } from './case-study/CaseStudyAside'
import Card from './ui/Card'

import { image } from '../content/images'
import ResponsiveImage from './ui/ResponsiveImage'

const REPO_URL = 'https://github.com/SamratVsn/C-codes'

const SCREENSHOTS = [
  { src: image('sms-sms2'), label: 'Add Record', desc: 'Validating struct serialization to disk.' },
  { src: image('sms-sms3'), label: 'Database Dump', desc: 'Iterating through binary stream using fread().' },
  { src: image('sms-sms4'), label: 'Query Engine', desc: 'Testing fseek() jump logic by Roll No.' },
  { src: image('sms-sms5'), label: 'Update Buffer', desc: 'Overwriting specific byte offsets in rb+ mode.' },
  { src: image('sms-sms6'), label: 'Delete Rewrite', desc: 'Temporary file swap logic for record removal.' },
  { src: image('sms-sms7'), label: 'Integrity Check', desc: 'Validating file pointers and end-of-file markers.' },
]

const FEATURES = [
  { icon: Box, title: 'Serialization', desc: 'Writing struct blocks directly to disk.' },
  { icon: Search, title: 'Fseek Navigation', desc: 'Direct access to records via byte offsets.' },
  { icon: Trash2, title: 'Atomic Delete', desc: 'Temporary file swap to ensure data safety.' },
  { icon: Edit, title: 'In-Place Edit', desc: 'Using rb+ mode for non-destructive updates.' },
]

const SPECS = [
  { label: 'Language', value: 'ANSI C / C99' },
  { label: 'Compiler', value: 'GCC / Clang' },
  { label: 'I/O Mode', value: 'Unbuffered Binary' },
  { label: 'Pattern', value: 'Direct Memory Access' },
]

const TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'features', label: 'Features' },
  { id: 'challenges', label: 'Challenges' },
]

const SMS = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <>
      <SEO
        title="Student Management System in C | Samrat Parajuli"
        description="A console-based CRUD system in C with binary file I/O, struct serialization, and direct byte-offset navigation. Built by Samrat Parajuli."
        ogUrl="https://www.samratparajuli0.com.np/projects/sms"
        ogType="article"
        imageAlt="Student Management System — console CRUD program written in C"
        schema={[
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.samratparajuli0.com.np/' },
              { '@type': 'ListItem', position: 2, name: 'Projects', item: 'https://www.samratparajuli0.com.np/projects' },
              { '@type': 'ListItem', position: 3, name: 'Student Management System', item: 'https://www.samratparajuli0.com.np/projects/sms' },
            ],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'SoftwareSourceCode',
            '@id': 'https://www.samratparajuli0.com.np/projects/sms#app',
            name: 'Student Management System',
            programmingLanguage: 'C',
            description: 'Console-based CRUD system in C with binary file I/O, struct serialization, and direct byte-offset navigation. Crash-safe data integrity with raw byte-level file access.',
            codeRepository: REPO_URL,
            author: { '@id': 'https://www.samratparajuli0.com.np/#person' },
          },
        ]}
      />

      <CaseStudyLayout
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Projects', to: '/projects' },
          { label: 'Student Management System' },
        ]}
        eyebrow="System Software"
        title="Student Management System"
        summary="A console CRUD database in C: binary file storage, struct serialization, and direct byte-offset navigation."
        actions={[{ href: REPO_URL, label: 'View Code', icon: Github, primary: true }]}
        aside={
          <>
            <AsideCard title="Specifications" icon={Activity}>
              <SpecList items={SPECS} />
            </AsideCard>

            <AsideCard title="Data Structure" icon={HardDrive}>
              <div className="space-y-1 rounded-xl border border-border bg-canvas p-4 font-mono text-label tracking-normal leading-relaxed text-slate-400">
                <div><span className="text-accent-text">struct</span> Student {'{'}</div>
                <div className="ml-4">
                  <div><span className="text-slate-400">char</span> name[50];</div>
                  <div><span className="text-slate-400">int</span> rollNo;</div>
                  <div><span className="text-slate-400">float</span> gpa;</div>
                </div>
                <div>{'}'};</div>
              </div>
            </AsideCard>

            <AsideCard title="Project Stats">
              <dl className="space-y-3">
                {[
                  { label: 'Lines of Code', value: '~450' },
                  { label: 'Functions', value: '8' },
                  { label: 'Complexity', value: 'Intermediate' },
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
          <button
            type="button"
            onClick={() =>
              setSelectedImage({ src: image('sms-sms1'), label: 'Main Menu', desc: 'Interactive command-line interface' })
            }
            aria-label="Open Main Menu screenshot"
            className="block w-full cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent-soft"
          >
            <ResponsiveImage
              image={image('sms-sms1')}
              alt="CLI Interface"
              sizes="(min-width: 1024px) 720px, 100vw"
              className="h-auto w-full opacity-90 transition-opacity hover:opacity-100"
            />
          </button>
        </div>

        <CaseStudySection title="Low-level database engine in C">
          <p className="text-body text-slate-400">
            A high-performance CRUD system that bypasses high-level abstractions to manipulate raw data streams directly.
            This project demonstrates deep understanding of file I/O, memory management, and binary serialization using
            the C Standard Library.
          </p>
          <div className="rounded-xl border border-border bg-surface/60 p-4">
            <p className="text-small text-slate-300">
              <span className="font-semibold text-accent-text">Key Pattern:</span> Synchronous file I/O with manual buffer
              flushing to ensure data persistence even in the event of software interrupt.
            </p>
          </div>
        </CaseStudySection>

        <div>
          <CaseStudyTabs tabs={TABS} active={activeTab} onChange={setActiveTab} />

          <div className="min-h-[300px]">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <p className="text-body text-slate-400">
                  This project demonstrates a low-level implementation of a database engine using the C Standard Library.
                  It showcases how modern databases work under the hood by directly manipulating binary data streams.
                </p>
                <div className="space-y-4">
                  <h3 className="text-h4 font-semibold text-paper">Core Architecture</h3>
                  <BulletList
                    items={[
                      'Binary file storage with struct serialization',
                      'Direct byte-offset navigation using fseek()',
                      'Atomic operations with temporary file swapping',
                      'In-place updates using rb+ file mode',
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
                      <feature.icon size={20} aria-hidden="true" className="mt-1 shrink-0 text-accent-text" />
                      <div>
                        <h4 className="mb-1 text-h4 font-semibold text-paper">{feature.title}</h4>
                        <p className="text-small text-slate-400">{feature.desc}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}

            {activeTab === 'challenges' && (
              <div className="space-y-6">
                <div className="rounded-xl border border-amber-900/50 bg-amber-900/10 p-5">
                  <h4 className="mb-2 text-small font-semibold text-amber-200">Struct Padding Issue</h4>
                  <p className="mb-3 text-small text-slate-400">
                    Records became unreadable due to memory alignment differences across architectures.
                  </p>
                  <div className="rounded-lg bg-canvas p-3 font-mono text-label tracking-normal text-slate-300">
                    <span className="text-accent-text">Solution:</span> #pragma pack(1)
                  </div>
                </div>
                <div className="rounded-xl border border-amber-900/50 bg-amber-900/10 p-5">
                  <h4 className="mb-2 text-small font-semibold text-amber-200">File Pointer Management</h4>
                  <p className="text-small text-slate-400">
                    Managing file pointers across multiple operations required careful tracking to prevent
                    data corruption. Implemented validation checks to ensure pointer consistency.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <ScreenshotGallery
          screenshots={SCREENSHOTS}
          onSelect={setSelectedImage}
          columns={3}
          title="Execution Screenshots"
        />
      </CaseStudyLayout>

      {selectedImage && (
        <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </>
  )
}

export default SMS
