'use client';

import Image from 'next/image';
import Link from 'next/link';
import LogoSlider from '../home/LogoSlider';
import { Button } from '../ui/button';
import arrowRight from '../../../assets/images/arrow-right.png';
import heroImageMobile from '../../../assets/images/hero-image-mobile.jpg';

export default function HeroBanner() {
  return (
    <section className="container mx-auto pb-6 md:py-6">
      {/* Desktop Layout */}
      <div className="hidden md:grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Text Content */}
        <div className='my-10'>
          <h1 className="text-4xl md:text-[64px] font-medium text-text-dark mb-4">
            Beyond an<br /> Agency,
            We're the<br /> Team That Builds<br />
            Beside You.
          </h1>
          <p className="text-text-dark text-lg mb-6 tracking-wider">
            We work as an extension of your team, combining Shopify development, automation, and strategy to help you scale faster with less friction.
          </p>

          <div className="flex flex-wrap gap-2 mb-25.5">
            <Link href="#" className='flex-1'>
              <Button className='w-full flex items-center'>
                <span>Schedule A Call</span>
                <Image src={arrowRight} className='size-6 hidden md:block' alt="Arrow right icon" />
              </Button>
            </Link>
            <Link href="#" className='flex-1'>
              <Button variant="outline" className='w-full'>
                Get Free Growth Report
              </Button>
            </Link>
          </div>

          {/* Logos (Scrolling) */}
          <div className="overflow-hidden whitespace-nowrap">
            <LogoSlider />
          </div>
        </div>

        {/* Right: Image and Testimonial */}
        <div className="relative h-full">
          {/* Main Image */}
          <div className="rounded-3xl h-full shadow-xl overflow-hidden [box-shadow:0px_4px_12px_0px_#FFFFFF40_inset,0px_4px_28px_0px_#FFFFFF40]">
            <Image
              src="/images/Hero-Image.png"
              alt="Team Photo"
              className="w-full h-full object-cover"
              width={600}
              height={100}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent pointer-events-none"></div>
          </div>

          {/* Testimonial Box */}
          <div
            className="absolute bottom-3 left-6 right-6 rounded-xl bg-[linear-gradient(98.47deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0)_100.08%)]"
          >
            <div className='text-white bg-[rgba(34,33,33,0.7)] backdrop-blur-lg rounded-xl py-6 px-8 m-[1px]'>
              <p className="text-lg tracking-wider">
                Shashi and his team <span className='font-bold underline underline-offset-4 decoration-wavy decoration-[#48C8FF] decoration-1'>helped double our conversion rate, from 2.5% to 5%</span>, through two years of focused CRO and dev work.
                <span className='font-bold'>They've been a true growth partner.</span>
              </p>
              <div className="flex items-center mt-2 gap-2">
                <Image
                  src="/images/jack.png"
                  alt="Jack Rubin"
                  width={42}
                  height={42}
                  className="rounded-full"
                />
                <div className="text-lg">
                  <span className='font-bold'>Jack Rubin</span>, Co-Founder, Purdy & Figg
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        {/* Mobile: Image with overlay content */}
        <div className="relative h-[600px] overflow-hidden">
          <Image
            src={heroImageMobile}
            alt="Team Photo"
            className="w-full h-full object-cover"
            width={600}
            height={100}
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-[linear-gradient(180.04deg,rgba(0,0,0,0)_17.29%,#000000_92.32%)]"></div>

          {/* Content overlay */}
          <div className="absolute bottom-0 inset-0 flex flex-col justify-end px-4 text-white">
            <h1 className="text-[27px] font-medium mb-2 leading-9">
              Beyond an Agency, We're the Team That Builds Beside You.
            </h1>
            <p className="mb-4">
              We work as an extension of your team, combining Shopify development, automation, and strategy to help you scale faster with less friction.
            </p>
            {/* Buttons */}
            <div className="flex flex-col gap-3 mb-6">
              <Link href="#" className='flex-1'>
              <Button size="lg" className='w-full flex items-center'>
                <span>Schedule A Call</span>
                <Image src={arrowRight} className='size-6' alt="Arrow right icon" />
              </Button>
            </Link>
            <Link href="#" className='flex-1'>
              <Button size="lg" variant="outline" className='w-full'>
                Get Free Growth Report
              </Button>
            </Link>
            </div>
          </div>

        </div>


        {/* Testimonial Box - positioned at bottom */}
          <div className='text-white bg-[linear-gradient(0deg,#201F1E,#201F1E)] backdrop-blur-3xl p-4'>
            <p className="text-center tracking-wider mb-2">
              Shashi and his team <span className='font-bold underline underline-offset-4 decoration-dotted decoration-[#48C8FF] decoration-2'>helped double our conversion rate, from 2.5% to 5%</span>, through two years of focused CRO and dev work. <span className='font-bold'>They've been a true growth partner.</span>
            </p>
            <div className="flex items-center justify-center gap-2">
              <Image
                src="/images/jack.png"
                alt="Jack Rubin"
                width={39}
                height={39}
                className="rounded-full"
              />
              <div className="">
                <span className='font-bold'>Jack Rubin</span>, <br/>Co-Founder, Purdy & Figg
              </div>
            </div>
          </div>

        {/* Mobile: Logos below the hero */}
        <div className="mt-10 mb-4 h-max overflow-hidden whitespace-nowrap">
          <LogoSlider />
        </div>
      </div>
    </section>
  );
}