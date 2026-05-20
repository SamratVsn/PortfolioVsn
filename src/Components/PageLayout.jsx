import Header from '../Components/Header'

export const PageLayout = ({ children, className = "" }) => {
  return (
    <div className={`min-h-screen bg-[#020617] text-slate-300 selection:bg-[#2DD4BF]/20 selection:text-[#2DD4BF] relative overflow-x-hidden ${className}`}>
      
      {/* Precision Structural Blueprint Mesh */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.015]" 
        style={{ 
          backgroundImage: `linear-gradient(#2DD4BF 1px, transparent 1px), linear-gradient(90deg, #2DD4BF 1px, transparent 1px)`, 
          backgroundSize: '32px 32px' 
        }} 
      />
      
      {/* Peripheral Corner Bracket Accents */}
      <div className="fixed top-4 left-4 font-mono text-[9px] text-slate-800 pointer-events-none uppercase tracking-widest hidden lg:block">[SYS_V2.0_MK-IV]</div>
      <div className="fixed top-4 right-4 font-mono text-[9px] text-slate-800 pointer-events-none uppercase tracking-widest hidden lg:block">SYS_LN_001</div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        {/* Adjusted padding to cleanly balance our h-[65px] SystemNavbar specification */}
        <main className="flex-grow pt-[85px] pb-24">
          {children}
        </main>
      </div>
    </div>
  );
};

export default PageLayout;