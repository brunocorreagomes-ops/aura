import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';

const WHATSAPP_NUMBER = "5511942789109";

export function Thanks() {
  const contactWhatsApp = () => {
    const savedData = localStorage.getItem('aura_full_data');
    let motherName = "[Mãe]";
    if (savedData) {
      const data = JSON.parse(savedData);
      motherName = data.motherName || "[Mãe]";
    }
    
    const message = encodeURIComponent(`Olá! Acabei de garantir a música da minha mãe.`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  const savedData = localStorage.getItem('aura_full_data');
  const motherName = savedData ? JSON.parse(savedData).motherName : "[Mãe]";

  return (
    <div className="min-h-screen bg-off-white flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <img src="https://picsum.photos/seed/texture/1920/1080?blur=10" className="w-full h-full object-cover" alt="" referrerPolicy="no-referrer" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-[700px] w-full text-center relative z-10"
      >
        <img 
          src="https://i.ibb.co/bjkd4Qqz/auralogohorizontal.png" 
          alt="Aura Musical Logo" 
          className="h-12 md:h-16 w-auto object-contain mx-auto mb-16"
          referrerPolicy="no-referrer"
        />

        <div className="mb-12">
          <span className="text-gold text-[0.7rem] tracking-[0.4em] uppercase font-black mb-6 block">Pedido Confirmado</span>
          <h1 className="font-serif text-4xl md:text-7xl text-deep-black mb-8 leading-[1.1] tracking-tight">
            Obrigado por escolher a <em className="italic font-light text-gold">Aura Musical!</em>
          </h1>
          
          <div className="w-16 h-[1px] bg-gold/30 mx-auto mb-12" />

          <p className="text-text-muted text-xl md:text-2xl font-light mb-16 leading-relaxed max-w-[550px] mx-auto">
            Recebemos o seu pedido e a história da <strong className="text-deep-black font-semibold">{motherName}</strong> já está em nosso estúdio para ganhar vida.
          </p>
        </div>

        <div className="space-y-8">
          <button 
            onClick={contactWhatsApp}
            className="w-full md:w-auto bg-deep-black text-white-pure px-12 py-8 rounded-full font-bold uppercase tracking-[0.3em] text-[0.85rem] hover:bg-gold hover:text-white-pure transition-all shadow-2xl flex items-center justify-center gap-4 group mx-auto"
          >
            Falar no WhatsApp
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <p className="text-[0.6rem] text-text-muted uppercase tracking-[0.3em] font-medium opacity-50">
            Nossa equipe entrará em contato em breve.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
