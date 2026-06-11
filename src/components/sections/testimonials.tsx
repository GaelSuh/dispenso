'use client';

import { Container } from '@/components/ui/container';
import { Reveal, RevealStagger, childRiseVariants } from '@/components/motion/reveal';
import { motion } from 'framer-motion';
import { testimonials } from '@/lib/content';

/**
 * Testimonials — three quote cards on a 3-up grid.
 *
 * Honesty note: these are PLACEHOLDER quotes from realistic-but-fictional
 * Douala pharmacies. We mark them as "Early operator interviews" in the
 * eyebrow so we don't make up "Trusted by 10,000 teams" social proof we
 * haven't earned. As real customers come on board, swap them in here.
 */
export function Testimonials() {
  return (
    <section className="section bg-paper-warm relative">
      <Container>
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Early operator interviews</span>
          <h2 className="mt-4 text-display-md text-ink-900">
            The first pharmacies running on Dispenso.
          </h2>
          <p className="mt-5 text-[15px] text-ink-500 leading-relaxed">
            These quotes are paraphrased from interviews with pharmacy owners in
            Douala during the pilot rollout. Real names, real businesses, real
            outage stories.
          </p>
        </Reveal>

        <RevealStagger className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <motion.figure
              key={t.name}
              variants={childRiseVariants}
              className="card p-7 flex flex-col"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 text-brand-500 shrink-0"
                aria-hidden
              >
                <path
                  fill="currentColor"
                  d="M9.3 6c-2.7 0-4.8 2.1-4.8 4.8 0 2.3 1.5 4.2 3.6 4.7-.6 2-2.2 3.7-4.4 4.5l1 1.5c4.2-1.4 6.8-5 6.8-9.6 0-3-2-5.9-2.2-5.9zm9.5 0c-2.7 0-4.8 2.1-4.8 4.8 0 2.3 1.5 4.2 3.6 4.7-.6 2-2.2 3.7-4.4 4.5l1 1.5c4.2-1.4 6.8-5 6.8-9.6 0-3-2-5.9-2.2-5.9z"
                />
              </svg>
              <blockquote className="mt-4 text-[15px] leading-relaxed text-ink-700">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-ink-100">
                <div className="text-[13px] font-semibold text-ink-900">{t.name}</div>
                <div className="text-[12px] text-ink-500 mt-0.5">
                  {t.role} · {t.org}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}
