import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Music, Heart } from 'lucide-react';

export function About() {
  return (
    <section id="sobre" className="bg-[#0d0d0d] px-6 md:px-12 py-32 overflow-hidden border-t border-white/5">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-[0.65rem] tracking-[0.4em] uppercase text-gold mb-8">Nossa Essência</div>
            <h2 className="font-serif text-4xl md:text-6xl font-light leading-tight mb-10 text-white">
              Transformando <em className="italic text-gold">sentimentos</em> em legados sonoros.
            </h2>
            <div className="space-y-8 text-white/50 leading-relaxed text-lg font-light">
              <p>
                A Aura nasceu de uma provocação simples: como tornar um momento inesquecível algo que possa ser ouvido e sentido para sempre?
              </p>
              <p>
                Acreditamos que cada história de amor, cada superação e cada laço familiar possui uma melodia própria. Nossa missão é capturar essa frequência única e traduzi-la em composições originais de altíssima qualidade.
              </p>
              <p>
                Combinamos a sensibilidade de compositores experientes com o poder da tecnologia para democratizar o acesso à música personalizada, sem abrir mão da alma e da emoção que só a arte verdadeira pode proporcionar.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-12 mt-16">
              <div className="flex flex-col gap-2">
                <div className="text-gold font-serif text-4xl font-light">2.1k+</div>
                <div className="text-[0.65rem] uppercase tracking-[0.2em] text-white/30 font-bold">Mães Emocionadas</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-gold font-serif text-4xl font-light">100%</div>
                <div className="text-[0.65rem] uppercase tracking-[0.2em] text-white/30 font-bold">Composição Autoral</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative z-10 overflow-hidden border border-white/5">
              <img 
                src="https://picsum.photos/seed/music-studio-aura/800/1000" 
                alt="Estúdio de Música Aura" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gold/5 mix-blend-overlay" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-full h-full border border-gold/10 -z-10" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-gold/5 blur-[100px] rounded-full" />
            
            <div className="absolute -bottom-6 -right-6 bg-[#0d0d0d] border border-gold/20 p-8 z-20 max-w-[240px] shadow-2xl">
              <Sparkles className="text-gold mb-4" size={24} />
              <p className="text-white/70 text-sm font-light italic leading-relaxed">
                "Cada nota é escolhida para vibrar na mesma frequência do seu coração."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
