export default function CategoryFilter({
  categories,
  active,
  onChange,
  label = "Filter by category",
}) {
  return (
    <div className="mb-8 sm:mb-10">
      <div
        role="group"
        aria-label={label}
        className="flex flex-wrap items-center gap-2"
      >
        {categories.map((cat) => {
          const isActive = active === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => onChange(cat)}
              aria-pressed={isActive}
              className={`inline-flex items-center rounded-full border px-3.5 py-1.5 text-[11px] font-mono font-medium uppercase tracking-wide transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                isActive
                  ? "text-accent bg-accent/[0.08] border-accent/25"
                  : "text-slate-500 hover:text-slate-300 hover:bg-white/[0.03] border-white/[0.07]"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
}