import { Helmet } from 'react-helmet-async';

export default function SEO() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Aura — Música Personalizada para o Dia das Mães",
    "description": "O presente mais emocionante para o Dia das Mães. Transformamos sua história em uma canção original com qualidade de estúdio.",
    "brand": {
      "@type": "Brand",
      "name": "Aura"
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "97",
      "highPrice": "247",
      "priceCurrency": "BRL",
      "offerCount": "3"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "2140"
    }
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "O que é a música personalizada para presentear no Dia das Mães?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "É uma composição original criada do zero pela Aura, baseada na sua história e memórias com sua mãe. É um presente único que transforma sentimentos em uma obra de arte sonora profissional."
        }
      },
      {
        "@type": "Question",
        "name": "Para quem esse presente é ideal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ideal para quem busca um presente criativo, emocionante e inesquecível para mães, avós, esposas ou figuras maternas que já têm de tudo e valorizam momentos e memórias."
        }
      },
      {
        "@type": "Question",
        "name": "Como funciona a entrega para o Dia das Mães?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Temos prazos especiais de 24h a 48h para a campanha de Dia das Mães. Você recebe um arquivo digital de alta qualidade (MP3/WAV) e um Lyric Video exclusivo para surpreendê-la."
        }
      }
    ]
  };

  return (
    <Helmet>
      <title>Presente Criativo Dia das Mães — Música Personalizada Aura</title>
      <meta name="description" content="Surpreenda com o presente mais emocionante do Dia das Mães. Música personalizada feita sob medida para sua mãe. Entrega rápida e qualidade de estúdio. Encomende agora." />
      <meta name="keywords" content="presente criativo dia das mães, presente personalizado para mãe, ideia de presente emocionante para mãe, música personalizada para dia das mães, presente único para mãe, surpresa para dia das mães" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Aura — O Presente Inesquecível de Dia das Mães" />
      <meta property="og:description" content="Diga o que as palavras não conseguem. Transforme sua história em música e emocione sua mãe como nunca antes." />
      <meta property="og:image" content="https://picsum.photos/seed/auramothers/1200/630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Aura — Música Personalizada para Mães" />
      <meta name="twitter:description" content="O presente que ela vai ouvir com o coração. Encomende sua música personalizada." />
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
