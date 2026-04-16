import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "E se não ficar bom?",
      a: "Oferecemos garantia total de satisfação. Se você não amar a música, os ajustes estão inclusos. Nosso objetivo é que você se sinta 100% orgulhoso(a) do presente."
    },
    {
      q: "Vai chegar a tempo para o Dia das Mães?",
      a: "Sim! Trabalhamos com entrega garantida antes do Dia das Mães para todos os pedidos realizados nesta campanha. Você receberá o arquivo pronto para o grande momento."
    },
    {
      q: "O processo é complicado?",
      a: "De forma alguma. Criamos um sistema ultra simples que leva menos de 2 minutos para você começar a contar sua história. Nós cuidamos de toda a parte artística e técnica."
    },
    {
      q: "Vale o investimento?",
      a: "Diferente de qualquer produto genérico de shopping, este é um presente único no mundo. É a materialização do seu amor em forma de arte sonora, algo que ela guardará para sempre."
    }
  ];

  return (
    <section id="faq" className="bg-[#0d0d0d] px-6 md:px-12 py-32 content-visibility-auto border-t border-white/5">
      <div className="max-w-[900px] mx-auto">
        <div className="text-center mb-20">
          <div className="text-[0.65rem] tracking-[0.4em] uppercase text-gold mb-6 flex justify-center items-center gap-3">
            <HelpCircle size={14} />
            Dúvidas Frequentes
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-light text-white leading-tight">
            Tudo o que você <br />
            <em className="italic text-gold">precisa saber</em>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-white/5 bg-white/[0.01] overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 md:p-8 text-left flex justify-between items-center gap-6 hover:bg-white/[0.02] transition-all"
              >
                <span className="font-serif text-xl md:text-2xl text-white/90 leading-snug">{faq.q}</span>
                <div className="shrink-0 text-gold">
                  {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 md:px-8 pb-6 md:pb-8 text-white/50 text-lg font-light leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-gold/[0.03] border border-gold/20 text-center">
          <p className="text-white/60 mb-8 text-lg font-light">Ainda tem alguma dúvida específica sobre o seu presente?</p>
          <a 
            href="https://wa.me/5511942789109" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 text-gold border border-gold/30 px-10 py-4 uppercase tracking-[0.2em] text-[0.8rem] font-black hover:bg-gold hover:text-black-pure transition-all"
          >
            Falar com Consultor no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
