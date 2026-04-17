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

  // salva dados temporários
  localStorage.setItem('aura_full_data', JSON.stringify({
    ...orderData,
    targetRelation: 'Mãe',
    targetDate: '2026-05-10',
    express: false
  }));

  try {
    const response = await fetch('/api/create-payment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nome: orderData.motherName
      }),
    });

    const result = await response.json();

    console.log("Resposta pagamento:", result);

    if (result.init_point) {
      window.location.href = result.init_point;
    } else {
      throw new Error(result.error || 'Erro ao gerar checkout');
    }

  } catch (error) {
    console.error("Erro ao iniciar pagamento:", error);
    setStatus('idle');
    alert("Erro ao iniciar pagamento. Tente novamente.");
  }
};
