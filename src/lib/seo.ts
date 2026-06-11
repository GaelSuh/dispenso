import type { Metadata } from 'next';

/**
 * Centralised SEO. Page-level files import `pageMetadata({...})` instead
 * of redefining title templates, og images, twitter cards, etc.
 *
 * If you change the marketing copy, change it here ONCE.
 */

export const SITE = {
  name: 'Dispenso',
  domain: 'getdispenso.com',
  url: 'https://getdispenso.com',
  description:
    'Dispenso is the premium operating system for African pharmacies and hospitals — an offline-first point of sale, batch and expiry tracking, hospital cash office, real-time revenue dashboard and tamper-proof audit log, all on one desktop app that keeps working when the internet doesn’t.',
  twitter: '@getdispenso',
  contactEmail: 'hello@getdispenso.com',
  keywords: [
    'pharmacy management software',
    'pharmacy POS Africa',
    'hospital cash office software',
    'offline pharmacy software',
    'dispensing software Cameroon',
    'pharmacy inventory management',
    'batch and expiry tracking',
    'pharmacy audit trail',
    'multi-branch pharmacy software',
    'hospital revenue dashboard',
    'pharmacy software Douala',
    'pharmacy point of sale Yaoundé',
  ],
};

export interface PageMetaInput {
  title: string;
  description?: string;
  path?: string;
  /** When set, the title is used verbatim. Otherwise it's `${title} — ${SITE.name}`. */
  exactTitle?: boolean;
}

export function pageMetadata(input: PageMetaInput): Metadata {
  const title = input.exactTitle ? input.title : `${input.title} — ${SITE.name}`;
  const description = input.description ?? SITE.description;
  const url = input.path ? `${SITE.url}${input.path}` : SITE.url;

  return {
    title,
    description,
    keywords: SITE.keywords,
    metadataBase: new URL(SITE.url),
    alternates: { canonical: url },
    authors: [{ name: 'Dispenso', url: SITE.url }],
    creator: 'Dispenso',
    publisher: 'Dispenso',
    category: 'Healthcare Software',
    openGraph: {
      type: 'website',
      url,
      siteName: SITE.name,
      title,
      description,
      images: [
        {
          url: '/og.svg',
          width: 1200,
          height: 630,
          alt: `${SITE.name} — ${input.title}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og.svg'],
      creator: SITE.twitter,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: [
        { url: '/favicon.svg', type: 'image/svg+xml' },
      ],
    },
  };
}
