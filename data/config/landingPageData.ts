export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: 'facebook' | 'linkedin' | 'instagram';
  href: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  title: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  imageSrc: string;
  ctaText: string;
  ctaHref: string;
}

export const siteInfo = {
  name: 'Motti Pinchas',
  tagline: 'Modern Mentor for Founders',
  copyright: 'Motti Pinchas - All rights reserved.',
};

export const heroContent = {
  eyebrow: 'Get a big challenge now',
  heading: 'START A EXCELLENT CAREER JOURNEY WITH US',
  subheading:
    'Transform your career with personalized mentorship and world-class guidance from industry experts.',
  primaryAction: 'Join Now',
};

export const aboutContent = {
  heading: 'About Motti Pinchas',
  imageSrc: '/static/images/people/1.webp',
  bio: [
    'With over two decades of experience building and scaling technology companies, I have dedicated my career to helping founders and entrepreneurs navigate the complex journey from idea to impact.',
    "As a former CTO and startup advisor, I have seen firsthand what separates successful ventures from those that struggle. My approach combines strategic thinking with practical, hands-on guidance tailored to each founder's unique situation.",
  ],
};

export const testimonialItems: TestimonialItem[] = [
  {
    id: 'testimonial-1',
    quote:
      'Motti transformed how I think about building products. His guidance helped us achieve product-market fit in half the time we expected.',
    name: 'Sarah Chen',
    title: 'CEO, TechStart',
  },
  {
    id: 'testimonial-2',
    quote:
      'The strategic clarity Motti brought to our team was invaluable. He has a rare ability to see both the big picture and the critical details.',
    name: 'David Rubin',
    title: 'Founder, InnovateLab',
  },
  {
    id: 'testimonial-3',
    quote:
      'Working with Motti gave me the confidence and frameworks to lead my company through rapid growth. I cannot recommend him enough.',
    name: 'Maya Goldstein',
    title: 'CTO, ScaleUp',
  },
];

export const servicesContent = {
  heading: 'Our Services',
  subheading: 'Comprehensive support for every stage of your journey',
};

export const serviceItems: ServiceItem[] = [
  {
    id: 'mentoring',
    title: 'Mentoring',
    subtitle: 'Accelerate your growth with personalized guidance',
    description:
      'One-on-one personalized guidance designed to accelerate your growth as a leader. Whether you are navigating your first startup or scaling an established company, I provide the strategic support and accountability you need to succeed.',
    benefits: [
      '1-on-1 strategic consulting',
      'Decision matrix development',
      'Conflict resolution frameworks',
      'Executive communication skills',
    ],
    imageSrc: '/static/images/people/2.webp',
    ctaText: 'Start Mentoring',
    ctaHref: '/contact',
  },
  {
    id: 'strategy',
    title: 'Strategy & Product Development',
    subtitle: 'Build products that customers love',
    description:
      'From market analysis to product roadmaps, I help you make informed decisions that drive real results. Together we will define your vision, validate your assumptions, and build products that customers love.',
    benefits: [
      'Market analysis & validation',
      'Product roadmap planning',
      'Go-to-market strategy',
      'Competitive positioning',
    ],
    imageSrc: '/static/images/people/3.webp',
    ctaText: 'Learn More',
    ctaHref: '/contact',
  },
  {
    id: 'community',
    title: 'Community',
    subtitle: 'Connect with ambitious founders',
    description:
      'Join an exclusive network of ambitious founders and industry leaders. Our community offers peer support, collaborative learning, and connections that can transform your business trajectory.',
    benefits: [
      'Exclusive founder network',
      'Peer learning sessions',
      'Industry connections',
      'Collaborative opportunities',
    ],
    imageSrc: '/static/images/people/1.webp',
    ctaText: 'Join Community',
    ctaHref: '/contact',
  },
  {
    id: 'lectures',
    title: 'Lectures & Workshops',
    subtitle: 'Actionable insights for teams',
    description:
      'Engaging presentations and hands-on workshops for teams and organizations. I deliver actionable insights on leadership, innovation, and building high-performance cultures.',
    benefits: [
      'Leadership development',
      'Innovation workshops',
      'Team building sessions',
      'Culture optimization',
    ],
    imageSrc: '/static/images/people/2.webp',
    ctaText: 'Book a Session',
    ctaHref: '/contact',
  },
];

export const contactContent = {
  heading: 'Get in Touch',
  subheading: "Ready to start your journey? Let's talk.",
  email: 'hello@mottipinchas.com',
  phone: '+1 234 567 890',
};

export const faqContent = {
  label: 'Our high success rate reflects the real',
  heading: 'PROGRESS AND SATISFACTION',
  subheading: 'of learners worldwide.',
};

export const faqItems: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How do I get started with the program?',
    answer:
      'Getting started is simple. Create your account, browse our course catalog, and enroll in the program that best fits your goals. Our team will guide you through the onboarding process.',
  },
  {
    id: 'faq-2',
    question: 'What makes your mentorship different?',
    answer:
      'Our mentors are active industry professionals with proven track records. Unlike theoretical courses, we focus on practical, actionable guidance tailored to your specific situation and goals.',
  },
  {
    id: 'faq-3',
    question: 'Can I access the content on mobile devices?',
    answer:
      'Yes, our platform is fully responsive and works seamlessly on all devices. Access your courses, attend live sessions, and connect with mentors from anywhere.',
  },
  {
    id: 'faq-4',
    question: 'What is the refund policy?',
    answer:
      'We offer a 30-day satisfaction guarantee. If you are not completely satisfied with your experience, contact our support team for a full refund, no questions asked.',
  },
  {
    id: 'faq-5',
    question: 'How long do I have access to the course materials?',
    answer:
      'Once enrolled, you have lifetime access to all course materials, including future updates and improvements. Learn at your own pace without any time pressure.',
  },
];

export const footerNavLinks: NavLink[] = [
  { label: 'About Us', href: '/about' },
  { label: 'Courses', href: '/courses' },
  { label: 'Mentors', href: '/mentors' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy' },
];

export const socialLinks: SocialLink[] = [
  { platform: 'facebook', href: 'https://facebook.com' },
  { platform: 'linkedin', href: 'https://linkedin.com' },
  { platform: 'instagram', href: 'https://instagram.com' },
];
