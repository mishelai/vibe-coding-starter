'use client';

import { useContent } from '@/lib/hooks/useContent';

export const MentorFooter = () => {
  const { siteInfo, legalLinks, isRTL } = useContent();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full bg-neutral-50 dark:bg-secondary-900 border-t border-neutral-200 dark:border-secondary-700 overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-4 sm:py-5">
        {/* Bottom Menu Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          {/* Legal Navigation - Horizontal Menu */}
          <nav className="flex items-center gap-1 sm:gap-2">
            {legalLinks.map((link, index) => (
              <div key={link.label} className="flex items-center">
                <a
                  href={link.href}
                  className="text-xs sm:text-sm text-neutral-600 dark:text-secondary-300 hover:text-secondary-900 dark:hover:text-neutral-50 transition-colors duration-200 px-2 sm:px-3 py-1.5 rounded-md hover:bg-neutral-100 dark:hover:bg-secondary-800"
                >
                  {link.label}
                </a>
                {index < legalLinks.length - 1 && (
                  <span className="text-neutral-300 dark:text-secondary-600 text-xs">
                    •
                  </span>
                )}
              </div>
            ))}
          </nav>

          {/* Copyright */}
          <div className="text-xs sm:text-sm text-neutral-500 dark:text-secondary-400">
            &copy; {currentYear} {siteInfo.copyright}
          </div>
        </div>
      </div>
    </footer>
  );
};
