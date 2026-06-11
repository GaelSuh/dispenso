'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { Reveal, RevealStagger, childRiseVariants } from '@/components/motion/reveal';
import { workflows } from '@/lib/content';

/**
 * Workflow — narrative timeline of "a day in the life" of a pharmacy
 * running Dispenso. Six steps on a vertical rail (mobile) or staggered
 * grid (desktop). Each step has a time stamp so it reads as a real day,
 * not abstract feature soup.
 *
 * This is the section that answers the "what does this thing actually
 * DO?" question for a non-technical owner.
 */
export function Workflow() {
  return (
    <section className="section relative bg-paper-warm overflow-hidden">
      <Container>
        <Reveal className="max-w-2xl">
          <span className="eyebrow">{workflows.eyebrow}</span>
          <h2 className="mt-4 text-display-md text-ink-900">
            {workflows.headline}
          </h2>
          <p className="mt-5 text-lg text-ink-600 leading-relaxed">
            Open at eight. Power cut at eleven. Delivery at one. Hospital cash
            office handover at half past three. Books closed by seven. This is
            how a Dispenso day actually feels.
          </p>
        </Reveal>

        <RevealStagger className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {workflows.steps.map((s, idx) => (
            <motion.div
              key={s.title}
              variants={childRiseVariants}
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 240, damping: 22 }}
              className="relative card p-6 sm:p-7 group"
            >
              <div className="flex items-start justify-between">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-ink-900 text-white">
                  <s.icon className="h-4 w-4" />
                </div>
                <span className="num text-[11px] font-mono text-ink-400">
                  {String(idx + 1).padStart(2, '0')} / {String(workflows.steps.length).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-5 text-[17px] font-semibold text-ink-900 tracking-tight">
                {s.title}
              </h3>
              <p className="mt-2 text-[14.5px] text-ink-600 leading-relaxed">
                {s.body}
              </p>
              {/* Hairline brand accent slides in on hover */}
              <span
                aria-hidden
                className="absolute left-7 right-7 bottom-0 h-px bg-brand-500/0 group-hover:bg-brand-500/40 transition-colors duration-500"
              />
            </motion.div>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}
