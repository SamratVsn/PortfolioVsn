import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import { ArrowUpRight, Menu, X } from "lucide-react";
import ThemeSwitcher from "./ThemeSwitcher";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Projects", to: "/projects" },
  { name: "Contact", to: "/contact" },
];

const blogHref = "https://blog.samratparajuli0.com.np/";

function isActivePath(pathname, to) {
  if (to === "/") return pathname === "/";
  return pathname === to || pathname.startsWith(`${to}/`);
}

export default function Header() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Any navigation closes the mobile panel.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-50 border-b border-border bg-canvas/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-5 sm:px-6 xl:max-w-7xl 2xl:max-w-[90rem] min-[1920px]:max-w-[100rem]">
          {/* Brand */}
          <Link
            to="/"
            className="group flex shrink-0 items-center gap-2.5 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-soft"
            aria-label="Samrat Parajuli, Android Developer — home"
          >
            <span
              aria-hidden="true"
              className="grid h-8 w-8 place-items-center rounded-md border border-border-strong bg-surface font-mono text-[10.5px] font-semibold tracking-[0.08em] text-sand transition-colors group-hover:border-accent-border"
            >
              SP
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-[13px] font-semibold tracking-tight text-paper">
                Samrat Parajuli
              </span>
              <span className="hidden text-[9.5px] font-medium uppercase tracking-[0.16em] text-slate-500 sm:block">
                Android Developer
              </span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav aria-label="Primary navigation" className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const active = isActivePath(pathname, link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  aria-current={active ? "page" : undefined}
                  className={`relative rounded-md px-3 py-2 text-[12.5px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-soft ${
                    active
                      ? "text-paper"
                      : "text-slate-400 hover:text-paper"
                  }`}
                >
                  {link.name}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-3 -bottom-[1px] h-px transition-colors ${
                      active ? "bg-accent" : "bg-transparent"
                    }`}
                  />
                </Link>
              );
            })}
            <a
              href={blogHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-[12.5px] font-medium text-slate-400 transition-colors hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-soft"
            >
              Blog
              <ArrowUpRight size={12} className="opacity-60" aria-hidden="true" />
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeSwitcher />

            <a
              href="https://github.com/SamratVsn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile (opens in a new tab)"
              className="hidden rounded-md p-2 text-slate-400 transition-colors hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-soft lg:inline-flex"
            >
              <FaGithub size={15} aria-hidden="true" />
            </a>

            <Link
              to="/contact"
              className="hidden rounded-lg bg-accent px-3.5 py-2 text-[12px] font-semibold text-ink transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-soft sm:inline-flex"
            >
              Let&apos;s Connect
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="inline-flex items-center justify-center rounded-md border border-border p-2 text-slate-300 transition-colors hover:border-border-strong hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-soft md:hidden"
            >
              {menuOpen ? <X size={16} aria-hidden="true" /> : <Menu size={16} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile panel */}
        <div
          id="mobile-nav"
          hidden={!menuOpen}
          className="border-t border-border bg-canvas md:hidden"
        >
          <nav aria-label="Mobile navigation" className="px-5 py-3 sm:px-6">
            <ul className="flex flex-col">
              {navLinks.map((link) => {
                const active = isActivePath(pathname, link.to);
                return (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center justify-between border-l-2 py-2.5 pl-3 text-[13.5px] font-medium transition-colors ${
                        active
                          ? "border-accent text-paper"
                          : "border-transparent text-slate-400 hover:text-paper"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
              <li>
                <a
                  href={blogHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between border-l-2 border-transparent py-2.5 pl-3 text-[13.5px] font-medium text-slate-400 transition-colors hover:text-paper"
                >
                  Blog
                  <ArrowUpRight size={13} className="opacity-60" aria-hidden="true" />
                </a>
              </li>
            </ul>

            <div className="mt-3 flex items-center justify-between gap-3 border-t border-border pt-3">
              <a
                href="https://github.com/SamratVsn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[12.5px] font-medium text-slate-400 transition-colors hover:text-paper"
              >
                <FaGithub size={14} aria-hidden="true" /> GitHub
              </a>
              <Link
                to="/contact"
                className="rounded-lg bg-accent px-4 py-2 text-[12.5px] font-semibold text-ink transition-colors hover:bg-accent-hover"
              >
                Let&apos;s Connect
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
