import { motion } from 'motion/react';

export function Occasions() {
  const occasions = [
    { icon: "💍", name: "Casamento & Pedido", sub: "Primeira dança ou pedido inesquecível" },
    { icon: "🥂", name: "Aniversário de Namoro", sub: "Cada ano da história de vocês" },
    { icon: "🌸", name: "Dia das Mães & Pais", sub: "O presente que nenhum outro supera" },
    { icon: "🎀", name: "Chá Revelação & Batizado", sub: "A chegada de uma nova vida" },
    { icon: "🕊️", name: "In Memoriam", sub: "Para honrar quem partiu" },
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
          Cada Momento Merece Uma Canção
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-[3.5rem] font-light leading-[1.1] mb-5"
        >
          Qual História <em className="italic text-gold">Vamos Contar?</em>
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-0.5 mt-16">
          {occasions.map((occ, i) => (
            <motion.a 
              key={i}
              href="#criar"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-white/[0.02] border border-gold/[0.08] text-center transition-all hover:bg-gold/[0.07] hover:border-gold hover:-translate-y-1.5"
            >
              <span className="text-3xl mb-4 block">{occ.icon}</span>
              <div className="font-serif text-lg mb-2 text-cream">{occ.name}</div>
              <p className="text-[0.75rem] text-white/50 leading-tight">{occ.sub}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Pricing() {
  return (
    <section id="precos" className="px-6 md:px-12 py-24 content-visibility-auto">
      <div className="max-w-[1000px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[0.65rem] tracking-[0.4em] uppercase text-gold mb-5 flex items-center gap-3"
        >
          <div className="w-[30px] h-[1px] bg-gold" />
          Investimento
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-[3.5rem] font-light leading-[1.1] mb-5"
        >
          O Presente <em className="italic text-gold">Definitivo</em>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[0.9rem] text-white/50 mt-5 mb-12 leading-relaxed max-w-[560px]"
        >
          Contratar músicos, estúdio e produção para uma canção exclusiva custaria facilmente <s className="text-white/30">mais de R$ 1.500,00</s> e levaria semanas.<br />
          Com a AuraSong, você não pagará nem uma fração disso.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border border-gold/12 p-12 relative bg-white/[0.02]"
          >
            <div className="text-[0.7rem] tracking-[0.3em] uppercase text-white/50 mb-5">Essencial</div>
            <div className="font-serif text-[3.5rem] font-light text-gold leading-none mb-2">
              <sup className="text-2xl align-top mt-3 inline-block">R$</sup>97
            </div>
            <div className="text-[0.8rem] text-white/50 mb-8">à vista · ou 12x de R$ 9,40</div>
            <ul className="space-y-2.5 mb-9">
              {["1 canção original personalizada", "Entrega em até 5 dias úteis", "Arquivo MP3 em alta qualidade", "1 revisão gratuita", "Garantia total de 7 dias"].map((f, i) => (
                <li key={i} className="text-[0.85rem] text-cream-dark flex items-center gap-2.5 border-b border-white/5 pb-2.5">
                  <span className="text-gold text-[0.5rem]">✦</span> {f}
                </li>
              ))}
            </ul>
            <a href="#criar" className="block text-center border border-gold text-gold py-3.5 text-[0.75rem] tracking-[0.2em] uppercase transition-all hover:bg-gold hover:text-black-pure">
              Escolher Essencial
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border border-gold p-12 relative bg-gold/[0.06]"
          >
            <div className="absolute -top-[1px] right-7 bg-gold text-black-pure text-[0.65rem] tracking-[0.2em] uppercase px-3.5 py-1.5 font-medium">Mais Escolhido</div>
            <div className="text-[0.7rem] tracking-[0.3em] uppercase text-white/50 mb-5">Premium</div>
            <div className="font-serif text-[3.5rem] font-light text-gold leading-none mb-2">
              <sup className="text-2xl align-top mt-3 inline-block">R$</sup>127
            </div>
            <div className="text-[0.8rem] text-white/50 mb-8">à vista · ou 12x de R$ 10,60</div>
            <ul className="space-y-2.5 mb-9">
              {["1 canção original personalizada", "Entrega em até 24 horas", "Arquivo MP3 + WAV masterizado", "Revisões ilimitadas", "Lyric Video para Reels/TikTok", "Arte da Letra enquadrável (PDF)", "Garantia total de 30 dias"].map((f, i) => (
                <li key={i} className="text-[0.85rem] text-cream-dark flex items-center gap-2.5 border-b border-white/5 pb-2.5">
                  <span className="text-gold text-[0.5rem]">✦</span> {f}
                </li>
              ))}
            </ul>
            <a href="#criar" className="block text-center bg-gold text-black-pure py-3.5 text-[0.75rem] tracking-[0.2em] uppercase transition-all hover:bg-gold-light">
              Escolher Premium
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Guarantee() {
  return (
    <section className="bg-black-soft px-6 md:px-12 py-24 content-visibility-auto">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="w-[200px] h-[200px] border-2 border-gold rounded-full flex flex-col items-center justify-center text-center p-6 relative">
            <div className="absolute inset-2 border border-gold/30 rounded-full" />
            <div className="font-serif text-5xl font-light text-gold leading-none">100<span className="text-2xl">%</span></div>
            <div className="text-[0.65rem] tracking-[0.15em] uppercase text-white/50 leading-tight mt-2">Garantia<br />Lágrimas<br />de Alegria</div>
          </div>
        </motion.div>
        
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[0.65rem] tracking-[0.4em] uppercase text-gold mb-5 flex items-center gap-3"
          >
            <div className="w-[30px] h-[1px] bg-gold" />
            Risco Zero
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-[3.5rem] font-light leading-[1.1] mb-4"
          >
            Sua <em className="italic text-gold">Satisfação</em><br />ou Seu Dinheiro
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[0.9rem] text-white/50 leading-relaxed mb-4"
          >
            Temos absoluta certeza do poder da nossa música. Se a canção entregue não capturar perfeitamente a essência da sua história, devolvemos 100% do seu dinheiro.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[0.9rem] text-white/50 leading-relaxed mb-8"
          >
            Sem formulários longos, sem burocracia, sem questionamentos. O risco é inteiramente nosso.
          </motion.p>
          <motion.a 
            href="#criar" 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-gold text-black-pure px-10 py-4 text-[0.8rem] tracking-[0.2em] uppercase font-medium transition-all hover:bg-gold-light"
          >
            Criar Com Segurança
          </motion.a>
        </div>
      </div>
    </section>
  );
}
