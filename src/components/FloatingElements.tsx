import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, ArrowRight } from 'lucide-react';

export function FloatingElements() {
  return (
    <>
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/5500000000000"
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

export function FAQ() {
  const faqs = [
    {
      q: "Como vocês sabem os detalhes da minha história?",
      a: "Após a compra, você preenche um formulário detalhado. Nossa equipe de compositores analisa cada detalhe para criar versos que só vocês entenderiam."
    },
    {
      q: "E se eu não gostar da música?",
      a: "Oferecemos garantia de satisfação. No plano Premium e VIP, as revisões são ilimitadas até que a música fique exatamente como você imaginou."
    },
    {
      q: "Qual o prazo real de entrega?",
      a: "O prazo depende do plano escolhido: Essencial (5 dias), Premium (48h) ou VIP (24h). Cumprimos rigorosamente nossos prazos."
    },
    {
      q: "Posso escolher o gênero musical?",
      a: "Sim! Temos especialistas em Sertanejo, MPB, Pop, Gospel, Rock e muito mais. Você define o tom da emoção."
    },
    {
      q: "A música é minha para sempre?",
      a: "Sim, você recebe o arquivo digital e os direitos de uso pessoal para tocar em festas, postar em redes sociais ou guardar como relíquia de família."
    }
  ];

  return (
    <section className="bg-[#0d0d0d] px-6 md:px-12 py-24 border-t border-gold/10">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-16">
          <div className="text-[0.65rem] tracking-[0.4em] uppercase text-gold mb-5">Dúvidas Frequentes</div>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-white">Perguntas <em className="italic text-gold">Comuns</em></h2>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-white/[0.02] border border-gold/10 hover:border-gold/30 transition-all"
            >
              <h3 className="font-serif text-xl text-gold mb-4">{faq.q}</h3>
              <p className="text-white/50 leading-relaxed">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
