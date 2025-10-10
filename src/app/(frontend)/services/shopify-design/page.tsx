import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shopify Development Services for Fast, Scalable Stores',
  description: 'Build a high-performing Shopify store with custom themes, integrations, and optimized performance to boost conversions and scale your business.',
  alternates: {
    canonical: (process.env.NEXT_PUBLIC_SERVER_URL || 'https://v2.valardigital.com') + '/services/shopify-design',
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
        title={"Shopify Website Design Services"}
        description={"Transform your online store with stunning, conversion-optimized Shopify designs that turn visitors into buyers and improve your brand experience."}
      />
      <FeatureSection 
        heading={"What We Do"}
        description={"From audits to full-scale builds, we create visually stunning Shopify websites designed to sell. Whether you’re launching a new brand, migrating from another platform, or improving your customer experience, our team ensures your store looks great and performs even better. With our best UX and CRO insights, we promise an engaging experience from the first click to checkout."}
        features={[
          { text: "UX research & user flow mapping" },
          { text: "Mobile-first responsive design" },
          { text: "Custom product pages, collection pages & landing pages" },
          { text: "Conversion-focused design systems" },
          { text: "Developer-ready Figma handoffs" },
        ]}
      />
      <StepByStepSection 
        heading={'How Our Shopify Design Process Works'}
        description={'We blend creative direction with conversion-focused strategy to bring structure and clarity at every stage. Our process ensures your Shopify website design is built on data, aligned with your brand, and ready to convert.'}
        steps={[
          { title: 'Discovery & UX Mapping', description: 'We learn your brand, understand your customers, and map the journey from landing to checkout.' },
          { title: 'Wireframes & Structures', description: 'Mobile-first wireframes that guide users naturally toward purchase with clear intent at every step' },
          { title: 'Visual Design & UI', description: 'High-fidelity, branded layouts for every touchpoint, from homepage to product pages to landing pages.' },
          { title: 'Review & Refinement', description: 'Collaborative feedback reviews and refinements to ensure everything aligns with your brand and conversion goals.' },
          { title: 'Dev-Ready Handoff', description: 'Clean Figma files with annotations, specs, and guides so your developers can build with confidence.' },
        ]}
      />
      <TestimonialSection />
      <CTASection />
    </>
  );
}


