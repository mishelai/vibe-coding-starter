'use client';

import { Facebook, Linkedin, Instagram, Moon, Sun } from 'lucide-react';
import { socialLinks } from '@/data/config/landingPageData';
import { useThemeSwitch } from '@/components/shared/useThemeSwitch';
import { useLanguage } from '@/lib/contexts/LanguageContext';
import { useEffect, useState } from 'react';

const SocialIcon = ({ platform }: { platform: string }) => {
  switch (platform) {
    case 'facebook':
      return <Facebook className="w-4 h-4" strokeWidth={1.5} />;
    case 'linkedin':
      return <Linkedin className="w-4 h-4" strokeWidth={1.5} />;
    case 'instagram':
      return <Instagram className="w-4 h-4" strokeWidth={1.5} />;
    default:
      return null;
  }
};

export const TopBar = () => {
  const [mounted, setMounted] = useState(false);
  const { currentTheme, updateTheme } = useThemeSwitch();
  const { language, setLanguage } = useLanguage();

  useEffect(() => setMounted(true), []);

  return (
    <div dir="ltr" className="w-full bg-secondary-800 dark:bg-secondary-900 text-primary-50 py-2.5 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Social Links */}
        <div className="flex items-center gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.platform}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label={`Visit ${social.platform}`}
            >
              <SocialIcon platform={social.platform} />
            </a>
          ))}
        </div>

        {/* Right: Theme Toggle + Language Switcher */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle - Show Sun by default, actual theme icon after mount */}
          <button
            onClick={mounted ? updateTheme : undefined}
            className="hover:opacity-80 transition-opacity"
            aria-label="Toggle theme"
          >
            {mounted && currentTheme === 'dark' ? (
              <Moon className="w-4 h-4" strokeWidth={1.5} />
            ) : (
              <Sun className="w-4 h-4" strokeWidth={1.5} />
            )}
          </button>

          {/* Language Flag Toggle - Show US flag by default */}
          <div className="relative group">
            {/* Current Language Flag */}
            <button
              className="text-base hover:scale-110 transition-transform px-1 py-0.5"
              aria-label="Change language"
            >
              {mounted && language === 'he' ? '🇮🇱' : '🇺🇸'}
            </button>

            {/* Hover - Show Other Flag */}
            {mounted && (
              <div className="absolute right-0 top-full mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <button
                  onClick={() => setLanguage(language === 'he' ? 'en' : 'he')}
                  className="text-base bg-secondary-700 dark:bg-secondary-800 hover:bg-secondary-600 dark:hover:bg-secondary-700 px-2 py-1 rounded shadow-lg transition-all hover:scale-110"
                  aria-label={language === 'he' ? 'Switch to English' : 'Switch to Hebrew'}
                >
                  {language === 'he' ? '🇺🇸' : '🇮🇱'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
