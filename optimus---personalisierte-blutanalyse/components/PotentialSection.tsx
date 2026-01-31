
import React from 'react';
import DashboardPreview from './DashboardPreview';

const PotentialSection: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-[#050505] text-white relative overflow-hidden">
      {/* Subtle patterns for a modern look */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
        <div className="flex-1 space-y-8 order-2 lg:order-1">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight text-gradient">
              Deine Gesundheit, <br />
              Deine Ziele, <br />
              <span className="text-red-500 italic">Dein Potenzial</span>
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="mt-1.5 w-6 h-6 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 bg-red-600 rounded-full" />
                </div>
                <p className="text-xl text-zinc-300 font-medium italic">Persönliche und individuelle Analyse deiner Interessen</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1.5 w-6 h-6 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 bg-red-600 rounded-full" />
                </div>
                <p className="text-xl text-zinc-500">Die besten KI-unterstützten Algorithmen, von Ärzten entwickelt und auf Studien basiert.</p>
              </div>
            </div>
          </div>

          <button className="inline-block px-8 py-4 rounded-2xl bg-white text-black hover:bg-zinc-200 transition-all font-bold text-lg shadow-xl shadow-white/5">
            Lerne mehr über die Wissenschaft
          </button>
        </div>

        <div className="flex-1 order-1 lg:order-2 w-full">
           <div className="relative p-1 rounded-[3.2rem] bg-gradient-to-br from-white/20 to-transparent shadow-2xl">
              <div className="bg-white rounded-[3rem] overflow-hidden p-6 md:p-8 border border-zinc-200">
                <DashboardPreview lightTheme={true} />
              </div>
              {/* Decorative floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-red-600/20 blur-2xl rounded-full"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 blur-3xl rounded-full"></div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default PotentialSection;
