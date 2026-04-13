import { motion } from 'motion/react';
import { Play, ShieldCheck, Music, Clock } from 'lucide-react';

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-6 bg-gradient-to-b from-[#0d0d0d]/95 to-transparent"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gold flex items-center justify-center rounded-full text-black-pure">
          <Music size={20} />
        </div>
        <span className="font-serif text-2xl tracking-tighter text-white">Aura</span>
      </div>
      
      <div className="hidden md:flex items-center gap-10">
        {['Início', 'Como Funciona', 'Exemplos', 'Preços'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase().replace(' ', '-')}`}
            className="text-[0.7rem] tracking-[0.3em] uppercase text-white/60 hover:text-gold transition-colors"
          >
            {item}
          </a>
        ))}
        <a 
          href="#criar" 
          className="bg-gold/10 border border-gold/30 text-gold px-6 py-2.5 text-[0.7rem] tracking-[0.2em] uppercase hover:bg-gold hover:text-black-pure transition-all"
        >
          Encomendar Música
        </a>
      </div>
    </motion.nav>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 pt-[140px] pb-20 overflow-hidden bg-[#0d0d0d]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(201,169,110,0.15)_0%,transparent_70%)]" />
      
      <div className="relative z-10 max-w-[1100px] w-full text-center mx-auto">
        {/* Mother's Day Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-gold/10 border border-gold/20 mb-10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
          </span>
          <span className="text-[0.65rem] tracking-[0.25em] uppercase text-gold font-bold">
            Especial Dia das Mães: Vagas Limitadas para Entrega em 48h
          </span>
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl lg:text-[6.2rem] font-light leading-[1.02] tracking-tight mb-8 text-white"
        >
          O presente que ela vai <br />
          <em className="italic text-gold">ouvir com o coração.</em>
        </motion.h1>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl font-light text-white/70 leading-relaxed max-w-[800px] mx-auto mb-14"
        >
          Diga o que as palavras não conseguem. Transformamos sua história em uma canção original e inesquecível para o Dia das Mães.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left max-w-[1000px] mx-auto">
          <motion.div 
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-4">
              <a 
                href="#criar" 
                className="inline-block bg-gold text-black-pure px-14 py-6 text-[0.9rem] tracking-[0.25em] uppercase font-black text-center transition-all hover:bg-gold-light hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(201,169,110,0.4)]"
              >
                Encomendar Música Agora
              </a>
              <a 
                href="#exemplos" 
                className="text-center text-[0.75rem] tracking-[0.2em] uppercase text-white/40 hover:text-gold transition-colors"
              >
                Ver outros exemplos
              </a>
            </div>

            {/* Trust Block */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/5">
              <div className="flex flex-col gap-1">
                <ShieldCheck className="text-gold" size={18} />
                <span className="text-[0.6rem] uppercase tracking-widest text-white/40">Pagamento Seguro</span>
              </div>
              <div className="flex flex-col gap-1">
                <Music className="text-gold" size={18} />
                <span className="text-[0.6rem] uppercase tracking-widest text-white/40">100% Autoral</span>
              </div>
              <div className="flex flex-col gap-1">
                <Clock className="text-gold" size={18} />
                <span className="text-[0.6rem] uppercase tracking-widest text-white/40">Entrega em 48h</span>
              </div>
            </div>
          </motion.div>

          {/* Premium Audio Player */}
          <motion.div 
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white/[0.03] border border-gold/20 p-8 rounded-2xl backdrop-blur-md relative group"
          >
            <div className="absolute -top-3 -right-3 bg-gold text-black-pure text-[0.6rem] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
              Demo Especial
            </div>
            
            <div className="flex items-center gap-6 mb-6">
              <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center text-black-pure shadow-[0_0_30px_rgba(201,169,110,0.3)] group-hover:scale-105 transition-transform cursor-pointer">
                <Play size={28} fill="currentColor" />
              </div>
              <div className="text-left">
                <div className="text-lg font-serif text-cream mb-1">O Colo que é Meu Mundo</div>
                <div className="text-[0.75rem] text-white/50 italic leading-relaxed">
                  "Imagine sua mãe ouvindo esta homenagem feita para ela..."
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  animate={{ width: ["0%", "100%"] }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  className="h-full bg-gold shadow-[0_0_10px_rgba(201,169,110,0.5)]"
                />
              </div>
              <div className="flex justify-between text-[0.6rem] text-white/30 tracking-[0.2em] uppercase font-bold">
                <span>0:14</span>
                <span>1:00</span>
              </div>
            </div>

            <p className="mt-6 text-[0.7rem] text-gold/60 uppercase tracking-widest text-center font-medium">
              Toque para sentir a emoção da Aura
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
