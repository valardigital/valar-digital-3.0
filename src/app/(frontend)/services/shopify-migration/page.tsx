import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shopify Migration Services with Zero Data Loss',
  description: 'Seamlessly migrate your store to Shopify from Magento, WooCommerce, and more. Preserve data, integrations, and SEO for a smooth transition.',
  alternates: {
    canonical: (process.env.NEXT_PUBLIC_SERVER_URL || 'https://valardigital.com') + '/services/shopify-migration',
  },
};
import FeatureSection from '../../components/serviceDetails/FeatureSection';
import HeroBanner from '../../components/serviceDetails/HeroBanner';
import StepByStepSection from '../../components/serviceDetails/ProcessStepSection';
import TestimonialSection from '../../components/serviceDetails/TestimonialSection';
import CTASection from '../../components/shared/CTASection';
import serviceImg4 from "@/assets/images/services/service-img-4.png";

export default function ServiceDetails() {

  return (
    <>
      <HeroBanner 
        title={"Shopify Migration Services"}
        description={"Let our experts handle your Shopify store migration, ensuring the safety and security of your data."}
      />
      <FeatureSection 
        heading={"What We Offer?"}
        description={"We specialize in smoothly migrating stores of all sizes to Shopify and Shopify Plus while ensuring data integrity and performance. Whether you’re moving from Magento, WooCommerce, BigCommerce, or a custom solution, we ensure a smooth and hassle-free migration."}
        features={[
          { text: "Complete Shopify migration services (products, customer data, order history, content)" },
          { text: "Safe migrations of large store databases with reduced downtime." },
          { text: "Migration from Magento to Shopify, BigCommerce to Shopify, and more." },
          { text: "Preserve integrations with apps and software during migration." },
          { text: "Retain and improve SEO with 301 redirects & metadata optimization." },
        ]}
        image={serviceImg4}
        imageAlt="Shopify Migration"
      />
      <StepByStepSection 
        heading={'Our Shopify Migration Process'}
        description={'Migrate from any platform to Shopify with a step-by-step approach to ensure a smooth transition.'}
        steps={[
          { title: 'Platform Assessment', description: 'We analyze your current e-commerce setup (Magento, WooCommerce, BigCommerce, Wix, or custom) to plan the ideal migration strategy.' },
          { title: 'Data Transfers', description: 'Secure migration of customer information, product catalogs, order history, content, and databases.' },
          { title: 'Integration Handling', description: 'Preserve or reconfigure existing third-party apps and software tools for Shopify compatibility.' },
          { title: 'SEO Preservation', description: 'Implement 301 redirects, update metadata, and safeguard your search rankings.' },
          { title: 'Testing & Support', description: 'Full QA testing to ensure zero data loss or functionality issues, followed by post-migration support.' },
        ]}
      />
      <TestimonialSection />
      <CTASection />
    </>
  );
}


