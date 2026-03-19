
import React from 'react';
import { Microscope, ArrowRight, TrendingUp, TrendingDown, Activity, FileSearch, LineChart, Zap } from 'lucide-react';
import { ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, ComposedChart, Line, Area, Bar } from 'recharts';
import { CategoryData } from './DashboardTypes';

interface AnalysisPanelProps {
  activeData: CategoryData;
  onNavigate: (page: any) => void;
}

// Enhanced custom label component with a more "instrument" look
const BiomarkerLabel = (props: any) => {
  const { x, y, stroke, index, data, name } = props;
  
  if (index !== data.length - 1) return null;

  return (
    <g transform={`translate(${x + 12}, ${y})`}>
      <rect 
        x={-2} 
        y={-7} 
        width={name.length * 5 + 10} 
        height={14} 
        rx={4} 
        fill="white" 
        className="shadow-sm"
        stroke={stroke}
        strokeWidth={0.5}
        fillOpacity={0.9}
      />
      <text 
        fill={stroke} 
        fontSize={7} 
        fontWeight="900" 
        className="uppercase tracking-[0.1em] font-mono-data"
        dominantBaseline="middle"
      >
        {name}
      </text>
    </g>
  );
};

const EvolutionTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0f172a] p-5 border border-white/10 shadow-2xl font-mono-data rounded-xl">
        <p className="text-[10px] text-white/40 mb-4 uppercase tracking-[0.2em] border-b border-white/5 pb-2">{label} Analytics</p>
        <div className="space-y-2">
          {payload.map((p: any, i: number) => (
            <div key={i} className="flex justify-between gap-12 items-center">
              <span className="text-[9px] text-white/60 uppercase tracking-tighter">{p.name === 'Index Path' ? 'Category Index' : p.name}:</span>
              <span className={`text-[11px] font-bold ${p.name === 'Index Path' ? 'text-red-500' : p.name === 'External Load' ? 'text-slate-400' : 'text-white'}`}>{p.value}%</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

export const AnalysisPanel: React.FC<AnalysisPanelProps> = ({ activeData, onNavigate }) => {
  const activeMarkers = activeData.markers;
  // Professional medical palette for distinct biomarkers
  const chartColors = ['#6366f1', '#10b981', '#f59e0b', '#ec4899'];

  return (
    <div className="lg:col-span-8 space-y-4">
      
      {/* 1. DOMAIN EVOLUTION CHART (LAB + STRAVA CORRELATION) */}
      <div className="bg-white rounded-[2.5rem] p-10 border border-slate-200 medical-card-shadow">
        <div className="flex justify-between items-start mb-12">
          <div className="space-y-1">
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 leading-none">Load vs. Molecular Performance</h3>
            <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900 leading-none">
              {activeData.label} <span className="text-slate-200 italic font-black">Evolution</span>
            </h2>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 px-6 py-3 rounded-2xl border border-slate-100">
             <div className="text-right">
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none block mb-1">Current Index</span>
                <span className="text-3xl font-mono-data font-black text-red-800 leading-none">{activeData.score}%</span>
             </div>
             <div className="w-px h-10 bg-slate-200 mx-2" />
             <Activity className="text-red-800 opacity-20" size={24} />
          </div>
        </div>

        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart 
              data={activeData.trendHistory} 
              margin={{ top: 10, right: 85, bottom: 40, left: -20 }}
            >
              <defs>
                <filter id="shadow" height="200%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
                  <feOffset in="blur" dx="0" dy="4" result="offsetBlur" />
                  <feFlood floodColor="#991B1B" floodOpacity="0.2" result="offsetColor" />
                  <feComposite in="offsetColor" in2="offsetBlur" operator="in" result="shadowWithColor" />
                  <feMerge>
                    <feMergeNode in="shadowWithColor" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <linearGradient id="mainScoreGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#991B1B" stopOpacity={0.06}/>
                  <stop offset="95%" stopColor="#991B1B" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="stravaLoadGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#CBD5E1" stopOpacity={0.15}/>
                  <stop offset="95%" stopColor="#CBD5E1" stopOpacity={0.05}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="12 12" stroke="#F1F5F9" vertical={false} />
              <XAxis 
                dataKey="period" 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#94A3B8', fontSize: 11, fontWeight: 800}} 
                dy={15} 
              />
              <YAxis 
                yAxisId="left"
                domain={[0, 100]} 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#94A3B8', fontSize: 10, fontWeight: 500}} 
              />
              <YAxis 
                yAxisId="right"
                orientation="right"
                domain={[0, 100]} 
                axisLine={false} 
                tickLine={false} 
                hide
              />
              <Tooltip content={<EvolutionTooltip />} cursor={{ stroke: '#F1F5F9', strokeWidth: 1.5 }} />
              
              <Bar yAxisId="right" dataKey="stravaLoad" name="External Load" fill="url(#stravaLoadGrad)" radius={[10, 10, 0, 0]} barSize={55} />
              <Area yAxisId="left" type="monotone" dataKey="score" name="Index Path" stroke="none" fill="url(#mainScoreGrad)" />
              
              {/* Main Aggregate Line - Category Index */}
              <Line 
                yAxisId="left"
                type="monotone" 
                dataKey="score" 
                name="Index Path" 
                stroke="#991B1B" 
                strokeWidth={5} 
                filter="url(#shadow)"
                dot={{ r: 7, fill: '#991B1B', strokeWidth: 4, stroke: 'white' }} 
                activeDot={{ r: 10, strokeWidth: 0 }}
              />

              {/* Individual Biomarker Lines with Labels */}
              {activeMarkers.map((m, idx) => {
                const color = chartColors[idx % chartColors.length];
                return (
                  <Line 
                    yAxisId="left"
                    key={m.dataKey}
                    type="monotone" 
                    dataKey={m.dataKey} 
                    name={m.name}
                    stroke={color} 
                    strokeWidth={2.5}
                    strokeDasharray="6 4"
                    dot={false}
                    opacity={0.6}
                    label={<BiomarkerLabel name={m.name} data={activeData.trendHistory} />}
                  />
                );
              })}
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* Chart Legend */}
        <div className="mt-8 flex flex-wrap gap-10 border-t border-slate-50 pt-10">
           <div className="flex items-center gap-3">
              <div className="w-10 h-2 bg-red-800 rounded-full shadow-sm" />
              <span className="text-[10px] font-black uppercase text-slate-900 tracking-widest">Category Index (Aggregated)</span>
           </div>
           <div className="flex items-center gap-3">
              <div className="w-10 h-3 bg-slate-200/60 rounded-sm border border-slate-100" />
              <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Strava External Load</span>
           </div>
           <div className="flex items-center gap-4 border-l border-slate-100 pl-10">
              <span className="text-[9px] font-black uppercase text-slate-300 tracking-widest">Biomarkers:</span>
              <div className="flex gap-2">
                {activeMarkers.map((m, idx) => (
                  <div key={idx} className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: chartColors[idx % chartColors.length] }} />
                ))}
              </div>
           </div>
        </div>
      </div>

      {/* 2. CLINICAL ANALYSIS PANEL (SPRINTS) */}
      <div className="bg-[#0f172a] rounded-[3rem] p-12 text-white relative overflow-hidden group shadow-2xl border border-white/5">
        <div className="absolute top-0 right-0 p-16 opacity-[0.03] text-white pointer-events-none group-hover:rotate-6 transition-transform duration-[2s]">
           <LineChart size={280} />
        </div>
        
        <div className="relative z-10 flex flex-col md:flex-row gap-16">
          <div className="flex-1 space-y-10">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-red-700 shadow-inner">
                 <Microscope size={32} strokeWidth={1.5} />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/30 block">Diagnostic Narrative</span>
                <h4 className="text-2xl font-black uppercase italic tracking-tight">{activeData.label} <span className="text-white/20">Protocol Path</span></h4>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
               {activeData.sprints.map((sprint, i) => (
                 <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2 group/sprint hover:border-white/20 transition-all">
                    <div className="flex justify-between items-center">
                       <span className="text-[9px] font-black text-white/30 uppercase tracking-widest">{sprint.label}</span>
                       <Zap size={10} className={sprint.impact === 'pos' ? 'text-emerald-500' : 'text-slate-500'} />
                    </div>
                    <p className="text-sm font-black font-mono-data tracking-tight">{sprint.value}</p>
                 </div>
               ))}
            </div>

            <div className="space-y-6">
               <div className="relative">
                 <div className="absolute -left-10 top-0 w-1.5 h-full bg-red-800/40 rounded-full" />
                 <p className="text-xl font-medium italic text-slate-200 leading-relaxed font-serif">
                   "{activeData.detailedAnalysis}"
                 </p>
               </div>
               
               <div className="flex flex-wrap items-center gap-8 pl-0">
                  <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-white/40">
                    Confidence: 99.4%
                  </div>
                  <button className="text-[10px] font-black text-red-800 uppercase tracking-[0.2em] hover:text-white transition-colors flex items-center gap-2 group/btn">
                     <FileSearch size={14} className="group-hover/btn:scale-110 transition-transform" /> Evidence Citations
                  </button>
               </div>
            </div>
          </div>

          <div className="md:w-72 flex flex-col justify-between border-l border-white/5 pl-12 shrink-0 self-stretch py-4">
             <div className="space-y-2 text-right">
                <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.5em] block">Domain Quotient</span>
                <div className="flex items-baseline justify-end gap-1">
                  <span className="text-8xl font-mono-data font-black tracking-tighter">{activeData.score}</span>
                  <span className="text-red-700 text-3xl font-black">%</span>
                </div>
             </div>
             
             <div className="space-y-6 pt-12">
                <button 
                  onClick={() => onNavigate('recommendations')}
                  className="w-full bg-white text-[#0f172a] py-6 rounded-[1.5rem] font-black text-[13px] uppercase tracking-[0.3em] shadow-xl hover:bg-slate-100 transition-all active:scale-95 flex items-center justify-center gap-4"
                >
                  Action Protocol <ArrowRight size={18} />
                </button>
                <p className="text-[9px] text-center text-white/20 font-black uppercase tracking-widest">Signed: Dr. Christian Hering</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
