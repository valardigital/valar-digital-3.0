import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shopify Audit Services for SEO, UX & Performance',
  description: 'Get a full Shopify audit analyzing SEO, UX, CRO, and performance. Identify growth opportunities and optimize your store for higher conversions.',
  alternates: {
    canonical: (process.env.NEXT_PUBLIC_SERVER_URL || 'https://valardigital.com') + '/services/shopify-audit',
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
        title={"Shopify Audit"}
        description={"Connect with our experts for actionable insights on how to improve user experience and acquire new customers."}
      />
      <FeatureSection 
        heading={"What We Offer?"}
        description={"Our comprehensive e-commerce audit includes stakeholder interviews, data analysis, CRO tactics, and user testing. By gathering valuable insights into your brand, customers, and goals, our data analysis helps us identify opportunities for improving your Shopify website."}
        features={[
          { text: "Shopify SEO & performance reviews" },
          { text: "Conduct stakeholder interviews & workshops" },
          { text: "Data analysis to identify growth opportunities" },
          { text: "High-impact conversion rate optimization (CRO) tactics" },
          { text: "Conduct user testing to improve customer experience" },
        ]}
      />
      <StepByStepSection 
        heading={'End-to-End Shopify Audit and Improvement'}
        description={'We deliver actionable insights through a complete audit of your Shopify website. Our experts in technology and marketing ensure your store aligns with current e-commerce standards and helps you grow your business.'}
        steps={[
          { title: 'Technology Audit', description: 'We analyze your current tech stack, including Shopify apps and third-party tools, to suggest improvements aligned with your business goals and processes.' },
          { title: 'Marketing Audit', description: 'Our specialists analyze your current digital marketing strategies, including SEO, email marketing, paid media, and content, to identify areas for immediate improvement.' },
          { title: 'SEO Audit', description: 'We perform a detailed Shopify SEO audit to check technical SEO, site architecture, content quality, and ranking factors critical for organic visibility.' },
          { title: 'Performance Audit', description: 'We test your Shopify store during peak traffic and order processing scenarios to ensure speed, reliability, and customer experience.' },
          { title: 'Comprehensive Business Audit', description: 'Through workshops, office visits, and data analysis,  we identify both tangible and intangible opportunities for your business growth' },
        ]}
      />
      <TestimonialSection />
      <CTASection />
    </>
  );
}


