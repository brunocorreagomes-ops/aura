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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_40%,rgba(201,169,110,0.12)_0%,transparent_70%),#0A0806]" />
      
      <div className="relative z-10 max-w-[900px] w-full text-center mx-auto">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-[0.7rem] tracking-[0.4em] uppercase text-gold mb-8 flex items-center justify-center gap-4"
        >
          <div className="w-8 h-[1px] bg-gold/50" />
          O Presente que o Tempo Não Apaga
          <div className="w-8 h-[1px] bg-gold/50" />
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] font-light leading-[1.05] tracking-tight mb-8"
        >
          Transforme Sua História na Música que Ela <br />
          <em className="italic text-gold">Nunca Vai Esquecer</em>
        </motion.h1>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl font-light text-gold-light/80 leading-relaxed max-w-[680px] mx-auto mb-12"
        >
          Diga o que as palavras sozinhas não conseguem. Criamos uma canção original e masterizada sobre a sua história em <strong>menos de 24 horas</strong>.
        </motion.p>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          <a 
            href="#criar" 
            className="inline-block bg-gold text-black-pure px-12 py-5 text-[0.85rem] tracking-[0.2em] uppercase font-bold transition-all hover:bg-gold-light hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(201,169,110,0.4)]"
          >
            Eternizar Minha História Agora
          </a>
          
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-1 text-gold text-sm">
              <span>★★★★★</span>
              <span className="text-white/60 ml-2 font-light tracking-wide">4.9/5 · +2.140 Vidas Emocionadas</span>
            </div>
            <p className="text-[0.65rem] uppercase tracking-[0.15em] text-white/30">
              Satisfação garantida ou seu investimento de volta
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
