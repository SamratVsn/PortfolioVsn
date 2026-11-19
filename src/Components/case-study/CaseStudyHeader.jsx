import { cn } from "../ui/cn";
import Eyebrow from "../ui/Eyebrow";
import StatusPill from "../ui/StatusPill";
import Button from "../ui/Button";

function StatRow({ stats }) {
  return (
    <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-xl border border-border bg-surface/40 px-4 py-3"
        >
          <dd className="text-h4 font-bold tracking-tight text-paper">{stat.value}</dd>
          <dt className="mt-0.5 text-label tracking-normal text-slate-400">{stat.label}</dt>
        </div>
      ))}
    </dl>
  );
}

function MetaRow({ meta }) {
  return (
    <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-t border-border-subtle pt-4">
      {meta.map((item) => (
        <div key={item.label}>
          <dt className="font-mono text-label uppercase tracking-[0.12em] text-slate-500">
            {item.label}
          </dt>
          <dd className="mt-0.5 text-small font-medium text-slate-300">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

// One shared case-study heading. It keeps the h1 above every h2, owns the
// primary links, and can host a project visual plus a sourced stat row without
// giving any case study a second page header.
export default function CaseStudyHeader({
  eyebrow,
  title,
  badge,
  summary,
  actions = [],
  visual,
  stats,
  meta,
  className,
}) {
  return (
    <div className={cn("mb-10 border-b border-border pb-8", className)}>
      <div
        className={cn(
          visual && "grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)] lg:items-center"
        )}
      >
        <div className="min-w-0">
          {eyebrow && (
            <Eyebrow wide className="mb-4">
              {eyebrow}
            </Eyebrow>
          )}

          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="min-w-0">
              <h1 className="flex flex-wrap items-center gap-3 text-h1 font-bold text-paper">
                {title}
                {badge && <StatusPill tone="accent">{badge}</StatusPill>}
              </h1>
              {summary && (
                <p className="mt-3 max-w-2xl text-body text-slate-400">{summary}</p>
              )}
            </div>

            {actions.length > 0 && (
              <div className="flex flex-wrap items-center gap-3">
                {actions.map(({ href, to, label, icon: Icon, primary, download }) => (
                  <Button
                    key={label}
                    href={href}
                    to={to}
                    variant={primary ? "primary" : "secondary"}
                    download={download ? "" : undefined}
                  >
                    {Icon && <Icon size={16} aria-hidden="true" />}
                    {label}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>

        {visual && <div className="min-w-0">{visual}</div>}
      </div>

      {stats && stats.length > 0 && <StatRow stats={stats} />}
      {meta && meta.length > 0 && <MetaRow meta={meta} />}
    </div>
  );
}
