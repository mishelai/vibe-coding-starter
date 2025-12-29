'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'he';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  direction: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguageState] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLanguage = localStorage.getItem('language') as Language | null;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'he')) {
      setLanguageState(savedLanguage);
      document.documentElement.lang = savedLanguage;
      document.documentElement.dir = savedLanguage === 'he' ? 'rtl' : 'ltr';
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.lang = language;
      document.documentElement.dir = language === 'he' ? 'rtl' : 'ltr';
    }
  }, [language, mounted]);

  const setLanguage = (lang: Language) => {
    console.log('Setting language to:', lang);
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    const newDir = lang === 'he' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    document.documentElement.dir = newDir;
    console.log('Updated HTML attributes:', {
      lang: document.documentElement.lang,
      dir: document.documentElement.dir,
    });
  };

  const direction = language === 'he' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, direction }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
