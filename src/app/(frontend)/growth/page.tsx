import React from 'react';
import HeroBanner from '../components/growth/HeroBanner';
import StatsSection from '../components/growth/StatsSection';
import ReportFeaturesSection from '../components/growth/ReportFeaturesSection';
import HowItWorks from '../components/growth/HowItWorks';
import FormSection from '../components/growth/FormSection';

export default function Services() {

  return (
    <div className='bg-background-muted mt-[64px] md:mt-[67px]'>
      <HeroBanner />
      <StatsSection />
      <ReportFeaturesSection />
      <HowItWorks />
      <FormSection />
    </div>
  );
}
