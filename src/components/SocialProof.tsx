import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export function SocialProof() {
  const testimonials = [
    {
      name: "Mariana L.",
      context: "Presente de Dia das Mães",
      text: "Minha mãe chorou do início ao fim. Ela disse que foi o presente mais lindo que já recebeu na vida. A letra capturou detalhes que eu nem lembrava que tinha contado. Foi mágico.",
      avatar: "M",
      reaction: "https://picsum.photos/seed/reaction-m/400/200"
    },
    {
      name: "Carlos H.",
      context: "Homenagem de 70 anos",
      text: "Eu queria algo que ficasse para a história da nossa família. A Aura superou todas as expectativas. A qualidade da voz e da melodia é de nível profissional mesmo.",
      avatar: "C",
      reaction: "https://picsum.photos/seed/reaction-c/400/200"
    },
    {
      name: "Beatriz S.",
      context: "Surpresa de Aniversário",
      text: "A entrega em 24h me salvou! Fiz o pedido de última hora e recebi uma obra-prima. Minha mãe ouve a música todos os dias no carro. Vale cada centavo.",
      avatar: "B",
      reaction: "https://picsum.photos/seed/reaction-b/400/200"
    }
  ];

  return (
    <section id="depoimentos" className="bg-[#0d0d0d] px-6 md:px-12 py-32 content-visibility-auto border-t border-white/5">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-24">
          <div className="text-[0.65rem] tracking-[0.4em] uppercase text-gold mb-6">Vidas Emocionadas</div>
          <h2 className="font-serif text-4xl md:text-6xl font-light text-white leading-tight">
            Histórias que <em className="italic text-gold">ganharam vida</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/[0.02] border border-white/5 p-10 flex flex-col relative group hover:border-gold/30 transition-all"
            >
              <Quote className="absolute top-8 right-8 text-gold/10 group-hover:text-gold/20 transition-colors" size={40} />
              
              <div className="flex items-center gap-5 mb-8">
                <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold font-serif text-2xl">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-bold tracking-wide">{t.name}</div>
                  <div className="text-[0.65rem] text-white/30 uppercase tracking-[0.2em] font-bold">{t.context}</div>
                </div>
              </div>
              
              <div className="flex text-gold mb-6 gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
              </div>

              <p className="text-white/60 text-[1.05rem] leading-relaxed mb-10 font-light italic flex-grow">
                "{t.text}"
              </p>

              <div className="mt-auto pt-8 border-t border-white/5">
                <div className="text-[0.6rem] text-gold/40 uppercase tracking-[0.3em] mb-4 font-bold">Reação no WhatsApp:</div>
                <div className="overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-500">
                  <img 
                    src={t.reaction} 
                    alt="Reação" 
                    className="w-full h-32 object-cover hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
