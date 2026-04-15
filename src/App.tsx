/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy, useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';
import { Navbar, Hero } from './components/Hero';
import { TrustBar, HowItWorks, AudioSamples } from './components/TrustBar';
import { PainSection, SolutionSection, ImmersionSection, FinalCTA } from './components/SalesSections';
import { FloatingElements } from './components/FloatingElements';
import { Upsell } from './components/Upsell';
import { Thanks } from './components/Thanks';

// Lazy load below-the-fold components
const About = lazy(() => import('./components/About').then(m => ({ default: m.About })));
const Occasions = lazy(() => import('./components/Occasions').then(m => ({ default: m.Occasions })));
const Pricing = lazy(() => import('./components/Occasions').then(m => ({ default: m.Pricing })));
const Guarantee = lazy(() => import('./components/Occasions').then(m => ({ default: m.Guarantee })));
const FAQ = lazy(() => import('./components/FAQ').then(m => ({ default: m.FAQ })));
const MusicForm = lazy(() => import('./components/Footer').then(m => ({ default: m.MusicForm })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));

// Loading placeholder for lazy components
const SectionLoader = () => <div className="h-40 w-full flex items-center justify-center bg-[#0d0d0d]" />;

export default function App() {
  const [page, setPage] = useState<'home' | 'upsell1' | 'upsell2' | 'thanks'>('home');

  useEffect(() => {
    const path = window.location.pathname;
    if (path.includes('upsell1')) setPage('upsell1');
    else if (path.includes('upsell2')) setPage('upsell2');
    else if (path.includes('obrigado')) setPage('thanks');
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

  return (
    <HelmetProvider>
      <div className="grain min-h-screen font-sans selection:bg-gold selection:text-black-pure bg-[#0d0d0d] text-white">
        <SEO />
        <Navbar />
        <main>
          <Hero />
          <TrustBar />
          <HowItWorks />
          <AudioSamples />
          
          <Suspense fallback={<SectionLoader />}>
            <PainSection />
            <SolutionSection />
            <ImmersionSection />
            <About />
            <Occasions />
            <FAQ />
            <Pricing />
            <Guarantee />
            <FinalCTA />
            <MusicForm />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
          <FloatingElements />
        </Suspense>
      </div>
    </HelmetProvider>
  );
}
