'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';
import arrowRight from '../../../assets/images/arrow-right.png';
import { X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="container mx-auto relative">
        <div className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-primary/20 after:to-transparent">
          <div className="px-4 md:px-6 py-2 md:py-[9.5px]">
            <div className="flex justify-center md:justify-between items-center md:gap-5">
              {/* Logo */}
              <div className="flex-1 md:flex-none">
                <Link href="/">
                  <Image src="/images/logo.png" alt="Logo" width={150} height={40} />
                </Link>
              </div>

              {/* Desktop Nav */}
              <nav className="hidden md:flex md:gap-16 sm:gap-10 font-medium uppercase">
                <Link href="/about/"><Button className="uppercase h-max p-0" variant="link">About</Button></Link>
                <Link href="#"><Button className="uppercase h-max p-0" variant="link">Services</Button></Link>
                <Link href="#"><Button className="uppercase h-max p-0" variant="link">Works</Button></Link>
                <Link href="#"><Button className="uppercase h-max p-0" variant="link">Blogs</Button></Link>
              </nav>

              {/* CTA Button */}
              <div className='mr-3 md:mr-0'>
                <Link href="#">
                  <Button size="sm" className="flex items-center gap-2 md:w-45 text-sm md:text-base">Schedule a Call
                    <Image src={arrowRight} className='size-6 hidden md:block' alt="Arrow right icon" />
                  </Button>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-text-dark focus:outline-none transition-colors duration-300"
                  aria-label="Toggle mobile menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M4 6h16M8 12h12M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`
        fixed inset-0 bg-white z-40 md:hidden transition-transform duration-500 ease-in-out
        ${isMobileMenuOpen ? 'transform translate-y-0' : 'transform -translate-y-full'}
      `}>
        {/* Content positioned below header */}
        <div className="px-6 h-full flex flex-col bg-white">
          {/* Navigation */}
          <nav className="flex flex-col space-y-1 flex-1">
            <div className="flex justify-between py-[21px] relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-primary/20 after:to-transparent">
              <Link href="/">
                <Image src="/images/logo.png" alt="Logo" width={150} height={40} />
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-text-dark focus:outline-none transition-colors duration-300"
                aria-label="Toggle mobile menu"
              ><X size={24} /></button>
            </div>
            <div className={`transition-all duration-700 delay-100 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
              }`}>
              <Link
                href="/about/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block border-b border-border py-6"
              >
                <Button className="uppercase h-max p-0" variant="link">Home</Button>
              </Link>
            </div>
            <div className={`transition-all duration-700 delay-100 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
              }`}>
              <Link
                href="/about/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block border-b border-border py-6"
              >
                <Button className="uppercase h-max p-0" variant="link">About</Button>
              </Link>
            </div>

            <div className={`transition-all duration-700 delay-200 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
              }`}>
              <Link
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block border-b border-border py-6"
              >
                <Button className="uppercase h-max p-0" variant="link">Services</Button>
              </Link>
            </div>

            <div className={`transition-all duration-700 delay-300 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
              }`}>
              <Link
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block border-b border-border py-6"
              >
                <Button className="uppercase h-max p-0" variant="link">Works</Button>
              </Link>
            </div>

            <div className={`transition-all duration-700 delay-400 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
              }`}>
              <Link
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block border-b border-border py-6"
              >
                <Button className="uppercase h-max p-0" variant="link">Blogs</Button>
              </Link>
            </div>
          </nav>

          {/* CTA Button */}
          <div className={`pb-4 transition-all duration-700 delay-500 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
            <Link href="#" onClick={() => setIsMobileMenuOpen(false)}>
              <Button size="lg" className="flex items-center justify-center gap-2 w-full">
                Schedule a Call
                <Image src={arrowRight} className='size-6' alt="Arrow right icon" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header