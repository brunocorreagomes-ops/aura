import { motion } from 'motion/react';
import { Play, Star, Heart, ShieldCheck, Music } from 'lucide-react';

export function TrustBar() {
  const items = [
    { icon: <ShieldCheck size={16} />, label: "Pagamento Seguro via Mercado Pago" },
    { icon: <Music size={16} />, label: "Qualidade de Estúdio Profissional" },
  ];

  return (
    <div className="bg-[#0d0d0d] border-y border-white/5 px-6 md:px-12 py-10 flex justify-center gap-10 md:gap-20 flex-wrap content-visibility-auto">
      {items.map((item, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="flex items-center gap-4"
        >
          <span className="text-gold/60">{item.icon}</span>
          <span className="text-[0.65rem] tracking-[0.3em] uppercase text-white/30 font-black">{item.label}</span>
        </motion.div>
      ))}
    </div>
  );
}

export function HowItWorks() {
  const steps = [
    { 
      num: "01", 
      title: "Você conta sua história", 
      desc: "Simples assim. Sem complicação. Através de um guia rápido, você nos dá os detalhes que tornam ela especial." 
    },
    { 
      num: "02", 
      title: "Nós criamos sua música", 
      desc: "Nossos compositores transformam suas palavras em uma letra e melodia exclusivas." 
    },
    { 
      num: "03", 
      title: "Você emociona sua mãe", 
      desc: "Você recebe o presente perfeito para criar o momento mais inesquecível da vida dela." 
    },
  ];

  return (
    <section id="como-funciona" className="bg-[#0d0d0d] px-6 md:px-12 py-40 content-visibility-auto border-t border-white/5">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-32">
          <div className="text-[0.65rem] tracking-[0.5em] uppercase text-gold mb-8 font-black">O Processo Criativo</div>
          <h2 className="font-serif text-4xl md:text-7xl font-light text-white leading-tight">
            Como criamos sua <br />
            <em className="italic text-gold">obra-prima</em>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="relative group"
            >
              <div className="text-[10rem] font-serif text-gold/[0.03] absolute -top-24 -left-8 font-black leading-none group-hover:text-gold/[0.06] transition-colors duration-700">{step.num}</div>
              <h3 className="font-serif text-3xl mb-6 text-white relative z-10 font-light">{step.title}</h3>
              <p className="text-[1.1rem] text-white/40 leading-relaxed relative z-10 font-light">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AudioSamples() {
  const samples = [
    { genre: "Para Dona Maria – de seu filho Lucas", title: "O Colo que é Meu Mundo", desc: "Uma homenagem profunda sobre gratidão e as raízes que nos sustentam." },
    { genre: "Para a melhor mãe do mundo", title: "Força de Mulher", desc: "Ritmo vibrante que celebra a resiliência e a luz que só uma mãe tem." },
  ];

  return (
    <section id="exemplos" className="bg-[#0d0d0d] px-6 md:px-12 py-40 border-t border-white/5 content-visibility-auto">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
          <div className="max-w-[650px]">
            <div className="text-[0.65rem] tracking-[0.5em] uppercase text-gold mb-8 font-black">Prova Real</div>
            <h2 className="font-serif text-4xl md:text-7xl font-light text-white leading-tight">
              Ouça antes de <br />
              <em className="italic text-gold">decidir</em>
            </h2>
          </div>
          <p className="text-white/30 text-xl font-light max-w-[400px] leading-relaxed italic">
            "Insight: concorrentes que deixam ouvir antes convertem mais"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {samples.map((sample, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group bg-white/[0.01] border border-white/5 p-8 md:p-10 hover:border-gold/30 transition-all duration-500 cursor-pointer"
            >
              <div className="flex justify-between items-start mb-8">
                <div>
                  <div className="text-[0.65rem] tracking-[0.4em] uppercase text-gold mb-3 font-black">{sample.genre}</div>
                  <h3 className="font-serif text-3xl text-white font-light">{sample.title}</h3>
                </div>
                <div className="w-14 h-14 rounded-full border border-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black-pure transition-all duration-500 shadow-[0_0_30px_rgba(201,169,110,0)] group-hover:shadow-[0_0_40px_rgba(201,169,110,0.2)]">
                  <Play size={20} fill="currentColor" />
                </div>
              </div>
              <p className="text-white/30 text-base leading-relaxed font-light">{sample.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
