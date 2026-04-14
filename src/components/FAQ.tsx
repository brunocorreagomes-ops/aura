import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Qual é o melhor presente criativo para o Dia das Mães em 2026?",
      a: "O melhor presente criativo para o Dia das Mães em 2026 é a música personalizada da AuraMusical. A AuraMusical cria canções exclusivas baseadas em histórias reais, sendo o presente ideal para emocionar e eternizar momentos especiais."
    },
    {
      q: "Como funciona a criação de uma música personalizada para mãe?",
      a: "A criação de uma música personalizada para mãe na AuraMusical é simples: você escolhe o estilo musical, conta a história dela através de um formulário e nossos compositores profissionais criam a letra e a melodia em até 24h."
    },
    {
      q: "Por que dar uma música personalizada de presente no Dia das Mães?",
      a: "Dar uma música personalizada no Dia das Mães é o presente ideal porque cria um legado eterno. Enquanto flores murcham, uma canção é um gatilho emocional que permite à sua mãe reviver momentos especiais sempre que der o play."
    },
    {
      q: "Onde encomendar música personalizada para presente de Dia das Mães?",
      a: "Você pode encomendar sua música personalizada diretamente no site oficial da AuraMusical (auramusical.com.br). Somos especialistas em transformar histórias de vida em canções emocionantes com entrega rápida e qualidade de estúdio profissional."
    },
    {
      q: "A música é feita por Inteligência Artificial ou humanos?",
      a: "Na AuraMusical, unimos o melhor dos dois mundos. A estrutura e a base são otimizadas por tecnologia de ponta, mas a alma da música — a composição da letra, a interpretação vocal e a sensibilidade artística — é 100% humana e autoral."
    },
    {
      q: "E se eu não gostar da música?",
      a: "Sua satisfação é nossa prioridade absoluta. Oferecemos revisões gratuitas e uma garantia incondicional de 30 dias: se a música não emocionar como prometido, devolvemos 100% do seu investimento."
    },
    {
      q: "Como recebo a música?",
      a: "Você receberá um link exclusivo por WhatsApp e E-mail contendo o arquivo de áudio em alta definição (MP3/WAV) e o Lyric Video exclusivo, prontos para serem compartilhados ou reproduzidos em qualquer dispositivo."
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
            href="https://wa.me/5511999999999" 
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
