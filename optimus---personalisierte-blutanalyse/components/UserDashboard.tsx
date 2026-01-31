
import React, { useState } from 'react';
import { Activity, AlertCircle, Calendar, Share2, Download, History, Moon, Zap, Pill, Smartphone, CheckCircle2, XCircle, Info, MessageSquareQuote, TrendingDown, TrendingUp, Sparkles, Heart, Timer, Footprints, ChevronRight, Target, Layers, ArrowRight } from 'lucide-react';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Line, Area, ComposedChart } from 'recharts';
import DashboardPreview from './DashboardPreview';
import AIChat from './AIChat';

interface UserDashboardProps {
  onNavigate: (page: any) => void;
}

interface BiomarkerDetail {
  name: string;
  value: string;
  unit: string;
  status: 'Optimal' | 'Stabil' | 'Kritisch' | 'Verbesserung';
  trend: 'up' | 'down' | 'stable';
}

const historyData = [
  { period: 'Q2 23', testosteron: 610, ferritin: 88, vitaminD: 32, zinc: 82, cortisol: 22, b12: 380, stravaLoad: 320, hrv: 58, steps: 8500 },
  { period: 'Q3 23', testosteron: 695, ferritin: 104, vitaminD: 46, zinc: 89, cortisol: 19, b12: 410, stravaLoad: 450, hrv: 62, steps: 11200 },
  { period: 'Q4 23', testosteron: 785, ferritin: 115, vitaminD: 55, zinc: 95, cortisol: 16, b12: 450, stravaLoad: 580, hrv: 65, steps: 12500 },
  { period: 'Q1 24', testosteron: 840, ferritin: 142, vitaminD: 65, zinc: 102, cortisol: 14, b12: 520, stravaLoad: 510, hrv: 68, steps: 13100 },
];

const categoryMapping: Record<string, { 
  biomarkers: string[], 
  colors: string[], 
  analysis: string, 
  wearableContext: string,
  detailedMarkers: BiomarkerDetail[] 
}> = {
  'Erholung': {
    biomarkers: ['cortisol', 'vitaminD'],
    colors: ['#ef4444', '#ffffff'],
    analysis: 'Dein Erholungs-Score korreliert stark mit deinem verbesserten HRV-Trend (+15ms). Die Senkung des Cortisols ist ein direktes Resultat der optimierten Schlafhygiene laut Apple Health.',
    wearableContext: 'HRV: 68ms (Trend: Stabil)',
    detailedMarkers: [
      { name: 'Cortisol (Speichel)', value: '14', unit: 'ng/ml', status: 'Optimal', trend: 'down' },
      { name: 'Vitamin D', value: '65', unit: 'ng/ml', status: 'Stabil', trend: 'up' },
      { name: 'hs-CRP', value: '0.8', unit: 'mg/l', status: 'Optimal', trend: 'stable' }
    ]
  },
  'Athletik': {
    biomarkers: ['testosteron', 'ferritin'],
    colors: ['#ef4444', '#ffffff'],
    analysis: 'Herausragende Steigerung. Trotz eines Anstiegs des Strava Training Loads um 40% bleibt dein Testosteron-Spiegel stabil ansteigend. Das Ferritin-Management verhindert das typische "Athleten-Loch".',
    wearableContext: 'Training Load: 510 (Peak)',
    detailedMarkers: [
      { name: 'Ferritin', value: '142', unit: 'ng/ml', status: 'Optimal', trend: 'up' },
      { name: 'Testosteron', value: '840', unit: 'ng/dl', status: 'Optimal', trend: 'up' },
      { name: 'Magnesium', value: '0.92', unit: 'mmol/l', status: 'Stabil', trend: 'stable' }
    ]
  },
  'Haut & Haare': {
    biomarkers: ['zinc', 'ferritin'],
    colors: ['#ef4444', '#ffffff'],
    analysis: 'Die Hautregeneration profitiert von der stabilen Mikronährstoff-Zufuhr. Dein Aktivitätslevel (Schritte) zeigt eine verbesserte Durchblutung des peripheren Gewebes.',
    wearableContext: 'Schritte: 13.1k avg',
    detailedMarkers: [
      { name: 'Zink (Serum)', value: '102', unit: 'µg/dl', status: 'Stabil', trend: 'stable' },
      { name: 'Ferritin', value: '142', unit: 'ng/ml', status: 'Optimal', trend: 'up' },
      { name: 'Biotin', value: '680', unit: 'ng/l', status: 'Optimal', trend: 'up' }
    ]
  },
  'Kognition': {
    biomarkers: ['b12', 'vitaminD'],
    colors: ['#ef4444', '#ffffff'],
    analysis: 'Dein B12-Status korreliert mit einer höheren Schlafeffizienz (88% im Schnitt). Dies reduziert mentale Fatigue nach intensiven Trainingseinheiten.',
    wearableContext: 'Tiefschlaf: 2.2h avg',
    detailedMarkers: [
      { name: 'Vitamin B12', value: '520', unit: 'pg/ml', status: 'Stabil', trend: 'up' },
      { name: 'Omega-3 Index', value: '8.4', unit: '%', status: 'Optimal', trend: 'up' },
      { name: 'Folsäure', value: '12', unit: 'ng/ml', status: 'Stabil', trend: 'stable' }
    ]
  },
  'Hormone': {
    biomarkers: ['testosteron', 'cortisol'],
    colors: ['#ef4444', '#ffffff'],
    analysis: 'Optimale Balance zwischen Belastung und Regeneration. Deine Apple Health Herzfrequenz-Variabilität zeigt an, dass dein Nervensystem die Hormon-Anstiege gut verarbeitet.',
    wearableContext: 'Resting HR: 47 bpm',
    detailedMarkers: [
      { name: 'Testosteron', value: '840', unit: 'ng/dl', status: 'Optimal', trend: 'up' },
      { name: 'Estradiol', value: '28', unit: 'pg/ml', status: 'Stabil', trend: 'stable' },
      { name: 'SHBG', value: '34', unit: 'nmol/l', status: 'Optimal', trend: 'stable' }
    ]
  }
};

