import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shopify Services That Build, Scale & Optimize Growth',
  description: 'From design to CRO and automation, Valar delivers full-stack Shopify services that help ecommerce brands scale faster, convert better, and grow smarter.',
  alternates: {
    canonical: (process.env.NEXT_PUBLIC_SERVER_URL || 'https://valardigital.com') + '/services',
  },
};
import React from 'react';
import HeroBanner from '../components/services/HeroBanner';
import ServicesSection from '../components/services/ServicesSection';
import CTASection from '../components/shared/CTASection';

export default function Services() {

  return (
    <div className='bg-background-muted pt-[64px] md:pt-[67px]'>
      <HeroBanner />
      <ServicesSection />
      <CTASection />
    </div>
  );
}
