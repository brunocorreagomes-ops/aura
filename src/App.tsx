/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';
import { Navbar, Hero } from './components/Hero';
import { TrustBar, HowItWorks, AudioSamples } from './components/TrustBar';
import { PainSection, SolutionSection, ImmersionSection, FinalCTA } from './components/SalesSections';

// Lazy load below-the-fold components
const About = lazy(() => import('./components/About').then(m => ({ default: m.About })));
const Occasions = lazy(() => import('./components/Occasions').then(m => ({ default: m.Occasions })));
const Pricing = lazy(() => import('./components/Occasions').then(m => ({ default: m.Pricing })));
const Guarantee = lazy(() => import('./components/Occasions').then(m => ({ default: m.Guarantee })));
const MusicForm = lazy(() => import('./components/Footer').then(m => ({ default: m.MusicForm })));
const FAQ = lazy(() => import('./components/Footer').then(m => ({ default: m.FAQ })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));

// Loading placeholder for lazy components
const SectionLoader = () => <div className="h-40 w-full flex items-center justify-center bg-black-pure/50" />;

export default function App() {
  return (
    <HelmetProvider>
      <div className="grain min-h-screen font-sans selection:bg-gold selection:text-black-pure">
        <SEO />
        <Navbar />
        <main>
          <Hero />
          <TrustBar />
          <PainSection />
          <SolutionSection />
          <HowItWorks />
          
          <Suspense fallback={<SectionLoader />}>
            <ImmersionSection />
            <AudioSamples />
            <About />
            <Occasions />
            <Pricing />
            <Guarantee />
            <FinalCTA />
            <MusicForm />
            <FAQ />
          </Suspense>
        </main>
        
        <Suspense fallback={<SectionLoader />}>
          <Footer />
        </Suspense>
      </div>
    </HelmetProvider>
  );
}
