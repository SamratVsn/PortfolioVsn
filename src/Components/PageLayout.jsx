import Header from './Header'

export const PageLayout = ({ children, className = "" }) => {
  return (
    <div className={`min-h-screen bg-[#020617] text-slate-300 selection:bg-[#3B82F6]/20 selection:text-[#3B82F6] overflow-x-hidden ${className}`}>
      <div className="flex flex-col min-h-screen">
        {/* Header - Fixed at top */}
        <Header />
        
        {/* Main content area with proper spacing */}
        <main className="flex-grow pt-20 pb-20 sm:pb-24">
          {children}
        </main>
        
        {/* Footer divider (optional) */}
        <footer className="border-t border-slate-800/30">
          <div className="max-w-6xl mx-auto px-6 py-12 text-center text-sm text-slate-500">
            <p>Built with React, Tailwind CSS & Framer Motion</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PageLayout;