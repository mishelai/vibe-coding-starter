'use client';

import { useLanguage } from '@/lib/contexts/LanguageContext';
import * as enContent from '@/data/config/landingPageData';
import * as heContent from '@/data/config/landingPageData.he';

export const useContent = () => {
  const { language } = useLanguage();
  const isHebrew = language === 'he';

  return {
    siteInfo: isHebrew ? heContent.siteInfoHe : enContent.siteInfo,
    heroContent: isHebrew ? heContent.heroContentHe : enContent.heroContent,
    aboutContent: isHebrew ? heContent.aboutContentHe : enContent.aboutContent,
    testimonialItems: isHebrew
      ? heContent.testimonialItemsHe
      : enContent.testimonialItems,
    servicesContent: isHebrew
      ? heContent.servicesContentHe
      : enContent.servicesContent,
    serviceItems: isHebrew
      ? heContent.serviceItemsHe
      : enContent.serviceItems,
    contactContent: isHebrew
      ? heContent.contactContentHe
      : enContent.contactContent,
    faqContent: isHebrew ? heContent.faqContentHe : enContent.faqContent,
    faqItems: isHebrew ? heContent.faqItemsHe : enContent.faqItems,
    footerNavLinks: isHebrew
      ? heContent.footerNavLinksHe
      : enContent.footerNavLinks,
    legalLinks: isHebrew ? heContent.legalLinksHe : enContent.legalLinks,
    socialLinks: enContent.socialLinks, // Same for both languages
    isRTL: isHebrew,
    language,
  };
};
