
import React from 'react';
import { ArrowRight, PlayCircle, ShieldCheck, Activity, Heart, Smartphone, Award, FlaskConical } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: any) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative pt-48 pb-12 px-6 overflow-hidden">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-red-900/5 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24 mb-24">
          <div className="flex-1 space-y-12 z-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-black tracking-[0.3em] uppercase shadow-lg shadow-red-600/5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                Innovation: Molecular Intelligence
              </div>
              
              <h1 className="text-7xl lg:text-[10rem] font-black tracking-tighter leading-[0.75] text-white text-balance">
                Was steckt <br /> <span className="text-red-600 italic">wirklich</span> <br /> in dir?
              </h1>
            </div>
            
            <div className="space-y-8 max-w-xl">
              <p className="text-2xl md:text-3xl text-zinc-200 font-black tracking-tight leading-tight">
                Hole das Maximum aus Alltag, Job und Sport heraus.
              </p>
              <p className="text-zinc-500 text-lg font-medium leading-relaxed">
                Für Vitalität und hormonelle Balance. Dein erster Bluttest: Schmerzfrei, digital und von Zuhause — <span className="text-white font-black underline decoration-red-600 decoration-4 underline-offset-8">ab 29 Euro</span>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <button className="flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white px-12 py-5 rounded-[2rem] font-black text-xl transition-all transform hover:scale-[1.02] shadow-2xl shadow-red-600/40 active:scale-95 group">
                Analyse Starten <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => onNavigate('how-it-works')}
                className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white px-10 py-5 rounded-[2rem] font-black text-lg transition-all"
              >
                <PlayCircle className="w-5 h-5 text-red-500" /> Demo ansehen
              </button>
            </div>

            <div className="flex items-center gap-10 pt-4 opacity-40 hover:opacity-100 transition-opacity">
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-400">
                <ShieldCheck size={16} className="text-red-500" /> DSGVO Konform
              </div>
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-400">
                <ShieldCheck size={16} className="text-red-500" /> ISO Zertifiziert
              </div>
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-400">
                <ShieldCheck size={16} className="text-red-500" /> Made in Germany
              </div>
            </div>
          </div>

          <div className="flex-1 relative w-full max-w-2xl lg:max-w-none">
            <div className="absolute -top-10 -left-10 z-20 bg-black/60 backdrop-blur-xl border border-white/10 p-4 rounded-3xl shadow-2xl animate-bounce-slow hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-red-600/20 rounded-2xl text-red-500">
                  <Heart size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">HRV Level</p>
                  <p className="text-lg font-black text-white">68ms <span className="text-green-500 text-xs">+12%</span></p>
                </div>
              </div>
            </div>

            <div className="relative group p-1.5 rounded-[3.5rem] bg-gradient-to-br from-white/10 via-transparent to-red-600/10 shadow-2xl">
              <div className="relative rounded-[3.4rem] overflow-hidden border border-white/5 bg-zinc-950 aspect-[4/5] shadow-2xl inner-glow">
                <img 
                  src="input_file_0.png" 
                  alt="Optimus Bio-Hacking Device" 
                  className="w-full h-full object-cover grayscale brightness-[0.7] group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[1500ms] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[3rem] group-hover:border-red-500/30 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Smartphone size={12} className="text-red-500" />
                        <p className="text-[10px] text-zinc-400 font-black uppercase tracking-widest">Molecular Scanner</p>
                      </div>
                      <p className="text-3xl font-black text-white tracking-tighter uppercase italic">Optimus <span className="text-red-600">P1</span></p>
                    </div>
                    <div className="h-16 w-16 rounded-[1.5rem] bg-red-600/10 flex items-center justify-center border border-red-500/20 group-hover:bg-red-600/20 transition-all">
                      <div className="h-4 w-4 bg-red-500 rounded-full animate-ping shadow-[0_0_20px_#ef4444]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clinical Partners / Trust Leiste */}
        <div className="pt-12 border-t border-white/5 flex flex-wrap justify-center md:justify-between items-center gap-12 grayscale opacity-40 hover:opacity-100 transition-all duration-500">
           <div className="flex items-center gap-3">
             <FlaskConical className="text-white" size={20} />
             <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Partnerlabore Berlin/München</span>
           </div>
           <div className="flex items-center gap-3">
             <Award className="text-white" size={20} />
             <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">ISO 15189 Zertifiziert</span>
           </div>
           <div className="flex items-center gap-3">
             <ShieldCheck className="text-white" size={20} />
             <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Ärztlich Validiert</span>
           </div>
           <div className="flex items-center gap-3">
             <Activity className="text-white" size={20} />
             <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Diagnostik Goldstandard</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
