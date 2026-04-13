import { motion } from 'motion/react';
import { Play } from 'lucide-react';

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
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 pt-[120px] pb-20 overflow-hidden bg-[#0d0d0d]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(201,169,110,0.15)_0%,transparent_70%)]" />
      
      <div className="relative z-10 max-w-[1000px] w-full text-center mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
          </span>
          <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold font-bold">
            3 músicas sendo criadas agora · Vagas limitadas para esta semana
          </span>
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl lg:text-[5.8rem] font-light leading-[1.05] tracking-tight mb-8 text-white"
        >
          Ela vai chorar. <br />
          <em className="italic text-gold">Você nunca vai esquecer</em> <br />
          de ter dado.
        </motion.h1>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl font-light text-white/70 leading-relaxed max-w-[720px] mx-auto mb-12"
        >
          Transformamos sua história em uma canção profissional masterizada a partir de <strong>R$ 97</strong>. 
          Entrega garantida em até 48h para o próximo Dia das Mães.
        </motion.p>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center gap-8"
        >
          <a 
            href="#criar" 
            className="inline-block bg-gold text-black-pure px-14 py-6 text-[0.9rem] tracking-[0.2em] uppercase font-black transition-all hover:bg-gold-light hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(201,169,110,0.4)]"
          >
            Criar Minha Música →
          </a>

          {/* Audio Player Demo */}
          <div className="w-full max-w-[500px] bg-white/[0.03] border border-gold/20 p-6 rounded-xl backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-black-pure">
                <Play size={20} fill="currentColor" />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-cream">Exemplo: Aniversário do Marido</div>
                <div className="text-[0.7rem] text-white/40 italic">"Assim ficou a música da Camila para o aniversário do marido"</div>
              </div>
            </div>
            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                animate={{ width: ["0%", "100%"] }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="h-full bg-gold"
              />
            </div>
            <div className="flex justify-between mt-2 text-[0.6rem] text-white/30 tracking-widest uppercase">
              <span>0:12</span>
              <span>1:00</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
