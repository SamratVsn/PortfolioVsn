import { cn } from "./cn";

// The mono micro-label used above headings and inside case studies. The dot
// and rule are purely decorative, and the text uses the accessible accent
// token when it is tinted.
export default function Eyebrow({
  as: Tag = "p",
  children,
  tone = "muted",
  dot = true,
  rule = true,
  wide = false,
  className,
  ...rest
}) {
  return (
    <Tag
      className={cn("flex items-center gap-2.5 font-mono text-label font-medium uppercase", className)}
      {...rest}
    >
      {dot && (
        <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
      )}
      {rule && <span aria-hidden="true" className="h-px w-8 shrink-0 bg-accent/25" />}
      <span
        className={cn(
          wide ? "tracking-[0.2em]" : null,
          tone === "accent" ? "text-accent-text" : "text-slate-400"
        )}
      >
        {children}
      </span>
    </Tag>
  );
}
