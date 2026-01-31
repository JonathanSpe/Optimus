
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
        <div className="absolute inset-0 bg-red-600/10 blur-[100px] rounded-full -z-10" />
        
        <div className="bg-glass rounded-[2.5rem] p-10 border border-white/5 space-y-10 shadow-2xl">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-red-600 rounded-2xl mx-auto flex items-center justify-center font-bold text-2xl text-white mb-6">O</div>
            <h1 className="text-3xl font-black tracking-tighter">Willkommen zurück</h1>
            <p className="text-zinc-500 text-sm">Logge dich ein, um deine Ergebnisse zu sehen.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-4">Email Addresse</label>
              <div className="relative">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-14 pr-6 text-white focus:border-red-500/50 focus:outline-none transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-4">Passwort</label>
              <div className="relative">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-14 pr-6 text-white focus:border-red-500/50 focus:outline-none transition-all"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between px-2 text-xs">
              <label className="flex items-center gap-2 text-zinc-500 cursor-pointer">
                <input type="checkbox" className="rounded border-white/10 bg-white/5 text-red-600" />
                Angemeldet bleiben
              </label>
              <a href="#" className="text-red-500 hover:text-red-400 font-bold">Passwort vergessen?</a>
            </div>

            <button 
              type="submit"
              className="w-full bg-white text-black py-4 rounded-2xl font-black text-lg hover:bg-red-600 hover:text-white transition-all shadow-xl shadow-white/5 flex items-center justify-center gap-2 group"
            >
              Einloggen <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/5"></div></div>
            <div className="relative flex justify-center text-[10px] uppercase font-black tracking-widest"><span className="bg-[#0c0c0c] px-4 text-zinc-600">Oder fortfahren mit</span></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 py-3 rounded-xl hover:bg-white/10 transition-all">
              <Chrome size={18} /> <span className="text-xs font-bold">Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 py-3 rounded-xl hover:bg-white/10 transition-all">
              <Github size={18} /> <span className="text-xs font-bold">GitHub</span>
            </button>
          </div>

          <p className="text-center text-sm text-zinc-500">
            Noch kein Optimus Mitglied? <button onClick={() => onNavigate('home')} className="text-white font-bold underline">Jetzt Test bestellen</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
