// components/Hero.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type HeroProps = {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  ctaPrimary?: {
    text: string;
    link: string;
  };
  ctaSecondary?: {
    text: string;
    link: string;
  };
  overlayOpacity?: number;
  minHeight?: string;
  textAlign?: 'left' | 'center' | 'right';
};

const Hero = ({
  title,
  subtitle,
  backgroundImage,
  ctaPrimary,
  ctaSecondary,
  overlayOpacity = 0.3,
  minHeight = '50vh',
  textAlign = 'left'
}: HeroProps) => {
  return (
    <section 
      className={`relative flex items-center justify-${textAlign}`}
      style={{ minHeight }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div 
          className="absolute inset-0 bg-blue-900"
          style={{ opacity: overlayOpacity }}
        />
      </div>

      {/* Content */}
      <div className={`container mx-auto px-6 relative z-10 text-${textAlign}`}>
        <div className={`max-w-2xl mx-${textAlign === 'center' ? 'auto' : '0'}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-white mb-8">
              {subtitle}
            </p>
          )}
          <div className={`flex ${textAlign === 'center' ? 'justify-center' : textAlign === 'right' ? 'justify-end' : 'justify-start'} gap-4`}>
            {ctaPrimary && (
              <Link
                href={ctaPrimary.link}
                className="bg-white text-blue-800 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors duration-300"
              >
                {ctaPrimary.text}
              </Link>
            )}
            {ctaSecondary && (
              <Link
                href={ctaSecondary.link}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-6 py-3 rounded-md font-medium transition-colors duration-300"
              >
                {ctaSecondary.text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;