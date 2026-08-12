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
    <div className={`flex flex-col ${alignCls} mb-10`}>
      <div className="flex items-center gap-2 mb-3">
        <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]/60" />
        <span className="w-6 h-px bg-[#3B82F6]/30" />
        {eyebrow && (
          <span className="text-[11px] uppercase tracking-[0.14em] text-slate-500 font-medium">
            {eyebrow}
          </span>
        )}
      </div>
      <Tag className="text-2xl sm:text-3xl font-bold text-white tracking-[-0.02em] mb-2">
        {title}
      </Tag>
      {subtitle && (
        <p className="text-slate-400 max-w-lg text-sm leading-relaxed">
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
