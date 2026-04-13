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
    <section id="precos" className="px-6 md:px-12 py-24 content-visibility-auto bg-[#0d0d0d]">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[0.65rem] tracking-[0.4em] uppercase text-gold mb-5 flex justify-center items-center gap-3"
          >
            <div className="w-[30px] h-[1px] bg-gold" />
            Planos e Investimento
            <div className="w-[30px] h-[1px] bg-gold" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-[3.5rem] font-light leading-[1.1] mb-5 text-white"
          >
            Escolha Como Quer <em className="italic text-gold">Surpreender</em>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-gold/10 p-10 relative bg-white/[0.01] flex flex-col"
          >
            <div className="text-[0.7rem] tracking-[0.3em] uppercase text-white/40 mb-5">Plano Essencial</div>
            <div className="font-serif text-[3.5rem] font-light text-gold leading-none mb-2">
              <sup className="text-2xl align-top mt-3 inline-block">R$</sup>97
            </div>
            <div className="text-[0.8rem] text-white/40 mb-8">Ideal para quem não tem pressa</div>
            <ul className="space-y-4 mb-10 flex-grow">
              {["1 canção original personalizada", "Entrega em até 5 dias úteis", "Arquivo MP3 Alta Qualidade", "1 revisão gratuita"].map((f, i) => (
                <li key={i} className="text-[0.9rem] text-cream/70 flex items-center gap-3">
                  <span className="text-gold">✦</span> {f}
                </li>
              ))}
            </ul>
            <a href="#criar" className="block text-center border border-gold/40 text-gold py-4 text-[0.8rem] tracking-[0.2em] uppercase font-bold transition-all hover:bg-gold hover:text-black-pure">
              Começar Agora
            </a>
          </motion.div>

          {/* Most Chosen Plan */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-2 border-gold p-10 relative bg-gold/[0.03] shadow-[0_0_50px_rgba(201,169,110,0.1)] flex flex-col scale-105 z-10"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-black-pure text-[0.65rem] tracking-[0.2em] uppercase px-6 py-2 font-black">MAIS ESCOLHIDO</div>
            <div className="text-[0.7rem] tracking-[0.3em] uppercase text-gold mb-5">Plano Premium</div>
            <div className="font-serif text-[3.5rem] font-light text-gold leading-none mb-2">
              <sup className="text-2xl align-top mt-3 inline-block">R$</sup>147
            </div>
            <div className="text-[0.8rem] text-white/50 mb-8 font-bold">Entrega em até 48h</div>
            <ul className="space-y-4 mb-10 flex-grow">
              {["Entrega em 48 horas", "Masterização de Estúdio (WAV)", "Revisões Ilimitadas", "Lyric Video Exclusivo", "Arte da Letra (PDF)"].map((f, i) => (
                <li key={i} className="text-[0.9rem] text-cream flex items-center gap-3">
                  <span className="text-gold">✦</span> {f}
                </li>
              ))}
            </ul>
            <a href="#criar" className="block text-center bg-gold text-black-pure py-4 text-[0.8rem] tracking-[0.2em] uppercase font-black transition-all hover:bg-gold-light">
              Garantir Minha Música
            </a>
            <div className="flex justify-center gap-4 mt-6 opacity-40 grayscale">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo_Pix.png" className="h-4" alt="Pix" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-4" alt="Visa" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-4" alt="Mastercard" />
            </div>
          </motion.div>

          {/* Anchoring Plan */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-gold/10 p-10 relative bg-white/[0.01] flex flex-col"
          >
            <div className="text-[0.7rem] tracking-[0.3em] uppercase text-white/40 mb-5">Plano VIP Experience</div>
            <div className="font-serif text-[3.5rem] font-light text-gold leading-none mb-2">
              <sup className="text-2xl align-top mt-3 inline-block">R$</sup>247
            </div>
            <div className="text-[0.8rem] text-white/40 mb-8">A experiência definitiva</div>
            <ul className="space-y-4 mb-10 flex-grow">
              {["Tudo do Premium", "Entrega em 24 horas", "Consultoria via WhatsApp", "Vídeo de Reação Editado", "Quadro com QR Code (Digital)"].map((f, i) => (
                <li key={i} className="text-[0.9rem] text-cream/70 flex items-center gap-3">
                  <span className="text-gold">✦</span> {f}
                </li>
              ))}
            </ul>
            <a href="#criar" className="block text-center border border-gold/40 text-gold py-4 text-[0.8rem] tracking-[0.2em] uppercase font-bold transition-all hover:bg-gold hover:text-black-pure">
              Escolher VIP
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Guarantee() {
  return (
    <section className="bg-black-soft px-6 md:px-12 py-24 content-visibility-auto border-t border-gold/10">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="w-[240px] h-[240px] border-2 border-gold rounded-full flex flex-col items-center justify-center text-center p-6 relative shadow-[0_0_60px_rgba(201,169,110,0.1)]">
            <div className="absolute inset-2 border border-gold/30 rounded-full animate-pulse" />
            <div className="font-serif text-6xl font-light text-gold leading-none">100<span className="text-2xl">%</span></div>
            <div className="text-[0.7rem] tracking-[0.2em] uppercase text-white/60 leading-tight mt-4 font-bold">Risco Zero<br />Absoluto</div>
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
            Garantia de Arrepios
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-[3.5rem] font-light leading-[1.1] mb-6"
          >
            Sua <em className="italic text-gold">Emoção</em><br />ou Seu Investimento de Volta
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[1rem] text-white/50 leading-relaxed mb-6"
          >
            Temos tanta confiança no impacto emocional da nossa música que o risco é 100% nosso. Se a canção não capturar perfeitamente a essência da sua história, você tem 30 dias para solicitar o reembolso total.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[0.9rem] text-white/40 leading-relaxed mb-10 italic"
          >
            "Sem burocracia, sem perguntas difíceis. Nossa missão é a sua satisfação e a emoção de quem você ama."
          </motion.p>
          <motion.a 
            href="#criar" 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-gold text-black-pure px-12 py-5 text-[0.85rem] tracking-[0.2em] uppercase font-bold transition-all hover:bg-gold-light"
          >
            Criar Com Risco Zero
          </motion.a>
        </div>
      </div>
    </section>
  );
}
