import { cn } from '@/lib/utils';

type Tone = 'brand' | 'ink' | 'accent' | 'success' | 'warning';

interface BadgeProps {
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
  dot?: boolean;
}

const tones: Record<Tone, string> = {
  brand:    'bg-brand-50  text-brand-700  ring-brand-200',
  ink:      'bg-ink-50    text-ink-700    ring-ink-200',
  accent:   'bg-accent-50 text-accent-600 ring-accent-400/30',
  success:  'bg-emerald-50 text-emerald-700 ring-emerald-200',
  warning:  'bg-amber-50  text-amber-800  ring-amber-200',
};

const dotTones: Record<Tone, string> = {
  brand:   'bg-brand-500',
  ink:     'bg-ink-500',
  accent:  'bg-accent-500',
  success: 'bg-emerald-500',
  warning: 'bg-amber-500',
};

export function Badge({ tone = 'brand', className, children, dot }: BadgeProps) {
  return (
    <span className={cn('pill', tones[tone], className)}>
      {dot ? <span className={cn('h-1.5 w-1.5 rounded-full', dotTones[tone])} /> : null}
      {children}
    </span>
  );
}
