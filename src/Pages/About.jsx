// About.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import SEO from "../Components/SEO";
import Footer from "../Components/Footer";
import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import PortfolioImage from "../assets/Profile.jpg";
import Himanshu from "../assets/image.png";
import Anish from "../assets/Anish.jpg";
import Ankit from "../assets/Ankit.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.4 },
};

const stagger = (i) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.4, delay: i * 0.07 },
});

const testimonials = [
  {
    quote: "Samrat is a seeker. What I admire most is his curiosity and willingness to keep improving. He doesn't just code; he builds from what he learns.",
    author: "Himanshu Mishra",
    role: "Freelance Web Developer",
    photo: Himanshu,
    initials: "HM",
  },
  {
    quote: "He approaches every task with creativity and a problem-solving mindset. His passion for technology is clear and his growth is consistent.",
    author: "Anish Sah",
    role: "Cyber-Security Enthusiast",
    photo: Anish,
    initials: "AS",
  },
  {
    quote: "A dedicated developer who solves complex problems while maintaining clean, organized code. A dependable and valuable collaborator.",
    author: "Ankit",
    role: "Video Editor · Colleague",
    photo: Ankit,
    initials: "AK",
  },
];

const focusItems = [
  {
    title: "Jetpack Compose",
    desc: "Deepening my understanding of Compose internals, custom layouts, and animation APIs.",
    progress: 100,
  },
  {
    title: "Android Architecture",
    desc: "Studying production-grade patterns — MVVM, Hilt, Room, and proper separation of concerns.",
    progress: 100,
  },
  {
    title: "Open Source",
    desc: "Commiting everything I build to github repositories, contributing to existing projects, and sharing knowledge through writing.",
    progress: 100,
  },
  {
    title: "Real Projects",
    desc: "Trying to build and ship real applications, even if small, to apply what I learn and gain practical experience.",
    progress: 100,
  },
];

const stats = [
  { value: "1+", label: "Years building Android" },
  { value: "25+", label: "Github Repositories" },
  { value: "5+", label: "Skills Learned" },
  { value: "Open", label: "to work", accent: true },
];

const stack = ["Kotlin", "Jetpack Compose", "MVVM", "Retrofit", "Room", "Coroutines"];

const journey = [
  {
    label: "Early excitement & curiosity",
    desc: "Fascinated by how software shapes our world. Initial dream was to be a 'Software Engineer' without fully understanding what that meant.",
  },
  {
    label: "Started with C",
    desc: "Pointers and memory management shaped how I think about performance to this day.",
  },
  {
    label: "Discovered Android",
    desc: "Mobile let me combine problem solving with building things people carry every day.",
  },
  {
    label: "Now — Learning publicly",
    desc: "Shipping projects, writing about it, contributing to open source.",
    active: true,
  },
];

function SectionHeader({ label, sub }) {
  return (
    <motion.div {...fadeUp}>
      <div className="flex items-center gap-2 mb-3">
        <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]/50" />
        <span className="w-6 h-px bg-[#2DD4BF]/25" />
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-[-0.025em] mb-1.5">
        {label}
      </h2>
      <p className="text-slate-500 text-sm mb-8">{sub}</p>
    </motion.div>
  );
}

