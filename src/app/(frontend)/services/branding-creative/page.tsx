import FeatureSection from '../../components/serviceDetails/FeatureSection';
import HeroBanner from '../../components/serviceDetails/HeroBanner';
import StepByStepSection from '../../components/serviceDetails/ProcessStepSection';
import TestimonialSection from '../../components/serviceDetails/TestimonialSection';
import CTASection from '../../components/shared/CTASection';
import { Metadata } from 'next';
import serviceImg11 from "@/assets/images/services/service-img-11.png";

export const metadata: Metadata = {
  title: 'Branding & Creative Services for E-Commerce Growth',
  description: 'Build a unique brand identity with our branding, creative direction, copywriting, and style guides to engage customers and drive e-commerce growth.',
  alternates: {
    canonical: (process.env.NEXT_PUBLIC_SERVER_URL || 'https://valardigital.com') +'/services/branding-creative',
  },
};

export default function ServiceDetails() {

  return (
    <>
      <HeroBanner 
        title={"Branding and Creative Services"}
        description={"Our branding and creative services help e-commerce businesses design impactful brand identities, strategies, and assets that connect with audiences and drive long-term growth."}
      />
      <FeatureSection 
        heading={"What We Offer?"}
        description={"Creating a unique brand identity takes more than good design; it requires strategy, creativity, and consistency. Our team of experienced creative directors and designers works closely with clients to offer design support and direction. We provide a range of services, such as branding, content strategy, campaign design, and social media assets, to create captivating designs that appeal to your target audience. Our primary goal is to deliver results-oriented output that assists our clients in expanding their business."}
        features={[
          { text: "Brand strategy and positioning aligned with your vision" },
          { text: "Target-focused copywriting and content creation " },
          { text: "Creative direction for product launches and campaigns" },
          { text: "Visual identity design(logos, colors, typography) that ensures consistent brand identity across platforms" },
        ]}
        image={serviceImg11}
        imageAlt="Branding Creative"
      />
      <StepByStepSection 
        heading={'Our Branding and Creative Process'}
        description={'From Shopify store branding to digital assets, we deliver visually appealing creative work that grabs attention. Our team ensures your brand speaks with a consistent voice and makes a lasting impression.'}
        steps={[
          { title: 'Brand Audit', description: "We begin by understanding your business, audience, and current brand positioning. This helps us identify opportunities to refine or redefine your visual identity." },
          { title: 'Branding & Identity', description: 'From logo design and brand messaging to curated product designs, we help you establish a strong brand identity that attracts and retains customers.' },
          { title: 'Content & Copywriting', description: 'We create persuasive content that targets the right audience and conveys your brand message effectively.' },
          { title: 'Creative Direction', description: "Our team of creative directors ensures that the campaigns align with the brand's goals and are visually appealing." },
          { title: 'Brand Guidance', description: 'We create style guides covering tone, visuals, and messaging to keep your branding consistent across all channels.' },
        ]}
      />
      <TestimonialSection />
      <CTASection />
    </>
  );
}


