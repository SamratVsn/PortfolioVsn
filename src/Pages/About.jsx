import { motion, useReducedMotion } from "framer-motion";
import Header from "../Components/Header";
import SEO from "../Components/SEO";
import Footer from "../Components/Footer";
import BackgroundFX from "../Components/BackgroundFX";
import Button from "../Components/ui/Button";
import {
  ArrowUpRight,
  MapPin,
  Code2,
  BookOpen,
  Users,
  Lightbulb,
  PenLine,
  Layers,
  Database,
  Smartphone,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import PortfolioImage from "../assets/Hero_Image.webp";
import { IDENTITY, SPECIALTY_PLAIN, TAGLINE } from "../content/site";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.45 },
};

const stagger = (i) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.4, delay: i * 0.07 },
});

/* -- data ------------------------------------------------------------------- */

const timeline = [
  {
    num: "01",
    period: "2024",
    title: "Foundations in C",
    desc: "Started with C: memory, pointers, structs, and binary file I/O. Built a Student Management System that stores records without a database.",
  },
  {
    num: "02",
    period: "2025",
    title: "The web, then Kotlin",
    desc: "Learned HTML, CSS, and JavaScript, then moved to Kotlin to prepare for Android. Explored null safety, coroutines, and extension functions through small projects.",
  },
  {
    num: "03",
    period: "Late 2025 - early 2026",
    title: "Android with Compose",
    desc: "Completed Android Basics with Compose, then built Kathmandu, Juice Tracker, Tasks, and The Movie App while learning Room, DataStore, Retrofit, and state management.",
  },
  {
    num: "04",
    period: "2026 - now",
    title: "Shipping complete applications",
    desc: "Released Avalokan v1.0.0 and Tasks v2.1.0. Now going deeper into dependency injection, testing, and the architecture behind larger applications.",
    active: true,
  },
];

const learnSteps = [
  {
    num: "01",
    title: "Build",
    desc: "Turn concepts into working software instead of stopping at tutorials.",
  },
  {
    num: "02",
    title: "Break",
    desc: "Debug, inspect, question, and understand why something works.",
  },
  {
    num: "03",
    title: "Share",
    desc: "Document the process and lessons for others and my future self.",
  },
];

const toolkit = [
  {
    category: "Product",
    icon: Lightbulb,
    desc: "Turning a scattered problem into a bounded product.",
    items: [
      { name: "Product framing", note: "Brief, scope, content types" },
      { name: "Information architecture", note: "Navigation and page structure" },
      { name: "Technical writing", note: "Case studies and release notes" },
      { name: "Release packaging", note: "APK builds and versioned releases" },
    ],
  },
  {
    category: "Data",
    icon: Database,
    desc: "Deciding where state lives and how it moves.",
    items: [
      { name: "Room", note: "Local persistence and migrations" },
      { name: "Firestore", note: "Remote content and snapshot listeners" },
      { name: "DataStore", note: "Preferences and device-local flags" },
      { name: "Retrofit", note: "REST clients and error mapping" },
      { name: "Kotlinx Serialization", note: "Typed JSON parsing" },
    ],
  },
  {
    category: "Interface",
    icon: Layers,
    desc: "Building screens that carry real application state.",
    items: [
      { name: "Jetpack Compose", note: "Declarative Android UI" },
      { name: "Material 3", note: "Components, theming, and states" },
      { name: "Tailwind CSS", note: "Responsive web layout" },
      { name: "Framer Motion", note: "Restrained interface motion" },
    ],
  },
  {
    category: "Android",
    icon: Smartphone,
    desc: "The platform and the tools around it.",
    items: [
      { name: "Kotlin", note: "Primary language" },
      { name: "Coroutines & Flow", note: "Async work and reactive state" },
      { name: "ViewModel", note: "Lifecycle-aware state" },
      { name: "Navigation Compose", note: "In-app routing" },
      { name: "Hilt", note: "Dependency injection in Avalokan" },
      { name: "Firebase Auth", note: "Account flows" },
      { name: "Git & GitHub", note: "Version control and releases" },
    ],
  },
];

