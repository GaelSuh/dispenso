import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost' | 'subtle';
type Size = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  /** Render as a Next.js Link by passing href. */
  href?: string;
  /** External link — opens in a new tab with rel hardening. */
  external?: boolean;
  children: React.ReactNode;
  /** Icons-as-children — auto-applies left/right spacing. */
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

type ButtonProps = BaseProps & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps>;
type AnchorProps = BaseProps & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps>;

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-ink-900 text-white shadow-card ' +
    'hover:bg-ink-800 active:bg-ink-900 active:translate-y-px ' +
    'focus-visible:ring-ink-700',
  secondary:
    'bg-brand-500 text-white shadow-card ' +
    'hover:bg-brand-600 active:bg-brand-700 active:translate-y-px ' +
    'focus-visible:ring-brand-700',
  ghost:
    'bg-transparent text-ink-700 ring-1 ring-ink-200 ' +
    'hover:bg-ink-50 hover:text-ink-900 hover:ring-ink-300 ' +
    'focus-visible:ring-ink-700',
  subtle:
    'bg-ink-50 text-ink-700 hover:bg-ink-100 hover:text-ink-900 ' +
    'focus-visible:ring-ink-300',
};

const sizeClasses: Record<Size, string> = {
  sm: 'h-9  px-3.5 text-[13px]',
  md: 'h-10 px-4   text-sm',
  lg: 'h-12 px-5   text-[15px]',
};

const baseClasses =
  'inline-flex items-center justify-center gap-2 font-medium ' +
  'rounded-lg transition-all duration-150 ease-out-expo ' +
  'select-none cursor-pointer whitespace-nowrap ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-paper ' +
  'disabled:opacity-50 disabled:cursor-not-allowed';

/**
 * Button — primary CTA / link primitive used everywhere.
 *
 * Renders as <a> if `href` is set, otherwise <button>. Variants:
 *   - primary:   dark ink. Default for main CTAs. ONE per section.
 *   - secondary: brand green. The "Download" surface action.
 *   - ghost:     outlined. Secondary actions next to primary.
 *   - subtle:    flat grey. Tertiary, lowest emphasis.
 */
export function Button(props: ButtonProps | AnchorProps) {
  const {
    variant = 'primary',
    size = 'md',
    className,
    href,
    external,
    children,
    iconLeft,
    iconRight,
    ...rest
  } = props;

  const composed = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

  const content = (
    <>
      {iconLeft ? <span className="-ml-0.5 shrink-0">{iconLeft}</span> : null}
      <span>{children}</span>
      {iconRight ? <span className="-mr-0.5 shrink-0">{iconRight}</span> : null}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={composed}
          target="_blank"
          rel="noopener noreferrer"
          {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={composed} {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </Link>
    );
  }

  return (
    <button className={composed} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}
