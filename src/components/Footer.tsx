import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Music2, Instagram, Facebook, Youtube, Send, Sparkles } from 'lucide-react';

export function MusicForm() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
      return;
    }
    
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => setStatus('success'), 2000);
  };

  return (
    <section id="criar" className="bg-[#0d0d0d] px-6 md:px-12 py-32 content-visibility-auto border-t border-white/5">
      <div className="max-w-[800px] mx-auto">
        <AnimatePresence mode="wait">
          {status !== 'success' ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5 }}
              className="bg-white/[0.02] border border-white/5 p-12 md:p-20 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Sparkles size={120} className="text-gold" />
              </div>

              <div className="relative z-10">
                <div className="text-[0.65rem] tracking-[0.4em] uppercase text-gold mb-8 flex items-center gap-4">
                  <div className="w-8 h-[1px] bg-gold" />
                  {step === 1 ? "Início da Jornada" : "A Alma da Música"}
                </div>
                
                <h2 className="font-serif text-4xl md:text-6xl font-light text-white mb-8 leading-tight">
                  {step === 1 ? "O começo de algo" : "Agora a parte"} <em className="italic text-gold">{step === 1 ? "eterno" : "mágica"}</em>
                </h2>
                
                <p className="text-white/40 text-lg mb-12 font-light leading-relaxed">
                  {step === 1 
                    ? "Preencha seus dados para iniciarmos o processo de criação da sua obra-prima para o Dia das Mães." 
                    : "Conte-nos os detalhes que farão ela chorar de alegria. Apelidos, memórias, o jeito dela..."}
                </p>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {step === 1 ? (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label className="block text-[0.65rem] tracking-[0.2em] uppercase text-white/40 font-bold">Seu Nome Completo</label>
                          <input required name="userName" type="text" placeholder="Ex: João Silva" className="w-full bg-white/[0.03] border border-white/10 text-white px-6 py-5 outline-none focus:border-gold/50 transition-all font-light" />
                        </div>
                        <div className="space-y-3">
                          <label className="block text-[0.65rem] tracking-[0.2em] uppercase text-white/40 font-bold">Seu WhatsApp</label>
                          <input required name="userPhone" type="tel" placeholder="(00) 00000-0000" className="w-full bg-white/[0.03] border border-white/10 text-white px-6 py-5 outline-none focus:border-gold/50 transition-all font-light" />
                        </div>
                      </div>
                      <button type="submit" className="w-full bg-gold text-black-pure py-6 font-black uppercase tracking-[0.3em] text-[0.85rem] hover:bg-gold-light transition-all shadow-[0_15px_40px_rgba(201,169,110,0.2)]">
                        Próximo Passo <Send size={16} className="inline ml-2" />
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                      <div className="space-y-3">
                        <label className="block text-[0.65rem] tracking-[0.2em] uppercase text-white/40 font-bold">Nome da sua Mãe</label>
                        <input required name="targetName" type="text" placeholder="Como ela se chama?" className="w-full bg-white/[0.03] border border-white/10 text-white px-6 py-5 outline-none focus:border-gold/50 transition-all font-light" />
                      </div>
                      <div className="space-y-3">
                        <label className="block text-[0.65rem] tracking-[0.2em] uppercase text-white/40 font-bold">A História (O que torna ela especial?)</label>
                        <textarea required name="story" rows={5} placeholder="Ex: Ela ama girassóis, nosso apelido é..., ela sempre diz que..." className="w-full bg-white/[0.03] border border-white/10 text-white px-6 py-5 outline-none focus:border-gold/50 transition-all resize-none font-light leading-relaxed" />
                      </div>
                      <div className="flex flex-col gap-4">
                        <button type="submit" disabled={status === 'submitting'} className="w-full bg-gold text-black-pure py-6 font-black uppercase tracking-[0.3em] text-[0.85rem] hover:bg-gold-light transition-all shadow-[0_15px_40px_rgba(201,169,110,0.2)] disabled:opacity-50">
                          {status === 'submitting' ? "Sintonizando Emoções..." : "Finalizar e Criar Música"}
                        </button>
                        <button type="button" onClick={() => setStep(1)} className="text-white/20 text-[0.65rem] uppercase tracking-[0.2em] hover:text-gold transition-colors font-bold">Voltar para etapa anterior</button>
                      </div>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-24 text-center"
            >
              <div className="w-24 h-24 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto mb-10 border border-gold/20">
                <CheckCircle2 size={48} />
              </div>
              <h2 className="font-serif text-5xl text-white mb-6">História Recebida</h2>
              <p className="text-white/40 text-xl font-light mb-12 max-w-[500px] mx-auto leading-relaxed">
                Em instantes, um de nossos compositores entrará em contato via WhatsApp para validar os detalhes e iniciar a criação.
              </p>
              <button onClick={() => setStatus('idle')} className="text-gold border-b border-gold/20 pb-2 uppercase tracking-[0.2em] text-[0.75rem] font-black hover:border-gold transition-all">Criar outra homenagem</button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#0d0d0d] px-6 md:px-12 py-32 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-gold flex items-center justify-center rounded-full text-black-pure shadow-[0_0_20px_rgba(201,169,110,0.3)]">
                <Music2 size={24} />
              </div>
              <span className="font-serif text-3xl tracking-tighter text-white">Aura</span>
            </div>
            <p className="text-white/30 max-w-[400px] leading-relaxed text-lg font-light">
              Transformamos sentimentos em obras de arte sonoras. Cada música é única, feita à mão para eternizar seus momentos mais preciosos.
            </p>
          </div>
          
          <div>
            <h4 className="text-gold text-[0.7rem] tracking-[0.3em] uppercase font-black mb-10">Navegação</h4>
            <ul className="space-y-6">
              {['Início', 'Como Funciona', 'Exemplos', 'Preços', 'Sobre'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-white/40 hover:text-gold transition-colors text-[0.9rem] font-light">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold text-[0.7rem] tracking-[0.3em] uppercase font-black mb-10">Social</h4>
            <div className="flex gap-6">
              <a href="#" className="w-12 h-12 bg-white/[0.03] border border-white/5 flex items-center justify-center rounded-full text-white/40 hover:bg-gold hover:text-black-pure hover:border-gold transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-white/[0.03] border border-white/5 flex items-center justify-center rounded-full text-white/40 hover:bg-gold hover:text-black-pure hover:border-gold transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-white/[0.03] border border-white/5 flex items-center justify-center rounded-full text-white/40 hover:bg-gold hover:text-black-pure hover:border-gold transition-all">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/20 text-[0.65rem] uppercase tracking-[0.3em] font-bold">
            © 2024 Aura Studio. Todos os direitos reservados.
          </p>
          <div className="flex gap-12">
            <a href="#" className="text-white/20 text-[0.6rem] uppercase tracking-[0.3em] hover:text-white transition-colors font-bold">Termos de Uso</a>
            <a href="#" className="text-white/20 text-[0.6rem] uppercase tracking-[0.3em] hover:text-white transition-colors font-bold">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
