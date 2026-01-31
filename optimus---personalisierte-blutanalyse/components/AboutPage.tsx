
import React from 'react';
import { ShieldCheck, Zap, Award, Globe, Database, HeartPulse, Scale, CheckCircle2 } from 'lucide-react';

const AboutPage: React.FC = () => {
  const doctors = [
    {
      name: "Prof. Dr. med. Julian Hering",
      role: "Leitender Labormediziner & Molekulargenetiker",
      desc: "Spezialist für komplexe Biomarker-Interaktionen. Er überwacht die wissenschaftliche Validität unserer Algorithmen und stellt sicher, dass jede Analyse klinischen Goldstandards entspricht.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Dr. med. Katharina von Arnim",
      role: "FÄ für Innere Medizin & Sportkardiologie",
      desc: "Expertin für mitochondriale Gesundheit und hormonelle Steuerung. Sie berät das Team bei der Entwicklung unserer Supplement-Synergien für maximale Bioverfügbarkeit.",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "Dr. rer. nat. Sebastian Falk",
      role: "Biochemiker & Ernährungsphysiologe",
      desc: "Führender Experte für Mikronährstoff-Therapie. Er leitet die Qualitätssicherung unserer Rohstoffe und die Entwicklung der 'No-Filler' Rezepturen.",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  const values = [
    {
      /* Fix: Pre-configured the icon with size=36 to avoid the React.cloneElement type mismatch later */
      icon: <Scale className="text-red-500" size={36} />,
      title: "Radikale Transparenz",
      desc: "In einer Industrie voller Intransparenz wählen wir die totale Offenheit. Wir analysieren zuerst, was dein Körper braucht, anstatt dir zu verkaufen, was unser Lager füllt. Keine Füllstoffe, kein Marketing-Hype."
    },
    {
      icon: <Database className="text-red-500" size={36} />,
      title: "Souveräne Datensicherheit",
      desc: "Deine Gesundheitsdaten sind dein kostbarstes Gut. Sie verlassen Deutschland niemals. Wir nutzen eine bankenübliche Ende-zu-Ende-Verschlüsselung und erfüllen die strengsten DSGVO-Anforderungen für medizinische Daten."
    },
    {
      icon: <HeartPulse className="text-red-500" size={36} />,
      title: "Human-in-the-Loop Sicherheit",
      desc: "Technologie ist unser Werkzeug, aber der Mensch ist unsere Verantwortung. Bei kritischen Blutwerten werden unsere Experten persönlich aktiv. Wir lassen dich mit deinen Daten nicht allein."
    }
  ];

  return (
    <div className="bg-[#050505] text-white">
      {/* Premium Hero Section */}
      <section className="relative pt-48 pb-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-red-600/10 blur-[150px] rounded-full -z-10" />
        <div className="max-w-5xl mx-auto space-y-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-xs font-black tracking-[0.2em] uppercase mb-4">
            The Optimus Standard
          </div>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85]">
            Präzision statt <br /> <span className="text-red-600 italic">Vermutung.</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed font-medium">
            Wir haben Optimus gegründet, um die Lücke zwischen High-End-Technologie und menschlicher Biologie zu schließen.
          </p>
        </div>
      </section>

      {/* Founders Section - Deep Insights */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          {/* Jonathan */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 relative group">
              <div className="absolute -inset-4 bg-red-600/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop" 
                  alt="Jonathan Specking" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-2">
                <span className="text-red-500 font-black uppercase tracking-[0.3em] text-xs">Der Visionär</span>
                <h3 className="text-5xl md:text-6xl font-black">Jonathan Specking</h3>
              </div>
              <div className="space-y-6 text-xl text-zinc-400 leading-relaxed font-medium">
                <p>
                  Als Ironman-Triathlet und ehemaliger IT-Infrastruktur-Spezialist für globale Technologieführer ist Jonathan von einer Sache überzeugt: 
                  <span className="text-white"> Innovative Technik ist nicht nur ein Hilfsmittel, sondern die Voraussetzung für evolutionäre Gesundheit.</span>
                </p>
                <p>
                  Er sah in der IT-Welt, wie präzise Algorithmen Fehler minimieren und Effizienz maximieren. Jonathan transferiert diese Logik auf den menschlichen Körper. Er ist überzeugt, dass wir KI-gestützte Modelle nutzen müssen, um die Komplexität unserer Biologie endlich beherrschbar zu machen – für eine Supplementierung ohne Raten.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                 {["Data Infrastructure", "Ironman Athlete", "AI Logic", "Entrepreneur"].map(tag => (
                   <span key={tag} className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-zinc-300 uppercase tracking-widest">{tag}</span>
                 ))}
              </div>
            </div>
          </div>

          {/* Nicolas */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center lg:flex-row-reverse">
            <div className="lg:col-span-7 lg:order-1 space-y-8">
              <div className="space-y-2">
                <span className="text-red-500 font-black uppercase tracking-[0.3em] text-xs">Der Optimizer</span>
                <h3 className="text-5xl md:text-6xl font-black">Nicolas Kiesel</h3>
              </div>
              <div className="space-y-6 text-xl text-zinc-400 leading-relaxed font-medium">
                <p>
                  Ob beim Kitesurfen, Motocross oder nach 1.500 Kilometern im Race Around Austria – Nicolas weiß, dass der Körper im Grenzbereich keine Fehler verzeiht. 
                  Seine sportlichen Erfolge sind kein Zufallsprodukt, sondern das Resultat unermüdlicher <span className="text-white">Leistungsdiagnostik und akribischer Feinabstimmung.</span>
                </p>
                <p>
                  Er bringt die unerbittliche Praxiserfahrung aus dem Extremsport in Optimus ein. Für ihn ist Blut nicht nur eine Flüssigkeit, sondern der ultimative Statusbericht, der über Sieg oder Niederlage entscheidet. Nicolas steht für die kompromisslose Qualität und Reinheit unserer Produkte.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                 {["Ultra-Distanz Radsport", "Performance Expert", "Bio-Optimization", "Ironman"].map(tag => (
                   <span key={tag} className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-zinc-300 uppercase tracking-widest">{tag}</span>
                 ))}
              </div>
            </div>
            <div className="lg:col-span-5 lg:order-2 relative group">
              <div className="absolute -inset-4 bg-red-600/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
                  alt="Nicolas Kiesel" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values - Market Ready Trust Section */}
      <section className="py-32 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">Der Optimus <span className="text-red-500 italic">Kodex</span></h2>
            <p className="text-zinc-500 text-lg max-w-2xl mx-auto">Wir bauen kein Marketing-Produkt. Wir bauen eine Infrastruktur für deine Biologie.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {values.map((v, i) => (
              <div key={i} className="space-y-8 group">
                <div className="w-20 h-20 rounded-3xl bg-red-600/10 flex items-center justify-center border border-red-500/20 group-hover:bg-red-600 group-hover:text-white transition-all duration-500">
                  {/* Fix: Render the icon directly from the configuration object */}
                  {v.icon}
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold tracking-tight">{v.title}</h3>
                  <p className="text-zinc-400 leading-relaxed font-medium">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scientific Advisory Board */}
      <section className="py-32 px-6 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
            <div className="space-y-6">
              <span className="text-red-500 font-black uppercase tracking-[0.3em] text-xs">Expertise</span>
              <h2 className="text-4xl md:text-6xl font-black">Medizinisches <br /> <span className="text-white/40">Competence Center</span></h2>
            </div>
            <p className="text-zinc-500 max-w-md text-lg leading-relaxed">
              Jeder Schritt unserer Entwicklung wird von führenden Experten der Medizin und Biochemie begleitet. Wissenschaft ist bei uns kein Schlagwort, sondern das Fundament.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doctors.map((doc, i) => (
              <div key={i} className="p-10 bg-glass rounded-[3rem] border border-white/5 flex flex-col items-center text-center space-y-8 hover:border-red-500/30 transition-all duration-500 group">
                <div className="relative w-40 h-40">
                  <div className="absolute inset-0 bg-red-600/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white/5 grayscale group-hover:grayscale-0 transition-all duration-700">
                    <img src={doc.image} alt={doc.name} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="text-2xl font-bold">{doc.name}</h4>
                  <p className="text-red-500 font-black uppercase tracking-[0.2em] text-[10px]">{doc.role}</p>
                </div>
                <p className="text-zinc-500 leading-relaxed text-sm font-medium">{doc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Quality Trust Badges */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 items-center opacity-40 hover:opacity-100 transition-opacity">
           <div className="flex flex-col items-center gap-2">
             <ShieldCheck size={40} className="text-zinc-400" />
             <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 text-center">Certified German Data Center</span>
           </div>
           <div className="flex flex-col items-center gap-2">
             <CheckCircle2 size={40} className="text-zinc-400" />
             <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 text-center">GMP & ISO Standard</span>
           </div>
           <div className="flex flex-col items-center gap-2">
             <Award size={40} className="text-zinc-400" />
             <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 text-center">Lab-Tested Purity</span>
           </div>
           <div className="flex flex-col items-center gap-2">
             <Globe size={40} className="text-zinc-400" />
             <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 text-center">100% DSGVO Compliant</span>
           </div>
        </div>
      </section>

      {/* Final Brand Statement */}
      <section className="py-40 px-6 relative overflow-hidden bg-gradient-to-b from-transparent to-red-900/10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-4xl md:text-7xl font-black leading-tight italic">
            "Wir stehen hinter jedem Tropfen und jeder Kapsel – <span className="text-red-600">ohne Kompromisse.</span>"
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-8">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                <Zap className="text-red-500" size={24} />
              </div>
              <span className="text-xs font-black uppercase tracking-widest text-zinc-400">Pure Performance</span>
            </div>
            <div className="w-px h-12 bg-white/10 hidden md:block" />
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                <ShieldCheck className="text-red-500" size={24} />
              </div>
              <span className="text-xs font-black uppercase tracking-widest text-zinc-400">Verified Evidence</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
