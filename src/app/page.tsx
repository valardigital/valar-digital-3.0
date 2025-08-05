import React from 'react';

import HeroBanner from './components/homepage/hero-banner';
import ValueProposition from './components/homepage/ValueProposition';
import ExpertiseSection from './components/homepage/ExpertiseSection';
import CaseStudiesShowcase from './components/homepage/CaseStudiesShowcase';
import TestimonialSlider from './components/homepage/TestimonialSlider';
import TrustedTools from './components/homepage/TrustedTools';
import ProcessSection from './components/homepage/ProcessSection';
import InsightsSection from './components/homepage/InsightsSection';

export default function Home() {

  return (
    <div className='pt-[64px] md:pt-[67px]'>
      <HeroBanner />
      <ValueProposition />
      <ExpertiseSection />
      <CaseStudiesShowcase />
      <TestimonialSlider />
      <ProcessSection />
      <TrustedTools />
      <InsightsSection />
    </div>
  );
}
