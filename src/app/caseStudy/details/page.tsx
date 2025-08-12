import Image from "next/image";
import bulbIcon from "@/assets/images/services/lightBulb.png";

export default function CaseStudyPage() {
  return (
    <div className="bg-background-muted mt-[64px] md:mt-[67px]">
      <div className="container mx-auto py-16 px-0 md:px-4">
        <section>
          <div className="flex items-center gap-2 hover:font-medium cursor-pointer mb-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 mt-[2px] rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 12h16m-6-6l6 6-6 6" />
            </svg>
            Back to Case Studies
          </div>

          <h1 className="font-medium leading-[1.6] text-[40px]">How We Helped Purdy & Figg<br />
            Cut Subscription Churn by 23%</h1>

          <div className="flex gap-6 mt-10">
            <div className="bg-primary py-10 px-8 rounded-3xl space-y-[47px] tracking-[0.04rem] line-height-[1.6] text-white min-w-[408px]">
              <div className="space-y-2">
                <p>Client</p>
                <p className="font-medium">Purdy & Figg</p>
              </div>
              <div className="space-y-2">
                <p>Industry</p>
                <p className="font-medium">DTC · Wellness · Subscription Ecommerce</p>
              </div>
              <div className="space-y-2">
                <p>Scope</p>
                <p className="font-medium">UX Strategy · UX/UI Design ·<br />
                  Front & Back-End Development</p>
              </div>
              <div className="space-y-2">
                <p>Timeframe</p>
                <p className="font-medium">8 weeks (from strategy to launch)</p>
              </div>
            </div>
            <div className="border rounded-3xl space-y-4 py-10 px-8 bg-white">
              <div className="flex items-center justify-center size-13 bg-background-subtle rounded-[4px] border mb-4">
                <Image src={bulbIcon} alt="Icon 3" width={100} height={100} className="size-7" />
              </div>
              <h2 className="font-medium text-2xl leading-[1.3] mb-4">The Context</h2>
              <div className="space-y-2">
                <h5 className="text-primary font-medium">The challenge</h5>
                <p>Purdy & Figg is a fast-growing wellness brand with a loyal customer base and a strong subscription model at the heart of their business. But their existing customer portal felt cluttered, impersonal, and off-brand — leading to user confusion, friction at key touchpoints, and ultimately, increased churn.</p>
              </div>
              <div className="space-y-2">
                <h5 className="text-primary font-medium">What we did</h5>
                <p>We partnered with their team to completely rethink the experience — making it calmer, more intuitive, and emotionally aligned with the brand. Over the course of 8 weeks, we led strategy, UX, and front-end development to deliver a fully branded, mobile-first subscription flow that elevated the visual structure, simplified key actions, and gave users greater clarity and control.</p>
              </div>
            </div>
          </div>
          <div className="border rounded-3xl space-y-4 py-10 px-8 mt-6  bg-white">
            <div className="flex gap-8 text-text-dark">
              <h2 className="text-2xl font-medium whitespace-nowrap leading-[1.3]">The Results</h2>
              <p className="leading-[1.6] tracking-[0.04rem]">The redesigned subscription experience delivered measurable improvements across retention, engagement, and customer satisfaction, highlighting how thoughtful UX and a brand-aligned interface can directly improve customer behavior and business performance.</p>
            </div>
            <hr className="bg-border my-6" />
            <div className="grid grid-cols-4 gap-6 mx-auto">
              <div>
                <h2 className="text-[28px] font-medium leading-[1.5]">23%</h2>
                <h3 className="text-[28px]">reduction in churn</h3>
                <p className="text-text-light mt-1 leading-[1.4] tracking-[0.04rem]">Fewer users canceled their subscriptions.</p>
              </div>
              <div>
                <h2 className="text-[28px] font-medium leading-[1.5]">31%</h2>
                <h3 className="text-[28px] whitespace-nowrap">increase in product swaps</h3>
                <p className="text-text-light mt-1 leading-[1.4] tracking-[0.04rem]">More users switched products instead of leaving.</p>
              </div>
              <div>
                <h2 className="text-[28px] font-medium leading-[1.5]">5x</h2>
                <h3 className="text-[28px] whitespace-nowrap">fewer support tickets</h3>
                <p className="text-text-light mt-1 leading-[1.4] tracking-[0.04rem]">Self-serve tools replaced manual support.</p>
              </div>
              <div>
                <h2 className="text-[28px] font-medium leading-[1.5]">18%</h2>
                <h3 className="text-[28px]">increase in skip over cancel</h3>
                <p className="text-text-light mt-1 leading-[1.4] tracking-[0.04rem]">Users paused or skipped instead of canceling.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">

        </section>
      </div>

    </div>
  );
}