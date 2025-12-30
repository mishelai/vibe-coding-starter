'use client';

const logos = [
  { name: 'Google', text: 'Google' },
  { name: 'Microsoft', text: 'Microsoft' },
  { name: 'Amazon', text: 'Amazon' },
  { name: 'Meta', text: 'Meta' },
  { name: 'Apple', text: 'Apple' },
  { name: 'Netflix', text: 'Netflix' },
  { name: 'Spotify', text: 'Spotify' },
  { name: 'Airbnb', text: 'Airbnb' },
];

export const LogoMarquee = () => {
  return (
    <div className="w-full mt-10 sm:mt-12 lg:mt-14 relative" dir="ltr">
      {/* Outer wrapper to prevent layout overflow */}
      <div className="marquee-container relative overflow-hidden">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 lg:w-32 bg-gradient-to-r from-primary-100 dark:from-secondary-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 lg:w-32 bg-gradient-to-l from-primary-100 dark:from-secondary-900 to-transparent z-10 pointer-events-none" />

        {/* Marquee track - 2 sets, each wide enough to fill screen */}
        <div
          className="flex w-max"
          style={{ animation: 'logo-marquee 25s linear infinite' }}
        >
          {[1, 2].map((setNum) => (
            <div key={`set-${setNum}`} className="flex min-w-[100vw] justify-around">
              {logos.map((logo, index) => (
                <div
                  key={`logo-${setNum}-${index}`}
                  className="flex-shrink-0 px-4 sm:px-8 lg:px-12 flex items-center justify-center"
                >
                  <span className="text-sm sm:text-lg lg:text-xl font-semibold text-neutral-400 dark:text-secondary-400 whitespace-nowrap">
                    {logo.text}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
