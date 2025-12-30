'use client';

import { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useContent } from '@/lib/hooks/useContent';
import { cn } from '@/lib/utils';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  isRTL: boolean;
}

const FaqItem = ({ question, answer, isOpen, onToggle, isRTL }: FaqItemProps) => {
  const ChevronIcon = isRTL ? ChevronLeft : ChevronRight;

  return (
    <div className="border-b border-neutral-200 dark:border-neutral-700">
      <button
        onClick={onToggle}
        className={cn(
          'w-full flex items-center justify-between py-3 sm:py-4 hover:text-secondary-900 dark:hover:text-neutral-100 transition-colors',
          isRTL ? 'text-right flex-row-reverse' : 'text-left'
        )}
      >
        <span className={cn(
          'text-sm sm:text-base lg:text-lg text-secondary-800 dark:text-neutral-50',
          isRTL ? 'pl-4' : 'pr-4'
        )}>
          {question}
        </span>
        <ChevronIcon
          className={cn(
            'w-4 h-4 sm:w-5 sm:h-5 text-neutral-400 dark:text-neutral-500 flex-shrink-0 transition-transform duration-200',
            isOpen && (isRTL ? '-rotate-90' : 'rotate-90')
          )}
        />
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-200',
          isOpen ? 'max-h-96 pb-3 sm:pb-4' : 'max-h-0'
        )}
      >
        <p className={cn(
          'text-xs sm:text-sm lg:text-base text-neutral-600 dark:text-secondary-200 leading-relaxed',
          isRTL && 'text-right'
        )}>
          {answer}
        </p>
      </div>
    </div>
  );
};

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { faqContent, faqItems, isRTL } = useContent();

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full px-6 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-24 overflow-hidden">
      <div className="w-full max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-14">
          <span className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mb-1 sm:mb-2 block">
            {faqContent.label}
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-secondary-800 dark:text-neutral-50 leading-tight">
            {faqContent.heading}
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-secondary-200 mt-1">
            {faqContent.subheading}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="border-t border-neutral-200 dark:border-neutral-700">
          {faqItems.map((item, index) => (
            <FaqItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
              isRTL={isRTL}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
