"use client"

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';
import { useState } from 'react';


const Footer = () => {
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <footer className="md:px-4 md:pt-4 md:pb-8">
      <div className='bg-border/80 md:rounded-3xl px-4 md:px-0 md:py-8'>
        <div className='container mx-auto'>
          <div className="grid md:grid-cols-5 md:gap-10 pt-6">
            {/* Brand and CTA */}
            <div className="md:col-span-2">

              <Link href="/">
                <Image src="/images/logo.png" alt="Logo" width={150} height={40} />
              </Link>
              <p className="text-text-dark text-sm md:text-base mb-4 md:mb-6 mt-2 md:mt-4 tracking-[0.02rem] md:tracking-[0.04rem]">
                From custom builds to conversion strategy, we<br className='hidden md:block' /> help ambitious ecommerce brands turn<br className='hidden md:block' />
                complexity into growth, and scale with<br className='hidden md:block' /> confidence.
              </p>
              <Link
                href="#"
              >
                <Button className="w-max flex items-center gap-2">
                  Grow Your Business
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-5 mt-[1px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h19m-6-6l6 6-6 6" />
                  </svg>
                </Button>
              </Link>
            </div>

            {/* Company Links */}
            <div className='leading-[1.5] mt-6 md:mt-0 mb-2 mb:mb-0'>
              <button
                className="flex items-center w-full gap-[7px] text-left md:pointer-events-none"
                onClick={() => setIsCompanyOpen(!isCompanyOpen)}
              >
                <h3 className="text-primary font-medium mb-4">Company</h3>
                <svg className={`w-[9.92px md:hidden transition-transform duration-200 mb-3 ${isCompanyOpen ? '' : 'rotate-180'}`} xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6" fill="none">
                  <path d="M9.69328 5.62402H5.28036H1.30661C0.62661 5.62402 0.286611 4.80236 0.768277 4.32069L4.43744 0.651524C5.02536 0.0636072 5.98161 0.0636072 6.56953 0.651524L7.96494 2.04694L10.2387 4.32069C10.7133 4.80236 10.3733 5.62402 9.69328 5.62402Z" fill="#075099" />
                </svg>
              </button>
              <ul className={`space-y-3 md:block ${isCompanyOpen ? 'block' : 'hidden'}`}>
                <li><Link href="#">About</Link></li>
                <li><Link href="#">Works</Link></li>
                <li><Link href="#">Contact</Link></li>
                <li><Link href="#">Blogs</Link></li>
                <li><Link href="#">Our Team</Link></li>
              </ul>
            </div>

            {/* Services Links */}
            <div className="md:col-span-2">
              <button
                className="flex items-center w-full text-left md:pointer-events-none gap-3"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                <h3 className="text-primary font-medium mb-4 md:mb-4">Services</h3>
                <div className='bg-gradient-to-r from-[rgba(7,80,153,0.04)] via-[rgba(7,80,153,0.2)] to-[rgba(7,80,153,0)] h-[1px] w-full mb-3 hidden md:block'></div>
                <svg className={`w-[9.92px md:hidden transition-transform duration-200 mb-3 ${isServicesOpen ? '' : 'rotate-180'}`} xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6" fill="none">
                  <path d="M9.69328 5.62402H5.28036H1.30661C0.62661 5.62402 0.286611 4.80236 0.768277 4.32069L4.43744 0.651524C5.02536 0.0636072 5.98161 0.0636072 6.56953 0.651524L7.96494 2.04694L10.2387 4.32069C10.7133 4.80236 10.3733 5.62402 9.69328 5.62402Z" fill="#075099" />
                </svg>
              </button>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-y-2 md:grid ${isServicesOpen ? 'block' : 'hidden'}`}>
                {[
                  'Shopify Design',
                  'Ecommerce Audit',
                  'Shopify Development',
                  'Conversion Rate Optimization',
                  'Shopify Apps',
                  'Integration Services',
                  'Shopify Migration',
                  'Creative-and-Branding',
                  'Shopify Marketing',
                  'Headless Commerce',
                ].map((service, i) => (
                  <Link key={i} href="#">
                    {service}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="my-3 md:my-8 border border-primary/10" />

          {/* Bottom Row */}
          <div className="flex items-center justify-between text-xs md:text-sm text-text-dark pb-6 md:pb-0 tracking-[0.04rem]">
            <p>Copyright © 2025</p>
            <div className="flex gap-2 md:gap-4">
              <Link href="#" className="hover:underline">Privacy Policy</Link>
              <span className="text-text-dark hidden md:block">|</span>
              <Link href="#" className="hover:underline">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
