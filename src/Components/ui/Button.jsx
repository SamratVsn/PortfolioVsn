import { Link } from "react-router-dom";
import { buttonClassName } from "./buttonStyles";

// Renders a router link, an external anchor, or a native button from the same
// visual contract. Consumers choose by passing `to`, `href`, or onClick.
export default function Button({
  to,
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  download,
  ...rest
}) {
  const classes = buttonClassName({ variant, size, className });

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    // Downloads stay in the current tab; ordinary external links open a new
    // tab with a safe rel so every call site shares the same behaviour.
    const external = /^https?:/i.test(href) && !download;
    return (
      <a
        href={href}
        download={download}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className={classes}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
