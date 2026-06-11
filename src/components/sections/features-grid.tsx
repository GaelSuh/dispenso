'use client';

import { Container } from '@/components/ui/container';
import { Reveal, RevealStagger, childRiseVariants } from '@/components/motion/reveal';
import { motion } from 'framer-motion';
import { featurePillars } from '@/lib/content';

/**
 * FeaturesGrid — six pillar cards on a 3×2 grid (desktop), 1col on mobile.
 *
 * Anti-slop notes:
 *   - Icons are outlined Lucide. No emoji.
 *   - Each card has a CONCRETE noun in the heading, no abstractions.
 *   - The hover effect is subtle (1px lift + ring shift). Not a 3D tilt.
 *   - Cards are equal height via the grid, not via min-height hacks.
 */
export function FeaturesGrid() {
  return (
    <section id="features" className="section relative">
      <Container>
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Why pharmacies pick Dispenso</span>
          <h2 className="mt-4 text-display-md text-ink-900">
            Six things every pharmacy POS should do.
            <br className="hidden sm:inline" />
            <span className="text-ink-500"> Most don&rsquo;t.</span>
          </h2>
          <p className="mt-5 text-lg text-ink-600 leading-relaxed">
            We started from the workflows your dispensers actually run — not from
            a generic retail-POS template. Every feature here exists because we
            watched a pharmacist lose money to its absence.
          </p>
        </Reveal>

        <RevealStagger className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featurePillars.map((f) => (
            <motion.article
              key={f.title}
              variants={childRiseVariants}
              className="group relative card p-6 hover:shadow-lift hover:-translate-y-0.5 transition-all duration-300 ease-out-expo"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700 ring-1 ring-brand-200/60">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-[17px] font-semibold text-ink-900 tracking-tight">
                {f.title}
              </h3>
              <p className="mt-2 text-[14.5px] text-ink-600 leading-relaxed">
                {f.body}
              </p>
            </motion.article>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}
