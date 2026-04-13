import { motion } from 'motion/react';
import { Play, Star, Heart, ShieldCheck, Music } from 'lucide-react';

export function TrustBar() {
  const items = [
    { icon: <Star size={16} />, label: "4.9/5 Avaliação Média" },
    { icon: <Heart size={16} />, label: "+2.140 Mães Emocionadas" },
    { icon: <ShieldCheck size={16} />, label: "Pagamento 100% Seguro" },
    { icon: <Music size={16} />, label: "Qualidade de Estúdio" },
  ];

  return (
    <div className="bg-[#0d0d0d] border-y border-gold/10 px-6 md:px-12 py-8 flex justify-center gap-8 md:gap-16 flex-wrap">
      {items.map((item, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="flex items-center gap-3"
        >
          <span className="text-gold">{item.icon}</span>
          <span className="text-[0.7rem] tracking-[0.2em] uppercase text-white/40 font-bold">{item.label}</span>
        </motion.div>
      ))}
    </div>
  );
}

export function HowItWorks() {
  const steps = [
    { 
      num: "01", 
      title: "Conte a História", 
      desc: "Você nos conta as memórias, apelidos e momentos que tornam sua mãe única através de um formulário simples." 
    },
    { 
      num: "02", 
      title: "Nós Compomos", 
      desc: "Nossos compositores profissionais criam uma letra e melodia exclusivas, gravadas com qualidade de cinema." 
    },
    { 
      num: "03", 
      title: "Você Surpreende", 
      desc: "Em até 48h você recebe a música e um Lyric Video para fazer o Dia das Mães dela ser o mais inesquecível de todos." 
    },
  ];

  return (
    <section id="como-funciona" className="bg-[#0d0d0d] px-6 md:px-12 py-32 content-visibility-auto">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-24">
          <div className="text-[0.65rem] tracking-[0.4em] uppercase text-gold mb-6">O Processo Criativo</div>
          <h2 className="font-serif text-4xl md:text-6xl font-light text-white">Como criamos sua <em className="italic text-gold">obra-prima</em></h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative"
            >
              <div className="text-8xl font-serif text-gold/5 absolute -top-12 -left-4 font-black">{step.num}</div>
              <h3 className="font-serif text-2xl mb-5 text-white relative z-10">{step.title}</h3>
              <p className="text-[1rem] text-white/50 leading-relaxed relative z-10 font-light">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AudioSamples() {
  const samples = [
    { genre: "Acústico / Piano", title: "O Colo que é Meu Mundo", desc: "Homenagem emocionante focada em gratidão e memórias de infância." },
    { genre: "MPB Contemporânea", title: "Força de Mulher", desc: "Uma letra vibrante sobre a resiliência e o amor incondicional de uma mãe." },
    { genre: "Sertanejo Suave", title: "Rainha do Meu Lar", desc: "Perfeita para mães que amam uma melodia acolhedora e letras diretas." },
    { genre: "Pop Orquestral", title: "Eterna Gratidão", desc: "Arranjo grandioso para celebrar uma vida inteira de dedicação." },
  ];

  return (
    <section id="exemplos" className="bg-[#0d0d0d] px-6 md:px-12 py-32 border-t border-white/5 content-visibility-auto">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-[600px]">
            <div className="text-[0.65rem] tracking-[0.4em] uppercase text-gold mb-6">Galeria de Emoções</div>
            <h2 className="font-serif text-4xl md:text-6xl font-light text-white leading-tight">
              Ouça o que podemos <br />
              <em className="italic text-gold">fazer pela sua mãe</em>
            </h2>
          </div>
          <p className="text-white/40 text-lg font-light max-w-[400px]">
            Cada música é uma digital única. Sinta a qualidade e a sensibilidade de nossas composições autorais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {samples.map((sample, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white/[0.02] border border-white/5 p-8 hover:border-gold/30 transition-all cursor-pointer"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="text-[0.6rem] tracking-[0.3em] uppercase text-gold mb-2 font-bold">{sample.genre}</div>
                  <h3 className="font-serif text-2xl text-white">{sample.title}</h3>
                </div>
                <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black-pure transition-all shadow-[0_0_15px_rgba(201,169,110,0)] group-hover:shadow-[0_0_20px_rgba(201,169,110,0.3)]">
                  <Play size={16} fill="currentColor" />
                </div>
              </div>
              <p className="text-white/40 text-sm leading-relaxed font-light">{sample.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
