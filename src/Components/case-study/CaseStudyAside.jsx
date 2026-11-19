import Card from "../ui/Card";
import Tag from "../ui/Tag";
import { cn } from "../ui/cn";

export function AsideCard({ title, icon: Icon, children, className }) {
  return (
    <Card padding="md" className={className}>
      <h2 className="mb-4 flex items-center gap-2 text-h4 font-semibold text-paper">
        {Icon && <Icon size={16} aria-hidden="true" className="shrink-0 text-accent-text" />}
        {title}
      </h2>
      {children}
    </Card>
  );
}

export function SpecList({ items }) {
  return (
    <dl className="space-y-3">
      {items.map((item) => (
        <div key={item.label} className="border-b border-border-subtle pb-3 last:border-0 last:pb-0">
          <dt className="mb-1 font-mono text-label tracking-normal text-slate-500">
            {item.label}
          </dt>
          <dd className="break-words text-small font-medium text-slate-300">
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded text-accent-text transition-colors hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-soft"
              >
                {item.value}
              </a>
            ) : (
              item.value
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function TagList({ items, tone = "default" }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <Tag key={item} tone={tone}>
          {item}
        </Tag>
      ))}
    </div>
  );
}

export function BulletList({ items, className }) {
  return (
    <ul className={cn("space-y-2", className)}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-small text-slate-400">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
