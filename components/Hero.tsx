'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaPhone, FaHardHat } from 'react-icons/fa';
import { IoConstruct } from 'react-icons/io5';

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
  showBadge?: boolean;
  showScrollIndicator?: boolean;
};

const Hero = ({
  title,
  subtitle,
  backgroundImage,
  ctaPrimary = { text: 'Get a Quote', link: '/contact' },
  ctaSecondary = { text: 'View Projects', link: '/projects' },
  overlayOpacity = 0.5,
  minHeight = '80vh',
  textAlign = 'left',
  showBadge = true,
  showScrollIndicator = true
}: HeroProps) => {
  const textAlignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  };

  return (
    <section 
      className={`relative flex ${textAlignClasses[textAlign]} justify-center`}
      style={{ minHeight }}
    >
      {/* Background Image with Performance Optimization */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Construction site"
          fill
          className="object-cover"
          priority
          quality={90}
          sizes="100vw"
        />
        <div 
          className="absolute inset-0 bg-gradient-to-b from-blue-900/90 via-blue-900/50 to-blue-900/30"
          style={{ opacity: overlayOpacity }}
        />
      </div>

      {/* Content Container */}
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ${textAlignClasses[textAlign]} py-20`}>
        <div className={`max-w-3xl mx-${textAlign === 'center' ? 'auto' : '0'}`}>
          {/* Construction Badge */}
          {showBadge && (
            <div className="inline-flex items-center gap-2 mb-6 border-l-4 border-yellow-500 pl-3 py-1">
              <IoConstruct className="text-yellow-400" />
              <span className="text-yellow-400 font-bold tracking-wider uppercase text-sm">
                PRANVI CONSTRUCTIONS
              </span>
            </div>
          )}

          {/* Title with Construction Theme */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-6 leading-tight">
            {title.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-lg md:text-xl lg:text-2xl text-gray-100 mb-8 max-w-2xl">
              {subtitle}
            </p>
          )}

          {/* CTAs with Construction Icons */}
          <div className={`flex ${textAlign === 'center' ? 'justify-center' : textAlign === 'right' ? 'justify-end' : 'justify-start'} flex-wrap gap-4`}>
            {ctaPrimary && (
              <Link
                href={ctaPrimary.link}
                className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 font-bold transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg group flex items-center gap-3 rounded-lg"
              >
                {ctaPrimary.text}
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
            {ctaSecondary && (
              <Link
                href={ctaSecondary.link}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 font-bold transition-all duration-300 hover:translate-y-[-2px] flex items-center gap-3 rounded-lg"
              >
                <FaHardHat />
                {ctaSecondary.text}
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-gray-200 mb-2 text-sm uppercase tracking-widest">Scroll</span>
          <div className="w-1 h-8 bg-gradient-to-b from-yellow-500 to-transparent rounded"></div>
        </div>
      )}
    </section>
  );
};

export default Hero;