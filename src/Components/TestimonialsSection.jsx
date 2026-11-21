import Reveal from "./ui/Reveal";
import { Quote } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import SectionHeading from "./SectionHeading";
import Container from "./ui/Container";

function getInitials(name = "") {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function TestimonialCard({ testimonial, index }) {
  const { quote, name, role, linkedinUrl, avatar } = testimonial;

  return (
    <Reveal
      as="figure"
      delay={(index % 3) * 60}
      className="group relative mb-5 break-inside-avoid overflow-hidden rounded-xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-accent-border sm:p-7 lg:mb-6"
    >
      <div className="relative">
        <div className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-accent-border bg-accent-muted text-accent-soft">
          <Quote className="h-4 w-4" aria-hidden="true" />
        </div>

        <blockquote>
          <p className="text-body text-slate-300">
            &ldquo;{quote}&rdquo;
          </p>
        </blockquote>

        <figcaption className="mt-6 flex items-center justify-between gap-3 border-t border-border pt-5">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border-strong bg-elevated font-mono text-label font-medium text-accent-soft">
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

            <div className="min-w-0">
              <p className="truncate text-small font-semibold tracking-tight text-paper">
                {name}
              </p>
              <p className="truncate text-label tracking-normal text-slate-400">{role}</p>
            </div>
          </div>

          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${name}'s LinkedIn profile (opens in a new tab)`}
              className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border text-slate-400 transition-colors hover:border-accent-border hover:text-accent-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-soft"
            >
              <FaLinkedin size={15} aria-hidden="true" />
            </a>
          )}
        </figcaption>
      </div>
    </Reveal>
  );
}

export default function TestimonialsSection({ testimonials }) {
  return (
    <section
      id="testimonials"
      aria-labelledby="perspectives-heading"
      className="relative border-t border-border py-20 sm:py-24"
    >
      <Container variant="wide">
        <SectionHeading
          id="perspectives-heading"
          eyebrow="Perspectives"
          title="What others say"
          subtitle="From people I've worked or learned alongside."
        />

        {/* Masonry via CSS columns — cards keep their natural height, no forced gaps */}
        <div className="columns-1 gap-5 md:columns-2 lg:columns-3 lg:gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
