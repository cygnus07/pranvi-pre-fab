import React from 'react';
import Link from 'next/link';
import { FaBuilding } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between h-20">
          {/* Centered Logo */}
          <div className="flex items-center justify-center md:justify-start w-full md:w-auto py-4 md:py-0">
            <Link href="/" className="group flex items-center gap-2">
              <div className="bg-blue-800 text-white p-2 rounded-lg group-hover:bg-blue-700 transition-all duration-300">
                <FaBuilding className="text-xl" />
              </div>
              <span className="text-2xl font-bold text-gray-900 tracking-tight">
                <span className="text-blue-800">Pranvi</span>
                <span className="font-light text-gray-600">Build</span>
              </span>
            </Link>
          </div>

          {/* Modern Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {[
              { name: 'Home', href: '/' },
              { name: 'About', href: '/about' },
              { name: 'Services', href: '/services' },
              { name: 'Projects', href: '/projects' },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-gray-600 hover:text-blue-800 font-medium rounded-full hover:bg-gray-50 transition-all duration-200"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 px-6 py-2 bg-gradient-to-r from-blue-700 to-blue-600 text-white font-medium rounded-full hover:from-blue-800 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Modern Mobile Menu Button */}
          <button className="md:hidden absolute right-4 top-6 p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <div className="space-y-1.5">
              <span className="block w-6 h-0.5 bg-gray-700"></span>
              <span className="block w-6 h-0.5 bg-gray-700"></span>
              <span className="block w-4 h-0.5 bg-gray-700 ml-auto"></span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;