import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { ArrowUp } from "lucide-react";

const socials = [
  { icon: FaGithub, href: "https://github.com/SamratVsn", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/samratvsn/",
    label: "LinkedIn",
  },
  { icon: MdEmail, href: "mailto:samratvsn@gmail.com", label: "Email" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-slate-800/40 bg-[#020617]">
      <div className="max-w-6xl mx-auto px-6 xl:max-w-7xl 2xl:max-w-[90rem] min-[1920px]:max-w-[100rem]">
        <div className="py-10 sm:py-12">
          {/* Desktop: two-column layout */}
          <div className="hidden sm:flex items-start justify-between">
            {/* Left */}
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="relative w-2 h-2 shrink-0">
                  <span className="absolute inset-0 rounded-full border border-[#3B82F6]/25" />
                  <span className="absolute inset-[2px] rounded-full bg-[#3B82F6]" />
                </div>
                <span className="text-[13px] font-bold tracking-tight text-white">
                  Samrat Parajuli
                </span>
              </div>
              <p className="text-[12px] text-slate-500 leading-relaxed max-w-[260px]">
                Learning in public, one commit at a time.
              </p>
            </div>

            {/* Right */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-slate-500 hover:text-[#3B82F6] transition-colors text-[13px] inline-flex items-center gap-1.5"
                  >
                    <social.icon size={14} />
                    <span className="hidden lg:inline">{social.label}</span>
                  </a>
                ))}
              </div>

              <button
                onClick={scrollToTop}
                aria-label="Back to top"
                className="w-8 h-8 rounded-lg border border-slate-800/60 bg-[#0A101F]/60 flex items-center justify-center text-slate-500 hover:text-[#3B82F6] hover:border-[#3B82F6]/20 transition-all duration-200"
              >
                <ArrowUp size={14} />
              </button>
            </div>
          </div>

          {/* Mobile: centered layout */}
          <div className="sm:hidden text-center">
            <div className="flex items-center justify-center gap-2.5 mb-2">
              <div className="relative w-2 h-2 shrink-0">
                <span className="absolute inset-0 rounded-full border border-[#3B82F6]/25" />
                <span className="absolute inset-[2px] rounded-full bg-[#3B82F6]" />
              </div>
              <span className="text-[13px] font-bold tracking-tight text-white">
                Samrat Parajuli
              </span>
            </div>
            <p className="text-[11px] text-slate-500 mb-4">
              Learning in public, one commit at a time.
            </p>
            <div className="flex items-center justify-center gap-5 mb-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-slate-500 hover:text-[#3B82F6] transition-colors"
                >
                  <social.icon size={15} />
                </a>
              ))}
            </div>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-7 h-7 rounded-lg border border-slate-800/60 bg-[#0A101F]/60 inline-flex items-center justify-center text-slate-500 hover:text-[#3B82F6] transition-all duration-200"
            >
              <ArrowUp size={13} />
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-4 border-t border-slate-800/30 text-center">
          <p className="text-[10px] text-slate-600">
            &copy; {currentYear} Samrat Parajuli
          </p>
        </div>
      </div>
    </footer>
  );
}
