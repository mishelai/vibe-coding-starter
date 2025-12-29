import { servicesContent, serviceItems } from '@/data/config/landingPageData';
import { ServiceFeature } from './ServiceFeature';

export const ServicesSection = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-24 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-800 dark:text-neutral-50 mb-3 sm:mb-4">
            {servicesContent.heading}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-neutral-600 dark:text-secondary-200 max-w-2xl mx-auto">
            {servicesContent.subheading}
          </p>
        </div>

        {/* Service Features */}
        <div className="divide-y divide-neutral-200 dark:divide-secondary-700">
          {serviceItems.map((service, index) => (
            <ServiceFeature
              key={service.id}
              title={service.title}
              subtitle={service.subtitle}
              description={service.description}
              benefits={service.benefits}
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
