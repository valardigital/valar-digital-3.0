import FeatureSection from '../../components/serviceDetails/FeatureSection';
import HeroBanner from '../../components/serviceDetails/HeroBanner';
import StepByStepSection from '../../components/serviceDetails/ProcessStepSection';
import TestimonialSection from '../../components/serviceDetails/TestimonialSection';
import CTASection from '../../components/shared/CTASection';


export default function ServiceDetails() {

  return (
    <>
      <HeroBanner 
        title={"Seamless Integration Services"}
        description={"Our integration services offer a seamless e-commerce experience, allowing you to concentrate on brand growth without interruption."}
      />
      <FeatureSection 
        heading={"What We Offer?"}
        description={"We partner with top SaaS companies and deliver tailor-made integrations for a seamless e-commerce experience. From CRM integration to ERP and PIM systems, our team handles the complexity so you can focus on strategy and growth."}
        features={[
          { text: "Partnerships with leading SaaS providers like Klaviyo, ReCharge, Okendo, Rebuy, Skio, and more" },
          { text: "CRM, ERP, and PIM system integrations for streamlined operations" },
          { text: "Smooth integrations with high cohesion and low coupling" },
          { text: "End-to-end setup, support, and guidance." },
        ]}
      />
      <StepByStepSection 
        heading={'Shopify Integration Services Tailored for Your Business'}
        description={''}
        steps={[
          { title: 'SaaS Partnerships', description: 'We partner with leading SaaS companies like Klaviyo, ReCharge, Gorgias, Bold, Okendo, Skio, Rebuy, and more to deliver a comprehensive business solution.' },
          { title: 'Tailor-Made Integrations', description: 'We provide tailor-made integrations that connect your ERP, CRM, PIM, and other systems seamlessly to ensure smooth and efficient operations.' },
          { title: 'Simplified Integration Process', description: "We ensure that integrating different systems and software is easy and doesn't interfere with your daily business operations. " },
          { title: 'Exceptional Commerce Experience', description: "Our seamless integration service helps deliver an exceptional commerce experience to your customers, ensuring your business's long-term growth and success." },
        ]}
      />
      <TestimonialSection />
      <CTASection />
    </>
  );
}


