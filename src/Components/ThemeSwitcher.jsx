import { useEffect, useState } from "react";
import { ACCENT_SEEDS, applySeed, getStoredSeed } from "./theme";

export default function ThemeSwitcher({ className = "" }) {
  const [seed, setSeed] = useState(getStoredSeed);

  useEffect(() => {
    applySeed(seed);
  }, [seed]);

  return (
    <div
      role="group"
      aria-label="Accent colour"
      className={`flex items-center gap-1 rounded-full border border-border bg-surface/60 p-1 ${className}`}
    >
      {ACCENT_SEEDS.map((option) => {
        const active = seed === option.id;
        return (
          <button
            key={option.id}
            type="button"
            onClick={() => setSeed(option.id)}
            aria-pressed={active}
            aria-label={`${option.label} accent${active ? " (selected)" : ""}`}
            title={option.label}
            className="group relative grid h-6 w-6 place-items-center rounded-full transition-colors hover:bg-surface/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-soft"
          >
            <span
              aria-hidden="true"
              className={`block h-3 w-3 rounded-full ring-1 transition-all ${
                active
                  ? "ring-2 ring-paper/70 ring-offset-2 ring-offset-canvas"
                  : "ring-white/20 group-hover:ring-white/40"
              }`}
              style={{ backgroundColor: option.swatch }}
            />
          </button>
        );
      })}
    </div>
  );
}
