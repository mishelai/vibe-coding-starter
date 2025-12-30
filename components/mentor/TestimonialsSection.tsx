'use client';

import { useContent } from '@/lib/hooks/useContent';
import { TestimonialMarquee } from './TestimonialMarquee';

export const TestimonialsSection = () => {
  const { isRTL } = useContent();
  const heading = isRTL ? 'מה אומרים הלקוחות' : 'What Clients Say';

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-24 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary-800 dark:text-neutral-50 text-center mb-8 sm:mb-10 lg:mb-14">
          {heading}
        </h2>

        <TestimonialMarquee />
      </div>
    </section>
  );
};
