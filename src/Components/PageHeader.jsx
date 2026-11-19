import { motion } from "framer-motion";
import Eyebrow from "./ui/Eyebrow";

export default function PageHeader({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12 sm:mb-14"
    >
      {eyebrow && <Eyebrow className="mb-5">{eyebrow}</Eyebrow>}
      <h1 className="mb-4 text-h1 font-bold text-paper">{title}</h1>
      {description && (
        <p className="max-w-2xl text-body text-slate-400">{description}</p>
      )}
    </motion.div>
  );
}
