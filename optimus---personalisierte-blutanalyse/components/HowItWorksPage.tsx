
import React, { useState } from 'react';
import { Package, Droplets, Send, BarChart3, ChevronDown, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

const steps = [
  {
    title: "Bestellung & Lieferung",
    description: "Dein persönliches Optimus Kit wird nach der Bestellung sofort verpackt. Wir liefern diskret und schnell innerhalb von 24-48 Stunden direkt an deine Haustür.",
    icon: <Package className="w-10 h-10" />,
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?auto=format&fit=crop&q=80&w=1000",
    tags: ["Express Versand", "Diskret"],
    color: "bg-zinc-100",
    highlight: "24h Express-Logistik"
  },
  {
    title: "Schmerzfreie Abnahme",
    description: "Vergiss Nadeln. Das Tasso+ Device nutzt innovative Vakuum-Technologie. Einfach auf den Oberarm setzen, Knopf drücken und 5 Minuten entspannen. Fast unspürbar.",
    icon: <Droplets className="w-10 h-10" />,
    image: "https://images.unsplash.com/photo-1579154235602-3c2cbfac543e?auto=format&fit=crop&q=80&w=1000",
    tags: ["Patentiert", "In 5 Min."],
    color: "bg-red-50",
    highlight: "100% schmerzfrei & sicher"
  },
  {
    title: "Probe Registrieren",
    description: "Scanne den QR-Code auf deinem Kit mit der Optimus App. So verknüpfen wir deine Probe sicher mit deinem Profil. Dann einfach kostenfrei zurückschicken.",
    icon: <Send className="w-10 h-10" />,
    image: "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?auto=format&fit=crop&q=80&w=1000",
    tags: ["App-Sync", "Verschlüsselt"],
    color: "bg-zinc-100",
    highlight: "Ende-zu-Ende Verschlüsselung"
  },
  {
    title: "Deine Analyse",
    description: "Innerhalb von 4 Tagen nach Laboreingang erhältst du deinen digitalen Report. Wir übersetzen komplexe Daten in handfeste Empfehlungen für dein Leben.",
    icon: <BarChart3 className="w-10 h-10" />,
    image: "https://images.unsplash.com/photo-1551288049-bbdac8626ad1?auto=format&fit=crop&q=80&w=1000",
    tags: ["KI-Expertise", "Detailliert"],
    color: "bg-red-50",
    highlight: "Von Ärzten validierte Daten"
  },
  {
    title: "Gezielte Optimierung",
    description: "Bestelle deine individuell zusammengestellten Supplements und setze unsere Lifestyle-Empfehlungen um. Für optimale Ergebnisse ist die Einhaltung der spezifischen Verzehrempfehlungen und Dosierungen essenziell.",
    icon: <Sparkles className="w-10 h-10" />,
    image: "https://images.unsplash.com/photo-1550573105-18074d09252c?q=80&w=1000&auto=format&fit=crop",
    tags: ["Personalisierung", "Dosierung", "Lifestyle"],
    color: "bg-zinc-100",
    highlight: "Optimale Dosierung & Ergebnisse"
  }
];

const faqs = [
  {
    question: "Ist die Blutabnahme wirklich schmerzfrei?",
    answer: "Absolut. Im Gegensatz zur venösen Blutabnahme mit einer Nadel nutzt das Tasso Device ein leichtes Vakuum und mikrofeine Lanzetten, die nur die oberste Hautschicht berühren. Die meisten Nutzer beschreiben es als ein leichtes Kribbeln."
  },
  {
    question: "Wie sicher sind meine Gesundheitsdaten?",
    answer: "Datenschutz steht bei uns an erster Stelle. Deine Probe wird unter einer anonymen ID verarbeitet. Alle medizinischen Daten werden nach deutschen DSGVO-Standards auf hochsicheren Servern verschlüsselt gespeichert."
  },
  {
    question: "Wann ist der beste Zeitpunkt für den Test?",
    answer: "Für die aussagekräftigsten Ergebnisse empfehlen wir die Abnahme morgens direkt nach dem Aufstehen, bevor du gefrühstückt hast (nüchtern)."
  },
  {
    question: "Was passiert, wenn der Test nicht funktioniert?",
    answer: "Sollte bei der Abnahme etwas schiefgehen, schicken wir dir umgehend und kostenlos ein neues Ersatz-Kit zu. Unser Support ist jederzeit für dich da."
  }
];

const HowItWorksPage: React.FC = () => {
  return (
    <div className="bg-[#050505] text-white">
      {/* Dynamic Hero Section */}
      <section className="relative pt-40 pb-12 px-6 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-red-600/10 blur-[120px] rounded-full -z-10" />
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-xs font-bold tracking-widest uppercase mb-8">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            Der Optimus Weg
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-6">
            Einfach. Digital. <br /> <span className="text-red-600 italic">Revolutionär.</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Wir haben den klassischen Bluttest neu erfunden. In 5 Schritten zu deiner vollständigen biologischen Optimierung.
          </p>
        </div>
      </section>

      {/* The Steps Section */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-24">
            {steps.map((step, index) => (
              <div 
                key={step.title} 
                className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Visual Side */}
                <div className="flex-1 w-full relative">
                  <div className={`absolute -inset-4 ${step.color} rounded-[3rem] -z-10`} />
                  <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border border-zinc-200 group">
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-8 left-8 flex gap-2">
                      {step.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-white/90 text-black text-[10px] font-black uppercase tracking-wider shadow-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-7xl font-black text-zinc-100">{index + 1}</span>
                    <div className="p-3 bg-red-600 text-white rounded-xl shadow-lg shadow-red-600/20">
                      {step.icon}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-3xl md:text-4xl font-black text-zinc-900 tracking-tight leading-tight">
                      {step.title}
                    </h2>
                    <p className="text-lg text-zinc-500 leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-zinc-100">
                    <div className="flex items-center gap-2 text-red-600 font-bold">
                      <CheckCircle2 size={20} />
                      <span className="text-md">{step.highlight}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlight: The Tasso Device */}
      <section className="py-24 px-6 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-tight">
              Die Hardware: <br /><span className="text-red-500 italic">Tasso+ Elite</span>
            </h2>
            <p className="text-xl text-zinc-400 leading-relaxed">
              In Zusammenarbeit mit Tasso Inc. nutzen wir die weltweit fortschrittlichste Technologie zur kapillaren Blutgewinnung. Die schmerzfreie Alternative zur Nadel.
            </p>
            <ul className="space-y-4">
              {[
                "Vakuum-unterstützte Abnahme",
                "Nur wenige Tropfen nötig",
                "Klinisch validierte Genauigkeit",
                "Hygienisch versiegeltes Einweg-System"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-zinc-300 font-medium">
                  <div className="w-6 h-6 rounded-full bg-red-600/10 border border-red-500/20 flex items-center justify-center">
                    <CheckCircle2 className="text-red-500" size={14} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 w-full bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-[3.5rem] p-12 border border-white/5 relative">
             <div className="absolute inset-0 bg-red-600/10 blur-[80px] -z-10" />
             <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-full max-w-[400px] aspect-square bg-white rounded-full flex items-center justify-center p-8 shadow-2xl relative transform -rotate-2 hover:rotate-0 transition-transform border-8 border-zinc-100 overflow-hidden">
                   <img 
                    src="https://images.unsplash.com/photo-1583947581924-860bda6a26df?auto=format&fit=crop&q=80&w=1000" 
                    alt="Optimus Tasso Device Visual" 
                    className="max-w-full h-auto object-contain drop-shadow-lg scale-110"
                   />
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-zinc-500 uppercase font-black tracking-widest">Patentierte Technologie</p>
                  <p className="text-zinc-400 text-sm">Präzision auf Labor-Niveau</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-zinc-50 py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tight">Häufige Fragen</h2>
            <p className="text-zinc-500 text-lg">Wissenswertes rund um deinen Optimus Test.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <p className="text-zinc-400 mb-6 font-medium">Noch weitere Fragen?</p>
            <button className="inline-flex items-center gap-2 text-zinc-900 font-black text-lg border-b-2 border-red-600 pb-1 hover:text-red-600 transition-colors">
              Kontaktiere unseren Support <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#050505] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative p-12 md:p-24 rounded-[4rem] bg-gradient-to-br from-red-600 to-red-900 overflow-hidden shadow-2xl group">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] group-hover:scale-110 transition-transform duration-1000" />
            <div className="relative z-10 flex flex-col items-center text-center space-y-10">
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
                Zeit für <br /> ein <span className="italic">Upgrade.</span>
              </h2>
              <p className="text-red-100 text-xl md:text-2xl max-w-xl font-medium">
                Bestelle jetzt dein Kit und starte deine Reise zur persönlichen Höchstform.
              </p>
              <button className="bg-white text-red-600 px-12 py-5 rounded-2xl font-black text-2xl hover:bg-zinc-100 transition-all shadow-2xl hover:scale-105">
                Kit jetzt bestellen
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`rounded-3xl border transition-all duration-300 ${isOpen ? 'bg-white border-zinc-200 shadow-xl' : 'bg-white/50 border-zinc-100 hover:border-zinc-200'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-8 flex items-center justify-between text-left"
      >
        <span className={`font-bold text-xl transition-colors ${isOpen ? 'text-red-600' : 'text-zinc-900'}`}>{question}</span>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${isOpen ? 'bg-red-600 border-red-600 text-white rotate-180' : 'bg-zinc-100 border-zinc-200 text-zinc-400'}`}>
          <ChevronDown size={20} />
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-8 pt-0 text-zinc-500 text-lg leading-relaxed font-medium">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;
