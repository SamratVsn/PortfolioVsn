// Route transition variants. Keep them to opacity + transform: filter blur was
// removed because it forces an extra paint on every navigation.
export const pageVariants = {
  initial: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: { duration: 0.22, ease: [0.55, 0.055, 0.675, 0.19] },
  },
};
