'use client';

import { useContent } from '@/lib/hooks/useContent';

const TestimonialCard = ({
  testimonial,
  isRTL,
}: {
  testimonial: { quote: string; name: string; title: string };
  isRTL: boolean;
}) => (
  <div className="flex-shrink-0 w-[288px] sm:w-[320px] lg:w-[360px] h-[160px] sm:h-[176px]">
    <div
      className={`bg-neutral-50 dark:bg-neutral-800/90 border border-secondary-600/30 dark:border-neutral-600/40 rounded-lg p-4 shadow-sm h-full flex flex-col ${isRTL ? 'text-right' : 'text-left'}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <p className="text-base italic text-neutral-600 dark:text-secondary-200 leading-snug mb-3 flex-grow overflow-hidden line-clamp-4">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="mt-auto pt-2 border-t border-secondary-600/10 dark:border-neutral-600/20">
        <p className="font-semibold text-sm text-secondary-800 dark:text-neutral-50">
          {testimonial.name}
        </p>
        <p className="text-xs text-neutral-400 dark:text-secondary-300">
          {testimonial.title}
        </p>
      </div>
    </div>
  </div>
);

export const TestimonialMarquee = () => {
  const { testimonialItems, isRTL } = useContent();

  return (
    <div className="w-full relative" dir="ltr">
      <div className="marquee-container relative overflow-hidden py-4">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 lg:w-32 bg-gradient-to-r from-primary-100 dark:from-[#0a0a0f] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 lg:w-32 bg-gradient-to-l from-primary-100 dark:from-[#0a0a0f] to-transparent z-10 pointer-events-none" />

        {/* Marquee track with slower custom animation - pauses on hover */}
        <div className="marquee-track flex gap-4 w-max">
          {/* First set of testimonials */}
          {testimonialItems.map((testimonial, index) => (
            <TestimonialCard
              key={`testimonial-1-${index}`}
              testimonial={testimonial}
              isRTL={isRTL}
            />
          ))}
          {/* Duplicate set for seamless loop */}
          {testimonialItems.map((testimonial, index) => (
            <TestimonialCard
              key={`testimonial-2-${index}`}
              testimonial={testimonial}
              isRTL={isRTL}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
