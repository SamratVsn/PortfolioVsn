import Reveal from "./ui/Reveal";
import Eyebrow from "./ui/Eyebrow";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  as = "h2",
  animated = false,
  id,
}) {
  const Tag = as;
  const alignCls =
    align === "center" ? "text-center items-center" : "text-left items-start";

  const inner = (
    <div className={`flex flex-col ${alignCls} mb-10 sm:mb-12`}>
      {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
      <Tag id={id} className="mb-2.5 text-h2 font-bold text-paper">
        {title}
      </Tag>
      {subtitle && (
        <p className="max-w-lg text-body text-slate-400">{subtitle}</p>
      )}
    </div>
  );

  // `animated` keeps the original opt-in API, now implemented with the CSS/IO
  // reveal so the homepage bundle does not need framer-motion.
  if (!animated) return inner;

  return <Reveal>{inner}</Reveal>;
}
