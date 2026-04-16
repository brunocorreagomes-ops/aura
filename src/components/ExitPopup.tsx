import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Gift, MessageSquare, ArrowRight } from 'lucide-react';

export function ExitPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  const closePopup = () => setIsVisible(false);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-[500px] bg-[#0d0d0d] border border-gold/30 p-8 md:p-12 rounded-3xl shadow-[0_0_100px_rgba(201,169,110,0.2)]"
          >
            <button 
              onClick={closePopup}
              className="absolute top-6 right-6 text-white/20 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="text-center">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-gold/20">
                <Gift size={32} className="text-gold" />
              </div>

              <h3 className="font-serif text-3xl text-white mb-4 leading-tight">
                Não deixe sua mãe sem <br />
                <em className="italic text-gold">esse presente...</em>
              </h3>
              
              <p className="text-white/50 text-lg font-light mb-8 leading-relaxed">
                Deixe seu WhatsApp e receba agora um exemplo completo de música + um <strong>desconto extra de 10%</strong>.
              </p>

              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  const phone = (e.currentTarget.elements.namedItem('phone') as HTMLInputElement).value;
                  window.open(`https://wa.me/5511942789109?text=Olá! Vim pelo site e quero meu desconto de 10% e o exemplo de música. Meu número é ${phone}`, '_blank');
                  closePopup();
                }}
                className="space-y-4"
              >
                <div className="space-y-2 text-left">
                  <label className="text-[0.6rem] tracking-[0.3em] uppercase text-white/30 font-black ml-4">Seu WhatsApp</label>
                  <input 
                    required 
                    name="phone"
                    type="tel" 
                    placeholder="(XX) XXXXX-XXXX" 
                    className="w-full bg-white/[0.02] border border-white/10 text-white px-8 py-5 rounded-xl outline-none focus:border-gold transition-all font-light text-lg" 
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-gold text-black-pure py-6 rounded-xl font-black uppercase tracking-[0.3em] text-sm hover:bg-white transition-all shadow-[0_20px_40px_rgba(201,169,110,0.2)] flex items-center justify-center gap-3"
                >
                  Receber Exemplo Grátis
                  <ArrowRight size={18} />
                </button>
              </form>

              <p className="mt-6 text-white/20 text-[0.6rem] uppercase tracking-widest font-bold flex items-center justify-center gap-2">
                <MessageSquare size={12} />
                Prometemos não encher seu WhatsApp. Só o essencial.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
