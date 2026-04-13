import { Helmet } from 'react-helmet-async';

export default function SEO() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "AuraSong — Música Personalizada",
    "description": "Transformamos sua história em uma canção original com qualidade de estúdio em menos de 24 horas.",
    "brand": {
      "@type": "Brand",
      "name": "AuraSong"
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "97",
      "highPrice": "127",
      "priceCurrency": "BRL",
      "offerCount": "2"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "2000"
    }
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quanto tempo leva para receber minha música?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No plano Premium, entregamos sua música personalizada em menos de 24 horas. No plano Essencial, o prazo é de até 5 dias úteis."
        }
      },
      {
        "@type": "Question",
        "name": "Qual a qualidade da música?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Todas as nossas músicas possuem qualidade de estúdio, masterizadas para soar bem em qualquer dispositivo, desde celulares até sistemas de som profissionais."
        }
      },
      {
        "@type": "Question",
        "name": "Posso pedir revisões?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim! O plano Essencial inclui 1 revisão gratuita, enquanto o plano Premium oferece revisões ilimitadas para garantir que sua história seja contada exatamente como você deseja."
        }
      }
    ]
  };

  return (
    <Helmet>
      <title>AuraSong — Transforme Sua História em Música Original</title>
      <meta name="description" content="Crie uma canção original e inesquecível para quem você ama. Entrega em menos de 24h. Qualidade de estúdio. O presente perfeito para casamentos, aniversários e datas especiais." />
      <meta name="keywords" content="música personalizada, presente criativo, homenagem musical, presente de casamento, presente dia das mães, aura song, aurasong" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="AuraSong — Transforme Sua História em Música Original" />
      <meta property="og:description" content="O presente mais emocionante que você já deu. Uma música original feita sob medida para sua história." />
      <meta property="og:image" content="https://picsum.photos/seed/aurasong/1200/630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="AuraSong — Música Personalizada" />
      <meta name="twitter:description" content="Transforme sua história em música em menos de 24h." />
      <meta name="twitter:image" content="https://picsum.photos/seed/aurasong/1200/630" />

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
