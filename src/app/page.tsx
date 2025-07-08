import React from 'react';

import HeroBanner from './components/hero-banner';
import ValueProposition from './components/ValueProposition';
import ExpertiseSection from './components/ExpertiseSection';
import CaseStudiesShowcase from './components/CaseStudiesShowcase';
import TestimonialSlider from './components/TestimonialSlider';
import TrustedTools from './components/TrustedTools';

export default function Home() {

  return (
    <>
      <HeroBanner />
      <ValueProposition />
      <ExpertiseSection />
      <CaseStudiesShowcase/>
      <TestimonialSlider />
      <TrustedTools />
    </>
  );
}
