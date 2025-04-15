'use client';

import React from 'react';
import Image from 'next/image';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaHardHat } from 'react-icons/fa';
import { IoConstruct } from 'react-icons/io5';
import ContactForm from '@/components/ContactForm';

const ContactPage = () => {
  return (
    <main className="bg-white">
      {/* Hero Section - Enhanced */}
      <section className="relative h-80 md:h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-900/50 to-transparent z-10" />
        <Image
          src="/images/contact-hero.jpg"
          alt="Construction Site Contact"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4 border-l-4 border-yellow-500 pl-3 py-1">
              <IoConstruct className="text-yellow-400" />
              <span className="text-yellow-400 font-bold tracking-wider uppercase text-sm">
                Contact Our Team
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
              Let's Build Something Together
            </h1>
            <p className="text-xl text-gray-200">
              Get in touch with our construction experts today
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid - Improved Layout */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form - Modern Styling */}
            <div className="bg-gray-50 p-8 md:p-10 rounded-xl shadow-sm">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-900 flex items-center gap-3">
                <FaHardHat className="text-yellow-500" />
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info - Enhanced */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-900">Our Contact Details</h2>
              <div className="space-y-6 md:space-y-8">
                {[
                  {
                    icon: <FaPhone className="text-blue-700" size={20} />,
                    title: "Phone",
                    content: [
                      "+91 98765 43210 (Mobile)",
                      "+91 11 2345 6789 (Office)"
                    ]
                  },
                  {
                    icon: <FaEnvelope className="text-blue-700" size={20} />,
                    title: "Email",
                    content: [
                      "info@pranviconstruction.com",
                      "sales@pranviconstruction.com"
                    ]
                  },
                  {
                    icon: <FaMapMarkerAlt className="text-blue-700" size={20} />,
                    title: "Head Office",
                    content: [
                      "Pranvi Construction Pvt. Ltd.",
                      "123 Industrial Area, Sector 62",
                      "Noida, Uttar Pradesh 201309"
                    ]
                  },
                  {
                    icon: <FaClock className="text-blue-700" size={20} />,
                    title: "Working Hours",
                    content: [
                      "Monday - Friday: 9:00 AM - 6:00 PM",
                      "Saturday: 10:00 AM - 2:00 PM"
                    ]
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 md:gap-6 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg md:text-xl text-gray-800 mb-1">{item.title}</h3>
                      {item.content.map((line, i) => (
                        <p key={i} className="text-gray-600">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Improved */}
      <section className="pb-16 md:pb-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Our Location</h2>
            <p className="text-lg text-gray-600">
              Visit our headquarters or connect with our regional offices
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.566374032572!2d77.3658764150823!3d28.62673998242499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce55ab92a4a0f%3A0x9a4b426b5b7d7a1e!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="w-full h-80 md:h-[450px]"
              aria-label="Pranvi Construction Office Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our construction consultants are available 24/7 for urgent inquiries
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+919876543210"
              className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 font-bold rounded-lg transition-all duration-300 flex items-center gap-2"
            >
              <FaPhone /> Call Now
            </a>
            <a
              href="mailto:info@pranviconstruction.com"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 font-bold rounded-lg transition-all duration-300 flex items-center gap-2"
            >
              <FaEnvelope /> Email Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;