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
import { SocialProof } from './components/SocialProof';
import { FloatingElements } from './components/FloatingElements';

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
  return (
    <HelmetProvider>
      <div className="grain min-h-screen font-sans selection:bg-gold selection:text-black-pure bg-[#0d0d0d] text-white">
        <SEO />
        <Navbar />
        <main>
          <Hero />
          <TrustBar />
          <SocialProof />
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
