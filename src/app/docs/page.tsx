// Server component. We need `export const metadata`, so the framer-motion
// pieces are split into ./docs-grid.client.tsx (a client component).
import type { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/motion/reveal';
import { Badge } from '@/components/ui/badge';
import { DocsGrid } from './docs-grid.client';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Documentation',
  description: 'Getting-started guides, POS workflows, inventory operations, deployment and security references.',
  path: '/docs',
});

export default function DocsHome() {
  return (
    <div className="pt-28 lg:pt-36 pb-20">
      <Container>
        <Reveal>
          <Badge tone="ink" dot>Documentation</Badge>
          <h1 className="mt-4 text-display-lg text-ink-900">
            Everything you need to run Dispenso in production.
          </h1>
          <p className="mt-5 text-lg text-ink-600 leading-relaxed max-w-2xl">
            Start with the getting-started guide if you&rsquo;re new. Jump to
            deployment if you&rsquo;re self-hosting. The security reference is the
            shortest path to convincing your IT lead.
          </p>
        </Reveal>

        <DocsGrid />
      </Container>
    </div>
  );
}
