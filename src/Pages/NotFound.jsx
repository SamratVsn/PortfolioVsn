import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../Components/SEO";
import BackgroundFX from "../Components/BackgroundFX";

const NotFound = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#020617] text-slate-300 px-4 overflow-hidden">
      <SEO
        title="404 Not Found | Samrat Parajuli"
        description="The requested page could not be found."
        noindex
      />
      <BackgroundFX />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative text-center max-w-lg"
      >
        <p className="text-[11px] uppercase tracking-[0.14em] text-slate-500 font-medium mb-5">
          <span className="text-[#3B82F6]">Error</span> · Page not found
        </p>
        <h1 className="text-8xl font-bold text-white mb-4 tracking-[-0.03em]">
          404<span className="text-[#3B82F6]">.</span>
        </h1>
        <p className="text-slate-400 mb-8">
          This page does not exist. The link may be broken or the page may have
          been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-6 py-3 bg-[#3B82F6] text-[#020617] font-semibold rounded-lg hover:bg-[#3B82F6]/90 transition-all active:scale-[0.97]"
          >
            Back to Home
          </Link>
          <Link
            to="/projects"
            className="px-6 py-3 border border-slate-700 text-slate-300 rounded-lg hover:bg-white/[0.03] hover:border-slate-600 transition-all active:scale-[0.97]"
          >
            View Projects
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
