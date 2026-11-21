import Header from './Header'
import Footer from './Footer'
import BackgroundFX from './BackgroundFX'
import MotionProvider from './MotionProvider'
import { PageTransition } from './PageTransition'

// The framer-motion feature bundle is scoped to this layout (and the pages that
// use motion directly) so it never lands in the homepage chunk.
export const PageLayout = ({ children, className = "" }) => {
  return (
    <MotionProvider>
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
    </MotionProvider>
  );
};

export default PageLayout;
