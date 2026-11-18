// Shared case-study page heading.
//
// Case studies used to render a second full-width bar under the site header,
// with an undersized h1. This component puts the title back in the content
// flow, keeps exactly one header landmark per page (the site header), and
// makes the h1 the largest heading on the page at every breakpoint.

export default function CaseStudyHeader({
  eyebrow,
  title,
  badge,
  summary,
  actions = [],
}) {
  return (
    <div className="mb-10 border-b border-border pb-8">
      {eyebrow && (
        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
          {eyebrow}
        </p>
      )}

      <div className="mt-3 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="min-w-0">
          <h1 className="flex flex-wrap items-center gap-3 text-[2.1rem] font-bold leading-[1.05] tracking-[-0.03em] text-paper sm:text-4xl lg:text-5xl">
            {title}
            {badge && (
              <span className="inline-flex items-center rounded-full border border-accent-border bg-accent-muted px-2.5 py-0.5 text-xs font-semibold text-accent-soft">
                {badge}
              </span>
            )}
          </h1>
          {summary && (
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-400">
              {summary}
            </p>
          )}
        </div>

        {actions.length > 0 && (
          <div className="flex flex-wrap items-center gap-3">
            {actions.map(({ href, label, icon: Icon, primary, download }) => {
              const external = /^https?:/.test(href);
              return (
                <a
                  key={label}
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  {...(download ? { download: "" } : {})}
                  className={
                    primary
                      ? "inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-soft active:scale-[0.97]"
                      : "inline-flex items-center gap-2 rounded-lg border border-border-strong px-5 py-2.5 text-sm font-semibold text-slate-300 transition-colors hover:border-accent-border hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-soft active:scale-[0.97]"
                  }
                >
                  {Icon && <Icon size={16} aria-hidden="true" />}
                  {label}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
