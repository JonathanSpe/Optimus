import React, { useState } from 'react';
import { ArrowRight, Lock, Mail, Github, Chrome } from 'lucide-react';

interface LoginPageProps {
  onLogin: () => void;
  onNavigate: (page: any) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin, onNavigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-md relative">
        <div className="absolute inset-0 bg-red-700/[0.06] blur-[120px] rounded-full -z-10" />
        
        <div className="medical-surface medical-elevated rounded-[2.25rem] p-12 space-y-12">
          <div className="text-center space-y-4">
            <div className="w-14 h-14 medical-logo-badge mx-auto flex items-center justify-center font-bold text-2xl text-white">O</div>
            <div className="space-y-2">
              <h1 className="text-4xl medical-title font-black tracking-tighter text-slate-900">Willkommen</h1>
              <p className="text-slate-500 text-sm font-medium">Logge dich ein, um deine Daten sicher zu synchronisieren.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="medical-label">Email Adresse</label>
              <div className="relative">
                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@optimus.com"
                  className="medical-input"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="medical-label">Passwort</label>
              <div className="relative">
                <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="medical-input"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between px-2 text-[11px] font-bold">
              <label className="flex items-center gap-2 text-zinc-400 cursor-pointer hover:text-zinc-600 transition-colors">
                <input type="checkbox" className="rounded-md border-black/[0.05] bg-zinc-50 text-[#333333] focus:ring-0" />
                Aktiv bleiben
              </label>
              <a href="#" className="text-red-600/60 hover:text-red-600 transition-colors uppercase tracking-widest">Vergessen?</a>
            </div>

            <button 
              type="submit"
              className="medical-btn medical-btn-primary w-full py-5 text-sm"
            >
              Anmelden <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-black/[0.03]"></div></div>
            <div className="relative flex justify-center text-[9px] uppercase font-black tracking-[0.2em]"><span className="bg-white px-4 text-zinc-300">Bio-ID Provider</span></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="medical-btn medical-btn-secondary py-4 text-[10px]">
              <Chrome size={18} className="text-slate-700" /> <span>Google</span>
            </button>
            <button className="medical-btn medical-btn-secondary py-4 text-[10px]">
              <Github size={18} className="text-slate-700" /> <span>GitHub</span>
            </button>
          </div>

          <p className="text-center text-sm text-slate-500 font-medium leading-relaxed">
            Noch kein Optimus Mitglied? <br />
            <button onClick={() => onNavigate('home')} className="text-slate-900 font-bold underline decoration-red-600/20 underline-offset-4 hover:decoration-red-600/40 transition-all">Jetzt Test bestellen</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;