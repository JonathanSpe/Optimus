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
    <div className="bg-[#fcfcfc] text-[#333333]">
      {/* Science Hero */}
      <section className="pt-48 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20 relative z-10">
          <div className="flex-1 space-y-10">
            <div className="space-y-6">
              <h1 className="text-6xl md:text-[5.5rem] font-black leading-[0.9] tracking-tighter text-[#333333]">
                Wissenschaftlich <br /> <span className="text-zinc-400 italic">fundiert.</span> <br /> Technologisch <span className="text-red-600/60">überlegen.</span>
              </h1>
              <p className="text-xl text-zinc-600 max-w-xl leading-relaxed font-medium">
                Optimus verbindet klinische Diagnostik mit modernster Software. Wir machen aus komplexen Blutwerten handfeste Erkenntnisse für deinen Alltag.
              </p>
            </div>
            <div className="flex gap-8">
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-black text-[#333333]">40+</span>
                <span className="text-[10px] text-zinc-400 uppercase font-bold tracking-[0.2em]">Biomarker</span>
              </div>
              <div className="w-[1px] h-12 bg-zinc-100 self-center"></div>
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-black text-[#333333]">100%</span>
                <span className="text-[10px] text-zinc-400 uppercase font-bold tracking-[0.2em]">Evidenzbasiert</span>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full bg-white rounded-[4rem] p-12 border border-black/[0.03] relative group shadow-xl medical-card-shadow">
             <div className="absolute inset-0 bg-red-600/[0.01] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <DashboardPreview lightTheme={true} />
          </div>
        </div>
      </section>

      {/* Biomarker Panels & Mapping */}
      <section className="px-6 py-32 bg-white border-y border-black/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/[0.03] border border-red-600/10 text-red-600 text-[10px] font-bold tracking-widest uppercase mb-4">
              Diagnostik-Panel
            </div>
            <h2 className="text-5xl md:text-[4rem] font-black tracking-tighter text-[#333333]">Der Optimus Panel</h2>
            <p className="text-zinc-600 max-w-2xl mx-auto text-xl font-medium">
              Entdecke die physiologischen Grundlagen deiner Performance-Kategorien.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-16">
            {/* Sidebar Categories */}
            <div className="w-full lg:w-1/3 space-y-4">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`w-full text-left p-8 rounded-[2rem] border transition-all flex items-center justify-between group ${
                    activeCategory === cat.id 
                    ? 'bg-[#333333] border-black shadow-lg text-white' 
                    : 'bg-zinc-50 border-black/[0.03] text-zinc-400 hover:border-black/[0.1] hover:bg-zinc-100/50'
                  }`}
                >
                  <div className="space-y-1">
                    <h4 className="font-black text-xl tracking-tight uppercase">{cat.title}</h4>
                    <p className={`text-[9px] font-bold uppercase tracking-widest ${activeCategory === cat.id ? 'text-zinc-400' : 'text-zinc-500'}`}>{cat.biomarkers.length} Cluster</p>
                  </div>
                  <ChevronRight className={`transition-transform duration-500 ${activeCategory === cat.id ? 'translate-x-1' : ''}`} size={20} />
                </button>
              ))}
            </div>

            {/* Content Detail */}
            <div className="flex-1 bg-white border border-black/[0.03] rounded-[3.5rem] p-10 md:p-16 medical-card-shadow">
              {categories.map((cat) => cat.id === activeCategory && (
                <div key={cat.id} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <h3 className="text-4xl font-black mb-8 text-[#333333] tracking-tighter uppercase">{cat.title}</h3>
                  <p className="text-zinc-600 text-xl mb-16 leading-relaxed font-medium italic border-l-4 border-red-600/10 pl-8">
                    "{cat.desc}"
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {cat.biomarkers.map((bm) => (
                      <div key={bm} className="p-8 rounded-[2rem] bg-zinc-50 border border-black/[0.02] hover:bg-white hover:border-black/[0.05] transition-all group medical-card-shadow">
                        <div className="flex justify-between items-center mb-4">
                          <h5 className="font-black text-[#333333] text-xl tracking-tight">{bm}</h5>
                          <div className="w-2 h-2 rounded-full bg-red-600/40 group-hover:animate-pulse"></div>
                        </div>
                        <p className="text-zinc-600 leading-relaxed font-medium text-sm">
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
      <section className="px-6 py-40 bg-[#fcfcfc]">
        <div className="max-w-7xl mx-auto bg-white border border-black/[0.03] rounded-[4.5rem] p-12 md:p-24 relative overflow-hidden medical-card-shadow">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-600/[0.01] blur-[150px] rounded-full -z-10" />
          <div className="relative z-10 space-y-24">
            <div className="flex flex-col lg:flex-row gap-20 items-start">
              <div className="flex-1 space-y-8">
                <div className="w-16 h-16 rounded-[1.5rem] bg-zinc-50 border border-black/[0.03] flex items-center justify-center text-red-600/60 shadow-sm">
                  <UserCheck size={32} />
                </div>
                <h2 className="text-5xl md:text-6xl font-black text-[#333333] tracking-tighter">Validiert von <br /> <span className="text-zinc-400 italic">Fachärzten</span></h2>
                <p className="text-zinc-600 text-xl leading-relaxed font-medium">
                  Unsere Algorithmen wurden in enger Zusammenarbeit mit führenden Endokrinologen und Sportmedizinern entwickelt. Jede Empfehlung basiert auf aktuellen klinischen Standards.
                </p>
                <div className="flex flex-wrap gap-8 pt-4">
                   <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-zinc-400">
                     <ShieldCheck size={18} className="text-red-600/40" /> Labor-Standard
                   </div>
                   <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-zinc-400">
                     <Microscope size={18} className="text-red-600/40" /> Präzision
                   </div>
                   <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-zinc-400">
                     <GraduationCap size={18} className="text-red-600/40" /> Evidenz
                   </div>
                </div>
              </div>

              {/* Doctors Grid */}
              <div className="flex-1 grid grid-cols-1 gap-6 w-full">
                {doctors.map((doc) => (
                  <div key={doc.name} className="flex items-center gap-8 p-8 bg-zinc-50 rounded-[2.5rem] border border-black/[0.02] hover:bg-white hover:shadow-lg transition-all group medical-card-shadow">
                    <div className="w-24 h-24 rounded-full overflow-hidden grayscale brightness-[1.05] group-hover:grayscale-0 transition-all duration-[800ms] flex-shrink-0 border-4 border-white shadow-sm">
                      <img src={doc.image} alt={doc.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-black text-[#333333] text-2xl tracking-tight leading-none mb-2">{doc.name}</h4>
                      <p className="text-red-600/60 text-[9px] font-bold uppercase tracking-[0.25em] mb-3">{doc.role}</p>
                      <p className="text-zinc-600 text-sm font-medium leading-relaxed">{doc.focus}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Expertise Badges */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 pt-16 border-t border-black/[0.03]">
               <div className="space-y-4">
                  <h4 className="font-black text-[#333333] text-sm uppercase tracking-wider flex items-center gap-3">
                    <ShieldCheck className="text-red-600/60" size={22} /> Zertifizierte Labore
                  </h4>
                  <p className="text-sm text-zinc-600 leading-relaxed font-medium">Analysen erfolgen in akkreditierten deutschen Fachlaboren unter strengsten Qualitätskontrollen.</p>
               </div>
               <div className="space-y-4">
                  <h4 className="font-black text-[#333333] text-sm uppercase tracking-wider flex items-center gap-3">
                    <Cpu className="text-red-600/60" size={22} /> Optimus Engine 2.5
                  </h4>
                  <p className="text-sm text-zinc-600 leading-relaxed font-medium">Mustererkennung trainiert auf Millionen von anonymisierten Datenpunkten für höchste diagnostische Relevanz.</p>
               </div>
               <div className="space-y-4">
                  <h4 className="font-black text-[#333333] text-sm uppercase tracking-wider flex items-center gap-3">
                    <Microscope className="text-red-600/60" size={22} /> Klinische Relevanz
                  </h4>
                  <p className="text-sm text-zinc-600 leading-relaxed font-medium">Wir messen nur Biomarker, die eine klinisch nachgewiesene Auswirkung auf Performance und Balance haben.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clusters Overview */}
      <section className="px-6 py-32 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12">
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
  <div className="space-y-6">
    <h4 className="text-zinc-400 font-bold uppercase tracking-[0.2em] text-[10px] border-b border-zinc-100 pb-3">{title}</h4>
    <ul className="space-y-3">
      {items.map(item => (
        <li key={item} className="text-sm font-bold text-[#333333] flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-red-600/40"></div>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default SciencePage;