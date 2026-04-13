import React from 'react';
import { motion } from 'motion/react';

export function About() {
  return (
    <section id="sobre" className="bg-black-pure px-6 md:px-12 py-24 overflow-hidden content-visibility-auto">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-[0.65rem] tracking-[0.4em] uppercase text-gold mb-5 flex items-center gap-3">
              <div className="w-[30px] h-[1px] bg-gold" />
              Nossa Essência
            </div>
            <h2 className="font-serif text-4xl md:text-[3.5rem] font-light leading-[1.1] mb-8">
              Transformando <em className="italic text-gold">Sentimentos</em> em Legados Sonoros
            </h2>
            <div className="space-y-6 text-white/60 leading-relaxed text-[1rem]">
              <p>
                A AuraSong nasceu de uma provocação simples: como tornar um momento inesquecível algo que possa ser ouvido e sentido para sempre?
              </p>
              <p>
                Acreditamos que cada história de amor, cada superação e cada laço familiar possui uma melodia própria. Nossa missão é capturar essa frequência única e traduzi-la em composições originais de altíssima qualidade.
              </p>
              <p>
                Combinamos a sensibilidade de compositores experientes com o poder da inteligência artificial para democratizar o acesso à música personalizada, sem abrir mão da alma e da emoção que só a arte verdadeira pode proporcionar.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <div className="text-gold font-serif text-3xl mb-1">2k+</div>
                <div className="text-[0.7rem] uppercase tracking-widest text-white/40">Histórias Contadas</div>
              </div>
              <div>
                <div className="text-gold font-serif text-3xl mb-1">100%</div>
                <div className="text-[0.7rem] uppercase tracking-widest text-white/40">Originalidade</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative z-10 overflow-hidden">
              <img 
                src="https://picsum.photos/seed/music-studio/800/1000" 
                alt="Estúdio de Música AuraSong" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gold/10 mix-blend-overlay" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-full h-full border border-gold/20 -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gold/5 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
