import Image from 'next/image';
import { aboutContent } from '@/data/config/landingPageData';

export const AboutSection = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-24 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 lg:gap-16 items-center">
          {/* Image - bigger on mobile */}
          <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-none md:w-1/2 flex-shrink-0 mx-auto md:mx-0">
            <div className="relative aspect-square sm:aspect-[4/5] rounded-xl overflow-hidden grayscale">
              <Image
                src={aboutContent.imageSrc}
                alt="Motti Pinchas"
                fill
                sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary-800 dark:text-neutral-50 mb-4 sm:mb-6 text-center md:text-left">
              {aboutContent.heading}
            </h2>
            <div className="space-y-3 sm:space-y-4">
              {aboutContent.bio.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-sm sm:text-base lg:text-lg text-neutral-600 dark:text-secondary-200 leading-relaxed text-center md:text-left"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
