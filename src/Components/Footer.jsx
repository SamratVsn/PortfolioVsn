import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { ArrowUpRight, PenLine } from "lucide-react";

const BLOG_URL = "https://blog.samratparajuli0.com.np/";

const socials = [
  { icon: FaGithub, href: "https://github.com/SamratVsn", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/samratvsn/", label: "LinkedIn" },
  { icon: MdEmail, href: "mailto:samratvsn@gmail.com", label: "Email" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.04] bg-[#020617]">
      <div className="max-w-6xl mx-auto px-6 xl:max-w-7xl 2xl:max-w-[90rem] min-[1920px]:max-w-[100rem]">
        <div className="py-10 sm:py-14">
          {/* Desktop */}
          <div className="hidden sm:flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="relative w-2 h-2 shrink-0">
                  <span className="absolute inset-0 rounded-full border border-accent/25" />
                  <span className="absolute inset-[2px] rounded-full bg-accent" />
                </div>
                <span className="text-[13px] font-bold tracking-tight text-white">
                  Samrat Parajuli
                </span>
              </div>
              <p className="text-[12px] text-slate-500 leading-relaxed max-w-[260px]">
                Learning in public, one commit at a time.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-5">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="text-slate-500 hover:text-accent transition-colors text-[13px] inline-flex items-center gap-1.5"
                  >
                    <s.icon size={14} />
                    <span className="hidden lg:inline">{s.label}</span>
                  </a>
                ))}
              </div>
              <span className="hidden sm:block w-px h-4 bg-white/10" aria-hidden="true" />
              <a
                href={BLOG_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my blog"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-1.5 text-[12px] font-medium text-slate-300 transition-colors hover:border-accent/40 hover:bg-accent/10 hover:text-white"
              >
                <PenLine size={13} />
                Blog
                <ArrowUpRight size={13} className="opacity-60" />
              </a>
            </div>
          </div>

          {/* Mobile */}
          <div className="sm:hidden text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="relative w-2 h-2 shrink-0">
                <span className="absolute inset-0 rounded-full border border-accent/25" />
                <span className="absolute inset-[2px] rounded-full bg-accent" />
              </div>
              <span className="text-[13px] font-bold tracking-tight text-white">
                Samrat Parajuli
              </span>
            </div>
            <p className="text-[11px] text-slate-500 mb-4">
              Learning in public, one commit at a time.
            </p>
            <div className="flex items-center justify-center gap-5 mb-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-slate-500 hover:text-accent transition-colors"
                >
                  <s.icon size={15} />
                </a>
              ))}
            </div>
            <a
              href={BLOG_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my blog"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.02] px-4 py-1.5 text-[12px] font-medium text-slate-300 transition-colors hover:border-accent/40 hover:bg-accent/10 hover:text-white"
            >
              <PenLine size={13} />
              Visit my Blog
              <ArrowUpRight size={13} className="opacity-60" />
            </a>
          </div>
        </div>

        <div className="py-4 border-t border-white/[0.04] text-center">
          <p className="text-[10px] text-slate-600">
            &copy; {year} Samrat Parajuli
          </p>
        </div>
      </div>
    </footer>
  );
}
