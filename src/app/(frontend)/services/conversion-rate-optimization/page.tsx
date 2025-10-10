import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conversion Rate Optimization Services for Shopify',
  description: 'Increase your Shopify store’s revenue with CRO audits, A/B testing, personalization, and analytics to turn more visitors into paying customers.',
  alternates: {
    canonical: (process.env.NEXT_PUBLIC_SERVER_URL || 'https://v2.valardigital.com') + '/services/conversion-rate-optimization',
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
        title={"Conversion Rate Optimization Services"}
        description={"Maximise growth with smart CRO solutions tailored to your Shopify store."}
      />
      <FeatureSection 
        heading={"What We Offer?"}
        description={"As a leading conversion rate optimization agency, we combine data, testing, and personalization to ensure every interaction on your site drives results. By improving website functionality and enhancing customer experience, our CRO services help increase conversions and revenue."}
        features={[
          { text: "Website CRO Audits & Reviews" },
          { text: "A/B Testing for Layouts, Features & Content" },
          { text: "Personalization Across Web, Mobile & Email" },
          { text: "User behavior analytics & heatmaps" },
          { text: "Consulting for Long-Term CRO Growth Strategies" },
        ]}
        ctaText={"Schedule a Call"}
      />
      <StepByStepSection 
        heading={'Our CRO Process'}
        description={'Here’s how our conversion rate optimisation services drive measurable results:'}
        steps={[
          { title: 'Audit & Analysis', description: 'We analyze your funnel to identify conversion blockers, friction points, and opportunities using analytics, heatmaps, and user recordings.' },
          { title: 'Hypothesis & Testing', description: 'We develop data-backed hypotheses and run A/B tests on key elements—layouts, copy, CTAs, checkout flow, and more.' },
          { title: 'Personalization', description: 'We create targeted experiences based on user behavior, traffic source, and customer segment to increase relevance and conversions.' },
          { title: 'Measurement & Insights', description: "We track performance continuously, analyzing what's working and why, then share actionable insights with your team." },
          { title: 'Continuous Improvement', description: 'Monthly reporting, ongoing tests, and strategic consulting to keep your conversion rate climbing as your business evolves.' },
        ]}
      />
      <TestimonialSection />
      <CTASection />
    </>
  );
}


