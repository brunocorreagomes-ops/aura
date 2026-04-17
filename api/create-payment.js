import { MercadoPagoConfig, Preference } from "mercadopago";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const client = new MercadoPagoConfig({
    accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN
  });

  const preference = new Preference(client);

  const { nome } = req.body;

  try {
    const response = await preference.create({
      body: {
        items: [
          {
            title: `Música personalizada para ${nome}`,
            quantity: 1,
            currency_id: "BRL",
            unit_price: 197
          }
        ]
      }
    });

    return res.status(200).json({
      init_point: response.init_point
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao criar pagamento" });
  }
}
