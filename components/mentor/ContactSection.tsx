'use client';

import { Facebook, Linkedin, Instagram, Mail, Phone } from 'lucide-react';
import { contactContent, socialLinks } from '@/data/config/landingPageData';
import { MentorButton } from './MentorButton';

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

export const ContactSection = () => {
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
          {/* Contact Form */}
          <div className="bg-neutral-50 dark:bg-secondary-800 rounded-lg p-4 sm:p-6 lg:p-8">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-secondary-800 dark:text-neutral-50 mb-1.5 sm:mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-neutral-200 dark:border-secondary-700 bg-white dark:bg-secondary-900 text-secondary-800 dark:text-neutral-50 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-secondary-800 dark:focus:ring-neutral-50 transition-all text-sm sm:text-base"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-secondary-800 dark:text-neutral-50 mb-1.5 sm:mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-neutral-200 dark:border-secondary-700 bg-white dark:bg-secondary-900 text-secondary-800 dark:text-neutral-50 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-secondary-800 dark:focus:ring-neutral-50 transition-all text-sm sm:text-base"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-secondary-800 dark:text-neutral-50 mb-1.5 sm:mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-neutral-200 dark:border-secondary-700 bg-white dark:bg-secondary-900 text-secondary-800 dark:text-neutral-50 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-secondary-800 dark:focus:ring-neutral-50 transition-all resize-none text-sm sm:text-base"
                  placeholder="Tell me about your project..."
                />
              </div>

              <MentorButton className="w-full">Send Message</MentorButton>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-semibold text-secondary-800 dark:text-neutral-50 mb-4 sm:mb-6">
              Contact Information
            </h3>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <a
                href={`mailto:${contactContent.email}`}
                className="flex items-center justify-center md:justify-start gap-3 text-sm sm:text-base text-neutral-600 dark:text-secondary-200 hover:text-secondary-800 dark:hover:text-neutral-50 transition-colors"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{contactContent.email}</span>
              </a>

              <a
                href={`tel:${contactContent.phone.replace(/\s/g, '')}`}
                className="flex items-center justify-center md:justify-start gap-3 text-sm sm:text-base text-neutral-600 dark:text-secondary-200 hover:text-secondary-800 dark:hover:text-neutral-50 transition-colors"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{contactContent.phone}</span>
              </a>
            </div>

            {/* Social Icons */}
            <div>
              <p className="text-xs sm:text-sm text-neutral-400 dark:text-secondary-300 mb-2 sm:mb-3">
                Follow me
              </p>
              <div className="flex gap-3 justify-center md:justify-start">
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
