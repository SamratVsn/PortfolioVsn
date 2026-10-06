import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BottomNav from "../Components/BottomNav";
import BackgroundFX from "../Components/BackgroundFX";
import SEO from "../Components/SEO";

const sections = [
  {
    id: "what-this-covers",
    title: "What this page covers",
    body: (
      <>
        <p>
          This website is a personal portfolio belonging to Samrat Parajuli
          (SamratVsn), based in Kathmandu, Nepal. This policy explains what
          information the website processes when you visit it or get in touch,
          and how that information is used. It does not cover third-party
          websites linked from this one.
        </p>
      </>
    ),
  },
  {
    id: "contact-form",
    title: "Contact form",
    body: (
      <>
        <p>
          The contact form on this site asks for your name, email address, and
          a message. Submissions are processed by EmailJS, a third-party
          service that delivers the message to my email inbox. The information
          you voluntarily provide is used only to respond to your message or to
          communicate with you about your inquiry — it is not sold, rented, or
          shared for marketing purposes.
        </p>
      </>
    ),
  },
  {
    id: "hosting-logs",
    title: "Hosting and server logs",
    body: (
      <>
        <p>
          This site is hosted on Vercel. Like most hosting providers, Vercel
          automatically records basic technical information in server logs —
          such as IP address, browser and device type, pages visited, and
          timestamps — to operate, secure, and troubleshoot the service. I do
          not use this data to identify individual visitors.
        </p>
      </>
    ),
  },
  {
    id: "analytics",
    title: "Analytics",
    body: (
      <>
        <p>
          This website does not currently load any third-party analytics or
          tracking scripts (such as Google Analytics), and it does not set any
          advertising or tracking cookies. If analytics is added in the future,
          this page will be updated to explain exactly what is collected and
          why before any change goes live.
        </p>
      </>
    ),
  },
  {
    id: "third-party-resources",
    title: "Third-party resources",
    body: (
      <>
        <p>
          The site loads its fonts from Google Fonts. When your browser
          requests those resources, Google may process basic request metadata
          (such as your IP address) in line with Google's own privacy policy.
          Outbound links (GitHub, LinkedIn, the blog, and similar) are governed
          by those services' privacy policies, not this one.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: (
      <>
        <p>
          If you have questions about this policy, or want to request deletion
          of anything you've sent through the site, you can reach me at{" "}
          <a
            href="mailto:samratvsn@gmail.com"
            className="text-accent hover:text-accent-hover underline underline-offset-4 decoration-accent/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded"
          >
            samratvsn@gmail.com
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to this Privacy Policy",
    body: (
      <>
        <p>
          This Privacy Policy may be updated if the website's functionality,
          hosting, analytics configuration, or data practices change. Any
          changes will be reflected on this page with an updated “Last updated”
          date.
        </p>
      </>
    ),
  },
];

export default function Privacy() {
  return (
    <div className="min-h-screen bg-canvas text-slate-400 selection:bg-accent/20 selection:text-accent overflow-x-hidden">
      <SEO
        title="Privacy Policy | Samrat Parajuli"
        description="Privacy Policy for the personal portfolio website of Samrat Parajuli (SamratVsn) — what data this site processes and why."
        ogUrl="https://www.samratparajuli0.com.np/privacy"
      />
      <Header />

      <main className="relative pt-28 pb-20 sm:pb-24 px-6">
        <BackgroundFX />
        <div className="max-w-3xl mx-auto min-[1920px]:max-w-4xl relative">
          {/* Header */}
          <header className="mb-12 sm:mb-14">
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
              <span className="w-8 h-px bg-accent/25" />
              <span className="text-[11px] font-mono font-medium uppercase tracking-[0.14em] text-slate-500">
                Legal · Privacy
              </span>
            </div>
            <h1 className="text-white text-[2.1rem] sm:text-5xl font-bold tracking-[-0.03em] leading-[1.05] mb-4">
              Privacy Policy
            </h1>
            <p className="text-slate-400 text-[15px] leading-relaxed max-w-2xl">
              What this website processes when you visit it, and how that
              information is handled.
            </p>
            <p className="mt-5 text-[12px] font-mono text-slate-500 flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-emerald-400/70" />
              Last updated: October 2026
            </p>
          </header>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((s) => (
              <section key={s.id} aria-labelledby={s.id} className="scroll-mt-28">
                <h2
                  id={s.id}
                  className="text-white text-lg sm:text-xl font-semibold tracking-[-0.02em] mb-3 flex items-center gap-3"
                >
                  <span className="w-5 h-px bg-accent/40 shrink-0" />
                  {s.title}
                </h2>
                <div className="text-slate-400 text-[15px] leading-relaxed space-y-3">
                  {s.body}
                </div>
              </section>
            ))}
          </div>

          {/* Back link */}
          <nav aria-label="Portfolio" className="mt-14 pt-8 border-t border-white/[0.05]">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded"
            >
              <span aria-hidden="true">←</span> Back to the portfolio
            </Link>
          </nav>
        </div>
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
}