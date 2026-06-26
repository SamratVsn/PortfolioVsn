import { Link } from "react-router-dom";
import SEO from "../Components/SEO";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#020617] text-slate-300 px-4">
      <SEO
        title="404 Not Found | Samrat Parajuli"
        description="The requested page could not be found."
        noindex
      />

      <div className="text-center max-w-lg">
        <h1 className="text-7xl font-bold text-white mb-4">404</h1>
        <p className="text-slate-400 mb-8">
          This page does not exist. The link may be broken or the page may have
          been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-6 py-3 bg-[#3B82F6] text-[#020617] font-medium rounded hover:opacity-90 transition-opacity"
          >
            Back to Home
          </Link>
          <Link
            to="/projects"
            className="px-6 py-3 border border-slate-700 rounded text-slate-300 hover:bg-slate-800/50 transition-colors"
          >
            View Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;