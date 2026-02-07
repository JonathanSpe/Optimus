
import React, { useState, useMemo } from 'react';
import { DashboardHeader } from './dashboard/DashboardHeader';
import { MolecularOrbit } from './dashboard/MolecularOrbit';
import { AnalysisPanel } from './dashboard/AnalysisPanel';
import { SidebarHub } from './dashboard/SidebarHub';
import { categoryData } from './dashboard/DashboardData';
import { Activity, HeartPulse, ShieldAlert } from 'lucide-react';

const SummarySidebar: React.FC = () => (
  <div className="flex flex-col gap-4">
    {/* Clinical Delta Card */}
    <div className="bg-white p-10 rounded-[3rem] border border-slate-200 medical-card-shadow space-y-8 relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-red-800 pointer-events-none group-hover:scale-110 transition-transform duration-700">
        <HeartPulse size={120} />
      </div>
      <div className="flex items-center justify-between relative z-10">
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Biological Delta</span>
        <div className="px-2 py-1 bg-emerald-50 border border-emerald-100 rounded-lg text-[8px] font-black text-emerald-600 uppercase tracking-widest">Optimal</div>
      </div>
      <div className="flex items-baseline gap-3 relative z-10">
        <span className="text-7xl font-black tracking-tighter text-slate-900 leading-none font-mono-data">29</span>
        <span className="text-emerald-500 font-black text-lg uppercase tracking-widest">-3.2Y</span>
      </div>
      <div className="space-y-4 relative z-10">
        <p className="text-[12px] font-medium text-slate-500 leading-relaxed italic border-l-2 border-slate-100 pl-5">
          Epigenetic methylation analysis suggests a physiological aging rate significantly below chronological norm.
        </p>
        <button className="text-[9px] font-black uppercase tracking-widest text-slate-300 hover:text-slate-900 transition-colors">View Epigenetic Mapping</button>
      </div>
    </div>

    {/* Overall Status Score */}
    <div className="bg-[#0f172a] p-10 rounded-[3rem] border border-white/5 text-white space-y-8 relative overflow-hidden group shadow-2xl">
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-red-800/10 blur-[60px] rounded-full group-hover:bg-red-800/20 transition-all" />
      <div className="flex items-center justify-between relative z-10">
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60">Overall Status Score</span>
        <Activity size={18} className="text-white/20" />
      </div>
      <div className="flex items-baseline gap-2 relative z-10">
        <span className="text-7xl font-mono-data font-black text-white tracking-tighter leading-none">91</span>
        <span className="text-white text-2xl font-black">%</span>
      </div>
      <div className="pt-6 border-t border-white/10 space-y-4 relative z-10">
        <p className="text-[11px] font-bold text-white/80 uppercase tracking-widest leading-relaxed">System status: High performance ready. HPG axis optimized.</p>
        <button className="w-full py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest text-white/80 hover:bg-white hover:text-slate-900 transition-all">
          View Neural Profile
        </button>
      </div>
    </div>
  </div>
);

const UserDashboard: React.FC<{ onNavigate: (page: any) => void }> = ({ onNavigate }) => {
  const [selectedKey, setSelectedKey] = useState<string>('Sports');
  const activeData = categoryData[selectedKey];
  const categories = useMemo(() => Object.keys(categoryData), []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-28 pb-20 px-8">
      <div className="max-w-7xl mx-auto space-y-6">
        
        <DashboardHeader />

        {/* Primary Analytical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Visual Anchor */}
          <div className="lg:col-span-8 bg-white rounded-[3.5rem] border border-slate-200 medical-card-shadow overflow-hidden relative group">
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1.5px, transparent 0)', backgroundSize: '32px 32px' }} />
            <MolecularOrbit 
              categories={categories} 
              selectedKey={selectedKey} 
              onSelect={setSelectedKey} 
            />
          </div>

          {/* Right Summary Column */}
          <div className="lg:col-span-4">
            <SummarySidebar />
          </div>
        </div>

        {/* Detailed Secondary Information Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <AnalysisPanel activeData={activeData} onNavigate={onNavigate} />
          <SidebarHub />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
