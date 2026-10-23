// Page transition variants
export const pageVariants = {
  initial: { opacity: 0, y: 20, filter: "blur(4px)" },
  enter: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    opacity: 0,
    y: -16,
    filter: "blur(4px)",
    transition: { duration: 0.3, ease: [0.55, 0.055, 0.675, 0.19] },
  },
};

// Shared element transition config
export const sharedTransition = {
  type: "spring",
  stiffness: 400,
  damping: 30,
  mass: 1,
};

// Unique IDs for shared elements across routes
export const SHARED_ELEMENTS = {
  PROJECT_IMAGE: (path) => `project-image-${path}`,
  PROJECT_TITLE: (path) => `project-title-${path}`,
  PROJECT_CARD: (path) => `project-card-${path}`,
};