import Reveal from "./ui/Reveal";
import Eyebrow from "./ui/Eyebrow";

// Page headers fade in once on mount. This used to be a framer-motion `m`
// component, which forced every page to load framer-motion just for the
// entrance. The CSS class is applied only after hydration, so the prerendered
// markup is visible immediately.
export default function PageHeader({ eyebrow, title, description }) {
  return (
    <Reveal className="mb-12 sm:mb-14">
      {eyebrow && <Eyebrow className="mb-5">{eyebrow}</Eyebrow>}
      <h1 className="mb-4 text-h1 font-bold text-paper">{title}</h1>
      {description && (
        <p className="max-w-2xl text-body text-slate-400">{description}</p>
      )}
    </Reveal>
  );
}
