<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaBuilding } from 'react-icons/fa';
=======
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFacebook, 
  FaLinkedin, 
  FaTwitter, 
  FaInstagram,
  FaHardHat,
  FaBuilding,
  FaWarehouse,
  FaHome
} from 'react-icons/fa';
import { IoConstruct } from 'react-icons/io5';
>>>>>>> claude

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
<<<<<<< HEAD
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-blue-800 text-white p-2 rounded-lg group-hover:bg-blue-700 transition-colors duration-300">
                <FaBuilding className="text-xl" />
              </div>
              <span className="text-2xl font-bold text-white">
                <span className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">Pranvi</span>
                <span className="font-light text-gray-300">Build</span>
=======
    <footer className="bg-gray-900 text-white pt-20 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info - Enhanced with construction theme */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-400 text-white p-2 rounded-lg group-hover:from-yellow-600 group-hover:to-yellow-500 transition-all duration-300 shadow-md">
                <IoConstruct className="text-2xl" />
              </div>
              <span className="text-2xl font-bold">
                <span className="text-white group-hover:text-yellow-400 transition-colors">PRANVI</span>
                <span className="text-yellow-400 group-hover:text-white transition-colors">CONSTRUCT</span>
>>>>>>> claude
              </span>
            </Link>
            <p className="text-gray-400 text-lg leading-relaxed">
              Engineering excellence in steel construction since 2004. We build structures that stand the test of time.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <FaFacebook className="text-xl" />, label: "Facebook" },
                { icon: <FaLinkedin className="text-xl" />, label: "LinkedIn" },
                { icon: <FaTwitter className="text-xl" />, label: "Twitter" },
                { icon: <FaInstagram className="text-xl" />, label: "Instagram" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - Improved visual hierarchy */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white border-b border-yellow-500 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'About Us', href: '/about', icon: <FaBuilding className="mr-2" /> },
                { name: 'Services', href: '/services', icon: <FaHardHat className="mr-2" /> },
                { name: 'Projects', href: '/projects', icon: <FaWarehouse className="mr-2" /> },
                { name: 'Contact', href: '/contact', icon: <FaPhone className="mr-2" /> },
                { name: 'Blog', href: '/blog', icon: <FaHome className="mr-2" /> }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="flex items-center text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-lg"
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - More construction-specific */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white border-b border-yellow-500 pb-2 inline-block">
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Pre-Engineered Buildings', href: '/services#peb' },
                { name: 'Industrial Sheds', href: '/services#industrial' },
                { name: 'Warehouse Solutions', href: '/services#warehouse' },
                { name: 'Commercial Structures', href: '/services#commercial' },
                { name: 'Steel Fabrication', href: '/services#fabrication' }
              ].map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href} 
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-lg flex items-start"
                  >
                    <span className="text-yellow-500 mr-2">▸</span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - More prominent */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white border-b border-yellow-500 pb-2 inline-block">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="bg-blue-900/30 p-2 rounded-full">
                  <FaPhone className="text-yellow-400 text-lg" />
                </div>
                <div>
                  <p className="text-white font-medium">+91 98765 43210</p>
                  <p className="text-gray-400">+91 11 2345 6789</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-blue-900/30 p-2 rounded-full">
                  <FaEnvelope className="text-yellow-400 text-lg" />
                </div>
                <div>
                  <p className="text-white font-medium">info@pranvibuild.com</p>
                  <p className="text-gray-400">sales@pranvibuild.com</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-blue-900/30 p-2 rounded-full">
                  <FaMapMarkerAlt className="text-yellow-400 text-lg" />
                </div>
                <address className="not-italic">
                  <p className="text-white font-medium">Corporate Office</p>
                  <p className="text-gray-400">
                    123 Industrial Area, Sector 62<br />
                    Noida, Uttar Pradesh 201309
                  </p>
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider with construction aesthetic */}
        <div className="relative my-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-800"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gray-900 px-4 text-yellow-400 text-2xl">
              <IoConstruct />
            </span>
          </div>
        </div>

        {/* Copyright and Legal - Enhanced layout */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-base">
            &copy; {currentYear} <span className="text-yellow-400">Pranvi Construction</span>. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {[
              { name: 'Privacy Policy', href: '/privacy-policy' },
              { name: 'Terms of Service', href: '/terms' },
              { name: 'Sitemap', href: '/sitemap' },
              { name: 'Careers', href: '/careers' }
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-500 hover:text-yellow-400 transition-colors duration-300 text-sm md:text-base"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Construction Badge */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700">
            <FaHardHat className="text-yellow-400" />
            <span className="text-sm text-gray-400">ISO 9001:2015 Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
