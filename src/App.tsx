/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy, useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';
import { MotherDayStandard } from './components/MotherDayStandard';
import { FloatingElements } from './components/FloatingElements';
import { Upsell } from './components/Upsell';
import { Thanks } from './components/Thanks';
import { StoryDetails } from './components/StoryDetails';

// Lazy load below-the-fold components
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));

// Loading placeholder
const SectionLoader = () => <div className="h-40 w-full flex items-center justify-center bg-[#0d0d0d]" />;

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
    const path = newPage === 'home' ? '/' : `/${newPage === 'thanks' ? 'obrigado' : newPage}`;
    window.history.pushState({}, '', path);
    window.scrollTo(0, 0);
  };

  if (page === 'upsell1') return <Upsell type="upsell1" onNext={() => navigate('upsell2')} onAccept={(url) => window.location.href = url} />;
  if (page === 'upsell2') return <Upsell type="upsell2" onNext={() => navigate('thanks')} onAccept={(url) => window.location.href = url} />;
  if (page === 'thanks') return <Thanks />;
  if (page === 'detalhes') return <StoryDetails />;

  return (
    <HelmetProvider>
      <div className="min-h-screen font-sans selection:bg-gold selection:text-white-pure bg-off-white text-deep-black">
        <SEO />
        <main>
          <MotherDayStandard />
        </main>
      </div>
    </HelmetProvider>
  );
}
