
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
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold tracking-widest uppercase mb-6">
            Rezensionen
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
            Vertrauen durch <span className="text-red-500 italic">Ergebnisse</span>
          </h2>
          <p className="text-zinc-500 text-lg max-w-2xl">
            Tausende von Optimierern nutzen bereits unsere Technologie, um ihre biologischen Limits neu zu definieren.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="group relative p-8 rounded-[2.5rem] bg-glass border border-white/5 hover:border-red-500/30 transition-all duration-500"
            >
              <div className="absolute top-8 right-8 text-white/5 group-hover:text-red-500/10 transition-colors">
                <Quote size={48} />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-red-500 text-red-500" />
                ))}
              </div>

              <p className="text-zinc-300 text-lg mb-8 leading-relaxed italic">
                "{t.comment}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-red-500/50 transition-colors">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">{t.name}</h4>
                  <p className="text-zinc-500 text-sm font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badge / Summary */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
          <div className="flex flex-col items-center">
             <span className="text-3xl font-black text-white">4.9/5</span>
             <span className="text-xs uppercase tracking-widest font-bold text-zinc-500">Google Rating</span>
          </div>
          <div className="flex flex-col items-center">
             <span className="text-3xl font-black text-white">TÜV</span>
             <span className="text-xs uppercase tracking-widest font-bold text-zinc-500">Zertifiziert</span>
          </div>
          <div className="flex flex-col items-center">
             <span className="text-3xl font-black text-white">100%</span>
             <span className="text-xs uppercase tracking-widest font-bold text-zinc-500">Datensicher</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
