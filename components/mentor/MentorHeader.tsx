'use client';

import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import { siteInfo, heroContent } from '@/data/config/landingPageData';
import { MentorButton } from './MentorButton';
import { TopBar } from './TopBar';

export const MentorHeader = () => {
  const [isSticky, setIsSticky] = useState(false);
  const topBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Get the height of the TopBar to know when to make header sticky
      const topBarHeight = topBarRef.current?.offsetHeight || 44;
      setIsSticky(window.scrollY > topBarHeight);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial scroll position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* TopBar - scrolls naturally with page */}
      <div ref={topBarRef}>
        <TopBar />
      </div>

      {/* Main Header - becomes sticky after scrolling past TopBar */}
      <header
        className={`w-full transition-all duration-300 ease-out z-40 ${
          isSticky
            ? 'fixed top-0 xl:top-6 left-0 xl:left-6 right-0 xl:right-6 bg-primary-100/70 dark:bg-secondary-900/70 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.3)] border-b border-white/20 dark:border-white/5'
            : 'relative bg-transparent'
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

      {/* Spacer that appears when header is sticky to prevent content jump */}
      {isSticky && <div className="h-[68px]" />}
    </>
  );
};
