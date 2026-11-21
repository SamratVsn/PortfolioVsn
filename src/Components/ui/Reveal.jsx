import { useEffect, useRef, useState } from "react";
import { cn } from "./cn";

// A CSS/IntersectionObserver reveal that replaces framer-motion's whileInView
// on the homepage. Keeping the initial bundle free of framer-motion is what
// makes the 110 kB gzip budget reachable; the animation itself is preserved.
//
// SSR renders the visible state, so prerendered content is never hidden from
// crawlers or no-JS readers. The hidden state is only applied after mount, and
// only to elements that are still below the fold.
export default function Reveal({
  as: Tag = "div",
  delay = 0,
  className,
  children,
  ...rest
}) {
  const ref = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (typeof IntersectionObserver === "undefined") return;

    const rect = element.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;

    setEnabled(true);
    if (inView) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const revealClass = enabled
    ? visible
      ? "reveal reveal-shown"
      : "reveal reveal-hidden"
    : null;

  return (
    <Tag
      ref={ref}
      className={cn(revealClass, className)}
      style={enabled && delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
