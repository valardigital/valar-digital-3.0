import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get Your Free Shopify Growth Report',
  description: 'Discover your Shopify store’s potential with a free growth report. Get insights on UX, CRO, site speed, and actionable tactics to boost revenue.',
  alternates: {
    canonical: (process.env.NEXT_PUBLIC_SERVER_URL || 'https://valardigital.com') + '/growth',
  },
};
import React from 'react';
import HeroBanner from '../components/growth/HeroBanner';
import StatsSection from '../components/growth/StatsSection';
import ReportFeaturesSection from '../components/growth/ReportFeaturesSection';
import HowItWorks from '../components/growth/HowItWorks';
import FormSection from '../components/growth/FormSection';

export default function Services() {

  return (
    <div className='bg-background-muted mt-[64px] md:mt-[80px]'>
      <HeroBanner />
      <StatsSection />
      <ReportFeaturesSection />
      <HowItWorks />
      <FormSection />
    </div>
  );
}
