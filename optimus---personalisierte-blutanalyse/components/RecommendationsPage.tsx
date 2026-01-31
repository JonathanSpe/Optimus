
import React from 'react';
import { 
  Zap, Pill, Moon, Activity, Timer, 
  CheckCircle2, AlertCircle, ArrowLeft, 
  Info, Sparkles, Coffee, Sun, CloudMoon,
  TrendingUp, TrendingDown, Brain, Heart,
  XCircle, RotateCcw, Clock, ShoppingCart, 
  ChevronRight, ShieldCheck, Box, Tag, Award
} from 'lucide-react';

interface RecommendationsPageProps {
  onNavigate: (page: any) => void;
}

const RecommendationsPage: React.FC<RecommendationsPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-24 px-6 text-white">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="space-y-4">
            <button 
              onClick={() => onNavigate('user-dashboard')}
              className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-xs font-black uppercase tracking-widest"
            >
              <ArrowLeft size={14} /> Zurück zum Dashboard
            </button>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-none">
              Deine <br /> <span className="text-red-600 italic">Strategie.</span>
            </h1>
            <p className="text-zinc-500 text-xl font-medium max-w-2xl">
              Basierend auf deinem Q1 Blutbild und Echtzeit-Daten von <span className="text-white">Strava</span> & <span className="text-white">Apple Health</span>.
            </p>
          </div>
          <div className="p-6 rounded-[2.5rem] bg-zinc-900 border border-white/5 flex items-center gap-6 inner-glow">
             <div className="text-right">
               <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Performance Score</p>
               <p className="text-3xl font-black text-white">92/100</p>
             </div>
             <div className="w-px h-10 bg-white/10" />
             <div className="flex items-center gap-2 text-green-500">
               <TrendingUp size={20} />
               <span className="text-[10px] font-black uppercase tracking-widest">+4% vs Vormonat</span>
             </div>
          </div>
        </div>

        {/* Molekulare Korrektur (Ferritin Story) */}
        <div className="p-1 rounded-[3.5rem] bg-gradient-to-br from-red-600/30 via-red-600/5 to-transparent shadow-2xl shadow-red-600/5">
          <div className="bg-zinc-950 rounded-[3.4rem] p-10 md:p-14 border border-red-500/20 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-12 opacity-5 text-red-500 pointer-events-none">
                <RotateCcw size={200} />
             </div>
             
             <div className="flex flex-col lg:flex-row gap-12 relative z-10">
                <div className="flex-1 space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-red-600 flex items-center justify-center text-white shadow-xl shadow-red-600/30">
                      <AlertCircle size={28} />
                    </div>
                    <div>
                      <h2 className="text-3xl font-black text-white uppercase tracking-tighter">Protokoll-Korrektur</h2>
                      <p className="text-red-500 text-[10px] font-black uppercase tracking-[0.2em]">Priorität: Hoch</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-4xl font-black text-white leading-tight">Warum dein Ferritin <br /> bisher <span className="text-red-600">stagnierte.</span></h3>
                    <p className="text-zinc-400 text-lg leading-relaxed font-medium">
                      Dein letzter Biomarker-Check zeigte trotz Supplementierung nur einen Anstieg von +2ng/ml. Die KI-Analyse deines Ernährungstagebuchs ergab: <span className="text-white italic">Kaffee/Tee Interaktion.</span>
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-3xl bg-white/5 border border-white/5 space-y-4">
                      <div className="flex items-center gap-3 text-red-500">
                        <XCircle size={20} />
                        <span className="text-xs font-black uppercase tracking-widest">Fehler</span>
                      </div>
                      <p className="text-sm text-zinc-500 italic">Einnahme am Frühstückstisch zeitgleich mit Kaffee. Gerbstoffe blockieren bis zu 80% der Eisenaufnahme.</p>
                    </div>
                    <div className="p-6 rounded-3xl bg-green-500/5 border border-green-500/20 space-y-4">
                      <div className="flex items-center gap-3 text-green-500">
                        <CheckCircle2 size={20} />
                        <span className="text-xs font-black uppercase tracking-widest">Korrektur</span>
                      </div>
                      <p className="text-sm text-zinc-200 font-bold">Direkt nach dem Aufstehen. Mind. 45 Min. Abstand zu Koffein. Kombination mit 200ml O-Saft (Vitamin C) zur Verdopplung der Bioverfügbarkeit.</p>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/3 space-y-6">
                  <div className="p-8 rounded-[2.5rem] bg-zinc-900 border border-white/5 flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-full border-4 border-red-500/20 border-t-red-500 flex items-center justify-center animate-spin-slow">
                      <Clock size={24} className="text-red-500" />
                    </div>
                    <h4 className="text-xl font-black text-white">New Timing</h4>
                    <p className="text-4xl font-black text-red-600">06:45</p>
                    <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest">Fenster: Fasten-Status</p>
                  </div>
                </div>
             </div>
          </div>
        </div>

        {/* Section 1: Molekulare Strategie (Supplements) */}
        <div className="space-y-12">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-red-600/10 rounded-2xl text-red-500">
              <Pill size={24} />
            </div>
            <h2 className="text-3xl font-black text-white tracking-tighter uppercase">Molekulares Protokoll</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Column 1: Optimus Basis */}
            <div className="lg:col-span-4 p-10 rounded-[3rem] bg-zinc-900/50 border border-white/5 space-y-8 hover:border-red-500/20 transition-all group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Sun className="text-orange-400" />
                  <span className="text-xs font-black text-zinc-400 uppercase tracking-widest">Optimus Basis</span>
                </div>
                <span className="text-[10px] font-bold text-zinc-600 italic">Phase: Korrektur</span>
              </div>
              
              <div className="space-y-6">
                <SupplementItem 
                  name="Eisenbisglycinat" 
                  dose="15mg" 
                  status="UPDATED"
                  reason="Erhöhung der Absorptionsrate durch optimiertes Zeitfenster."
                  tip="Kombiniere mit Vitamin C (O-Saft)."
                />
                <SupplementItem 
                  name="Vitamin D3 + K2" 
                  dose="5000 IU" 
                  status="ACTIVE"
                  reason="Erhaltung der hormonellen Integrität."
                />
              </div>
            </div>

            {/* Column 2: Optionale Empfehlung (former Regen Stack) */}
            <div className="lg:col-span-4 p-10 rounded-[3rem] bg-zinc-900/50 border border-white/5 space-y-8 hover:border-red-500/20 transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CloudMoon className="text-blue-400" />
                  <span className="text-xs font-black text-zinc-400 uppercase tracking-widest">Optionale Empfehlung</span>
                </div>
                <span className="text-[10px] font-bold text-zinc-600 italic">Phase: Optimierung</span>
              </div>
              <div className="space-y-6">
                <SupplementItem 
                  name="Magnesium-Glycinat" 
                  dose="400mg" 
                  status="ACTIVE"
                  reason="ZNS-Regeneration basierend auf sinkendem HRV-Trend am Vorabend."
                />
                <SupplementItem 
                  name="Omega-3 (EPA/DHA)" 
                  dose="2000mg" 
                  status="ACTIVE"
                  reason="Entzündungs-Modulation nach Training."
                />
              </div>
            </div>

            {/* Column 3: Pausiert (Q2) moved to the right */}
            <div className="lg:col-span-4 p-10 rounded-[3rem] bg-zinc-900/50 border border-white/5 space-y-8 relative group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <XCircle className="text-zinc-600" />
                  <span className="text-xs font-black text-zinc-400 uppercase tracking-widest">Pausiert (Q2)</span>
                </div>
              </div>
              
              <div className="space-y-6 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                <SupplementItem 
                  name="Vitamin B12" 
                  dose="500µg" 
                  status="PAUSED"
                  reason="Status: 890 pg/ml (Sättigung erreicht). Pause für 3 Monate zur Rezeptorentlastung."
                />
                <SupplementItem 
                  name="Zink-Monohydrat" 
                  dose="25mg" 
                  status="PAUSED"
                  reason="Serum-Zink im Optimalbereich. Fortsetzung erst bei Trainingsload-Peak > 600 TSS."
                />
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/5 text-[11px] text-zinc-500 italic">
                "Wichtig: Weniger ist oft mehr. Durch das Pausieren gesättigter Speicher vermeiden wir biologischen Stress."
              </div>
            </div>
          </div>

          {/* ACTION ITEM WITH REFINED DISCOUNT BADGE */}
          <div className="bg-zinc-900 border border-white/10 rounded-[4rem] p-12 md:p-16 relative overflow-hidden group shadow-2xl">
             <div className="absolute top-0 right-0 p-12 opacity-5 text-red-500 group-hover:rotate-12 transition-transform duration-1000">
               <Box size={240} />
             </div>
             
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                <div className="space-y-6">
                   <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/20 text-red-500 text-[10px] font-black uppercase tracking-[0.2em]">
                     Individual Order ready
                   </div>
                   <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none">
                     Dein Q2 <br /> <span className="text-red-600">Daily-Ration Pack</span>
                   </h2>
                   <p className="text-zinc-500 text-lg font-medium leading-relaxed italic">
                     "Alle aktiven Komponenten deiner Molekularstrategie kommen in <span className="text-white italic">vorportionierten Tages-Sachets</span>. GMP-zertifiziert und exakt dosiert."
                   </p>
                   <div className="flex flex-wrap gap-4 pt-4">
                     <div className="flex items-center gap-2 text-[10px] font-black uppercase text-zinc-400">
                       <ShieldCheck size={16} className="text-green-500" /> GMP Zertifiziert
                     </div>
                     <div className="flex items-center gap-2 text-[10px] font-black uppercase text-zinc-400">
                       <ShieldCheck size={16} className="text-green-500" /> 30 Daily Sachets
                     </div>
                   </div>
                </div>

                <div className="bg-zinc-950 p-10 rounded-[3rem] border border-white/5 space-y-8 inner-glow relative">
                   <div className="absolute -top-4 -right-4 bg-zinc-800 border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-xl shadow-lg flex items-center gap-2">
                     <Award size={12} className="text-red-500" /> Member Advantage applied
                   </div>

                   <div className="space-y-4">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5">
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-white uppercase tracking-widest">Tages-Rationen</span>
                          <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Inkl. 20% Elite Discount</span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs text-zinc-600 font-bold line-through block">35,63 €</span>
                          <span className="text-2xl font-black text-white">28,50 € <span className="text-xs text-zinc-500 font-bold">/ Mon.</span></span>
                        </div>
                      </div>
                      <ul className="space-y-3">
                         <li className="flex items-center justify-between text-xs font-bold text-zinc-400">
                           <span>Individuelle Sachet-Dosierung</span>
                           <CheckCircle2 size={14} className="text-red-600" />
                         </li>
                      </ul>
                   </div>
                   <button className="w-full bg-red-600 hover:bg-red-700 text-white py-5 rounded-2xl font-black text-lg transition-all shadow-2xl shadow-red-600/20 active:scale-95 flex items-center justify-center gap-3 group-hover:scale-[1.02]">
                     Versorgung sichern <ShoppingCart size={20} />
                   </button>
                   <p className="text-center text-[10px] font-black uppercase tracking-widest text-zinc-700 italic">Labor-geprüfte Reinheit garantiert</p>
                </div>
             </div>
          </div>
        </div>

        {/* Footer Authority Section */}
        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-red-500/20 grayscale">
              <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=200&auto=format&fit=crop" alt="Dr. med. Hering" />
            </div>
            <div>
              <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest">Ärztliche Freigabe</p>
              <p className="text-white font-black italic tracking-tighter text-xl">Dr. med. Christian Hering</p>
              <p className="text-zinc-600 text-xs uppercase font-bold tracking-widest">Facharzt für Endokrinologie</p>
            </div>
          </div>
          <div className="flex items-center gap-12 opacity-40">
            <ShieldCheck size={40} />
            <Award size={40} />
            <FlaskConical size={40} />
          </div>
        </div>

      </div>
    </div>
  );
};

