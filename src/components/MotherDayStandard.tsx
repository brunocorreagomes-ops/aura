import React, { useState, useRef } from 'react';

const WHATSAPP_NUMBER = "5511942789109";

export default function MotherDayStandard() {
  const [showForm, setShowForm] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting'>('idle');
  const formRef = useRef<HTMLDivElement>(null);

  const abrirFormulario = () => {
    setShowForm(true);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 200);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.currentTarget);
    const motherName = formData.get('motherName') as string;

    try {
      const response = await fetch('/api/create-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome: motherName }),
      });

      const result = await response.json();

      console.log("Pagamento:", result);

      if (result.init_point) {
        window.location.href = result.init_point;
      } else {
        throw new Error("Erro ao gerar pagamento");
      }

    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao iniciar pagamento");
      setStatus('idle');
    }
  };

  return (
    <div style={{ padding: 40, fontFamily: 'sans-serif' }}>
      
      <h1>Aura Musical - Dia das Mães</h1>
      <p>Crie uma música personalizada para sua mãe 💖</p>

      <button onClick={abrirFormulario} style={{ padding: 10, marginTop: 20 }}>
        Criar Música Agora
      </button>

      {showForm && (
        <div ref={formRef} style={{ marginTop: 40 }}>
          <form onSubmit={handleFormSubmit}>

            <div>
              <label>Seu nome</label><br />
              <input name="userName" required />
            </div>

            <div>
              <label>Nome da mãe</label><br />
              <input name="motherName" required />
            </div>

            <div>
              <label>História</label><br />
              <textarea name="story" required />
            </div>

            <div>
              <label>WhatsApp</label><br />
              <input name="whatsapp" required />
            </div>

            <div>
              <label>Email</label><br />
              <input name="email" required />
            </div>

            <button type="submit" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Processando...' : 'Criar Música Agora'}
            </button>

          </form>
        </div>
      )}

      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          background: '#25D366',
          color: '#fff',
          padding: 15,
          borderRadius: '50%'
        }}
      >
        WhatsApp
      </a>

    </div>
  );
}
