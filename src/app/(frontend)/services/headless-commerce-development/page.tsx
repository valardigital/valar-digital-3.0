import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Headless Commerce Development Services',
  description: 'Future-proof your store with headless commerce. We build fast, flexible, and scalable JAMStack websites powered by Shopify Plus and Contentful CMS.',
  alternates: {
    canonical: (process.env.NEXT_PUBLIC_SERVER_URL || 'https://valardigital.com') + '/services/headless-commerce-development',
  },
};
import FeatureSection from '../../components/serviceDetails/FeatureSection';
import HeroBanner from '../../components/serviceDetails/HeroBanner';
import StepByStepSection from '../../components/serviceDetails/ProcessStepSection';
import TestimonialSection from '../../components/serviceDetails/TestimonialSection';
import CTASection from '../../components/shared/CTASection';
import serviceImg8 from "@/assets/images/services/service-img-8.png";

export default function ServiceDetails() {

  return (
    <>
      <HeroBanner 
        title={"Headless Commerce Development Services"}
        description={"Future-proof your online store with headless e-commerce architecture."}
      />
      <FeatureSection 
        heading={"What We Offer?"}
        description={"As specialists in headless ecommerce development, we create scalable, API-driven solutions that harmoniously combine performance and flexibility. By harnessing the power of Shopify Plus, Contentful, and Next.js, we build websites that load faster, run better, and adapt to all the evolving brand requirements."}
        features={[
          { text: "Enterprise-Grade Headless Development" },
          { text: "JAMStack for Speed, Security & Performance" },
          { text: "Contentful CMS Customisation & Integration" },
          { text: "Flexible Frontend Frameworks (React, Gatsby, Next.js)" },
          { text: "Seamless API Integrations" },
        ]}
        ctaText={"Schedule A Call"}
        image={serviceImg8}
        imageAlt="Headless commerce"
      />
      <StepByStepSection 
        heading={'Our Headless Commerce Process'}
        description={'Find out how we transform your storefront with the power of headless commerce:'}
        steps={[
          { title: 'Contentful CMS Development', description: 'We customise and integrate Contentful to provide you with a flexible, headless e-commerce CMS that simplifies content management while supporting enterprise workflows.' },
          { title: 'JAMStack Website Development', description: 'We develop JAMStack websites for lightning-fast performance and excellent security. Built with React, Gatsby, and Next.js, these frontends connect seamlessly with Shopify Plus APIs to deliver the ecommerce experience you’re looking for.' },
          { title: 'Headless Shopify Development', description: 'We unlock the full potential of Shopify Plus with headless setups that give you the freedom to be creative with your brand. Our team of experts builds custom storefronts using Shopify’s Storefront API to ensure fast, reliable, and scalable e-commerce solutions.' },
          { title: 'API-First Architecture', description: 'From payment gateways and inventory to CRM and marketing tools, we design and connect APIs across all of your e-commerce ecosystem.' },
          { title: 'Performance & SEO Optimization', description: 'Speed and visibility are critical factors for growth, and we blend them both harmoniously to preach all the strategic benefits through our best SEO and performance optimization.' },
        ]}
      />
      <TestimonialSection />
      <CTASection />
    </>
  );
}


