import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

// Route-level enter feedback. This is CSS-only on purpose: the first paint must
// match the prerendered HTML and must not wait for a JS animation frame, so the
// animation class is applied only after the initial mount (i.e. on navigation).
// Reduced-motion users are handled by the global prefers-reduced-motion rule in
// index.css, which collapses the animation to its end state.
export function PageTransition({ children }) {
  const { pathname } = useLocation();
  const isInitialMount = useRef(true);

  useEffect(() => {
    isInitialMount.current = false;
  }, []);

  return (
    <div
      key={pathname}
      className={`relative w-full${isInitialMount.current ? "" : " page-enter"}`}
    >
      {children}
    </div>
  );
}

export default PageTransition;
