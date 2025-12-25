import Image from 'next/image';
import { MentorButton } from './MentorButton';
import { cn } from '@/lib/utils';

interface ServiceFeatureProps {
  title: string;
  description: string;
  imageSrc: string;
  imagePosition: 'left' | 'right';
  ctaText: string;
  ctaHref: string;
}

export const ServiceFeature = ({
  title,
  description,
  imageSrc,
  imagePosition,
  ctaText,
  ctaHref,
}: ServiceFeatureProps) => {
  return (
    <div className="py-8 sm:py-10 lg:py-16">
      <div
        className={cn(
          'grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center',
          imagePosition === 'right' && 'md:[&>div:first-child]:order-2'
        )}
      >
        {/* Image - wider for better visual impact */}
        <div className="w-full max-w-[340px] sm:max-w-[440px] md:max-w-none mx-auto md:mx-0">
          <div className="relative aspect-[3/2] rounded-xl overflow-hidden">
            <Image
              src={imageSrc}
              alt={title}
              fill
              sizes="(max-width: 640px) 340px, (max-width: 768px) 440px, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full text-center md:text-left">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-secondary-800 dark:text-neutral-50 mb-3 sm:mb-4">
            {title}
          </h3>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-600 dark:text-secondary-200 leading-relaxed mb-4 sm:mb-6">
            {description}
          </p>
          <MentorButton href={ctaHref}>{ctaText}</MentorButton>
        </div>
      </div>
    </div>
  );
};
