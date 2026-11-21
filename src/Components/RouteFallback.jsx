// Shown only when a client-side navigation is waiting on a route chunk. The
// first page load is preloaded before hydration, so this never replaces
// prerendered HTML on entry.
export default function RouteFallback({ label = "Loading page" }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-[70vh] items-center justify-center bg-canvas"
    >
      <span className="sr-only">{label}</span>
      <span
        aria-hidden="true"
        className="h-8 w-8 animate-spin rounded-full border-2 border-border-strong border-t-accent-soft"
      />
    </div>
  );
}
