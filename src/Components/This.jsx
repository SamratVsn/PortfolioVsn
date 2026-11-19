import { useState } from 'react'
import { Code2, Palette, Zap, Layout, ArrowUpRight } from 'lucide-react'
import SEO from './SEO'
import CaseStudyLayout from './case-study/CaseStudyLayout'
import CaseStudyTabs from './case-study/CaseStudyTabs'
import CaseStudySection from './case-study/CaseStudySection'
import Card from './ui/Card'
import Button from './ui/Button'

const TECH_STACK = [
  { icon: Code2, name: 'React.js', detail: 'Component-based architecture & State Management' },
  { icon: Palette, name: 'Tailwind CSS', detail: 'Design tokens & Utility-first styling' },
  { icon: Layout, name: 'React Router', detail: 'Dynamic SPAs with client-side routing' },
  { icon: Zap, name: 'Vercel', detail: 'Static deployment & CI/CD' },
]

const TABS = [
  { id: 'about', label: 'About' },
  { id: 'tech', label: 'Tech' },
  { id: 'features', label: 'Features' },
]

export default function This() {
  const [activeTab, setActiveTab] = useState('about')

  return (
    <>
      <SEO
        title="How This Portfolio Is Built | Samrat Parajuli"
        description="This portfolio website built with React, Framer Motion, and Tailwind CSS. Explore the architecture and design philosophy behind samratparajuli0.com.np."
        ogUrl="https://www.samratparajuli0.com.np/projects/this"
        ogType="article"
        imageAlt="Developer portfolio built with React and Vite by Samrat Parajuli"
        schema={[
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.samratparajuli0.com.np/' },
              { '@type': 'ListItem', position: 2, name: 'Projects', item: 'https://www.samratparajuli0.com.np/projects' },
              { '@type': 'ListItem', position: 3, name: 'This Portfolio', item: 'https://www.samratparajuli0.com.np/projects/this' },
            ],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            '@id': 'https://www.samratparajuli0.com.np/projects/this#app',
            name: 'Developer Portfolio',
            applicationCategory: 'WebApplication',
            operatingSystem: 'Web',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
            description: 'This portfolio website built with React, Framer Motion, and Tailwind CSS. Explore the architecture and design philosophy behind samratparajuli0.com.np.',
            url: 'https://www.samratparajuli0.com.np/',
            codeRepository: 'https://github.com/SamratVsn/devPortfoli0',
            author: { '@id': 'https://www.samratparajuli0.com.np/#person' },
          },
        ]}
      />

      <CaseStudyLayout
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Projects', to: '/projects' },
          { label: 'This Portfolio' },
        ]}
        eyebrow="Portfolio Engine v2"
        title="Modern portfolio architecture with zero friction."
        summary="A fast, responsive, and beautifully designed portfolio website that showcases projects and work. Built to demonstrate modern React patterns and optimal performance."
        actions={[
          {
            href: 'https://github.com/SamratVsn/devPortfoli0',
            label: 'View Full Source',
            icon: ArrowUpRight,
            primary: true,
          },
        ]}
      >
        <CaseStudyTabs tabs={TABS} active={activeTab} onChange={setActiveTab} />

        {activeTab === 'about' && (
          <div className="space-y-10">
            <CaseStudySection title="Design Philosophy">
              <p className="text-body text-slate-400">
                The core goal was to build a low-friction portfolio experience. By using React State management,
                I eliminated unnecessary page refreshes, creating a fluid single-page application feel.
                The design uses a custom slate palette to ensure code snippets and technical content remain
                the primary focal point while maintaining visual hierarchy.
              </p>
            </CaseStudySection>

            <CaseStudySection title="User Experience Flow">
              <div className="space-y-3">
                {[
                  { num: '01', text: 'Router Entry Point Initialization' },
                  { num: '02', text: 'Lazy Load Assets & Components' },
                  { num: '03', text: 'Viewport Synchronization & State Management' },
                  { num: '04', text: 'Smooth Transitions & Animations' },
                ].map((item) => (
                  <div key={item.num} className="flex items-start gap-4">
                    <span className="font-mono text-small font-semibold text-accent-text">{item.num}</span>
                    <p className="pt-0.5 text-small text-slate-400">{item.text}</p>
                  </div>
                ))}
              </div>
            </CaseStudySection>
          </div>
        )}

        {activeTab === 'tech' && (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {TECH_STACK.map((tech) => (
              <Card key={tech.name} interactive>
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-elevated p-2 text-accent-text">
                    <tech.icon size={24} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-h4 font-semibold text-paper">{tech.name}</h3>
                    <p className="text-small text-slate-400">{tech.detail}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {activeTab === 'features' && (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {[
              { title: 'Dynamic Routing', detail: 'React Router with nested layouts, catch-all 404 handling, and automatic scroll-to-top on navigation.' },
              { title: 'Framer Motion', detail: 'Animated page transitions, scroll-triggered reveals, staggered animations, and smooth layout shifts.' },
              { title: 'Responsive Design', detail: 'Adaptive grid system that responds seamlessly to all viewports without explicit media queries.' },
              { title: 'Dark-Optimized', detail: 'Custom slate palette designed for reduced eye strain during extended reading sessions.' },
            ].map((feat, i) => (
              <Card key={feat.title} interactive>
                <p className="mb-3 font-mono text-label font-semibold uppercase tracking-widest text-accent-text">
                  Feature {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mb-2 text-h4 font-semibold text-paper">{feat.title}</h3>
                <p className="text-small text-slate-400">{feat.detail}</p>
              </Card>
            ))}
          </div>
        )}

        <CaseStudySection
          title="Interested in the architecture?"
          className="border-t border-border pt-12"
        >
          <p className="max-w-xl text-body text-slate-400">
            This codebase demonstrates modern React patterns, component composition, and performance optimization.
            Feel free to explore the full source code and architecture.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button
              href="https://github.com/SamratVsn/devPortfoli0"
              variant="primary"
            >
              View Full Source <ArrowUpRight size={15} aria-hidden="true" />
            </Button>
            <Button to="/contact" variant="secondary">
              Get in Touch
            </Button>
          </div>
        </CaseStudySection>
      </CaseStudyLayout>
    </>
  )
}
