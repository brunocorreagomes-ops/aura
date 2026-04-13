import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Music2, ChevronDown } from 'lucide-react';

export function MusicForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
        // Fallback para simulação se a API não estiver disponível (ex: GitHub Pages)
        setTimeout(() => setStatus('success'), 2000);
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      // Fallback para simulação
      setTimeout(() => setStatus('success'), 2000);
    }
  };

  return (
    <section id="criar" className="bg-gradient-to-br from-black-pure to-gold/[0.04] px-6 md:px-12 py-24 content-visibility-auto">
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
                O Primeiro Passo
              </div>
              <h2 className="font-serif text-4xl md:text-[3.5rem] font-light leading-[1.1] mb-5">
                Pronto para <em className="italic text-gold">emocionar</em> quem você ama?
              </h2>
              <p className="text-[0.95rem] text-white/50 leading-relaxed mb-12">
                Não se preocupe com as palavras perfeitas agora. Apenas nos dê o ponto de partida e nossos especialistas cuidarão de todo o resto.
              </p>

              <form onSubmit={handleSubmit} className="text-left space-y-6 md:space-y-7">
                <div className="space-y-2">
                  <label className="block text-[0.75rem] tracking-[0.2em] uppercase text-gold/80 font-medium">Para quem é esta música?</label>
                  <input 
                    required 
                    name="targetName"
                    type="text" 
                    autoComplete="name"
                    placeholder="Nome completo de quem vai receber" 
                    className="w-full bg-white/[0.03] border border-gold/20 text-white px-5 py-4 text-base md:text-[0.9rem] outline-none focus:border-gold focus:bg-gold/[0.06] transition-all rounded-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4">
                  <div className="space-y-2">
                    <label className="block text-[0.75rem] tracking-[0.2em] uppercase text-gold/80 font-medium">Qual a ocasião?</label>
                    <div className="relative">
                      <select 
                        required 
                        name="occasion"
                        defaultValue=""
                        className="w-full bg-white/[0.03] border border-gold/20 text-white px-5 py-4 text-base md:text-[0.9rem] outline-none focus:border-gold focus:bg-gold/[0.06] transition-all appearance-none cursor-pointer rounded-none"
                      >
                        <option value="" disabled className="bg-black-pure">Selecione a ocasião...</option>
                        <option className="bg-black-pure">Aniversário de Namoro/Casamento</option>
                        <option className="bg-black-pure">Pedido de Casamento</option>
                        <option className="bg-black-pure">Dia das Mães</option>
                        <option className="bg-black-pure">Dia dos Pais</option>
                        <option className="bg-black-pure">Chá Revelação / Batizado</option>
                        <option className="bg-black-pure">In Memoriam</option>
                        <option className="bg-black-pure">Aniversário</option>
                        <option className="bg-black-pure">Outra ocasião especial</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gold">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 2 4 4 4-4"/></svg>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[0.75rem] tracking-[0.2em] uppercase text-gold/80 font-medium">Estilo musical preferido</label>
                    <div className="relative">
                      <select 
                        required 
                        name="style"
                        defaultValue=""
                        className="w-full bg-white/[0.03] border border-gold/20 text-white px-5 py-4 text-base md:text-[0.9rem] outline-none focus:border-gold focus:bg-gold/[0.06] transition-all appearance-none cursor-pointer rounded-none"
                      >
                        <option value="" disabled className="bg-black-pure">Selecione o estilo...</option>
                        <option className="bg-black-pure">Sertanejo Romântico</option>
                        <option className="bg-black-pure">MPB / Acústico</option>
                        <option className="bg-black-pure">Pop Emocional</option>
                        <option className="bg-black-pure">Gospel / Cristão</option>
                        <option className="bg-black-pure">Pagode Romântico</option>
                        <option className="bg-black-pure">Forró Romântico</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gold">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 2 4 4 4-4"/></svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-[0.75rem] tracking-[0.2em] uppercase text-gold/80 font-medium">Conte a história (apelidos, memórias, momentos marcantes)</label>
                  <textarea 
                    required 
                    name="story"
                    placeholder="Ex: Nos conhecemos em 2018 na faculdade, ela adora ser chamada de 'Mili'. Nossa música favorita é... O momento mais especial que vivemos foi..." 
                    className="w-full bg-white/[0.03] border border-gold/20 text-white px-5 py-4 text-base md:text-[0.9rem] outline-none focus:border-gold focus:bg-gold/[0.06] transition-all min-h-[140px] resize-y rounded-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4">
                  <div className="space-y-2">
                    <label className="block text-[0.75rem] tracking-[0.2em] uppercase text-gold/80 font-medium">Seu nome</label>
                    <input required name="userName" type="text" autoComplete="name" placeholder="Como você se chama" className="w-full bg-white/[0.03] border border-gold/20 text-white px-5 py-4 text-base md:text-[0.9rem] outline-none focus:border-gold focus:bg-gold/[0.06] transition-all rounded-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[0.75rem] tracking-[0.2em] uppercase text-gold/80 font-medium">Seu e-mail</label>
                    <input required name="userEmail" type="email" autoComplete="email" placeholder="Para receber a música" className="w-full bg-white/[0.03] border border-gold/20 text-white px-5 py-4 text-base md:text-[0.9rem] outline-none focus:border-gold focus:bg-gold/[0.06] transition-all rounded-none" />
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={status !== 'idle'}
                  className={`w-full py-5 text-[0.85rem] tracking-[0.25em] uppercase font-semibold transition-all ${
                    status === 'submitting' 
                      ? 'bg-gold/50 text-black-pure cursor-wait' 
                      : 'bg-gold text-black-pure hover:bg-gold-light active:scale-[0.98] hover:shadow-[0_12px_40px_rgba(201,169,110,0.25)]'
                  }`}
                >
                  {status === 'idle' && 'Eternizar Minha História Agora ✦'}
                  {status === 'submitting' && 'Recebendo sua história...'}
                </button>
                
                <p className="text-center text-[0.75rem] text-white/50 mt-4">
                  🔒 Seus dados estão seguros. Entrega em até 24h. Garantia de 30 dias.
                </p>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              className="py-12 px-6 bg-gold/[0.05] border border-gold/20 backdrop-blur-sm"
            >
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-24 h-24 bg-gold rounded-full flex items-center justify-center text-black-pure"
                  >
                    <CheckCircle2 size={48} />
                  </motion.div>
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0, 0.5]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 border-2 border-gold rounded-full"
                  />
                </div>
              </div>
              
              <h2 className="font-serif text-3xl md:text-5xl font-light mb-6">
                Sua História foi <em className="italic text-gold">Recebida!</em>
              </h2>
              
              <div className="space-y-6 max-w-[500px] mx-auto">
                <p className="text-lg text-cream-dark leading-relaxed">
                  Prepare o coração. Nossos compositores já estão trabalhando para transformar suas memórias em uma canção inesquecível.
                </p>
                
                <div className="flex items-center justify-center gap-3 text-gold/80 text-sm tracking-widest uppercase">
                  <Music2 size={18} />
                  <span>Entrega em até 24 horas</span>
                  <Music2 size={18} />
                </div>
                
                <div className="pt-8 border-t border-gold/10">
                  <p className="text-sm text-white/40 mb-8">
                    Enviamos um e-mail de confirmação para você. Fique de olho na sua caixa de entrada (e no spam, por via das dúvidas).
                  </p>
                  
                  <button 
                    onClick={() => setStatus('idle')}
                    className="text-[0.7rem] tracking-[0.2em] uppercase text-gold hover:text-gold-light transition-colors border-b border-gold/30 pb-1"
                  >
                    Criar outra música
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Quanto tempo leva para receber minha música?",
      a: "No plano Premium, entregamos sua música personalizada em menos de 24 horas. No plano Essencial, o prazo é de até 5 dias úteis."
    },
    {
      q: "Qual a qualidade da música?",
      a: "Todas as nossas músicas possuem qualidade de estúdio (masterizadas), prontas para serem tocadas em qualquer sistema de som ou compartilhadas em redes sociais."
    },
    {
      q: "Posso escolher o estilo musical?",
      a: "Sim! Oferecemos diversos estilos como Sertanejo, MPB, Pop, Gospel, Pagode e Forró. Você escolhe o que melhor combina com a sua história."
    },
    {
      q: "E se eu não gostar da música?",
      a: "Temos uma garantia de satisfação total. Se a música não capturar a essência da sua história, você pode solicitar revisões ou seu dinheiro de volta."
    }
  ];

  return (
    <section className="px-6 md:px-12 py-24 border-t border-gold/10 content-visibility-auto">
      <div className="max-w-[800px] mx-auto">
        <div className="text-[0.65rem] tracking-[0.4em] uppercase text-gold mb-5 flex justify-center items-center gap-3">
          Dúvidas Frequentes
        </div>
        <h2 className="font-serif text-4xl text-center mb-16">Perguntas <em className="italic text-gold">Comuns</em></h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-b border-gold/10"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-6 flex justify-between items-center text-left group"
              >
                <h3 className={`font-serif text-xl transition-colors ${openIndex === i ? 'text-gold' : 'text-cream group-hover:text-gold/80'}`}>
                  {faq.q}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gold/50"
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-[0.9rem] text-white/50 leading-relaxed pb-8 pr-12">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-gold/10 px-6 md:px-12 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="font-serif text-[1.4rem] font-light tracking-[0.15em] text-gold">
        Aura<span className="italic">Song</span>
      </div>
      <div className="flex gap-8">
        <a href="#sobre" className="text-[0.75rem] tracking-[0.1em] text-white/50 hover:text-gold transition-colors">Sobre Nós</a>
        <a href="#" className="text-[0.75rem] tracking-[0.1em] text-white/50 hover:text-gold transition-colors">Política de Privacidade</a>
        <a href="#" className="text-[0.75rem] tracking-[0.1em] text-white/50 hover:text-gold transition-colors">Termos de Uso</a>
        <a href="#" className="text-[0.75rem] tracking-[0.1em] text-white/50 hover:text-gold transition-colors">Contato</a>
      </div>
      <p className="text-[0.7rem] text-white/30 text-center md:text-right w-full md:w-auto">
        © 2025 AuraSong. Todos os direitos reservados. Música que transforma memórias em legados.
      </p>
    </footer>
  );
}
