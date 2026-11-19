import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

// Case-study breadcrumb. The last item is the current page, so it is rendered
// as text with aria-current rather than a self-link.
export default function Breadcrumb({ items = [] }) {
  if (items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 font-mono text-label uppercase tracking-[0.12em] text-slate-500">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
              {index > 0 && (
                <ChevronRight size={11} aria-hidden="true" className="text-slate-700" />
              )}
              {last || !item.to ? (
                <span aria-current={last ? "page" : undefined} className={last ? "text-slate-400" : undefined}>
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.to}
                  className="rounded transition-colors hover:text-slate-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-soft"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
