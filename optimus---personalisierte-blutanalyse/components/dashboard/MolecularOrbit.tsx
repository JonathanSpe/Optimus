
import React, { useMemo } from 'react';
import { categoryData } from './DashboardData';

interface MolecularOrbitProps {
  categories: string[];
  selectedKey: string;
  onSelect: (key: string) => void;
}

export const MolecularOrbit: React.FC<MolecularOrbitProps> = ({ categories, selectedKey, onSelect }) => {
  const labelOverrides: Record<string, string> = {
    Sports: 'Athletics',
    'Hair & Skin': 'Dremis',
    Cognition: 'Cognition',
    Recovery: 'Reccovery',
  };

  const displayCategoryLabel = (key: string) => labelOverrides[key] ?? categoryData[key]?.label ?? key;

  const navigationOrder = useMemo(() => {
    const preferred = ['Sports', 'Hair & Skin', 'Cognition', 'Recovery'];
    return preferred.filter((key) => categories.includes(key));
  }, [categories]);

  const selectedData = categoryData[selectedKey];
  const activeCategoryLabel = displayCategoryLabel(selectedKey);

  const visibleMarkers = useMemo(
    () =>
      selectedData.markers.map((marker) => ({
        ...marker,
        linkedLabels: marker.categories
          .map((cat) => displayCategoryLabel(cat))
          .filter(Boolean)
          .slice(0, 3),
      })),
    [selectedData]
  );

  const DonutScore = ({ value, active }: { value: number; active: boolean }) => {
    const clamped = Math.max(0, Math.min(100, value));
    const radius = 18;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference * (1 - clamped / 100);
    const stroke = '#991B1B';

    return (
      <svg width={44} height={44} viewBox="0 0 44 44" className="shrink-0">
        <circle cx="22" cy="22" r={radius} stroke="#E2E8F0" strokeWidth="3" fill="none" />
        <circle
          cx="22"
          cy="22"
          r={radius}
          stroke={stroke}
          strokeWidth="3"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 22 22)"
          style={{ opacity: active ? 1 : 0.25 }}
        />
        <text
          x="22"
          y="25"
          textAnchor="middle"
          fill={active ? '#0F172A' : '#94A3B8'}
          fontSize="10px"
          fontWeight="900"
          fontFamily="JetBrains Mono, ui-monospace, monospace"
        >
          {clamped}
        </text>
      </svg>
    );
  };

  return (
    <div className="relative w-full h-full bg-white overflow-hidden p-6 md:p-8">
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#000 0.5px, transparent 0.5px), linear-gradient(90deg, #000 0.5px, transparent 0.5px)',
          backgroundSize: '16px 16px',
        }}
      />

      <div className="relative z-10 space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-slate-100/90 border border-slate-200 rounded-2xl p-2">
          {navigationOrder.map((catKey) => {
            const data = categoryData[catKey];
            const active = selectedKey === catKey;
            return (
              <button
                key={catKey}
                onClick={() => onSelect(catKey)}
                className={`py-3 px-3 rounded-xl border transition-all text-left ${
                  active
                    ? 'bg-white border-red-800/20 shadow-sm'
                    : 'bg-slate-50/70 border-transparent hover:bg-white hover:border-slate-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <DonutScore value={data.score} active={active} />
                  <div className="min-w-0">
                    <div className={`text-[10px] font-black uppercase tracking-[0.2em] ${active ? 'text-red-800' : 'text-slate-500'}`}>
                      {displayCategoryLabel(catKey)}
                    </div>
                    <div className="mt-0.5 text-[9px] font-black uppercase tracking-widest text-slate-400">
                      Index
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-b from-white to-slate-50/40 p-5 md:p-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-5">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Category Biomarker Mapping</p>
              <h3 className="text-2xl font-black tracking-tight text-slate-900">
                {displayCategoryLabel(selectedKey)} <span className="text-slate-300 italic">Biomarker Set</span>
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
            {visibleMarkers.map((marker) => (
              <div key={marker.name} className="rounded-2xl border border-slate-200 bg-white p-4 space-y-3 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[12px] font-black uppercase tracking-tight text-slate-900">{marker.name}</p>
                    <p className="text-[10px] text-slate-500 font-bold">{marker.value} {marker.unit}</p>
                  </div>
                  <span className="text-[8px] font-black uppercase tracking-widest text-red-800 bg-red-50 border border-red-100 px-2 py-1 rounded-md">
                    {marker.status}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {marker.linkedLabels.map((label) => (
                    <span
                      key={label}
                      className={`text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-md border ${
                        label === activeCategoryLabel
                          ? 'text-red-800 bg-red-50 border-red-100'
                          : 'text-slate-500 bg-slate-50 border-slate-200'
                      }`}
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
