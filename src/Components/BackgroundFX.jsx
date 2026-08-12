// Reusable ambient background — same radial glows + grid texture as the Hero
// section, so every page shares one visual language.
export default function BackgroundFX({ gridOpacity = 0.02, className = "" }) {
  return (
    <>
      <div
        className={`pointer-events-none absolute inset-0 ${className}`}
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(55% 45% at 12% 20%, rgba(59,130,246,0.05) 0%, rgba(59,130,246,0) 60%), radial-gradient(45% 40% at 92% 78%, rgba(34,211,238,0.035) 0%, rgba(34,211,238,0) 60%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          opacity: gridOpacity,
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
    </>
  );
}
