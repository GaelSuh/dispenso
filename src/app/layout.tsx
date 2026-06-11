import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { Nav } from '@/components/layout/nav';
import { Footer } from '@/components/layout/footer';
import { pageMetadata, SITE } from '@/lib/seo';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

export const metadata: Metadata = pageMetadata({
  title: 'Dispenso — Premium pharmacy & hospital software, offline-first',
  exactTitle: true,
});

export const viewport: Viewport = {
  themeColor: '#71a22f',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Structured data: SoftwareApplication → improves rich-snippet eligibility
  // and gives Google a hint about the install / pricing surface.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: SITE.name,
    applicationCategory: ['BusinessApplication', 'HealthApplication'],
    applicationSubCategory: 'Pharmacy Management Software',
    operatingSystem: 'Windows, macOS, Linux',
    description: SITE.description,
    keywords: SITE.keywords.join(', '),
    audience: {
      '@type': 'Audience',
      audienceType: 'Pharmacy owners, hospital administrators, pharmacy groups, NGO clinics',
    },
    featureList: [
      'Offline-first point of sale',
      'Batch and expiry tracking with first-expiry-first-out dispensing',
      'Hospital cash office collections',
      'Real-time revenue dashboard',
      'Tamper-proof audit trail',
      'Role-based access control',
      'Multi-branch consolidation',
      'Automatic local-to-server sync',
    ],
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      url: `${SITE.url}/contact?subject=pricing`,
      priceSpecification: {
        '@type': 'PriceSpecification',
        description: 'Tailored quote based on branches, workstations and hosting needs.',
      },
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger -- static, server-rendered, safe
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
