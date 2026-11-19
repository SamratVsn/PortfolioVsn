// Tiny class-name joiner. No dependency, no conditional-object API — every
// primitive below uses plain strings so Tailwind can see the full class list.
export function cn(...values) {
  return values.filter(Boolean).join(" ");
}
