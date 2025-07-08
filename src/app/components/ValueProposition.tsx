import Image from 'next/image';
import Link from 'next/link';

const ValueProposition = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <p className="text-blue-600 font-semibold uppercase text-sm mb-2">Why Brands Choose Valar</p>
        <h2 className="text-4xl text-black md:text-5xl font-bold mb-4">We Don’t Just Build. We Scale.</h2>
        <p className="text-gray-600">
          We’re not another dev shop. We partner with founders and marketers to fix what’s broken,
          scale what’s working, and grow what matters.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Large Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between lg:row-span-2">
          <div>
            <h3 className="text-xl text-black font-semibold mb-4">Embedded Growth Team, Aligned to Win</h3>
            <p className="text-gray-600 mb-6">
              We plug directly into your business, adapting to your systems, sprint cycles, and goals. No layers,
              just fast, focused collaboration that drives results.
            </p>
          </div>
          <Image src="/images/imag-1.png" alt="Team Illustration" width={400} height={300} className="rounded-md mt-auto" />
        </div>

        {/* Top Right Cards */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="mb-3">
            <div className="w-10 h-10 mb-2 text-gray-500">
              <Image src="/images/icon-1.png" alt="Icon 1" width={40} height={40} className="rounded-md" />
            </div>
            <h3 className="text-lg text-black font-semibold">Full-Funnel Shopify Expertise</h3>
            <p className="text-gray-600 mt-2 text-sm">
              From custom builds to CRO, upsells, and retention, we support the entire ecommerce lifecycle
              so you can scale without juggling multiple vendors.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="mb-3">
            <div className="w-10 h-10 mb-2 text-gray-500">
              <Image src="/images/icon-2.png" alt="Icon 2" width={40} height={40} className="rounded-md" />
            </div>
            <h3 className="text-lg text-black font-semibold">Smarter Automation, Real ROI</h3>
            <p className="text-gray-600 mt-2 text-sm">
              We connect your tools and systems with purpose. No fluffy dashboards, just seamless automation
              that reduces cost, boosts retention, and saves time.
            </p>
          </div>
        </div>

        {/* Bottom Right Card */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="mb-3">
            <div className="w-10 h-10 mb-2 text-gray-500">
              <Image src="/images/icon-3.png" alt="Icon 3" width={40} height={40} className="rounded-md" />
            </div>
            <h3 className="text-lg text-black font-semibold">Direct, Decisive Communication</h3>
            <p className="text-gray-600 mt-2 text-sm">
              You speak directly with the people doing the work. No PM maze. No long loops.
              Fast responses, smart decisions, and clear execution, always.
            </p>
          </div>
        </div>

        {/* CTA Card */}
        <div className="bg-blue-800 text-white rounded-2xl shadow-md p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold leading-snug mb-6">
              Bold Ideas,<br />
              Precise Execution,<br />
              E-commerce That Wins
            </h3>
          </div>
          <Link href="#" className="bg-white text-blue-800 font-semibold px-4 py-2 rounded-md inline-flex items-center w-max">
            Let’s Talk Growth
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
