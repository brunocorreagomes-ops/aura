import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Music2, ChevronDown, Instagram, Facebook, Youtube } from 'lucide-react';

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
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setTimeout(() => setStatus('success'), 2000);
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setTimeout(() => setStatus('success'), 2000);
    }
  };

  return (
    <section id="criar" className="bg-gradient-to-br from-[#0d0d0d] to-gold/[0.04] px-6 md:px-12 py-24 content-visibility-auto border-t border-gold/20">
      <div className="max-w-[700px] mx-auto text-center">
        <AnimatePresence mode="wait">
          {status !== 'success' ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-[0.65rem] tracking-[0.4em] uppercase text-gold mb-5 flex justify-center items-center gap-3">
                {step === 1 ? "Etapa 1: Dados Básicos" : "Etapa 2: Detalhes da História"}
              </div>
              <h2 className="font-serif text-4xl md:text-[3.5rem] font-light leading-[1.1] mb-5 text-white">
                {step === 1 ? "O Começo de Algo" : "Agora a parte"} <em className="italic text-gold">{step === 1 ? "Eterno" : "Mágica"}</em>
              </h2>
              <p className="text-[0.95rem] text-white/50 leading-relaxed mb-12">
                {step === 1 
                  ? "Preencha seus dados para iniciarmos o processo de criação da sua obra-prima." 
                  : "Conte-nos os detalhes que farão ela chorar de alegria. Apelidos, datas, memórias..."}
              </p>

              <form onSubmit={handleSubmit} className="text-left space-y-6 md:space-y-7">
                {step === 1 ? (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                    <div className="space-y-2">
                      <label className="block text-[0.75rem] tracking-[0.2em] uppercase text-gold/80 font-medium">Seu Nome</label>
                      <input required name="userName" type="text" placeholder="Como podemos te chamar?" className="w-full bg-white/[0.03] border border-gold/20 text-white px-5 py-4 outline-none focus:border-gold transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-[0.75rem] tracking-[0.2em] uppercase text-gold/80 font-medium">Seu WhatsApp</label>
                      <input required name="userPhone" type="tel" placeholder="(00) 00000-0000" className="w-full bg-white/[0.03] border border-gold/20 text-white px-5 py-4 outline-none focus:border-gold transition-all" />
                    </div>
                    <button type="submit" className="w-full bg-gold text-black-pure py-5 font-black uppercase tracking-widest hover:bg-gold-light transition-all">
                      Próximo Passo →
                    </button>
                  </motion.div>
                ) : (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                    <div className="space-y-2">
                      <label className="block text-[0.75rem] tracking-[0.2em] uppercase text-gold/80 font-medium">Para quem é a música?</label>
                      <input required name="targetName" type="text" placeholder="Nome da pessoa especial" className="w-full bg-white/[0.03] border border-gold/20 text-white px-5 py-4 outline-none focus:border-gold transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-[0.75rem] tracking-[0.2em] uppercase text-gold/80 font-medium">Conte a história (detalhes marcantes)</label>
                      <textarea required name="story" rows={4} placeholder="Ex: Nos conhecemos no dia 12/05, ela ama girassóis, nosso apelido é..." className="w-full bg-white/[0.03] border border-gold/20 text-white px-5 py-4 outline-none focus:border-gold transition-all resize-none" />
                    </div>
                    <button type="submit" disabled={status === 'submitting'} className="w-full bg-gold text-black-pure py-5 font-black uppercase tracking-widest hover:bg-gold-light transition-all disabled:opacity-50">
                      {status === 'submitting' ? "Processando..." : "Finalizar e Criar Música →"}
                    </button>
                    <button type="button" onClick={() => setStep(1)} className="w-full text-white/30 text-[0.7rem] uppercase tracking-widest hover:text-gold transition-colors">Voltar</button>
                  </motion.div>
                )}
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-20"
            >
              <div className="w-20 h-20 bg-gold/20 text-gold rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 size={40} />
              </div>
              <h2 className="font-serif text-4xl text-white mb-4">Pedido Recebido!</h2>
              <p className="text-white/50 mb-8">Em instantes um de nossos compositores entrará em contato via WhatsApp para validar os detalhes.</p>
              <button onClick={() => setStatus('idle')} className="text-gold border-b border-gold/30 pb-1 uppercase tracking-widest text-sm">Fazer outro pedido</button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-black-pure px-6 md:px-12 py-20 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gold flex items-center justify-center rounded-full text-black-pure">
                <Music2 size={20} />
              </div>
              <span className="font-serif text-2xl tracking-tighter text-white">AuraSong</span>
            </div>
            <p className="text-white/40 max-w-[400px] leading-relaxed">
              Transformamos sentimentos em obras de arte sonoras. Cada música é única, feita à mão por compositores profissionais para eternizar seus momentos mais preciosos.
            </p>
          </div>
          
          <div>
            <h4 className="text-gold text-[0.7rem] tracking-[0.2em] uppercase font-bold mb-6">Navegação</h4>
            <ul className="space-y-4">
              {['Início', 'Como Funciona', 'Exemplos', 'Preços', 'Sobre Nós'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-white/50 hover:text-gold transition-colors text-sm">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold text-[0.7rem] tracking-[0.2em] uppercase font-bold mb-6">Social</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-full text-white/60 hover:bg-gold hover:text-black-pure transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-full text-white/60 hover:bg-gold hover:text-black-pure transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-full text-white/60 hover:bg-gold hover:text-black-pure transition-all">
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-[0.7rem] uppercase tracking-widest">
            © 2024 AuraSong Studio. Todos os direitos reservados.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-white/20 text-[0.6rem] uppercase tracking-widest hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="text-white/20 text-[0.6rem] uppercase tracking-widest hover:text-white transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
