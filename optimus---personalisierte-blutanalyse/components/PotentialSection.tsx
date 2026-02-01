import React from 'react';
import DashboardPreview from './DashboardPreview';

const PotentialSection: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-[#fcfcfc] text-[#333333] relative overflow-hidden border-y border-black/[0.02]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
        <div className="flex-1 space-y-8 order-2 lg:order-1">
          <div className="space-y-5">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-[#333333]">
              Deine Gesundheit, <br />
              Deine Ziele, <br />
              <span className="text-red-600/60 italic">Dein Potenzial</span>
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="mt-1.5 w-6 h-6 rounded-full bg-red-600/[0.04] border border-red-600/10 flex items-center justify-center flex-shrink-0">
                  <div className="w-1.5 h-1.5 bg-red-600/40 rounded-full" />
                </div>
                <p className="text-lg text-zinc-700 font-medium italic">Persönliche und individuelle Analyse deiner Interessen</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1.5 w-6 h-6 rounded-full bg-red-600/[0.04] border border-red-600/10 flex items-center justify-center flex-shrink-0">
                  <div className="w-1.5 h-1.5 bg-red-600/40 rounded-full" />
                </div>
                <p className="text-lg text-zinc-500 font-medium leading-relaxed">Die besten KI-unterstützten Algorithmen, von Ärzten entwickelt und auf Studien basiert.</p>
              </div>
            </div>
          </div>

          <button className="inline-block px-10 py-4 rounded-xl bg-[#333333] text-white hover:bg-black transition-all font-bold text-base shadow-lg">
            Wissenschaft entdecken
          </button>
        </div>

        <div className="flex-1 order-1 lg:order-2 w-full">
           <div className="relative p-1 rounded-[3rem] bg-gradient-to-br from-black/[0.05] to-transparent shadow-2xl">
              <div className="bg-white rounded-[2.9rem] overflow-hidden p-6 md:p-8 border border-black/[0.03]">
                <DashboardPreview lightTheme={true} />
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-red-600/5 blur-2xl rounded-full"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-zinc-100 blur-3xl rounded-full"></div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default PotentialSection;