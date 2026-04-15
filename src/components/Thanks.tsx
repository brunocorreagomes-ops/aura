import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';

const WHATSAPP_NUMBER = "5511999999999";

export function Thanks() {
  const contactWhatsApp = () => {
    const message = encodeURIComponent("Olá Aura Musical! Acabei de garantir o presente musical de Dia das Mães. Gostaria de enviar os detalhes para a criação da música.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center px-6 py-20">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-[600px] w-full text-center"
      >
        <div className="w-24 h-24 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-10 border border-gold/30">
          <CheckCircle2 size={48} className="text-gold" />
        </div>

        <h1 className="font-serif text-4xl md:text-6xl text-white mb-6 leading-tight">
          Seu presente está sendo <em className="italic text-gold">criado!</em>
        </h1>

        <p className="text-white/50 text-xl font-light mb-12 leading-relaxed">
          Parabéns por escolher o presente mais emocionante que sua mãe já recebeu. Agora precisamos dos detalhes para dar vida à sua canção.
        </p>

        <div className="bg-white/[0.02] border border-white/5 p-8 md:p-10 rounded-3xl text-left mb-12">
          <h3 className="text-gold text-[0.7rem] tracking-[0.4em] uppercase font-black mb-8">Próximos Passos:</h3>
          <ul className="space-y-6">
            {[
              "Clique no botão abaixo para falar conosco no WhatsApp.",
              "Envie o comprovante e os detalhes da história (apelidos, memórias).",
              "Nossa equipe iniciará a composição imediatamente."
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-4 text-white/70">
                <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center text-gold text-xs font-bold shrink-0 mt-1">
                  {i + 1}
                </div>
                <p className="text-lg font-light leading-snug">{step}</p>
              </li>
            ))}
          </ul>
        </div>

        <button 
          onClick={contactWhatsApp}
          className="w-full bg-gold text-black-pure py-8 rounded-2xl font-black uppercase tracking-[0.3em] text-lg hover:bg-white transition-all shadow-[0_20px_60px_rgba(201,169,110,0.3)] flex items-center justify-center gap-4 group"
        >
          FALAR NO WHATSAPP AGORA
          <MessageSquare size={24} className="group-hover:scale-110 transition-transform" />
        </button>

        <p className="mt-10 text-white/20 text-[0.7rem] uppercase tracking-[0.4em] font-bold">
          Aguardamos você para dar vida a essa canção.
        </p>
      </motion.div>
    </div>
  );
}
