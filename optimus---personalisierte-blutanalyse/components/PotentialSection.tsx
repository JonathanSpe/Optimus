
import React, { useState } from 'react';
import DashboardPreview from './DashboardPreview';

const PotentialSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Athletik');

  return (
    <section className="py-20 lg:py-24 px-6 bg-[#F8FAFC] text-[#0F172A] relative overflow-hidden border-y border-slate-100">
      <div className="medical-page-container flex flex-col lg:flex-row items-center gap-14 lg:gap-20 relative z-10">
        <div className="flex-1 space-y-8 order-2 lg:order-1">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-3">
              <div className="w-10 h-[1.5px] bg-red-800"></div>
              <span className="medical-eyebrow text-red-800">Dein Potential</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-[900] medical-heading-lg text-[#0F172A]">
              Deine Gesundheit, <br />
              Deine Ziele, <br />
              <span className="text-slate-400 italic font-[800]">Dein Vorsprung.</span>
            </h2>
            <div className="space-y-4 pt-3">
              <FeatureItem title="Lifestyle-Analyse" desc="Individuelle Abstimmung auf deine persönlichen Interessen und Performance-Ziele." />
              <FeatureItem title="Wearable-Integration" desc="Nahtlose Synchronisation deiner Daten von Apple Health, Strava und Garmin." />
              <FeatureItem title="Personalisierte Empfehlungen" desc="KI-gestützte Supplement-Protokolle für deine tägliche molekulare Bestform." />
              <FeatureItem title="Daily-Rationen" desc="Deine maßgeschneiderten Nährstoffe in praktischen Tages-Sachets – fertig dosiert." />
            </div>
          </div>

          <button className="medical-btn medical-btn-primary px-8 py-4 normal-case tracking-normal text-base font-black">
            Wissenschaft entdecken
          </button>
        </div>

        <div className="flex-1 order-1 lg:order-2 w-full">
           <div className="relative p-2 rounded-[3rem] bg-white shadow-[0_24px_54px_-30px_rgba(0,0,0,0.15)] border border-slate-200 overflow-hidden group">
              <div className="p-4 md:p-7 lg:p-10">
                <DashboardPreview 
                  lightTheme={true} 
                  selectedCategory={selectedCategory} 
                  onSelectCategory={setSelectedCategory} 
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-red-800/5 blur-3xl rounded-full"></div>
              
              {/* Floating Badge for interactivity hint */}
              <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md border border-slate-200 px-4 py-2 rounded-xl shadow-sm hidden md:block">
                <span className="text-[9px] font-black uppercase tracking-widest text-red-800">Interaktive Analyse</span>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

const FeatureItem: React.FC<{ title: string; desc: string }> = ({ title, desc }) => (
  <div className="flex items-start gap-4 group">
    <div className="mt-1.5 w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 group-hover:border-red-800 transition-colors duration-500">
      <div className="w-1.5 h-1.5 bg-red-800/40 rounded-full" />
    </div>
    <p className="text-base text-slate-500 font-medium leading-snug">
      <span className="text-[#0F172A] font-black uppercase text-sm tracking-tight">{title}:</span> {desc}
    </p>
  </div>
);

export default PotentialSection;
