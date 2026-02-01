import React from 'react';
import { Check, X, Star, ShieldCheck, Zap, ArrowRight, Clock, Percent, Microscope, UserCheck } from 'lucide-react';

const comparisonData = [
  {
    feature: "Schmerzfreies Home-Kit",
    elite: true,
    optimizer: true,
    doctor: "Nadel / Vene",
  },
  {
    feature: "15 Biomarker Analyse",
    elite: true,
    optimizer: true,
    doctor: "Eingeschränkt",
  },
  {
    feature: "Ärztliche Validierung",
    elite: true,
    optimizer: true,
    doctor: false,
  },
  {
    feature: "Test-Frequenz",
    elite: "Monatlich",
    optimizer: "Alle 3 Monate",
    doctor: "Nach Bedarf",
  },
  {
    feature: "Supplement Discount",
    elite: "20% Rabatt",
    optimizer: "20% Rabatt",
    doctor: "Listenpreis",
  },
  {
    feature: "KI-Empfehlungen",
    elite: true,
    optimizer: true,
    doctor: false,
  },
  {
    feature: "Software & Dashboard",
    elite: true,
    optimizer: true,
    doctor: false,
  },
  {
    feature: "Mindestlaufzeit",
    elite: "6 Monate",
    optimizer: "12 Monate",
    doctor: "-",
  },
];

const PricingSection: React.FC = () => {
  const renderValue = (val: any, highlight: boolean = false) => {
    if (val === true) return <Check className={`mx-auto ${highlight ? 'text-red-600' : 'text-zinc-400'}`} size={18} strokeWidth={3} />;
    if (val === false) return <X className="mx-auto text-zinc-200" size={18} strokeWidth={2} />;
    return <span className={`font-bold text-[9px] uppercase tracking-widest ${highlight ? 'text-zinc-900' : 'text-zinc-400'}`}>{val}</span>;
  };

  return (
    <section id="pricing" className="py-20 px-6 bg-[#fcfcfc]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/[0.04] border border-red-600/10 text-red-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-1">
            Medizinischer Goldstandard
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-none text-[#333333]">
            Wähle dein <br /> <span className="text-zinc-400 italic">Upgrade Level.</span>
          </h2>
          <p className="text-zinc-500 text-lg font-medium max-w-2xl mx-auto italic leading-relaxed">
            Wissenschaftlich präzise Optimierung für jeden Anspruch.
          </p>
        </div>

        <div className="overflow-x-auto pb-8">
          <table className="w-full border-separate border-spacing-y-3 min-w-[900px]">
            <thead>
              <tr className="text-left">
                <th className="p-4 text-zinc-400 font-bold uppercase tracking-[0.2em] text-[9px]">Leistungsumfang</th>
                <th className="p-6 bg-white rounded-t-[2rem] border-x border-t border-black/[0.03] w-1/4 shadow-sm">
                  <div className="text-zinc-400 font-bold text-[9px] uppercase tracking-widest mb-2">Elite Plan</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-[#333333]">69€</span>
                    <span className="text-[10px] text-zinc-400 font-bold">/ Mon.</span>
                  </div>
                </th>
                <th className="p-6 bg-zinc-50 border-x border-t border-red-600/10 rounded-t-[2rem] relative w-1/4 shadow-md">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white border border-black/[0.03] text-red-600 text-[9px] font-bold uppercase tracking-[0.2em] px-4 py-1 rounded-full shadow-sm">
                    Most Popular
                  </div>
                  <div className="text-red-600/60 font-bold text-[9px] uppercase tracking-widest flex items-center gap-2 mb-2">
                    <Star size={10} fill="currentColor" /> Optimizer Plan
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-[#333333]">29€</span>
                    <span className="text-[10px] text-zinc-400 font-bold">/ Mon.</span>
                  </div>
                </th>
                <th className="p-6 bg-white rounded-t-[2rem] border-x border-t border-black/[0.03] w-1/4 opacity-40">
                  <div className="text-zinc-400 font-bold text-[9px] uppercase tracking-widest mb-2">Hausarzt</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-zinc-300">150€+</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="group">
                  <td className="p-5 rounded-l-[1.25rem] border-l border-y border-black/[0.03] font-bold text-zinc-600 text-sm group-hover:text-black transition-colors">
                    {row.feature}
                  </td>
                  <td className="p-5 border-y border-black/[0.02] text-center">
                    {renderValue(row.elite)}
                  </td>
                  <td className="p-5 bg-zinc-50/50 border-y border-x border-red-600/5 text-center relative">
                    {renderValue(row.optimizer, true)}
                  </td>
                  <td className="p-5 border-y border-r border-black/[0.03] rounded-r-[1.25rem] text-center opacity-40">
                    {renderValue(row.doctor)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td className="p-4"></td>
                <td className="p-4">
                  <button className="w-full py-3 rounded-xl bg-white border border-black/[0.05] hover:bg-zinc-50 text-[#333333] transition-all font-bold text-[9px] uppercase tracking-widest shadow-sm">
                    Elite Plan starten
                  </button>
                </td>
                <td className="p-4">
                  <button className="w-full py-4 rounded-xl bg-[#333333] text-white hover:bg-black transition-all font-bold text-[9px] uppercase tracking-[0.2em] shadow-lg flex items-center justify-center gap-2 group">
                    Jetzt Optimizer werden <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </td>
                <td className="p-4">
                  <div className="text-center text-zinc-300 text-[9px] font-bold uppercase tracking-widest italic">
                    Referenz-Wert
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
           <TrustPoint 
             icon={<Microscope className="text-zinc-400" size={20} />} 
             title="ISO 15189 Labore" 
             desc="Akkreditierte deutsche Fachlabore garantieren höchste Analysestandards." 
           />
           <TrustPoint 
             icon={<UserCheck className="text-zinc-400" size={20} />} 
             title="Ärztlicher Review" 
             desc="Unsere Methodik wird kontinuierlich von Fachärzten validiert." 
           />
           <TrustPoint 
             icon={<ShieldCheck className="text-zinc-400" size={20} />} 
             title="Banken-Sicherheit" 
             desc="Deine Daten sind nach strengsten Standards DSGVO-konform gesichert." 
           />
        </div>
      </div>
    </section>
  );
};

const TrustPoint: React.FC<{ icon: React.ReactNode, title: string, desc: string }> = ({ icon, title, desc }) => (
  <div className="p-8 rounded-[2rem] bg-white border border-black/[0.03] space-y-3 hover:shadow-lg transition-all group medical-card-shadow">
    <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center border border-black/[0.03] group-hover:scale-105 transition-transform">{icon}</div>
    <h4 className="text-lg font-bold text-[#333333] uppercase tracking-tight">{title}</h4>
    <p className="text-zinc-500 text-sm leading-relaxed font-medium">{desc}</p>
  </div>
);

export default PricingSection;