import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shopify Development & Growth Partner | Valar Digital',
  description: 'We build and scale Shopify stores with expert development, CRO, and automation. Partner with Valar Digital to grow faster and smarter with less friction.',
    alternates: {
    canonical: (process.env.NEXT_PUBLIC_SERVER_URL || 'https://valardigital.com') + '/',
  },
  openGraph: {
    title: 'Shopify Development & Growth Partner | Valar Digital',
    description: 'We build and scale Shopify stores with expert development, CRO, and automation. Partner with Valar Digital to grow faster and smarter with less friction.',
    url: '/',
    images: [
      {
        url: '/Images/valar_logo.png?v=4',
        width: 1200,
        height: 600,
      },
    ],
  },
};
import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

import HeroBanner from './components/homepage/hero-banner';

// Lazy load non-critical components
const ValueProposition = dynamic(() => import('./components/homepage/ValueProposition'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />
});

const ExpertiseSection = dynamic(() => import('./components/homepage/ExpertiseSection'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />
});

const CaseStudiesShowcase = dynamic(() => import('./components/homepage/CaseStudiesShowcase'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />
});

const TestimonialSlider = dynamic(() => import('./components/homepage/TestimonialSlider'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />
});

const TrustedTools = dynamic(() => import('./components/homepage/TrustedTools'), {
  loading: () => <div className="h-32 animate-pulse bg-gray-100" />
});

const ProcessSection = dynamic(() => import('./components/homepage/ProcessSection'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />
});

const InsightsSection = dynamic(() => import('./components/homepage/InsightsSection'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />
});

const CTASection = dynamic(() => import('./components/shared/CTASection'), {
  loading: () => <div className="h-64 animate-pulse bg-gray-100" />
});

export default function Home() {
  return (
    <div className='pt-[64px] md:pt-[67px]'>
      <HeroBanner />
      <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100" />}>
        <ValueProposition />
      </Suspense>
      <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100" />}>
        <ExpertiseSection />
      </Suspense>
      <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100" />}>
        <CaseStudiesShowcase />
      </Suspense>
      <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100" />}>
        <TestimonialSlider />
      </Suspense>
      <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100" />}>
        <ProcessSection />
      </Suspense>
      <Suspense fallback={<div className="h-32 animate-pulse bg-gray-100" />}>
        <TrustedTools />
      </Suspense>
      <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100" />}>
        <InsightsSection />
      </Suspense>
      <Suspense fallback={<div className="h-64 animate-pulse bg-gray-100" />}>
        <CTASection />
      </Suspense>
    </div>
  );
}
