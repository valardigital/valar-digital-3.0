'use client';

import Image from 'next/image';
import Link from 'next/link';

const CaseStudiesShowcase = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-blue-600 font-semibold text-sm uppercase mb-2">
          Results That Speak For Themselves
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          See Our Impact in Action
        </h2>
        <p className="text-gray-600">
          A look at how we’ve helped brands grow through clear strategy, strong execution, and systems that scale.
        </p>
      </div>

      {/* Case Study 1 */}
      <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 mb-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <Image
            src="/images/case-pf.png"
            alt="Purdy & Figg Bottle"
            width={600}
            height={400}
            className="rounded-xl object-cover"
          />
          <div className="flex gap-4 text-sm font-semibold text-gray-800 mt-4">
            <span>+22% Retention rate increase</span>
            <span>+18% More product swaps</span>
            <span>&lt;60 days To measurable impact</span>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold text-blue-900 mb-4">Purdy & Figg</h3>
          <p className="text-sm font-semibold text-gray-800 mb-2">The Problem</p>
          <p className="text-gray-600 mb-4">
            Customers struggled to manage their subscriptions. Skipping, swapping, or editing felt clunky – and retention was dropping fast.
          </p>
          <p className="text-sm font-semibold text-gray-800 mb-2">What We Did</p>
          <p className="text-gray-600 mb-4">
            We redesigned the entire subscription flow with a clean, branded UI. We simplified the logic, improved speed, and made every action friction-free.
          </p>
          <p className="text-sm font-semibold text-gray-800 mb-2">Why It Worked</p>
          <p className="text-gray-600 mb-4">
            The new flow made managing a subscription feel easy, even enjoyable. Usage increased, and customers started sticking around longer.
          </p>
          <Link href="#" className="text-blue-600 font-semibold text-sm">
            See Case Study →
          </Link>
        </div>
      </div>

      {/* Quote 1 */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-xl text-gray-900 italic mb-4">
          “Our conversion rate grew from 2.5% to 5%, a clear result of smart, focused CRO and development work.”
        </p>
        <p className="text-sm font-semibold text-gray-700">Jack Rubin, Co-Founder & Co-CEO</p>
      </div>

      {/* Case Study 2 */}
      <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 mb-12 grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <h3 className="text-xl font-bold text-blue-900 mb-4">Zima Dental</h3>
          <p className="text-sm font-semibold text-gray-800 mb-2">The Problem</p>
          <p className="text-gray-600 mb-4">
            Zima had no structured post-purchase strategy — leaving upsell revenue on the table and missing key retention moments.
          </p>
          <p className="text-sm font-semibold text-gray-800 mb-2">What We Did</p>
          <p className="text-gray-600 mb-4">
            We implemented custom post-purchase flows using Upsell Master, paired with real-time A/B testing to find what actually converts.
          </p>
          <p className="text-sm font-semibold text-gray-800 mb-2">Why It Worked</p>
          <p className="text-gray-600 mb-4">
            We replaced guesswork with data, and quick wins turned into sustained AOV growth. Revenue climbed — and so did customer satisfaction.
          </p>
          <Link href="#" className="text-blue-600 font-semibold text-sm">
            See Case Study →
          </Link>
        </div>
        <div className="order-1 md:order-2">
          <Image
            src="/images/case-zima.png"
            alt="Zima Dental Product"
            width={600}
            height={400}
            className="rounded-xl object-cover"
          />
          <div className="flex gap-4 text-sm font-semibold text-gray-800 mt-4">
            <span>+16% AOV increase in 30 days</span>
            <span>+9% Boost in post-purchase conversion</span>
            <span>100% Test coverage on all key offers</span>
          </div>
        </div>
      </div>

      {/* Quote 2 */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-xl text-gray-900 italic mb-4">
          “Valar came in, understood the gaps in our post-purchase flow,
          and delivered a smarter upsell system that actually worked.
          We saw the impact within weeks.”
        </p>
        <p className="text-sm font-semibold text-gray-700">Name Goes Here, Designation</p>
      </div>

      {/* CTA */}
      <div className="text-center">
        <Link href="#" className="inline-block bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold px-6 py-3 rounded-md transition">
          View All Case Studies →
        </Link>
      </div>
    </section>
  );
};

export default CaseStudiesShowcase;
