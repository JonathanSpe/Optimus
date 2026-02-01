import React from 'react';
import { Activity, Beaker } from 'lucide-react';

const FactsSection: React.FC = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-12">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-4">
              <div className="w-12 h-[1px] bg-red-800/30"></div>
              <span className="text-[11px] font-[900] uppercase tracking-[0.3em] text-red-800">Molekulare Analyse</span>
            </div>
            <h3 className="text-5xl md:text-[4.5rem] font-[900] tracking-tighter leading-[0.9] text-[#0F172A]">
              Zahlen lügen nicht. <br />
              <span className="text-slate-900/40 italic font-[800]">Deine Biologie ist messbar.</span>
            </h3>
          </div>
          <p className="text-slate-600 text-xl max-w-sm leading-relaxed border-l-4 border-slate-50 pl-8 font-[600] italic">
            Wir analysieren über 15 Biomarker, um ein klares Bild deines inneren Zustands zu zeichnen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Fact 1 */}
          <div className="group relative p-12 rounded-[3.5rem] border border-slate-50 bg-[#FCFCFD] hover:bg-white transition-all duration-700 overflow-hidden shadow-sm hover:shadow-2xl card-medical">
            <div className="absolute top-0 right-0 w-80 h-80 bg-red-800/[0.015] rounded-full -mr-40 -mt-40 blur-[100px] group-hover:bg-red-800/[0.03] transition-all duration-1000" />
            <div className="relative z-10 flex flex-col gap-10">
              <div className="w-16 h-16 rounded-[1.8rem] bg-white border border-slate-100 flex items-center justify-center text-red-800 shadow-sm group-hover:scale-110 transition-transform duration-700">
                <Activity size={28} />
              </div>
              <div className="space-y-6">
                <div className="flex items-baseline gap-5">
                  <span className="text-8xl font-[900] tracking-[-0.05em] text-[#0F172A]">30%</span>
                  <span className="text-slate-400 text-[10px] font-[900] uppercase tracking-[0.3em]">Globaler Schnitt</span>
                </div>
                <div className="space-y-3">
                  <h4 className="text-2xl font-[900] text-[#0F172A] tracking-tight uppercase">Unerkannter Eisenmangel</h4>
                  <p className="text-slate-600 leading-relaxed text-lg font-[600]">
                    Ein großer Teil der Bevölkerung lebt mit einem Defizit, das oft als einfache "Müdigkeit" abgetan wird. Bei Athleten sinkt die regenerative Kapazität dadurch drastisch.
                  </p>
                </div>
                <div className="pt-6 border-t border-slate-100 flex items-center gap-5 text-[10px] font-[900] text-slate-400 uppercase tracking-[0.25em]">
                  <span>Peer-Reviewed 2024</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
                  <span>Klinische Studie</span>
                </div>
              </div>
            </div>
          </div>

          {/* Fact 2 */}
          <div className="group relative p-12 rounded-[3.5rem] border border-slate-50 bg-[#FCFCFD] hover:bg-white transition-all duration-700 overflow-hidden shadow-sm hover:shadow-2xl card-medical">
            <div className="absolute top-0 right-0 w-80 h-80 bg-red-800/[0.015] rounded-full -mr-40 -mt-40 blur-[100px] group-hover:bg-red-800/[0.03] transition-all duration-1000" />
            <div className="relative z-10 flex flex-col gap-10">
              <div className="w-16 h-16 rounded-[1.8rem] bg-white border border-slate-100 flex items-center justify-center text-red-800 shadow-sm group-hover:scale-110 transition-transform duration-700">
                <Beaker size={28} />
              </div>
              <div className="space-y-6">
                <div className="flex items-baseline gap-5">
                  <span className="text-8xl font-[900] tracking-[-0.05em] text-[#0F172A]">-25%</span>
                  <span className="text-slate-400 text-[10px] font-[900] uppercase tracking-[0.3em]">Leistungsverlust</span>
                </div>
                <div className="space-y-3">
                  <h4 className="text-2xl font-[900] text-[#0F172A] tracking-tight uppercase">Sauerstoff-Limitierung</h4>
                  <p className="text-slate-600 leading-relaxed text-lg font-[600]">
                    Niedrige Ferritin-Werte reduzieren den Sauerstofftransport in deine Muskeln. Ohne Analyse trainierst du gegen eine unsichtbare Wand – ineffizient und frustrierend.
                  </p>
                </div>
                <div className="pt-6 border-t border-slate-100 flex items-center gap-5 text-[10px] font-[900] text-slate-400 uppercase tracking-[0.25em]">
                  <span>Performance Lab</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
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