const beyondItems = [
  {
    icon: MapPin,
    title: "Nepal",
    desc: "Proudly from Kathmandu. I care about projects in tourism, education, and the community back home.",
  },
  {
    icon: BookOpen,
    title: "Sanskrit & spirituality",
    desc: "I study Sanskrit script and find balance in spirituality - roots that keep my thinking grounded.",
  },
  {
    icon: Users,
    title: "Technology events",
    desc: "I attend developer meetups, talks, and community events to learn from people around me.",
  },
  {
    icon: PenLine,
    title: "Writing",
    desc: "I write about what I learn - to think clearly, teach others, and document my own journey.",
  },
  {
    icon: Lightbulb,
    title: "Beyond apps",
    desc: "Curious about how technology can serve tourism, education, and community-driven projects.",
  },
];

/* -- component -------------------------------------------------------------- */

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen overflow-x-clip bg-canvas text-slate-400 selection:bg-accent/20 selection:text-paper">
      <SEO
        title="About Samrat Parajuli | Product-Minded Systems & Application Engineer"
        description="Samrat Parajuli is a product-minded systems and application engineer from Kathmandu, Nepal. Native Android in Kotlin and Jetpack Compose, built end to end from brief to release."
        ogUrl="https://www.samratparajuli0.com.np/about"
        schema={[
          {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            '@id': 'https://www.samratparajuli0.com.np/about#webpage',
            'url': 'https://www.samratparajuli0.com.np/about',
            'name': 'About Samrat Parajuli | Product-Minded Systems & Application Engineer',
            'description': 'Samrat Parajuli is a product-minded systems and application engineer from Kathmandu, Nepal. Native Android in Kotlin and Jetpack Compose, built end to end from brief to release.',
            'isPartOf': { '@id': 'https://www.samratparajuli0.com.np/#website' },
            'about': { '@id': 'https://www.samratparajuli0.com.np/#person' },
            'speakable': {
              '@type': 'SpeakableSpecification',
              'cssSelector': ['main h1', 'main > section:first-of-type p']
            }
          }
        ]}
      />
      <Header />

      <main id="main-content">
        {/* 1. Introduction */}
        <section className="relative px-6 pb-16 pt-10 sm:pb-24 sm:pt-14" aria-labelledby="about-heading">
          <BackgroundFX />

          <div className="max-w-6xl mx-auto min-[1920px]:max-w-7xl relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <motion.div
                className="lg:col-span-7 flex justify-center lg:justify-start"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <div className="relative w-full max-w-md">
                  <div className="absolute -inset-3 sm:-inset-4 border border-border rounded-2xl pointer-events-none" />
                  <img
                    src={PortfolioImage}
                    alt="Portrait of Samrat Parajuli, product-minded systems and application engineer"
                    width={1127}
                    height={1396}
                    className="relative z-10 block w-full aspect-[4/5] rounded-2xl border border-border bg-surface object-contain object-bottom"
                    loading="eager"
                  />
                </div>
              </motion.div>

              <motion.div
                className="lg:col-span-5 min-w-0"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              >
                <div className="flex items-center gap-2.5 mb-6">
                  <span className="text-label font-mono font-bold tracking-[0.14em] uppercase text-accent-soft">
                    01
                  </span>
                  <span className="w-8 h-px bg-accent/25" />
                  <span className="text-label font-mono font-medium tracking-[0.14em] uppercase text-slate-400">
                    About
                  </span>
                </div>

                <h1 id="about-heading" className="text-h1 font-bold text-paper tracking-[-0.03em] leading-[1.08] mb-2">
                  Samrat <br />
                  Parajuli
                </h1>

                <p className="text-accent text-body font-medium mb-6">
                  {IDENTITY}
                </p>

                <p className="text-slate-400 text-body leading-relaxed max-w-lg mb-8">
                  I&apos;m a product-minded systems and application engineer in
                  Kathmandu, Nepal. {TAGLINE} My deepest specialism is{" "}
                  {SPECIALTY_PLAIN}. I&apos;m working toward teams where the
                  application is the product, not a side effect of one.
                </p>

                <div className="grid grid-cols-2 gap-x-8 gap-y-5">
                  {[
                    { label: "Location", value: "Kathmandu, Nepal", icon: MapPin },
                    { label: "Focus", value: "Product engineering - Native Android", icon: Code2 },
                    { label: "Stack", value: "Kotlin, Compose, Room, Retrofit, MVVM", icon: Layers },
                    { label: "Approach", value: "Build, break, share", icon: BookOpen },
                  ].map(({ label, value, icon: Icon }) => (
                    <div key={label}>
                      <div className="flex items-center gap-1.5 mb-1">
                        <Icon size={10} className="text-accent/50" aria-hidden="true" />
                        <span className="text-label font-mono font-bold tracking-[0.12em] uppercase text-slate-400">
                          {label}
                        </span>
                      </div>
                      <p className="text-slate-300 text-small">{value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. How I got here */}
        <section className="py-20 sm:py-24 px-6 border-t border-border" aria-labelledby="journey-heading">
          <div className="max-w-6xl mx-auto min-[1920px]:max-w-7xl">
            <motion.div {...fadeUp} className="mb-10">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="text-label font-mono font-bold tracking-[0.14em] uppercase text-accent-soft">
                  02
                </span>
                <span className="w-8 h-px bg-accent/25" />
                <span className="text-label font-mono font-medium tracking-[0.14em] uppercase text-slate-400">
                  Journey
                </span>
              </div>
              <h2 id="journey-heading" className="text-h2 font-bold text-paper tracking-[-0.02em] mb-2">
                How I got here
              </h2>
              <p className="text-slate-400 max-w-lg text-body leading-relaxed">
                Four stages, in the order they happened.
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-[5px] top-1 bottom-1 w-px bg-border" />

              <div className="space-y-0">
                {timeline.map((step, i) => (
                  <motion.div
                    key={step.num}
                    initial={reduceMotion ? { opacity: 1 } : { opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.35, delay: i * 0.05 }}
                    className="relative flex gap-5 group"
                  >
                    <div className="relative z-10 flex items-start pt-1.5 shrink-0">
                      <span
                        className={`w-[11px] h-[11px] rounded-full border-2 transition-colors duration-300 ${
                          step.active
                            ? "bg-accent border-accent"
                            : "bg-canvas border-slate-600 group-hover:border-slate-500"
                        }`}
                      />
                    </div>

                    <div className="pb-7 pt-0.5">
                      <div className="flex flex-wrap items-baseline gap-3 mb-1">
                        <span
                          className={`text-label font-mono font-bold tracking-[0.1em] ${
                            step.active ? "text-accent" : "text-slate-400"
                          }`}
                        >
                          {step.num}
                        </span>
                        <span className="text-label font-medium tabular-nums text-slate-500">
                          {step.period}
                        </span>
                        <h3
                          className={`text-body font-semibold ${
                            step.active ? "text-accent" : "text-paper"
                          }`}
                        >
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-slate-400 text-small leading-relaxed max-w-lg">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. Working principles */}
        <section className="py-20 sm:py-24 px-6 border-t border-border" aria-labelledby="principles-heading">
          <div className="max-w-6xl mx-auto min-[1920px]:max-w-7xl">
            <motion.div {...fadeUp} className="mb-10">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="text-label font-mono font-bold tracking-[0.14em] uppercase text-accent-soft">
                  03
                </span>
                <span className="w-8 h-px bg-accent/25" />
                <span className="text-label font-mono font-medium tracking-[0.14em] uppercase text-slate-400">
                  Principles
                </span>
              </div>
              <h2 id="principles-heading" className="text-h2 font-bold text-paper tracking-[-0.02em] mb-2">
                Working principles
              </h2>
            </motion.div>

            <div className="space-y-0">
              {learnSteps.map((step, i) => (
                <motion.div key={step.num} {...stagger(i)} className="relative">
                  <div className="flex items-start gap-5 sm:gap-6">
                    <div className="flex flex-col items-center shrink-0">
                      <span className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-accent/[0.08] border border-accent/20 flex items-center justify-center text-label font-mono font-bold text-accent-soft tracking-wider">
                        {step.num}
                      </span>
                      {i < learnSteps.length - 1 && (
                        <div className="w-px flex-1 min-h-[24px] bg-border my-1" />
                      )}
                    </div>

                    <div className="pt-2 pb-6">
                      <h3 className="text-paper text-body font-semibold mb-1.5">
                        {step.title}
                      </h3>
                      <p className="text-slate-400 text-small leading-relaxed max-w-md">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              {...fadeUp}
              className="flex flex-wrap items-center justify-center gap-3 mt-6 text-label text-slate-400 font-mono font-medium tracking-wide"
            >
              <span>Build</span>
              <span className="w-4 h-px bg-border" />
              <span>Break</span>
              <span className="w-4 h-px bg-border" />
              <span>Share</span>
              <span className="w-4 h-px bg-border" />
              <span className="text-accent/50">Build again</span>
            </motion.div>
          </div>
        </section>

        {/* 4. Toolkit */}
        <section className="py-20 sm:py-24 px-6 border-t border-border" aria-labelledby="toolkit-heading">
          <div className="max-w-6xl mx-auto min-[1920px]:max-w-7xl">
            <motion.div {...fadeUp} className="mb-10">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="text-label font-mono font-bold tracking-[0.14em] uppercase text-accent-soft">
                  04
                </span>
                <span className="w-8 h-px bg-accent/25" />
                <span className="text-label font-mono font-medium tracking-[0.14em] uppercase text-slate-400">
                  Toolkit
                </span>
              </div>
              <h2 id="toolkit-heading" className="text-h2 font-bold text-paper tracking-[-0.02em] mb-2">
                Toolkit
              </h2>
              <p className="text-slate-400 max-w-lg text-body leading-relaxed">
                Grouped by capability, limited to tools used in the projects on this site.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {toolkit.map((group, gi) => {
                const Icon = group.icon;
                return (
                  <motion.div
                    key={group.category}
                    {...stagger(gi)}
                    className="bg-surface/60 border border-border rounded-2xl p-5 sm:p-6 hover:border-border-strong transition-colors duration-300"
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <Icon size={16} className="text-accent/60" aria-hidden="true" />
                      <h3 className="text-paper text-body font-semibold">
                        {group.category}
                      </h3>
                    </div>
                    <p className="mb-4 text-small leading-relaxed text-slate-500">
                      {group.desc}
                    </p>
                    <div className="space-y-3">
                      {group.items.map((item) => (
                        <div key={item.name} className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent/40 shrink-0" aria-hidden="true" />
                          <span className="text-slate-300 text-small font-medium">
                            {item.name}
                          </span>
                          <span className="text-slate-400 text-label">
                            {item.note}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. Beyond code */}
        <section className="py-20 sm:py-24 px-6 border-t border-border" aria-labelledby="beyond-heading">
          <div className="max-w-6xl mx-auto min-[1920px]:max-w-7xl">
            <motion.div {...fadeUp} className="mb-10">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="text-label font-mono font-bold tracking-[0.14em] uppercase text-accent-soft">
                  05
                </span>
                <span className="w-8 h-px bg-accent/25" />
                <span className="text-label font-mono font-medium tracking-[0.14em] uppercase text-slate-400">
                  Outside
                </span>
              </div>
              <h2 id="beyond-heading" className="text-h2 font-bold text-paper tracking-[-0.02em]">
                Beyond code
              </h2>
              <p className="text-slate-400 max-w-lg text-body leading-relaxed mt-2">
                The person behind the portfolio - what keeps me grounded and curious.
              </p>
            </motion.div>

            <div className="flex flex-wrap gap-4">
              {beyondItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    {...stagger(i)}
                    className="flex gap-4 p-5 bg-surface/60 border border-border rounded-2xl hover:border-border-strong transition-colors duration-300 flex-1 basis-[calc(50%-0.5rem)] sm:basis-[calc(33.333%-1.1rem)] min-w-[220px]"
                  >
                    <div className="shrink-0 mt-0.5">
                      <Icon size={15} className="text-accent/40" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-paper text-small font-semibold mb-1">
                        {item.title}
                      </h3>
                      <p className="text-slate-400 text-small leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 6. CTA */}
        <section className="py-20 sm:py-24 px-6 border-t border-border" aria-labelledby="about-cta-heading">
          <div className="max-w-lg mx-auto text-center">
            <motion.div {...fadeUp}>
              <h2 id="about-cta-heading" className="text-h2 font-bold text-paper tracking-[-0.025em] mb-3">
                I&apos;m looking for teams where the app is the product.
              </h2>
              <p className="text-slate-400 text-body leading-relaxed mb-8">
                If the Android app carries the product - not a companion to it - I
                would like to talk about how I can help build it.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Button to="/contact" size="md">
                  Get in touch <ArrowUpRight size={14} aria-hidden="true" />
                </Button>
                <Button
                  href="https://github.com/SamratVsn"
                  variant="secondary"
                  size="md"
                >
                  <FaGithub size={15} aria-hidden="true" /> GitHub
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

