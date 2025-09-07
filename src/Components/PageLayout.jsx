import React from 'react';
import Header from '../Components/Header'

export const PageLayout = ({ children, className = "" }) => {
  return (
    <div className={`pb-20 min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 ${className}`}>
      <Header />
      <main className="pt-[90px]">
        {children}
      </main>
    </div>
  );
};

export default PageLayout;