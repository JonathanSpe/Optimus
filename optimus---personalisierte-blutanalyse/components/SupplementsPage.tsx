
import React, { useState } from 'react';
import { ShoppingCart, Star, ShieldCheck, Zap, HeartPulse, Info, ChevronRight, Filter, ArrowRight, Fingerprint, Box, Truck, RefreshCw, Cpu } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: 'Performance' | 'Vitality' | 'Focus' | 'Hormonal';
  price: number;
  rating: number;
  reviews: number;
  image: string;
  benefits: string[];
  scientificBacking: string;
  isPopular?: boolean;
}

const products: Product[] = [
  {
    id: 'p1',
    name: "Pure Ferritin Elite",
    category: 'Performance',
    price: 34.90,
    rating: 4.9,
    reviews: 124,
    image: "https://raw.githubusercontent.com/JonathanSpe/Optimus/main/optimus---personalisierte-blutanalyse/assets/pill.jpeg",
    benefits: ["Maximale Eisen-Resorption", "Unterstützt Sauerstofftransport", "Erhöht Energielevel"],
    scientificBacking: "Hochreines Eisenbisglycinat für maximale Bioverfügbarkeit ohne Magenreizung.",
    isPopular: true
  },
  {
    id: 'p2',
    name: "Pure Vitamin D3",
    category: 'Vitality',
    price: 24.50,
    rating: 5.0,
    reviews: 89,
    image: "https://raw.githubusercontent.com/JonathanSpe/Optimus/main/optimus---personalisierte-blutanalyse/assets/pill2.jpeg",
    benefits: ["Stärkt Immunsystem", "Optimiert Hormonsynthese", "Fördert Calcium-Metabolismus"],
    scientificBacking: "Reines Cholecalciferol in pharmazeutischer Qualität für stabile Serum-Spiegel."
  },
  {
    id: 'p3',
    name: "Pure Alpha GPC",
    category: 'Focus',
    price: 39.00,
    rating: 4.8,
    reviews: 56,
    image: "https://raw.githubusercontent.com/JonathanSpe/Optimus/main/optimus---personalisierte-blutanalyse/assets/pill3.jpeg",
    benefits: ["Kognitive Präzision", "Fördert Acetylcholin-Level", "Mentale Ausdauer"],
    scientificBacking: "Direkter Cholin-Präkursor zur Unterstützung der neuronalen Signalübertragung."
  },
  {
    id: 'p4',
    name: "Pure Magnesium Glycinat",
    category: 'Hormonal',
    price: 28.00,
    rating: 4.9,
    reviews: 210,
    image: "https://raw.githubusercontent.com/JonathanSpe/Optimus/main/optimus---personalisierte-blutanalyse/assets/pill4.jpeg",
    benefits: ["Tiefe ZNS-Relaxation", "Optimiert Schlafphasen", "Reduziert Muskeltonus"],
    scientificBacking: "Rein chelatisiertes Magnesium für höchste Aufnahme-Raten im Gewebe."
  },
  {
    id: 'p5',
    name: "Omega-3 Ultra Pure",
    category: 'Performance',
    price: 32.90,
    rating: 4.9,
    reviews: 142,
    image: "https://images.unsplash.com/photo-1550573105-18074d09252c?q=80&w=800&auto=format&fit=crop",
    benefits: ["Gelenkschutz", "Antioxidative Wirkung", "Herz-Kreislauf Support"],
    scientificBacking: "Pharmazeutisch gereinigtes Fischöl mit exzellentem EPA/DHA Verhältnis.",
    isPopular: true
  },
  {
    id: 'p6',
    name: "Pure Ashwagandha KSM-66",
    category: 'Hormonal',
    price: 45.00,
    rating: 4.7,
    reviews: 95,
    image: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=800&auto=format&fit=crop",
    benefits: ["Cortisol-Management", "Verbesserte Stressresistenz", "Hormonelle Balance"],
    scientificBacking: "Vollspektrum-Extrakt mit der höchsten Konzentration an Withanoliden weltweit."
  }
];

const SupplementsPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'Performance', 'Vitality', 'Focus', 'Hormonal'];

  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div className="bg-[#fcfcfc] text-[#333333] pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Shop Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-black/[0.03] text-zinc-500 text-[9px] font-bold uppercase tracking-widest">
              High-End Single Substances
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-[#333333] leading-none">
              Upgrade Deine <br /> <span className="text-zinc-400 italic">Molekulare</span> Basis.
            </h1>
          </div>
          
          <div className="flex items-center gap-1.5 bg-white p-1.5 rounded-2xl border border-black/[0.03] shadow-sm">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-[9px] font-bold uppercase tracking-widest transition-all ${
                  filter === cat 
                    ? 'bg-[#333333] text-white shadow-md' 
                    : 'text-zinc-400 hover:text-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid - 4 columns for compact width and reduced card height */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div 
              key={product.id}
              className="group relative bg-white border border-black/[0.03] rounded-[2rem] overflow-hidden hover:shadow-lg transition-all duration-500 card-medical flex flex-col"
            >
              {product.isPopular && (
                <div className="absolute top-4 right-4 z-10 bg-white border border-black/[0.03] text-red-600 text-[7px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                  Top Rec
                </div>
              )}
              
              {/* Product Image - More compact aspect ratio */}
              <div className="aspect-square w-full overflow-hidden bg-zinc-50/80 relative p-8 flex items-center justify-center shrink-0">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain brightness-[1.05] group-hover:scale-110 transition-all duration-[1000ms]" 
                  loading="eager"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (product.id === 'p1') {
                      target.src = "https://raw.githubusercontent.com/JonathanSpe/Optimus/main/optimus---personalisierte-blutanalyse/assets/pill.jpeg";
                    }
                  }}
                />
              </div>

              {/* Product Content - Reduced padding and spacing */}
              <div className="p-6 space-y-4 flex-1 flex flex-col">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-[8px] font-bold uppercase tracking-[0.15em] text-zinc-400">
                    <Zap size={10} className="text-red-600/40" /> {product.category}
                  </div>
                  <h3 className="text-lg font-black text-[#333333] tracking-tight uppercase leading-tight">{product.name}</h3>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={10} className="fill-red-600/20 text-red-600/10" />
                    ))}
                  </div>
                </div>

                <ul className="space-y-2 flex-1">
                  {product.benefits.slice(0, 2).map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-[11px] text-zinc-500 font-medium leading-tight">
                      <div className="w-1 h-1 rounded-full bg-red-600/30 shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-black/[0.03] flex items-center justify-between gap-3">
                  <div className="text-xl font-black text-[#333333]">{product.price.toFixed(2)}€</div>
                  <button className="flex items-center justify-center gap-2 bg-[#333333] text-white px-5 py-3 rounded-xl font-bold text-[8px] uppercase tracking-widest hover:bg-black transition-all shadow-md active:scale-95 btn-medical shrink-0">
                    Add <ShoppingCart size={12} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Personalized Pack CTA */}
        <section className="mt-24 bg-[#0F172A] rounded-[3.5rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl group border border-white/5">
          <div className="absolute top-0 right-0 p-16 opacity-[0.03] text-white pointer-events-none group-hover:scale-110 transition-transform duration-[5s]">
            <Fingerprint size={280} />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-[8px] font-[900] uppercase tracking-[0.2em]">
                  <Cpu size={10} className="text-red-800" /> Bio-Available Strategy v4.2
                </div>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9] text-white">
                  Dein <br /><span className="text-white/30 italic">Optimus-Pack</span>
                </h2>
                <p className="text-lg text-slate-400 font-medium leading-relaxed max-w-lg">
                  Lass die KI entscheiden. Wir kombinieren deine reinen Einzelstoffe zu einem täglichen Sachet-Pack — exakt dosiert.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-8">
                {[
                  { icon: <ShieldCheck size={14} />, label: "Pharma-Qualität" },
                  { icon: <Box size={14} />, label: "30 Sachets" },
                  { icon: <Truck size={14} />, label: "Gratis Versand" },
                  { icon: <RefreshCw size={14} />, label: "Flex-Abo" }
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-red-800 shadow-sm shrink-0">
                      {f.icon}
                    </div>
                    <p className="text-[9px] font-black text-white uppercase tracking-widest">{f.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#0F172A] rounded-xl font-black text-base hover:bg-slate-100 transition-all shadow-lg btn-medical">
                  Konfigurieren <ArrowRight size={16} />
                </button>
              </div>
            </div>
            
            <div className="relative w-full max-w-sm lg:max-w-none mx-auto">
              <div className="relative rounded-[3rem] border border-white/10 shadow-2xl group-hover:scale-[1.01] transition-transform duration-1000 bg-white/5 backdrop-blur-3xl p-3 overflow-hidden">
                <img 
                  src="https://raw.githubusercontent.com/JonathanSpe/Optimus/main/optimus---personalisierte-blutanalyse/assets/Tagesrationen%20Supplements.png" 
                  alt="Optimus Daily Sachet Packs" 
                  className="w-full h-auto object-cover brightness-[1.1] rounded-[2.2rem]"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SupplementsPage;
