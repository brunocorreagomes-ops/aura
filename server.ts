import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { MercadoPagoConfig, Preference } from 'mercadopago';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());

  // Mercado Pago configuration
  const mpAccessToken = process.env.MERCADO_PAGO_ACCESS_TOKEN;
  const client = new MercadoPagoConfig({ accessToken: mpAccessToken || '' });

  // API routes
  app.post("/api/contact", (req, res) => {
    const { name, occasion, style, story, email } = req.body;
    
    // Aqui você integraria com um serviço de e-mail (como SendGrid ou Resend)
    // ou salvaria em um banco de dados.
    console.log("Novo pedido de música:", { name, occasion, style, story, email });
    
    res.json({ 
      success: true, 
      message: "Pedido recebido com sucesso! Em breve entraremos em contato." 
    });
  });

  app.post("/api/create-preference", async (req, res) => {
    const { title, unit_price, quantity, metadata } = req.body;

    if (!mpAccessToken) {
      console.error("MERCADO_PAGO_ACCESS_TOKEN is missing");
      return res.status(500).json({ error: "Configuração de pagamento incompleta" });
    }

    try {
      const preference = new Preference(client);
      const result = await preference.create({
        body: {
          items: [
            {
              id: "aura-musical-gift",
              title: title || "Música Personalizada - Aura Musical",
              unit_price: Number(unit_price),
              quantity: Number(quantity) || 1,
              currency_id: "BRL",
            }
          ],
          back_urls: {
            success: `${process.env.APP_URL}/obrigado`,
            failure: `${process.env.APP_URL}/`,
            pending: `${process.env.APP_URL}/`,
          },
          auto_return: "approved",
          metadata: metadata, // Store customer story details here
          external_reference: metadata?.orderId || Date.now().toString(),
        }
      });

      res.json({ id: result.id, init_point: result.init_point });
    } catch (error) {
      console.error("Erro ao criar preferência do Mercado Pago:", error);
      res.status(500).json({ error: "Erro ao processar o pagamento" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
