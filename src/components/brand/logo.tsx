import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  /** When false, render the mark only (no wordmark). */
  showWordmark?: boolean;
}

/**
 * Brand mark + wordmark. Used in the nav and footer.
 *
 * Visual: a clinical pharmacy flask with a medical cross inside it, set
 * inside a rounded brand-green tile. The cross is offset slightly to feel
 * less iconographic and more crafted than a stock-photo first-aid logo.
 */
export function Logo({ className, showWordmark = true }: LogoProps) {
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <svg
        viewBox="0 0 32 32"
        width={28}
        height={28}
        aria-hidden="true"
        className="shrink-0 rounded-md"
      >
        <rect width="32" height="32" rx="7" fill="#71A22F" />
        <path
          d="M11 8h10v4.5l3.5 7a4.5 4.5 0 0 1-4 6.5h-9a4.5 4.5 0 0 1-4-6.5L11 12.5V8z"
          fill="none"
          stroke="#fff"
          strokeWidth="1.8"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <line x1="10" y1="8" x2="22" y2="8" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
        <rect x="14.5" y="16.5" width="3" height="8" rx="0.5" fill="#fff" />
        <rect x="12" y="19" width="8" height="3" rx="0.5" fill="#fff" />
      </svg>
      {showWordmark && (
        <span className="text-[15px] font-semibold tracking-tight text-ink-900">
          Dispenso
        </span>
      )}
    </div>
  );
}
