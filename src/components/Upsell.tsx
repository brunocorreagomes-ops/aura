import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react';

interface UpsellProps {
  type: 'upsell1' | 'upsell2';
  onNext: () => void;
  onAccept: (url: string) => void;
}

const LINKS = {
  VIDEO_47: "https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=SEU_ID_47",
  VIDEO_27: "https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=SEU_ID_27",
};

export function Upsell({ type, onNext, onAccept }: UpsellProps) {
  const isUpsell1 = type === 'upsell1';

  return (
    <div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center px-6 py-20">
      <div className="max-w-[600px] w-full">
        <div className="w-full h-1.5 bg-white/5 rounded-full mb-12 overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: isUpsell1 ? '50%' : '80%' }}
            className="h-full bg-gold"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/[0.02] border border-gold/20 p-8 md:p-12 rounded-3xl text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />
          
          <p className="text-gold text-[0.7rem] tracking-[0.4em] uppercase font-black mb-6">
            {isUpsell1 ? "ESPERE! NÃO FECHE ESTA PÁGINA..." : "ÚLTIMA CHANCE..."}
          </p>

          <h1 className="font-serif text-3xl md:text-5xl text-white mb-8 leading-tight">
            {isUpsell1 ? (
              <>Torne este momento visualmente <em className="italic text-gold">inesquecível</em></>
            ) : (
              <>E se eu te der um <em className="italic text-gold">desconto especial</em> no vídeo?</>
            )}
          </h1>

          <p className="text-white/50 text-lg font-light mb-10 leading-relaxed">
            {isUpsell1 
              ? "Sua música é linda, mas imagine ela assistindo a um Lyric Video (Vídeo com Letra) personalizado com fotos de vocês enquanto ouve a canção."
              : "Eu realmente não quero que sua mãe perca a experiência de ver a letra enquanto ouve. Vou te dar uma versão simplificada do vídeo por um valor simbólico."
            }
          </p>

          <div className="bg-black/40 rounded-2xl p-8 mb-10 border border-white/5">
            <ul className="text-left space-y-4 mb-8">
              {[
                "Letra sincronizada com a música",
                "Fundo cinematográfico ou fotos pessoais",
                "Alta definição para compartilhar",
                "Efeito emocional 10x maior"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/70 text-sm">
                  <CheckCircle2 size={18} className="text-gold shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-white/5">
              <p className="text-white/30 text-xs uppercase tracking-widest mb-2">
                {isUpsell1 ? "Adicione por apenas:" : "De R$ 47 por apenas:"}
              </p>
              <div className="text-5xl font-black text-white">
                <span className="text-gold text-2xl mr-2">R$</span>
                {isUpsell1 ? "47" : "27"}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <button 
              onClick={() => onAccept(isUpsell1 ? LINKS.VIDEO_47 : LINKS.VIDEO_27)}
              className="w-full bg-gold text-black-pure py-6 rounded-xl font-black uppercase tracking-[0.3em] text-sm hover:bg-white transition-all shadow-[0_20px_50px_rgba(201,169,110,0.2)] flex items-center justify-center gap-3"
            >
              {isUpsell1 ? "SIM! QUERO O VÍDEO PERSONALIZADO 🎬" : "OK, QUERO O VÍDEO POR R$ 27 🎁"}
            </button>
            
            <button 
              onClick={onNext}
              className="text-white/20 hover:text-white/40 transition-colors text-[0.7rem] uppercase tracking-[0.3em] font-bold flex items-center justify-center gap-2"
            >
              <XCircle size={14} />
              {isUpsell1 ? "Não, quero apenas a música (perder esta oferta)" : "Não, obrigado. Prefiro ficar sem o vídeo."}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
