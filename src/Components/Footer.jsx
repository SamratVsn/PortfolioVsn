import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "./ui/Container";
import { SITE, TAGLINE } from "../content/site";

const BLOG_URL = SITE.blog;

const siteLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Avalokan", to: "/projects/avalokan" },
  { label: "Contact", to: "/contact" },
];

const externalLinks = [
  { label: "Blog", href: BLOG_URL, icon: null },
  { label: "GitHub", href: "https://github.com/SamratVsn", icon: FaGithub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/samratvsn/",
    icon: FaLinkedin,
  },
  { label: "Email", href: `mailto:${SITE.email}`, icon: MdEmail },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-canvas">
      <Container className="py-12 sm:py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between sm:gap-16">
          <div className="max-w-sm">
            <Link
              to="/"
              className="inline-flex items-center gap-2.5 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-soft"
            >
              <span
                aria-hidden="true"
                className="grid h-8 w-8 place-items-center rounded-md border border-border-strong bg-surface font-mono text-label font-semibold tracking-[0.08em] text-sand"
              >
                SP
              </span>
              <span className="text-small font-semibold tracking-tight text-paper">
                Samrat Parajuli
              </span>
            </Link>
            <p className="mt-3 text-small text-slate-400">
              Product-minded systems and application engineer in Kathmandu,
              Nepal. Native Android in Kotlin and Jetpack Compose, built end to
              end.
            </p>
            <p className="mt-3 text-label tracking-normal text-slate-500">
              {TAGLINE}
            </p>
          </div>

          <div className="flex flex-wrap gap-x-14 gap-y-8 sm:gap-x-16">
            <nav aria-label="Footer navigation">
              <h2 className="mb-3 font-mono text-label uppercase tracking-[0.16em] text-slate-500">
                Site
              </h2>
              <ul className="space-y-2">
                {siteLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="rounded text-small text-slate-400 transition-colors hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-soft"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Elsewhere">
              <h2 className="mb-3 font-mono text-label uppercase tracking-[0.16em] text-slate-500">
                Elsewhere
              </h2>
              <ul className="space-y-2">
                {externalLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded text-small text-slate-400 transition-colors hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-soft"
                    >
                      {link.icon && <link.icon size={12} aria-hidden="true" />}
                      {link.label}
                      <ArrowUpRight
                        size={11}
                        aria-hidden="true"
                        className="opacity-50"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-5 text-label tracking-normal text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} Samrat Parajuli
            <span aria-hidden="true" className="px-1.5 text-slate-700">
              ·
            </span>
            <Link
              to="/privacy"
              className="rounded transition-colors hover:text-slate-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-soft"
            >
              Privacy Policy
            </Link>
          </p>
          <p className="font-mono text-label uppercase tracking-[0.12em] text-slate-600">
            Built in Kathmandu · Kotlin &amp; React
          </p>
        </div>
      </Container>
    </footer>
  );
}
