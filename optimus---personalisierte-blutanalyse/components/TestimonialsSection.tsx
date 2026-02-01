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
    <section className="py-20 px-6 relative bg-[#fcfcfc] border-y border-black/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-black/[0.03] text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-4">
            Member Feedback
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-3 text-[#333333]">
            Vertrauen durch <span className="text-red-600/60 italic">Ergebnisse</span>
          </h2>
          <p className="text-zinc-500 text-lg max-w-2xl font-medium leading-relaxed">
            Tausende von Optimierern nutzen bereits unsere Technologie, um ihre biologischen Limits neu zu definieren.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="group relative p-8 rounded-[2rem] bg-white border border-black/[0.03] hover:shadow-xl transition-all duration-500 medical-card-shadow"
            >
              <div className="absolute top-6 right-6 text-black/[0.02] group-hover:text-red-600/10 transition-colors">
                <Quote size={40} />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-red-600/60 text-red-600/20" />
                ))}
              </div>

              <p className="text-zinc-600 text-base mb-8 leading-relaxed font-medium">
                "{t.comment}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-zinc-100 group-hover:border-red-600/40 transition-colors">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
                <div>
                  <h4 className="font-bold text-[#333333] text-base leading-tight">{t.name}</h4>
                  <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest mt-0.5">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary badges */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-10 opacity-60">
          <div className="flex flex-col items-center">
             <span className="text-2xl font-black text-[#333333]">4.9/5</span>
             <span className="text-[8px] uppercase tracking-widest font-bold text-zinc-400">Google Rating</span>
          </div>
          <div className="flex flex-col items-center">
             <span className="text-2xl font-black text-[#333333]">TÜV</span>
             <span className="text-[8px] uppercase tracking-widest font-bold text-zinc-400">Zertifiziert</span>
          </div>
          <div className="flex flex-col items-center">
             <span className="text-2xl font-black text-[#333333]">100%</span>
             <span className="text-[8px] uppercase tracking-widest font-bold text-zinc-400">Datensicher</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;