// A single, static wash of light at the top of the page. The old component
// layered a 56px grid and two blue radial glows; both are gone by design.
export default function BackgroundFX({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 top-0 h-[52vh] max-h-[600px] ${className}`}
      style={{
        background:
          "linear-gradient(180deg, rgba(107,143,122,0.055) 0%, rgba(14,19,17,0) 100%)",
      }}
    />
  );
}
