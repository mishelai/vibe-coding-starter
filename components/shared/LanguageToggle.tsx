'use client';

import { useLanguage, Language } from '@/lib/contexts/LanguageContext';
import { Button } from '@/components/shared/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/shared/ui/dropdown-menu';
import { Languages } from 'lucide-react';
import { siteConfig } from '@/data/config/site.settings';

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();
  const languages = siteConfig.languages;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9"
          aria-label="Toggle language"
        >
          <Languages className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(languages).map(([code, lang]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => setLanguage(code as Language)}
            className={`cursor-pointer ${language === code ? 'bg-primary-100/20 dark:bg-primary-900/20' : ''}`}
          >
            <span className="flex items-center gap-2">
              {lang.name}
              {language === code && (
                <span className="text-primary-500">✓</span>
              )}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageToggle;
