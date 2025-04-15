import React from 'react';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaBuilding } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
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
              </span>
            </Link>
            <p className="text-gray-400">
              Leading provider of premium steel structure solutions for industrial, commercial and residential projects.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#peb" className="text-gray-400 hover:text-white transition-colors">
                  Pre-Engineered Buildings
                </Link>
              </li>
              <li>
                <Link href="/services#industrial" className="text-gray-400 hover:text-white transition-colors">
                  Industrial Sheds
                </Link>
              </li>
              <li>
                <Link href="/services#commercial" className="text-gray-400 hover:text-white transition-colors">
                  Commercial Structures
                </Link>
              </li>
              <li>
                <Link href="/services#residential" className="text-gray-400 hover:text-white transition-colors">
                  Residential Framing
                </Link>
              </li>
              <li>
                <Link href="/services#fabrication" className="text-gray-400 hover:text-white transition-colors">
                  Steel Fabrication
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FaPhone className="text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">+91 98765 43210</p>
                  <p className="text-gray-400">+91 11 2345 6789</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">info@pranvibuildings.com</p>
                  <p className="text-gray-400">sales@pranvibuildings.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-blue-400 mt-1 flex-shrink-0" />
                <address className="not-italic text-gray-400">
                  123 Industrial Area, Sector 62<br />
                  Noida, Uttar Pradesh 201309
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Pranvi Building Solutions Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-500 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-gray-500 hover:text-white text-sm transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
