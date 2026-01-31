
import React from 'react';
import { User, Shield, CreditCard, Bell, LogOut, Package, MapPin, ChevronRight, Settings, Smartphone, Activity } from 'lucide-react';

interface UserProfileProps {
  onLogout: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ onLogout }) => {
  const menuItems = [
    { icon: <User size={20} />, label: "Persönliche Daten", desc: "Name, Geburtsdatum, Geschlecht" },
    { icon: <Shield size={20} />, label: "Sicherheit", desc: "Passwort, 2FA, Datenschutz" },
    { icon: <CreditCard size={20} />, label: "Abonnement", desc: "Elite 3-Monat (Aktiv)", status: "Aktiv" },
    { icon: <MapPin size={20} />, label: "Lieferadresse", desc: "Wichtig für Kit-Zustellung" },
    { icon: <Bell size={20} />, label: "Benachrichtigungen", desc: "Email, Push-Benachrichtigungen" },
    { icon: <Settings size={20} />, label: "Präferenzen", desc: "Analyse-Ziele, Sportart" },
  ];

  const integrations = [
    { name: "Strava", icon: <Activity className="text-orange-500" />, status: "Verbunden", color: "border-orange-500/20" },
    { name: "Apple Health", icon: <Smartphone className="text-red-500" />, status: "Verbunden", color: "border-red-500/20" },
    { name: "Garmin Connect", icon: <Activity className="text-blue-500" />, status: "Nicht verbunden", color: "border-zinc-800" },
    { name: "Oura", icon: <Smartphone className="text-zinc-300" />, status: "Nicht verbunden", color: "border-zinc-800" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Profile Header */}
        <div className="flex items-center gap-8 p-10 bg-glass rounded-[3rem] border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 blur-[80px] rounded-full -z-10" />
          <div className="w-24 h-24 rounded-full bg-zinc-800 border-2 border-white/10 flex items-center justify-center overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop" 
              alt="User" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-black tracking-tight text-white">Jonathan Specking</h2>
            <p className="text-zinc-500">jonathan@optimus-health.de</p>
            <div className="flex gap-4 mt-4">
              <span className="px-3 py-1 rounded-lg bg-red-600/10 border border-red-500/20 text-red-500 text-[10px] font-black uppercase tracking-widest">Elite Plan</span>
              <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-zinc-400 text-[10px] font-black uppercase tracking-widest">Seit Jan 2024</span>
            </div>
          </div>
        </div>

        {/* Integration Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white">Datenquellen & Integrationen</h3>
            <span className="text-[10px] text-zinc-500 uppercase font-black tracking-widest">Live-Analyse</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {integrations.map((app) => (
              <div key={app.name} className={`p-6 rounded-[2rem] bg-zinc-900/50 border ${app.color} flex items-center justify-between hover:bg-zinc-800 transition-all cursor-pointer`}>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    {app.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{app.name}</h4>
                    <p className={`text-[10px] font-black uppercase tracking-widest ${app.status === 'Verbunden' ? 'text-green-500' : 'text-zinc-600'}`}>{app.status}</p>
                  </div>
                </div>
                <button className="text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-white">
                  {app.status === 'Verbunden' ? 'Trennen' : 'Verbinden'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Settings List */}
        <div className="grid grid-cols-1 gap-4">
          <h3 className="text-xl font-bold text-white mb-2">Einstellungen</h3>
          {menuItems.map((item, i) => (
            <div 
              key={i}
              className="group flex items-center justify-between p-6 bg-zinc-900 border border-white/5 rounded-3xl hover:border-white/20 hover:bg-zinc-800/50 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-zinc-400 group-hover:text-red-500 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h4 className="font-bold text-white">{item.label}</h4>
                    {item.status && <span className="px-2 py-0.5 rounded-md bg-green-500/10 text-green-500 text-[8px] font-black uppercase tracking-widest">{item.status}</span>}
                  </div>
                  <p className="text-sm text-zinc-500">{item.desc}</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-zinc-700 group-hover:text-white transition-colors" />
            </div>
          ))}
        </div>

        {/* Kit Order Section */}
        <div className="p-10 bg-white/5 rounded-[3rem] border border-white/10 flex flex-col md:flex-row items-center gap-10">
           <div className="w-20 h-20 rounded-full bg-red-600/10 flex items-center justify-center text-red-500 flex-shrink-0">
             <Package size={32} />
           </div>
           <div className="flex-1 space-y-2">
             <h3 className="text-xl font-bold text-white">Daily Pouches & Kits</h3>
             <p className="text-sm text-zinc-500">Dein personalisierter Teebeutel-Vorrat wird am 01. April 2024 automatisch versendet.</p>
           </div>
           <button className="px-6 py-3 rounded-xl bg-white text-black font-bold text-sm hover:bg-red-600 hover:text-white transition-all">
             Versand vorziehen
           </button>
        </div>

        {/* Logout */}
        <div className="pt-8 border-t border-white/5 flex justify-between items-center">
          <p className="text-xs text-zinc-600">Optimus Member ID: #782-991-002</p>
          <button 
            onClick={onLogout}
            className="flex items-center gap-2 text-red-500 hover:text-red-400 font-bold transition-colors"
          >
            <LogOut size={18} /> Abmelden
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
