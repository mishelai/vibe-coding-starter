'use client';

import { testimonialItems } from '@/data/config/landingPageData';

export const TestimonialMarquee = () => {
  return (
    <div className="w-full relative">
      {/* Outer wrapper to prevent layout overflow */}
      <div className="relative overflow-hidden py-4">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 lg:w-32 bg-gradient-to-r from-primary-100 dark:from-secondary-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 lg:w-32 bg-gradient-to-l from-primary-100 dark:from-secondary-900 to-transparent z-10 pointer-events-none" />

        {/* Marquee track */}
        <div className="flex animate-marquee w-max">
          {/* First set */}
          {testimonialItems.map((testimonial, index) => (
            <div
              key={`testimonial-1-${index}`}
              className="flex-shrink-0 mx-3 sm:mx-4 lg:mx-6 w-[280px] sm:w-[340px] lg:w-[400px]"
            >
              <div className="bg-neutral-50 dark:bg-secondary-800 rounded-lg p-4 sm:p-6 shadow-sm h-full flex flex-col">
                {/* Quote */}
                <p className="text-sm sm:text-base italic text-neutral-600 dark:text-secondary-200 leading-relaxed mb-4 sm:mb-6 flex-grow">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Attribution */}
                <div>
                  <p className="font-semibold text-sm sm:text-base text-secondary-800 dark:text-neutral-50">
                    {testimonial.name}
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-400 dark:text-secondary-300">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {testimonialItems.map((testimonial, index) => (
            <div
              key={`testimonial-2-${index}`}
              className="flex-shrink-0 mx-3 sm:mx-4 lg:mx-6 w-[280px] sm:w-[340px] lg:w-[400px]"
            >
              <div className="bg-neutral-50 dark:bg-secondary-800 rounded-lg p-4 sm:p-6 shadow-sm h-full flex flex-col">
                {/* Quote */}
                <p className="text-sm sm:text-base italic text-neutral-600 dark:text-secondary-200 leading-relaxed mb-4 sm:mb-6 flex-grow">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Attribution */}
                <div>
                  <p className="font-semibold text-sm sm:text-base text-secondary-800 dark:text-neutral-50">
                    {testimonial.name}
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-400 dark:text-secondary-300">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
