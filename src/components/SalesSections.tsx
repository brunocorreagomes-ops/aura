import React from 'react';
import { motion } from 'motion/react';
import { Heart, Clock, MessageSquare, Star, ArrowRight } from 'lucide-react';

export function PainSection() {
  return (
    <section className="bg-black-pure px-6 md:px-12 py-24 border-t border-gold/10">
      <div className="max-w-[1000px] mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-5xl font-light leading-tight mb-12"
        >
          O tempo passa, as memórias desbotam... <br />
          <span className="text-gold italic">e as palavras ficam presas.</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          {[
            {
              title: "O Arrependimento do Silêncio",
              desc: "Quantas vezes você quis dizer o quanto alguém é importante, mas não encontrou o momento ou as palavras certas?",
              icon: <MessageSquare className="text-gold mb-4" size={28} />
            },
            {
              title: "Presentes que Viram Lixo",
              desc: "Flores murcham, perfumes acabam, roupas saem de moda. O que você deu no ano passado ainda significa algo hoje?",
              icon: <Clock className="text-gold mb-4" size={28} />
            },
            {
              title: "A Distância Emocional",
              desc: "A rotina nos afasta de quem amamos. Sem um gesto marcante, os laços se tornam apenas automáticos.",
              icon: <Heart className="text-gold mb-4" size={28} />
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-8 bg-white/[0.02] border border-gold/5 hover:border-gold/20 transition-all"
            >
              {item.icon}
              <h3 className="font-serif text-xl text-cream mb-4">{item.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SolutionSection() {
  return (
    <section className="bg-black-soft px-6 md:px-12 py-24 overflow-hidden">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-[0.65rem] tracking-[0.4em] uppercase text-gold mb-5">A Solução AuraSong</div>
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-8 leading-tight">
            Nós transformamos seus <em className="italic text-gold">sentimentos</em> em uma obra de arte sonora.
          </h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            Não é apenas uma música. É a sua história, seus detalhes e suas memórias narradas em uma composição profissional que toca a alma. 
          </p>
          <ul className="space-y-4 mb-10">
            {[
              "Letras baseadas em fatos reais da sua vida",
              "Produção musical de nível internacional",
              "Vozes emocionantes que dão vida ao seu texto",
              "Entrega recorde para presentes de última hora"
            ].map((text, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-cream/80">
                <Star size={14} className="text-gold" /> {text}
              </li>
            ))}
          </ul>
          <a href="#criar" className="inline-flex items-center gap-3 text-gold border-b border-gold/30 pb-1 hover:border-gold transition-all uppercase tracking-widest text-[0.7rem]">
            Ver como funciona <ArrowRight size={14} />
          </a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square bg-gold/5 border border-gold/10 flex items-center justify-center p-12">
             <div className="text-center">
                <div className="text-gold font-serif text-6xl mb-4 italic">"</div>
                <p className="font-serif text-2xl text-cream italic leading-relaxed">
                  "Eu não sabia como dizer que a amava depois de 20 anos. A música disse tudo por mim. Ela chorou, eu chorei. Foi o melhor dia das nossas vidas."
                </p>
                <div className="mt-8 text-gold tracking-widest uppercase text-[0.7rem]">— Ricardo M., Cliente AuraSong</div>
             </div>
          </div>
          <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-right border-gold/20" />
          <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-left border-gold/20" />
        </motion.div>
      </div>
    </section>
  );
}

export function ImmersionSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-black-pure">
      <div className="absolute inset-0 opacity-20">
        <img src="https://picsum.photos/seed/emotion/1920/1080?blur=10" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      </div>
      <div className="relative z-10 max-w-[800px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl md:text-6xl font-light mb-8 leading-tight">
            Feche os olhos e <br />
            <em className="italic text-gold">imagine a cena...</em>
          </h2>
          <p className="text-xl text-white/70 font-light leading-relaxed mb-12">
            Vocês estão sentados, o celular na mão, o silêncio toma conta. Você aperta o play. <br /><br />
            A melodia começa suave. De repente, ela ouve o próprio nome. Ela ouve aquele detalhe daquele jantar de 5 anos atrás. O arrepio é imediato. <br /><br />
            O olhar dela encontra o seu. Não precisa de mais nada. <strong>O mundo parou para ouvir vocês.</strong>
          </p>
          <a href="#criar" className="bg-gold text-black-pure px-12 py-5 uppercase tracking-[0.2em] font-bold hover:bg-gold-light transition-all">
            Eu Quero Viver Esse Momento
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-black-pure to-black-soft text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-[800px] mx-auto border border-gold/20 p-16 bg-white/[0.01]"
      >
        <h2 className="font-serif text-4xl md:text-5xl mb-8">Não deixe para <em className="italic text-gold">amanhã</em> o que pode ser eterno hoje.</h2>
        <p className="text-white/50 mb-12 text-lg">
          As vagas para entrega em 24h são limitadas devido ao nosso processo artesanal de composição. Garanta a sua agora.
        </p>
        <a href="#criar" className="inline-block bg-gold text-black-pure px-12 py-5 text-[0.9rem] tracking-[0.2em] uppercase font-bold hover:bg-gold-light transition-all shadow-[0_15px_40px_rgba(201,169,110,0.2)]">
          Começar Minha Música
        </a>
      </motion.div>
    </section>
  );
}
