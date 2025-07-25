import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import icon1 from "../../../assets/images/home/valued-proposition-icon-1.svg";
import icon2 from "../../../assets/images/home/valued-proposition-icon-2.svg";
import icon3 from "../../../assets/images/home/valued-proposition-icon-3.svg";
import cardImage from "../../../assets/images/home/valued-proposition-image.png";

const ValueProposition = () => {
  return (
    <section className="px-4 py-8 md:py-10 bg-background-muted">
      <div className='container mx-auto'>
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-12">
          <p className="text-primary font-medium uppercase text-sm mb-4 tracking-[0.02rem]">Why Brands Choose Valar</p>
          <h2 className="text-4xl text-text-dark md:text-5xl font-medium mb-4 md:mb-6">We Don’t Just Build. We Scale.</h2>
          <p className="text-text-dark tracking-[0.04rem]">
            We’re not another dev shop. We partner with founders and marketers<br className='hidden md:block' /> to fix what’s broken,
            scale what’s working, and grow what matters.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Left Large Card */}
          <div className="bg-white rounded-3xl p-6 md:p-10 flex flex-col justify-between gap-6 lg:row-span-2">
            <div>
              <h3 className="text-2xl text-text-dark font-medium mb-2 md:mb-4">Embedded Growth Team, Aligned to Win</h3>
              <p className="text-text-light tracking-[0.04rem]">
                We plug directly into your business, adapting to your systems, sprint cycles, and goals. No layers,
                just fast, focused collaboration that drives results.
              </p>
            </div>
            <Image src={cardImage} alt="Team Illustration" width={400} height={300} className="rounded-md mt-auto" />
          </div>

          {/* Top Right Cards */}
          <div className="relative rounded-3xl p-[1.5px] bg-[linear-gradient(137.84deg,#F3F8FF_0%,#EDF2F9_100%)]">
            <div className="bg-white rounded-[calc(theme(borderRadius.3xl)-1.5px)] p-6 md:p-8 h-full">
              <div className="flex items-center justify-center size-13 mb-4 bg-background-subtle rounded-[4px] border">
                <Image src={icon1} alt="Icon 1" width={100} height={100} className="size-7" />
              </div>
              <h3 className="text-2xl text-text-dark font-medium mb-2">Full-Funnel Shopify Expertise</h3>
              <p className="text-text-light tracking-[0.04rem]">
                From custom builds to CRO, upsells, and retention, we support the entire ecommerce lifecycle
                so you can scale without juggling multiple vendors.
              </p>
            </div>
          </div>

          <div className="relative rounded-3xl p-[1.5px] bg-[linear-gradient(137.84deg,#F3F8FF_0%,#EDF2F9_100%)]">
            <div className="bg-white rounded-[calc(theme(borderRadius.3xl)-1.5px)] p-6 md:p-8 h-full">
              <div className="flex items-center justify-center size-13 mb-4 bg-background-subtle rounded-[4px] border">
                <Image src={icon2} alt="Icon 2" width={100} height={100} className="size-7" />
              </div>
              <h3 className="text-2xl text-text-dark font-medium mb-2">Smarter Automation, Real ROI</h3>
              <p className="text-text-light tracking-[0.04rem]">
                We connect your tools and systems with purpose. No fluffy dashboards, just seamless automation
                that reduces cost, boosts retention, and saves time.
              </p>
            </div>
          </div>

          {/* Bottom Right Card */}
          <div className="relative rounded-3xl p-[1.5px] bg-[linear-gradient(137.84deg,#F3F8FF_0%,#EDF2F9_100%)]">
            <div className="bg-white rounded-[calc(theme(borderRadius.3xl)-1.5px)] p-6 md:p-8 h-full">
              <div className="flex items-center justify-center size-13 mb-4 bg-background-subtle rounded-[4px] border">
                <Image src={icon3} alt="Icon 3" width={100} height={100} className="size-7" />
              </div>
              <h3 className="text-2xl text-text-dark font-medium mb-2">Direct, Decisive Communication</h3>
              <p className="text-text-light tracking-[0.04rem]">
                You speak directly with the people doing the work. No PM maze. No long loops.
                Fast responses, smart decisions, and clear execution, always.
              </p>
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-primary text-white rounded-3xl p-6 md:p-10 flex flex-col justify-end">
            <div>
              <h3 className="text-2xl font-bold mb-6 md:mb-7 tracking-[0.03rem]">
                Bold Ideas,<br />
                Precise Execution,<br />
                E-commerce That Wins
              </h3>
            </div>
            <Link href="#">
              <Button className='bg-white border border-white text-primary hover:bg-transparent hover:text-white flex items-center gap-2 w-full md:w-max'>
                Let’s Talk Growth
                <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12h19m-6-6l6 6-6 6" />
                </svg>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
