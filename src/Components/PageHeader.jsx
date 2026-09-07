import { motion } from "framer-motion";

export default function PageHeader({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12 sm:mb-14"
    >
      <div className="flex items-center gap-2.5 mb-5">
        <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
        <span className="w-8 h-px bg-accent/25" />
        <span className="text-[11px] font-mono font-medium uppercase tracking-[0.14em] text-slate-500">
          {eyebrow}
        </span>
      </div>
      <h1 className="text-white text-[2.1rem] sm:text-5xl font-bold tracking-[-0.03em] leading-[1.05] mb-4">
        {title}
      </h1>
      <p className="text-slate-400 text-[15px] leading-relaxed max-w-2xl">
        {description}
      </p>
    </motion.div>
  );
}