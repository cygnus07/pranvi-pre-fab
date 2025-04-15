'use client';

import React from 'react';
import Image from 'next/image';
import { FaHardHat, FaUsers, FaAward, FaBuilding, FaShieldAlt, FaLightbulb, FaTools } from 'react-icons/fa';
import { IoConstruct } from 'react-icons/io5';

const AboutPage = () => {
  return (
    <main className="bg-white">
      {/* Hero Section - Enhanced with construction theme */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-900/50 to-blue-900/30 z-10" />
        <Image
          src="/images/about-hero.jpg"
          alt="Our Team at Work"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6 border-l-4 border-yellow-500 pl-3 py-1">
              <IoConstruct className="text-yellow-400" />
              <span className="text-yellow-400 font-bold tracking-wider uppercase text-sm">
                Our Legacy
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
              Building Excellence Since 2005
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Pioneering steel construction solutions across India with innovation and integrity
            </p>
          </div>
        </div>
      </section>

      {/* Company Story - Improved layout */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/founders.jpg"
                  alt="Founders"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white font-medium">Our founding team at the first workshop</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">Our Story</h2>
              <div className="space-y-4">
                <p className="text-lg text-gray-700">
                  Founded in 2005, Pranvi Building Solutions began as a small steel fabrication workshop with a vision to transform India's construction landscape through innovative engineering.
                </p>
                <p className="text-lg text-gray-700">
                  What started with just 5 employees has now grown into a 200+ strong team of engineers, architects, and skilled workers delivering projects across 8 states.
                </p>
                <p className="text-lg text-gray-700">
                  Our ISO 9001:2015 certified processes ensure every structure we build meets the highest standards of quality and safety.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - More visual impact */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">By The Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {[
              { icon: <FaHardHat className="mx-auto" size={36} />, number: '18+', label: 'Years Experience' },
              { icon: <FaBuilding className="mx-auto" size={36} />, number: '500+', label: 'Projects Completed' },
              { icon: <FaUsers className="mx-auto" size={36} />, number: '200+', label: 'Clients Served' },
              { icon: <FaAward className="mx-auto" size={36} />, number: '25+', label: 'Industry Awards' }
            ].map((item, index) => (
              <div key={index} className="p-6 bg-blue-800/30 rounded-xl backdrop-blur-sm">
                <div className="mb-4 text-yellow-400">{item.icon}</div>
                <p className="text-3xl md:text-4xl font-bold mb-2">{item.number}</p>
                <p className="text-sm md:text-base opacity-90">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section - Construction-themed */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Our Core Values</h2>
            <p className="text-lg text-gray-600">
              The principles that guide every project we undertake
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Quality Craftsmanship",
                description: "We never compromise on materials or construction standards, using only certified steel and components",
                icon: <FaTools className="text-3xl text-yellow-500" />
              },
              {
                title: "Innovative Solutions",
                description: "Our R&D team develops custom designs tailored to each client's unique needs and site conditions",
                icon: <FaLightbulb className="text-3xl text-yellow-500" />
              },
              {
                title: "Safety First",
                description: "Rigorous safety protocols on every job site with regular audits and worker training programs",
                icon: <FaShieldAlt className="text-3xl text-yellow-500" />
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 mb-6 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center text-gray-800">{value.title}</h3>
                <p className="text-gray-600 text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">Join Our Growing Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            We're always looking for talented engineers, architects, and construction professionals to join our team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/careers"
              className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 font-bold rounded-lg transition-all duration-300 flex items-center gap-2"
            >
              View Open Positions
            </a>
            <a
              href="/contact"
              className="border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white px-8 py-4 font-bold rounded-lg transition-all duration-300 flex items-center gap-2"
            >
              Contact HR
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutPage