'use client';

import Image from 'next/image';
import Link from 'next/link';
import casepf from '../../../assets/images/home/case-pf.png';
import casezima from '../../../assets/images/home/case-zima.png';
import { Button } from '../ui/button';

const CaseStudiesShowcase = () => {
  return (
    <section className="container mx-auto px-4 py-10">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-primary text-sm font-medium uppercase mb-4 tracking-[0.02rem]">
          Results That Speak For Themselves
        </p>
        <h2 className="text-[28px] md:text-5xl font-medium text-text-dark mb-4 md:mb-6 leading-[1.2]">
          See Our Impact in Action
        </h2>
        <p className="text-text-dark mb-6 md:mb-12 tracking-[0.04rem]">
          A look at how we’ve helped brands grow through clear strategy,<br className="hidden md:block" /> strong execution, and systems that scale.
        </p>
      </div>

      {/* Case Study 1 */}
      <div className="bg-white rounded-3xl overflow-hidden mb-14 shadow-[0px_4px_0px_0px_#F0F5FC] border-4 border-border-gradient-image">
        <div className='flex flex-col lg:flex-row items-center'>
          <div className='flex-1 relative'>
            <Image
              src={casepf}
              alt="Purdy & Figg Bottle"
              width={600}
              height={400}
              className="md:rounded-br-3xl rounded-tl-3xl object-cover w-full md:h-full h-[429px]"
            />
            <div className='bg-gradient-to-b from-transparent from-60% to-black/60 to-100% md:rounded-br-3xl rounded-tl-3xl  absolute top-0 bottom-0 left-0 right-0' />
            <div className="absolute bottom-8 left-6 right-6 flex flex-col md:flex-row items-center justify-between tracking-[0.04rem] gap-4 md:gap-6 text-white font-medium text-[28px] md:text-[32px]">
              <div className='w-full'>
                <p>+22%</p>
                <p className='font-normal text-base leading-5 whitespace-nowrap'>Retention rate increase</p>
              </div>
              <div className='w-full'>
                <p>+18%</p>
                <p className='font-normal text-base leading-5 whitespace-nowrap'>More product swaps</p>
              </div>
              <div className='w-full'>
                <p>&lt;60 days</p>
                <p className='font-normal text-base leading-5 whitespace-nowrap'>To measurable impact</p>
              </div>
            </div>

          </div>
          <div className='flex-1 p-6 md:p-10'>
            <h3 className="text-2xl md:text-[32px] font-medium text-primary mb-4 md:mb-6">Purdy & Figg</h3>
            <div className='tracking-[0.04rem] mb-6 md:mb-4'>
              <h6 className="font-medium text-text-dark mb-1 md:mb-2">The Problem</h6>
              <p className="text-text-light">
                Customers struggled to manage their subscriptions. Skipping, swapping, or editing felt clunky – and retention was dropping fast.
              </p>
            </div>
            <div className='tracking-[0.04rem] mb-6 md:mb-4'>
              <h6 className="font-medium text-text-dark mb-1 md:mb-2">What We Did</h6>
              <p className="text-text-light">
                We redesigned the entire subscription flow with a clean, branded Ul. We simplified the logic, improved speed, and made every action friction-free.              </p>
            </div>
            <div className='tracking-[0.04rem] mb-4 md:mb-6'>
              <h6 className="font-medium text-text-dark mb-1 md:mb-2">Why It Worked</h6>
              <p className="text-text-light">
                The new flow made managing a subscription feel easy, even enjoyable. Usage increased, and customers started sticking around longer.              </p>
            </div>
            <Link href="#">
              <Button variant="link" className='text-primary flex items-center gap-1 p-0 font-normal h-max hover:no-underline hover:font-medium'>
                See Case Study
                <svg xmlns="http://www.w3.org/2000/svg" className="size-5 mt-[2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 12h16m-6-6l6 6-6 6" />
                </svg>
              </Button>
            </Link>
          </div>
        </div>
        {/* Quote 1 */}
        <div className="text-left md:text-center p-6 md:p-12 px-4 text-text-dark border">
          <p className="md:text-2xl mb-2 md:mb-4 leading-[1.5]">
            “Our conversion rate grew from 2.5% to 5%,<br className='hidden md:block' /> a clear result of smart, focused CRO and development work.”
          </p>
          <p className="font-bold">Jack Rubin<span className='font-normal'>, Co-Founder & Co-CEO</span></p>
        </div>
      </div>



      {/* Case Study 2 */}
      <div className="bg-white rounded-3xl overflow-hidden mb-6 md:mb-12 shadow-[0px_4px_0px_0px_#F0F5FC] border-4 border-border-gradient-image">
        <div className='flex flex-col lg:flex-row-reverse items-center'>
          <div className='flex-1 relative h-full'>
            <Image
              src={casezima}
              alt="Dental Pod"
              width={600}
              height={100}
              className="md:rounded-bl-3xl rounded-tr-3xl object-cover w-full md:h-full h-[429px]"
            />
            <div className='bg-gradient-to-b from-transparent from-10% to-black/60 to-100% md:rounded-bl-3xl rounded-tr-3xl absolute top-0 bottom-0 left-0 right-0' />
            <div className="absolute bottom-8 left-6 right-6 flex flex-col md:flex-row items-center justify-between tracking-[0.04rem] gap-4 md:gap-6 text-white font-medium text-[28px] md:text-[32px]">
              <div className='w-full'>
                <p>+16%</p>
                <p className='font-normal text-base leading-5'>AOV increase in<br className='hidden md:block'/> 30 days</p>
              </div>
              <div className='w-full'>
                <p>+9%</p>
                <p className='font-normal text-base leading-5'>Boost in post-<br className='hidden md:block' />purchase conversion</p>
              </div>
              <div className='w-full'>
                <p>100%</p>
                <p className='font-normal text-base leading-5'>Test coverage on all<br className='hidden md:block' /> key offers</p>
              </div>
            </div>
          </div>
          <div className='flex-1 p-6 md:p-10'>
            <h3 className="text-2xl md:text-[32px] font-medium text-primary mb-4 md:mb-6">Zima Dental</h3>
            <div className='tracking-[0.04rem] mb-6 md:mb-4'>
              <h6 className="font-medium text-text-dark mb-1 md:mb-2">The Problem</h6>
              <p className="text-text-light">
                Zima had no structured post-purchase strategy — leaving upsell revenue on the table and missing key retention moments.
              </p>
            </div>
            <div className='tracking-[0.04rem] mb-6 md:mb-4'>
              <h6 className="font-medium text-text-dark mb-1 md:mb-2">What We Did</h6>
              <p className="text-text-light">
                We implemented custom post-purchase flows using Upsell Master, paired with real-time A/B testing to find what actually converts. Offers were personalized, UX was optimized, and testing was continuous.              </p>
            </div>
            <div className='tracking-[0.04rem] mb-4 md:mb-6'>
              <h6 className="font-medium text-text-dark mb-1 md:mb-2">Why It Worked</h6>
              <p className="text-text-light">
                We replaced guesswork with data, and quick wins turned into sustained AOV growth. Revenue climbed — and so did customer satisfaction.              </p>
            </div>
            <Link href="#">
              <Button variant="link" className='text-primary flex items-center gap-1 p-0 font-normal h-max hover:no-underline hover:font-medium'>
                See Case Study
                <svg xmlns="http://www.w3.org/2000/svg" className="size-5 mt-[2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 12h16m-6-6l6 6-6 6" />
                </svg>
              </Button>
            </Link>
          </div>
        </div>
        {/* Quote 2 */}
        <div className="text-left md:text-center p-6 md:p-12 px-4 text-text-dark border">
          <p className="md:text-2xl mb-2 md:mb-4 leading-[1.5]">
            “Valar came in, understood the gaps in our post-purchase flow,<br className='hidden md:block' />
            and delivered a smarter upsell system that actually worked.<br className='hidden md:block' />
            We saw the impact within weeks.”
          </p>
          <p className="font-bold">Name Goes Here<span className='font-normal'>, Desgination</span></p>
        </div>
      </div>

      {/* CTA */}
      <div className="md:w-max mx-auto">
        <Link
          href="#"
        >
          <Button className="w-full md:w-max flex items-center gap-2">
            View All Case Studies
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 mt-[1px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h19m-6-6l6 6-6 6" />
            </svg>
          </Button>
        </Link>
      </div>
    </section >
  );
};

export default CaseStudiesShowcase;
