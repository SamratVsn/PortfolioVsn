export const ACCENT_SEEDS = [
  { id: "forest", label: "Forest Sage", swatch: "#6B8F7A" },
  { id: "terracotta", label: "Kathmandu Terracotta", swatch: "#C86F4A" },
  { id: "slate", label: "Classic Slate", swatch: "#7E929C" },
];

const STORAGE_KEY = "sp-accent-seed";

export function getStoredSeed() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return ACCENT_SEEDS.some((seed) => seed.id === stored) ? stored : "forest";
  } catch {
    return "forest";
  }
}

// Writes the seed to <html data-seed> and remembers it. Forest Sage is the
// base palette in CSS, so it only needs the attribute removed.
export function applySeed(id) {
  const valid = ACCENT_SEEDS.some((seed) => seed.id === id) ? id : "forest";
  const root = document.documentElement;

  if (valid === "forest") {
    root.removeAttribute("data-seed");
  } else {
    root.setAttribute("data-seed", valid);
  }

  try {
    localStorage.setItem(STORAGE_KEY, valid);
  } catch {
    /* storage can be unavailable in private mode — the visual change still applies */
  }
}
