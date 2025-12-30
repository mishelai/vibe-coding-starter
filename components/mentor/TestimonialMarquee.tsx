'use client';

import { useEffect, useRef, useState } from 'react';
import { useContent } from '@/lib/hooks/useContent';

const TestimonialCard = ({
  testimonial,
  isRTL,
}: {
  testimonial: { quote: string; name: string; title: string };
  isRTL: boolean;
}) => (
  <div className="flex-shrink-0 w-[280px] sm:w-[340px] lg:w-[400px]">
    <div
      className={`bg-neutral-50 dark:bg-secondary-700/80 border border-secondary-600/30 dark:border-secondary-500/20 rounded-lg p-4 sm:p-6 shadow-sm h-full flex flex-col ${isRTL ? 'text-right' : 'text-left'}`}
    >
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
);

export const TestimonialMarquee = () => {
  const { testimonialItems, isRTL } = useContent();
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);

  // Measure the width of one set of items
  useEffect(() => {
    const measureWidth = () => {
      if (trackRef.current) {
        // Get the width of the first track (half the total content)
        const firstTrack = trackRef.current.querySelector('[data-track="first"]');
        if (firstTrack) {
          const gap = 16; // 1rem = 16px
          setTrackWidth(firstTrack.scrollWidth + gap);
        }
      }
    };

    measureWidth();
    window.addEventListener('resize', measureWidth);
    return () => window.removeEventListener('resize', measureWidth);
  }, [testimonialItems]);

  return (
    <div className="w-full relative group">
      {/* Outer wrapper to prevent layout overflow */}
      <div className="relative overflow-hidden py-4">
        {/* Gradient overlays - match page background */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 lg:w-32 bg-gradient-to-r from-primary-100 dark:from-[#0a0a0f] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 lg:w-32 bg-gradient-to-l from-primary-100 dark:from-[#0a0a0f] to-transparent z-10 pointer-events-none" />

        {/* Animated track container */}
        <div
          ref={trackRef}
          className="flex gap-4 w-max group-hover:[animation-play-state:paused]"
          style={{
            willChange: 'transform',
            animation: trackWidth > 0 ? `marquee-scroll 40s linear infinite` : 'none',
            // CSS custom property for the animation
            ['--scroll-width' as string]: `-${trackWidth}px`,
          }}
        >
          {/* First track */}
          <div data-track="first" className="flex gap-4 shrink-0">
            {testimonialItems.map((testimonial, index) => (
              <TestimonialCard
                key={`testimonial-a-${index}`}
                testimonial={testimonial}
                isRTL={isRTL}
              />
            ))}
          </div>

          {/* Second track (duplicate for seamless loop) */}
          <div data-track="second" className="flex gap-4 shrink-0">
            {testimonialItems.map((testimonial, index) => (
              <TestimonialCard
                key={`testimonial-b-${index}`}
                testimonial={testimonial}
                isRTL={isRTL}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Inline keyframes for precise pixel-based animation */}
      <style jsx>{`
        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(var(--scroll-width));
          }
        }
      `}</style>
    </div>
  );
};
