import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import Header from "../Components/Header";
import SEO from "../Components/SEO";
import { SITE } from "../Components/seoHead";
import Footer from "../Components/Footer";
import SectionHeading from "../Components/SectionHeading";
import TestimonialsSection from "../Components/TestimonialsSection";
import { FaGithub } from "react-icons/fa";
import { ArrowUpRight, ArrowRight, Download, Play } from "lucide-react";
import Hero from "../Components/Hero";
import { PROJECTS, screenshots } from "../data/projects";
import AvalokanLogo from "../assets/Avalokan/logo.jpeg";

const APK_URL =
  "https://github.com/SamratVsn/Avalokan/releases/download/v1.0.0/avalokan1.0.0.apk";

// ── Featured applications, in the order they should be read ────────────────
const featured = ["avalokan", "themovie", "todo", "blogvsn"].map((id) =>
  PROJECTS.find((project) => project.id === id)
);
const [avalokan, ...supporting] = featured;

// ── Toolkit data ────────────────────────────────────────────────────────────
const toolkit = [
  {
    title: "Android",
    desc: "Modern, reactive Android apps in Kotlin and Jetpack Compose.",
    tags: ["Kotlin", "Jetpack Compose", "Material 3", "Coroutines & Flow"],
  },
  {
    title: "Architecture",
    desc: "Clear separation between UI, data, and business logic.",
    tags: ["MVVM", "Repository", "Room", "DataStore", "Retrofit"],
  },
  {
    title: "Workflow",
    desc: "The day-to-day toolkit that keeps development honest and versioned.",
    tags: ["Android Studio", "Git & GitHub", "REST APIs", "Documentation"],
  },
];

// ── Philosophy data ─────────────────────────────────────────────────────────
const philosophy = [
  {
    number: "01",
    title: "Understand the problem",
    desc: "I try to understand what I'm actually solving before jumping into implementation. A clear problem statement saves more time than a fast keyboard.",
  },
  {
    number: "02",
    title: "Keep it understandable",
    desc: "I prefer solutions that are clear enough to debug, maintain, and explain. If I can't walk through it later, it's not done yet.",
  },
  {
    number: "03",
    title: "Learn by building",
    desc: "Tutorials help me learn concepts, but building without the tutorial is where I actually understand them. Real projects teach what courses can't.",
  },
];

// ── Journey data ────────────────────────────────────────────────────────────
const journeyItems = [
  {
    period: "2024",
    title: "Started programming with C",
    description:
      "Learned fundamentals through C — loops, structs, binary file I/O, and a Student Management System built from scratch.",
  },
  {
    period: "Early 2025",
    title: "Learned web basics",
    description:
      "HTML, CSS, and JavaScript to understand how the web works. Built simple interactive pages and got familiar with the DOM.",
  },
  {
    period: "Mid 2025",
    title: "Started learning Kotlin",
    description:
      "Transitioned to Kotlin to prepare for Android. Explored null safety, coroutines, and extension functions through small projects.",
  },
  {
    period: "Late 2025",
    title: "Started Android with Compose",
    description:
      "Began building Android apps using Jetpack Compose — composable functions, state management, and UI architecture.",
  },
  {
    period: "Early 2026",
    title: "Completed Android Basics with Compose",
    description:
      "Finished Google's course. Solidified Compose fundamentals, state handling, and Android app structure.",
  },
  {
    period: "Mid 2026",
    title: "Started building complete Android applications",
    description:
      "Built ToDo and The Movie using Jetpack Compose, Room, DataStore, Retrofit, Coroutines & Flow, and modern Android architecture.",
  },
  {
    period: "Late 2026",
    title: "Going deeper into Android engineering",
    description:
      "Exploring dependency injection, testing, architecture, and larger real-world applications while building projects around practical problems.",
  },
  {
    period: "Oct 2026 — Now",
    title: "Shipped Avalokan v1.0.0",
    description:
      "Released a full Android heritage explorer for Nepal — Firestore-backed places, stories, and events with an offline-first Room cache, Hilt DI, and a launch film cut from real captures.",
    active: true,
  },
];

