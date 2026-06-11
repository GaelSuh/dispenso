import type { Metadata } from 'next';
import { Trust } from '@/components/sections/trust';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/motion/reveal';
import { Badge } from '@/components/ui/badge';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Security & trust',
  description: 'How Dispenso protects pharmacy data and operations: encrypted local storage, append-only audit logs, server-enforced RBAC.',
  path: '/security',
});

export default function SecurityPage() {
  return (
    <div className="pt-28 lg:pt-36">
      <Container size="narrow" className="pb-8">
        <Reveal>
          <Badge tone="ink" dot>Security & trust</Badge>
          <h1 className="mt-4 text-display-lg text-ink-900">
            The decisions we made so you can sleep through Saturday.
          </h1>
          <p className="mt-5 text-lg text-ink-600 leading-relaxed">
            Security is mostly the boring stuff: encrypted at rest, brute-force
            throttling, append-only audit logs, strict input validation. We did
            the boring stuff carefully.
          </p>
        </Reveal>
      </Container>
      <Trust />
    </div>
  );
}
