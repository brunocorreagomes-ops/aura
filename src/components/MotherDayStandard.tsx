import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Send, CheckCircle2, Music, MessageSquare, Heart } from 'lucide-react';

export function MotherDayStandard() {
  const [showForm, setShowForm] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting'>('idle');
  const formRef = useRef<HTMLDivElement>(null);

  const abrirFormulario = () => {
    setShowForm(true);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Link do Mercado Pago
    window.location.href = "https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=SEU_ID_147";
  };

  const samples = [
    { name: "Para Dona Maria", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
    { name: "Para minha mãe querida", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
    { name: "Homenagem especial", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
    { name: "Amor de mãe", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
  ];

  return (
    <div className="max-w-[1100px] mx-auto px-6 py-20 text-center font-sans">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-serif text-[2.8rem] md:text-6xl font-light mb-6 text-white leading-tight">
          A música que sua mãe <br className="hidden md:block" />
          <em className="italic text-primary font-light">nunca vai esquecer</em>
        </h1>
        <p className="text-white/60 text-xl font-light mb-12 max-w-[700px] mx-auto leading-relaxed">
          Transformamos sua história em uma canção única
        </p>

        <button 
          onClick={abrirFormulario}
          className="bg-primary text-bg-deep px-10 py-5 rounded-lg text-lg font-black uppercase tracking-[0.2em] shadow-[0_20px_40px_rgba(30,202,211,0.2)] hover:bg-white transition-all transform hover:-translate-y-1 active:translate-y-0"
        >
          CRIAR MINHA MÚSICA
        </button>
      </motion.div>

      {/* Examples Section */}
      <div className="my-[100px]">
        <h2 className="font-serif text-3xl md:text-5xl text-white mb-16">Ouça exemplos</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {samples.map((sample, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-bg-card border border-white/5 p-8 rounded-2xl hover:border-primary/30 transition-all flex flex-col items-center group shadow-xl"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-bg-deep transition-all">
                <Music size={24} />
              </div>
              <p className="text-white text-lg font-light mb-6">{sample.name}</p>
              <audio controls className="w-full h-8 opacity-50 hover:opacity-100 transition-opacity">
                <source src={sample.src} type="audio/mpeg" />
              </audio>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Form Section */}
      <AnimatePresence>
        {showForm && (
          <motion.div 
            ref={formRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="max-w-[600px] mx-auto mt-20 p-8 md:p-12 border border-white/10 rounded-3xl bg-bg-card shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
            
            <h2 className="font-serif text-4xl text-white mb-10">Crie sua música</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              <div className="space-y-4">
                <input 
                  required
                  type="text" 
                  placeholder="Seu nome" 
                  className="w-full bg-white/[0.03] border border-white/10 text-white px-6 py-4 rounded-xl outline-none focus:border-primary transition-all placeholder:text-white/20" 
                />
                <input 
                  required
                  type="text" 
                  placeholder="Nome da sua mãe" 
                  className="w-full bg-white/[0.03] border border-white/10 text-white px-6 py-4 rounded-xl outline-none focus:border-primary transition-all placeholder:text-white/20" 
                />
                
                <textarea 
                  required
                  placeholder="Conte um momento especial com sua mãe" 
                  className="w-full bg-white/[0.03] border border-white/10 text-white px-6 py-4 rounded-xl outline-none focus:border-primary transition-all placeholder:text-white/20 min-h-[120px]" 
                />

                <select className="w-full bg-[#0d0d0d] border border-white/10 text-white px-6 py-4 rounded-xl outline-none focus:border-primary transition-all appearance-none cursor-pointer">
                  <option>Sertanejo</option>
                  <option>MPB</option>
                  <option>Pop</option>
                  <option>Gospel</option>
                  <option>Pagode</option>
                  <option>Samba</option>
                  <option>Funk</option>
                  <option>Rock</option>
                  <option>Trap</option>
                  <option>Romântico</option>
                  <option>Outro</option>
                </select>

                <textarea 
                  placeholder="Se escolheu outro estilo, descreva aqui" 
                  className="w-full bg-white/[0.03] border border-white/10 text-white px-6 py-4 rounded-xl outline-none focus:border-primary transition-all placeholder:text-white/20 min-h-[80px]" 
                />

                <select className="w-full bg-[#0d0d0d] border border-white/10 text-white px-6 py-4 rounded-xl outline-none focus:border-primary transition-all appearance-none cursor-pointer">
                  <option>Emocionante</option>
                  <option>Alegre</option>
                  <option>Homenagem profunda</option>
                </select>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    required
                    type="text" 
                    placeholder="WhatsApp" 
                    className="w-full bg-white/[0.03] border border-white/10 text-white px-6 py-4 rounded-xl outline-none focus:border-primary transition-all placeholder:text-white/20" 
                  />
                  <input 
                    required
                    type="email" 
                    placeholder="Email" 
                    className="w-full bg-white/[0.03] border border-white/10 text-white px-6 py-4 rounded-xl outline-none focus:border-primary transition-all placeholder:text-white/20" 
                  />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full bg-primary text-bg-deep py-6 rounded-xl font-black uppercase tracking-[0.3em] hover:bg-white transition-all shadow-[0_20px_40px_rgba(30,202,211,0.3)] flex items-center justify-center gap-3"
              >
                {status === 'submitting' ? 'PROCESSANDO...' : <>FINALIZAR E PAGAR <Send size={20} /></>}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-20 opacity-20 text-[0.6rem] uppercase tracking-[0.5em] font-bold">
        AuraMusical • 2026
      </div>
    </div>
  );
}
