
import React from 'react';

interface FooterProps {
  onNavigate: (page: 'home' | 'science' | 'how-it-works' | 'about' | 'supplements') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div className="space-y-4">
            <div 
              className="flex items-center gap-2 cursor-pointer group"
              onClick={() => onNavigate('home')}
            >
              <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform text-white">O</div>
              <span className="text-xl font-bold tracking-tighter uppercase">Optimus</span>
            </div>
            <p className="text-zinc-500 max-w-xs">Dein Weg zu einer optimierten Gesundheit. Schmerzfrei, schnell und wissenschaftlich fundiert.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h4 className="font-bold">Unternehmen</h4>
              <ul className="space-y-2 text-zinc-500 text-sm">
                <li><button onClick={() => onNavigate('about')} className="hover:text-red-500 transition-colors">Über uns</button></li>
                <li><button onClick={() => onNavigate('supplements')} className="hover:text-red-500 transition-colors">Supplements</button></li>
                <li><button onClick={() => onNavigate('how-it-works')} className="hover:text-red-500 transition-colors">Wie es funktioniert</button></li>
                <li><button onClick={() => onNavigate('science')} className="hover:text-red-500 transition-colors">Wissenschaft</button></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold">Rechtliches</h4>
              <ul className="space-y-2 text-zinc-500 text-sm">
                <li><a href="#" className="hover:text-red-500 transition-colors">Impressum</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Datenschutz</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">AGB</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold">Support</h4>
              <ul className="space-y-2 text-zinc-500 text-sm">
                <li><a href="#" className="hover:text-red-500 transition-colors">Hilfe-Center</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Kontakt</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
          <p>© 2024 Optimus Health Solutions GmbH. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
