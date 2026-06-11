import { faq } from '@/lib/content';

/**
 * FAQ JSON-LD — emits a Schema.org `FAQPage` block so Google can show
 * the questions as "People also ask" rich-result snippets directly in
 * the search results.
 *
 * Drop this into pages that render <FAQ />. We render a plain <script>
 * with `type="application/ld+json"`. No client JS needed.
 */
export function FAQJsonLd() {
  const payload = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger -- static content from a typed module
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
