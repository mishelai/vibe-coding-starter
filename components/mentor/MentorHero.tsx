'use client';

import Image from 'next/image';
import { heroContent } from '@/data/config/landingPageData';
import { MentorButton } from './MentorButton';
import { LogoMarquee } from './LogoMarquee';

export const MentorHero = () => {
  return (
    <section className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20 overflow-hidden max-w-7xl mx-auto">
      {/* Eyebrow/Tagline with shimmer */}
      <span className="text-[10px] sm:text-xs uppercase tracking-widest mb-3 sm:mb-4">
        <span
          className="inline-block bg-clip-text text-transparent bg-[length:200%_100%] animate-shimmer dark:hidden"
          style={{
            backgroundImage:
              'linear-gradient(110deg, #9CA3AF 35%, #D1D5DB 45%, #E5E7EB 50%, #D1D5DB 55%, #9CA3AF 65%)',
          }}
        >
          {heroContent.eyebrow}
        </span>
        <span
          className="hidden dark:inline-block bg-clip-text text-transparent bg-[length:200%_100%] animate-shimmer"
          style={{
            backgroundImage:
              'linear-gradient(110deg, #9CA3AF 35%, #D1D5DB 45%, #F3F4F6 50%, #D1D5DB 55%, #9CA3AF 65%)',
          }}
        >
          {heroContent.eyebrow}
        </span>
      </span>

      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-secondary-800 dark:text-neutral-50 text-center leading-tight tracking-tight w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl mb-3 sm:mb-4">
        {heroContent.heading}
      </h1>

      {/* Subheading */}
      <p className="text-sm sm:text-base lg:text-lg text-neutral-600 dark:text-secondary-200 text-center w-full max-w-xs sm:max-w-md lg:max-w-2xl mb-6 sm:mb-8 leading-relaxed">
        {heroContent.subheading}
      </p>

      {/* CTA Button */}
      <MentorButton href="#contact">{heroContent.primaryAction}</MentorButton>

      {/* Hero Image - Landscape 5:3 */}
      <div className="relative w-full max-w-[380px] sm:max-w-[600px] md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mt-6 sm:mt-8 lg:mt-12">
        <div className="relative aspect-[5/3] rounded-2xl overflow-hidden grayscale shadow-elevated">
          <Image
            src="/static/images/people/1.webp"
            alt="Motti Pinchas - Modern Mentor for Founders"
            fill
            sizes="(max-width: 640px) 380px, (max-width: 768px) 600px, (max-width: 1024px) 768px, (max-width: 1280px) 1024px, 1152px"
            className="object-cover"
            priority
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary-100/40 dark:from-secondary-900/60 to-transparent" />
        </div>
      </div>

      {/* Logo Marquee */}
      <LogoMarquee />
    </section>
  );
};
