'use client';

import Image from 'next/image';
import { heroContent } from '@/data/config/landingPageData';
import { MentorButton } from './MentorButton';
import { LogoMarquee } from './LogoMarquee';

export const MentorHero = () => {
  return (
    <section className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20 overflow-hidden max-w-7xl mx-auto">
      {/* Eyebrow */}
      <span className="text-[10px] sm:text-xs uppercase tracking-widest text-neutral-400 dark:text-secondary-300 mb-3 sm:mb-4">
        {heroContent.eyebrow}
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
