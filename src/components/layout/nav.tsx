'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { Logo } from '@/components/brand/logo';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { cn } from '@/lib/utils';

const NAV = [
  { href: '/#features',  label: 'Features' },
  { href: '/#audience',  label: 'Who it’s for' },
  { href: '/#showcase',  label: 'Product' },
  { href: '/#security',  label: 'Security' },
  { href: '/docs',       label: 'Docs' },
  { href: '/contact',    label: 'Talk to us' },
] as const;

/**
 * Nav — sticky top bar with scrolled-state condensation.
 *
 * Design notes:
 *   - Starts transparent on the hero, gains a glass background + border
 *     after the user scrolls 16px.
 *   - 60px tall (down from many SaaS sites' 80px) so it reads as
 *     "tool", not "ad".
 *   - Mobile menu is a portal-style overlay, not a half-baked dropdown.
 *   - Single primary CTA at the right edge: "Download". Avoids the
 *     7-button-nav antipattern.
 */
export function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  React.useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out-expo',
        scrolled
          ? 'bg-paper/80 backdrop-blur-md border-b border-ink-200/60'
          : 'bg-transparent border-b border-transparent',
      )}
    >
      <Container className="flex h-[60px] items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="Dispenso — home">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-1.5 text-sm font-medium text-ink-600 hover:text-ink-900 rounded-md hover:bg-ink-50 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Button href="/contact?subject=demo" variant="ghost" size="sm">
            Book a demo
          </Button>
          <Button href="/download" variant="primary" size="sm" iconLeft={<Download className="h-4 w-4" />}>
            Download
          </Button>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          className="md:hidden -mr-1 p-2 rounded-md text-ink-700 hover:bg-ink-50 transition-colors"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </Container>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 z-50 bg-paper"
          >
            <Container className="flex h-[60px] items-center justify-between">
              <Logo />
              <button
                type="button"
                className="-mr-1 p-2 rounded-md text-ink-700 hover:bg-ink-50"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </Container>
            <Container className="pt-6 stagger">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-4 text-lg font-medium text-ink-800 border-b border-ink-100"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-6 flex flex-col gap-3">
                <Button href="/contact?subject=demo" variant="ghost" size="md">
                  Book a demo
                </Button>
                <Button href="/download" variant="primary" size="md" iconLeft={<Download className="h-4 w-4" />}>
                  Download
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
