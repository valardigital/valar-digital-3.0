"use client"

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import logo from '@/assets/images/header/logo.png';

const Footer = () => {
  const [isCompanyOpen, setIsCompanyOpen] = useState(true);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();
  const services = [
    { name: 'Shopify Design', href: '/services/shopify-design' },
    { name: 'Ecommerce Audit', href: '/services/shopify-audit' },
    { name: 'Shopify Development', href: '/services/shopify-development' },
    { name: 'Conversion Rate Optimization', href: '/services/conversion-rate-optimization' },
    { name: 'Shopify Apps', href: '/services/shopify-app-development' },
    { name: 'Integration Services', href: '/services/integration' },
    { name: 'Shopify Migration', href: '/services/shopify-migration' },
    { name: 'Creative-and-Branding', href: '/services/branding-creative' },
    { name: 'Shopify Marketing', href: '/services/shopify-marketing' },
    { name: 'Headless Commerce', href: '/services/headless-commerce-development' },
    { name: 'Speed Optimization', href: '/services/website-speed-optimization' },
  ];

  return (
    <footer className="md:px-4 md:pt-4 md:pb-8">
      <div className='bg-border/80 rounded-t-[16px] md:rounded-3xl px-4 md:px-0 md:py-8'>
        <div className='container mx-auto'>
          <div className="grid md:grid-cols-[32%_15%_20%_32%] md:gap-10 pt-6">
            {/* Brand and CTA */}
            <div>

              <Link href="/">
                <Image src={logo} alt="Logo" width={150} height={40} />
              </Link>
              <p className="text-text-dark text-sm md:text-base mb-4 md:mb-6 mt-2 md:mt-4 tracking-[0.035rem] md:tracking-[0.04rem]">
                From custom builds to conversion strategy, we<br className='hidden md:block' /> help ambitious ecommerce brands turn<br className='hidden md:block' />
                complexity into growth, and scale with<br className='hidden md:block' /> confidence.
              </p>
              <Link
                href="/#calendar"
              >
                <Button className="w-max flex items-center gap-2 py-2 md:!h-[48px]">
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
                <h3 className="text-primary font-medium mb-4 tracking-[0.04rem]">Company</h3>
                <svg className={`w-[9.92px md:hidden transition-transform duration-200 mb-3 ${isCompanyOpen ? '' : 'rotate-180'}`} xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6" fill="none">
                  <path d="M9.69328 5.62402H5.28036H1.30661C0.62661 5.62402 0.286611 4.80236 0.768277 4.32069L4.43744 0.651524C5.02536 0.0636072 5.98161 0.0636072 6.56953 0.651524L7.96494 2.04694L10.2387 4.32069C10.7133 4.80236 10.3733 5.62402 9.69328 5.62402Z" fill="#075099" />
                </svg>
              </button>
              <ul className={`space-y-2 md:block overflow-hidden transition-all duration-500 md:max-h-max tracking-[0.04rem] ${isCompanyOpen ? 'max-h-60 mb-4' : 'max-h-0'}`}>
                <li className='hover:text-primary'><Link href="/case-studies" className={`transition-colors ${pathname === '/case-studies' ? 'text-primary' : 'hover:text-primary'}`}>Case Studies</Link></li>
                <li className='hover:text-primary'><Link href="/contact" className={`transition-colors ${pathname === '/contact' ? 'text-primary' : 'hover:text-primary'}`}>Contact</Link></li>
                <li className='hover:text-primary'><Link href="/blog" className={`transition-colors ${pathname === '/blog' ? 'text-primary' : 'hover:text-primary'}`}>Blogs</Link></li>
              </ul>
            </div>

            {/* Services Links */}
            <div className="md:col-span-2">
              <button
                className="flex items-center w-full text-left md:pointer-events-none gap-3"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                <h3 className="text-primary font-medium mb-4 md:mb-4 tracking-[0.04rem]">Services</h3>
                <div className='bg-gradient-to-r from-[rgba(7,80,153,0.04)] via-[rgba(7,80,153,0.2)] to-[rgba(7,80,153,0)] h-[1px] w-full mb-3 hidden md:block'></div>
                <svg className={`w-[9.92px md:hidden transition-transform duration-200 mb-3 ${isServicesOpen ? '' : 'rotate-180'}`} xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6" fill="none">
                  <path d="M9.69328 5.62402H5.28036H1.30661C0.62661 5.62402 0.286611 4.80236 0.768277 4.32069L4.43744 0.651524C5.02536 0.0636072 5.98161 0.0636072 6.56953 0.651524L7.96494 2.04694L10.2387 4.32069C10.7133 4.80236 10.3733 5.62402 9.69328 5.62402Z" fill="#075099" />
                </svg>
              </button>
              <div className={`grid grid-cols-1 lg:grid-cols-[45%_55%] gap-y-2 md:grid overflow-hidden transition-all duration-500 md:max-h-max tracking-[0.04rem] whitespace-nowrap ${isServicesOpen ? 'max-h-80' : 'max-h-0'}`}>
                {services.map((service, i) => (
                  <Link
                    key={i}
                    href={service.href}
                    className={`transition-colors ${pathname === service.href ? 'text-primary' : 'hover:text-primary'
                      }`}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="my-3 md:my-8 border border-primary/10" />

          {/* Bottom Row */}
          <div className="flex md:flex-row flex-col-reverse items-center justify-between text-xs md:text-sm text-text-dark pb-6 md:pb-0 tracking-[0.04rem]">
            <p className='md:mt-0 mt-2'>Copyright © 2025 Valar Digital. All rights reserved</p>
            <div className="flex gap-2 md:gap-4">
              <Link href="/privacyPolicy" className={`transition-colors ${pathname === '/privacyPolicy' ? 'underline' : 'hover:underline'
                }`}>Privacy Policy</Link>
              <span className="text-text-dark hidden md:block">|</span>
              <Link href="/cookiePolicy" className={`transition-colors ${pathname === '/cookiePolicy' ? 'underline' : 'hover:underline'
                }`}>Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
