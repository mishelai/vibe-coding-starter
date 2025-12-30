'use client';

import { useState } from 'react';
import { Facebook, Linkedin, Instagram, Mail, Phone } from 'lucide-react';
import { useContent } from '@/lib/hooks/useContent';
import { MentorButton } from './MentorButton';
import { cn } from '@/lib/utils';

const SocialIcon = ({ platform }: { platform: string }) => {
  switch (platform) {
    case 'facebook':
      return <Facebook className="w-5 h-5" />;
    case 'linkedin':
      return <Linkedin className="w-5 h-5" />;
    case 'instagram':
      return <Instagram className="w-5 h-5" />;
    default:
      return null;
  }
};

// Form labels translations
const formLabels = {
  en: {
    name: 'Name',
    namePlaceholder: 'Your name',
    email: 'Email',
    emailPlaceholder: 'your@email.com',
    message: 'Message',
    messagePlaceholder: 'Tell me about your project...',
    consentTitle: 'Receive actionable insights',
    consentDesc: 'Strategic guidance and resources for founders. Your email stays private.',
    submit: 'Send Message',
    contactInfo: 'Contact Information',
    followMe: 'Follow me',
  },
  he: {
    name: 'שם',
    namePlaceholder: 'השם שלך',
    email: 'אימייל',
    emailPlaceholder: 'your@email.com',
    message: 'הודעה',
    messagePlaceholder: 'ספר לי על הפרויקט שלך...',
    consentTitle: 'קבל תובנות מעשיות',
    consentDesc: 'הדרכה אסטרטגית ומשאבים למייסדים. האימייל שלך נשאר פרטי.',
    submit: 'שלח הודעה',
    contactInfo: 'פרטי התקשרות',
    followMe: 'עקבו אחריי',
  },
};

export const ContactSection = () => {
  const [emailConsent, setEmailConsent] = useState(false);
  const { contactContent, socialLinks, isRTL, language } = useContent();
  const labels = formLabels[language];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  return (
    <section id="contact" className="w-full px-6 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-24 overflow-hidden">
      <div className="w-full max-w-md sm:max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-14">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary-800 dark:text-neutral-50 mb-2 sm:mb-3">
            {contactContent.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-600 dark:text-secondary-200">
            {contactContent.subheading}
          </p>
        </div>

        {/* Two Column Layout */}
        <div className={cn(
          'grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-16',
          isRTL && 'md:[&>div:first-child]:order-2'
        )}>
          {/* Contact Form */}
          <div className="bg-neutral-50 dark:bg-secondary-800 rounded-lg p-4 sm:p-6 lg:p-8">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className={cn(
                    'block text-sm font-medium text-secondary-800 dark:text-neutral-50 mb-1.5 sm:mb-2',
                    isRTL && 'text-right'
                  )}
                >
                  {labels.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  dir={isRTL ? 'rtl' : 'ltr'}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-neutral-200 dark:border-secondary-700 bg-white dark:bg-secondary-900 text-secondary-800 dark:text-neutral-50 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-secondary-800 dark:focus:ring-neutral-50 transition-all text-sm sm:text-base"
                  placeholder={labels.namePlaceholder}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={cn(
                    'block text-sm font-medium text-secondary-800 dark:text-neutral-50 mb-1.5 sm:mb-2',
                    isRTL && 'text-right'
                  )}
                >
                  {labels.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  dir="ltr"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-neutral-200 dark:border-secondary-700 bg-white dark:bg-secondary-900 text-secondary-800 dark:text-neutral-50 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-secondary-800 dark:focus:ring-neutral-50 transition-all text-sm sm:text-base"
                  placeholder={labels.emailPlaceholder}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={cn(
                    'block text-sm font-medium text-secondary-800 dark:text-neutral-50 mb-1.5 sm:mb-2',
                    isRTL && 'text-right'
                  )}
                >
                  {labels.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  dir={isRTL ? 'rtl' : 'ltr'}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-neutral-200 dark:border-secondary-700 bg-white dark:bg-secondary-900 text-secondary-800 dark:text-neutral-50 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-secondary-800 dark:focus:ring-neutral-50 transition-all resize-none text-sm sm:text-base"
                  placeholder={labels.messagePlaceholder}
                />
              </div>

              {/* Email Consent Checkbox */}
              <div className={cn(
                'flex items-start gap-3 pt-2',
                isRTL && 'flex-row-reverse'
              )}>
                <input
                  type="checkbox"
                  id="emailConsent"
                  name="emailConsent"
                  checked={emailConsent}
                  onChange={(e) => setEmailConsent(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded border border-neutral-500 dark:border-neutral-400 bg-white dark:bg-secondary-800 hover:border-neutral-600 dark:hover:border-neutral-300 checked:bg-secondary-800 dark:checked:bg-neutral-100 checked:border-secondary-800 dark:checked:border-neutral-100 focus:outline-none focus:ring-2 focus:ring-secondary-800 dark:focus:ring-neutral-50 focus:ring-offset-2 dark:focus:ring-offset-secondary-900 cursor-pointer transition-colors accent-secondary-800 dark:accent-secondary-800"
                />
                <label
                  htmlFor="emailConsent"
                  className={cn(
                    'flex-1 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed cursor-pointer',
                    isRTL && 'text-right'
                  )}
                >
                  <span className="font-medium text-secondary-800 dark:text-neutral-50">
                    {labels.consentTitle}
                  </span>
                  <span className="block mt-0.5 text-neutral-500 dark:text-neutral-400">
                    {labels.consentDesc}
                  </span>
                </label>
              </div>

              <MentorButton className="w-full">{labels.submit}</MentorButton>
            </form>
          </div>

          {/* Contact Info */}
          <div className={cn(
            'flex flex-col justify-center text-center',
            isRTL ? 'md:text-right' : 'md:text-left'
          )}>
            <h3 className="text-lg sm:text-xl font-semibold text-secondary-800 dark:text-neutral-50 mb-4 sm:mb-6">
              {labels.contactInfo}
            </h3>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <a
                href={`mailto:${contactContent.email}`}
                className={cn(
                  'flex items-center justify-center gap-3 text-sm sm:text-base text-neutral-600 dark:text-secondary-200 hover:text-secondary-800 dark:hover:text-neutral-50 transition-colors',
                  isRTL ? 'md:justify-end md:flex-row-reverse' : 'md:justify-start'
                )}
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{contactContent.email}</span>
              </a>

              <a
                href={`tel:${contactContent.phone.replace(/\s/g, '')}`}
                className={cn(
                  'flex items-center justify-center gap-3 text-sm sm:text-base text-neutral-600 dark:text-secondary-200 hover:text-secondary-800 dark:hover:text-neutral-50 transition-colors',
                  isRTL ? 'md:justify-end md:flex-row-reverse' : 'md:justify-start'
                )}
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{contactContent.phone}</span>
              </a>
            </div>

            {/* Social Icons */}
            <div>
              <p className="text-xs sm:text-sm text-neutral-400 dark:text-secondary-300 mb-2 sm:mb-3">
                {labels.followMe}
              </p>
              <div className={cn(
                'flex gap-3 justify-center',
                isRTL ? 'md:justify-end' : 'md:justify-start'
              )}>
                {socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-secondary-800 dark:bg-neutral-50 text-primary-50 dark:text-secondary-900 flex items-center justify-center hover:opacity-80 transition-opacity"
                    aria-label={`Visit ${social.platform}`}
                  >
                    <SocialIcon platform={social.platform} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
