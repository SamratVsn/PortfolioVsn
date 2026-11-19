import { cn } from "./cn";

const tones = {
  default: "border-border bg-surface/40 text-slate-400",
  accent: "border-accent-border bg-accent-muted text-accent-soft",
};

const dotColors = [
  "bg-accent-soft",
  "bg-sand",
  "bg-terra",
];

export default function Tag({
  children,
  tone = "default",
  dot = false,
  dotIndex = 0,
  className,
  ...rest
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-label font-medium tracking-normal",
        tones[tone] || tones.default,
        className
      )}
      {...rest}
    >
      {dot && (
        <span
          aria-hidden="true"
          className={cn("h-1 w-1 shrink-0 rounded-full", dotColors[dotIndex % dotColors.length])}
        />
      )}
      {children}
    </span>
  );
}
