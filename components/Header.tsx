import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png" 
              alt="Pranvi Building Solutions"
              width={160}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-blue-800 font-medium transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-blue-800 font-medium transition-colors"
            >
              About
            </Link>
            <Link 
              href="/services" 
              className="text-gray-700 hover:text-blue-800 font-medium transition-colors"
            >
              Services
            </Link>
            <Link 
              href="/projects" 
              className="text-gray-700 hover:text-blue-800 font-medium transition-colors"
            >
              Projects
            </Link>
            <Link 
              href="/contact" 
              className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-900 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (hidden by default) */}
      <div className="md:hidden bg-white border-t border-gray-200 hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link 
            href="/" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
          >
            Home
          </Link>
          {/* Repeat for other links */}
        </div>
      </div>
    </header>
  );
};

export default Header;