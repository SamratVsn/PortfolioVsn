import Header from './Header'

export const PageLayout = ({ children, className = "" }) => {
  return (
    <div className={`min-h-screen bg-[#020617] text-slate-300 selection:bg-[#2DD4BF]/20 selection:text-[#2DD4BF] overflow-x-hidden ${className}`}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-[85px] pb-16">
          {children}
        </main>
      </div>
    </div>
  );
};

export default PageLayout;
