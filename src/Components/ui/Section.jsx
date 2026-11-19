import { cn } from "./cn";

// Three documented section rhythms replace the ad-hoc py-14/16/20/24 values
// across pages. `divided` draws the hairline between full-width sections.
const spacingMap = {
  tight: "py-12 sm:py-14",
  default: "py-16 sm:py-20",
  loose: "py-20 sm:py-24",
};

export default function Section({
  as: Tag = "section",
  spacing = "default",
  divided = false,
  className,
  children,
  ...rest
}) {
  return (
    <Tag
      className={cn(
        spacingMap[spacing] || spacingMap.default,
        divided && "border-t border-border",
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
