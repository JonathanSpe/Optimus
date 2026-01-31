
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

const data = [
  { subject: 'Erholung', A: 85, fullMark: 100 },
  { subject: 'Athletik', A: 92, fullMark: 100 },
  { subject: 'Haut & Haare', A: 78, fullMark: 100 },
  { subject: 'Kognition', A: 88, fullMark: 100 },
  { subject: 'Hormone', A: 94, fullMark: 100 },
];

interface DashboardPreviewProps {
  lightTheme?: boolean;
  selectedCategory?: string;
  onSelectCategory?: (category: string) => void;
}

const ScoreItem: React.FC<{ 
  label: string; 
  score: number; 
  color?: string; 
  lightTheme?: boolean;
  isActive?: boolean;
  onClick?: () => void;
}> = ({ label, score, color = "bg-red-500", lightTheme, isActive, onClick }) => (
  <div 
    onClick={onClick}
    className={`flex items-center justify-between mb-5 p-3 rounded-2xl cursor-pointer transition-all duration-300 ${
      isActive ? (lightTheme ? 'bg-red-50 ring-1 ring-red-200' : 'bg-red-500/10 ring-1 ring-red-500/30') : 'hover:bg-white/5'
    }`}
  >
    <div className="flex flex-col">
      <span className={`${lightTheme ? 'text-zinc-500' : 'text-zinc-500'} text-[9px] font-black uppercase tracking-widest`}>{label}</span>
      <span className={`text-xl font-black ${lightTheme ? 'text-zinc-900' : 'text-white'}`}>{score}%</span>
    </div>
    <div className={`w-40 h-1.5 ${lightTheme ? 'bg-zinc-100' : 'bg-zinc-800'} rounded-full overflow-hidden`}>
      <div 
        className={`${isActive ? 'bg-red-500' : color} h-full transition-all duration-1000 shadow-[0_0_10px_rgba(239,68,68,0.3)]`} 
        style={{ width: `${score}%` }} 
      />
    </div>
  </div>
);

const DashboardPreview: React.FC<DashboardPreviewProps> = ({ 
  lightTheme = false, 
  selectedCategory = 'Athletik',
  onSelectCategory 
}) => {
  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h3 className={`text-3xl font-black tracking-tighter ${lightTheme ? 'text-zinc-900' : 'text-white'}`}>Performance Radar</h3>
          <p className="text-zinc-500 text-xs font-medium italic">Klicke auf eine Kategorie für Details.</p>
        </div>
        <div className="px-5 py-2 rounded-2xl bg-green-500/10 border border-green-500/30 text-green-600 text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-green-500/5">
          Optimal
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="h-[300px] w-full relative group">
          <div className="absolute inset-0 bg-red-600/5 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity" />
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
              <PolarGrid stroke={lightTheme ? "#e4e4e7" : "#27272a"} strokeOpacity={0.5} />
              <PolarAngleAxis 
                dataKey="subject" 
                onClick={(tick) => onSelectCategory?.(tick.value)}
                tick={(props) => {
                  const { x, y, payload } = props;
                  const isActive = payload.value === selectedCategory;
                  return (
                    <g transform={`translate(${x},${y})`}>
                      <text
                        x={0}
                        y={0}
                        dy={isActive ? 0 : 4}
                        textAnchor="middle"
                        fill={isActive ? '#ef4444' : (lightTheme ? '#71717a' : '#a1a1aa')}
                        fontSize={isActive ? 12 : 10}
                        fontWeight="900"
                        style={{ cursor: 'pointer', textTransform: 'uppercase', transition: 'all 0.3s ease' }}
                        className={isActive ? 'animate-pulse' : ''}
                        onClick={() => onSelectCategory?.(payload.value)}
                      >
                        {payload.value}
                      </text>
                    </g>
                  );
                }}
              />
              <Radar
                name="Performance"
                dataKey="A"
                stroke="#ef4444"
                strokeWidth={3}
                fill="#ef4444"
                fillOpacity={0.3}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <div className={`${lightTheme ? 'bg-zinc-50/50' : 'bg-white/[0.02]'} rounded-[2.5rem] p-8 border ${lightTheme ? 'border-zinc-100' : 'border-white/5'} inner-glow`}>
          <ScoreItem 
            label="Erholung" 
            score={85} 
            lightTheme={lightTheme} 
            isActive={selectedCategory === 'Erholung'} 
            onClick={() => onSelectCategory?.('Erholung')}
          />
          <ScoreItem 
            label="Athletik" 
            score={92} 
            lightTheme={lightTheme} 
            isActive={selectedCategory === 'Athletik'} 
            onClick={() => onSelectCategory?.('Athletik')}
          />
          <ScoreItem 
            label="Haut & Haare" 
            score={78} 
            color="bg-zinc-400" 
            lightTheme={lightTheme} 
            isActive={selectedCategory === 'Haut & Haare'} 
            onClick={() => onSelectCategory?.('Haut & Haare')}
          />
          <ScoreItem 
            label="Kognition" 
            score={88} 
            lightTheme={lightTheme} 
            isActive={selectedCategory === 'Kognition'} 
            onClick={() => onSelectCategory?.('Kognition')}
          />
          <ScoreItem 
            label="Hormone" 
            score={94} 
            lightTheme={lightTheme} 
            isActive={selectedCategory === 'Hormone'} 
            onClick={() => onSelectCategory?.('Hormone')}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardPreview;
