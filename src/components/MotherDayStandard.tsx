import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Play, Pause, Check, ArrowRight, ShieldCheck, Music, Clock, Star, Heart, Menu, X, Instagram, Facebook, Youtube, MessageCircle, ChevronDown, Calendar } from 'lucide-react';

const WHATSAPP_NUMBER = "5511942789109";

export function MotherDayStandard() {
  const [showForm, setShowForm] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting'>('idle');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [playingAudio, setPlayingAudio] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [isCtaVisible, setIsCtaVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 800], [0, 200]);

  // Handle Sticky CTA Visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsCtaVisible(!entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  // Countdown logic
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    mins: '00',
    secs: '00'
  });

  useEffect(() => {
    const targetDate = new Date('2026-05-10T00:00:00').getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance < 0) {
        clearInterval(timer);
        return;
      }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0'),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0'),
        mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0'),
        secs: Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0')
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const abrirFormulario = () => {
    setShowForm(true);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 200);
  };

  const examples = [
    { id: '1', title: 'Homenagem Acústica', type: 'Voz & Violão', duration: '3:20', genre: 'MPB / Romântico' },
    { id: '2', title: 'Canção de Ninar (Modern)', type: 'Pop Suave', duration: '2:45', genre: 'Indie Pop' },
    { id: '3', title: 'História de Vida', type: 'Orquestral', duration: '4:10', genre: 'Clássico / Contemporâneo' },
  ];

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    const orderData = {
      userName: formData.get('userName') as string,
      motherName: formData.get('motherName') as string,
      story: formData.get('story') as string,
      style: formData.get('style') as string,
      whatsapp: formData.get('whatsapp') as string,
      email: formData.get('email') as string,
    };

    // Save temporary data to retrieve on completion
    localStorage.setItem('aura_full_data', JSON.stringify({
      ...orderData,
      targetRelation: 'Mãe',
      targetDate: '2026-05-10',
      express: false
    }));

    try {
      const response = await fetch('/api/create-preference', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: `Música de Dia das Mães para ${orderData.motherName}`,
          unit_price: 197,
          quantity: 1,
          metadata: {
            ...orderData,
            orderId: `AURA-${Date.now()}`
          }
        }),
      });

      const result = await response.json();
      
      if (result.init_point) {
        window.location.href = result.init_point;
      } else {
        throw new Error(result.error || 'Erro ao gerar checkout');
      }
    } catch (error) {
      console.error("Erro ao iniciar pagamento:", error);
      setStatus('idle');
      // No alert, just log and reset
    }
  };

  const steps = [
    { num: "1", title: "Conte a história dela", desc: "Dê detalhes sobre memórias, apelidos e o que torna o vínculo de vocês especial." },
    { num: "2", title: "Escolha o estilo musical", desc: "Do sertanejo ao MPB, nossos artistas darão o tom perfeito para a emoção." },
    { num: "3", title: "Receba e emocione", desc: "Em poucos dias, uma obra-prima exclusiva pronta para o Dia das Mães." },
  ];

  const faqs = [
    { q: "Quanto tempo demora para a música ficar pronta?", a: "Nosso prazo padrão é de 7 dias, mas oferecemos entrega expressa em até 48 horas para casos de urgência do Dia das Mães." },
    { q: "Posso escolher o ritmo da música?", a: "Sim! Você pode escolher entre diversos estilos: pop, sertanejo, MPB, gospel, romântico, infantil, e muito mais." },
    { q: "Como vou enviar a música para a minha mãe?", a: "Você recebe um link exclusivo de audição e o arquivo em alta qualidade para enviar via WhatsApp, além de um QR Code opcional para cartões físicos." },
    { q: "Preciso saber compor ou tocar algo?", a: "De forma alguma! Nossa equipe de compositores e produtores cuida de toda a parte artística. Você entra apenas com a alma da história." },
  ];

  return (
    <div className="bg-off-white text-deep-black selection:bg-gold selection:text-white-pure">
      {/* Urgency Banner */}
      <div className="sticky top-0 z-[60] bg-deep-black text-white-pure h-10 px-6 flex justify-center items-center text-[0.65rem] md:text-[0.7rem] font-bold uppercase tracking-[0.2em]">
        <span className="text-gold flex items-center gap-2">Vagas limitadas para entrega até o Dia das Mães.</span>
      </div>

      {/* Navigation */}
      <nav className="sticky top-10 z-50 glass px-6 md:px-16 py-5 flex justify-between items-center bg-off-white/80">
        <a href="#" className="flex items-center">
          <img 
            src="https://i.ibb.co/bjkd4Qqz/auralogohorizontal.png" 
            alt="Aura Musical Logo" 
            className="h-8 md:h-12 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </a>
        
        <div className="hidden lg:flex items-center gap-10 font-sans text-[0.7rem] font-bold tracking-widest uppercase text-text-main">
          {['Processo', 'Exemplos', 'FAQ'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-gold transition-colors">{item}</a>
          ))}
          <button onClick={abrirFormulario} className="bg-deep-black text-white-pure px-8 py-3 hover:bg-gold hover:text-deep-black transition-all">Criar Música</button>
        </div>

        <button className="lg:hidden text-deep-black" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed inset-0 z-40 bg-off-white flex flex-col items-center justify-center gap-12 lg:hidden pt-20"
          >
            <img 
              src="https://i.ibb.co/bjkd4Qqz/auralogohorizontal.png" 
              alt="Aura Musical Logo" 
              className="h-12 w-auto object-contain mb-8"
              referrerPolicy="no-referrer"
            />
            {['Processo', 'Exemplos', 'FAQ'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="font-sans text-xl font-black uppercase tracking-widest text-deep-black" onClick={() => setMobileMenuOpen(false)}>{item}</a>
            ))}
            <button onClick={() => { setMobileMenuOpen(false); abrirFormulario(); }} className="bg-gold text-deep-black px-12 py-5 font-black uppercase tracking-widest text-lg">Criar Música Agora</button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section ref={heroRef} className="relative py-24 md:py-48 px-6 text-center overflow-hidden">
        {/* Cinematic Texture/Background Image Overlay with Parallax */}
        <motion.div 
          style={{ y: yParallax }}
          className="absolute inset-0 z-0 opacity-[0.08]"
        >
          <img 
            src="https://picsum.photos/seed/mother-child/1920/1080?blur=5" 
            alt="Atmosfera Emocional" 
            className="w-full h-full object-cover scale-110"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="max-w-[1100px] mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-gold/20 bg-gold/5 text-gold text-[0.6rem] md:text-[0.7rem] font-bold uppercase tracking-[0.3em] mb-12 animate-fade-up">
            <Heart size={14} fill="currentColor" /> Edição Especial Dia das MÃES 2026
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-[2.8rem] md:text-7xl lg:text-8xl font-medium leading-[1.05] tracking-tight mb-10 text-deep-black"
          >
            Neste Dia das Mães, Dê a Ela uma <em className="italic font-light text-gold">Emoção</em> que Ficará para Sempre.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-lg md:text-2xl text-text-muted leading-relaxed max-w-[700px] mx-auto mb-14"
          >
            Transforme a história de vocês em uma música exclusiva e personalizada. O presente mais criativo e inesquecível de 2026.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 w-full max-w-2xl">
              <button 
                onClick={abrirFormulario}
                className="w-full md:w-auto bg-gold text-white-pure px-14 py-7 font-sans text-[0.85rem] font-black uppercase tracking-widest hover:bg-deep-black hover:text-white-pure transition-all shadow-xl flex items-center justify-center gap-4"
              >
                Começar a Criar <ArrowRight size={18} />
              </button>
              <a href="#exemplos" className="w-full md:w-auto font-sans text-[0.85rem] font-bold uppercase tracking-widest text-deep-black hover:opacity-70 transition-all flex items-center justify-center gap-3">
                <Play size={18} fill="currentColor" /> Ouvir Exemplos
              </a>
            </div>

            {/* Social Proof Bar - Relocated below CTA */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4 flex flex-col items-center gap-2"
            >
              <div className="flex items-center gap-4">
                <div className="flex gap-1 text-gold">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <span className="text-[0.65rem] uppercase font-bold tracking-widest text-deep-black/60">10.000+ mães presenteadas</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Real Examples Player Section - Glassmorphism Refactor */}
      <section id="exemplos" className="py-24 md:py-40 px-6 bg-off-white">
        <div className="max-w-[1200px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <span className="text-gold text-[0.75rem] tracking-[0.4em] uppercase font-black mb-6 block">Prova Emocional</span>
            <h2 className="font-serif text-4xl md:text-7xl font-bold mb-10 leading-tight">Escolha o <em className="italic font-light text-gold">tom</em> da sua homenagem</h2>
            <p className="font-sans text-text-muted max-w-[600px] mx-auto leading-relaxed">Dê o play e sinta a qualidade cinematográfica das nossas produções. Cada música é um pedaço da história de alguém.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-4">
              {examples.map((ex, i) => (
                <motion.div 
                  key={ex.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`group relative p-8 rounded-[2rem] border transition-all cursor-pointer flex justify-between items-center ${playingAudio === ex.id ? 'bg-white border-gold shadow-[0_20px_40px_rgba(197,160,89,0.1)] scale-[1.02]' : 'bg-white border-deep-black/5 hover:border-gold/30 hover:shadow-xl'}`}
                  onClick={() => setPlayingAudio(playingAudio === ex.id ? null : ex.id)}
                >
                  <div className="flex items-center gap-6">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 ${playingAudio === ex.id ? 'bg-gold text-white-pure rotate-[360deg]' : 'bg-gold/10 text-gold group-hover:bg-gold group-hover:text-white-pure'}`}>
                      {playingAudio === ex.id ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-1" />}
                    </div>
                    <div>
                      <h4 className="font-serif text-xl font-bold mb-1 text-deep-black">{ex.title}</h4>
                      <p className="text-[0.7rem] font-bold uppercase tracking-widest text-gold/60">{ex.type} · {ex.genre}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-[0.8rem] text-text-muted font-bold font-mono">{ex.duration}</span>
                    {playingAudio === ex.id && (
                      <div className="flex gap-1">
                        {[1, 2, 3].map(j => (
                          <motion.div 
                            key={j}
                            animate={{ height: [4, 12, 4] }}
                            transition={{ repeat: Infinity, duration: 0.5, delay: j * 0.1 }}
                            className="w-0.5 bg-gold"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gold/5 blur-[100px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="relative aspect-video rounded-3xl overflow-hidden border border-deep-black/5 shadow-2xl glass">
                <img src="https://picsum.photos/seed/reaction-mother-day/800/450" alt="Mãe Emocionada" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 flex items-center justify-center flex-col text-center p-8 bg-white/40">
                  <Heart className="text-gold mb-6 animate-pulse" size={48} />
                  <p className="font-sans text-xl italic font-light mb-4 text-deep-black">"Foi o melhor presente da minha vida. Eu não parava de sorrir e chorar ao mesmo tempo."</p>
                  <span className="text-gold text-[0.7rem] uppercase font-bold tracking-widest">— Dona Helena, 64 anos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works - Simplicity */}
      <section id="processo" className="py-24 md:py-48 px-6 bg-off-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-rose/10 blur-[100px] -translate-y-1/2 translate-x-1/2 rounded-full" />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="text-center mb-24">
            <span className="text-accent-rose text-[0.7rem] uppercase font-black tracking-[0.3em] mb-4 block">Simplicidade & Arte</span>
            <h2 className="font-serif text-4xl md:text-7xl font-bold mb-8 leading-tight">Eternizar um momento é <em className="italic font-light text-gold">simples</em></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
            {steps.map((step, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="text-center group p-10 rounded-[3rem] hover:bg-white hover:shadow-[0_30px_60px_rgba(0,0,0,0.03)] transition-all bg-transparent"
              >
                <div className="w-20 h-20 bg-deep-black text-white-pure rounded-full flex items-center justify-center font-serif text-3xl font-black mb-10 mx-auto group-hover:bg-gold group-hover:text-white-pure transition-all shadow-lg transform group-hover:rotate-[15deg]">
                  {step.num}
                </div>
                <h3 className="font-serif text-2xl font-bold mb-6 tracking-tight">{step.title}</h3>
                <p className="text-text-muted leading-relaxed font-sans text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-24 text-center">
             <button 
              onClick={abrirFormulario}
              className="bg-deep-black text-white-pure px-12 py-6 font-sans text-[0.85rem] font-black uppercase tracking-widest hover:bg-gold hover:text-deep-black transition-all shadow-xl"
            >
              Começar Agora
            </button>
          </div>
        </div>
      </section>

      {/* SEO/AIO Content & Trust */}
      <section className="py-24 px-6 md:px-16 container mx-auto">
        <div className="max-w-[900px] mx-auto text-center space-y-12">
          <span className="text-gold text-[1rem] italic font-serif">O Diferencial Aura Musical</span>
          <h3 className="font-serif text-3xl md:text-5xl font-black leading-tight">Por que somos a principal plataforma de música personalizada do Brasil?</h3>
          <p className="font-sans text-lg md:text-xl text-text-muted leading-relaxed text-justify md:text-center">
            Diferente de geradores automáticos ou inteligências artificiais genéricas, a <strong>Aura Musical</strong> combina tecnologia de ponta com a alma de artistas reais. Cada composição é tratada como uma obra de arte: da poesia da letra à masterização de estúdio. Nosso diferencial é o <strong>gatilho emocional</strong>: capturamos as nuances da sua história que só quem compartilha a vida com sua mãe conhece. Ideal para quem busca um presente criativo que não tem preço, mas um valor eterno.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left pt-10">
            <div className="flex gap-6 p-6 rounded-2xl bg-cream/30 border border-gold/10">
              <Clock className="text-gold shrink-0" size={32} />
              <div>
                <h5 className="font-bold mb-2">Prazos de Entrega</h5>
                <p className="text-sm text-text-muted">Garantimos a entrega para o Dia das Mães em pedidos feitos até o prazo limite. Agilidade sem abrir mão da qualidade.</p>
              </div>
            </div>
            <div className="flex gap-6 p-6 rounded-2xl bg-cream/30 border border-gold/10">
              <ShieldCheck className="text-gold shrink-0" size={32} />
              <div>
                <h5 className="font-bold mb-2">Garantia de Emoção</h5>
                <p className="text-sm text-text-muted">Aprovamos a letra com você antes da produção. Sua satisfação (e o choro de alegria dela) é nossa prioridade.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section id="faq" className="py-24 md:py-40 px-6 bg-deep-black text-white-pure">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6">Dúvidas Frequentes</h2>
            <p className="text-white/40 uppercase tracking-widest text-[0.7rem] font-black">Tudo o que você precisa saber</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-white/10 rounded-2xl overflow-hidden bg-white/[0.02]">
                <button 
                  className="w-full p-8 flex justify-between items-center text-left hover:bg-white/5 transition-all"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-serif text-lg md:text-xl font-bold">{faq.q}</span>
                  <ChevronDown className={`text-gold transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-8 pt-0 text-white/60 leading-relaxed font-light">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="criar" ref={formRef} className="py-24 md:py-48 px-6 bg-cream/10">
        <AnimatePresence mode="wait">
          {!showForm ? (
            <motion.div 
              key="pre-form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-[800px] mx-auto text-center"
            >
              <h2 className="font-serif text-3xl md:text-5xl font-medium mb-10 text-deep-black">Pronto para emocionar?</h2>
              <button 
                onClick={() => setShowForm(true)}
                className="bg-gold text-white-pure px-16 py-8 font-sans text-sm font-black uppercase tracking-widest hover:bg-deep-black transition-all shadow-2xl"
              >
                Sim, quero começar agora
              </button>
            </motion.div>
          ) : (
            <motion.div 
              key="form"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-[800px] mx-auto"
            >
              <div className="text-center mb-24">
                <span className="text-accent-rose text-[0.8rem] font-bold tracking-[0.4em] uppercase mb-6 block">Composição Exclusiva</span>
                <h2 className="font-serif text-4xl md:text-7xl font-black mb-6">Conte-nos <em className="text-gold italic font-light">sobre ela</em></h2>
                <p className="font-sans text-text-muted">Cada detalhe ajuda nossos artistas a capturar a essência da sua mãe.</p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-12 bg-off-white p-6 md:p-20 border border-gold/10 shadow-[0_40px_100px_rgba(0,0,0,0.05)] rounded-[2.5rem]">
                <div className="space-y-12">
                  <div className="border-b border-gold/10 pb-12">
                    <h3 className="font-serif text-xl font-bold mb-8 flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-gold/10 text-gold flex items-center justify-center text-sm">01</div>
                      Informações Básicas
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-4">
                        <label className="text-[0.65rem] uppercase tracking-widest font-black text-deep-black/60 block">Seu Nome</label>
                        <input name="userName" required type="text" className="w-full bg-transparent border-b-2 border-deep-black/10 p-4 outline-none focus:border-gold transition-all font-serif text-lg" placeholder="Como devemos te chamar?" />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[0.65rem] uppercase tracking-widest font-black text-deep-black/60 block">Nome da Mãe</label>
                        <input name="motherName" required type="text" className="w-full bg-transparent border-b-2 border-deep-black/10 p-4 outline-none focus:border-gold transition-all font-serif text-lg" placeholder="Nome da sua rainha" />
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-gold/10 pb-12">
                    <h3 className="font-serif text-xl font-bold mb-8 flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-gold/10 text-gold flex items-center justify-center text-sm">02</div>
                      A História
                    </h3>
                    <div className="space-y-4">
                      <label className="text-[0.65rem] uppercase tracking-widest font-black text-deep-black/60 block">Memórias & Sentimentos</label>
                      <textarea name="story" rows={4} required className="w-full bg-transparent border-b-2 border-deep-black/10 p-4 outline-none focus:border-gold transition-all font-serif text-lg resize-none" placeholder="Conte-nos momentos, apelidos, cheiros, risadas... o que torna ela única?"></textarea>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-bold mb-8 flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-gold/10 text-gold flex items-center justify-center text-sm">03</div>
                      Estilo & Contato
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-4">
                        <label className="text-[0.65rem] uppercase tracking-widest font-black text-deep-black/60 block">Estilo Musical</label>
                        <select name="style" className="w-full bg-transparent border-b-2 border-deep-black/10 p-4 outline-none focus:border-gold transition-all font-serif text-lg cursor-pointer">
                          <option>Aura Clássica (Violão & Voz)</option>
                          <option>MPB Sofisticado</option>
                          <option>Sertanejo Emocional</option>
                          <option>Pop Indie Moderno</option>
                          <option>Piano & Melodia</option>
                        </select>
                      </div>
                      <div className="space-y-4">
                        <label className="text-[0.65rem] uppercase tracking-widest font-black text-deep-black/60 block">WhatsApp</label>
                        <input name="whatsapp" required type="tel" className="w-full bg-transparent border-b-2 border-deep-black/10 p-4 outline-none focus:border-gold transition-all font-serif text-lg" placeholder="(XX) XXXXX-XXXX" />
                      </div>
                    </div>
                    <div className="space-y-4 mt-10">
                      <label className="text-[0.65rem] uppercase tracking-widest font-black text-deep-black/60 block">Seu E-mail</label>
                      <input name="email" required type="email" className="w-full bg-transparent border-b-2 border-deep-black/10 p-4 outline-none focus:border-gold transition-all font-serif text-lg" placeholder="Para receber sua obra-prima" />
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="w-full bg-deep-black text-white-pure py-8 md:py-10 font-bold uppercase tracking-[0.5em] text-sm md:text-lg hover:bg-gold hover:text-white-pure transition-all shadow-2xl rounded-2xl relative group overflow-hidden"
                  >
                    <span className="relative z-10">{status === 'submitting' ? 'Aguarde...' : 'Eternizar Agora'}</span>
                    <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  </button>
                  <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6 text-[0.6rem] text-text-muted uppercase tracking-widest">
                    <span className="flex items-center gap-2"><Check size={12} className="text-gold" /> Letra aprovada por você</span>
                    <span className="flex items-center gap-2"><Check size={12} className="text-gold" /> Entrega em até 7 dias</span>
                    <span className="flex items-center gap-2"><Check size={12} className="text-gold" /> Pagamento Seguro MP</span>
                  </div>
                  
                  {/* Trust Badges */}
                  <div className="mt-12 pt-8 border-t border-gold/5 flex flex-wrap justify-center items-center gap-8 grayscale opacity-50 contrast-125">
                    <img src="https://logodownload.org/wp-content/uploads/2019/06/mercado-pago-logo.png" className="h-4 object-contain" alt="Mercado Pago" />
                    <img src="https://logodownload.org/wp-content/uploads/2014/07/visa-logo-1.png" className="h-3 object-contain" alt="Visa" />
                    <img src="https://logodownload.org/wp-content/uploads/2014/07/mastercard-logo.png" className="h-5 object-contain" alt="Mastercard" />
                    <img src="https://logodownload.org/wp-content/uploads/2020/02/pix-logo-1.png" className="h-4 object-contain" alt="PIX" />
                  </div>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Footer */}
      <footer className="bg-deep-black text-white-pure py-32 px-6 md:px-16 overflow-hidden relative">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-20 relative z-10">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <a href="#" className="flex items-center">
              <img 
                src="https://i.ibb.co/bjkd4Qqz/auralogohorizontal.png" 
                alt="Aura Musical Logo" 
                className="h-10 md:h-16 w-auto object-contain brightness-0 invert" 
                referrerPolicy="no-referrer"
              />
            </a>
            <p className="font-sans text-white/40 max-w-[400px] leading-relaxed">
              Transformamos sentimentos em obras de arte sonoras. Cada música é única, feita à mão para eternizar seus momentos mais preciosos.
            </p>
            <div className="flex gap-6">
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-deep-black transition-all"><Instagram size={20} /></a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-deep-black transition-all"><Facebook size={20} /></a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-deep-black transition-all"><Youtube size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-gold text-[0.7rem] uppercase font-black tracking-widest mb-10">Links</h4>
            <ul className="space-y-6 font-sans text-sm text-white/50">
              {['Início', 'Como Funciona', 'Exemplos', 'FAQ'].map(i => <li key={i}><a href={`#${i.toLowerCase()}`} className="hover:text-white transition-all">{i}</a></li>)}
            </ul>
          </div>

          <div>
            <h4 className="text-gold text-[0.7rem] uppercase font-black tracking-widest mb-10">Contato</h4>
            <div className="space-y-4 font-sans text-sm text-white/50">
              <p>atendimento@auramusical.com.br</p>
              <p>São Paulo, SP</p>
              <p>WhatsApp: {WHATSAPP_NUMBER}</p>
            </div>
          </div>
        </div>
        
        <div className="max-w-[1200px] mx-auto mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="font-sans text-[0.6rem] text-white/20 uppercase tracking-widest">© 2026 Aura Musical. Todos os direitos reservados.</p>
          <div className="flex gap-10 font-sans text-[0.6rem] text-white/20 uppercase tracking-widest">
            <a href="#" className="hover:text-white">Privacidade</a>
            <a href="#" className="hover:text-white">Termos de Uso</a>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <AnimatePresence>
        {isCtaVisible && (
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 lg:hidden bg-off-white/80 backdrop-blur-xl border-t border-gold/10"
          >
            <button 
              onClick={abrirFormulario}
              className="w-full bg-gold text-white-pure py-5 font-bold uppercase tracking-widest text-sm shadow-xl flex items-center justify-center gap-3 active:scale-95 transition-transform"
            >
              Criar Música Agora <ArrowRight size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Float */}
      <motion.a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-5 rounded-full shadow-2xl flex items-center justify-center"
      >
        <MessageCircle size={32} fill="currentColor" />
      </motion.a>
    </div>
  );
}
