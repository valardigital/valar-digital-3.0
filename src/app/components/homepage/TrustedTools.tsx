"use client"

import Slider from 'react-slick';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import logo1 from '../../../assets/images/home/tools-logo-1.png';
import logo2 from '../../../assets/images/home/tools-logo-2.png';
import logo3 from '../../../assets/images/home/tools-logo-3.png';
import logo4 from '../../../assets/images/home/tools-logo-4.png';
import logo5 from '../../../assets/images/home/tools-logo-5.png';
import logo1Blue from '../../../assets/images/home/tools-logo-1-blue.png';
import logo2Blue from '../../../assets/images/home/tools-logo-2-blue.png';
import logo3Blue from '../../../assets/images/home/tools-logo-3-blue.png';
import logo4Blue from '../../../assets/images/home/tools-logo-4-blue.png';
import logo5Blue from '../../../assets/images/home/tools-logo-5-blue.png';
import logo6Blue from '../../../assets/images/home/tools-logo-6-blue.png';

const tools = [
  {
    src: logo1Blue,
    hoverSrc: logo1,
    alt: 'Gorgias'
  },
  {
    src: logo2Blue,
    hoverSrc: logo2,
    alt: 'Skio'
  },
  {
    src: logo3Blue,
    hoverSrc: logo3,
    alt: 'Okendo'
  },
  {
    src: logo4Blue,
    hoverSrc: logo4,
    alt: 'Klaviyo'
  },
  {
    src: logo5Blue,
    hoverSrc: logo5,
    alt: 'Rebuy'
  },
  {
    src: logo6Blue,
    hoverSrc: logo6Blue,
    alt: 'Logoipsum'
  },
];

const TrustedTools = () => {
  return (
    <div className="bg-background-muted px-4 py-8 md:py-10">
      <div className='container mx-auto'>
        <section className="max-w-[920px] mx-auto md:p-16 bg-white rounded-[40px] border border-border text-center">
          {/* Section Header */}
          <div className='p-6'>
            <p className="text-primary text-sm font-medium uppercase mb-4 tracking-[0.02rem]">
              Tools we work with</p>
            <h2 className="text-[28px] md:text-5xl font-medium text-text-dark leading-[1.2] mb-4 md:mb-6">
              Trusted Technologies, <br className="hidden md:block" /> Seamlessly Integrated
            </h2>
            <p className="text-text-light md:mb-12 tracking-[0.04rem]">
              We build with the best using proven tools that power Shopify Plus brands.
            </p>
          </div>
          {/* Tool Grid/Slider */}
          <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-4 [&>*:nth-last-child(2)]:md:col-start-2 [&>*:nth-last-child(1)]:md:col-end-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-border/30 hover:bg-white rounded-xl py-8 flex items-center justify-center transition-all duration-300 ease-in-out cursor-pointer group">
                <div className="relative">
                  <Image
                    src={tool.src}
                    alt={tool.alt}
                    width={100}
                    height={32}
                    className="h-8 w-auto transition-opacity duration-300"
                  />
                  <Image
                    src={tool.hoverSrc}
                    alt={tool.alt}
                    width={100}
                    height={32}
                    className="h-8 w-auto absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Slider */}
          <div className="block sm:hidden pb-6">
            <Slider
              dots={false}
              infinite={true}
              speed={3000}
              slidesToShow={2}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={0}
              cssEase="linear"
              arrows={false}
              pauseOnHover={false}
              variableWidth={true}
            >
              {[...tools, ...tools].map((tool, index) => (
                <div key={index}>
                  <div className="py-[11.2px] px-[23.66px]">
                    <Image
                      src={tool.hoverSrc}
                      alt={tool.alt}
                      width={100}
                      height={32}
                      className="h-[25px] w-auto"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TrustedTools;
