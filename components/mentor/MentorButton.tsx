import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowLeft } from 'lucide-react';

interface MentorButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'ghost' | 'gradient';
  showArrow?: boolean;
  className?: string;
}

export const MentorButton = ({
  href,
  onClick,
  children,
  variant = 'primary',
  showArrow = false,
  className,
}: MentorButtonProps) => {
  const baseStyles =
    'inline-flex items-center justify-center rounded-full font-medium transition-all duration-200';

  const variantStyles = {
    primary: cn(
      'px-7 py-2.5 text-base',
      'bg-secondary-800 text-primary-50 dark:bg-neutral-50 dark:text-secondary-900',
      'shadow-button hover:-translate-y-0.5 hover:opacity-90',
    ),
    ghost: cn(
      'px-6 py-2 text-sm',
      'bg-transparent border border-neutral-200 dark:border-neutral-700',
      'text-secondary-800 dark:text-neutral-50',
      'hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50',
    ),
    gradient: cn(
      'px-8 py-3 text-base gap-2',
      'bg-secondary-800 text-neutral-50 dark:bg-neutral-50 dark:text-secondary-900',
      'shadow-lg hover:-translate-y-0.5 hover:shadow-xl',
      'border border-secondary-700 dark:border-neutral-200',
    ),
  };

  const combinedStyles = cn(baseStyles, variantStyles[variant], className);

  const content = (
    <>
      {children}
      {showArrow && <ArrowLeft className="w-4 h-4" />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {content}
    </button>
  );
};
