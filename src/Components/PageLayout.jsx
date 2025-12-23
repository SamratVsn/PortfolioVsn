import React from 'react';
import Header from '../Components/Header'

export const PageLayout = ({ children, className = "" }) => {
  return (
    <div className={`min-h-screen bg-[#020617] text-slate-300 selection:bg-[#2DD4BF]/30 relative ${className}`}>
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: `linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-[100px] pb-20">
          {children}
        </main>
      </div>
    </div>
  );
};

export default PageLayout;