import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export function SocialProof() {
  const testimonials = [
    {
      name: "Ana Paula V.",
      context: "Presente de Dia das Mães",
      text: "Minha mãe chorou do início ao fim. Ela disse que foi o presente mais lindo que já recebeu na vida. A letra capturou detalhes que eu nem lembrava que tinha contado. Foi mágico.",
      avatar: "A",
      reaction: "https://picsum.photos/seed/reaction-a/400/200"
    },
    {
      name: "Rodrigo M.",
      context: "Homenagem de 70 anos",
      text: "Eu queria algo que ficasse para a história da nossa família. A AuraMusical superou todas as expectativas. A qualidade da voz e da melodia é de nível profissional mesmo.",
      avatar: "R",
      reaction: "https://picsum.photos/seed/reaction-r/400/200"
    },
    {
      name: "Juliana K.",
      context: "Surpresa de Aniversário",
      text: "A entrega em 24h me salvou! Fiz o pedido de última hora e recebi uma obra-prima. Minha mãe ouve a música todos os dias no carro. Vale cada centavo.",
      avatar: "J",
      reaction: "https://picsum.photos/seed/reaction-j/400/200"
    }
  ];

  return (
    <section id="depoimentos" className="bg-[#0d0d0d] px-6 md:px-12 py-40 content-visibility-auto border-t border-white/5">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[0.65rem] tracking-[0.5em] uppercase text-gold mb-8 font-black"
          >
            Vidas Emocionadas
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-7xl font-light text-white leading-tight"
          >
            Histórias que <em className="italic text-gold">ganharam vida</em>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="bg-white/[0.01] border border-white/5 p-8 md:p-12 flex flex-col relative group hover:border-gold/30 transition-all duration-500"
            >
              <Quote className="absolute top-10 right-10 text-gold/5 group-hover:text-gold/10 transition-colors" size={60} />
              
              <div className="flex items-center gap-6 mb-10">
                <div className="w-16 h-16 rounded-full bg-gold/5 border border-gold/10 flex items-center justify-center text-gold font-serif text-2xl group-hover:bg-gold group-hover:text-black-pure transition-all duration-500">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white text-lg font-bold tracking-wide">{t.name}</div>
                  <div className="text-[0.6rem] text-white/30 uppercase tracking-[0.3em] font-black">{t.context}</div>
                </div>
              </div>
              
              <div className="flex text-gold mb-8 gap-1.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>

              <p className="text-white/50 text-xl leading-relaxed mb-12 font-light italic flex-grow">
                "{t.text}"
              </p>

              <div className="mt-auto pt-10 border-t border-white/5">
                <div className="text-[0.6rem] text-gold/40 uppercase tracking-[0.4em] mb-6 font-black">Reação no WhatsApp:</div>
                <div className="overflow-hidden border border-white/5 grayscale group-hover:grayscale-0 transition-all duration-700 rounded-lg">
                  <img 
                    src={t.reaction} 
                    alt="Reação" 
                    loading="lazy"
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-1000"
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
