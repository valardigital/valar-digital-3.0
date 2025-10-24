import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Shopify App Development Services',
  description: 'Create and customize Shopify apps to improve checkout, increase AOV, streamline workflows, and enhance customer experience for scalable growth.',
  alternates: {
    canonical: (process.env.NEXT_PUBLIC_SERVER_URL || 'https://valardigital.com') + '/services/shopify-app-development',
  },
};
import FeatureSection from '../../components/serviceDetails/FeatureSection';
import HeroBanner from '../../components/serviceDetails/HeroBanner';
import StepByStepSection from '../../components/serviceDetails/ProcessStepSection';
import TestimonialSection from '../../components/serviceDetails/TestimonialSection';
import CTASection from '../../components/shared/CTASection';
import serviceImg3 from "@/assets/images/services/service-img-3.png";

export default function ServiceDetails() {

  return (
    <>
      <HeroBanner 
        title={"Shopify App Development Services"}
        description={"Custom Shopify apps built to fit your business needs."}
      />
      <FeatureSection 
        heading={"What We Offer?"}
        description={"We create and customize Shopify apps that elevate your store’s performance and customer experience. From optimizing checkout flows to building buyer trust, we create apps designed to unlock growth and streamline your operations. Whether you need tailored extensions or fully custom apps, we are here to help."}
        features={[
          { text: "Custom Shopify Apps" },
          { text: "Built for Scalability" },
          { text: "Checkout & Conversion Tools" },
          { text: "Loyalty & Retention Features" },
          { text: "Custom Business Workflows" },
        ]}
        ctaText={"Schedule A Call"}
        image={serviceImg3}
        imageAlt="Shopify app"
      />
      <StepByStepSection 
        heading={'Our Shopify Apps Process'}
        description={'We design apps that integrate seamlessly with your Shopify store. Here’s how we solve real business challenges and improve customer experience:'}
        steps={[
          { title: 'Exploration & Scoping', description: 'We identify your business requirements, challenges, and customer pain points to define the right app and extension.' },
          { title: 'Custom App Design', description: 'Wireframes and user flows are designed to create intuitive, practical solutions that enhance the customer experience.' },
          { title: 'Development & Integration', description: 'Our team builds custom Shopify apps not only to solve problems but also to extend your business capabilities, ensuring your store is reliable and high-performing.' },
          { title: 'Testing & QA', description: 'Our team of meticulous QA experts ensures your app is bug-free, high-performing, and compatible across all devices.' },
          { title: 'Deployment & Support', description: 'We provide continuous support and updates so your apps adapt to business needs and future Shopify upgrades.' },
        ]}
      />
      <TestimonialSection />
      <CTASection />
    </>
  );
}


