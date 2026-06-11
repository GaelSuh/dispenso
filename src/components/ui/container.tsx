import * as React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Tighter inner content (typography / hero copy) caps at 64ch. */
  size?: 'default' | 'narrow' | 'wide';
  /** Render-as element. Constrained to a small whitelist for type safety. */
  as?: 'div' | 'section' | 'article' | 'main' | 'header' | 'footer';
}

/**
 * Container — every section's main wrapper. Single source of truth for
 * horizontal padding + max-width so the entire site stays on the same
 * vertical column.
 *
 * Why the limited `as` whitelist: React 19 + Next 15 made the global
 * `JSX.IntrinsicElements` namespace stricter to import — a string union
 * keeps the API ergonomic without depending on it.
 */
export function Container({
  className,
  size = 'default',
  as = 'div',
  ...rest
}: ContainerProps) {
  const max =
    size === 'narrow' ? 'max-w-3xl' : size === 'wide' ? 'max-w-[1320px]' : 'max-w-7xl';
  const composed = cn('mx-auto w-full px-5 sm:px-6 lg:px-8', max, className);

  // Render via React.createElement so the typed `as` union doesn't fight
  // with TS's discriminated JSX inference for capitalised tag names.
  return React.createElement(as, { className: composed, ...rest });
}
