import { cn } from "./cn";

const tones = {
  accent: "border-accent-border bg-accent-muted text-accent-soft",
  neutral: "border-border-strong bg-surface/50 text-slate-400",
  success: "border-emerald-900/60 bg-emerald-950/30 text-emerald-300",
};

export default function StatusPill({
  children,
  tone = "accent",
  dot = false,
  className,
  ...rest
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-label font-semibold uppercase tracking-[0.12em]",
        tones[tone] || tones.accent,
        className
      )}
      {...rest}
    >
      {dot && <span aria-hidden="true" className="h-1 w-1 rounded-full bg-current" />}
      {children}
    </span>
  );
}
