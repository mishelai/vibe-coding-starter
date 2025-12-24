import { Facebook, Linkedin, Instagram, Mail, ArrowRight } from 'lucide-react';
import { contactContent, socialLinks } from '@/data/config/landingPageData';

const SocialIcon = ({ platform }: { platform: string }) => {
  switch (platform) {
    case 'facebook':
      return <Facebook className="w-4 h-4" />;
    case 'linkedin':
      return <Linkedin className="w-4 h-4" />;
    case 'instagram':
      return <Instagram className="w-4 h-4" />;
    default:
      return null;
  }
};

export const TopBar = () => {
  return (
    <div className="w-full bg-secondary-800 dark:bg-secondary-900 text-primary-50 py-2.5 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between text-xs sm:text-sm gap-2 sm:gap-4">
        {/* Left: Email */}
        <a
          href={`mailto:${contactContent.email}`}
          className="flex items-center gap-1.5 sm:gap-2 hover:opacity-80 transition-opacity flex-shrink-0"
        >
          <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
          <span className="hidden sm:inline truncate">{contactContent.email}</span>
        </a>

        {/* Center: Promo Text */}
        <a
          href="#contact"
          className="hidden lg:flex items-center gap-2 hover:opacity-80 transition-opacity group flex-shrink min-w-0"
        >
          <span className="truncate">Start your transformation today.</span>
          <span className="font-semibold flex items-center gap-1 whitespace-nowrap">
            Get started now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
          </span>
        </a>

        {/* Right: Social Links */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
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
      </div>
    </div>
  );
};
