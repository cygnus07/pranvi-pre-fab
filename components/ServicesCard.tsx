// components/ServiceCard.tsx
import React from 'react';
import Image from 'next/image';

const ServiceCard = ({ service, reverse }: { service: any, reverse: boolean }) => {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}>
      <div className="md:w-1/2 relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="md:w-1/2">
        <div className="flex items-center gap-4 mb-4">
          {service.icon}
          <h2 className="text-2xl font-bold text-gray-800">{service.title}</h2>
        </div>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <ul className="space-y-2 mb-6">
          {service.features.map((feature: string, index: number) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-blue-500">✓</span>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        <button className="text-blue-800 font-medium hover:text-blue-600 transition-colors">
          Learn more →
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;