import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { pageMetadata } from '@/lib/seo';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// We could fetch a CMS / read MDX here. For now, every sub-route reuses a
// single placeholder so the global doc nav stays clickable without 404s.
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const title = slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  return pageMetadata({
    title: `${title} — Docs`,
    path: `/docs/${slug}`,
    exactTitle: true,
  });
}

export default async function DocsArticleStub({ params }: PageProps) {
  const { slug } = await params;
  const title = slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="pt-28 lg:pt-36 pb-20">
      <Container size="narrow">
        <Link
          href="/docs"
          className="inline-flex items-center gap-1.5 text-[13px] text-ink-500 hover:text-ink-900 transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> All documentation
        </Link>

        <Badge tone="ink" className="mt-8">In progress</Badge>
        <h1 className="mt-4 text-display-lg text-ink-900">{title}</h1>
        <p className="mt-5 text-lg text-ink-600 leading-relaxed">
          This guide is being written. In the meantime the deployment guide
          shipped in the repo (DEPLOYMENT.md) is the most thorough reference
          for self-hosters, and we&rsquo;re happy to walk you through anything by
          email.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button
            href="https://github.com/AtirhGael/dispenso/blob/master/DEPLOYMENT.md"
            external
            variant="primary"
            iconRight={<ArrowRight className="h-4 w-4" />}
          >
            Read DEPLOYMENT.md
          </Button>
          <Button href="/contact" variant="ghost">
            Email a question
          </Button>
        </div>
      </Container>
    </div>
  );
}
