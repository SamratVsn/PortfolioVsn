import { useState } from 'react'
import { ExternalLink, Github, Code2, Zap, Lock, Mail, Palette, Cloud } from 'lucide-react'
import SEO from './SEO'
import Lightbox from './Lightbox'
import CaseStudyLayout from './case-study/CaseStudyLayout'
import CaseStudyTabs from './case-study/CaseStudyTabs'
import CaseStudySection from './case-study/CaseStudySection'
import ScreenshotGallery from './case-study/ScreenshotGallery'
import DecisionList from './case-study/DecisionList'
import DataModelTable from './case-study/DataModelTable'
import { AsideCard, BulletList } from './case-study/CaseStudyAside'
import { getProject } from '../data/projects'
import Card from './ui/Card'

import { image } from '../content/images'
import ResponsiveImage from './ui/ResponsiveImage'

const LIVE_URL = 'https://blogvsn.vercel.app/'
const REPO_URL = 'https://github.com/SamratVsn/BlogVsn'
const blogvsn = getProject('blogvsn')

const TECH_STACK = [
  { icon: Code2, name: 'React 19', detail: 'Hooks-based UI state management' },
  { icon: Lock, name: 'Google OAuth', detail: 'Google Identity Services sign-in' },
  { icon: Cloud, name: 'Blogger API', detail: 'RESTful content fetching' },
  { icon: Mail, name: 'EmailJS', detail: 'Client-side email delivery' },
  { icon: Palette, name: 'Framer Motion', detail: 'Declarative animation logic' },
  { icon: Zap, name: 'Vercel', detail: 'Static build and hosting' },
]

const SCREENSHOTS = [
  { src: image('blogvsn-b2'), label: 'Data Feed', desc: 'Post list loaded from the Blogger API.' },
  { src: image('blogvsn-b3'), label: 'Content Engine', desc: 'Blogger post HTML rendered inside the React app.' },
  { src: image('blogvsn-b4'), label: 'Google Sign-in', desc: 'Google sign-in state reflected in the interface.' },
  { src: image('blogvsn-b5'), label: 'Contact Form', desc: 'EmailJS contact form with client-side validation.' },
]

const TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'tech', label: 'Tech' },
  { id: 'challenges', label: 'Challenges' },
]

