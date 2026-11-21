import { LazyMotion, domAnimation } from "framer-motion";

// Every route that uses framer-motion renders inside this provider. It lives in
// the lazy route chunks, not in the homepage bundle, so the reduced feature set
// is only downloaded when a route actually animates.
export default function MotionProvider({ children }) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
