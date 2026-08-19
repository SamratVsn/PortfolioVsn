import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  as = "h2",
  animated = false,
}) {
  const Tag = as;
  const alignCls =
    align === "center" ? "text-center items-center" : "text-left items-start";

  const inner = (
    <div className={`flex flex-col ${alignCls} mb-10 sm:mb-12`}>
      {eyebrow && (
        <div className="flex items-center gap-2.5 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
          <span className="w-8 h-px bg-accent/25" />
          <span className="text-[11px] uppercase tracking-[0.14em] text-slate-500 font-medium font-mono">
            {eyebrow}
          </span>
        </div>
      )}
      <Tag className="text-[1.6rem] sm:text-[2rem] font-bold text-white tracking-[-0.03em] leading-[1.15] mb-2.5">
        {title}
      </Tag>
      {subtitle && (
        <p className="text-slate-400/80 max-w-lg text-[14px] sm:text-[15px] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );

  if (!animated) return inner;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
    >
      {inner}
    </motion.div>
  );
}
