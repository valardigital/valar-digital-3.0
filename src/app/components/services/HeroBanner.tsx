'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import arrowRight from '@/assets/images/arrow-right.png';
import heroImage from '@/assets/images/services/hero-image.jpg';
import SlickSlider from '../homepage/SlickSlider';

export default function HeroBanner() {
  return (
    <section className="container mx-auto pb-6 md:py-12">
      {/* Desktop Layout */}
      <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-22 items-center bg-white rounded-3xl lg:pl-16 border border-border">
        <div className='my-10 p-10 lg:p-0'>
          <h1 className="text-5xl font-medium text-text-dark mb-6 leading-[1.2]">
            Smart Shopify<br /> Services for Every<br /> Stage of Growth
          </h1>
          <p className="text-text-dark mb-6 tracking-[0.04rem]">
            Whether you’re migrating, scaling, or optimizing,
            we bring the right strategy and execution to get you there.
          </p>

          <Link href="#calendar" className='md:w-[214px]'>
            <Button className='flex items-center gap-2'>
              <span>Schedule A Call</span>
              <Image src={arrowRight} className='size-6 hidden md:block' alt="Arrow right icon" />
            </Button>
          </Link>
        </div>

        {/* Right: Image and Testimonial */}
        <div className="relative h-full">
          {/* Main Image */}
          <div className="rounded-3xl h-full overflow-hidden">
            <Image
              src={heroImage}
              alt="Team Photo"
              className="w-full h-full object-cover"
              width={600}
              height={470}
            />
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        {/* Mobile: Image with overlay content */}
        <div className="relative h-[600px] overflow-hidden">
          <Image
            src={heroImage}
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
              Smart Shopify Services for Every Stage of Growth
            </h1>
            <p className="mb-4">
              Whether you’re migrating, scaling, or optimizing, we bring the right strategy and execution to get you there.            </p>
            {/* Buttons */}
            <div className="flex flex-col gap-3 mb-6">
              <Link href="#calendar" className='flex-1'>
                <Button size="lg" className='w-full flex items-center'>
                  <span>Schedule A Call</span>
                  <Image src={arrowRight} className='size-6' alt="Arrow right icon" />
                </Button>
              </Link>
            </div>
          </div>

        </div>

      </div>
      {/* Logos (Scrolling) */}
      <div className="mt-6 md:mt-10">
        <p className='px-4 text-sm md:text-base text-center mb-6 md:mb-10 text-text-light font-medium'>Trusted by DTC brands doing $1M to $50M+ in revenue, from bold startups to global names.</p>
        <div className='overflow-hidden whitespace-nowrap'>
          <SlickSlider />
        </div>
      </div>
    </section>
  );
}