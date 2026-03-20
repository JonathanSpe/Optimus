import React from 'react';
import { LogOut, LogIn, Target, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: any) => void;
  onLogout: () => void;
  currentPage: string;
  isLoggedIn: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, onLogout, currentPage, isLoggedIn }) => {
  const navClass = (page: string) =>
    `medical-link ${currentPage === page ? 'medical-link-active' : ''}`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between medical-nav-shell rounded-3xl px-5 py-2 premium-border">
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => onNavigate('home')}
        >
          <div className="w-8 h-8 medical-logo-badge flex items-center justify-center font-[900] text-lg group-hover:scale-105 transition-transform text-white shadow-lg">O</div>
          <span className="text-[1.08rem] font-[900] tracking-[-0.04em] uppercase text-[#0F172A]">Optimus</span>
        </div>
        
        <div className="hidden md:flex items-center gap-7">
          {!isLoggedIn ? (
            <>
              <button 
                onClick={() => onNavigate('home')}
                className={navClass('home')}
              >
                Startseite
              </button>
              <button 
                onClick={() => onNavigate('science')}
                className={navClass('science')}
              >
                Wissenschaft
              </button>
              <button 
                onClick={() => onNavigate('how-it-works')}
                className={navClass('how-it-works')}
              >
                Funktion
              </button>
              <button 
                onClick={() => onNavigate('about')}
                className={navClass('about')}
              >
                Über uns
              </button>
              <button 
                onClick={() => onNavigate('supplements')}
                className={`${navClass('supplements')} ${currentPage === 'supplements' ? 'medical-link-accent' : ''} flex items-center gap-2`}
              >
                Shop
              </button>
            </>
          ) : (
            <>
              <button 
                onClick={() => onNavigate('user-dashboard')}
                className={navClass('user-dashboard')}
              >
                Dashboard
              </button>
              <button 
                onClick={() => onNavigate('recommendations')}
                className={`${navClass('recommendations')} flex items-center gap-2.5`}
              >
                <Target size={14} className={currentPage === 'recommendations' ? 'text-red-800' : 'text-slate-400'} />
                Strategie
              </button>
              <button 
                onClick={() => onNavigate('user-profile')}
                className={navClass('user-profile')}
              >
                Profil
              </button>
              <button 
                onClick={() => onNavigate('supplements')}
                className={`${navClass('supplements')} ${currentPage === 'supplements' ? 'medical-link-accent' : ''} flex items-center gap-2`}
              >
                Shop
              </button>
            </>
          )}
        </div>

        <div className="flex items-center gap-2.5">
          {isLoggedIn ? (
            <button 
              onClick={onLogout}
              className="medical-btn medical-btn-secondary"
            >
              <LogOut size={14} className="text-slate-400 group-hover:text-red-800 transition-colors" />
              Abmelden
            </button>
          ) : (
            <>
              <button 
                onClick={() => onNavigate('login')}
                className="medical-btn medical-btn-secondary hidden sm:flex"
              >
                <LogIn size={14} className="text-slate-400 group-hover:text-red-800 transition-colors" />
                Anmelden
              </button>
              <button 
                onClick={() => onNavigate('home')}
                className="medical-btn medical-btn-primary"
              >
                Jetzt Starten
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;