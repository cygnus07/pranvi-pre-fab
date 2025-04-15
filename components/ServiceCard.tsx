'use client';

import React from 'react';
import Image from 'next/image';
import { FaArrowRight, FaCheck } from 'react-icons/fa';
import Link from 'next/link';
import { IoConstruct } from 'react-icons/io5';

const ServiceCard = ({ service, reverse = false }: { service: any; reverse?: boolean }) => {
  return (
    <div 
      className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-stretch animate-on-scroll opacity-0 transition-all duration-700`}
      style={{ transitionDelay: `${(reverse ? 1 : 2) * 200}ms` }}
    >
      {/* Image Section */}
      <div className="lg:w-1/2 relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-2xl group">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority={!reverse} // Only prioritize first image for performance
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="inline-flex items-center gap-2 mb-2">
            <IoConstruct className="text-yellow-400" />
            <span className="text-yellow-400 text-sm font-medium uppercase tracking-wider">
              {service.category || 'Construction'}
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white">{service.title}</h3>
        </div>
      </div>

      {/* Content Section */}
      <div className="lg:w-1/2 flex flex-col justify-center py-4 lg:py-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-blue-100 rounded-lg w-14 h-14 flex items-center justify-center text-blue-700">
            {service.icon}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{service.title}</h2>
        </div>
        
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">{service.description}</p>
        
        <ul className="space-y-3 mb-8">
          {service.features.map((feature: string, index: number) => (
            <li key={index} className="flex items-start gap-3">
              <FaCheck className="text-yellow-500 mt-1 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        
        <div className="mt-auto">
          <Link
            href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
            className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-600 font-medium group/link"
          >
            <span>Detailed Service Information</span>
            <FaArrowRight className="group-hover/link:translate-x-1 transition-transform" />
          </Link>

          {/* Accent line with construction theme */}
          <div className="h-1 w-full bg-gradient-to-r from-blue-700 via-blue-500 to-yellow-500 mt-8 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;