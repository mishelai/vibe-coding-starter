'use client';

import { LandingHeader, LandingHeaderMenuItem } from '@/components/landing';
import ThemeSwitch from '@/components/shared/ThemeSwitch';
import LanguageToggle from '@/components/shared/LanguageToggle';
import Image from 'next/image';
import { useLanguage } from '@/lib/contexts/LanguageContext';
import { translations } from '@/data/translations';

export const Header = ({ className }: { className?: string }) => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <LandingHeader
      className={className}
      fixed
      withBackground
      variant="primary"
      logoComponent={
        <div className="flex items-center text-primary-500 dark:text-primary-500 gap-3">
          <Image
            src="/static/images/logo.png"
            alt="Mevolut logo"
            width={200}
            height={200}
            className="h-8 w-8 rounded-full"
          />
          <span className="font-bold text-lg">Mevolut</span>
        </div>
      }
    >
      <LandingHeaderMenuItem href="/features">
        {t.header.features}
      </LandingHeaderMenuItem>
      <LandingHeaderMenuItem href="/pricing">
        {t.header.pricing}
      </LandingHeaderMenuItem>
      <LandingHeaderMenuItem href="/security">
        {t.header.security}
      </LandingHeaderMenuItem>
      <LandingHeaderMenuItem href="/help">
        {t.header.help}
      </LandingHeaderMenuItem>
      <LandingHeaderMenuItem type="button" href="/dashboard">
        {t.header.dashboard}
      </LandingHeaderMenuItem>

      <LanguageToggle />
      <ThemeSwitch />
    </LandingHeader>
  );
};

export default Header;
