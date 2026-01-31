
import React, { useState } from 'react';
import { ShieldCheck, Cpu, Microscope, UserCheck, ChevronRight, GraduationCap } from 'lucide-react';
import DashboardPreview from './DashboardPreview';

const SciencePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Sport');

  const categories = [
    { 
      id: 'Sport', 
      title: 'Sport & Performance', 
      desc: 'Optimierung von Ausdauer, Kraft und Regeneration durch Sauerstoff- und Energiemetabolismus.',
      biomarkers: ['Ferritin', 'Magnesium', 'Vitamin D', 'Freies T3']
    },
    { 
      id: 'Hormone', 
      title: 'Hormonelle Balance', 
      desc: 'Überwachung der Schlüsselhormone für Vitalität, Libido und emotionales Gleichgewicht.',
      biomarkers: ['Testosteron', 'Estradiol', 'SHBG', 'TSH']
    },
    { 
      id: 'Erholung', 
      title: 'Regeneration & Schlaf', 
      desc: 'Messung von Entzündungsmarkern und Mineralien, die für tiefen Schlaf und Zellreparatur kritisch sind.',
      biomarkers: ['hs-CRP', 'Magnesium', 'Zink']
    },
    { 
      id: 'Kognition', 
      title: 'Kognitive Leistung', 
      desc: 'Fokus, Gedächtnis und Nervengesundheit durch neuronale Bausteine und Schutzfaktoren.',
      biomarkers: ['Vitamin B12', 'Omega-3', 'Selen']
    },
    { 
      id: 'Haare', 
      title: 'Haut & Haare', 
      desc: 'Strukturelle Gesundheit von innen durch essentielle Bausteine für Keratin und Kollagen.',
      biomarkers: ['Zink', 'Ferritin', 'Estradiol']
    }
  ];

  const doctors = [
    {
      name: "Dr. med. Christian Bauer",
      role: "Facharzt für Endokrinologie",
      focus: "Hormonelle Balance & Stoffwechsel",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Dr. med. Sarah Meyer",
      role: "Sportmedizinerin",
      focus: "Leistungsdiagnostik & Regeneration",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "Dr. rer. nat. Jonas Schmidt",
      role: "Bio-Chemiker",
      focus: "Biomarker-Validierung & Analytik",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  const biomarkerDetails: Record<string, string> = {
    'Testosteron': 'Das primäre anabole Hormon. Kritisch für Muskelaufbau, Knochendichte und Antrieb.',
    'Estradiol': 'Wichtig für den Knochenstoffwechsel und die kognitive Funktion bei beiden Geschlechtern.',
    'SHBG': 'Reguliert die Verfügbarkeit von freien Hormonen im Blutkreislauf.',
    'TSH': 'Zentraler Marker für die Schilddrüsenfunktion und den Grundumsatz.',
    'Freies T3': 'Das aktive Schilddrüsenhormon, das den Energieverbrauch direkt steuert.',
    'Selen': 'Essentielles Spurenelement für die Schilddrüsenhormon-Konversion und Immunabwehr.',
    'Ferritin': 'Speichereisen. Entscheidend für den Sauerstofftransport und die ATP-Produktion.',
    'Magnesium': 'Beteiligt an über 300 enzymatischen Reaktionen, inkl. Muskelentspannung.',
    'Vitamin D': 'Ein Pro-Hormon, das Immunsystem und Calciumhaushalt moduliert.',
    'Vitamin B12': 'Essenziell für die Nervenfunktion und die Bildung roter Blutkörperchen.',
    'Zink': 'Baustein für Enzyme, wichtig für Testosteronproduktion und Wundheilung.',
    'hs-CRP': 'Hochsensitiver Marker für systemische Entzündungen im Körper.',
    'Omega-3': 'Essentielle Fettsäuren für die Gehirngesundheit und Entzündungshemmung.',
    'Triglyceride': 'Wichtiger Marker für den Fettstoffwechsel und kardiovaskuläre Gesundheit.',
    'LDL / HDL': 'Das Verhältnis von gutem zu schlechtem Cholesterin für die Gefäßgesundheit.'
  };

  return (
    <div className="pt-0">
      {/* Science Hero */}
      <section className="pt-32 pb-32 px-6 bg-[#050505] text-white relative">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="flex-1 space-y-8">
            <h1 className="text-5xl md:text-7xl font-black leading-tight text-gradient">
              Wissenschaftlich <br /> <span className="text-red-600">fundiert.</span> Technologisch <span className="text-white italic">überlegen.</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-xl leading-relaxed">
              Optimus verbindet klinische Diagnostik mit modernster Software. Wir machen aus komplexen Blutwerten handfeste Erkenntnisse für deinen Alltag.
            </p>
            <div className="flex gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-bold text-white">40+</span>
                <span className="text-xs text-zinc-500 uppercase font-bold tracking-widest">Biomarker</span>
              </div>
              <div className="w-[1px] h-12 bg-zinc-800 self-center"></div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-bold text-white">100%</span>
                <span className="text-xs text-zinc-500 uppercase font-bold tracking-widest">Evidenzbasiert</span>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full bg-white rounded-[3.5rem] p-10 border border-white/10 relative group shadow-[0_0_100px_rgba(255,255,255,0.05)]">
             <div className="absolute inset-0 bg-red-600/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <DashboardPreview lightTheme={true} />
          </div>
        </div>
      </section>

      {/* Biomarker Panels & Mapping */}
      <section className="px-6 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold tracking-widest uppercase mb-6">
              Diagnostik-Panel
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-white">Der Optimus Panel</h2>
            <p className="text-zinc-500 max-w-2xl mx-auto text-lg">
              Wir schauen tiefer. Entdecke, welche Biomarker hinter deinen Performance-Kategorien stecken und warum wir sie messen.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar Categories */}
            <div className="w-full lg:w-1/3 space-y-4">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`w-full text-left p-6 rounded-3xl border transition-all flex items-center justify-between group ${
                    activeCategory === cat.id 
                    ? 'bg-red-600 border-red-500 shadow-xl shadow-red-600/20 text-white' 
                    : 'bg-glass border-white/5 text-zinc-400 hover:border-white/20'
                  }`}
                >
                  <div>
                    <h4 className="font-black text-xl mb-1">{cat.title}</h4>
                    <p className={`text-xs ${activeCategory === cat.id ? 'text-red-100' : 'text-zinc-600'}`}>{cat.biomarkers.length} Biomarker Cluster</p>
                  </div>
                  <ChevronRight className={`transition-transform ${activeCategory === cat.id ? 'translate-x-1' : ''}`} />
                </button>
              ))}
            </div>

            {/* Content Detail */}
            <div className="flex-1 bg-white/[0.01] border border-white/5 rounded-[3rem] p-8 md:p-12">
              {categories.map((cat) => cat.id === activeCategory && (
                <div key={cat.id} className="animate-in fade-in duration-500">
                  <h3 className="text-3xl font-black mb-6 text-white">{cat.title}</h3>
                  <p className="text-zinc-400 text-lg mb-12 leading-relaxed">
                    {cat.desc}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {cat.biomarkers.map((bm) => (
                      <div key={bm} className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-red-500/30 transition-all group">
                        <div className="flex justify-between items-center mb-3">
                          <h5 className="font-bold text-white text-lg">{bm}</h5>
                          <span className="text-[10px] uppercase tracking-widest font-black text-red-500/50 group-hover:text-red-500 transition-colors">Inkludiert</span>
                        </div>
                        <p className="text-sm text-zinc-500 leading-relaxed">
                          {biomarkerDetails[bm] || 'Wichtiger physiologischer Marker für systemische Integrität.'}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="px-6 mb-40">
        <div className="max-w-7xl mx-auto bg-white/[0.02] border border-white/5 rounded-[4rem] p-12 md:p-20 relative overflow-hidden">
          <div className="relative z-10 space-y-20">
            <div className="flex flex-col md:flex-row gap-16 items-start">
              <div className="flex-1 space-y-6">
                <div className="p-3 bg-red-600/10 rounded-2xl w-fit text-red-500">
                  <UserCheck size={32} />
                </div>
                <h2 className="text-4xl font-black text-white">Validiert von Fachärzten</h2>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  Unsere Algorithmen wurden nicht nur im Labor, sondern in Zusammenarbeit mit führenden Endokrinologen und Sportmedizinern entwickelt. Jede Empfehlung basiert auf aktuellen Peer-Reviewed Studien.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                   <div className="flex items-center gap-3 text-sm font-medium text-zinc-300">
                     <ShieldCheck size={18} className="text-red-500" /> Labor-Standard
                   </div>
                   <div className="flex items-center gap-3 text-sm font-medium text-zinc-300">
                     <Microscope size={18} className="text-red-500" /> Präzision
                   </div>
                   <div className="flex items-center gap-3 text-sm font-medium text-zinc-300">
                     <GraduationCap size={18} className="text-red-500" /> Evidenz
                   </div>
                </div>
              </div>

              {/* Doctors Grid */}
              <div className="flex-1 grid grid-cols-1 gap-4 w-full">
                {doctors.map((doc) => (
                  <div key={doc.name} className="flex items-center gap-6 p-6 bg-black/40 rounded-3xl border border-white/5 hover:border-red-500/20 transition-all group">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all flex-shrink-0 border border-white/10 group-hover:border-red-500/40">
                      <img src={doc.image} alt={doc.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{doc.name}</h4>
                      <p className="text-red-500 text-xs font-bold uppercase tracking-widest mb-1">{doc.role}</p>
                      <p className="text-zinc-500 text-sm">{doc.focus}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Expertise Badges */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/5">
               <div className="space-y-4">
                  <h4 className="font-bold text-white flex items-center gap-2">
                    <ShieldCheck className="text-red-500" size={20} /> Zertifizierte Labore
                  </h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">Analysen erfolgen ausschließlich in akkreditierten deutschen Partnerlaboren unter strengsten Qualitätskontrollen.</p>
               </div>
               <div className="space-y-4">
                  <h4 className="font-bold text-white flex items-center gap-2">
                    <Cpu className="text-red-500" size={20} /> Optimus AI 2.5
                  </h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">Mustererkennung für präventive Gesundheit, trainiert auf Millionen von anonymisierten Datenpunkten für höchste Genauigkeit.</p>
               </div>
               <div className="space-y-4">
                  <h4 className="font-bold text-white flex items-center gap-2">
                    <Microscope className="text-red-500" size={20} /> Klinische Relevanz
                  </h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">Wir messen nur Marker, die eine klinisch nachgewiesene Auswirkung auf Performance und Wohlbefinden haben.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Clusters Overview */}
      <section className="px-6 py-32 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <ClusterCard title="Hormone" items={['Testosteron', 'Estradiol', 'SHBG']} />
            <ClusterCard title="Schilddrüse" items={['TSH', 'fT3', 'Selen']} />
            <ClusterCard title="Herz-Kreislauf" items={['Lipidprofil', 'Triglyceride', 'Omega-3']} />
            <ClusterCard title="Immunsystem" items={['hs-CRP']} />
            <ClusterCard title="Mikronährstoffe" items={['Ferritin', 'Vitamin D', 'Vitamin B12', 'Zink', 'Magnesium']} />
          </div>
        </div>
      </section>
    </div>
  );
};

const ClusterCard: React.FC<{ title: string; items: string[] }> = ({ title, items }) => (
  <div className="space-y-4">
    <h4 className="text-zinc-500 font-bold uppercase tracking-widest text-[10px] border-b border-zinc-800 pb-2">{title}</h4>
    <ul className="space-y-2">
      {items.map(item => (
        <li key={item} className="text-sm font-medium text-zinc-300 flex items-center gap-2">
          <div className="w-1 h-1 rounded-full bg-red-600"></div>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default SciencePage;
