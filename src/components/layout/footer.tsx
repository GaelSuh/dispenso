import Link from 'next/link';
import { Logo } from '@/components/brand/logo';
import { Container } from '@/components/ui/container';
import { SITE } from '@/lib/seo';

const COLS: { heading: string; links: { href: string; label: string; external?: boolean }[] }[] = [
  {
    heading: 'Product',
    links: [
      { href: '/#features',                label: 'Features' },
      { href: '/#audience',                label: 'For pharmacies & hospitals' },
      { href: '/#showcase',                label: 'Product showcase' },
      { href: '/download',                 label: 'Download' },
      { href: '/contact?subject=pricing',  label: 'Get a quote' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { href: '/docs',     label: 'Documentation' },
      { href: '/security', label: 'Security & trust' },
      { href: '/about',    label: 'About Dispenso' },
      { href: 'https://github.com/AtirhGael/dispenso', label: 'GitHub', external: true },
    ],
  },
  {
    heading: 'Talk to us',
    links: [
      { href: '/contact?subject=demo',    label: 'Book a demo' },
      { href: '/contact?subject=sales',   label: 'Talk to sales' },
      { href: '/contact?subject=support', label: 'Get support' },
      { href: 'mailto:hello@getdispenso.com', label: 'hello@getdispenso.com', external: true },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink-950 text-ink-300 mt-24">
      <Container className="py-14 sm:py-16 lg:py-20">
        {/* Brand + columns */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-10 lg:gap-12">
          <div className="col-span-2 md:col-span-2">
            <div className="text-white">
              <Logo className="[&_span]:text-white [&_span_span]:text-ink-400" />
            </div>
            <p className="mt-4 text-sm leading-relaxed max-w-xs text-ink-400">
              {SITE.description}
            </p>
          </div>

          {COLS.map((col) => (
            <div key={col.heading}>
              <div className="text-eyebrow uppercase text-ink-500">{col.heading}</div>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                        rel="noopener noreferrer"
                        className="text-sm text-ink-300 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-ink-300 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Subline */}
        <div className="mt-12 sm:mt-14 pt-8 border-t border-ink-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-ink-500">
          <p>
            © {new Date().getFullYear()} Dispenso. Built in Douala for pharmacies and hospitals that can&rsquo;t afford a bad day.
          </p>
          <p>
            Questions? Write to{' '}
            <a className="text-ink-300 hover:text-white" href="mailto:hello@getdispenso.com">
              hello@getdispenso.com
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
