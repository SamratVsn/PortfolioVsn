import Header from './Header'
import Footer from './Footer'
import BackgroundFX from './BackgroundFX'
import { PageTransition } from './PageTransition'

// Kept free of framer-motion so routes that do not animate (the projects index,
// most case studies) never download the motion bundle. Pages that use motion
// wrap themselves in MotionProvider.
export const PageLayout = ({ children, className = "" }) => {
  return (
    <div className={`relative flex min-h-screen flex-col overflow-x-clip bg-canvas text-slate-300 selection:bg-accent/20 selection:text-paper ${className}`}>
      <BackgroundFX />
      <div className="relative flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-grow pb-16">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default PageLayout;
