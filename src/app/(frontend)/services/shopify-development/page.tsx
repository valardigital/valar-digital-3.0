import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shopify Development Services for Fast, Scalable Stores',
  description: 'Build a high-performing Shopify store with custom themes, integrations, and optimized performance to boost conversions and scale your business.',
  alternates: {
    canonical: (process.env.NEXT_PUBLIC_SERVER_URL || 'https://valardigital.com') + '/services/shopify-development',
  },
};
import FeatureSection from '../../components/serviceDetails/FeatureSection';
import HeroBanner from '../../components/serviceDetails/HeroBanner';
import StepByStepSection from '../../components/serviceDetails/ProcessStepSection';
import TestimonialSection from '../../components/serviceDetails/TestimonialSection';
import CTASection from '../../components/shared/CTASection';


export default function ServiceDetails() {

  return (
    <>
      <HeroBanner 
        title={"Shopify Development Services"}
        description={"Transform your online store into a high-performing, scalable Shopify website built for speed and sales conversions."}
      />
      <FeatureSection 
        heading={"What We Offer?"}
        description={"We convert your Shopify store into a high-performing storefront that is scalable and designed to deliver on both speed and sales. From custom Shopify Plus builds to custom integrations, we ensure your site is fast, adaptable, and designed to convert."}
        features={[
          { text: "Custom Shopify Plus development" },
          { text: "ERP, CRM & third-party integrations" },
          { text: "Speed & performance optimization" },
          { text: "Scalable technical architecture" },
          { text: "Shopify headless commerce" },
        ]}
      />
      <StepByStepSection 
        heading={'Our Shopify Development Process'}
        description={'We combine backend expertise with frontend creativity to build Shopify websites that scale. Every line of code is carefully structured for growth.'}
        steps={[
          { title: 'Tech Mapping', description: 'We assess your current setup, integrations, and long-term needs to map out the right technical stack for success.' },
          { title: 'Theme Development', description: 'We build custom Shopify Plus themes for speed, flexibility, and conversions, optimized across all compatible devices.' },
          { title: 'Integration & Architecture', description: 'Seamless connections between Shopify and your existing tools—ERPs, CRMs, fulfillment systems, and more.' },
          { title: 'Performance Optimization', description: 'Speed audits, code cleanups, and Core Web Vitals improvements to reduce load times and ensure a smooth user experience.' },
          { title: 'QA & Launch Support', description: 'Rigorous testing and collaborative reviews to ensure everything works seamlessly for a smooth launch.' },
        ]}
      />
      <TestimonialSection />
      <CTASection />
    </>
  );
}


