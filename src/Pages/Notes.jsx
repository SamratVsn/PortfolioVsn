import { motion } from "framer-motion";
import Header from "../Components/Header";
import SEO from "../Components/SEO";
import Footer from "../Components/Footer";
import { ArrowUpRight } from "lucide-react";
import {Link} from "react-router-dom";

const articles = [
  {
    title: "Attending the Localhost Kathmandu Event by .Net Hub Kathmandu",
    excerpt:
      "How the Microsoft Build 2026 // Localhost : Kathmandu Event went from a student's perspective.",
    url: "https://medium.com/@samratvsn/attending-the-localhost-kathmandu-event-by-net-hub-kathmandu-d29a29dbed2d",
    date: "Jun 15, 2026",
    category: "Event Reflection",
    tags: ["learning-in-public", "events", "nepal"],
    image:
      "https://miro.medium.com/v2/resize:fill:640:360/1*KYyjeb2V91OfcgoM3iITlw.jpeg",
    featured: true,
  },
  {
    title: "A Random Networking Session turned fruitful",
    excerpt:
      "What a recent high school graduate learned from a tech specialist at Localhost Kathmandu.",
    url: "https://medium.com/@samratvsn/a-random-networking-session-turned-fruitful-e2123e919d60",
    date: "Jun 14, 2026",
    category: "Personal Growth",
    tags: ["networking", "mentorship", "career"],
    image:
      "https://miro.medium.com/v2/resize:fill:640:360/0*KTTKhNk5OK8HZPlJ",
    featured: false,
  },
];

const milestones = [
  {
    period: "2024",
    title: "Started programming with C",
    description:
      "Began learning programming fundamentals through C. Built a Student Management System with binary file I/O, struct serialization, and direct byte-offset navigation.",
  },
  {
    period: "Early 2025",
    title: "Learned Web Concepts and JavaScript",
    description:
      "Learned HTML, CSS, and JavaScript to understand web development basics. Built simple interactive web pages and got familiar with the DOM.",
  },
  {
    period: "Mid 2025",
    title: "Started Learning Kotlin",
    description:
      "Transitioned to Kotlin to prepare for Android development. Explored language features like null safety, coroutines, and extension functions through small projects and exercises.",
  },
  {
    period: "Late 2025",
    title: "Started Android Development with Compose",
    description:
      "Began building Android apps using Jetpack Compose. Learned about composable functions, state management, and UI architecture.",
  },
  {
    period: "Early 2026",
    title: "Completed Android Basics with Compose",
    description:
      "Finished Google's Android Basics with Compose course. Learned Jetpack Compose fundamentals, state management, and Android app structure.",
  },
  {
    period: "Mid 2026",
    title: "Working toward production-quality Android development",
    description:
      "Currently focused on Android architecture patterns, testing strategies, and building production-quality applications. Learning Hilt, Room, and proper error handling.",
    active: true,
  },
];

const notePreviews = [
  {
    title: "Why I Chose Android Development",
    description:
      "A personal reflection on the journey into Android development, the challenges faced, and the reasons behind choosing this path.",
  },
  {
    title: "Compose State Management Lessons",
    description:
      "Lessons learned managing state in Jetpack Compose across screens and configuration changes. State hoisting, ViewModels, and derived state.",
  },
  {
    title: "Android Development Notes",
    description:
      "An ongoing collection of Android development insights, patterns, and gotchas.",
  },
  {
    title: "What I Learned Building an Android App myself",
    description:
      "Post-mortem reflections on specific projects and the engineering decisions behind them.",
  },
];

function Divider() {
  return (
    <hr className="border-none border-t border-slate-800/60 my-16" style={{ borderTopWidth: "1px" }} />
  );
}

function SectionLabel({ children }) {
  return (
    <p className="text-xs uppercase tracking-[0.12em] text-slate-500 mb-6 font-medium">
      {children}
    </p>
  );
}

