import { motion } from 'motion/react';
import { Check, ShieldCheck, CreditCard, Music } from 'lucide-react';

export function Occasions() {
  const occasions = [
    { icon: "🌸", name: "Dia das Mães", sub: "O presente que ela vai ouvir com o coração" },
    { icon: "💍", name: "Casamentos", sub: "A trilha sonora do seu 'sim' eterno" },
    { icon: "🥂", name: "Aniversários", sub: "Cada ano transformado em melodia" },
    { icon: "🎀", name: "Nascimento", sub: "A primeira canção para uma nova vida" },
    { icon: "🕊️", name: "Tributos", sub: "Para honrar legados inesquecíveis" },
  ];

  return (
    <section id="ocasioes" className="bg-[#0d0d0d] px-6 md:px-12 py-40 content-visibility-auto border-t border-white/5">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[0.65rem] tracking-[0.5em] uppercase text-gold mb-8 font-black"
          >
            Versatilidade AuraMusical
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-7xl font-light text-white leading-tight"
          >
            O que o seu <em className="italic text-gold">coração</em> quer dizer?
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {occasions.map((occ, i) => (
            <motion.a 
              key={i}
              href="#criar"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-white/[0.01] border border-white/5 text-center transition-all duration-500 hover:bg-gold/[0.03] hover:border-gold/30 group"
            >
              <span className="text-5xl mb-8 block group-hover:scale-110 transition-transform duration-500">{occ.icon}</span>
              <div className="font-serif text-xl mb-4 text-white font-light">{occ.name}</div>
              <p className="text-[0.65rem] text-white/20 leading-relaxed uppercase tracking-[0.3em] font-black">{occ.sub}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Pricing() {
  const plans = [
    {
      name: "Edição Especial 💐",
      price: "147",
      desc: "O presente mais emocionante para o Dia das Mães 2026.",
      features: [
        "Música 100% Personalizada",
        "Composição sobre sua História",
        "Voz e Produção Profissional",
        "Entrega Garantida para o Dia das Mães",
        "Revisão Gratuita",
        "Lyric Video HD (Bônus Exclusivo)"
      ],
      cta: "Garantir Minha Música - R$ 147",
      link: "https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=SEU_ID_147",
      popular: true
    }
  ];

  return (
    <section id="precos" className="bg-[#0d0d0d] px-6 md:px-12 py-40 content-visibility-auto border-t border-white/5">
      <div className="max-w-[700px] mx-auto">
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[0.65rem] tracking-[0.5em] uppercase text-gold mb-8 font-black"
          >
            Oferta de Lançamento
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-7xl font-light text-white mb-10"
          >
            Um presente <em className="italic text-gold">eterno</em>
          </motion.h2>
          <p className="text-white/40 text-xl font-light leading-relaxed">
            Aproveite a condição única de R$ 297 por apenas R$ 147. <br />
            Vagas limitadas para garantir a entrega artesanal.
          </p>
        </div>

        <div className="max-w-[500px] mx-auto">
          {plans.map((plan, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative p-10 md:p-14 bg-gold/[0.02] border-2 border-gold shadow-[0_0_80px_rgba(201,169,110,0.1)] flex flex-col transition-all duration-500"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gold text-black-pure text-[0.7rem] font-black px-8 py-2.5 uppercase tracking-[0.3em] shadow-2xl">
                OFERTA DIA DAS MÃES
              </div>
              
              <div className="text-[0.7rem] tracking-[0.4em] uppercase text-white/30 mb-8 font-black text-center">{plan.name}</div>
              <div className="flex items-baseline justify-center gap-3 mb-6">
                <span className="text-2xl text-gold font-light">R$</span>
                <span className="text-[5.5rem] font-serif text-gold font-light leading-none">{plan.price}</span>
              </div>
              <p className="text-white/40 text-center text-sm mb-12 font-light leading-relaxed italic">{plan.desc}</p>
              
              <ul className="space-y-6 mb-16">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-[1rem] text-white/60 font-light">
                    <Check size={18} className="text-gold mt-1 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-8">
                <a 
                  href="#criar"
                  className="block text-center py-7 text-[0.9rem] tracking-[0.4em] uppercase font-black bg-gold text-black-pure hover:bg-white hover:shadow-[0_20px_60px_rgba(255,255,255,0.1)] transition-all duration-500"
                >
                  {plan.cta}
                </a>
                
                <div className="flex justify-center items-center gap-6 opacity-20 grayscale">
                  <ShieldCheck size={16} className="text-white" />
                  <CreditCard size={16} className="text-white" />
                  <span className="text-[0.65rem] uppercase tracking-[0.4em] text-white font-black">Pagamento Seguro</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Guarantee() {
  return (
    <section className="bg-[#0d0d0d] px-6 md:px-12 py-32 content-visibility-auto border-t border-white/5">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] border border-gold/10 rounded-full flex flex-col items-center justify-center text-center p-12 relative mx-auto">
            <div className="absolute inset-4 border border-gold/5 rounded-full animate-pulse" />
            <div className="absolute inset-10 border border-gold/5 rounded-full" />
            <div className="font-serif text-8xl md:text-9xl font-light text-gold opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">30</div>
            <div className="relative z-10">
              <div className="font-serif text-5xl md:text-6xl font-light text-gold mb-4">100%</div>
              <div className="text-[0.8rem] tracking-[0.3em] uppercase text-white/40 font-black leading-tight">Garantia de<br />Satisfação</div>
            </div>
          </div>
        </motion.div>
        
        <div>
          <div className="text-[0.65rem] tracking-[0.4em] uppercase text-gold mb-8">Risco Zero Absoluto</div>
          <h2 className="font-serif text-4xl md:text-6xl font-light leading-tight mb-10 text-white">
            Sua <em className="italic text-gold">emoção</em><br />ou seu investimento de volta.
          </h2>
          <p className="text-lg text-white/50 leading-relaxed mb-10 font-light">
            Temos tanta confiança no impacto emocional da nossa música que o risco é 100% nosso. Se a canção não capturar perfeitamente a essência da sua história, você tem 30 dias para solicitar o reembolso total. Sem perguntas, sem burocracia.
          </p>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 text-white/40 italic font-light">
              <Music size={18} className="text-gold/40" />
              <span>"Nossa missão é a sua satisfação e a emoção de quem você ama."</span>
            </div>
            <a 
              href="#criar" 
              className="inline-block bg-gold text-black-pure px-14 py-6 text-[0.9rem] tracking-[0.3em] uppercase font-black hover:bg-gold-light transition-all text-center md:text-left w-fit"
            >
              Criar Com Risco Zero
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
