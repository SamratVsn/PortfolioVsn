import { Link } from "react-router-dom";
import Header from "../Components/Header";
import SEO from "../Components/SEO";
import { SITE } from "../Components/seoHead";
import Footer from "../Components/Footer";
import SectionHeading from "../Components/SectionHeading";
import TestimonialsSection from "../Components/TestimonialsSection";
import Reveal from "../Components/ui/Reveal";
import Section from "../Components/ui/Section";
import Container from "../Components/ui/Container";
import Card from "../Components/ui/Card";
import Button from "../Components/ui/Button";
import StatusPill from "../Components/ui/StatusPill";
import Tag from "../Components/ui/Tag";
import { FaGithub } from "react-icons/fa";
import {
  ArrowUpRight,
  ArrowRight,
  Download,
  Play,
  Database,
  Layers,
  PackageCheck,
  Smartphone,
} from "lucide-react";
import Hero from "../Components/Hero";
import { PROJECTS, screenshots } from "../data/projects";
import { image } from "../content/images";
import ResponsiveImage from "../Components/ui/ResponsiveImage";

const AVALOKAN_LOGO = image("avalokan-logo");

const APK_URL =
  "https://github.com/SamratVsn/Avalokan/releases/download/v1.0.0/avalokan1.0.0.apk";

const byId = (id) => PROJECTS.find((project) => project.id === id);
const avalokan = byId("avalokan");
const tasks = byId("todo");
const blogvsn = byId("blogvsn");
const selectedWork = [tasks, blogvsn];

/* -- section 2: what I actually do ------------------------------------------ */

const capabilities = [
  {
    number: "01",
    icon: PackageCheck,
    title: "Product framing",
    body: "Avalokan began with a scattered-content problem: heritage places, stories, and events lived in separate sources. The app turns that into one product surface with three distinct content types, instead of one generic list.",
    project: avalokan,
    linkLabel: "Read the Avalokan case study",
  },
  {
    number: "02",
    icon: Database,
    title: "Data & systems",
    body: "In Avalokan, Firestore snapshot listeners write into Room, repositories map Room entities to domain models, and ViewModels expose one state stream. Hilt binds the repositories, while DataStore holds device-local flags.",
    project: avalokan,
    linkLabel: "See the repository and cache decisions",
  },
  {
    number: "03",
    icon: Smartphone,
    title: "Interface",
    body: "Tasks uses Jetpack Compose and Material 3 for real states: an active focus timer, category filters, a task editor, theme switching, and live profile statistics. The interface is wired to Flow-backed state, not static screens.",
    project: tasks,
    linkLabel: "Read the Tasks case study",
  },
];

/* -- section 4: brief -> model -> layers -> ship ---------------------------- */

const buildSteps = [
  {
    number: "01",
    title: "Brief",
    body: "Start from the constraint, not the stack. Avalokan had to make three content types feel distinct while still opening on a weak connection.",
    artifact: "Avalokan: places, stories, and events",
  },
  {
    number: "02",
    title: "Model",
    body: "Name the entities and their relationships before drawing screens. Avalokan stores places, events, and stories as separate Room entities, with related IDs held in list columns.",
    artifact: "PlaceItem, EventItem, StoryItem",
  },
  {
    number: "03",
    title: "Layers",
    body: "Put each responsibility where it can be tested and changed. Tasks keeps Compose screens, ViewModels, repository interfaces, and Room/DataStore behind clear boundaries.",
    artifact: "UI -> ViewModel -> Repository -> Room / DataStore",
  },
  {
    number: "04",
    title: "Ship",
    body: "A build only counts when someone can open it. Avalokan and Tasks have signed APK releases; BlogVsn is live on Vercel.",
    artifact: "Avalokan v1.0.0, Tasks v2.1.0, BlogVsn live",
  },
];

/* -- section 5: evidence ----------------------------------------------------- */