const BlogVsn = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <>
      <SEO
        title="BlogVsn — React Blog Platform | Samrat Parajuli"
        description="Blog platform that pairs a React 19 frontend with the Blogger API and Google sign-in, deployed on Vercel. Built by Samrat Parajuli."
        ogUrl="https://www.samratparajuli0.com.np/projects/blogvsn"
        ogType="article"
        imageAlt="BlogVsn — React blog platform built by Samrat Parajuli"
        schema={[
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.samratparajuli0.com.np/' },
              { '@type': 'ListItem', position: 2, name: 'Projects', item: 'https://www.samratparajuli0.com.np/projects' },
              { '@type': 'ListItem', position: 3, name: 'BlogVsn Platform', item: 'https://www.samratparajuli0.com.np/projects/blogvsn' },
            ],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            '@id': 'https://www.samratparajuli0.com.np/projects/blogvsn#app',
            name: 'BlogVsn Platform',
            applicationCategory: 'WebApplication',
            operatingSystem: 'Web',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
            description: 'Blog platform that pairs a React 19 frontend with the Blogger API and Google sign-in, deployed on Vercel.',
            url: LIVE_URL,
            codeRepository: REPO_URL,
            author: { '@id': 'https://www.samratparajuli0.com.np/#person' },
          },
        ]}
      />

      <CaseStudyLayout
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Projects', to: '/projects' },
          { label: 'BlogVsn Platform' },
        ]}
        eyebrow="Web Platform"
        title="BlogVsn Platform"
        summary="A React frontend for a Blogger-managed blog, with Google sign-in and a client-side contact form."
        actions={[
          { href: LIVE_URL, label: 'Live Demo', icon: ExternalLink, primary: true },
          { href: REPO_URL, label: 'View Code', icon: Github },
        ]}
        aside={
          <>
            <AsideCard title="Data Flow" icon={Cloud}>
              <ol className="space-y-3">
                {[
                  'Static React build loads',
                  'Blogger API returns latest posts',
                  'React renders post cards',
                  'Google sign-in sets a local profile',
                ].map(
                  (step, index) => (
                    <li key={step} className="flex items-center gap-2 text-small text-slate-400">
                      <span className="font-mono font-bold text-accent-text">{index + 1}.</span>
                      <span>{step}</span>
                    </li>
                  )
                )}
              </ol>
            </AsideCard>

            <AsideCard title="Key Features">
              <BulletList
                items={[
                  'Google sign-in with OAuth',
                  'Blogger API content feed',
                  'EmailJS contact form',
                  'Client-side routing',
                  'Static Vercel deployment',
                  'Responsive design',
                ]}
              />
            </AsideCard>
          </>
        }
      >
        <div className="overflow-hidden rounded-xl border border-border bg-surface">
          <ResponsiveImage
            image={image('blogvsn-b1')}
            alt="BlogVsn Platform"
            sizes="(min-width: 1024px) 720px, 100vw"
            className="h-auto w-full opacity-90 transition-opacity hover:opacity-100"
          />
        </div>

        <CaseStudySection title="Cloud-native blogging platform">
          <p className="text-body text-slate-400">
            BlogVsn keeps content management in Blogger and the interface in React. Posts are fetched through the
            Blogger API, so writing stays in a familiar editor while the site ships as a static React build on Vercel.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Card variant="subtle" padding="sm">
              <p className="mb-2 text-small font-semibold text-accent-text">Performance</p>
              <p className="text-small text-slate-400">A static React build served by Vercel, with content fetched from the Blogger API at request time.</p>
            </Card>
            <Card variant="subtle" padding="sm">
              <p className="mb-2 text-small font-semibold text-accent-text">Authentication</p>
              <p className="text-small text-slate-400">Google Identity Services handles sign-in; the app never sees the Google password. The signed-in state is local and does not protect content.</p>
            </Card>
          </div>
        </CaseStudySection>

        <div>
          <CaseStudyTabs tabs={TABS} active={activeTab} onChange={setActiveTab} />

          <div className="min-h-[350px]">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <p className="text-body text-slate-400">
                  This project shows how to connect Google sign-in and the Blogger API to a React frontend
                  while keeping authentication, data fetching, and content rendering separate.
                </p>
                <div className="space-y-4">
                  <h3 className="text-h4 font-semibold text-paper">Architecture Highlights</h3>
                  <BulletList
                    items={[
                      'Decoupled CMS integration with Blogger API v3',
                      'Google sign-in through Google Identity Services',
                      'Static deployment on Vercel',
                      'Client-side email delivery with EmailJS',
                    ]}
                  />
                </div>
              </div>
            )}

            {activeTab === 'tech' && (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {TECH_STACK.map((tech) => (
                  <Card key={tech.name} interactive>
                    <div className="flex items-start gap-3">
                      <tech.icon size={20} aria-hidden="true" className="mt-1 shrink-0 text-accent-text" />
                      <div>
                        <h4 className="mb-1 text-h4 font-semibold text-paper">{tech.name}</h4>
                        <p className="text-small text-slate-400">{tech.detail}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}

            {activeTab === 'challenges' && (
              <div className="space-y-4">
                <div className="rounded-xl border border-amber-900/50 bg-amber-900/10 p-5">
                  <h4 className="mb-2 text-small font-semibold text-amber-200">API Key in the Client</h4>
                  <p className="text-small text-slate-400">
                    The Blogger API key is part of the browser request URL. A static
                    deployment cannot hide it; a backend proxy would be the stronger
                    boundary, but it would add a server this project does not have.
                  </p>
                </div>
                <div className="rounded-xl border border-amber-900/50 bg-amber-900/10 p-5">
                  <h4 className="mb-2 text-small font-semibold text-amber-200">HTML Excerpts</h4>
                  <p className="text-small text-slate-400">
                    Post content arrives as HTML and is truncated as a string before
                    being injected with dangerouslySetInnerHTML. A production version
                    would sanitise the HTML and truncate on a parsed boundary instead.
                  </p>
                </div>
                <div className="rounded-xl border border-amber-900/50 bg-amber-900/10 p-5">
                  <h4 className="mb-2 text-small font-semibold text-amber-200">Session Persistence</h4>
                  <p className="text-small text-slate-400">
                    The signed-in state is kept in localStorage so a reload does not sign
                    the reader out. A production version would move session handling
                    behind a backend instead.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <CaseStudySection
          eyebrow="Engineering decisions"
          title="A static site with deliberate limits"
        >
          <p className="text-body text-slate-400">
            BlogVsn keeps the backend small by using Blogger as the CMS and
            treating the React app as a static client. The trade-offs are part of
            the design, not hidden behind the word "cloud-native".
          </p>
          <DecisionList decisions={blogvsn?.decisions} />
        </CaseStudySection>

        <CaseStudySection
          eyebrow="Data model"
          title="External content and local identity"
        >
          <p className="text-body text-slate-400">
            There is no local database. The app consumes an external post feed,
            stores one decoded Google profile locally, and sends one contact
            payload to EmailJS.
          </p>
          <DataModelTable
            entities={blogvsn?.dataModel}
            caption="BlogVsn external post data, local profile, and contact payload"
          />
        </CaseStudySection>

        <ScreenshotGallery
          screenshots={SCREENSHOTS}
          onSelect={setSelectedImage}
          columns={2}
        />
      </CaseStudyLayout>

      {selectedImage && (
        <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </>
  )
}

export default BlogVsn
