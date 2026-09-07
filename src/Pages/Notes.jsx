import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageLayout from "../Components/PageLayout";
import SEO from "../Components/SEO";
import PageHeader from "../Components/PageHeader";
import SectionHeading from "../Components/SectionHeading";
import CategoryFilter from "../Components/CategoryFilter";
import { ArrowUpRight, FileText } from "lucide-react";

/* ── content model ──────────────────────────────────────────────────────────
   Add a new note by appending an object below. `dateISO` keeps sorting
   deterministic; `category` must be one of CATEGORIES (minus "All");
   `featured` pins at most one note to the hero area.
   Reading times are intentionally not displayed — lengths come from external
   posts and can't be computed reliably from this data.                            */

const notes = [
  {
    title: "Attending the Localhost Kathmandu Event by .Net Hub Kathmandu",
    excerpt:
      "How the Microsoft Build 2026 // Localhost : Kathmandu Event went from a student's perspective.",
    url: "https://medium.com/@samratvsn/attending-the-localhost-kathmandu-event-by-net-hub-kathmandu-d29a29dbed2d",
    date: "Jun 15, 2026",
    dateISO: "2026-06-15",
    category: "Events",
    tags: ["learning-in-public", "events", "nepal"],
    image:
      "https://miro.medium.com/v2/resize:fill:640:360/1*KYyjeb2V91OfcgoM3iITlw.jpeg",
    featured: false,
  },
  {
    title: "A Random Networking Session turned fruitful",
    excerpt:
      "What a recent high school graduate learned from a tech specialist at Localhost Kathmandu.",
    url: "https://medium.com/@samratvsn/a-random-networking-session-turned-fruitful-e2123e919d60",
    date: "Jun 14, 2026",
    dateISO: "2026-06-14",
    category: "Nepal & Technology",
    tags: ["networking", "mentorship", "career"],
    image:
      "https://miro.medium.com/v2/resize:fill:640:360/0*KTTKhNk5OK8HZPlJ",
    featured: false,
  },
  {
    title: "Time to Learn",
    excerpt:
      "Why waiting for the perfect time to start learning holds more people back than a lack of talent or resources.",
    url: "https://medium.com/@samratvsn/time-to-learn-0dd1697f2db3?sharedUserId=samratvsn",
    date: "Jul 29, 2026",
    dateISO: "2026-07-29",
    category: "Development",
    tags: ["learning", "productivity", "mindset"],
    image:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/0*peSb3OxLzdAtY7dm",
    featured: true,
  },
  {
    title: "How I Built a Productivity App from Scratch",
    excerpt:
      "The design decisions, architecture, and thought process behind building Viram, a platform focused on reducing digital addiction.",
    url: "https://medium.com/@samratvsn/how-i-built-a-productivity-app-from-scratch-9620eed54d57",
    date: "Jul 30, 2026",
    dateISO: "2026-07-30",
    category: "Android",
    tags: ["android", "productivity", "software-development"],
    image:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*4hlT3BiQs6MJpCIKBSWDDw.png",
    featured: false,
  },
];

const CATEGORIES = [
  "All",
  "Android",
  "Development",
  "Events",
  "Nepal & Technology",
];

/* ── animation helpers ───────────────────────────────────────────────────── */

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/* ── note card ────────────────────────────────────────────────────────────── */