const UserDashboard: React.FC<UserDashboardProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState('Athletik');
  const activeConfig = categoryMapping[selectedCategory] || categoryMapping['Athletik'];

  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-white">Hi, Jonathan</h1>
              <div className="px-4 py-1.5 rounded-full bg-red-600/10 border border-red-500/20 text-red-500 text-[10px] font-black uppercase tracking-[0.2em] mt-2 shadow-[0_0_20px_rgba(239,68,68,0.1)]">
                Elite Tier
              </div>
            </div>
            <p className="text-zinc-500 text-xl font-medium">9-Monats Performance Trend: <span className="text-white italic">Optimaler Aufstieg</span></p>
          </div>
          
          <div className="flex gap-4">
            <button className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-all text-white active:scale-95">
              <Download size={16} className="text-red-500" /> Bio-Report
            </button>
            <button className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-red-600 text-white text-xs font-black uppercase tracking-widest hover:bg-red-700 transition-all shadow-2xl shadow-red-600/20 active:scale-95">
              <Activity size={16} /> Q2 Test Starten
            </button>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-16">
            
            {/* Performance Radar Overview */}
            <div className="bg-glass rounded-[4rem] p-10 md:p-14 border border-white/5 relative overflow-hidden red-glow-subtle">
              <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-600/5 blur-[120px] rounded-full" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-10">
                   <div className="space-y-1">
                      <h2 className="text-3xl font-black text-white tracking-tighter uppercase">Biologische Gesamtübersicht</h2>
                      <p className="text-zinc-500 text-sm font-medium">Deine 360° Analyse inkl. Wearable-Daten Integration.</p>
                   </div>
                   <div className="hidden md:block">
                      <div className="px-6 py-2 rounded-2xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-red-500">
                        Status: Peak Performance
                      </div>
                   </div>
                </div>
                <DashboardPreview 
                  lightTheme={false} 
                  selectedCategory={selectedCategory}
                  onSelectCategory={setSelectedCategory}
                />
              </div>
            </div>

            {/* EXPANDED Granular Analysis Panel */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-red-600/10 rounded-2xl text-red-500">
                    <Layers size={24} />
                  </div>
                  <h2 className="text-3xl font-black text-white tracking-tighter uppercase">Analyse: {selectedCategory}</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {activeConfig.detailedMarkers.map((marker, idx) => (
                  <div key={idx} className="bg-zinc-900 border border-white/5 p-8 rounded-[2.5rem] hover:border-red-500/30 transition-all group relative overflow-hidden">
                    <div className={`absolute top-0 right-0 p-6 opacity-5 ${marker.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                      {marker.trend === 'up' ? <TrendingUp size={60} /> : <TrendingDown size={60} />}
                    </div>
                    <div className="space-y-4 relative z-10">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">{marker.name}</span>
                        <span className={`text-[8px] font-black px-2 py-0.5 rounded uppercase tracking-widest ${
                          marker.status === 'Optimal' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
                        }`}>
                          {marker.status}
                        </span>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <p className="text-4xl font-black text-white">{marker.value}</p>
                        <span className="text-xs font-bold text-zinc-500">{marker.unit}</span>
                      </div>
                      <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                        <div className={`h-full bg-red-600 transition-all duration-1000`} style={{ width: marker.status === 'Optimal' ? '90%' : '65%' }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-zinc-900 to-black border border-red-500/30 p-10 rounded-[3rem] flex flex-col md:flex-row gap-8 items-center shadow-2xl relative overflow-hidden group">
                 <div className="absolute inset-0 bg-red-600/[0.03] group-hover:bg-red-600/[0.05] transition-all" />
                 <div className="w-20 h-20 rounded-3xl bg-red-600 text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-red-600/30 z-10">
                   <Sparkles size={40} />
                 </div>
                 <div className="space-y-3 z-10 flex-1">
                   <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-red-500 text-[10px] font-black uppercase tracking-[0.2em]">Cross-Referenz Analyse</span>
                        <div className="h-px w-12 bg-red-500/30"></div>
                        <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">{selectedCategory}</span>
                      </div>
                      <div className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[9px] font-black text-zinc-400 uppercase tracking-widest">
                        {activeConfig.wearableContext}
                      </div>
                   </div>
                   <p className="text-xl text-zinc-200 font-medium leading-relaxed italic">
                     "{activeConfig.analysis}"
                   </p>
                 </div>
              </div>
            </div>
            
            {/* Dynamic Chart Section: Biomarkers + Strava Background */}
            <div className="bg-glass rounded-[4rem] p-10 md:p-14 border border-white/5 space-y-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-5 text-white pointer-events-none">
                <TrendingUp size={200} />
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2">
                  <h3 className="text-3xl font-black text-white flex items-center gap-4">
                    <History size={28} className="text-red-500" /> Korrelierte Biometrie: {selectedCategory}
                  </h3>
                  <p className="text-zinc-500 text-sm font-medium italic">Anzeige inkl. Strava Activity Load (Hintergrund-Ebene).</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-[9px] font-black uppercase tracking-widest text-orange-500">
                    <div className="w-2 h-2 rounded-full bg-orange-500"></div> Strava Load
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-widest text-white">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div> Biomarker
                  </div>
                </div>
              </div>
              
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={historyData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorLoad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f97316" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} opacity={0.1} />
                    <XAxis 
                      dataKey="period" 
                      stroke="#52525b" 
                      fontSize={11} 
                      fontWeight="900" 
                      axisLine={false} 
                      tickLine={false} 
                      dy={15} 
                    />
                    <YAxis yAxisId="load" hide domain={[0, 'dataMax + 100']} />
                    <YAxis yAxisId="rel" hide domain={['auto', 'auto']} />
                    
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0c0c0c', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '24px', padding: '16px', color: '#fff' }}
                      itemStyle={{ fontWeight: 'bold', fontSize: '12px' }}
                      cursor={{ stroke: 'rgba(239, 68, 68, 0.2)', strokeWidth: 2 }}
                    />
                    <Legend verticalAlign="top" align="right" iconType="circle" wrapperStyle={{ paddingBottom: '40px', fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em' }} />
                    
                    <Area 
                      yAxisId="load"
                      type="monotone"
                      dataKey="stravaLoad"
                      name="Strava Load"
                      stroke="#f97316"
                      strokeWidth={1}
                      fillOpacity={1}
                      fill="url(#colorLoad)"
                    />

                    {activeConfig.biomarkers.map((bm, idx) => (
                      <Line 
                        key={bm}
                        yAxisId="rel"
                        type="monotone" 
                        dataKey={bm} 
                        name={bm.charAt(0).toUpperCase() + bm.slice(1)} 
                        stroke={activeConfig.colors[idx]} 
                        strokeWidth={4 - idx} 
                        dot={{ fill: activeConfig.colors[idx], r: 6 - idx, strokeWidth: 0 }} 
                        activeDot={{ r: 9, strokeWidth: 0, fill: '#fff' }}
                        animationDuration={1000}
                      />
                    ))}
                  </ComposedChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/5">
                <StatItem label="Health Status" delta="Stable" status="LEVEL 5" />
                <StatItem label="Strain Index" delta="High" status="RECOVERING" />
                <StatItem label="V02 Correlation" delta="Elite" status="MATCHED" />
                <StatItem label="Fokus-Zone" delta={selectedCategory} status="OPTIMIZED" isElite />
              </div>
            </div>

            {/* Molecule Strategy Simplified CTA */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-red-600/10 rounded-2xl text-red-500">
                  <Target size={24} />
                </div>
                <h2 className="text-3xl font-black text-white tracking-tighter uppercase">Molekulare Strategie</h2>
              </div>
              
              <div 
                onClick={() => onNavigate('recommendations')}
                className="group relative p-12 rounded-[4rem] bg-zinc-950 border border-white/10 hover:border-red-600/40 transition-all cursor-pointer overflow-hidden shadow-2xl red-glow-subtle"
              >
                <div className="absolute top-0 right-0 p-12 text-red-600/5 pointer-events-none group-hover:rotate-12 transition-transform duration-700">
                  <Pill size={240} />
                </div>
                
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                   <div className="space-y-6 flex-1">
                      <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/20 text-red-500 text-[10px] font-black uppercase tracking-widest">
                        Strategie Update Verfügbar
                      </div>
                      <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-tight">
                        Dein molekulares <br /> <span className="text-red-600 italic">Protokoll für Q2</span>
                      </h3>
                      <p className="text-zinc-500 text-lg font-medium leading-relaxed max-w-xl">
                        Basierend auf deinen aktuellen Biomarkern und Wearable-Metriken wurde dein Einnahme-Plan optimiert. Öffne die Strategie, um deine personalisierte Dosierung zu sehen.
                      </p>
                   </div>
                   <div className="flex-shrink-0">
                      <div className="w-24 h-24 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-all shadow-xl shadow-white/5 group-hover:scale-110 active:scale-95">
                         <ArrowRight size={40} />
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <AIChat />

            {/* Wearable Insights */}
            <div className="space-y-4">
              <div className="flex items-center justify-between px-2">
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Live Insights</h3>
                <Sparkles size={12} className="text-red-500" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <WearableInsightCard icon={<Footprints className="text-zinc-400" />} label="Schritte" value="13.1k" trend="+14%" isPositive={true} small />
                <WearableInsightCard icon={<Heart className="text-red-500" />} label="HRV" value="68ms" trend="+8" isPositive={true} small />
                <WearableInsightCard icon={<Timer className="text-orange-500" />} label="Load" value="510" trend="Peak" isPositive={true} small />
                <WearableInsightCard icon={<Moon className="text-blue-400" />} label="Sleep" value="88" trend="+3" isPositive={true} small />
              </div>
            </div>

            {/* Sync Sidebar Widget */}
            <div className="bg-zinc-900 rounded-[3rem] p-10 border border-white/5 space-y-8 inner-glow">
              <h3 className="font-black text-2xl text-white tracking-tighter">Live Sync Status</h3>
              <div className="space-y-4">
                 <SyncStatusItem icon={<Activity className="text-orange-500" />} name="Strava" time="Vor 5 Min." />
                 <SyncStatusItem icon={<Smartphone className="text-red-500" />} name="Apple Health" time="Live" />
              </div>
              <button onClick={() => onNavigate('user-profile')} className="w-full text-center text-[10px] font-black uppercase tracking-widest text-zinc-600 hover:text-white transition-colors">Integrationen verwalten →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WearableInsightCard: React.FC<{ icon: React.ReactNode, label: string, value: string, trend: string, isPositive: boolean, small?: boolean }> = ({ icon, label, value, trend, isPositive, small }) => (
  <div className={`bg-zinc-900/40 border border-white/5 ${small ? 'p-4 rounded-[2rem]' : 'p-6 rounded-[2.5rem]'} space-y-2 hover:bg-zinc-900 transition-all group`}>
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className={`${small ? 'w-6 h-6' : 'w-8 h-8'} rounded-lg bg-white/5 flex items-center justify-center scale-90`}>{icon}</div>
        <span className="text-[8px] font-black uppercase tracking-widest text-zinc-500">{label}</span>
      </div>
    </div>
    <div className="flex items-end justify-between gap-1">
      <p className={`${small ? 'text-xl' : 'text-3xl'} font-black text-white group-hover:scale-105 transition-transform origin-left`}>{value}</p>
      <span className={`text-[8px] font-black uppercase mb-1 ${isPositive ? 'text-green-500' : 'text-red-500'}`}>{trend}</span>
    </div>
  </div>
);

const SyncStatusItem: React.FC<{ icon: React.ReactNode, name: string, time: string }> = ({ icon, name, time }) => (
  <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10">
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center border border-white/5">{icon}</div>
      <span className="text-sm font-black text-white">{name}</span>
    </div>
    <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">{time}</span>
  </div>
);

const StatItem: React.FC<{ label: string; delta: string; status: string; isElite?: boolean }> = ({ label, delta, status, isElite }) => (
  <div className="text-center space-y-1">
    <p className="text-[10px] text-zinc-500 font-black uppercase tracking-[0.2em]">{label} Δ</p>
    <p className={`text-2xl font-black ${isElite ? 'text-red-500' : 'text-white'}`}>{delta}</p>
    <p className={`text-[8px] font-black tracking-widest ${isElite ? 'text-red-600' : 'text-zinc-700'}`}>{status}</p>
  </div>
);

export default UserDashboard;
