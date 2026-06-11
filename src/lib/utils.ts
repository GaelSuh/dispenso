import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * cn — class-name composer with Tailwind conflict resolution.
 * Use everywhere a className is composed conditionally; never raw `+`.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
