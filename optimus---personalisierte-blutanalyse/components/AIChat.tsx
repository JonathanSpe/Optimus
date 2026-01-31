
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, Loader2, X, MessageSquareQuote } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

interface Message {
  role: 'user' | 'model';
  text: string;
}

const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Hallo Jonathan! Ich bin dein Optimus KI-Assistent. Wie kann ich dir heute helfen, dein Potenzial auszuschöpfen?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (text: string = input) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', text };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...messages, userMessage].map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        })),
        config: {
          systemInstruction: `Du bist der Optimus KI-Performance-Assistent. Deine Aufgabe ist es, Jonathan bei der Interpretation seiner Biomarker-Daten (wie Ferritin, Testosteron, Vitamin D) zu helfen und praktische Tipps zur Optimierung von Schlaf, Training und Supplementierung zu geben. Jonathan ist ein Elite-Mitglied und Ironman-Triathlet. Antworte auf Deutsch, bleibe professionell, evidenzbasiert und motivierend. Halte Antworten prägnant aber wertvoll.`,
          temperature: 0.7,
        },
      });

      const modelText = response.text || 'Entschuldigung, ich konnte keine Antwort generieren.';
      setMessages(prev => [...prev, { role: 'model', text: modelText }]);
    } catch (error) {
      console.error('AI Chat Error:', error);
      setMessages(prev => [...prev, { role: 'model', text: 'Es gab ein technisches Problem. Bitte versuche es später erneut.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickQuestions = [
    "Schlaf verbessern?",
    "Ferritin Trend?",
    "Trainingstipps Q2",
  ];

  return (
    <div className="flex flex-col h-[550px] bg-zinc-900/40 border border-white/5 rounded-[3rem] overflow-hidden red-glow-subtle group">
      {/* Chat Header */}
      <div className="p-6 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-500 shadow-[0_0_15px_rgba(239,68,68,0.1)]">
            <Bot size={20} />
          </div>
          <div>
            <h4 className="font-black text-white text-sm tracking-tight uppercase">Optimus AI</h4>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest">Performance Engine Live</span>
            </div>
          </div>
        </div>
        <Sparkles size={16} className="text-red-500/40 group-hover:text-red-500 transition-colors" />
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-4 rounded-3xl text-sm leading-relaxed ${
              m.role === 'user' 
                ? 'bg-red-600 text-white shadow-xl shadow-red-600/10' 
                : 'bg-white/5 border border-white/5 text-zinc-300'
            }`}>
              {m.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white/5 border border-white/5 p-4 rounded-3xl flex items-center gap-3 text-zinc-500">
              <Loader2 size={16} className="animate-spin" />
              <span className="text-[10px] font-black uppercase tracking-widest">Analysiere...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Suggestions */}
      <div className="px-6 pb-2 flex flex-wrap gap-2">
        {quickQuestions.map((q, i) => (
          <button 
            key={i}
            onClick={() => handleSendMessage(q)}
            className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-black text-zinc-400 hover:text-white hover:border-red-500/40 transition-all uppercase tracking-widest"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-6">
        <form 
          onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
          className="relative"
        >
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Stelle eine Frage zu deinen Werten..."
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-6 pr-14 text-sm text-white focus:border-red-500/50 focus:outline-none transition-all placeholder:text-zinc-600"
          />
          <button 
            type="submit"
            disabled={isLoading || !input.trim()}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-red-600/20"
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AIChat;
