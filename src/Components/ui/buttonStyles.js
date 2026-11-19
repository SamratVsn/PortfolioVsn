// Class builders live outside Button.jsx so the component file only exports
// components (react-refresh requirement) and other primitives can reuse the
// same button contract.
export const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-soft disabled:pointer-events-none disabled:opacity-60";

export const buttonVariants = {
  primary: "bg-accent text-ink hover:bg-accent-hover",
  secondary:
    "border border-border-strong text-slate-300 hover:border-accent-border hover:text-paper",
  ghost: "text-slate-400 hover:text-paper",
  danger: "border border-red-900/60 bg-red-950/30 text-red-300 hover:text-red-200",
};

export const buttonSizes = {
  sm: "px-3.5 py-2 text-small",
  md: "px-5 py-2.5 text-small",
  lg: "px-6 py-3 text-body",
};

export function buttonClassName({ variant = "primary", size = "md", className } = {}) {
  return [
    buttonBase,
    buttonVariants[variant] || buttonVariants.primary,
    buttonSizes[size] || buttonSizes.md,
    className,
  ]
    .filter(Boolean)
    .join(" ");
}
