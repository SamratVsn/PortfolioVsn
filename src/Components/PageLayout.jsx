import Header from './Header'
import BackgroundFX from './BackgroundFX'
import BottomNav from './BottomNav'

export const PageLayout = ({ children, className = "" }) => {
  return (
    <div className={`relative min-h-screen bg-canvas text-slate-300 selection:bg-accent/20 selection:text-accent overflow-x-hidden ${className}`}>
      <BackgroundFX className="fixed" />
      <div className="relative flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-24 md:pt-28 pb-20 sm:pb-24">
          {children}
        </main>
      </div>
      <BottomNav />
    </div>
  );
};

export default PageLayout;
