'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { siteInfo, heroContent } from '@/data/config/landingPageData';
import { MentorButton } from './MentorButton';
import { TopBar } from './TopBar';

export const MentorHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial scroll position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="sticky top-0 xl:top-6 z-40 w-full">
      {/* TopBar - hidden when scrolled */}
      <div
        className={`transition-all duration-300 ease-out ${
          isScrolled
            ? 'max-h-0 opacity-0 overflow-hidden'
            : 'max-h-20 opacity-100'
        }`}
      >
        <TopBar />
      </div>

      {/* Main Header */}
      <header
        className={`w-full transition-all duration-300 ease-out ${
          isScrolled
            ? 'bg-primary-100/80 dark:bg-secondary-900/80 backdrop-blur-lg shadow-lg shadow-secondary-900/5 dark:shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="w-full flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 max-w-7xl mx-auto">
          {/* Logo */}
          <Link
            href="/"
            className="text-base sm:text-lg font-bold text-secondary-800 dark:text-neutral-50 tracking-tight"
          >
            {siteInfo.name}
          </Link>

          {/* Right side: CTA */}
          <MentorButton href="#contact" className="hidden sm:inline-flex">
            {heroContent.primaryAction}
          </MentorButton>
        </div>
      </header>
    </div>
  );
};
