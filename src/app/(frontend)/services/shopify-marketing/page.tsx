import FeatureSection from '../../components/serviceDetails/FeatureSection';
import HeroBanner from '../../components/serviceDetails/HeroBanner';
import StepByStepSection from '../../components/serviceDetails/ProcessStepSection';
import TestimonialSection from '../../components/serviceDetails/TestimonialSection';
import CTASection from '../../components/shared/CTASection';


export default function ServiceDetails() {

  return (
    <>
      <HeroBanner 
        title={"Shopify Marketing Services"}
        description={"Grow your Shopify store with data-driven marketing strategies across search, social media, email, and content."}
      />
      <FeatureSection 
        heading={"What We Offer?"}
        description={"We start by understanding your goals, because every successful Shopify marketing strategy begins with clarity. Our team ensures your brand is represented consistently across all platforms and channels, creating strategies that target the right audience and deliver measurable ROI."}
        features={[
          { text: "SEO to improve visibility and organic rankings." },
          { text: "Pay-Per-Click (PPC) campaigns to drive targeted traffic." },
          { text: "Shopify social media marketing for engagement." },
          { text: "Content marketing to tell your brand story." },
          { text: "Email marketing to nurture leads and convert customers." },
          { text: "A/B testing, personalization, and analytics to boost conversion." },
        ]}
      />
      <StepByStepSection 
        heading={'Our All-in-One Shopify Marketing Framework'}
        description={'We drive revenue growth through our transformative approach, building a results-driven framework that delivers strong return on investment.'}
        steps={[
          { title: 'SEO for Shopify', description: "Optimize your Shopify store's ranking and visibility with our Search Engine Optimization (SEO) strategies." },
          { title: 'Pay-Per-Click (PPC) Campaigns', description: 'Run high-performing paid ads that complement your organic growth.' },
          { title: 'Social Media Marketing', description: 'Build engagement and customer loyalty through paid and organic strategies.' },
          { title: 'Content Marketing', description: 'Engage your target audience with compelling content, visuals, and brand storytelling.' },
          { title: 'Email Marketing', description: 'Automated, personalized email campaigns to build long-lasting relationships with your customers.' },
          { title: 'Conversion Rate Optimisation', description: 'A/B testing, UX design, personalization, and analytics to consistently improve your store’s performance.' },
        ]}
      />
      <TestimonialSection />
      <CTASection />
    </>
  );
}


