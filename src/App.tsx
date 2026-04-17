/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy, useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';

// ✅ IMPORTS CORRETOS
import MotherDayStandard from './components/MotherDayStandard';
import { FloatingElements } from './components/FloatingElements';
import { Upsell } from './components/Upsell';
import { Thanks } from './components/Thanks';
import { StoryDetails } from './components/StoryDetails';

// Lazy load
const Footer = lazy(() =>
  import('./components/Footer').then(m => ({ default: m.Footer }))
);

// Loader simples
const SectionLoader = () => (
  <div className="h-40 w-full flex items-center justify-center bg-[#0d0d0d]" />
);

export default function App() {
  const [page, setPage] = useState<'home' | 'upsell1' | 'upsell2' | 'thanks' | 'detalhes'>('home');

  useEffect(() => {
    const path = window.location.pathname;

    if (path.includes('upsell1')) setPage('upsell1');
    else if (path.includes('upsell2')) setPage('upsell2');
    else if (path.includes('obrigado')) setPage('thanks');
    else if (path.includes('detalhes')) setPage('detalhes');
    else setPage('home');
  }, []);

  const navigate = (newPage: typeof page) => {
    setPage(newPage);

    const path =
      newPage === 'home'
        ? '/'
        : `/${newPage === 'thanks' ? 'obrigado' : newPage}`;

    window.history.pushState({}, '', path);
  };

  return (
    <HelmetProvider>
      <SEO />

      {/* ELEMENTOS FIXOS */}
      <FloatingElements />

      {/* ROTAS SIMPLES */}
      {page === 'home' && <MotherDayStandard />}
      {page === 'upsell1' && <Upsell />}
      {page === 'upsell2' && <Upsell />}
      {page === 'thanks' && <Thanks />}
      {page === 'detalhes' && <StoryDetails />}

      {/* FOOTER LAZY */}
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </HelmetProvider>
  );
}
