import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Website Speed Optimization for Fast Shopify Stores',
  description: 'Improve your Shopify site speed for better SEO and conversions. Our experts optimize code, images, and servers to deliver lightning-fast load times.',
  alternates: {
    canonical: (process.env.NEXT_PUBLIC_SERVER_URL || 'https://valardigital.com') + '/services/website-speed-optimization',
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
        title={"Website Speed Optimization Services"}
        description={"Deliver a seamless experience to your customers with fast, reliable performance."}
      />
      <FeatureSection 
        heading={"What We Offer?"}
        description={"Our website speed optimization services are tailored for Shopify and Shopify Plus brands that want to offer a seamless experience across all platforms. From lightweight code to global CDN setups, we fine-tune every element of your site to obtain the highest performance and conversions."}
        features={[
          { text: "Comprehensive Website Speed Audit" },
          { text: "Code & Asset Optimization" },
          { text: "Image Compression Without Quality Loss" },
          { text: "Server & Hosting Optimization" },
          { text: "CDN Integration for Global Reach" },
        ]}
        ctaText={"Schedule A Call"}
      />
      <StepByStepSection 
        heading={'Our Speed Optimization Process'}
        description={''}
        steps={[
          { title: 'Website Audit & Analysis', description: 'We conduct a complete performance audit to identify hidden bottlenecks, slow load times, and missed opportunities for improvement.' },
          { title: 'Code Optimization', description: 'We streamline and optimize your website’s codebase to remove any bloat that makes your site heavy. We aim to create a storefront that is lightweight and fast.' },
          { title: 'Image Optimization', description: 'We compress and optimize images across your website by reducing file sizes without compromising the quality. This makes your site more flexible and allows it to handle any heavy traffic.' },
          { title: 'Server Optimization', description: 'We fine-tune your server settings and configurations to improve website speed and performance across all platforms.' },
          { title: 'CDN Integration', description: 'We integrate your store with a Content Delivery Network (CDN) to deliver content faster across the globe while minimizing latency.' },
        ]}
      />
      <TestimonialSection />
      <CTASection />
    </>
  );
}



