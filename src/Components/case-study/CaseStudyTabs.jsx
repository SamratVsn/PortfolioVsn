import { cn } from "../ui/cn";

function normalise(tab) {
  return typeof tab === "string" ? { id: tab, label: tab } : tab;
}

// Shared tab-style control for case-study sections. It is a group of pressed
// toggle buttons (not a half-implemented ARIA tablist), and arrow keys move
// focus between the options for keyboard users.
export default function CaseStudyTabs({
  tabs,
  active,
  onChange,
  label = "Case study sections",
  className,
}) {
  const items = tabs.map(normalise);

  const handleKeyDown = (event) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const buttons = Array.from(
      event.currentTarget.parentElement?.querySelectorAll("button") || []
    );
    if (buttons.length === 0) return;

    const current = buttons.indexOf(event.currentTarget);
    let next = current;
    if (event.key === "ArrowRight") next = (current + 1) % buttons.length;
    if (event.key === "ArrowLeft") next = (current - 1 + buttons.length) % buttons.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = buttons.length - 1;
    buttons[next]?.focus();
  };

  return (
    <div
      role="group"
      aria-label={label}
      className={cn("mb-8 flex gap-1 overflow-x-auto border-b border-border", className)}
    >
      {items.map((item) => {
        const isActive = active === item.id;
        return (
          <button
            key={item.id}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(item.id)}
            onKeyDown={handleKeyDown}
            className={cn(
              "shrink-0 border-b-2 px-4 py-3 text-small font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent-soft",
              isActive
                ? "border-accent-soft text-accent-soft"
                : "border-transparent text-slate-400 hover:text-slate-200"
            )}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
