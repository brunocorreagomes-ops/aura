import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Music2, Instagram, Facebook, Youtube, Send, Sparkles } from 'lucide-react';

export function MusicForm() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    targetName: '',
    senderName: '',
    story: '',
    style: 'Acústico',
    tone: 'Emocionante',
    whatsapp: '',
    deadline: ''
  });

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 4) {
      nextStep();
      return;
    }

    setStatus('submitting');
    
    // Links do Mercado Pago (R$ 147)
    const LINK_MP = "https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=SEU_ID_147";

    // Salva no localStorage para a página de upsell/obrigado
    localStorage.setItem('aura_full_data', JSON.stringify(formData));

    setTimeout(() => {
      window.location.href = LINK_MP;
    }, 1500);
  };

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="criar" className="bg-[#0d0d0d] px-6 md:px-12 py-40 content-visibility-auto border-t border-white/5">
      <div className="max-w-[800px] mx-auto">
        {status !== 'success' ? (
          <>
            <div className="text-center mb-16">
              <div className="text-[0.65rem] tracking-[0.5em] uppercase text-gold mb-6 flex justify-center items-center gap-4">
                <div className="w-8 h-[1px] bg-gold" />
                Etapa {step} de 4
                <div className="w-8 h-[1px] bg-gold" />
              </div>
              <h2 className="font-serif text-4xl md:text-6xl text-white mb-4">
                {step === 1 && "Início da Homenagem"}
                {step === 2 && "Etapa da Emoção"}
                {step === 3 && "Toque do Artista"}
                {step === 4 && "Finalização"}
              </h2>
              <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden max-w-[200px] mx-auto">
                <motion.div 
                  className="h-full bg-gold"
                  initial={{ width: "0%" }}
                  animate={{ width: `${(step / 4) * 100}%` }}
                />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white/[0.01] border border-white/5 p-8 md:p-12 rounded-3xl relative overflow-hidden">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[0.65rem] tracking-[0.3em] uppercase text-white/30 font-black">Nome da sua Mãe</label>
                        <input 
                          required 
                          type="text" 
                          value={formData.targetName}
                          onChange={(e) => updateField('targetName', e.target.value)}
                          placeholder="Como ela se chama?" 
                          className="w-full bg-white/[0.02] border border-white/10 text-white px-6 py-4 rounded-xl outline-none focus:border-gold transition-all" 
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[0.65rem] tracking-[0.3em] uppercase text-white/30 font-black">Seu Nome</label>
                        <input 
                          required 
                          type="text" 
                          value={formData.senderName}
                          onChange={(e) => updateField('senderName', e.target.value)}
                          placeholder="Seu nome completo" 
                          className="w-full bg-white/[0.02] border border-white/10 text-white px-6 py-4 rounded-xl outline-none focus:border-gold transition-all" 
                        />
                      </div>
                    </div>
                    <button type="submit" className="w-full bg-gold text-black-pure py-6 rounded-xl font-black uppercase tracking-[0.3em] hover:bg-white transition-all">Continuar</button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <div className="space-y-3">
                      <label className="text-[0.65rem] tracking-[0.3em] uppercase text-white/30 font-black italic">Conte um momento especial com sua mãe</label>
                      <textarea 
                        required 
                        rows={6}
                        value={formData.story}
                        onChange={(e) => updateField('story', e.target.value)}
                        placeholder="Ex: algo que marcou vocês, uma lembrança, algo que você admira nela…" 
                        className="w-full bg-white/[0.02] border border-white/10 text-white px-6 py-4 rounded-xl outline-none focus:border-gold transition-all resize-none font-light leading-relaxed" 
                      />
                    </div>
                    <div className="flex gap-4">
                      <button type="button" onClick={prevStep} className="flex-1 border border-white/10 text-white/40 py-6 rounded-xl font-black uppercase tracking-[0.3em] hover:text-gold transition-all">Voltar</button>
                      <button type="submit" className="flex-[2] bg-gold text-black-pure py-6 rounded-xl font-black uppercase tracking-[0.3em] hover:bg-white transition-all">Próximo Passo</button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[0.65rem] tracking-[0.3em] uppercase text-white/30 font-black">Estilo Musical</label>
                        <select 
                          required 
                          value={formData.style}
                          onChange={(e) => updateField('style', e.target.value)}
                          className="w-full bg-[#0d0d0d] border border-white/10 text-white px-6 py-4 rounded-xl outline-none focus:border-gold transition-all"
                        >
                          <option>Acústico</option>
                          <option>MPB</option>
                          <option>Sertanejo</option>
                          <option>Pop</option>
                        </select>
                      </div>
                      <div className="space-y-3">
                        <label className="text-[0.65rem] tracking-[0.3em] uppercase text-white/30 font-black">Tom da Música</label>
                        <select 
                          required 
                          value={formData.tone}
                          onChange={(e) => updateField('tone', e.target.value)}
                          className="w-full bg-[#0d0d0d] border border-white/10 text-white px-6 py-4 rounded-xl outline-none focus:border-gold transition-all"
                        >
                          <option>Emocionante</option>
                          <option>Alegre</option>
                          <option>Homenagem Profunda</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <button type="button" onClick={prevStep} className="flex-1 border border-white/10 text-white/40 py-6 rounded-xl font-black uppercase tracking-[0.3em] hover:text-gold transition-all">Voltar</button>
                      <button type="submit" className="flex-[2] bg-gold text-black-pure py-6 rounded-xl font-black uppercase tracking-[0.3em] hover:bg-white transition-all">Continuar</button>
                    </div>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[0.65rem] tracking-[0.3em] uppercase text-white/30 font-black">WhatsApp</label>
                        <input 
                          required 
                          type="tel" 
                          value={formData.whatsapp}
                          onChange={(e) => updateField('whatsapp', e.target.value)}
                          placeholder="(XX) XXXXX-XXXX" 
                          className="w-full bg-white/[0.02] border border-white/10 text-white px-6 py-4 rounded-xl outline-none focus:border-gold transition-all" 
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[0.65rem] tracking-[0.3em] uppercase text-white/30 font-black">Data Limite de Entrega</label>
                        <input 
                          required 
                          type="date" 
                          value={formData.deadline}
                          onChange={(e) => updateField('deadline', e.target.value)}
                          className="w-full bg-white/[0.02] border border-white/10 text-white px-6 py-4 rounded-xl outline-none focus:border-gold transition-all" 
                        />
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <button type="button" onClick={prevStep} className="flex-1 border border-white/10 text-white/40 py-6 rounded-xl font-black uppercase tracking-[0.3em] hover:text-gold transition-all">Voltar</button>
                      <button type="submit" disabled={status === 'submitting'} className="flex-[2] bg-gold text-black-pure py-6 rounded-xl font-black uppercase tracking-[0.3em] hover:bg-white transition-all shadow-[0_20px_40px_rgba(201,169,110,0.3)] flex items-center justify-center gap-3">
                        {status === 'submitting' ? "Processando..." : <>CRIAR MINHA MÚSICA AGORA <Send size={18} /></>}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-32 text-center"
          >
            <div className="w-32 h-32 bg-gold/5 text-gold rounded-full flex items-center justify-center mx-auto mb-12 border border-gold/10">
              <CheckCircle2 size={60} />
            </div>
            <h2 className="font-serif text-6xl text-white mb-8">Pedido Iniciado</h2>
            <p className="text-white/40 text-2xl font-light mb-16 max-w-[600px] mx-auto leading-relaxed">
              Você será redirecionado para o pagamento seguro. Após a confirmação, entraremos em contato via WhatsApp.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#0d0d0d] px-6 md:px-12 py-32 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-10">
              <img 
                src="https://i.ibb.co/cSVmZCTK/Chat-GPT-Image-14-de-abr-de-2026-02-41-02.png" 
                alt="AuraMusical Logo" 
                className="h-12 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-white/30 max-w-[400px] leading-relaxed text-lg font-light">
              Transformamos sentimentos em obras de arte sonoras. Cada música é única, feita à mão para eternizar seus momentos mais preciosos.
            </p>
          </div>
          
          <div>
            <h4 className="text-gold text-[0.7rem] tracking-[0.3em] uppercase font-black mb-10">Navegação</h4>
            <ul className="space-y-6">
              {['Início', 'Como Funciona', 'Exemplos', 'Preços', 'Sobre'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-white/40 hover:text-gold transition-colors text-[0.9rem] font-light">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold text-[0.7rem] tracking-[0.3em] uppercase font-black mb-10">Social</h4>
            <div className="flex gap-6">
              <a href="#" className="w-12 h-12 bg-white/[0.03] border border-white/5 flex items-center justify-center rounded-full text-white/40 hover:bg-gold hover:text-black-pure hover:border-gold transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-white/[0.03] border border-white/5 flex items-center justify-center rounded-full text-white/40 hover:bg-gold hover:text-black-pure hover:border-gold transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-white/[0.03] border border-white/5 flex items-center justify-center rounded-full text-white/40 hover:bg-gold hover:text-black-pure hover:border-gold transition-all">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/20 text-[0.65rem] uppercase tracking-[0.3em] font-bold">
            © 2026 AuraMusical Studio. Todos os direitos reservados.
          </p>
          <div className="flex gap-12">
            <a href="#" className="text-white/20 text-[0.6rem] uppercase tracking-[0.3em] hover:text-white transition-colors font-bold">Termos de Uso</a>
            <a href="#" className="text-white/20 text-[0.6rem] uppercase tracking-[0.3em] hover:text-white transition-colors font-bold">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
