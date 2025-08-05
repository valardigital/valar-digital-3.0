import React from 'react';

import HeroBanner from '../components/services/HeroBanner';
import ServicesSection from '../components/services/ServicesSection';

export default function Services() {

  return (
    <div className='bg-background-muted pt-[64px] md:pt-[67px]'>
      <HeroBanner />
      <ServicesSection />
    </div>
  );
}
