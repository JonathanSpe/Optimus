
import React from 'react';
import { Activity, Beaker } from 'lucide-react';

const FactsSection: React.FC = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-600/5 blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-12">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-3">
              <div className="w-10 h-[2px] bg-red-500"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-red-500">Molekulare Analyse</span>
            </div>
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight text-white">
              Zahlen lügen nicht. <br />
              <span className="text-zinc-600">Deine Biologie ist messbar.</span>
            </h3>
          </div>
          <p className="text-zinc-500 text-lg max-w-sm leading-relaxed border-l border-zinc-800 pl-8">
            Wir analysieren über 15 Biomarker, um ein klares Bild deines inneren Zustands zu zeichnen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Fact 1 */}
          <div className="group relative p-12 rounded-[3.5rem] border border-white/5 hover:border-red-500/20 bg-white/[0.01] transition-all duration-700 overflow-hidden red-glow-subtle">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/[0.02] rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-red-600/[0.05] transition-all" />
            <div className="relative z-10 flex flex-col gap-10">
              <div className="w-16 h-16 rounded-2xl bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                <Activity size={28} />
              </div>
              <div className="space-y-6">
                <div className="flex items-baseline gap-4">
                  <span className="text-8xl font-black tracking-tighter text-white">30%</span>
                  <span className="text-zinc-500 text-xs font-black uppercase tracking-widest">Globaler Schnitt</span>
                </div>
                <div className="space-y-4">
                  <h4 className="text-2xl font-black text-white">Unerkannter Eisenmangel</h4>
                  <p className="text-zinc-400 leading-relaxed text-lg font-medium">
                    Ein großer Teil der Bevölkerung lebt mit einem Defizit, das oft als einfache "Müdigkeit" abgetan wird. Bei Athleten sinkt die regenerative Kapazität dadurch drastisch.
                  </p>
                </div>
                <div className="pt-6 border-t border-white/5 flex items-center gap-4 text-[10px] font-black text-red-500/60 uppercase tracking-widest">
                  <span>Peer-Reviewed 2024</span>
                  <div className="w-1 h-1 rounded-full bg-red-500/40"></div>
                  <span>Klinische Studie</span>
                </div>
              </div>
            </div>
          </div>

          {/* Fact 2 */}
          <div className="group relative p-12 rounded-[3.5rem] border border-white/5 hover:border-red-500/20 bg-white/[0.01] transition-all duration-700 overflow-hidden red-glow-subtle">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/[0.02] rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-red-600/[0.05] transition-all" />
            <div className="relative z-10 flex flex-col gap-10">
              <div className="w-16 h-16 rounded-2xl bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                <Beaker size={28} />
              </div>
              <div className="space-y-6">
                <div className="flex items-baseline gap-4">
                  <span className="text-8xl font-black tracking-tighter text-white">-25%</span>
                  <span className="text-zinc-500 text-xs font-black uppercase tracking-widest">Leistungsverlust</span>
                </div>
                <div className="space-y-4">
                  <h4 className="text-2xl font-black text-white">Sauerstoff-Limitierung</h4>
                  <p className="text-zinc-400 leading-relaxed text-lg font-medium">
                    Niedrige Ferritin-Werte reduzieren den Sauerstofftransport in deine Muskeln. Ohne Analyse trainierst du gegen eine unsichtbare Wand – ineffizient und frustrierend.
                  </p>
                </div>
                <div className="pt-6 border-t border-white/5 flex items-center gap-4 text-[10px] font-black text-red-500/60 uppercase tracking-widest">
                  <span>Performance Lab</span>
                  <div className="w-1 h-1 rounded-full bg-red-500/40"></div>
                  <span>Zertifiziert</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FactsSection;
