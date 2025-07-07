'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
     <header className="w-full border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-blue-500 font-bold text-xl">
            <Link href="/">
              <Image src="/images/logo.png" alt="Logo" width={150} height={40} />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/about/"><span className="text-sm font-medium text-black hover:text-blue-600 transition">ABOUT</span></Link>
            <Link href="#"><span className="text-sm font-medium text-black hover:text-blue-600 transition">SERVICES</span></Link>
            <Link href="#"><span className="text-sm font-medium text-black hover:text-blue-600 transition">WORKS</span></Link>
            <Link href="#"><span className="text-sm font-medium text-black hover:text-blue-600 transition">BLOGS</span></Link>
          </nav>

          {/* CTA Button */}
          <div>
            <Link href="#">
              <div className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-3 rounded-md flex items-center space-x-2 text-sm font-medium">
                <span>Schedule a Call</span>
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-black focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col space-y-3">
            <Link href="#"><span className="text-sm font-medium text-black hover:text-blue-600">ABOUT</span></Link>
            <Link href="#"><span className="text-sm font-medium text-black hover:text-blue-600">SERVICES</span></Link>
            <Link href="#"><span className="text-sm font-medium text-black hover:text-blue-600">WORKS</span></Link>
            <Link href="#"><span className="text-sm font-medium text-black hover:text-blue-600">BLOGS</span></Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header