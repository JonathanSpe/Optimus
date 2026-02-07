
import React, { useState, useRef, useEffect } from 'react';
import { 
  Pill, Moon, Activity, Timer, 
  ArrowLeft, Info, Sparkles, Coffee, 
  TrendingUp, TrendingDown, Brain, 
  ShoppingCart, ShieldCheck, Box, Tag, Award,
  Utensils, Dumbbell, ZapOff, Trash2, Plus, 
  Truck, FlaskConical, ChevronDown, ChevronUp, 
  Target, Zap, Leaf, ZapIcon, HeartPulse, 
  Send, Bot, Loader2, MessageSquare, Fingerprint,
  Cpu, RefreshCw
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

// Defining an explicit interface for supplement data to resolve state update type errors.
interface SupplementData {
  id: number;
  name: string;
  dose: string;
  status: 'ACTIVE' | 'UPDATED' | 'PAUSED';
  category: string;
  reason: string;
  explanation: string;
  tip?: string;
}

const SupplementItem: React.FC<{ 
  name: string; 
  dose: string; 
  reason: string; 
  explanation: string;
  tip?: string; 
  status: 'ACTIVE' | 'UPDATED' | 'PAUSED';
  onToggle?: () => void;
}> = ({ name, dose, reason, explanation, tip, status, onToggle }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div 
      className={`space-y-1 p-4 rounded-[1.8rem] border transition-all medical-card-shadow group ${
        status === 'PAUSED' ? 'bg-slate-50/50 opacity-60 grayscale border-slate-100' : 'bg-white border-slate-100 hover:border-slate-300'
      }`}
    >
      <div className="flex items-center justify-between cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
            status === 'ACTIVE' ? 'bg-emerald-50 text-emerald-600' :
            status === 'UPDATED' ? 'bg-amber-50 text-amber-600' :
            'bg-slate-100 text-slate-400'
          }`}>
            <Pill size={16} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-[900] text-[#0F172A] text-xs uppercase tracking-tight">{name}</h4>
              <span className={`text-[6px] font-extrabold px-1.5 py-0.5 rounded-full uppercase tracking-[0.2em] ${
                status === 'ACTIVE' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' :
                status === 'UPDATED' ? 'bg-amber-50 text-amber-700 border border-amber-100' :
                'bg-slate-100 text-slate-600 border border-slate-200'
              }`}>
                {status}
              </span>
            </div>
            <p className="text-[10px] text-slate-500 font-bold">{reason}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-balance text-[10px] font-[900] text-slate-900 uppercase tracking-widest">{status === 'PAUSED' ? '0mg' : dose}</span>
          {isExpanded ? <ChevronUp size={12} className="text-slate-300" /> : <ChevronDown size={12} className="text-slate-300" />}
        </div>
      </div>

      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[500px] mt-3 pb-2 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-slate-50/50 rounded-2xl p-4 border border-slate-100 space-y-3">
           <div className="space-y-1">
             <span className="text-red-800 font-black uppercase text-[8px] tracking-widest flex items-center gap-1.5">
               Targeted Insight
             </span>
             <p className="text-[11px] text-slate-600 leading-relaxed font-semibold">
               {explanation}
             </p>
           </div>
           {tip && (
            <div className={`flex items-center gap-2 text-[9px] font-extrabold uppercase tracking-widest pt-2 border-t border-slate-100 ${status === 'PAUSED' ? 'text-slate-400' : 'text-red-800'}`}>
              <Info size={11} className="opacity-60" /> {tip}
            </div>
           )}
           <button 
             onClick={(e) => { e.stopPropagation(); onToggle?.(); }}
             className="w-full mt-2 py-2 rounded-xl border border-slate-200 bg-white text-[9px] font-black uppercase tracking-widest text-slate-400 hover:text-red-800 hover:border-red-800/20 transition-all"
           >
             {status === 'PAUSED' ? 'In Ration aufnehmen' : 'Pausieren'}
           </button>
        </div>
      </div>
    </div>
  );
};

const LifestyleCard: React.FC<{
  rec: { icon: React.ReactNode; label: string; text: string; why: string; data: string };
}> = ({ rec }) => {
  const [showAnalysis, setShowAnalysis] = useState(false);

  return (
    <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 medical-card-shadow space-y-5 transition-all hover:border-slate-200">
      <div className="flex items-center justify-between">
        <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#0F172A]">
          {rec.icon}
        </div>
        <div className="px-3 py-1 bg-red-800/[0.03] border border-red-800/10 rounded-lg text-[9px] font-black text-red-800 uppercase tracking-widest">
          Insight: {rec.data}
        </div>
      </div>
      <div className="space-y-4">
        <h4 className="font-black text-sm text-[#0F172A] uppercase tracking-tight">{rec.label}</h4>
        <p className="text-[13px] font-bold text-slate-600 leading-relaxed">
          {rec.text}
        </p>
        
        <div className="pt-2">
          <button 
            onClick={() => setShowAnalysis(!showAnalysis)}
            className="text-[9px] font-black text-red-800 uppercase tracking-widest flex items-center gap-2 hover:opacity-70 transition-opacity"
          >
            <Target size={12} /> {showAnalysis ? 'Hintergrund schließen' : 'Analyse Hintergrund'}
            {showAnalysis ? <ChevronUp size={10} /> : <ChevronDown size={10} />}
          </button>
          
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${showAnalysis ? 'max-h-40 mt-3 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="p-4 bg-red-800/[0.03] border border-red-800/5 rounded-2xl">
              <p className="text-[11px] font-bold text-slate-500 italic leading-snug">
                "{rec.why}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StrategyChat: React.FC<{ strategyContext: string }> = ({ strategyContext }) => {
  const [messages, setMessages] = useState<{ role: 'user' | 'model', text: string }[]>([
    { role: 'model', text: 'Jonathan, ich habe deine Q2-Strategie vollständig geladen. Hast du Fragen zur Dosierung deiner Supplements oder wie du deine Ernährung an deinen aktuellen Eisenstatus anpassen kannst?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...messages, { role: 'user', text: userMsg }].map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        })),
        config: {
          systemInstruction: `Du bist der Optimus Strategie-Berater. Kontext: Jonathan, Ironman-Athlet. Seine Q2 Strategie fokussiert auf Eisen (Ferritin 60ng/ml) und Magnesium zur Erhöhung der Sauerstoffkapazität. Hilf ihm, seine molekularen und Lifestyle-Empfehlungen zu verstehen. Antworte präzise, professionell und auf Deutsch.`,
          temperature: 0.7,
        },
      });
      setMessages(prev => [...prev, { role: 'model', text: response.text || 'Fehler bei der Analyse.' }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'model', text: 'System überlastet. Bitte versuche es später erneut.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#0F172A] rounded-[4rem] p-8 md:p-14 text-white relative overflow-hidden shadow-2xl flex flex-col md:flex-row gap-12">
      <div className="absolute top-0 right-0 p-16 opacity-[0.03] text-white pointer-events-none">
        <Fingerprint size={280} />
      </div>
      
      <div className="flex-1 space-y-8 relative z-10">
        <div className="space-y-4">
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-red-800">
                <Bot size={24} />
              </div>
              <h2 className="text-[11px] font-[900] uppercase tracking-[0.4em] text-white/40">Strategie-Berater Q2</h2>
           </div>
           <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-tight">
             Frage deine <br /><span className="text-white/30 italic">Biologie.</span>
           </h2>
           <p className="text-slate-400 text-sm font-bold leading-relaxed max-w-md">
             Nutze unseren spezialisierten KI-Berater, um tiefer in deine aktuellen Analyse-Daten einzutauchen.
           </p>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          {["Eisen-Aufnahme maximieren?", "Magnesium-Timing?", "Ferritin vs VO2max?", "Regenerations-Tipps?"].map(q => (
            <button 
              key={q} 
              onClick={() => { setInput(q); }}
              className="text-left p-4 rounded-2xl bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-widest text-white/60 hover:bg-white/10 hover:text-white transition-all"
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 bg-white/5 rounded-[3rem] p-6 border border-white/10 flex flex-col h-[400px] relative z-10">
        <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-4 pr-2 mb-4 scrollbar-thin">
           {messages.map((m, i) => (
             <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
               <div className={`max-w-[85%] p-4 rounded-2xl text-[11px] font-bold leading-relaxed ${
                 m.role === 'user' ? 'bg-red-800 text-white' : 'bg-white/10 text-slate-300'
               }`}>
                 {m.text}
               </div>
             </div>
           ))}
           {isLoading && (
             <div className="flex justify-start">
               <div className="bg-white/5 p-4 rounded-2xl flex items-center gap-2">
                 <Loader2 size={12} className="animate-spin text-red-800" />
                 <span className="text-[8px] font-black uppercase tracking-widest text-white/20">Analyzing Context...</span>
               </div>
             </div>
           )}
        </div>
        <div className="relative">
          <input 
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
            placeholder="Stelle eine Strategie-Frage..."
            className="w-full bg-white/10 border border-white/10 rounded-2xl py-4 pl-6 pr-14 text-xs text-white placeholder:text-white/20 focus:outline-none focus:border-red-800/40 transition-all font-bold"
          />
          <button 
            onClick={handleSend}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-red-800 text-white flex items-center justify-center hover:bg-red-700 transition-all"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

const RecommendationsPage: React.FC<{ onNavigate: (page: any) => void }> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'molecular' | 'lifestyle'>('molecular');
  // Applying explicit SupplementData[] type to fix the toggleStatus logic error.
  const [supplements, setSupplements] = useState<SupplementData[]>([
    { id: 1, name: "Eisenbisglycinat", dose: "15mg", status: 'UPDATED', category: 'essential', reason: "Ferritin-Korrektur", explanation: "Als Ironman-Athlet ist deine Sauerstoff-Transportkapazität dein Flaschenhals. Dein Ferritin-Wert von 60ng/ml ist suboptimal. Die Erhöhung korrigiert das Defizit für aerobe Ausdauer.", tip: "Strikt 45 Min. VOR dem Kaffee einnehmen." },
    { id: 2, name: "Vitamin D3 + K2", dose: "5000 IU", status: 'ACTIVE', category: 'essential', reason: "Hormon-Präkursor", explanation: "Wir gleichen das Defizit aus, um die Testosteron-Resynthese und dein Immunsystem bei hoher Trainingslast stabil zu halten." },
    { id: 3, name: "Magnesium-Glycinat", dose: "400mg", status: 'ACTIVE', category: 'essential', reason: "Regeneration", explanation: "Das Glycinat-Chelat hilft dir, das ZNS nach dem Training schneller in den parasympathischen Modus (Recovery) zu schalten." },
    { id: 4, name: "Omega-3 Ultra", dose: "2000mg", status: 'ACTIVE', category: 'optional', reason: "Entzündungshemmung", explanation: "Senkt systemische Inflammation und schützt deine Gelenke bei hohen Impact-Belastungen.", tip: "Zu einer fettreichen Mahlzeit einnehmen." },
    { id: 5, name: "Ashwagandha KSM-66", dose: "600mg", status: 'ACTIVE', category: 'optional', reason: "Stress-Management", explanation: "Unterstützt die Senkung des nächtlichen Cortisols, um die Tiefschlafphasen zu maximieren." },
    { id: 6, name: "Vitamin B-Komplex", dose: "0mg", status: 'PAUSED', category: 'paused', reason: "Status: Optimal", explanation: "Deine aktuellen Blutwerte zeigen einen B12-Spiegel im oberen Drittel. Weitere Supplementierung ist redundant." }
  ]);

  const toggleStatus = (id: number) => {
    setSupplements(prev => prev.map(s => {
      if (s.id === id) {
        return { ...s, status: s.status === 'PAUSED' ? 'ACTIVE' : 'PAUSED' };
      }
      return s;
    }));
  };

  const subTotal = 32.25;
  const discountRate = 0.20;
  const discountAmount = subTotal * discountRate;
  const totalPrice = subTotal - discountAmount;

  return (
    <div className="min-h-screen bg-[#FDFDFD] pt-24 pb-16 px-6 text-[#0F172A]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="space-y-3">
            <button 
              onClick={() => onNavigate('user-dashboard')}
              className="flex items-center gap-2 text-slate-400 hover:text-[#0F172A] transition-all text-[9px] font-black uppercase tracking-[0.2em] group"
            >
              <ArrowLeft size={11} className="group-hover:-translate-x-1 transition-transform" /> Dashboard
            </button>
            <h1 className="text-4xl lg:text-5xl font-[900] tracking-tighter text-[#0F172A] leading-none uppercase">
              Q2 <span className="text-slate-900/20 italic">Strategie</span>
            </h1>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full lg:w-auto">
            {[
              { label: 'Overall', score: 92, delta: '+4', up: true },
              { label: 'Athletics', score: 94, delta: '+6', up: true },
              { label: 'Hormones', score: 88, delta: '-2', up: false },
              { label: 'Recovery', score: 85, delta: '+3', up: true }
            ].map((s, i) => (
              <div key={i} className="bg-white border border-slate-100 p-4 rounded-[1.5rem] shadow-sm flex flex-col items-center justify-center min-w-[110px] medical-card-shadow border-b-2 border-b-slate-100/50">
                <span className="text-[7px] font-black text-zinc-400 uppercase tracking-widest leading-none mb-1">{s.label}</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-[900] tracking-tight">{s.score}</span>
                  <div className={`flex items-center text-[8px] font-black ${s.up ? 'text-emerald-500' : 'text-red-500'}`}>
                    {s.up ? <TrendingUp size={8} /> : <TrendingDown size={8} />}
                    {s.delta}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 1. DAILY RATION PACK - COMPACT REFINEMENT */}
        <div className="bg-white border border-slate-100 rounded-[4rem] p-8 md:p-14 relative overflow-hidden shadow-sm medical-card-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
            
            {/* LEFT: Concise Features & constrain image */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-800/[0.03] border border-red-800/10 text-red-800 text-[9px] font-[900] uppercase tracking-[0.2em]">
                  Elite Protocol v4
                </div>
                <h2 className="text-4xl font-[900] text-[#0F172A] tracking-tighter leading-tight">
                  Deine <span className="text-slate-900/30 italic">Daily-Ration</span>
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-x-6 gap-y-6">
                {[
                  { icon: <ShieldCheck size={16} />, label: "Pharma-Qualität", sub: "GMP-Geprüft." },
                  { icon: <Box size={16} />, label: "30 Sachets", sub: "Exakt portioniert." },
                  { icon: <Truck size={16} />, label: "Gratis Versand", sub: "Alle 30 Tage." },
                  { icon: <RefreshCw size={16} />, label: "Flex-Abo", sub: "Monatlich kündbar." }
                ].map((f, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-red-800 shadow-sm shrink-0">
                      {f.icon}
                    </div>
                    <div>
                      <p className="text-[9px] font-black text-[#0F172A] uppercase tracking-widest">{f.label}</p>
                      <p className="text-[10px] font-bold text-slate-400">{f.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative max-w-[400px]">
                 <img 
                  src="https://raw.githubusercontent.com/JonathanSpe/Optimus/main/optimus---personalisierte-blutanalyse/assets/Tagesrationen%20Supplements.png" 
                  alt="Daily Sachet" 
                  className="w-full h-auto rounded-[2.5rem] border border-slate-100 shadow-lg grayscale group-hover:grayscale-0 transition-all duration-700"
                 />
              </div>
            </div>

            {/* RIGHT: Compact Checkout */}
            <div className="bg-[#0F172A] rounded-[3rem] p-8 text-white flex flex-col shadow-2xl h-fit">
               <div className="space-y-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                     <p className="text-base font-black uppercase tracking-tight">Pack-Zusammenfassung</p>
                     <div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-lg">
                       <Tag size={10} className="text-red-800" />
                       <span className="text-[8px] font-black text-red-800 uppercase tracking-widest">PRO-STRAT-20</span>
                     </div>
                  </div>
                  
                  <div className="space-y-2">
                     <div className="max-h-[180px] overflow-y-auto pr-2 space-y-2 scrollbar-thin">
                        {supplements.filter(s => s.status !== 'PAUSED').map((s) => (
                          <div key={s.id} className="flex items-center justify-between p-3 rounded-2xl bg-white/5 border border-white/10 group hover:bg-white/10 transition-all">
                             <div className="flex items-center gap-3">
                                <Pill size={14} className="text-red-800" />
                                <div>
                                   <p className="text-[10px] font-black text-white uppercase tracking-tight leading-none">{s.name}</p>
                                   <p className="text-[8px] font-bold text-white/40 mt-1">{s.dose}</p>
                                </div>
                             </div>
                             <button onClick={() => toggleStatus(s.id)} className="p-1.5 text-white/10 hover:text-red-800 transition-colors">
                               <Trash2 size={12} />
                             </button>
                          </div>
                        ))}
                     </div>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-white/10 mt-auto">
                     <div className="flex justify-between items-center text-[10px] font-bold text-white/40">
                       <span>Abo-Vorteil (20%)</span>
                       <span className="text-emerald-400">-{discountAmount.toFixed(2)}€</span>
                     </div>
                     <div className="flex justify-between items-end pt-2">
                        <span className="text-[9px] font-black uppercase text-white/60">Monatlich</span>
                        <div className="text-right">
                           <span className="text-3xl font-[900] text-white tracking-tighter leading-none">{totalPrice.toFixed(2)}€</span>
                        </div>
                     </div>
                  </div>

                  <button className="w-full bg-white text-[#0F172A] py-5 rounded-2xl font-[900] text-sm transition-all shadow-xl hover:bg-slate-50 flex items-center justify-center gap-3 mt-4">
                    Bestätigen <ShoppingCart size={16} />
                  </button>
               </div>
            </div>
          </div>
        </div>

        {/* 2. OPTIMIERUNGS ÜBERSICHT & NAV */}
        <div className="space-y-8">
          <div className="bg-white border border-slate-100 rounded-[3rem] p-10 medical-card-shadow flex flex-col md:flex-row items-center gap-10">
             <div className="w-20 h-20 rounded-3xl bg-red-800/[0.03] border border-red-800/10 flex items-center justify-center text-red-800 shadow-inner shrink-0">
                <Target size={32} />
             </div>
             <div className="space-y-2">
                <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-red-800">Analytische Datenbasis</h3>
                <p className="text-lg text-slate-500 font-bold leading-relaxed">
                  Deine Strategie basiert auf deinen neuesten <span className="text-[#0F172A]">Blutwerten</span>, Fortschritten im Zeitverlauf und den integrierten Daten deiner <span className="text-[#0F172A]">Wearables</span>.
                </p>
             </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-4">
            <div className="flex items-center gap-4">
              <div className="w-1.5 h-8 bg-red-800 rounded-full" />
              <h2 className="text-3xl font-[900] text-[#0F172A] tracking-tighter uppercase">Deine Strategie-Zentralen</h2>
            </div>
            
            <div className="bg-slate-100/50 p-2 rounded-2xl flex items-center border border-slate-200/50">
              <button 
                onClick={() => setActiveTab('molecular')}
                className={`px-8 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${
                  activeTab === 'molecular' ? 'bg-white shadow-lg text-[#0F172A]' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                Molekulare Strategie
              </button>
              <button 
                onClick={() => setActiveTab('lifestyle')}
                className={`px-8 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${
                  activeTab === 'lifestyle' ? 'bg-white shadow-lg text-[#0F172A]' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                Lifestyle Strategie
              </button>
            </div>
          </div>

          <div className="transition-all duration-500 min-h-[400px]">
            {activeTab === 'molecular' ? (
              <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4">
                
                <div className="space-y-6">
                  <div className="flex items-center gap-3 px-4">
                    <Sparkles size={18} className="text-amber-500" />
                    <h3 className="text-[12px] font-[900] uppercase tracking-[0.2em] text-zinc-400">Jonathans Optimierungs Essentials</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {supplements.filter(s => s.category === 'essential').map(s => (
                      <SupplementItem 
                        key={s.id}
                        name={s.name} dose={s.dose} status={s.status} 
                        reason={s.reason} explanation={s.explanation}
                        tip={s.tip} onToggle={() => toggleStatus(s.id)}
                      />
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-3 px-4">
                    <Plus size={18} className="text-slate-400" />
                    <h3 className="text-[12px] font-[900] uppercase tracking-[0.2em] text-zinc-400">Jonathans Optionals</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {supplements.filter(s => s.category === 'optional').map(s => (
                      <SupplementItem 
                        key={s.id}
                        name={s.name} dose={s.dose} status={s.status} 
                        reason={s.reason} explanation={s.explanation}
                        onToggle={() => toggleStatus(s.id)}
                      />
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-3 px-4">
                    <ZapOff size={18} className="text-slate-300" />
                    <h3 className="text-[12px] font-[900] uppercase tracking-[0.2em] text-zinc-300">Pausierte Strategien</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {supplements.filter(s => s.category === 'paused').map(s => (
                      <SupplementItem 
                        key={s.id}
                        name={s.name} dose={s.dose} status={s.status} 
                        reason={s.reason} explanation={s.explanation}
                        onToggle={() => toggleStatus(s.id)}
                      />
                    ))}
                  </div>
                </div>

              </div>
            ) : (
              <div className="space-y-24 animate-in fade-in slide-in-from-bottom-4">
                
                {/* LIFESTYLE CATEGORIES */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 px-2">
                    <div className="w-1.5 h-6 bg-red-800 rounded-full" />
                    <h3 className="text-xl font-[900] uppercase tracking-tight text-[#0F172A]">Ernährung</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { 
                        icon: <Utensils size={24} />, 
                        label: "Nährstoffdichte & Eisenstatus", 
                        text: "Fokussiere dich auf eisenreiche Kost (Fleisch, Hülsenfrüchte, Vollkorn) kombiniert mit B12-Quellen.", 
                        why: "Dein aktuell niedriger Ferritin-Wert von 60ng/ml limitiert deine aerobe Ausdauer. Wir müssen deine Eisenspeicher auffüllen.",
                        data: "Ferritin: 60ng/ml"
                      },
                      { 
                        icon: <Leaf size={24} />, 
                        label: "Magnesium & ATP-Synthese", 
                        text: "Integriere täglich magnesiumreiche Lebensmittel wie grünes Blattgemüse und Nüsse.", 
                        why: "Dein Magnesium-Status zeigt bei hoher Trainingslast eine abnehmende Tendenz. Magnesium ist essenziell für deine ATP-Produktion.",
                        data: "Intrazellulär-Mg: Grenzwertig"
                      },
                      { 
                        icon: <Coffee size={24} />, 
                        label: "Inhibitor-Management", 
                        text: "Halte strikt 60 Minuten Abstand zwischen Kaffee/Tee und deinen Mahlzeiten.", 
                        why: "Polyphenole binden deine Eisen-Ionen im Darm. Durch das zeitliche Fenster steigern wir deine Resorptionsrate um bis zu 40%.",
                        data: "Bioavailability Scan"
                      }
                    ].map((rec, i) => <LifestyleCard key={i} rec={rec} />)}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-3 px-2">
                    <div className="w-1.5 h-6 bg-red-800 rounded-full" />
                    <h3 className="text-xl font-[900] uppercase tracking-tight text-[#0F172A]">Bewegung</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { 
                        icon: <Dumbbell size={24} />, 
                        label: "Periodisierung & Belastung", 
                        text: "Vermeide Übertraining, da dies deine Mikronährstoff-Depots leert.", 
                        why: "Deine hohe hs-CRP Baseline (1.2 mg/l) deutet auf eine verzögerte systemische Regeneration hin.",
                        data: "hs-CRP: 1.2 mg/l"
                      },
                      { 
                        icon: <ZapIcon size={24} />, 
                        label: "Hormon-Steuerung", 
                        text: "Nutze Krafttraining zur Unterstützung der Testosteron-Resynthese.", 
                        why: "Deine SHBG-Werte sind leicht erhöht, was das freie Testosteron bindet.",
                        data: "SHBG: Erhöht"
                      }
                    ].map((rec, i) => <LifestyleCard key={i} rec={rec} />)}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 3. STRATEGY CHAT ADVISOR */}
        <StrategyChat strategyContext="Jonathan, Ferritin 60ng/ml, SHBG erhöht, hs-CRP 1.2 mg/l. Fokus: Sauerstoff-Effizienz Q2." />

        {/* DOCTOR VALIDATION */}
        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-xl grayscale opacity-60">
              <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=200&auto=format&fit=crop" alt="Dr. Hering" />
            </div>
            <div>
              <p className="text-slate-400 text-[9px] font-[900] uppercase tracking-[0.3em] leading-none mb-2">Expert Strategy Validation</p>
              <p className="text-[#0F172A] font-[900] italic text-xl tracking-tighter">Dr. med. Christian Hering</p>
            </div>
          </div>
          <div className="flex items-center gap-12 opacity-[0.08]">
            <ShieldCheck size={42} />
            <Award size={42} />
            <FlaskConical size={42} />
          </div>
        </div>

      </div>
      <style>{`
        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #E2E8F0;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default RecommendationsPage;
