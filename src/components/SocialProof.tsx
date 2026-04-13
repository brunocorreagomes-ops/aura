import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export function SocialProof() {
  const testimonials = [
    {
      name: "Lucas M.",
      context: "Presente para mãe, 60 anos",
      text: "Minha mãe chorou do início ao fim. Ela disse que foi o presente mais lindo que já recebeu na vida. A letra capturou detalhes que eu nem lembrava que tinha contado.",
      avatar: "L",
      reaction: "https://picsum.photos/seed/reaction1/400/200"
    },
    {
      name: "Camila R.",
      context: "Aniversário de 10 anos de casados",
      text: "Fizemos um jantar romântico e coloquei a música para tocar. Meu marido ficou sem palavras. É uma recordação que vamos guardar para sempre.",
      avatar: "C",
      reaction: "https://picsum.photos/seed/reaction2/400/200"
    },
    {
      name: "Ricardo S.",
      context: "Pedido de desculpas / Reconciliação",
      text: "Eu não sabia como me expressar, e a música disse tudo por mim. Reatamos e hoje estamos mais fortes do que nunca. Obrigado AuraSong!",
      avatar: "R",
      reaction: "https://picsum.photos/seed/reaction3/400/200"
    }
  ];

  return (
    <section className="bg-[#0d0d0d] px-6 md:px-12 py-24 content-visibility-auto">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <div className="text-[0.65rem] tracking-[0.4em] uppercase text-gold mb-5">Vidas Emocionadas</div>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-white">Histórias que <em className="italic text-gold">Ganharam Vida</em></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/[0.02] border border-gold/10 p-8 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold text-xl">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-bold">{t.name}</div>
                  <div className="text-[0.7rem] text-white/40 uppercase tracking-widest">{t.context}</div>
                </div>
              </div>
              
              <div className="flex text-gold mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>

              <p className="text-white/70 text-[0.95rem] leading-relaxed mb-8 italic flex-grow">
                "{t.text}"
              </p>

              <div className="mt-auto">
                <div className="text-[0.6rem] text-gold/50 uppercase tracking-widest mb-2">Reação no WhatsApp:</div>
                <img 
                  src={t.reaction} 
                  alt="Reação" 
                  className="w-full h-32 object-cover rounded border border-gold/20 opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
