import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';

const WHATSAPP_NUMBER = "5511942789109";

export function Thanks() {
  const contactWhatsApp = () => {
    const savedData = localStorage.getItem('aura_full_data');
    let details = "";
    if (savedData) {
      const data = JSON.parse(savedData);
      details = `\n\n*Resumo do Pedido:*\n- Cliente: ${data.userName}\n- Presente para: ${data.targetRelation}\n- Data: ${data.targetDate}\n- Entrega Expressa: ${data.express ? 'Sim' : 'Não'}`;
    }
    
    const message = encodeURIComponent(`Olá Aura Musical! Acabei de garantir o presente musical de Dia das Mães. Gostaria de enviar os detalhes para a criação da música.${details}`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-off-white flex items-center justify-center px-6 py-20">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-[600px] w-full text-center"
      >
        <img 
          src="https://i.ibb.co/bjkd4Qqz/auralogohorizontal.png" 
          alt="Aura Musical Logo" 
          className="h-16 w-auto object-contain mx-auto mb-12"
          referrerPolicy="no-referrer"
        />

        <div className="w-24 h-24 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-10 border border-gold/30 text-gold">
          <CheckCircle2 size={48} />
        </div>

        <h1 className="font-serif text-4xl md:text-6xl text-deep-black mb-6 leading-tight">
          Seu presente está sendo <em className="italic text-gold">criado!</em>
        </h1>

        <p className="text-text-muted text-xl font-light mb-12 leading-relaxed">
          Parabéns por escolher o presente mais emocionante que sua mãe já recebeu. Agora precisamos dos detalhes para dar vida à sua canção.
        </p>

        <div className="bg-white border border-deep-black/5 p-8 md:p-10 rounded-3xl text-left mb-12 shadow-xl">
          <h3 className="text-gold text-[0.7rem] tracking-[0.4em] uppercase font-black mb-8">Próximos Passos:</h3>
          <ul className="space-y-6">
            {[
              "Clique no botão abaixo para falar conosco no WhatsApp.",
              "Envie o comprovante e os detalhes da história (apelidos, memórias).",
              "Nossa equipe iniciará a composição imediatamente."
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-4 text-text-muted">
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
          className="w-full bg-deep-black text-white-pure py-8 rounded-2xl font-black uppercase tracking-[0.3em] text-lg hover:bg-gold hover:text-deep-black transition-all shadow-2xl flex items-center justify-center gap-4 group"
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
