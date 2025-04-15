"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBuilding, FaWrench, FaWarehouse } from "react-icons/fa";

export default function Home() {
  const services = [
    {
      title: "Prefabricated Structures",
      description: "High-quality, cost-effective prefab solutions for all needs",
      icon: <FaBuilding className="text-4xl text-blue-800" />,
    },
    {
      title: "Steel Framing",
      description: "Durable and flexible steel framing systems",
      icon: <FaWrench className="text-4xl text-blue-800" />,
    },
    {
      title: "Industrial Sheds",
      description: "Custom-designed industrial sheds and warehouses",
      icon: <FaWarehouse className="text-4xl text-blue-800" />,
    },
  ];

  const features = [
    {
      title: "20+ Years Experience",
      description: "Trusted expertise in steel construction",
    },
    {
      title: "Quality Materials",
      description: "We use only certified steel and components",
    },
    {
      title: "Timely Delivery",
      description: "We respect deadlines and deliver on time",
    },
  ];

  // Rotating headline words
  const rotatingWords = [
    "Infrastructure",
    "Future",
    "Landmarks",
    "Skylines",
    "Legacy",
    "Foundations",
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center bg-gray-50 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Construction Site"
            fill
            className="object-cover opacity-20"
            priority
            quality={90}
          />
        </div>
        <div className="container mx-auto px-6 z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-blue-900">
            Building Tomorrow's{" "}
            <span className="relative inline-block h-[1em] w-full max-w-xs mx-auto">
              <span
                key={currentWordIndex}
                className="absolute inset-0 flex items-center justify-center animate-fade text-indigo-600 font-semibold"
              >

                {rotatingWords[currentWordIndex]}
              </span>
            </span>

          </h2>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-700">
            Premium steel structure solutions for industrial, commercial and residential projects
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Get a Quote
            </Link>
            <Link
              href="/services"
              className="bg-white text-blue-900 border border-blue-900 px-6 py-3 rounded-md hover:bg-blue-50 transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image
                src="/images/project-showcase.jpg"
                alt="Completed Project"
                width={800}
                height={500}
                quality={90}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Why Choose Pranvi?</h2>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="bg-blue-100 text-blue-800 p-2 rounded-full">✓</span>
                    <div>
                      <h3 className="font-semibold">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-blue-800 text-white">
        <div className="container mx-auto px-6 grid grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold mb-2">150+</p>
            <p>Projects Completed</p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">20+</p>
            <p>Years Experience</p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">50+</p>
            <p>Happy Clients</p>
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
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-900 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
