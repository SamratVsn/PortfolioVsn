import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Quote } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import BackgroundFX from "./BackgroundFX";
import SectionHeading from "./SectionHeading";

function getInitials(name = "") {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function TestimonialCard({ testimonial, index, reduceMotion }) {
  const ref = useRef(null);
  const { quote, name, role, linkedinUrl, avatar } = testimonial;

  // Cursor-following spotlight (skipped entirely under reduced motion)
  const handleMove = (e) => {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    ref.current.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.figure
      ref={ref}
      onMouseMove={handleMove}
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
      className="group relative mb-5 break-inside-avoid overflow-hidden rounded-2xl border border-slate-800/80 bg-[#0A101F]/80 p-6 sm:p-7 backdrop-blur-md transition-[border-color,background-color,box-shadow] duration-300 hover:border-blue-500/40 hover:bg-[#0E162B]/90 hover:shadow-[0_12px_30px_-10px_rgba(59,130,246,0.18)] lg:mb-6"
    >
      {/* Cursor-following spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(240px circle at var(--mx, 50%) var(--my, 0%), rgba(59,130,246,0.10), transparent 70%)",
        }}
      />

      {/* Top edge accent on hover */}
      <div
        aria-hidden="true"
        className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/0 to-transparent transition-all duration-500 group-hover:via-blue-400/60"
      />

      {/* Oversized watermark quote */}
      <Quote
        aria-hidden="true"
        className="pointer-events-none absolute -right-2 -top-2 h-24 w-24 rotate-6 text-blue-500/[0.05] transition-colors duration-500 group-hover:text-blue-500/[0.09]"
      />

      <div className="relative">
        {/* Badge */}
        <div className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/10 text-blue-400 transition-colors group-hover:bg-blue-500/15">
          <Quote className="h-4 w-4" />
        </div>

        <blockquote>
          <p className="text-[14.5px] leading-[1.75] text-slate-300 selection:bg-blue-500/30">
            &ldquo;{quote}&rdquo;
          </p>
        </blockquote>

        {/* Author */}
        <figcaption className="mt-6 flex items-center justify-between gap-3 border-t border-slate-800/70 pt-5">
          <div className="flex min-w-0 items-center gap-3">
            <div className="relative shrink-0">
              <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-blue-400/25 bg-gradient-to-br from-blue-500/25 to-slate-800 text-xs font-medium tracking-wider text-blue-200 ring-2 ring-[#0A101F]">
                {avatar ? (
                  <img
                    src={avatar}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  getInitials(name)
                )}
              </div>
            </div>

            <div className="min-w-0">
              <p className="truncate text-[13.5px] font-semibold tracking-tight text-white transition-colors group-hover:text-blue-200">
                {name}
              </p>
              <p className="truncate text-xs text-slate-400">{role}</p>
            </div>
          </div>

          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${name}'s LinkedIn profile`}
              className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-800 text-slate-400 outline-none transition-all duration-200 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-400 focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <FaLinkedin size={15} />
            </a>
          )}
        </figcaption>
      </div>
    </motion.figure>
  );
}

export default function TestimonialsSection({ testimonials }) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden border-t border-slate-800/40 px-5 py-24 sm:px-6 sm:py-28"
    >
      <BackgroundFX gridOpacity={0.015} />

      {/* Subtle radial glow for depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/5 blur-[120px]"
      />

      <div className="relative mx-auto max-w-5xl xl:max-w-6xl 2xl:max-w-7xl min-[1920px]:max-w-[90rem]">
        <SectionHeading
          animated
          eyebrow="Perspectives"
          title="What others say"
          subtitle="From people I've worked or learned alongside."
        />

        {/* Masonry via CSS columns — cards keep their natural height, no forced gaps */}
        <div className="columns-1 gap-5 md:columns-2 lg:columns-3 lg:gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard
              key={t.name}
              testimonial={t}
              index={i}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}