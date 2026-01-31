
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
    if (val === true) return <Check className={`mx-auto ${highlight ? 'text-red-500' : 'text-zinc-400'}`} size={20} strokeWidth={3} />;
    if (val === false) return <X className="mx-auto text-zinc-800" size={20} strokeWidth={3} />;
    if (typeof val === 'string' && val.includes('20%')) {
      return (
        <div className="flex flex-col items-center gap-1">
          <Percent size={14} className={highlight ? 'text-red-500' : 'text-zinc-500'} />
          <span className={`font-black text-[10px] uppercase tracking-widest ${highlight ? 'text-white' : 'text-zinc-500'}`}>{val}</span>
        </div>
      );
    }
    return <span className={`font-black text-[10px] uppercase tracking-widest ${highlight ? 'text-white' : 'text-zinc-500'}`}>{val}</span>;
  };

  return (
    <section id="pricing" className="py-24 px-6 relative overflow-hidden bg-[#050505]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-black uppercase tracking-[0.3em] mb-2">
            Medizinischer Goldstandard
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none text-white">
            Wähle dein <br /> <span className="text-red-600 italic text-6xl md:text-8xl">Upgrade Level.</span>
          </h2>
          <p className="text-zinc-500 text-xl font-medium max-w-2xl mx-auto italic">
            "Wer aufhört besser zu werden, hat aufgehört gut zu sein."
          </p>
        </div>

        <div className="overflow-x-auto pb-6">
          <table className="w-full border-separate border-spacing-y-4 min-w-[900px]">
            <thead>
              <tr className="text-left">
                <th className="p-6 text-zinc-600 font-black uppercase tracking-[0.2em] text-[10px]">Dein Leistungsumfang</th>
                <th className="p-8 bg-zinc-900/40 backdrop-blur-xl rounded-t-[3rem] border-x border-t border-white/5 w-1/4 group transition-all">
                  <div className="text-zinc-500 font-black text-[10px] uppercase tracking-widest mb-2">Elite Plan</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-white">69€</span>
                    <span className="text-xs text-zinc-600 font-bold">/ Mon.</span>
                  </div>
                </th>
                <th className="p-8 bg-zinc-900 border-x border-t border-red-600/40 rounded-t-[3rem] relative w-1/4 shadow-[0_0_40px_rgba(239,68,68,0.1)]">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2 rounded-full whitespace-nowrap animate-pulse">
                    Professional Choice
                  </div>
                  <div className="text-red-500 font-black text-[10px] uppercase tracking-widest flex items-center gap-2 mb-2">
                    <Star size={14} fill="currentColor" /> Optimizer Plan
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black text-white">29€</span>
                    <span className="text-xs text-zinc-400 font-bold">/ Mon.</span>
                  </div>
                </th>
                <th className="p-8 bg-black/40 rounded-t-[3rem] border-x border-t border-white/5 w-1/4 opacity-30">
                  <div className="text-zinc-600 font-black text-[10px] uppercase tracking-widest mb-2">Hausarzt</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-zinc-700">150€+</span>
                  </div>
                  <div className="text-[10px] text-zinc-700 font-black uppercase tracking-widest mt-1">Satz 1.35 GOÄ</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="group">
                  <td className="p-6 bg-white/[0.02] rounded-l-[2rem] border-l border-y border-white/5 font-bold text-zinc-400 text-sm group-hover:text-white transition-colors">
                    {row.feature}
                  </td>
                  <td className="p-6 bg-zinc-900/20 border-y border-white/5 text-center">
                    {renderValue(row.elite)}
                  </td>
                  <td className="p-6 bg-zinc-900/80 border-y border-x border-red-600/20 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-red-600/[0.02] group-hover:bg-red-600/[0.04] transition-all" />
                    <div className="relative z-10">{renderValue(row.optimizer, true)}</div>
                  </td>
                  <td className="p-6 bg-black/20 border-y border-r border-white/5 rounded-r-[2rem] text-center opacity-30">
                    {renderValue(row.doctor)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td className="p-6"></td>
                <td className="p-6 text-center">
                  <button className="w-full py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all font-black text-[10px] uppercase tracking-widest">
                    Elite Plan starten
                  </button>
                </td>
                <td className="p-6 text-center">
                  <button className="w-full py-5 rounded-xl bg-red-600 text-white hover:bg-red-700 transition-all font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-red-600/30 active:scale-95 flex items-center justify-center gap-2 group">
                    Jetzt Optimizer werden <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </td>
                <td className="p-6">
                  <div className="text-center text-zinc-700 text-[10px] font-black uppercase tracking-widest italic opacity-50">
                    Veraltete Methodik
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
           <TrustPoint 
             icon={<Microscope className="text-red-500" />} 
             title="ISO 15189 Labore" 
             desc="Alle Analysen werden ausschließlich in akkreditierten deutschen Fachlaboren durchgeführt." 
           />
           <TrustPoint 
             icon={<UserCheck className="text-red-500" />} 
             title="Ärztlicher Review" 
             desc="Unsere Algorithmen werden von Fachärzten für Endokrinologie und Sportmedizin überwacht." 
           />
           <TrustPoint 
             icon={<ShieldCheck className="text-red-500" />} 
             title="Banken-Sicherheit" 
             desc="Deine Gesundheitsdaten sind nach Bankenstandard verschlüsselt und DSGVO-konform." 
           />
        </div>
      </div>
    </section>
  );
};

const TrustPoint: React.FC<{ icon: React.ReactNode, title: string, desc: string }> = ({ icon, title, desc }) => (
  <div className="p-8 rounded-[2.5rem] bg-zinc-900/50 border border-white/5 space-y-4 hover:border-red-500/20 transition-all group inner-glow">
    <div className="w-12 h-12 rounded-2xl bg-red-600/10 flex items-center justify-center group-hover:scale-110 transition-transform">{icon}</div>
    <h4 className="text-xl font-black text-white uppercase tracking-tight">{title}</h4>
    <p className="text-zinc-500 text-sm leading-relaxed font-medium">{desc}</p>
  </div>
);

export default PricingSection;
