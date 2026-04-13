import { motion } from 'motion/react';

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-6 bg-gradient-to-b from-black-pure/95 to-transparent"
    >
      <div className="font-serif text-2xl font-light tracking-[0.15em] text-gold">
        Aura<span className="italic">Song</span>
      </div>
      
      <div className="hidden md:flex items-center gap-10">
        <a href="#sobre" className="text-[0.7rem] tracking-[0.2em] uppercase text-white/70 hover:text-gold transition-colors">Sobre Nós</a>
        <a href="#amostras" className="text-[0.7rem] tracking-[0.2em] uppercase text-white/70 hover:text-gold transition-colors">Amostras</a>
        <a href="#precos" className="text-[0.7rem] tracking-[0.2em] uppercase text-white/70 hover:text-gold transition-colors">Preços</a>
      </div>

      <a 
        href="#criar" 
        className="text-[0.75rem] tracking-[0.2em] uppercase text-black-pure bg-gold px-6 py-2.5 font-medium transition-all hover:bg-gold-light"
      >
        Criar Minha Música
      </a>
    </motion.nav>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 pt-[120px] pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_40%,rgba(201,169,110,0.12)_0%,transparent_70%),radial-gradient(ellipse_40%_60%_at_20%_70%,rgba(201,169,110,0.06)_0%,transparent_60%),#0A0806]" />
      
      {/* Sound Waves Animation */}
      <div className="absolute right-[5%] top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-1.5 opacity-15">
        {[20, 45, 70, 55, 90, 120, 100, 140, 110, 80, 60, 40, 25].map((height, i) => (
          <motion.div
            key={i}
            animate={{ scaleY: [1, 0.3, 1] }}
            transition={{ 
              duration: 1.4, 
              repeat: Infinity, 
              delay: i * 0.1,
              ease: "easeInOut"
            }}
            style={{ height: `${height}px` }}
            className="w-[3px] bg-gold rounded-full origin-center"
          />
        ))}
      </div>

      <div className="relative z-10 max-w-[780px] w-full">
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[0.7rem] tracking-[0.35em] uppercase text-gold mb-7 flex items-center gap-4"
        >
          <div className="w-10 h-[1px] bg-gold" />
          Música Original Personalizada
        </motion.div>

        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] font-light leading-[1.05] tracking-tight mb-8"
        >
          Faça Quem Você Ama<br />
          <em className="italic text-gold">Chorar de Alegria</em><br />
          em Menos de 24 Horas
        </motion.h1>

        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="text-lg font-light text-gold-light leading-relaxed max-w-[520px] mb-12"
        >
          Transformamos sua história de amor, amizade ou família em uma canção original com qualidade de rádio. Sem estúdios caros, sem espera interminável.
        </motion.p>

        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="space-y-8"
        >
          <div className="flex flex-wrap items-center gap-6 md:gap-10">
            <a 
              href="#criar" 
              className="inline-block bg-gold text-black-pure px-10 py-[18px] text-[0.8rem] tracking-[0.2em] uppercase font-medium transition-all hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(201,169,110,0.3)]"
            >
              Criar Minha Música Agora
            </a>
            <a 
              href="#precos" 
              className="inline-block text-gold border-b border-gold/30 pb-1 text-[0.75rem] tracking-[0.2em] uppercase font-medium transition-all hover:text-gold-light hover:border-gold"
            >
              Ver Planos e Preços
            </a>
          </div>
          
          <div className="text-[0.8rem] text-white/50 flex items-center gap-2">
            <span className="text-gold tracking-[-2px]">★★★★★</span>
            <span>4.9 · mais de 2.000 histórias eternizadas</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