function NoteCard({ note }) {
  return (
    <motion.a
      variants={cardVariants}
      href={note.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-2xl border border-white/[0.05] bg-surface/60 backdrop-blur-md overflow-hidden transition-colors duration-300 hover:border-accent/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      {note.image && (
        <div className="relative h-40 sm:h-44 overflow-hidden bg-slate-800/30">
          <img
            src={note.image}
            alt=""
            className="w-full h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500"
            loading="lazy"
          />
        </div>
      )}

      <div className="flex-1 flex flex-col p-5">
        <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider mb-2.5">
          <span className="text-accent/80 font-semibold">{note.category}</span>
          <span className="w-1 h-1 rounded-full bg-slate-700" />
          <span className="text-slate-500">{note.date}</span>
        </div>
        <h3 className="text-white text-[15px] sm:text-base font-semibold leading-snug mb-2 group-hover:text-accent transition-colors duration-200">
          {note.title}
        </h3>
        <p className="text-slate-500 text-[13px] leading-relaxed line-clamp-3 mb-4 flex-1">
          {note.excerpt}
        </p>
        <span className="mt-auto inline-flex items-center gap-1.5 text-[13px] text-slate-500 group-hover:text-accent transition-colors duration-200 pt-3 border-t border-white/[0.04]">
          Read note
          <ArrowUpRight
            size={13}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </motion.a>
  );
}

/* ── page ─────────────────────────────────────────────────────────────────── */

export default function Notes() {
  const [activeCategory, setActiveCategory] = useState("All");

  const matches = (n) =>
    activeCategory === "All" || n.category === activeCategory;

  const featured = notes.find((n) => n.featured && matches(n));
  const rest = notes.filter((n) => !n.featured && matches(n));
  const hasAny = Boolean(featured) || rest.length > 0;

  return (
    <PageLayout>
      <SEO
        title="Notes | SamratVsn"
        description="Notes on Android development, software engineering, technology, events, and building in public by Samrat Parajuli."
        ogUrl="https://www.samratparajuli0.com.np/notes"
      />

      <div className="relative max-w-6xl mx-auto px-6 xl:max-w-7xl 2xl:max-w-[90rem] min-[1920px]:max-w-[100rem] pb-6">
        <PageHeader
          eyebrow="Writing"
          title={
            <>
              Notes<span className="text-accent">.</span>
            </>
          }
          description="Things I've learned, built, experienced, and written down along the way."
        />

        <CategoryFilter
          categories={CATEGORIES}
          active={activeCategory}
          onChange={setActiveCategory}
          label="Filter notes by category"
        />

        {featured && (
          <motion.section
            key={`featured-${activeCategory}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-14 sm:mb-16"
          >
            <a
              href={featured.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-white/[0.05] bg-surface/60 backdrop-blur-md overflow-hidden hover:border-accent/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors duration-300"
            >
              <div className="flex flex-col md:flex-row">
                {featured.image && (
                  <div className="relative h-52 sm:h-64 md:h-auto md:w-1/2 shrink-0 overflow-hidden bg-slate-800/30">
                    <img
                      src={featured.image}
                      alt=""
                      className="w-full h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500"
                      loading="lazy"
                    />
                  </div>
                )}

                <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2.5 mb-3 flex-wrap">
                      <span className="text-[10px] font-mono font-bold tracking-[0.1em] uppercase text-accent/80">
                        Featured
                      </span>
                      <span className="w-1 h-1 rounded-full bg-slate-700" />
                      <span className="text-[11px] font-mono text-slate-500">
                        {featured.date}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-slate-700" />
                      <span className="text-[11px] font-mono text-slate-500">
                        {featured.category}
                      </span>
                    </div>
                    <h2 className="text-white text-lg sm:text-xl font-semibold mb-2 leading-snug group-hover:text-accent transition-colors duration-200">
                      {featured.title}
                    </h2>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-prose">
                      {featured.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-5 pt-4 border-t border-white/[0.04]">
                    <div className="flex flex-wrap gap-1.5">
                      {featured.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] font-mono text-slate-500 bg-surface/60 border border-white/[0.05] rounded px-2 py-0.5 uppercase tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-[13px] text-slate-500 group-hover:text-accent transition-colors duration-200 shrink-0 ml-4">
                      Read <ArrowUpRight size={13} />
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </motion.section>
        )}

        {rest.length > 0 && (
          <section>
            <SectionHeading
              eyebrow="Latest"
              title={activeCategory === "All" ? "More notes" : activeCategory}
              subtitle={
                activeCategory === "All"
                  ? "Everything else I've written down recently."
                  : "Everything I've written in this category."
              }
            />
            <motion.div
              key={`grid-${activeCategory}`}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 pb-4"
            >
              {rest.map((note) => (
                <NoteCard key={note.url} note={note} />
              ))}
            </motion.div>
          </section>
        )}

        {!hasAny && (
          <div className="flex flex-col items-center justify-center border border-white/[0.05] rounded-2xl py-20 px-6 text-center">
            <FileText size={28} className="text-slate-600 mb-4" />
            <p className="text-white text-sm font-medium mb-1">
              Nothing here yet
            </p>
            <p className="text-slate-500 text-sm max-w-sm">
              I haven't written about this category yet — it's likely in
              progress.
            </p>
          </div>
        )}

        {/* closing note */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className="pt-12 mt-8 border-t border-white/[0.05]"
        >
          <div className="text-center py-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-[-0.02em] mb-3">
              Still learning.
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-md mx-auto">
              I write these notes as I learn — sometimes to explain something,
              sometimes just to remember it.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-accent transition-colors duration-200 font-medium"
            >
              About my journey <ArrowUpRight size={14} />
            </Link>
          </div>
        </motion.section>
      </div>
    </PageLayout>
  );
}