export default function About() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-400 selection:bg-[#2DD4BF]/20 selection:text-[#2DD4BF] overflow-x-hidden">
      <SEO
        title="About | Samrat Parajuli - Android Developer"
        description="Samrat Parajuli is an Android developer from Nepal focused on Kotlin, Jetpack Compose, and building production-quality mobile applications."
        ogUrl="https://www.samratparajuli0.com.np/about"
      />
      <Header />

      {/* ── HERO ── */}
      <section className="relative pt-28 pb-16 px-6">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: [
              "linear-gradient(rgba(45,212,191,0.5) 1px, transparent 1px)",
              "linear-gradient(90deg, rgba(45,212,191,0.5) 1px, transparent 1px)",
            ].join(", "),
            backgroundSize: "64px 64px",
          }}
        />

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row gap-8 items-start md:items-center"
          >
            {/* Avatar */}
            <div className="relative shrink-0">
              <div className="absolute -inset-px rounded-2xl border border-[#2DD4BF]/15" />
              <img
                src={PortfolioImage}
                alt="Samrat Parajuli"
                className="relative w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-2xl border border-slate-800/60"
                loading="eager"
              />
            </div>

            {/* Bio */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-[#2DD4BF]/[0.07] border border-[#2DD4BF]/20 rounded-full px-3 py-1.5 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]" />
                <span className="text-[11px] text-[#2DD4BF] font-semibold tracking-wide">
                  Android Developer · SamratVsn
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-[-0.03em] leading-none mb-3">
                Samrat Parajuli
              </h1>
              <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                Building native Android experiences with Kotlin, Jetpack Compose, and clean
                architecture. Documenting every step publicly.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex md:flex-col gap-3 shrink-0">
              <Link
                to="/notes"
                className="inline-flex items-center gap-2 bg-[#2DD4BF] hover:bg-[#2DD4BF]/90 text-[#020617] text-xs font-bold px-5 py-2.5 rounded-xl transition-all active:scale-[0.97]"
              >
                Notes <ArrowUpRight size={13} />
              </Link>
              <a
                href="https://github.com/SamratVsn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-slate-800/60 text-slate-400 hover:text-white hover:border-slate-700 text-xs font-medium px-5 py-2.5 rounded-xl transition-all hover:bg-white/[0.03]"
              >
                <FaGithub size={14} /> GitHub
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-[#0A0F1E] border border-slate-800/50 rounded-xl p-4 text-center"
              >
                <div
                  className={`text-2xl font-bold tracking-tight ${
                    s.accent ? "text-[#2DD4BF]" : "text-white"
                  }`}
                >
                  {s.value}
                </div>
                <div className="text-[11px] text-slate-500 mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── MY STORY ── */}
      <section className="py-20 px-6 border-t border-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <SectionHeader label="My story" sub="How I got here and what keeps me going." />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-[#0A0F1E] border border-slate-800/50 rounded-xl p-5"
            >
              {journey.map((step, i) => (
                <div
                  key={i}
                  className={`flex gap-4 py-4 ${
                    i < journey.length - 1 ? "border-b border-slate-800/30" : ""
                  }`}
                >
                  <div className="flex flex-col items-center pt-1 gap-1.5">
                    <span
                      className={`w-2 h-2 rounded-full shrink-0 ${
                        step.active ? "bg-[#2DD4BF]" : "bg-slate-700"
                      }`}
                    />
                    {i < journey.length - 1 && (
                      <span className="w-px flex-1 bg-slate-800/60 min-h-[16px]" />
                    )}
                  </div>
                  <div>
                    <p
                      className={`text-[10px] font-bold tracking-[0.08em] uppercase mb-1.5 ${
                        step.active ? "text-[#2DD4BF]" : "text-slate-600"
                      }`}
                    >
                      {step.label}
                    </p>
                    <p className="text-slate-500 text-[12.5px] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Card */}
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="bg-[#0A0F1E] border border-slate-800/50 rounded-xl p-5 flex flex-col gap-5"
            >
              <div>
                <p className="text-[10px] font-bold text-slate-600 tracking-[0.08em] uppercase mb-3">
                  Core philosophy
                </p>
                <p className="text-slate-400 text-[13px] leading-relaxed italic">
                  "The best engineers stay curious, share what they learn, and build with purpose."
                </p>
              </div>
              <div className="border-t border-slate-800/40 pt-5">
                <p className="text-[10px] font-bold text-slate-600 tracking-[0.08em] uppercase mb-3">
                  Stack
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {stack.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] text-slate-500 bg-slate-900 border border-slate-800/60 rounded-md px-2.5 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="border-t border-slate-800/40 pt-5">
                <p className="text-[10px] font-bold text-slate-600 tracking-[0.08em] uppercase mb-3">
                  Goal
                </p>
                <p className="text-slate-500 text-[12.5px] leading-relaxed">
                  Become a professional Android engineer who writes production-quality code,
                  contributes to open source, and builds applications that make a difference.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CURRENT FOCUS ── */}
      <section className="py-20 px-6 border-t border-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <SectionHeader label="Current focus" sub="What I am actively learning and building toward." />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {focusItems.map((item, i) => (
              <motion.div
                key={i}
                {...stagger(i)}
                className="bg-[#0A0F1E] border border-slate-800/50 rounded-xl p-5 hover:border-[#2DD4BF]/20 transition-all duration-300 group"
              >
                <p className="text-[10px] font-bold text-[#2DD4BF] tracking-[0.08em] uppercase mb-2">
                  {item.title}
                </p>
                <p className="text-slate-500 text-[12.5px] leading-relaxed mb-3">
                  {item.desc}
                </p>
                <div className="h-[3px] bg-slate-800/60 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#2DD4BF] rounded-full transition-all duration-700"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 px-6 border-t border-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <SectionHeader label="What others say" sub="Perspectives from collaborators, peers, and friends." />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                {...stagger(i)}
                className="bg-[#0A0F1E] border border-slate-800/50 rounded-xl p-5 flex flex-col hover:border-[#2DD4BF]/20 transition-all duration-300"
              >
                <div className="text-[28px] text-[#2DD4BF]/15 leading-none mb-3 select-none">
                  &ldquo;
                </div>
                <p className="text-slate-400 text-[12.5px] leading-relaxed flex-1 mb-5">
                  {t.quote}
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-800/30">
                  <img
                    src={t.photo}
                    alt={t.author}
                    className="w-9 h-9 rounded-full object-cover border border-slate-800/60 shrink-0"
                    loading="lazy"
                  />
                  <div>
                    <p className="text-white text-[12px] font-medium">{t.author}</p>
                    <p className="text-slate-600 text-[11px]">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 border-t border-slate-800/30">
        <div className="max-w-lg mx-auto text-center">
          <motion.div {...fadeUp}>
            <div className="flex items-center justify-center gap-2 mb-5">
              <span className="w-6 h-px bg-[#2DD4BF]/25" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]/50" />
              <span className="w-6 h-px bg-[#2DD4BF]/25" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-[-0.025em] mb-3">
              Let's build something meaningful
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              Interested in collaborating, discussing Android development, or simply connecting?
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#2DD4BF] hover:bg-[#2DD4BF]/90 text-[#020617] font-bold text-sm px-6 py-2.5 rounded-xl transition-all active:scale-[0.97]"
              >
                Contact me <ArrowUpRight size={14} />
              </Link>
              <a
                href="https://www.linkedin.com/in/samratvsn/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-slate-800/60 text-slate-400 hover:text-white hover:border-slate-700 text-sm font-medium px-6 py-2.5 rounded-xl transition-all hover:bg-white/[0.03]"
              >
                <FaLinkedin size={15} /> LinkedIn
              </a>
              <a
                href="https://github.com/SamratVsn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-slate-800/60 text-slate-400 hover:text-white hover:border-slate-700 text-sm font-medium px-6 py-2.5 rounded-xl transition-all hover:bg-white/[0.03]"
              >
                <FaGithub size={15} /> GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}