function Notes() {
  const featured = articles.find((a) => a.featured);
  const rest = articles.filter((a) => !a.featured);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 selection:bg-[#3B82F6]/20 selection:text-[#3B82F6] overflow-x-hidden">
      <SEO
        title="Notes | Samrat Parajuli"
        description="Learning in public — Android journey, engineering notes, and event reflections by Samrat Parajuli."
        ogUrl="https://www.samratparajuli0.com.np/notes"
      />
      <Header />

      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">

        {/* ── Page header ── */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-white text-3xl sm:text-4xl font-bold mb-3 tracking-[-0.02em]">
            Notes<span className="text-[#3B82F6]">.</span>
          </h1>
          <p className="text-slate-400 text-base leading-relaxed max-w-lg">
            Learning in public — Android milestones, engineering thoughts, and
            reflections from the journey.
          </p>
        </motion.div>

        {/* ── Learning in Public ── */}
        <section>
          <SectionLabel>Learning in public</SectionLabel>

          {/* Featured article */}
          {featured && (
            <a
              href={featured.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block mb-10"
            >
              {featured.image && (
                <div className="w-full aspect-[2/1] sm:aspect-[3/1] rounded-lg overflow-hidden mb-5 bg-slate-800/30">
                  <img
                    src={featured.image}
                    alt=""
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[11px] text-[#3B82F6] font-medium uppercase tracking-wider">
                  Featured
                </span>
                <span className="text-slate-700">·</span>
                <span className="text-[11px] text-slate-500">{featured.date}</span>
                <span className="text-slate-700">·</span>
                <span className="text-[11px] text-slate-500">{featured.category}</span>
              </div>
              <h2 className="text-white text-lg sm:text-xl font-semibold mb-2 leading-snug group-hover:text-[#3B82F6] transition-colors duration-200">
                {featured.title}
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4 max-w-prose">
                {featured.excerpt}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm text-slate-500 group-hover:text-[#3B82F6] transition-colors duration-200">
                Read on Medium <ArrowUpRight size={13} />
              </span>
            </a>
          )}

          {/* Other articles */}
          {rest.length > 0 && (
            <div className="border-t border-slate-800/60 pt-8 space-y-8">
              {rest.map((article, i) => (
                <a
                  key={i}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-6 sm:gap-8 items-start"
                >
                  {article.image && (
                    <div className="hidden sm:block w-24 h-16 rounded-md overflow-hidden shrink-0 bg-slate-800/30">
                      <img
                        src={article.image}
                        alt=""
                        className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <span className="text-[11px] text-slate-500 uppercase tracking-wider">
                        {article.category}
                      </span>
                      <span className="text-slate-700">·</span>
                      <span className="text-[11px] text-slate-500">{article.date}</span>
                    </div>
                    <h3 className="text-white font-medium text-sm sm:text-base leading-snug mb-1.5 group-hover:text-[#3B82F6] transition-colors duration-200">
                      {article.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          )}
        </section>

        <Divider />

        {/* ── Android Journey ── */}
        <section>
          <SectionLabel>Android journey</SectionLabel>
          <p className="text-slate-400 text-sm leading-relaxed mb-10 max-w-md">
            From writing my first line of C to building Android apps with Jetpack Compose.
          </p>

          <div className="space-y-0">
            {milestones.map((item, i) => (
              <div key={i} className="flex gap-6 sm:gap-8 group">
                {/* Period column */}
                <div className="w-20 sm:w-24 shrink-0 pt-0.5">
                  <span
                    className={`text-xs font-medium tabular-nums ${
                      item.active ? "text-[#3B82F6]" : "text-slate-600"
                    }`}
                  >
                    {item.period}
                  </span>
                </div>

                {/* Content column */}
                <div
                  className={`flex-1 pb-9 ${
                    i < milestones.length - 1
                      ? "border-b border-slate-800/40"
                      : ""
                  }`}
                  style={{ marginBottom: i < milestones.length - 1 ? "0" : undefined }}
                >
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <h3
                      className={`font-medium text-sm sm:text-base leading-snug ${
                        item.active ? "text-white" : "text-slate-300"
                      }`}
                    >
                      {item.title}
                    </h3>
                    {item.active && (
                      <span className="text-[10px] text-[#3B82F6] border border-[#3B82F6]/25 px-1.5 py-0.5 rounded uppercase tracking-wider leading-none">
                        Now
                      </span>
                    )}
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── Engineering Notes ── */}
        <section>
          <SectionLabel><Link to = "/dev">Engineering notes</Link></SectionLabel>
          <p className="text-slate-400 text-sm leading-relaxed mb-10 max-w-md">
            Technical writing in progress — drafts on architecture, Compose patterns, and
            lessons from building.
          </p>

          <div className="space-y-0">
            {notePreviews.map((note, i) => (
              <div
                key={i}
                className={`py-5 ${
                  i < notePreviews.length - 1 ? "border-b border-slate-800/40" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-slate-300 font-medium text-sm sm:text-base mb-1.5 leading-snug">
                      {note.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {note.description}
                    </p>
                  </div>
                  <span className="shrink-0 mt-0.5 text-[10px] text-slate-600 border border-slate-800 px-2 py-0.5 rounded uppercase tracking-wider whitespace-nowrap">
                    Soon
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default Notes;