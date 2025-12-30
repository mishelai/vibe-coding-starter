import Image from 'next/image';

interface GridImage {
  src: string;
  alt: string;
}

interface CommunityImageGridProps {
  images: GridImage[];
  title: string;
}

export const CommunityImageGrid = ({
  images,
  title,
}: CommunityImageGridProps) => {
  // Ensure we have exactly 3 images
  const [topLeft, topRight, bottom] = images;

  return (
    <div className="w-full">
      <div className="grid grid-cols-5 gap-3 sm:gap-4">
        {/* Top Left - Larger Image (3 columns) */}
        <div className="col-span-3 relative aspect-square rounded-2xl overflow-hidden bg-neutral-100 dark:bg-secondary-800">
          {topLeft && (
            <Image
              src={topLeft.src}
              alt={topLeft.alt || `${title} - Image 1`}
              fill
              sizes="(max-width: 640px) 60vw, (max-width: 1024px) 40vw, 400px"
              quality={90}
              className="object-cover"
            />
          )}
        </div>

        {/* Top Right - Smaller Image (2 columns) */}
        <div className="col-span-2 relative aspect-square rounded-2xl overflow-hidden bg-neutral-100 dark:bg-secondary-800">
          {topRight && (
            <Image
              src={topRight.src}
              alt={topRight.alt || `${title} - Image 2`}
              fill
              sizes="(max-width: 640px) 40vw, (max-width: 1024px) 30vw, 300px"
              quality={90}
              className="object-cover"
            />
          )}
        </div>

        {/* Bottom - Wide Image (full width) */}
        <div className="col-span-5 relative aspect-[5/3] rounded-2xl overflow-hidden bg-neutral-100 dark:bg-secondary-800">
          {bottom && (
            <Image
              src={bottom.src}
              alt={bottom.alt || `${title} - Image 3`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 600px"
              quality={90}
              className="object-cover"
            />
          )}
        </div>
      </div>
    </div>
  );
};