const evidence = [
  {
    icon: Download,
    label: "Release",
    title: "Avalokan v1.0.0",
    detail: "Signed Android APK and a tagged GitHub release.",
    href: "https://github.com/SamratVsn/Avalokan/releases/tag/v1.0.0",
    cta: "Open the release",
  },
  {
    icon: Download,
    label: "Release",
    title: "Tasks v2.1.0",
    detail: "Latest APK published through GitHub Releases.",
    href: "https://github.com/SamratVsn/Tasks/releases/latest",
    cta: "Open the latest release",
  },
  {
    icon: Play,
    label: "Live product",
    title: "BlogVsn",
    detail: "A static React build serving a Blogger-backed blog on Vercel.",
    href: "https://blogvsn.vercel.app/",
    cta: "Visit the live site",
  },
  {
    icon: FaGithub,
    label: "Source",
    title: "GitHub repositories",
    detail: "Read the code behind these case studies, including migrations and cache policy.",
    href: "https://github.com/SamratVsn",
    cta: "Browse the repositories",
  },
];

/* -- writing ---------------------------------------------------------------- */

const notePreviews = [
  {
    title: "Building your first Android App",
    date: "Sep 22, 2026",
    category: "Android",
    url: "https://blog.samratparajuli0.com.np/blog/building-your-first-android-app",
  },
  {
    title: "Time to Learn",
    date: "Jul 29, 2026",
    category: "Development",
    url: "https://blog.samratparajuli0.com.np/blog/time-to-learn",
  },
  {
    title: "How I Built a Productivity App from Scratch",
    date: "Jul 11, 2026",
    category: "Projects",
    url: "https://blog.samratparajuli0.com.np/blog/how-i-built-a-productivity-app-from-scratch",
  },
];

/* -- testimonials ----------------------------------------------------------- */

const testimonials = [
  {
    quote:
      "Samrat is a seeker. What I admire most is his curiosity and willingness to keep improving. He doesn't just code; he builds from what he learns.",
    name: "Himanshu Mishra",
    role: "Full Stack Developer",
    linkedinUrl: "https://www.linkedin.com/in/himanshu404mishra/",
  },
  {
    quote:
      "Samrat pairs strong technical foundations with a relentless drive to learn by building. He brings real care and practical problem-solving to every project he takes on.",
    name: "Sijan Pokharel",
    role: "Mobile Software Engineer",
    linkedinUrl: "https://www.linkedin.com/in/sijan-pokharel-80ab1a193/",
  },
  {
    quote:
      "Samrat is a passionate learner and someone who pushes himself a lot, and take on multiple challenges. His combination of tech, and spirituality will surely take him far in life. I would recommend any person/companies to give Samrat a try on project that you are thinking to build.",
    name: "Bibek Dhakal",
    role: "Product Manager / Mentor",
    linkedinUrl: "https://www.linkedin.com/in/bibekdhkl/",
  },
];

