'use client';

import Link from 'next/link';
import { siteInfo, heroContent } from '@/data/config/landingPageData';
import { MentorButton } from './MentorButton';
import { TopBar } from './TopBar';

export const MentorHeader = () => {
  return (
    <>
      <TopBar />
      <header className="w-full flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 max-w-7xl mx-auto">
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
      </header>
    </>
  );
};
