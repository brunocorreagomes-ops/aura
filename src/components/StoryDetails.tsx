import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Send, Sparkles, ArrowLeft, Music2, Heart, Star } from 'lucide-react';

export function StoryDetails() {
  const [status, setStatus] = useState<'idle' | 'submitting'>('idle');
  const [basicData, setBasicData] = useState<any>(null);

  useEffect(() => {
    const savedData = localStorage.getItem('aura_basic_data');
    if (savedData) {
      setBasicData(JSON.parse(savedData));
    } else {
      // Se não houver dados, volta para o início
      window.location.href = '/';
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    const story = formData.get('story');
    const express = formData.get('express') === 'on';

    // Links do Mercado Pago
    const LINK_MP_BASE = "https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=SEU_ID_97";
    const LINK_MP_EXPRESS = "https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=SEU_ID_124";

    const checkoutUrl = express ? LINK_MP_EXPRESS : LINK_MP_BASE;

    // Salva tudo no localStorage para referência futura (ou envio via WhatsApp na página de obrigado)
    const fullData = {
      ...basicData,
      story,
      express
    };
    localStorage.setItem('aura_full_data', JSON.stringify(fullData));

    // Simula processamento
    setTimeout(() => {
      window.location.href = checkoutUrl;
    }, 1500);
  };

  if (!basicData) return null;

  return (
    <div className="min-h-screen bg-[#0d0d0d] pt-[120px] pb-32 px-6">
      <div className="max-w-[800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <button 
            onClick={() => window.location.href = '/#criar'}
            className="flex items-center gap-2 text-white/30 hover:text-gold transition-colors text-[0.7rem] uppercase tracking-[0.3em] font-black mb-8"
          >
            <ArrowLeft size={14} /> Voltar
          </button>
          
          <div className="text-gold text-[0.65rem] tracking-[0.5em] uppercase mb-6 flex items-center gap-4">
            <div className="w-12 h-[1px] bg-gold" />
            Etapa Final: A Alma da Música
          </div>
          
          <h1 className="font-serif text-4xl md:text-7xl text-white mb-8 leading-tight">
            Conte-nos a <em className="italic text-gold">história</em> dela
          </h1>
          
          <p className="text-white/40 text-xl font-light leading-relaxed">
            Olá, <span className="text-white font-medium">{basicData.userName}</span>! Agora é o momento mais importante. 
            Para criarmos uma música que realmente emocione a sua <span className="text-gold font-medium">{basicData.targetRelation === 'mae' ? 'mãe' : 'pessoa especial'}</span>, 
            precisamos mergulhar nas memórias de vocês.
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-[0.02]">
              <Music2 size={120} />
            </div>

            <div className="space-y-8 relative z-10">
              <div className="space-y-4">
                <label className="block text-[0.7rem] tracking-[0.3em] uppercase text-white/30 font-black">
                  Guia para uma música inesquecível:
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { icon: <Heart size={14} />, text: "Momentos marcantes da infância" },
                    { icon: <Star size={14} />, text: "Frases que ela sempre diz" },
                    { icon: <Sparkles size={14} />, text: "Apelidos carinhosos" },
                    { icon: <Music2 size={14} />, text: "O que ela mais gosta de fazer" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-white/40 text-sm font-light">
                      <span className="text-gold">{item.icon}</span>
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <label className="block text-[0.7rem] tracking-[0.3em] uppercase text-white/30 font-black">
                  A História Completa
                </label>
                <textarea 
                  required 
                  name="story" 
                  rows={10} 
                  placeholder="Sinta-se à vontade para escrever... Quanto mais detalhes, mais emocionante será a letra. Fale sobre o jeito dela, as superações, o amor de vocês." 
                  className="w-full bg-white/[0.02] border border-white/10 text-white px-8 py-8 rounded-2xl outline-none focus:border-gold transition-all resize-none font-light leading-relaxed text-lg" 
                />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-start gap-6 bg-gold/5 p-8 border border-gold/20 rounded-2xl"
          >
            <input type="checkbox" id="express" name="express" className="mt-1 w-6 h-6 accent-gold" />
            <label htmlFor="express" className="cursor-pointer">
              <strong className="block text-gold text-lg uppercase tracking-widest font-black mb-1">Quero entrega expressa em 24h</strong>
              <span className="text-white/40 text-sm font-light">Sua música será priorizada e entregue amanhã mesmo (+R$ 27)</span>
            </label>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col gap-8"
          >
            <button 
              type="submit" 
              disabled={status === 'submitting'} 
              className="w-full bg-gold text-black-pure py-10 rounded-2xl font-black uppercase tracking-[0.4em] text-[1rem] hover:bg-white transition-all shadow-[0_30px_60px_rgba(201,169,110,0.2)] disabled:opacity-50 flex items-center justify-center gap-4"
            >
              {status === 'submitting' ? (
                <>Sintonizando Emoções...</>
              ) : (
                <>Garantir Minha Música Agora <Send size={20} /></>
              )}
            </button>
            
            <p className="text-center text-white/20 text-[0.65rem] uppercase tracking-[0.3em] font-bold">
              Pagamento 100% seguro via Mercado Pago • Satisfação Garantida
            </p>
          </motion.div>
        </form>
      </div>
    </div>
  );
}
