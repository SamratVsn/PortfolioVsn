import { cn } from "../ui/cn";

const FIELDS = [
  { key: "context", label: "Context" },
  { key: "choice", label: "Choice" },
  { key: "tradeoff", label: "Trade-off" },
];

// Engineering decisions, presented as evidence rather than a process diagram.
// Every entry must be grounded in the repository; `alternative` is only for
// approaches clearly labelled as not implemented.
export default function DecisionList({ decisions, className }) {
  if (!decisions?.length) return null;

  return (
    <ol className={cn("space-y-4", className)}>
      {decisions.map((decision, index) => (
        <li
          key={decision.title}
          className="rounded-xl border border-border bg-surface/50 p-5 sm:p-6"
        >
          <div className="flex items-start gap-3">
            <span
              aria-hidden="true"
              className="mt-0.5 shrink-0 font-mono text-label font-semibold tabular-nums text-accent-soft/80"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-h4 font-semibold leading-snug text-paper">
              {decision.title}
            </h3>
          </div>

          <dl className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {FIELDS.map((field) => (
              <div key={field.key}>
                <dt className="font-mono text-label font-semibold uppercase tracking-[0.14em] text-accent-soft/80">
                  {field.label}
                </dt>
                <dd className="mt-1.5 text-small leading-relaxed text-slate-400">
                  {decision[field.key]}
                </dd>
              </div>
            ))}
          </dl>

          {decision.alternative && (
            <p className="mt-4 border-t border-border pt-3 text-small leading-relaxed text-slate-500">
              <span className="font-medium text-slate-400">
                Alternative (not implemented):
              </span>{" "}
              {decision.alternative}
            </p>
          )}
        </li>
      ))}
    </ol>
  );
}
