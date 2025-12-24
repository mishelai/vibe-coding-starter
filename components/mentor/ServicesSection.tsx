import { servicesContent, serviceItems } from '@/data/config/landingPageData';
import { ServiceFeature } from './ServiceFeature';

export const ServicesSection = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-24 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary-800 dark:text-neutral-50 mb-2 sm:mb-3">
            {servicesContent.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-600 dark:text-secondary-200">
            {servicesContent.subheading}
          </p>
        </div>

        {/* Service Features */}
        <div className="divide-y divide-neutral-200 dark:divide-secondary-700">
          {serviceItems.map((service, index) => (
            <ServiceFeature
              key={service.id}
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
              imagePosition={index % 2 === 0 ? 'left' : 'right'}
              ctaText={service.ctaText}
              ctaHref={service.ctaHref}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
