import FeatureSection from '../components/serviceDetails/FeatureSection';
import HeroBanner from '../components/serviceDetails/HeroBanner';
import StepByStepSection from '../components/serviceDetails/ProcessStepSection';
import TestimonialSection from '../components/serviceDetails/TestimonialSection';
import CTASection from '../components/shared/CTASection';


export default function ServiceDetails() {

  return (
    <>
      <HeroBanner />
      <FeatureSection />
      <StepByStepSection />
      <TestimonialSection />
      <CTASection />
    </>
  );
}
