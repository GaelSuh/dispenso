'use client';

import { Container } from '@/components/ui/container';
import { Reveal, RevealStagger, childRiseVariants } from '@/components/motion/reveal';
import { motion } from 'framer-motion';
import { trustPillars } from '@/lib/content';

/**
 * Trust — four security/reliability pillars on a 4-up grid.
 *
 * This section sits BETWEEN the product showcase and the downloads, so
 * the trust seal lands right before the conversion ask. That's the
 * marketing-psychology ordering: "here's what you'll get → here's why
 * you can trust it → download".
 */
export function Trust() {
  return (
    <section id="security" className="section relative">
      <Container>
        <Reveal className="max-w-3xl">
          <span className="eyebrow">Trust & reliability</span>
          <h2 className="mt-4 text-display-md text-ink-900">
            Engineered to behave under the worst day of your year.
          </h2>
          <p className="mt-5 text-lg text-ink-600 leading-relaxed">
            Pharmacy software fails at the worst possible time: a queue of patients,
            a network outage, a cashier who left at 6 PM. Every guardrail in this
            list exists because we&rsquo;ve seen it matter.
          </p>
        </Reveal>

        <RevealStagger className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {trustPillars.map((p) => (
            <motion.div
              key={p.title}
              variants={childRiseVariants}
              className="card p-6 h-full hover:shadow-lift hover:-translate-y-0.5 transition-all duration-300 ease-out-expo"
            >
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-ink-900 text-white">
                <p.icon className="h-4 w-4" />
              </div>
              <h3 className="mt-4 text-[15px] font-semibold text-ink-900 tracking-tight">
                {p.title}
              </h3>
              <p className="mt-1.5 text-[13.5px] text-ink-600 leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </RevealStagger>

        {/* Footer hairline with compliance disclaimer — adds editorial weight */}
        <Reveal className="mt-12 pt-8 border-t border-ink-200/70 grid grid-cols-1 md:grid-cols-3 gap-6 text-[13px] text-ink-500 leading-relaxed">
          <p>
            <span className="font-semibold text-ink-700">Self-hosted by default.</span>{' '}
            We don&rsquo;t see your pharmacy&rsquo;s data unless you opt in to managed hosting.
          </p>
          <p>
            <span className="font-semibold text-ink-700">Open architecture.</span>{' '}
            Backend code is auditable; deployment guide ships in the repo.
          </p>
          <p>
            <span className="font-semibold text-ink-700">No third-party trackers.</span>{' '}
            No Segment, no Hotjar, no Facebook pixel. Even on this site.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
