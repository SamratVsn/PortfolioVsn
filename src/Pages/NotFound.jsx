import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../Components/SEO";
import BackgroundFX from "../Components/BackgroundFX";
import Eyebrow from "../Components/ui/Eyebrow";
import Button from "../Components/ui/Button";

const NotFound = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-canvas px-4 text-slate-300">
      <SEO
        title="404 Not Found | Samrat Parajuli"
        description="The requested page could not be found."
        noindex
      />
      <BackgroundFX />

      <main id="main-content" className="relative flex w-full flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative max-w-lg text-center"
        >
          <Eyebrow className="mb-5 justify-center">
            <span className="text-accent">Error</span> · Page not found
          </Eyebrow>
          <h1 className="mb-4 text-display font-bold text-paper">
            404<span className="text-accent">.</span>
          </h1>
          <p className="mb-8 text-body text-slate-400">
            This page does not exist. The link may be broken or the page may have
            been moved.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button to="/" size="lg">
              Back to Home
            </Button>
            <Button to="/projects" variant="secondary" size="lg">
              View Projects
            </Button>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default NotFound;