function Home() {
  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE.url}#webpage`,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    inLanguage: "en",
    isPartOf: { "@id": `${SITE.origin}/#website` },
    about: { "@id": `${SITE.origin}/#person` },
    mainEntity: { "@id": `${SITE.origin}/#person` },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["#hero-heading", "#hero-intro"],
    },
  };

  return (
    <div className="min-h-screen overflow-x-clip bg-canvas text-slate-300 selection:bg-accent/20 selection:text-paper">
      <SEO ogUrl={SITE.url} schema={[profilePageSchema]} />
      <Header />
      <main id="main-content">
        <Hero />

        {/* ═══ 2. What I actually do ═══════════════════════════════════════ */}
        <Section divided spacing="loose" aria-labelledby="capabilities-heading">
          <Container>
            <SectionHeading
              id="capabilities-heading"
              eyebrow="Capabilities"
              title="What I actually do"
              subtitle="Three parts of the same job: frame the product, decide how the data moves, then build the interface that carries it."
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {capabilities.map((capability, index) => {
                const Icon = capability.icon;
                return (
                  <Reveal
                    key={capability.title}
                    delay={index * 60}
                  >
                    <Card variant="subtle" padding="lg" className="flex h-full flex-col">
                      <div className="mb-5 flex items-center justify-between gap-3">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-accent-border bg-accent-muted text-accent-soft">
                          <Icon size={16} aria-hidden="true" />
                        </span>
                        <span className="font-mono text-label font-semibold tabular-nums text-slate-500">
                          {capability.number}
                        </span>
                      </div>
                      <h3 className="mb-2 text-h4 font-semibold text-paper">
                        {capability.title}
                      </h3>
                      <p className="mb-5 text-small leading-relaxed text-slate-400">
                        {capability.body}
                      </p>
                      {capability.project && (
                        <Link
                          to={capability.project.path}
                          className="mt-auto inline-flex items-center gap-1 text-small font-medium text-accent-soft transition-colors hover:text-paper"
                        >
                          {capability.linkLabel}
                          <ArrowUpRight size={13} aria-hidden="true" />
                        </Link>
                      )}
                    </Card>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* ═══ 3. Selected work ════════════════════════════════════════════ */}
        <Section divided spacing="loose" aria-labelledby="selected-heading">
          <Container>
            <div className="mb-10 flex items-end justify-between gap-6">
              <SectionHeading
                id="selected-heading"
                eyebrow="Selected work"
                title="Three shipped products"
                subtitle="A heritage app, a task manager, and a live blog. Each one exists outside this portfolio."
              />
              <Link
                to="/projects"
                className="mb-10 hidden shrink-0 items-center gap-1 text-small font-medium text-slate-400 transition-colors hover:text-sand sm:inline-flex"
              >
                All projects <ArrowUpRight size={13} aria-hidden="true" />
              </Link>
            </div>

            {avalokan && (
              <Card variant="accent" padding="none" className="overflow-hidden">
                <div className="grid gap-6 p-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:p-8">
                  <div className="min-w-0">
                    <StatusPill tone="accent" dot>
                      {avalokan.status}
                    </StatusPill>

                    <h3 className="mt-4 text-h3 font-semibold text-paper">
                      <Link
                        to={avalokan.path}
                        className="rounded transition-colors hover:text-accent-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-soft"
                      >
                        {avalokan.title}
                      </Link>
                    </h3>
                    <p className="mt-1 text-small font-medium text-sand">
                      Discover Nepal. Explore its heritage. Experience its stories.
                    </p>
                    <p className="mt-3 max-w-xl text-small leading-relaxed text-slate-400">
                      {avalokan.thesis}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {["Kotlin", "Jetpack Compose", "Firebase", "Room", "Hilt"].map(
                        (tag) => (
                          <Tag key={tag}>{tag}</Tag>
                        )
                      )}
                    </div>

                    <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
                      <Button to={avalokan.path} size="sm">
                        <Play size={13} fill="currentColor" aria-hidden="true" />
                        Open case study
                      </Button>
                      <a
                        href={APK_URL}
                        className="inline-flex items-center gap-1.5 text-small font-medium text-slate-300 transition-colors hover:text-paper"
                      >
                        <Download size={13} aria-hidden="true" /> Download APK
                      </a>
                      <a
                        href={avalokan.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-small font-medium text-slate-400 transition-colors hover:text-paper"
                      >
                        <FaGithub size={13} aria-hidden="true" /> Source
                      </a>
                      <span className="font-mono text-label text-slate-500">
                        v1.0.0 - 22s launch film inside
                      </span>
                    </div>
                  </div>

                  <div className="hidden justify-self-end sm:block">
                    <ResponsiveImage
                      image={AVALOKAN_LOGO}
                      alt="Avalokan - Nepal Heritage Explorer app logo"
                      sizes="(min-width: 1024px) 192px, 160px"
                      className="h-40 w-auto rounded-xl border border-border-strong bg-[#F5F3ED] object-contain lg:h-48"
                      loading="lazy"
                    />
                  </div>
                </div>
              </Card>
            )}

            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              {selectedWork.map((project, index) => {
                const screenshot = screenshots[project.path];
                return (
                  <Card
                    as={Reveal}
                    key={project.id}
                    delay={index * 50}
                    padding="none"
                    interactive
                    className="group relative flex flex-col overflow-hidden"
                  >
                    <Link
                      to={project.path}
                      className="absolute inset-0 z-10"
                      aria-label={`View project: ${project.title}`}
                    />
                    {screenshot && (
                      <div className="relative overflow-hidden border-b border-border">
                        <ResponsiveImage
                          image={screenshot}
                          alt={`Preview of ${project.title}`}
                          sizes="(min-width: 768px) 50vw, 100vw"
                          className="h-40 w-full object-cover object-top opacity-90 transition-transform duration-500 group-hover:scale-[1.02]"
                          loading="lazy"
                        />
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"
                        />
                      </div>
                    )}
                    <div className="flex flex-1 flex-col p-5">
                      <StatusPill tone="accent" className="mb-2 w-fit" dot={false}>
                        {project.status}
                      </StatusPill>
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-body font-semibold text-paper transition-colors group-hover:text-accent-soft">
                          {project.title}
                        </h3>
                        <ArrowUpRight
                          size={15}
                          aria-hidden="true"
                          className="mt-0.5 shrink-0 text-slate-500 transition-colors group-hover:text-accent-soft"
                        />
                      </div>
                      <p className="mt-2 text-small leading-relaxed text-slate-400">
                        {project.thesis}
                      </p>
                      <p className="mt-auto pt-4 text-label font-medium uppercase tracking-[0.1em] text-slate-500">
                        {project.tags.join(" - ")}
                      </p>
                    </div>
                  </Card>
                );
              })}
            </div>

            <Link
              to="/projects"
              className="mt-8 inline-flex items-center gap-1 text-small font-medium text-slate-400 transition-colors hover:text-sand sm:hidden"
            >
              All projects <ArrowUpRight size={13} aria-hidden="true" />
            </Link>
          </Container>
        </Section>

        {/* ═══ 4. How I build ══════════════════════════════════════════════ */}
        <Section divided spacing="loose" aria-labelledby="approach-heading">
          <Container>
            <SectionHeading
              id="approach-heading"
              eyebrow="Method"
              title="How I build"
              subtitle="The same chain on every project: understand the brief, model the data, separate the layers, then ship something that exists."
            />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {buildSteps.map((step, index) => (
                <Reveal
                  key={step.number}
                  delay={index * 50}
                  className="relative"
                >
                  <div className="flex h-full flex-col rounded-xl border border-border bg-surface/50 p-5 sm:p-6">
                    <div className="mb-5 flex items-center gap-3">
                      <span className="font-mono text-label font-semibold tabular-nums text-accent-soft/80">
                        {step.number}
                      </span>
                      <span aria-hidden="true" className="h-px flex-1 bg-border" />
                      <Layers size={14} aria-hidden="true" className="text-slate-500" />
                    </div>
                    <h3 className="mb-2 text-h4 font-semibold text-paper">
                      {step.title}
                    </h3>
                    <p className="mb-4 text-small leading-relaxed text-slate-400">
                      {step.body}
                    </p>
                    <p className="mt-auto border-t border-border pt-3 font-mono text-label leading-relaxed text-slate-500">
                      {step.artifact}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>

        {/* ═══ 5. Evidence ═════════════════════════════════════════════════ */}
        <Section divided spacing="loose" aria-labelledby="evidence-heading">
          <Container>
            <SectionHeading
              id="evidence-heading"
              eyebrow="Evidence"
              title="What exists today"
              subtitle="Releases, source, and a live site. No user counts or performance numbers are claimed here because none are measured."
            />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {evidence.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Reveal
                    as="a"
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    delay={index * 50}
                    className="group flex h-full flex-col rounded-xl border border-border bg-surface/50 p-5 transition-colors hover:border-accent-border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-soft"
                  >
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border-strong bg-surface text-accent-soft">
                        <Icon size={14} aria-hidden="true" />
                      </span>
                      <span className="font-mono text-label font-semibold uppercase tracking-[0.12em] text-slate-500">
                        {item.label}
                      </span>
                    </div>
                    <h3 className="mb-1.5 text-body font-semibold text-paper transition-colors group-hover:text-accent-soft">
                      {item.title}
                    </h3>
                    <p className="mb-4 text-small leading-relaxed text-slate-400">
                      {item.detail}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1 text-small font-medium text-slate-300">
                      {item.cta}
                      <ArrowUpRight size={13} aria-hidden="true" />
                    </span>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </Section>

        <TestimonialsSection testimonials={testimonials} />

        {/* ═══ 6. Writing ══════════════════════════════════════════════════ */}
        <Section divided spacing="loose" aria-labelledby="writing-heading">
          <Container variant="narrow">
            <div className="mb-10 flex items-end justify-between gap-6">
              <SectionHeading
                id="writing-heading"
                eyebrow="Writing"
                title="Learning in public"
                subtitle="I document what I learn, the problems I run into, and the things I build along the way."
              />
              <a
                href="https://blog.samratparajuli0.com.np/"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-10 hidden shrink-0 items-center gap-1 text-small font-medium text-slate-400 transition-colors hover:text-sand sm:inline-flex"
              >
                All blogs <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            </div>

            <div className="border-t border-border">
              {notePreviews.map((note, i) => (
                <Reveal
                  as="a"
                  key={note.url}
                  delay={i * 40}
                  href={note.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group -mx-3 flex items-start gap-5 rounded-lg border-b border-border px-3 py-5 transition-colors last:border-b-0 hover:bg-surface/40 sm:gap-8"
                >
                  <div className="w-16 shrink-0 pt-0.5 sm:w-20">
                    <span className="text-label font-medium uppercase tabular-nums tracking-wider text-slate-500">
                      {note.date}
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="mb-1.5 text-body font-medium leading-snug text-paper transition-colors group-hover:text-accent-soft">
                      {note.title}
                    </h3>
                    <span className="text-label font-medium uppercase tracking-wider text-accent-soft/70">
                      {note.category}
                    </span>
                  </div>

                  <div className="shrink-0 pt-1 text-slate-600 transition-colors group-hover:text-accent-soft">
                    <ArrowRight size={15} aria-hidden="true" />
                  </div>
                </Reveal>
              ))}
            </div>

            <a
              href="https://blog.samratparajuli0.com.np/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1 text-small font-medium text-slate-400 transition-colors hover:text-sand sm:hidden"
            >
              All blogs <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          </Container>
        </Section>

        {/* ═══ 7. Contact CTA ══════════════════════════════════════════════ */}
        <Section divided spacing="loose" aria-labelledby="contact-cta-heading">
          <Container variant="narrow" className="text-center">
            <Reveal>
              <h2
                id="contact-cta-heading"
                className="mb-4 text-h2 font-semibold text-paper"
              >
                Have something worth building?
              </h2>
              <p className="mx-auto mb-8 max-w-md text-body text-slate-400">
                I&apos;m open to product engineering and Android roles, and to
                conversations about shipping software that has to work outside
                a stable Wi-Fi connection.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                <Button to="/contact" size="md">
                  Get in touch <ArrowUpRight size={15} aria-hidden="true" />
                </Button>
                <Button
                  href="https://github.com/SamratVsn"
                  variant="secondary"
                  size="md"
                >
                  <FaGithub size={15} aria-hidden="true" />
                  View GitHub
                </Button>
              </div>
            </Reveal>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
