// app/services/page.tsx
import React from 'react';
import Image from 'next/image';
import { FaHardHat, FaWarehouse, FaHome, FaBuilding, FaIndustry } from 'react-icons/fa';
import ServiceCard from '@/components/ServiceCard';

const ServicesPage = () => {
  const services = [
    {
      title: "Pre-Engineered Buildings",
      description: "Cost-effective, durable steel structures designed for quick assembly and long-term performance. Ideal for warehouses, factories, and industrial facilities.",
      icon: <FaWarehouse className="text-4xl text-blue-800" />,
      features: [
        "Custom-designed to your specifications",
        "Faster construction timelines",
        "Energy-efficient options available",
        "Low maintenance requirements"
      ],
      image: "/images/services/peb.jpg"
    },
    {
      title: "Industrial Sheds & Warehouses",
      description: "High-quality steel sheds designed for industrial use with optimal space utilization and structural integrity.",
      icon: <FaIndustry className="text-4xl text-blue-800" />,
      features: [
        "Clear span designs up to 100m",
        "Heavy load capacity",
        "Natural ventilation systems",
        "Customizable bay sizes"
      ],
      image: "/images/services/industrial-shed.jpg"
    },
    {
      title: "Commercial Structures",
      description: "Modern steel frameworks for offices, retail spaces, and commercial complexes with aesthetic appeal.",
      icon: <FaBuilding className="text-4xl text-blue-800" />,
      features: [
        "Architectural flexibility",
        "Fast-track construction",
        "Seismic-resistant designs",
        "Green building options"
      ],
      image: "/images/services/commercial.jpg"
    },
    {
      title: "Residential Steel Framing",
      description: "Innovative steel solutions for homes and apartment buildings offering strength and design versatility.",
      icon: <FaHome className="text-4xl text-blue-800" />,
      features: [
        "Termite and pest resistant",
        "Fire-resistant construction",
        "Design flexibility",
        "Sustainable materials"
      ],
      image: "/images/services/residential.jpg"
    },
    {
      title: "Structural Steel Fabrication",
      description: "Precision fabrication of steel components for all types of construction projects.",
      icon: <FaHardHat className="text-4xl text-blue-800" />,
      features: [
        "CNC precision cutting",
        "Quality certified materials",
        "Custom welding solutions",
        "On-site installation"
      ],
      image: "/images/services/fabrication.jpg"
    }
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-64 bg-gray-800 flex items-center">
        <div className="absolute inset-0 bg-blue-900/50 z-10" />
        <Image
          src="/images/services/services-hero.jpg"
          alt="Our Services"
          fill
          className="object-cover"
          priority
        />
        <div className="container mx-auto px-6 relative z-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Our Services
          </h1>
          <p className="text-xl text-white mt-2">
            Comprehensive steel structure solutions
          </p>
        </div>
      </section>

      {/* Services Intro */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">
            Building the Future with Steel
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Pranvi Building Solutions offers end-to-end steel construction services combining engineering expertise with quality craftsmanship. Our solutions are designed for durability, efficiency, and sustainability.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 justify-center">
            {[
              { value: "250+", label: "Projects" },
              { value: "18+", label: "Years" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "ISO", label: "Certified" },
              { value: "PAN India", label: "Presence" }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-2xl font-bold text-blue-800">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-12">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                service={service}
                reverse={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-900 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Get a Quote
            </a>
            <a
              href="tel:+919876543210"
              className="border border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-blue-900 transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;