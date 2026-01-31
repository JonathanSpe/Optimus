
import React from 'react';
import { LogOut, Target, ArrowRight, Microscope } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: any) => void;
  onLogout: () => void;
  currentPage: string;
  isLoggedIn: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, onLogout, currentPage, isLoggedIn }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-black/80 backdrop-blur-md border border-white/10 rounded-full px-6 py-2.5 shadow-2xl">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => onNavigate('home')}
        >
          <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform text-white">O</div>
          <span className="text-xl font-bold tracking-tighter uppercase text-white">Optimus</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-[11px] font-black uppercase tracking-widest">
          <button 
            onClick={() => onNavigate('home')}
            className={`${currentPage === 'home' ? 'text-white' : 'text-zinc-500'} hover:text-white transition-colors`}
          >
            Startseite
          </button>
          {!isLoggedIn ? (
            <>
              <button 
                onClick={() => onNavigate('supplements')}
                className={`${currentPage === 'supplements' ? 'text-white' : 'text-zinc-500'} hover:text-white transition-colors`}
              >
                Store
              </button>
              <button 
                onClick={() => onNavigate('science')}
                className={`${currentPage === 'science' ? 'text-white' : 'text-zinc-500'} hover:text-white transition-colors`}
              >
                Wissenschaft
              </button>
              <button 
                onClick={() => onNavigate('how-it-works')}
                className={`${currentPage === 'how-it-works' ? 'text-white' : 'text-zinc-500'} hover:text-white transition-colors`}
              >
                Funktionsweise
              </button>
              <button 
                onClick={() => onNavigate('about')}
                className={`${currentPage === 'about' ? 'text-white' : 'text-zinc-500'} hover:text-white transition-colors`}
              >
                Über uns
              </button>
            </>
          ) : (
            <>
              <button 
                onClick={() => onNavigate('user-dashboard')}
                className={`${currentPage === 'user-dashboard' ? 'text-white' : 'text-zinc-500'} hover:text-white transition-colors`}
              >
                Dashboard
              </button>
              <button 
                onClick={() => onNavigate('science')}
                className={`${currentPage === 'science' ? 'text-white' : 'text-zinc-500'} hover:text-white transition-colors`}
              >
                Wissenschaft
              </button>
              <button 
                onClick={() => onNavigate('recommendations')}
                className={`${currentPage === 'recommendations' ? 'text-white' : 'text-zinc-500'} hover:text-white transition-colors flex items-center gap-2`}
              >
                <Target size={14} className={currentPage === 'recommendations' ? 'text-red-500' : 'text-zinc-500'} />
                Strategie
              </button>
              <button 
                onClick={() => onNavigate('user-profile')}
                className={`${currentPage === 'user-profile' ? 'text-white' : 'text-zinc-500'} hover:text-white transition-colors`}
              >
                Profil
              </button>
            </>
          )}
        </div>

        <div className="flex items-center gap-3">
          {isLoggedIn ? (
            <button 
              onClick={onLogout}
              className="group flex items-center gap-2 bg-white/5 hover:bg-red-600/10 border border-white/10 hover:border-red-500/50 text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all"
            >
              <LogOut size={14} className="text-zinc-400 group-hover:text-red-500 transition-colors" />
              Abmelden
            </button>
          ) : (
            <>
              <button 
                onClick={() => onNavigate('login')}
                className="text-zinc-400 hover:text-white px-4 py-2 text-[10px] font-black uppercase tracking-widest transition-colors hidden sm:block"
              >
                Anmelden
              </button>
              <button 
                onClick={() => onNavigate('home')}
                className="group flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all shadow-lg shadow-red-600/30 active:scale-95"
              >
                Jetzt Starten
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
