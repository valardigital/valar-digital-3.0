'use client';

import Image from 'next/image';
import Link from 'next/link';
import casepf from '@/assets/images/home/case-pf.png';
import casezima from '@/assets/images/home/case-zima.png';
import { Button } from '../ui/button';
import { memo } from 'react';

const CaseStudiesShowcase = memo(() => {
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
        <div className='grid grid-cols-1 lg:grid-cols-[55%_45%]'>
          <div className='flex-1 relative min-h-full'>
            <Image
              src={casepf}
              alt="Purdy & Figg Bottle"
              width={600}
              height={400}
              className="md:rounded-br-3xl rounded-tl-3xl object-cover w-full md:h-full h-[429px]"
              loading="lazy"
            />
            <div className='bg-gradient-to-b from-transparent md:from-50% from-20% to-black/40 to-100% md:rounded-br-3xl rounded-tl-3xl  absolute top-0 bottom-0 left-0 right-0' />
            <div className="absolute bottom-8 left-6 right-6 flex flex-col md:flex-row items-center justify-between tracking-[0.04rem] gap-4 md:gap-6 text-white font-medium text-[28px] md:text-[32px]">
              <div className='w-full'>
                <p>2x</p>
                <p className='font-normal text-base leading-5 lg:whitespace-nowrap'>Growth in conversion rates</p>
              </div>
              <div className='w-full'>
                <p>2%</p>
                <p className='font-normal text-base leading-5 lg:whitespace-nowrap'>Improved GA4 tracking accuracy</p>
              </div>

            </div>

          </div>
          <div className='flex-1 p-6 md:p-10'>
            <h3 className="text-2xl md:text-[32px] font-medium text-primary mb-4 md:mb-6">Purdy & Figg</h3>
            <div className='tracking-[0.04rem] mb-6 md:mb-4'>
              <h6 className="font-medium text-text-dark mb-1 md:mb-2">The Problem</h6>
              <p className="text-text-light">
              Purdy & Figg (P&F), a fast-growing eco-friendly cleaning brand on Shopify Plus, faced high bounce rates and low conversions despite steady traffic, compounded by inconsistent user behavior data between GA4 and Shopify.
              </p>
            </div>
            <div className='tracking-[0.04rem] mb-6 md:mb-4'>
              <h6 className="font-medium text-text-dark mb-1 md:mb-2">What We Did</h6>
              <p className="text-text-light">
              We fixed user data discrepancies for accurate insights, redesigned the storefront with stronger CTAs and better readability, and validated changes through A/B testing.</p>
            </div>
            <div className='tracking-[0.04rem] mb-4 md:mb-6'>
              <h6 className="font-medium text-text-dark mb-1 md:mb-2">Why It Worked</h6>
              <p className="text-text-light">
              The new Shopify experience delivered a smoother customer journey and boosted sales. Redesigning the storefront and key pages improved conversions, while returning visitor engagement strengthened brand loyalty.</p>
            </div>
            <Link href="/case-studies/purdy-figg-conversion-optimization">
              <Button variant="link" className='text-primary flex items-center gap-1 p-0 font-normal h-max hover:no-underline hover:font-medium'>
                See Full Case Study
                <svg xmlns="http://www.w3.org/2000/svg" className="size-5 mt-[2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 12h16m-6-6l6 6-6 6" />
                </svg>
              </Button>
            </Link>
          </div>
        </div>
        {/* Quote 1 */}
        <div className="text-left md:text-center p-6 md:p-12 md:px-4 text-text-dark border">
          <p className="md:text-2xl mb-2 md:mb-4 tracking-[0.03rem] leading-[1.5]">
            “Our conversion rate grew from 2.5% to 5%,<br className='hidden md:block' /> a clear result of smart, focused CRO and development work.”
          </p>
          <p className="font-bold">Jack Rubin<span className='font-normal'>, Co-Founder & Co-CEO</span></p>
        </div>
      </div>



      {/* Case Study 2 */}
      <div className="bg-white rounded-3xl overflow-hidden mb-6 md:mb-12 shadow-[0px_4px_0px_0px_#F0F5FC] border-4 border-border-gradient-image">
        <div className='flex flex-col-reverse lg:grid lg:grid-cols-[45%_55%]'>
          <div className='flex-1 p-6 md:p-10'>
            <h3 className="text-2xl md:text-[32px] font-medium text-primary mb-4 md:mb-6">Zima Dental</h3>
            <div className='tracking-[0.04rem] mb-6 md:mb-4'>
              <h6 className="font-medium text-text-dark mb-1 md:mb-2">The Problem</h6>
              <p className="text-text-light">
              Zimadental, a dental and oral care brand, faced a collapsing Shopify Plus store riddled with broken code, conflicting fixes, and technical instability. Years of patchwork left it fragile, halting CRO testing, wasting marketing spend, and stalling growth.
              </p>
            </div>
            <div className='tracking-[0.04rem] mb-6 md:mb-4'>
              <h6 className="font-medium text-text-dark mb-1 md:mb-2">What We Did</h6>
              <p className="text-text-light">
              ValarDigital rebuilt Zimadental’s Shopify Plus store from the ground up, removing technical debt, streamlining vendor workflows, and implementing a structured CRO testing program.</p>
            </div>
            <div className='tracking-[0.04rem] mb-4 md:mb-6'>
              <h6 className="font-medium text-text-dark mb-1 md:mb-2">Why It Worked</h6>
              <p className="text-text-light">
              The rebuilt Shopify Plus ecosystem delivered measurable results across all storefronts with stability, improved conversions, and scalability—all powered by a clean technical foundation and integrated team execution.</p>
            </div>
            <Link href="/case-studies/zimadental-shopify-plus-rebuild">
              <Button variant="link" className='text-primary flex items-center gap-1 p-0 font-normal h-max hover:no-underline hover:font-medium'>
                See Full Case Study
                <svg xmlns="http://www.w3.org/2000/svg" className="size-5 mt-[2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 12h16m-6-6l6 6-6 6" />
                </svg>
              </Button>
            </Link>
          </div>
          <div className='flex-1 relative min-h-full'>
            <Image
              src={casezima}
              alt="Dental Pod"
              width={600}
              height={400}
              className="md:rounded-bl-3xl rounded-tr-3xl object-cover w-full md:h-full h-[429px]"
              loading="lazy"
            />
            <div className='bg-gradient-to-b from-transparent md:from-50% from-20% to-black/50 to-100% md:rounded-bl-3xl rounded-tr-3xl absolute top-0 bottom-0 left-0 right-0' />
            <div className="absolute bottom-8 left-6 right-6 flex flex-col md:flex-row items-center justify-between tracking-[0.04rem] gap-4 md:gap-6 text-white font-medium text-[28px] md:text-[32px]">
              <div className='w-full'>
                <p>32%</p>
                <p className='font-normal text-base leading-5'>increase in conversion rate<br className='hidden md:block'/></p>
              </div>
              {/* <div className='w-full'>
                <p>&nbsp;</p>
                <p className='font-normal text-base leading-5'>Near-perfect site uptime-<br className='hidden md:block' /></p>
              </div>
              <div className='w-full'>
                <p>&nbsp;</p>
                <p className='font-normal text-base leading-5'>Faster development cycles<br className='hidden md:block' /></p>
              </div> */}
            </div>
          </div>
          
        </div>
        {/* Quote 2 */}
        <div className="text-left md:text-center p-6 md:p-12 md:px-4 text-text-dark border">
          <p className="md:text-2xl mb-2 md:mb-4 tracking-[0.03rem] leading-[1.5]">
            “Valar came in, understood the gaps in our post-purchase flow,<br className='hidden md:block' />
            and delivered a smarter upsell system that actually worked.<br className='hidden md:block' />
            We saw the impact within weeks.”
          </p>
          <p className="font-bold">James O' Connor<span className='font-normal'>, Founder</span></p>
        </div>
      </div>

      {/* CTA */}
      <div className="md:w-max mx-auto">
        <Link
          href="/case-studies"
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
});

export default CaseStudiesShowcase;
