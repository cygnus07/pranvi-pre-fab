'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBuilding, FaBars, FaTimes, FaPhone, FaHardHat } from 'react-icons/fa';
import { IoConstruct } from 'react-icons/io5';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md border-b border-gray-200' : 'bg-white/80'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo with construction aesthetic */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-gradient-to-br from-yellow-500 to-yellow-400 text-white p-2 rounded-lg group-hover:from-yellow-600 group-hover:to-yellow-500 transition-all duration-300 shadow-md">
              <IoConstruct className="text-2xl" />
            </div>
            <span className="text-2xl font-bold text-gray-900">
              <span className="text-blue-800 group-hover:text-blue-700 transition-colors duration-300">PRANVI</span>
              <span className="font-semibold text-gray-700">CONSTRUCT</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 font-medium rounded-lg transition-all duration-200 flex items-center gap-1 ${
                  pathname === item.href
                    ? 'text-yellow-600 bg-yellow-50/80 font-semibold'
                    : 'text-gray-700 hover:text-yellow-600 hover:bg-gray-50'
                }`}
              >
                {item.name === 'Services'}
                {item.name}
              </Link>
            ))}
            <div className="h-6 w-px bg-gray-300 mx-2"></div>
            <Link
              href="tel:+1234567890"
              className="flex items-center gap-2 px-4 py-2 text-blue-800 hover:text-blue-700 font-medium transition-colors"
            >
              <FaPhone className="text-blue-700" />
              <span className="hidden xl:inline">(123) 456-7890</span>
            </Link>
            <Link
              href="/contact"
              className="ml-2 px-6 py-2 bg-gradient-to-r from-blue-700 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-800 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Get Quote</span>
              <FaBuilding className="text-sm" />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-3 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <FaTimes className="text-gray-700 text-xl" />
            ) : (
              <FaBars className="text-gray-700 text-xl" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-screen opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-2 mt-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-3 font-medium rounded-lg transition-all duration-200 flex items-center gap-3 ${
                  pathname === item.href
                    ? 'text-yellow-600 bg-yellow-50/80 font-semibold'
                    : 'text-gray-700 hover:text-yellow-600 hover:bg-gray-50'
                }`}
              >
                {item.name === 'Services' && <FaHardHat />}
                {item.name}
              </Link>
            ))}
            <div className="pt-2 mt-2 border-t border-gray-200">
              <Link
                href="tel:+1234567890"
                className="flex items-center gap-3 px-4 py-3 text-blue-800 hover:text-blue-700 font-medium transition-colors"
              >
                <FaPhone />
                <span>(123) 456-7890</span>
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 mt-2 px-4 py-3 bg-gradient-to-r from-blue-700 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-800 hover:to-blue-700 transition-all duration-300 shadow-md"
              >
                <span>Get Free Quote</span>
                <FaBuilding />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;