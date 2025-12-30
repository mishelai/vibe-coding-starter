import Image from 'next/image';
import { MentorButton } from './MentorButton';
import { CommunityImageGrid } from './CommunityImageGrid';
import { cn } from '@/lib/utils';
import { CheckCircle } from 'lucide-react';
import { GridImage } from '@/data/config/landingPageData';

interface ServiceFeatureProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  imageSrc: string;
  gridImages?: GridImage[];
  imagePosition: 'left' | 'right';
  ctaText: string;
  ctaHref: string;
  isRTL?: boolean;
}

export const ServiceFeature = ({
  id,
  title,
  subtitle,
  description,
  benefits,
  imageSrc,
  gridImages,
  imagePosition,
  ctaText,
  ctaHref,
  isRTL = false,
}: ServiceFeatureProps) => {
  // For RTL, flip the image position
  const effectivePosition = isRTL
    ? imagePosition === 'left'
      ? 'right'
      : 'left'
    : imagePosition;

  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div
        className={cn(
          'grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center',
          effectivePosition === 'right' && 'lg:[&>div:first-child]:order-2',
        )}
      >
        {/* Image */}
        <div className="w-full">
          {id === 'community' && gridImages && gridImages.length >= 3 ? (
            <CommunityImageGrid images={gridImages} title={title} />
          ) : (
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 dark:bg-secondary-800">
              <Image
                src={imageSrc}
                alt={title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 800px"
                quality={90}
                className="object-cover"
              />
            </div>
          )}
        </div>

        {/* Content */}
        <div className={cn('w-full', isRTL && 'text-right')}>
          {/* Title */}
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary-800 dark:text-neutral-50 mb-3">
            {title}
          </h3>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-neutral-500 dark:text-secondary-300 mb-4">
            {subtitle}
          </p>

          {/* Description */}
          <p className="text-sm sm:text-base text-neutral-600 dark:text-secondary-200 leading-relaxed mb-6">
            {description}
          </p>

          {/* Divider */}
          <div className="w-full h-px bg-neutral-200 dark:bg-secondary-700 mb-6" />

          {/* Benefits Grid */}
          <div className={cn(
            'grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8',
            isRTL && 'direction-rtl'
          )}>
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-sm sm:text-base text-neutral-700 dark:text-secondary-200"
                dir={isRTL ? 'rtl' : 'ltr'}
              >
                <CheckCircle className="w-5 h-5 text-primary-500 dark:text-primary-400 flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <MentorButton href={ctaHref} variant="gradient" showArrow>
            {ctaText}
          </MentorButton>
        </div>
      </div>
    </div>
  );
};
