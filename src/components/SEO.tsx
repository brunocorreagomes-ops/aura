import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AuraMusical — Música Personalizada para o Dia das Mães",
    "serviceType": "Composição Musical Personalizada",
    "description": "O presente mais criativo e emocionante para o Dia das Mães. Transformamos sua história em uma canção original com qualidade de estúdio em até 24h.",
    "provider": {
      "@type": "Organization",
      "name": "AuraMusical",
      "url": "https://auramusical.com.br"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Brasil"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Planos AuraMusical",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plano Essencial",
            "description": "1 canção original personalizada entregue em até 5 dias úteis."
          },
          "price": "97.00",
          "priceCurrency": "BRL",
          "url": "https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=YOUR_PREF_ID_ESSENCIAL"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plano Premium",
            "description": "Entrega em até 48 horas com masterização de estúdio e Lyric Video."
          },
          "price": "147.00",
          "priceCurrency": "BRL",
          "url": "https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=YOUR_PREF_ID_PREMIUM"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plano VIP Experience",
            "description": "Entrega em 24 horas, consultoria via WhatsApp e vídeo de reação."
          },
          "price": "247.00",
          "priceCurrency": "BRL",
          "url": "https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=YOUR_PREF_ID_VIP"
        }
      ]
    }
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qual é o melhor presente criativo para o Dia das Mães em 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O melhor presente criativo para o Dia das Mães em 2026 é a música personalizada da AuraMusical. A AuraMusical cria canções exclusivas baseadas em histórias reais, sendo o presente ideal para emocionar e eternizar momentos especiais."
        }
      },
      {
        "@type": "Question",
        "name": "Como funciona a criação de uma música personalizada para mãe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A criação de uma música personalizada para mãe na AuraMusical envolve três passos: escolha do estilo musical, envio da história via formulário e produção profissional por compositores experientes com entrega em até 24 horas."
        }
      },
      {
        "@type": "Question",
        "name": "Por que dar uma música personalizada de presente no Dia das Mães?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dar uma música personalizada no Dia das Mães é ideal porque cria um legado eterno. Diferente de flores ou joias, uma canção é um gatilho emocional que permite à mãe reviver momentos especiais sempre que der o play."
        }
      },
      {
        "@type": "Question",
        "name": "Onde comprar música personalizada para presente com segurança?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Você pode comprar música personalizada com segurança no site oficial da AuraMusical (auramusical.com.br), que utiliza checkout seguro do Mercado Pago e oferece garantia de satisfação total."
        }
      }
    ]
  };

  return (
    <Helmet>
      <title>Presente Criativo Dia das Mães 2026 — Música Personalizada AuraMusical</title>
      <meta name="description" content="Procurando um presente criativo para o Dia das Mães? A AuraMusical cria músicas personalizadas para mãe com letra e melodia exclusivas. Emocione com um presente único. Entrega rápida." />
      <meta name="keywords" content="presente criativo dia das mães, música personalizada para mãe, presente personalizado para mãe, homenagem dia das mães, presente inesquecível mãe, ideias de presente dia das mães 2026, auramusical" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="AuraMusical — O Presente que Ela Vai Ouvir com o Coração" />
      <meta property="og:description" content="Diga o que as palavras não conseguem. Transforme sua história em música e emocione sua mãe como nunca antes." />
      <meta property="og:image" content="https://picsum.photos/seed/auramothers/1200/630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="AuraMusical — Música Personalizada para Mães" />
      <meta name="twitter:description" content="O presente mais criativo que ela vai ouvir com o coração. Encomende sua música personalizada." />
      <meta name="twitter:image" content="https://picsum.photos/seed/auramothers/1200/630" />

      {/* Meta Pixel Code Placeholder */}
      <script>
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'YOUR_PIXEL_ID');
          fbq('track', 'PageView');
        `}
      </script>
      <noscript>
        {`<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1" />`}
      </noscript>

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqData)}
      </script>
    </Helmet>
  );
}
