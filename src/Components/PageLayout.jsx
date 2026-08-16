import Header from './Header'
import BackgroundFX from './BackgroundFX'

export const PageLayout = ({ children, className = "" }) => {
  return (
    <div className={`relative min-h-screen bg-[#020617] text-slate-300 selection:bg-[#3B82F6]/20 selection:text-[#3B82F6] overflow-x-hidden ${className}`}>
      <BackgroundFX className="fixed" />
      <div className="relative flex flex-col min-h-screen">
        {/* Header - Fixed at top */}
        <Header />
        
        {/* Main content area with proper spacing */}
        <main className="flex-grow pt-20 pb-20 sm:pb-24">
          {children}
        </main>
        
        {/* Footer divider (optional) */}
        <footer className="border-t border-slate-800/30">
          <div className="max-w-6xl mx-auto px-6 py-12 text-center text-sm text-slate-500 xl:max-w-7xl 2xl:max-w-[90rem] min-[1920px]:max-w-[100rem]">
            <p>Built with React, Tailwind CSS & Framer Motion</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PageLayout;