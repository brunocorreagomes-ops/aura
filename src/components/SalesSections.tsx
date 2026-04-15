import React from 'react';
import { motion } from 'motion/react';
import { Heart, Clock, MessageSquare, Star, ArrowRight, Gift, Sparkles } from 'lucide-react';

export function PainSection() {
  return (
    <section className="bg-[#0d0d0d] px-6 md:px-12 py-32 border-t border-white/5 content-visibility-auto">
      <div className="max-w-[1000px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[0.65rem] tracking-[0.4em] uppercase text-gold mb-8 font-black"
        >
          O fim da era dos presentes esquecíveis
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-6xl font-light leading-tight mb-16 text-white"
        >
          Flores murcham, joias se perdem... <br />
          <span className="text-gold italic">mas uma música é um presente que ela vai sentir para sempre.</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {[
            {
              title: "O Presente que não é 'Coisa'",
              desc: "Sua mãe já tem de tudo. O que ela realmente deseja é sentir que a história dela é importante e que você se orgulha de ser filho(a) dela.",
              icon: <Gift className="text-gold mb-6" size={32} />
            },
            {
              title: "A Emoção que Fica",
              desc: "Diferente de um objeto, uma música é um gatilho emocional. Daqui a 10 anos, ela dará o play e sentirá exatamente o que sentiu hoje.",
              icon: <Sparkles className="text-gold mb-6" size={32} />
            },
            {
              title: "Palavras que Curam",
              desc: "Às vezes, a rotina nos impede de dizer o óbvio. Uma música AuraMusical diz tudo o que seu coração sente, mas sua voz não consegue expressar.",
              icon: <Heart className="text-gold mb-6" size={32} />
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-6 md:p-10 bg-white/[0.02] border border-white/5 hover:border-gold/20 transition-all group"
            >
              <div className="group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
              <h3 className="font-serif text-2xl text-white mb-5">{item.title}</h3>
              <p className="text-[0.95rem] text-white/40 leading-relaxed font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SolutionSection() {
  return (
    <section className="bg-[#0d0d0d] px-6 md:px-12 py-32 overflow-hidden border-t border-white/5 content-visibility-auto">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-[0.65rem] tracking-[0.4em] uppercase text-gold mb-8 font-black">A Experiência AuraMusical</div>
          <h2 className="font-serif text-4xl md:text-6xl font-light mb-10 leading-tight text-white">
            Sua história merece uma <em className="italic text-gold">trilha sonora</em> original.
          </h2>
          <p className="text-white/50 mb-10 text-lg leading-relaxed font-light">
            Não entregamos apenas um arquivo de áudio. Entregamos um momento de conexão profunda. Cada verso é lapidado para refletir a essência da sua mãe.
          </p>
          <ul className="space-y-6 mb-12">
            {[
              "Composição autoral baseada no seu briefing",
              "Produção musical com instrumentistas reais",
              "Vozes profissionais selecionadas pela emoção",
              "Lyric Video exclusivo incluso no pacote"
            ].map((text, i) => (
              <li key={i} className="flex items-center gap-4 text-[1rem] text-white/70 font-light">
                <div className="w-1.5 h-1.5 rounded-full bg-gold" /> {text}
              </li>
            ))}
          </ul>
          <a href="#criar" className="inline-flex items-center gap-4 text-gold border-b border-gold/20 pb-2 hover:border-gold transition-all uppercase tracking-[0.3em] text-[0.75rem] font-black">
            Ver Planos Disponíveis <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export function ImmersionSection() {
  return (
    <section className="relative py-48 px-6 overflow-hidden bg-[#0d0d0d] content-visibility-auto">
      <div className="absolute inset-0 opacity-10">
        <img src="https://picsum.photos/seed/motherslove/1920/1080?blur=10" className="w-full h-full object-cover" loading="lazy" referrerPolicy="no-referrer" />
      </div>
      <div className="relative z-10 max-w-[900px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl md:text-7xl font-light mb-10 leading-tight text-white">
            O silêncio que precede a <br />
            <em className="italic text-gold">lágrima mais sincera.</em>
          </h2>
          <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed mb-16 max-w-[750px] mx-auto">
            O silêncio da sala, a melodia começando suave... e de repente, ela ouve a própria história. O arrepio é imediato. O olhar dela encontra o seu. <br /><br />
            <strong>O mundo para por 3 minutos apenas para vocês dois.</strong>
          </p>
          <a href="#criar" className="inline-block bg-gold text-black-pure px-16 py-6 text-[0.9rem] tracking-[0.3em] uppercase font-black hover:bg-white transition-all shadow-[0_20px_50px_rgba(201,169,110,0.3)]">
            Quero Criar Esse Momento
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="py-40 px-6 bg-[#0d0d0d] text-center border-t border-white/5 content-visibility-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-[1000px] mx-auto border border-white/5 p-10 md:p-20 bg-white/[0.01] relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-8">
          <Sparkles className="text-gold/20" size={60} />
        </div>
        <h2 className="font-serif text-4xl md:text-6xl mb-10 text-white leading-tight">
          O legado que ela vai <em className="italic text-gold">ouvir</em> com o coração.
        </h2>
        <p className="text-white/40 mb-14 text-lg font-light max-w-[650px] mx-auto">
          Devido ao nosso processo artesanal de composição, as vagas para o Dia das Mães são extremamente limitadas. Garanta a sua agora.
        </p>
        <a href="#criar" className="inline-block bg-gold text-black-pure px-16 py-6 text-[0.9rem] tracking-[0.3em] uppercase font-black hover:bg-white transition-all shadow-[0_20px_50px_rgba(201,169,110,0.3)]">
          Transformar minha história em música
        </a>
      </motion.div>
    </section>
  );
}
