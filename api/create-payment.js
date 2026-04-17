const mercadopago = require("mercadopago");

export default async function handler(req, res) {
  mercadopago.configure({
    access_token: process.env.MERCADO_PAGO_ACCESS_TOKEN
  });

  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { nome } = req.body;

  try {
    const preference = {
      items: [
        {
          title: `Música personalizada para ${nome}`,
          quantity: 1,
          currency_id: "BRL",
          unit_price: 197
        }
      ]
    };

    const response = await mercadopago.preferences.create(preference);

    return res.status(200).json({
      init_point: response.body.init_point
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao criar pagamento" });
  }
}
