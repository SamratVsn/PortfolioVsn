import { cn } from "../ui/cn";
import Eyebrow from "../ui/Eyebrow";

// A titled case-study block. The h2 uses the shared scale so every project's
// sections sit at the same level beneath the page h1.
export default function CaseStudySection({
  eyebrow,
  title,
  icon: Icon,
  id,
  as: Tag = "h2",
  headingClassName,
  className,
  children,
  ...rest
}) {
  return (
    <section id={id} className={cn("space-y-4", className)} {...rest}>
      {eyebrow && (
        <Eyebrow as="p" tone="accent" dot={false} rule={false}>
          {eyebrow}
        </Eyebrow>
      )}
      {title && (
        <Tag className={cn("flex items-center gap-2.5 text-h2 font-bold text-paper", headingClassName)}>
          {Icon && <Icon size={20} aria-hidden="true" className="shrink-0 text-accent-text" />}
          {title}
        </Tag>
      )}
      {children}
    </section>
  );
}
