import React from 'react';

import HeroBanner from './components/sections/hero-banner';
import ValueProposition from './components/sections/ValueProposition';
import ExpertiseSection from './components/sections/ExpertiseSection';
import CaseStudiesShowcase from './components/sections/CaseStudiesShowcase';
import TestimonialSlider from './components/sections/TestimonialSlider';
import TrustedTools from './components/sections/TrustedTools';
import ProcessSection from './components/sections/ProcessSection';
import InsightsSection from './components/sections/InsightsSection';

export default function Home() {

  return (
    <>
      <HeroBanner />
      <ValueProposition />
      <ExpertiseSection />
      <CaseStudiesShowcase />
      <TestimonialSlider />
      <ProcessSection />
      <TrustedTools />
      <InsightsSection />
    </>
  );
}
