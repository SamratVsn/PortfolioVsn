import Header from './Header'
import Footer from './Footer'
import BackgroundFX from './BackgroundFX'
import { PageTransition } from './PageTransition'

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
