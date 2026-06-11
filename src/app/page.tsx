import { Hero } from '@/components/sections/hero';
import { FeaturesGrid } from '@/components/sections/features-grid';
import { Audience } from '@/components/sections/audience';
import { ProductShowcase } from '@/components/sections/product-showcase';
import { Workflow } from '@/components/sections/workflow';
import { Trust } from '@/components/sections/trust';
import { Downloads } from '@/components/sections/downloads';
import { Testimonials } from '@/components/sections/testimonials';
import { FAQ } from '@/components/sections/faq';
import { CTA } from '@/components/sections/cta';
import { FAQJsonLd } from '@/components/seo/faq-json-ld';

/**
 * Home — section composition.
 *
 * Order is deliberate marketing-psychology pacing:
 *   1. Hero            — value in five seconds
 *   2. FeaturesGrid    — six pillars (what)
 *   3. Audience        — two worlds (pharmacies + hospitals)
 *   4. ProductShowcase — three deep dives (how)
 *   5. Workflow        — a day in the life (when)
 *   6. Trust           — security + reliability (why you can trust it)
 *   7. Testimonials    — social proof
 *   8. Downloads       — the conversion ask
 *   9. FAQ             — clear remaining objections
 *  10. CTA             — final-strike download
 */
export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesGrid />
      <Audience />
      <ProductShowcase />
      <Workflow />
      <Trust />
      <Testimonials />
      <Downloads />
      <FAQ />
      <CTA />
      <FAQJsonLd />
    </>
  );
}
