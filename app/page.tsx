import {
  MentorHeader,
  MentorHero,
  AboutSection,
  TestimonialsSection,
  ServicesSection,
  FaqSection,
  ContactSection,
  MentorFooter,
} from '@/components/mentor';

export default function Page() {
  return (
    <div className="min-h-screen bg-primary-100 dark:bg-transparent overflow-x-hidden w-full">
      {/* Dark frame border - hidden on mobile, visible on larger screens */}
      <div className="hidden xl:block fixed inset-0 pointer-events-none z-50">
        <div className="absolute top-0 left-0 right-0 h-6 bg-secondary-700 dark:bg-secondary-800" />
        <div className="absolute bottom-0 left-0 right-0 h-6 bg-secondary-700 dark:bg-secondary-800" />
        <div className="absolute top-0 left-0 bottom-0 w-6 bg-secondary-700 dark:bg-secondary-800" />
        <div className="absolute top-0 right-0 bottom-0 w-6 bg-secondary-700 dark:bg-secondary-800" />
      </div>

      {/* Main content area with padding for the frame on larger screens */}
      <main className="xl:pt-6 xl:pb-6 xl:px-6 w-full overflow-hidden">
        <div className="bg-primary-100 dark:bg-transparent min-h-screen w-full">
          <MentorHeader />
          <MentorHero />
          <AboutSection />
          <TestimonialsSection />
          <ServicesSection />
          <FaqSection />
          <ContactSection />
          <MentorFooter />
        </div>
      </main>
    </div>
  );
}