const SupplementItem: React.FC<{ 
  name: string; 
  dose: string; 
  reason: string; 
  tip?: string; 
  status: 'ACTIVE' | 'UPDATED' | 'PAUSED' 
}> = ({ name, dose, reason, tip, status }) => (
  <div className="space-y-2 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <h4 className="font-black text-white">{name}</h4>
        <span className={`text-[7px] font-black px-2 py-0.5 rounded uppercase tracking-widest ${
          status === 'ACTIVE' ? 'bg-green-500/10 text-green-500' :
          status === 'UPDATED' ? 'bg-red-500/10 text-red-500' :
          'bg-zinc-500/10 text-zinc-500'
        }`}>
          {status}
        </span>
      </div>
      <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">{dose}</span>
    </div>
    <p className="text-[11px] text-zinc-500 leading-relaxed">{reason}</p>
    {tip && (
      <div className="flex items-center gap-2 text-[9px] text-green-500 font-bold uppercase tracking-widest mt-2 bg-green-500/5 p-2 rounded-lg">
        <Info size={10} /> {tip}
      </div>
    )}
  </div>
);

const ActionPoint: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="flex items-start gap-5 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all">
    <div className="mt-1">{icon}</div>
    <div className="space-y-1">
      <h5 className="font-black text-white text-sm uppercase tracking-tight">{title}</h5>
      <p className="text-xs text-zinc-500 leading-relaxed">{desc}</p>
    </div>
  </div>
);

const FlaskConical: React.FC<{ size?: number, className?: string }> = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M10 2v7.5" />
    <path d="M14 2v7.5" />
    <path d="M8.5 2h7" />
    <path d="M14 9.5a2 2 0 1 1 0 4c-.2 0-.4 0-.6-.1" />
    <path d="M10.6 13.4c-.2.1-.4.1-.6.1a2 2 0 1 1 0-4" />
    <path d="m14 13.5 4.5 7.5c.3.5.3 1.1 0 1.6-.3.5-.8.9-1.4.9H6.9c-.6 0-1.1-.4-1.4-.9-.3-.5-.3-1.1 0-1.6l4.5-7.5" />
  </svg>
);

export default RecommendationsPage;