// ── Blog previews (redirect to blog.samratparajuli0.com.np) ─────────────────
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
  {
    title: "Attending the Localhost Kathmandu Event",
    date: "Jun 15, 2026",
    category: "Events",
    url: "https://blog.samratparajuli0.com.np/blog/attending-the-localhost-kathmandu-event-by-net-hub-kathmandu",
  },
  {
    title: "A Random Networking Session turned fruitful",
    date: "Jun 14, 2026",
    category: "Events",
    url: "https://blog.samratparajuli0.com.np/blog/a-random-networking-session-turned-fruitful",
  },
];

// ── Perspectives ────────────────────────────────────────────────────────────
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

const sectionMotion = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.4 },
};

function Home() {
  const reduceMotion = useReducedMotion();

  // ProfilePage is the accurate type for a personal portfolio home page: it
  // describes the page and points at the Person it profiles.
  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE.url}#webpage`,
    url: SITE.url,
    name: "Samrat Parajuli (SamratVsn) | Android App Developer",
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

        {/* ═══════════════════════════════════════════════════════════════════
            FEATURED APPLICATIONS
            ═══════════════════════════════════════════════════════════════════ */}
        <section
          aria-labelledby="featured-heading"
          className="border-t border-border px-5 py-20 sm:px-6 sm:py-24"
        >
          <div className="mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[90rem] min-[1920px]:max-w-[100rem]">
            <div className="mb-10 flex items-end justify-between gap-6">
              <SectionHeading
                id="featured-heading"
                eyebrow="Work"
                title="Featured Applications"
                subtitle="Applications I designed, built, and shipped — led by Avalokan, an offline-first Android app built for Nepal's mountain roads."
              />
              <Link
                to="/projects"
                className="mb-10 hidden shrink-0 items-center gap-1 text-[13px] font-medium text-slate-400 transition-colors hover:text-sand sm:inline-flex"
              >
                All projects <ArrowUpRight size={13} aria-hidden="true" />
              </Link>
            </div>

            {/* Avalokan spotlight */}
            {avalokan && (
              <div className="overflow-hidden rounded-xl border border-accent-border bg-surface">
                <div className="grid gap-6 p-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:p-8">
                  <div className="min-w-0">
                    <p className="inline-flex items-center gap-1.5 rounded-full border border-accent-border bg-accent-muted px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.12em] text-accent-soft">
                      <span
                        aria-hidden="true"
                        className="h-1 w-1 rounded-full bg-accent"
                      />
                      {avalokan.status}
                    </p>

                    <h3 className="mt-4 text-2xl font-semibold tracking-[-0.02em] text-paper sm:text-3xl">
                      <Link
                        to={avalokan.path}
                        className="rounded transition-colors hover:text-accent-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-soft"
                      >
                        {avalokan.title}
                      </Link>
                    </h3>
                    <p className="mt-1 text-[13px] font-medium text-sand">
                      Discover Nepal. Explore its heritage. Experience its
                      stories.
                    </p>
                    <p className="mt-3 max-w-xl text-[13px] leading-relaxed text-slate-400">
                      {avalokan.solution}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {["Kotlin", "Jetpack Compose", "Firebase", "Room"].map(
                        (tag) => (
                          <span
                            key={tag}
                            className="rounded border border-border bg-canvas/40 px-2 py-0.5 text-[10px] font-medium text-slate-400"
                          >
                            {tag}
                          </span>
                        )
                      )}
                    </div>

                    <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
                      <Link
                        to={avalokan.path}
                        className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-[13px] font-semibold text-ink transition-colors hover:bg-accent-hover"
                      >
                        <Play size={13} fill="currentColor" aria-hidden="true" />
                        Open case study
                      </Link>
                      <a
                        href={APK_URL}
                        className="inline-flex items-center gap-1.5 text-[13px] font-medium text-slate-300 transition-colors hover:text-paper"
                      >
                        <Download size={13} aria-hidden="true" /> Download APK
                      </a>
                      <a
                        href={avalokan.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[13px] font-medium text-slate-400 transition-colors hover:text-paper"
                      >
                        <FaGithub size={13} aria-hidden="true" /> Source
                      </a>
                      <span className="font-mono text-[11px] text-slate-500">
                        v1.0.0 · 22s launch film inside
                      </span>
                    </div>
                  </div>

                  <div className="hidden justify-self-end sm:block">
                    <img
                      src={AvalokanLogo}
                      alt="Avalokan — Nepal Heritage Explorer app logo"
                      className="h-40 w-auto rounded-xl border border-border-strong bg-[#F5F3ED] object-contain lg:h-48"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Supporting applications */}
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
              {supporting.map((project, index) => {
                const screenshot = screenshots[project.path];
                return (
                  <motion.article
                    key={project.id}
                    initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.35, delay: index * 0.05 }}
                    className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-accent-border focus-within:border-accent-border"
                  >
                    <Link
                      to={project.path}
                      className="absolute inset-0 z-10"
                      aria-label={`View project: ${project.title}`}
                    />
                    {screenshot && (
                      <div className="relative overflow-hidden border-b border-border">
                        <img
                          src={screenshot}
                          alt={`Preview of ${project.title}`}
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
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-[15px] font-semibold text-paper transition-colors group-hover:text-accent-soft">
                          {project.title}
                        </h3>
                        <ArrowUpRight
                          size={15}
                          aria-hidden="true"
                          className="mt-0.5 shrink-0 text-slate-500 transition-colors group-hover:text-accent-soft"
                        />
                      </div>
                      <p className="mt-2 line-clamp-3 text-[12.5px] leading-relaxed text-slate-400">
                        {project.solution}
                      </p>
                      <p className="mt-auto pt-4 text-[10.5px] font-medium uppercase tracking-[0.1em] text-slate-500">
                        {project.tags.join(" · ")}
                      </p>
                    </div>
                  </motion.article>
                );
              })}
            </div>

            {/* Toolkit — the stack behind the work, kept typographic */}
            <div className="mt-12 border-t border-border pt-8">
              <h3 className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-slate-500">
                Toolkit
              </h3>
              <div className="mt-5 grid gap-6 sm:grid-cols-3">
                {toolkit.map((item) => (
                  <div key={item.title}>
                    <h4 className="text-[13px] font-semibold text-paper">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-[12.5px] leading-relaxed text-slate-400">
                      {item.desc}
                    </p>
                    <p className="mt-2 font-mono text-[10.5px] leading-relaxed text-slate-500">
                      {item.tags.join(" · ")}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <Link
              to="/projects"
              className="mt-8 inline-flex items-center gap-1 text-[13px] font-medium text-slate-400 transition-colors hover:text-sand sm:hidden"
            >
              All projects <ArrowUpRight size={13} aria-hidden="true" />
            </Link>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            HOW I BUILD
            ═══════════════════════════════════════════════════════════════════ */}
        <section
          aria-labelledby="approach-heading"
          className="border-t border-border px-5 py-20 sm:px-6 sm:py-24"
        >
          <div className="mx-auto max-w-4xl xl:max-w-5xl">
            <SectionHeading
              id="approach-heading"
              eyebrow="Approach"
              title="How I build"
              subtitle="Three principles that guide how I approach every project."
            />

            <div>
              {philosophy.map((item, i) => (
                <motion.div
                  key={item.number}
                  {...sectionMotion}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="group"
                >
                  <div className="flex flex-col gap-3 border-b border-border py-6 last:border-b-0 sm:flex-row sm:items-start sm:gap-8">
                    <span className="shrink-0 pt-0.5 font-mono text-[12px] tabular-nums text-slate-600 transition-colors group-hover:text-accent-soft">
                      {item.number}
                    </span>
                    <div>
                      <h3 className="mb-1.5 text-[15px] font-medium text-paper">
                        {item.title}
                      </h3>
                      <p className="max-w-xl text-[13px] leading-relaxed text-slate-400">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            ANDROID JOURNEY
            ═══════════════════════════════════════════════════════════════════ */}
        <section
          aria-labelledby="journey-heading"
          className="border-t border-border px-5 py-20 sm:px-6 sm:py-24"
        >
          <div className="mx-auto max-w-4xl xl:max-w-5xl">
            <SectionHeading
              id="journey-heading"
              eyebrow="Journey"
              title="My Android Journey"
              subtitle="From my first line of code to building complete Android applications."
            />

            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute bottom-1 left-[5px] top-1 w-px bg-border"
              />

              {journeyItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={reduceMotion ? { opacity: 1 } : { opacity: 0, x: -6 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="group relative flex gap-5 sm:gap-6"
                >
                  <div className="relative z-10 flex shrink-0 items-start pt-1.5">
                    <span
                      className={`h-[11px] w-[11px] rounded-full border-2 transition-colors duration-300 ${
                        item.active
                          ? "border-accent bg-accent"
                          : "border-slate-600 bg-canvas group-hover:border-slate-500"
                      }`}
                    />
                  </div>

                  <div className="pb-7 pt-0.5">
                    <div className="mb-1 flex items-center gap-3">
                      <span
                        className={`text-[11px] font-medium tabular-nums ${
                          item.active ? "text-accent-soft" : "text-slate-400"
                        }`}
                      >
                        {item.period}
                      </span>
                      {item.active && (
                        <span className="rounded border border-accent-border px-1.5 py-0.5 text-[9px] font-medium uppercase leading-none tracking-wider text-accent-soft">
                          Current
                        </span>
                      )}
                    </div>
                    <h3
                      className={`mb-1 text-sm font-medium leading-snug sm:text-base ${
                        item.active ? "text-paper" : "text-slate-300"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className="max-w-lg text-[13px] leading-relaxed text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            WRITING
            ═══════════════════════════════════════════════════════════════════ */}
        <section
          aria-labelledby="writing-heading"
          className="border-t border-border px-5 py-20 sm:px-6 sm:py-24"
        >
          <div className="mx-auto max-w-4xl xl:max-w-5xl">
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
                className="mb-10 hidden shrink-0 items-center gap-1 text-[13px] font-medium text-slate-400 transition-colors hover:text-sand sm:inline-flex"
              >
                All blogs <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            </div>

            <div className="border-t border-border">
              {notePreviews.map((note, i) => (
                <motion.a
                  key={note.url}
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  href={note.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group -mx-3 flex items-start gap-5 rounded-lg border-b border-border px-3 py-5 transition-colors last:border-b-0 hover:bg-surface/40 sm:gap-8"
                >
                  <div className="w-16 shrink-0 pt-0.5 sm:w-20">
                    <span className="text-[11px] font-medium uppercase tabular-nums tracking-wider text-slate-500">
                      {note.date}
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="mb-1.5 text-[15px] font-medium leading-snug text-paper transition-colors group-hover:text-accent-soft sm:text-base">
                      {note.title}
                    </h3>
                    <span className="text-[10px] font-medium uppercase tracking-wider text-accent-soft/70">
                      {note.category}
                    </span>
                  </div>

                  <div className="shrink-0 pt-1 text-slate-600 transition-colors group-hover:text-accent-soft">
                    <ArrowRight size={15} aria-hidden="true" />
                  </div>
                </motion.a>
              ))}
            </div>

            <a
              href="https://blog.samratparajuli0.com.np/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1 text-[13px] font-medium text-slate-400 transition-colors hover:text-sand sm:hidden"
            >
              All blogs <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          </div>
        </section>

        <TestimonialsSection testimonials={testimonials} />

        {/* ═══════════════════════════════════════════════════════════════════
            CONTACT CTA
            ═══════════════════════════════════════════════════════════════════ */}
        <section
          aria-labelledby="contact-cta-heading"
          className="border-t border-border px-5 py-20 sm:px-6 sm:py-24"
        >
          <div className="mx-auto max-w-3xl text-center">
            <motion.div {...sectionMotion}>
              <h2
                id="contact-cta-heading"
                className="mb-4 text-2xl font-semibold tracking-[-0.02em] text-paper sm:text-3xl lg:text-4xl"
              >
                Have something worth building?
              </h2>
              <p className="mx-auto mb-8 max-w-md text-sm leading-relaxed text-slate-400 sm:text-base">
                I'm open to Android roles and to conversations about shipping
                software that has to work outside a stable Wi-Fi connection.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-[13.5px] font-semibold text-ink transition-colors hover:bg-accent-hover"
                >
                  Get in touch <ArrowUpRight size={15} aria-hidden="true" />
                </Link>
                <a
                  href="https://github.com/SamratVsn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border-strong px-5 py-3 text-[13.5px] font-medium text-slate-300 transition-colors hover:border-accent-border hover:text-paper"
                >
                  <FaGithub size={15} aria-hidden="true" />
                  View GitHub
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
