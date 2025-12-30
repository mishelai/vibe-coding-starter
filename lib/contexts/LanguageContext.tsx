'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'he';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  direction: 'ltr' | 'rtl';
  isReady: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

// Helper to get initial language synchronously (for SSR matching)
const getInitialLanguage = (): Language => {
  if (typeof window === 'undefined') {
    return 'he'; // Default to Hebrew for SSR
  }
  const saved = localStorage.getItem('language') as Language | null;
  return saved === 'en' || saved === 'he' ? saved : 'he';
};

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguageState] = useState<Language>('he');
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language | null;
    const initialLang = savedLanguage === 'en' || savedLanguage === 'he' ? savedLanguage : 'he';
    setLanguageState(initialLang);
    document.documentElement.lang = initialLang;
    document.documentElement.dir = initialLang === 'he' ? 'rtl' : 'ltr';
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (isReady) {
      document.documentElement.lang = language;
      document.documentElement.dir = language === 'he' ? 'rtl' : 'ltr';
    }
  }, [language, isReady]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    const newDir = lang === 'he' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    document.documentElement.dir = newDir;
  };

  const direction = language === 'he' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, direction, isReady }}>
      <div style={{ visibility: isReady ? 'visible' : 'hidden' }}>
        {children}
      </div>
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
