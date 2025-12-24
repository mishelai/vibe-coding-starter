import { siteInfo } from '@/data/config/landingPageData';

export const MentorFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-neutral-100 dark:bg-secondary-800 px-4 sm:px-6 lg:px-8 py-6 lg:py-8 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto text-center">
        <p className="text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
          &copy; {currentYear} {siteInfo.copyright}
        </p>
      </div>
    </footer>
  );
};
