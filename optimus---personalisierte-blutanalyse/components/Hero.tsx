import React, { useState, useEffect } from 'react';
import { ArrowRight, PlayCircle, ShieldCheck, Smartphone } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: any) => void;
}

const slides = [
  {
    url: 'https://raw.githubusercontent.com/JonathanSpe/Optimus/main/optimus---personalisierte-blutanalyse/assets/Athlete%20Apartment.png',
    duration: 1200,
    label: 'Lifestyle & Recovery'
  },
  {
    url: 'https://raw.githubusercontent.com/JonathanSpe/Optimus/main/optimus---personalisierte-blutanalyse/assets/athlete%20sports.png',
    duration: 1200,
    label: 'Performance'
  },
  {
    url: 'https://raw.githubusercontent.com/JonathanSpe/Optimus/main/optimus---personalisierte-blutanalyse/assets/Optimus%20Tasso.jpg',
    duration: 1200,
    label: 'Measurement'
  },
  {
    url: 'https://raw.githubusercontent.com/JonathanSpe/Optimus/main/optimus---personalisierte-blutanalyse/assets/Athlete%20results.jpg',
    duration: 3000,
    label: 'Optimization'
  }
];

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, slides[activeIndex].duration);

    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <section className="relative pt-36 pb-24 px-6 overflow-hidden bg-[#F8FAFC]">
      {/* Decorative Refined Blur */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-red-800/[0.015] blur-[180px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-slate-200/20 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left Side: Content */}
          <div className="flex-1 space-y-12 z-10 text-center lg:text-left">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-red-800/[0.03] border border-red-800/10 text-red-800 text-[11px] font-extrabold tracking-[0.25em] uppercase">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-800"></span>
                </span>
                Molecular Intelligence
              </div>
              
              <h1 className="text-6xl lg:text-[7.8rem] font-[900] tracking-[-0.05em] leading-[0.82] text-[#0F172A] text-balance">
                Was steckt <br /> <span className="text-red-800 italic font-[800]">wirklich</span> <br /> <span className="text-slate-400/50">in dir?</span>
              </h1>
            </div>
            
            <div className="space-y-8 max-w-xl mx-auto lg:mx-0">
              <p className="text-2xl md:text-3xl text-slate-900 font-extrabold tracking-tight leading-tight">
                Hole das Maximum aus Alltag, Job und Sport heraus.
              </p>
              <p className="text-slate-600 text-xl font-medium leading-relaxed">
                Für Vitalität und hormonelle Balance. Dein erster Bluttest: Schmerzfrei, digital und von Zuhause — <span className="text-[#0F172A] font-extrabold underline decoration-red-800/[0.2] decoration-4 underline-offset-8">ab 29 Euro</span>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <button className="flex items-center justify-center gap-4 bg-[#0F172A] hover:bg-black text-white px-12 py-5 rounded-[1.5rem] font-bold text-xl transition-all shadow-2xl active:scale-95 group shadow-slate-900/10 btn-medical">
                Analyse Starten <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </button>
              <button 
                onClick={() => onNavigate('how-it-works')}
                className="flex items-center justify-center gap-4 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-900 px-10 py-5 rounded-[1.5rem] font-bold text-lg transition-all shadow-sm btn-medical"
              >
                <PlayCircle className="w-6 h-6 text-red-800" /> Demo ansehen
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-10 pt-4 opacity-80">
              <div className="flex items-center gap-2.5 text-[11px] font-extrabold uppercase tracking-[0.15em] text-slate-500">
                <ShieldCheck size={16} className="text-red-800" /> DSGVO Konform
              </div>
              <div className="flex items-center gap-2.5 text-[11px] font-extrabold uppercase tracking-[0.15em] text-slate-500">
                <ShieldCheck size={16} className="text-red-800" /> ISO Zertifiziert
              </div>
            </div>
          </div>

          {/* Right Side: Storytelling Slideshow */}
          <div className="flex-1 relative w-full max-w-2xl lg:max-w-none">
            <div className="relative w-full aspect-[4/5] rounded-[4rem] overflow-hidden shadow-[0_32px_128px_-20px_rgba(0,0,0,0.12)] border border-slate-100 bg-white">
              <div className="absolute inset-0 z-0">
                {slides.map((slide, index) => (
                  <div
                    key={slide.url}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      index === activeIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img 
                      src={slide.url} 
                      alt={slide.label} 
                      className={`w-full h-full object-cover grayscale brightness-[1.02] transition-transform duration-[6000ms] ease-out ${
                        index === activeIndex ? 'scale-105' : 'scale-100'
                      }`}
                    />
                  </div>
                ))}
              </div>

              {/* Overlay Glass UI for Context */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent opacity-90 pointer-events-none" />
              
              <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/50 backdrop-blur-2xl border border-white/30 rounded-[2.5rem] shadow-xl z-10 transition-all duration-700">
                <div className="flex items-center justify-between">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2.5">
                      <Smartphone size={12} className="text-red-800" />
                      <p className="text-[10px] text-slate-600 font-extrabold uppercase tracking-[0.2em]">Molecular System</p>
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-3xl font-[900] text-slate-900 tracking-tighter uppercase italic transition-all duration-500 transform">
                        {activeIndex === 3 ? (
                          <>Optimus <span className="text-red-800">Results</span></>
                        ) : activeIndex === 2 ? (
                          <>Optimus <span className="text-red-800">Tasso</span></>
                        ) : (
                          <>Optimus <span className="text-red-800">Health</span></>
                        )}
                      </p>
                    </div>
                  </div>
                  
                  {/* Progress Indicator */}
                  <div className="flex gap-1.5 items-center">
                    {slides.map((_, i) => (
                      <div 
                        key={i} 
                        className={`h-1 rounded-full transition-all duration-700 ${
                          i === activeIndex ? 'w-6 bg-red-800' : 'w-2 bg-slate-300'
                        }`} 
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;