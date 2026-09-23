import { Link, useLocation } from "react-router-dom";
import { Home, User, Briefcase, BookOpen, Contact } from "lucide-react";

const navItems = [
  { name: "Home", to: "/", icon: Home },
  { name: "About", to: "/about", icon: User },
  { name: "Projects", to: "/projects", icon: Briefcase },
  { name: "Blog", href: "https://blog.samratparajuli0.com.np/", icon: BookOpen },
  { name: "Contact", to: "/contact", icon: Contact },
];

export default function BottomNav() {
  const { pathname } = useLocation();

  return (
    <nav
      className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50 md:hidden"
      role="navigation"
      aria-label="Mobile navigation"
    >
      <div
        className="flex items-center justify-around w-[88vw] max-w-[360px] rounded-2xl border border-white/[0.06] bg-[#0A101F]/85 backdrop-blur-xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]"
        style={{ paddingBottom: "env(safe-area-inset-bottom, 6px)" }}
      >
        {navItems.map((item) => {
          const { name, icon: Icon } = item;
          const commonClass = `relative flex flex-col items-center gap-1 py-2 px-4 min-w-[56px] transition-colors duration-200 ${
            item.to
              ? pathname === item.to
                ? "text-accent"
                : "text-slate-500 hover:text-slate-300"
              : "text-slate-500 hover:text-slate-300"
          }`;

          if (item.href) {
            return (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={commonClass}
                aria-label={name}
              >
                <Icon size={18} strokeWidth={1.6} />
                <span className="text-[9.5px] leading-none font-medium">
                  {name}
                </span>
              </a>
            );
          }

          const isActive = pathname === item.to;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={commonClass}
              aria-label={name}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon size={18} strokeWidth={isActive ? 2.2 : 1.6} />
              <span
                className={`text-[9.5px] leading-none ${
                  isActive ? "font-semibold" : "font-medium"
                }`}
              >
                {name}
              </span>
              {isActive && (
                <span className="absolute -top-px left-3 right-3 h-[2px] bg-accent rounded-full" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
