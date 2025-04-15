'use client';

import React from 'react';
import Image from 'next/image';
import { 
  FaHardHat, 
  FaWarehouse, 
  FaBuilding, 
  FaHome, 
  FaIndustry,
  FaTools,
  FaArrowRight,
  FaPhone,
  FaCalendarCheck
} from 'react-icons/fa';
import { IoConstruct, IoHammer } from 'react-icons/io5';

const ServicesPage = () => {
  const services = [
    {
      title: "Pre-Engineered Buildings",
      icon: <IoConstruct className="text-3xl" />,
      description: "Cost-effective, durable steel structures designed for quick assembly and long-term performance.",
      image: "/images/services/peb.jpg",
      features: [
        "Custom-designed for your needs",
        "Faster construction timeline",
        "Energy efficient designs",
        "30% cost savings vs conventional"
      ]
    },
    {
      title: "Industrial Warehouses",
      icon: <FaWarehouse className="text-3xl" />,
      description: "Spacious, column-free designs optimized for manufacturing and storage facilities.",
      image: "/images/services/industrial-shed.jpg",
      features: [
        "Clear span up to 100m",
        "Heavy load capacity",
        "Natural lighting solutions",
        "Expandable designs"
      ]
    },
    {
      title: "Commercial Complexes",
      icon: <FaBuilding className="text-3xl" />,
      description: "Modern steel-framed buildings for offices, retail spaces, and mixed-use developments.",
      image: "/images/services/commercial.jpg",
      features: [
        "Architectural flexibility",
        "Fire-resistant materials",
        "Noise reduction systems",
        "LEED certification options"
      ]
    },
    {
      title: "Residential Steel Framing",
      icon: <FaHome className="text-3xl" />,
      description: "Strong, termite-proof steel structures for homes and apartment buildings.",
      image: "/images/services/residential.jpg",
      features: [
        "Faster construction",
        "Higher strength-to-weight ratio",
        "Design flexibility",
        "Lower maintenance costs"
      ]
    },
    {
      title: "Heavy Industrial Structures",
      icon: <FaIndustry className="text-3xl" />,
      description: "Specialized facilities for power plants, refineries, and manufacturing plants.",
      image: "/images/services/peb.jpg",
      features: [
        "High corrosion resistance",
        "Custom engineering",
        "Heavy equipment support",
        "Seismic reinforcement"
      ]
    },
    {
      title: "Steel Fabrication",
      icon: <FaTools className="text-3xl" />,
      description: "Custom metal fabrication for structural components and architectural elements.",
      image: "/images/services/fabrication.jpg",
      features: [
        "CNC precision cutting",
        "In-house engineering",
        "Quality certified welding",
        "Just-in-time delivery"
      ]
    }
  ];

  const processSteps = [
    {
      title: "Consultation",
      icon: <FaPhone className="text-2xl" />,
      description: "We discuss your project requirements and site conditions"
    },
    {
      title: "Design",
      icon: <IoHammer className="text-2xl" />,
      description: "Our engineers create optimized structural designs"
    },
    {
      title: "Approval",
      icon: <FaCalendarCheck className="text-2xl" />,
      description: "Finalize plans and obtain necessary permits"
    },
    {
      title: "Construction",
      icon: <FaHardHat className="text-2xl" />,
      description: "On-site assembly by our certified team"
    }
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-900/50 to-transparent z-10" />
        <Image
          src="/images/services/services-hero.jpg"
          alt="Construction Services"
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
                Our Expertise
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
              Comprehensive Construction Solutions
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              From concept to completion, we deliver precision-engineered steel structures built to last
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Our Services</h2>
            <p className="text-lg text-gray-600">
              Specialized steel construction services tailored to your project requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4 bg-yellow-500 text-white p-3 rounded-lg">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-yellow-500 mr-2">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium group/link"
                  >
                    <span>Learn more</span>
                    <FaArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Our Construction Process</h2>
            <p className="text-lg text-gray-600">
              A streamlined approach that ensures quality at every stage
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 mb-4 bg-blue-100 rounded-full flex items-center justify-center mx-auto text-blue-600">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                <div className="mt-4 text-blue-600 font-bold">{index + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a free consultation with our engineering team today
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 font-bold rounded-lg transition-all duration-300 flex items-center gap-2"
            >
              Get Free Quote
            </a>
            <a
              href="tel:+1234567890"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 font-bold rounded-lg transition-all duration-300 flex items-center gap-2"
            >
              <FaPhone /> Call Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;