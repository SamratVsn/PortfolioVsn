import { cn } from "./cn";

const variants = {
  default: "border border-border bg-surface",
  subtle: "border border-border bg-surface/50",
  bare: "border border-border bg-transparent",
  accent: "border border-accent-border bg-surface",
};

const paddings = {
  none: "",
  sm: "p-4",
  md: "p-5 sm:p-6",
  lg: "p-6 sm:p-8",
};

export default function Card({
  as: Tag = "div",
  variant = "default",
  padding = "md",
  interactive = false,
  className,
  children,
  ...rest
}) {
  return (
    <Tag
      className={cn(
        "rounded-xl",
        variants[variant] || variants.default,
        paddings[padding] ?? paddings.md,
        interactive &&
          "transition-colors hover:border-accent-border focus-within:border-accent-border",
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
