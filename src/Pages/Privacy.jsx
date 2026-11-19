import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BackgroundFX from "../Components/BackgroundFX";
import SEO from "../Components/SEO";
import PageHeader from "../Components/PageHeader";
import Container from "../Components/ui/Container";

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
            className="rounded text-accent-text underline decoration-accent/40 underline-offset-4 transition-colors hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-soft"
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
    <div className="min-h-screen overflow-x-hidden bg-canvas text-slate-400 selection:bg-accent/20 selection:text-accent">
      <SEO
        title="Privacy Policy | Samrat Parajuli"
        description="Privacy Policy for the portfolio website of Samrat Parajuli (SamratVsn) — what data this site processes, what it never collects, and why."
        ogUrl="https://www.samratparajuli0.com.np/privacy"
        schema={[
          {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            '@id': 'https://www.samratparajuli0.com.np/privacy#webpage',
            url: 'https://www.samratparajuli0.com.np/privacy',
            name: 'Privacy Policy | Samrat Parajuli',
            description: 'Privacy Policy for the portfolio website of Samrat Parajuli (SamratVsn) — what data this site processes, what it never collects, and why.',
            isPartOf: { '@id': 'https://www.samratparajuli0.com.np/#website' },
            about: { '@id': 'https://www.samratparajuli0.com.np/#person' },
            mainEntity: {
              '@type': 'WebPageElement',
              name: 'Privacy Policy',
              description: 'This website does not load third-party analytics or tracking scripts, does not set advertising cookies, and processes only voluntarily submitted contact form data via EmailJS and standard server logs via Vercel hosting.',
            },
          },
        ]}
      />
      <Header />

      <main id="main-content" className="relative pb-20 pt-10 sm:pb-24 sm:pt-14">
        <BackgroundFX />
        <Container variant="prose" className="relative">
          {/* Page introduction — not a landmark header; the site Header above
              is the only banner. */}
          <PageHeader
            eyebrow="Legal · Privacy"
            title="Privacy Policy"
            description="What this website processes when you visit it, and how that information is handled."
          />

          <p className="-mt-6 mb-12 flex items-center gap-2 font-mono text-label tracking-normal text-slate-400">
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-emerald-400/70" />
            Last updated: October 2026
          </p>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((s) => (
              <section key={s.id} aria-labelledby={s.id} className="scroll-mt-28">
                <h2
                  id={s.id}
                  className="mb-3 flex items-center gap-3 text-h3 font-semibold text-paper"
                >
                  <span aria-hidden="true" className="h-px w-5 shrink-0 bg-accent/40" />
                  {s.title}
                </h2>
                <div className="space-y-3 text-body text-slate-400">
                  {s.body}
                </div>
              </section>
            ))}
          </div>

          {/* Back link */}
          <nav aria-label="Portfolio" className="mt-14 border-t border-border pt-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded text-small text-slate-400 transition-colors hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-soft"
            >
              <span aria-hidden="true">←</span> Back to the portfolio
            </Link>
          </nav>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
