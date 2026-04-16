import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, ArrowRight } from 'lucide-react';

export function FloatingElements() {
  return (
    <>
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/5511942789109"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-24 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#128C7E] transition-colors"
      >
        <MessageCircle size={32} fill="currentColor" />
      </motion.a>

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-[60] p-4 bg-black-pure/80 backdrop-blur-md border-t border-gold/20">
        <a 
          href="#criar" 
          className="flex items-center justify-center gap-3 w-full bg-gold text-black-pure py-4 rounded-lg font-black uppercase tracking-widest text-sm shadow-[0_-10px_30px_rgba(201,169,110,0.2)]"
        >
          Criar Minha Música <ArrowRight size={18} />
        </a>
      </div>
    </>
  );
}
