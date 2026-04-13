import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export function TrustBar() {
  const items = [
    { number: "24h", label: "Prazo de Entrega" },
    { number: "100%", label: "Garantia de Devolução" },
    { number: "+2mil", label: "Histórias Eternizadas" },
    { number: "★ 4.9", label: "Avaliação Média" },
  ];

  return (
    <div className="border-y border-gold/15 px-6 md:px-12 py-7 flex justify-center gap-8 md:gap-16 flex-wrap">
      {items.map((item, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="text-center"
        >
          <span className="block font-serif text-3xl font-light text-gold">{item.number}</span>
          <span className="text-[0.7rem] tracking-[0.15em] uppercase text-white/50">{item.label}</span>
        </motion.div>
      ))}
    </div>
  );
}

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Compartilhe a Magia",
      desc: "Responda a apenas cinco perguntas simples sobre a pessoa que receberá o presente. Conte os apelidos, as datas marcantes e as memórias mais felizes."
    },
    {
      num: "02",
      title: "Deixe a Arte Acontecer",
      desc: "Nossa tecnologia de ponta une forças com curadores musicais para transformar seus sentimentos em versos impecáveis e uma melodia arrepiante."
    },
    {
      num: "03",
      title: "A Emoção em Suas Mãos",
      desc: "Receba a canção finalizada direto no seu e-mail, pronta para dar o play, compartilhar nas redes e causar emoção profunda em quem você ama."
    }
  ];

  return (
    <section className="bg-black-soft px-6 md:px-12 py-24 content-visibility-auto">
      <div className="max-w-[1100px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[0.65rem] tracking-[0.4em] uppercase text-gold mb-5 flex items-center gap-3"
        >
          <div className="w-[30px] h-[1px] bg-gold" />
          O Processo
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-[3.5rem] font-light leading-[1.1] mb-5"
        >
          Como a Magia <em className="italic text-gold">Acontece</em>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 mt-16">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-gold/[0.04] border border-gold/10 p-12 transition-all hover:bg-gold/[0.08] hover:border-gold/30 hover:-translate-y-1"
            >
              <div className="font-serif text-6xl font-light text-gold/15 leading-none mb-6">{step.num}</div>
              <h3 className="font-serif text-2xl font-normal mb-3 text-cream">{step.title}</h3>
              <p className="text-[0.88rem] leading-relaxed text-white/50">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AudioSamples() {
  const samples = [
    { genre: "Sertanejo Romântico", title: "A Primeira Vez que Te Vi", desc: "Criada para um pedido de casamento surpresa" },
    { genre: "MPB Acústico", title: "Minha Mãe, Meu Lar", desc: "Homenagem para o Dia das Mães" },
    { genre: "Pop Emocional", title: "10 Anos ao Seu Lado", desc: "Aniversário de casamento inesquecível" },
    { genre: "Gospel Suave", title: "Luz que Nunca se Apaga", desc: "Em memória de alguém especial" },
  ];

  return (
    <section id="amostras" className="px-6 md:px-12 py-24 content-visibility-auto">
      <div className="max-w-[1100px] mx-auto">
        <div className="max-w-[560px] mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[0.65rem] tracking-[0.4em] uppercase text-gold mb-5 flex items-center gap-3"
          >
            <div className="w-[30px] h-[1px] bg-gold" />
            Ouça e Se Encante
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-[3.5rem] font-light leading-[1.1] mb-5"
          >
            Músicas que <em className="italic text-gold">Emocionam</em>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[0.95rem] text-white/50 leading-relaxed mt-4"
          >
            Cada história merece um som único. Escute amostras de músicas já criadas e sinta o nível de qualidade que sua história vai receber.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {samples.map((sample, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(201, 169, 110, 0.1)",
                borderColor: "rgba(201, 169, 110, 0.4)"
              }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-white/[0.02] border border-gold/12 p-7 cursor-pointer transition-all hover:bg-gold/[0.05]"
            >
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gold scale-y-0 transition-transform group-hover:scale-y-100" />
              <div className="text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-2">{sample.genre}</div>
              <h3 className="font-serif text-xl font-normal mb-1.5">{sample.title}</h3>
              <p className="text-[0.8rem] text-white/50 mb-4">{sample.desc}</p>
              <button className="flex items-center gap-2.5 text-[0.75rem] tracking-[0.15em] uppercase text-gold transition-all group-hover:gap-3.5">
                <div className="w-8 h-8 border border-gold rounded-full flex items-center justify-center">
                  <Play size={12} fill="currentColor" />
                </div>
                <span>Ouvir Amostra</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
