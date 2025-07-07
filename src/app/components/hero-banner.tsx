'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HeroBanner() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
      {/* Left: Text Content */}
      <div>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
          Beyond an Agency,<br />
          We're the Team That Builds<br />
          Beside You.
        </h1>
        <p className="text-gray-500 text-lg mb-8">
          We work as an extension of your team, combining Shopify development, automation, and strategy to help you scale faster with less friction.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mb-10">
          <Link href="#">
            <div className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md shadow-md font-medium text-sm flex items-center space-x-2">
              <span>Schedule A Call</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </div>
          </Link>
          <Link href="#">
            <div className="bg-white border border-blue-700 text-blue-700 px-6 py-3 rounded-md shadow-md font-medium text-sm">
              Get Free Growth Report
            </div>
          </Link>
        </div>

        {/* Logos (Scrolling) */}
        <div className="overflow-hidden whitespace-nowrap mt-4">
          <div className="flex scrolling-logos space-x-16 animate-scroll-x">
            <Image src="/images/sls3.png" alt="SBS" className="h-auto grayscale opacity-80 hover:opacity-100 transition" width={100} height={48} />
            <Image src="/images/paddock.png" alt="Paddock" className="h-auto grayscale opacity-80 hover:opacity-100 transition" width={100} height={48} />
            <Image src="/images/nutriburst.png" alt="Nutriburst" className="h-auto grayscale opacity-80 hover:opacity-100 transition" width={100} height={48} />
            <Image src="/images/pf.png" alt="PF" className="h-auto grayscale opacity-80 hover:opacity-100 transition" width={100} height={48} />
          </div>
        </div>
      </div>

      {/* Right: Image and Testimonial */}
      <div className="relative">
        {/* Main Image */}
        <div className="rounded-3xl shadow-xl overflow-hidden">
          <Image
            src="/images/Hero-Image.png"
            alt="Team Photo"
            className="w-full object-cover"
            width={600}
            height={400}
          />
        </div>

        {/* Testimonial Box */}
        <div
          className="absolute -bottom-8 left-6 right-6 bg-[#00000060] text-white rounded-xl p-6 shadow-lg flex flex-col gap-3"
          style={{ backdropFilter: 'blur(6px)' }}
        >
          <p className="text-sm">
            Shashi and his team <strong className="text-white">helped double our conversion rate, from 2.5% to 5%</strong>, through two years of focused CRO and dev work.
            <br />
            <span className="text-blue-300">They’ve been a true growth partner.</span>
          </p>
          <div className="flex items-center gap-3">
            <Image
              src="/images/jack.png"
              alt="Jack Rubin"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="text-sm">
              <strong>Jack Rubin</strong>, Co-Founder, Purdy & Figg
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
