
import React, { useState } from 'react';
import { ShoppingCart, Star, ShieldCheck, Zap, HeartPulse, Info, ChevronRight, Filter } from 'lucide-react';

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
    name: "Optimus Ferritin Elite",
    category: 'Performance',
    price: 34.90,
    rating: 4.9,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1584017947476-c3f1b3baae7b?q=80&w=800&auto=format&fit=crop",
    benefits: ["Optimale Eisenaufnahme", "Unterstützt Sauerstofftransport", "Erhöht Energielevel"],
    scientificBacking: "Formuliert mit bioverfügbarem Eisenbisglycinat für maximale Magenverträglichkeit.",
    isPopular: true
  },
  {
    id: 'p2',
    name: "Vitamin D3 + K2 Complex",
    category: 'Vitality',
    price: 24.50,
    rating: 5.0,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1471864190281-ad5fe9bb0724?q=80&w=800&auto=format&fit=crop",
    benefits: ["Stärkt Immunsystem", "Knochengesundheit", "Hormon-Vorstufe"],
    scientificBacking: "Synergetische Kombination für korrekte Calcium-Verteilung im Gewebe."
  },
  {
    id: 'p3',
    name: "Alpha GPC Focus",
    category: 'Focus',
    price: 39.00,
    rating: 4.8,
    reviews: 56,
    image: "https://images.unsplash.com/photo-1611634560978-23d27247bc41?q=80&w=800&auto=format&fit=crop",
    benefits: ["Kognitive Schärfe", "Verbesserte Gedächtnisleistung", "Mentale Ausdauer"],
    scientificBacking: "Direkter Cholin-Präkursor für gesteigerte Acetylcholin-Synthese im Zerebrum.",
    isPopular: true
  },
  {
    id: 'p4',
    name: "Magnesium Glycinat ZM",
    category: 'Hormonal',
    price: 28.00,
    rating: 4.9,
    reviews: 210,
    image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=800&auto=format&fit=crop",
    benefits: ["Reduziert Cortisol", "Tieferer Schlaf", "Muskelrelaxation"],
    scientificBacking: "Chelat-Form für höchste Bioverfügbarkeit ohne abführende Wirkung."
  },
  {
    id: 'p5',
    name: "Omega-3 Ultra Pure",
    category: 'Performance',
    price: 32.90,
    rating: 4.9,
    reviews: 142,
    image: "https://images.unsplash.com/photo-1550573105-18074d09252c?q=80&w=800&auto=format&fit=crop",
    benefits: ["Herzgesundheit", "Entzündungshemmung", "Gelenkfunktion"],
    scientificBacking: "IFOS-zertifiziertes Fischöl mit extrem hohem EPA/DHA Gehalt."
  },
  {
    id: 'p6',
    name: "Testo-Boost Synergie",
    category: 'Hormonal',
    price: 49.00,
    rating: 4.7,
    reviews: 95,
    image: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=800&auto=format&fit=crop",
    benefits: ["Natürliche Testosteron-Unterstützung", "Verbesserte Libido", "Vitalität"],
    scientificBacking: "Kombination aus Zink, Bor und Ashwagandha (KSM-66) basierend auf Studien zur Stress-Reduktion."
  }
];

const SupplementsPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'Performance', 'Vitality', 'Focus', 'Hormonal'];

  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div className="bg-[#050505] text-white pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Shop Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold tracking-widest uppercase">
              Evidenzbasierte Supplements
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
              Upgrade Deine <br /> <span className="text-red-600 italic">Molekulare</span> Basis.
            </h1>
            <p className="text-zinc-500 text-lg max-w-xl">
              Kein Blindflug mehr. Unsere Supplements sind perfekt auf deine Blutanalyse abgestimmt für messbare Ergebnisse.
            </p>
          </div>
          
          <div className="flex items-center gap-4 bg-white/5 p-2 rounded-2xl border border-white/10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  filter === cat 
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/20' 
                    : 'text-zinc-500 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div 
              key={product.id}
              className="group relative bg-glass border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-red-500/30 transition-all duration-500 hover:-translate-y-2"
            >
              {product.isPopular && (
                <div className="absolute top-6 right-6 z-10 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                  Bestseller
                </div>
              )}
              
              {/* Product Image */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-zinc-900 relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-60 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              </div>

              {/* Product Content */}
              <div className="p-8 space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-red-500">
                    <Zap size={12} /> {product.category}
                  </div>
                  <h3 className="text-2xl font-black tracking-tight">{product.name}</h3>
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                      ))}
                    </div>
                    <span className="text-xs text-zinc-500 font-bold">({product.reviews} Reviews)</span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {product.benefits.slice(0, 3).map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-zinc-400">
                      <ShieldCheck size={14} className="text-red-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="text-3xl font-black">{product.price.toFixed(2)}€</div>
                  <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-bold text-sm hover:bg-red-600 hover:text-white transition-all">
                    In den Warenkorb <ShoppingCart size={16} />
                  </button>
                </div>
                
                <div className="group/info mt-4 relative">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-600 cursor-help">
                    <Info size={12} /> Die Wissenschaft dahinter
                  </div>
                  <div className="absolute bottom-full left-0 mb-4 w-full p-4 bg-zinc-900 border border-white/10 rounded-2xl opacity-0 invisible group-hover/info:opacity-100 group-hover/info:visible transition-all text-xs text-zinc-400 leading-relaxed shadow-2xl z-20">
                    {product.scientificBacking}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Personalized Pack CTA */}
        <section className="mt-32 relative rounded-[4rem] bg-gradient-to-br from-zinc-900 to-black border border-white/5 p-12 md:p-20 overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 blur-[120px] rounded-full -z-10" />
          <div className="max-w-3xl mx-auto space-y-8">
            <HeartPulse size={48} className="mx-auto text-red-500" />
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
              Dein personalisiertes <span className="text-red-500">Optimus-Pack</span>
            </h2>
            <p className="text-xl text-zinc-400 font-medium">
              Stoppe das Rätselraten. Wir stellen dir basierend auf deinen Blutwerten ein monatliches Pack zusammen. Nur das, was du wirklich brauchst.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-10 py-5 bg-red-600 rounded-2xl font-black text-xl hover:bg-red-700 transition-all shadow-xl shadow-red-600/20">
                Blutanalyse starten
              </button>
              <button className="px-10 py-5 bg-white/5 border border-white/10 rounded-2xl font-black text-xl hover:bg-white/10 transition-all">
                Mehr erfahren
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SupplementsPage;
