import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react';

interface UpsellProps {
  type: 'upsell1' | 'upsell2';
  onNext: () => void;
  onAccept: (url: string) => void;
}

const LINKS = {
  VIDEO_49: "https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=SEU_ID_49",
  CANTORA_79: "https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=SEU_ID_79",
  SPOTIFY_29: "https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=SEU_ID_29",
  DESCONTO_VIDEO_29: "https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=SEU_ID_29_V",
};

export function Upsell({ type, onNext, onAccept }: UpsellProps) {
  const isUpsell1 = type === 'upsell1';

  return (
    <div className="min-h-screen bg-off-white flex items-center justify-center px-6 py-20">
      <div className="max-w-[800px] w-full">
        <img 
          src="https://i.ibb.co/ycWv9sZF/MUSICAL-2.png" 
          alt="Aura Musical Logo" 
          className="h-12 w-auto object-contain mx-auto mb-10"
          referrerPolicy="no-referrer"
        />
        <div className="w-full h-1.5 bg-deep-black/5 rounded-full mb-12 overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: isUpsell1 ? '50%' : '80%' }}
            className="h-full bg-gold"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white border border-gold/20 p-8 md:p-12 rounded-3xl text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />
          
          <p className="text-gold text-[0.7rem] tracking-[0.4em] uppercase font-black mb-6">
            {isUpsell1 ? "QUASE LÁ! TURBINE SUA HOMENAGEM" : "ÚLTIMA CHANCE... DESCONTO LIBERADO"}
          </p>

          <h1 className="font-serif text-3xl md:text-5xl text-deep-black mb-8 leading-tight">
            {isUpsell1 ? (
              <>Dê um toque <em className="italic text-gold">profissional</em> extra</>
            ) : (
              <>Não perca o <em className="italic text-gold">Vídeo com Fotos</em></>
            )}
          </h1>

          {isUpsell1 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  title: "Vídeo com Fotos",
                  price: "49",
                  link: LINKS.VIDEO_49,
                  desc: "Lyric video com fotos de vocês."
                },
                {
                  title: "Cantora Profissional",
                  price: "79",
                  link: LINKS.CANTORA_79,
                  desc: "Voz feminina de estúdio."
                },
                {
                  title: "Estilo Spotify",
                  price: "29",
                  link: LINKS.SPOTIFY_29,
                  desc: "Capa e publicação digital."
                }
              ].map((opt, i) => (
                <div key={i} className="bg-cream/20 border border-deep-black/5 p-6 rounded-2xl flex flex-col justify-between hover:border-gold/30 transition-all group">
                  <div>
                    <h3 className="text-deep-black font-serif text-lg mb-2">{opt.title}</h3>
                    <p className="text-text-muted text-[0.7rem] mb-4">{opt.desc}</p>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-gold mb-4">R$ {opt.price}</div>
                    <button 
                      onClick={() => onAccept(opt.link)}
                      className="w-full bg-deep-black text-white-pure text-[0.6rem] py-3 uppercase tracking-widest font-black hover:bg-gold hover:text-deep-black transition-all"
                    >
                      ADICIONAR
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-cream/20 rounded-2xl p-8 mb-10 border border-deep-black/5 max-w-[500px] mx-auto">
              <p className="text-text-muted text-xs uppercase tracking-widest mb-2">De R$ 49 por apenas:</p>
              <div className="text-6xl font-black text-deep-black mb-6">
                <span className="text-gold text-2xl mr-2">R$</span>29
              </div>
              <button 
                onClick={() => onAccept(LINKS.DESCONTO_VIDEO_29)}
                className="w-full bg-gold text-deep-black py-6 rounded-xl font-black uppercase tracking-[0.3em] text-sm hover:bg-deep-black hover:text-white-pure transition-all shadow-xl"
              >
                QUERO O VÍDEO COM DESCONTO 🎬
              </button>
            </div>
          )}

          <div className="flex flex-col gap-6">
            <button 
              onClick={onNext}
              className="text-deep-black/20 hover:text-deep-black/40 transition-colors text-[0.7rem] uppercase tracking-[0.3em] font-bold flex items-center justify-center gap-2"
            >
              <XCircle size={14} />
              {isUpsell1 ? "Não, continuar para finalização" : "Não, obrigado. Prefiro ficar sem o vídeo."}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
