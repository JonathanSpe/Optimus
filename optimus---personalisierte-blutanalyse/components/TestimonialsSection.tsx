import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  comment: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Lukas Weber",
    role: "Marathonläufer",
    comment: "Seit ich meine Eisenwerte durch Optimus optimiert habe, konnte ich meine Bestzeit um 4 Minuten steigern. Die schmerzfreie Abwicklung von zu Hause ist genial.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Sarah Lindner",
    role: "Unternehmerin & Biohackerin",
    comment: "Das Dashboard gibt mir endlich die Kontrolle über meine hormonelle Balance. Die KI-gestützten Empfehlungen sind präzise und wissenschaftlich fundiert.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Marc Jensen",
    role: "Crossfit-Athlet",
    comment: "Kein langes Warten beim Arzt mehr. Der Test kam per Post, 10 Minuten später war alles erledigt. Die Ergebnisse waren am nächsten Tag da. Weltklasse!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 px-6 relative bg-white border-y border-slate-100">
      <div className="medical-page-container">
        <div className="flex flex-col items-center text-center mb-14 space-y-4">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-500 text-[10px] font-black uppercase tracking-[0.26em] mb-1">
            Member Feedback
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[900] medical-heading-lg text-[#0F172A]">
            Vertrauen durch <br /> <span className="text-slate-900/40 italic font-[800]">Ergebnisse.</span>
          </h2>
          <p className="medical-copy text-base lg:text-lg max-w-2xl font-medium italic">
            Tausende von Optimierern nutzen bereits unsere Technologie, um ihre biologischen Limits neu zu definieren.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="group relative p-8 lg:p-9 rounded-[2.2rem] bg-white border border-slate-200 hover:border-slate-300 transition-all duration-500 medical-card-shadow"
            >
              <div className="absolute top-10 right-10 text-slate-50 group-hover:text-red-800/5 transition-colors duration-700">
                <Quote size={48} strokeWidth={3} />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-red-800 text-red-800/10" />
                ))}
              </div>

              <p className="text-slate-700 text-base mb-8 leading-relaxed font-semibold italic">
                "{t.comment}"
              </p>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-slate-50 group-hover:border-red-800/40 transition-all duration-700">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover grayscale brightness-[1.05] group-hover:grayscale-0 transition-all duration-1000" />
                </div>
                <div>
                  <h4 className="font-black text-[#0F172A] text-base leading-tight uppercase tracking-tight">{t.name}</h4>
                  <p className="text-slate-400 text-[9px] font-black uppercase tracking-[0.3em] mt-1">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary badges */}
        <div className="mt-14 pt-10 border-t border-slate-100 flex flex-wrap justify-center items-center gap-14 opacity-40">
          <div className="flex flex-col items-center">
             <span className="text-3xl font-[900] text-[#0F172A]">4.9/5</span>
             <span className="text-[8px] uppercase tracking-[0.4em] font-black text-slate-400 mt-1">Google Rating</span>
          </div>
          <div className="flex flex-col items-center">
             <span className="text-3xl font-[900] text-[#0F172A]">TÜV</span>
             <span className="text-[8px] uppercase tracking-[0.4em] font-black text-slate-400 mt-1">Süd Zertifiziert</span>
          </div>
          <div className="flex flex-col items-center">
             <span className="text-3xl font-[900] text-[#0F172A]">100%</span>
             <span className="text-[8px] uppercase tracking-[0.4em] font-black text-slate-400 mt-1">Datensicher</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;