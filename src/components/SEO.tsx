import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Aura Musical",
    "description": "Criação de músicas personalizadas e exclusivas para momentos especiais",
    "url": "https://www.auramusical.com.br",
    "telephone": "+55",
    "areaServed": "BR",
    "serviceType": ["Música Personalizada", "Composição Musical", "Presente Musical"],
    "priceRange": "$$",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Pacotes de Música Personalizada",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Canção Essência",
          "description": "Composição original exclusiva com entrega digital"
        },
        {
          "@type": "Offer",
          "name": "Canção Presença",
          "description": "Composição + videoclipe lírico personalizado"
        },
        {
          "@type": "Offer",
          "name": "Canção Legado",
          "description": "Composição premium + videoclipe + certificado de autoria"
        }
      ]
    }
  };

  return (
    <Helmet>
      <title>Aura Musical | Música Personalizada Exclusiva para Momentos Únicos</title>
      <meta name="description" content="Transforme sua história em música. A Aura Musical cria composições únicas e exclusivas para casamentos, aniversários, declarações e momentos que merecem ser eternizados. Encomende já." />
      <meta name="keywords" content="música personalizada, música exclusiva, presente original, música para casamento, música para aniversário, composição sob encomenda, presente emocionante, música de presente" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Aura Musical" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Aura Musical | Sua História Merece uma Canção" />
      <meta property="og:description" content="Composições exclusivas criadas sob medida para os momentos mais importantes da sua vida. Casamentos, aniversários, declarações de amor e muito mais." />
      <meta property="og:image" content="https://picsum.photos/seed/auraperformance/1200/630" />
      <meta property="og:url" content="https://www.auramusical.com.br" />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Aura Musical | Música Personalizada" />
      <meta name="twitter:description" content="Transforme sua história em música exclusiva." />
      <meta name="twitter:image" content="https://picsum.photos/seed/auraperformance/1200/630" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
