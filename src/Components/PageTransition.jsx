import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { m as motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { pageVariants } from "./PageTransitionConstants";

// Route-level enter/exit feedback for the projects area. The first render must
// match the prerendered HTML, so the initial animation is suppressed until
// after mount. Reduced-motion users get the content immediately, with no
// AnimatePresence wrapper and no delay.
export function PageTransition({ children }) {
  const location = useLocation();
  const reduceMotion = useReducedMotion();
  const isInitialMount = useRef(true);

  useEffect(() => {
    isInitialMount.current = false;
  }, []);

  if (reduceMotion) {
    return <div className="relative w-full">{children}</div>;
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={isInitialMount.current ? false : "initial"}
        animate="enter"
        exit="exit"
        variants={pageVariants}
        className="relative w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default PageTransition;
