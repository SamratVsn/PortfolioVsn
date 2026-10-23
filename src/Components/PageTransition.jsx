import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";

// Import variants and constants from constants file
import { pageVariants, SHARED_ELEMENTS } from "./PageTransitionConstants";

export function PageTransition({ children }) {
  const location = useLocation();
  const reduceMotion = useReducedMotion();
  const isInitialMount = useRef(true);

  useEffect(() => {
    isInitialMount.current = false;
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={isInitialMount.current || reduceMotion ? false : "initial"}
        animate={reduceMotion ? "enter" : "enter"}
        exit={reduceMotion ? "enter" : "exit"}
        variants={pageVariants}
        style={{ position: "relative", width: "100%" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

// Component for shared layout elements that should NOT animate
export function Persistent({ children }) {
  return <>{children}</>;
}