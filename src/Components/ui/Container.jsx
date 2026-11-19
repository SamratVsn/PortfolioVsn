import { cn } from "./cn";

// The single container ladder. Widths come from the --container-* theme
// tokens in index.css, so the page rhythm is tunable in one place.
const variants = {
  prose: "max-w-prose 2xl:max-w-4xl",
  narrow: "max-w-4xl xl:max-w-5xl",
  default:
    "max-w-page xl:max-w-page-wide 2xl:max-w-page-ultra min-[1920px]:max-w-page-max",
  wide: "max-w-5xl xl:max-w-6xl 2xl:max-w-page-wide min-[1920px]:max-w-page-ultra",
  full: "max-w-none",
};

export default function Container({
  as: Tag = "div",
  variant = "default",
  padded = true,
  className,
  children,
  ...rest
}) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full",
        padded && "px-5 sm:px-6",
        variants[variant] || variants.default,
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
