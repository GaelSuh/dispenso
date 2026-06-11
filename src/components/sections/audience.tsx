'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Reveal, RevealStagger, childRiseVariants } from '@/components/motion/reveal';
import { audiences, audienceSegments } from '@/lib/content';

/**
 * Audience — dual segment showcase. Two big cards, one for pharmacies,
 * one for hospitals. Hover lifts the card, the icon gets a soft glow,
 * the bullets stagger in.
 *
 * Why this section exists:
 *   The desktop app is genuinely dual-purpose — it powers community
 *   pharmacies AND hospital cash offices on the same install. Owners
 *   and administrators land here from completely different searches
 *   ("pharmacy POS" vs "hospital cash office software"). We name them
 *   both, explicitly, so the right buyer feels seen.
 */
export function Audience() {
  return (
    <section id="audience" className="section relative overflow-hidden">
      {/* Soft brand halo behind the cards */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            'radial-gradient(60% 50% at 50% 0%, rgba(113,162,47,0.10), transparent 70%)',
        }}
      />

      <Container>
        <Reveal className="max-w-2xl">
          <span className="eyebrow">{audiences.eyebrow}</span>
          <h2 className="mt-4 text-display-md text-ink-900">
            {audiences.headline}
          </h2>
          <p className="mt-5 text-lg text-ink-600 leading-relaxed">
            {audiences.body}
          </p>
        </Reveal>

        <RevealStagger className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-5">
          {audiences.cards.map((c) => (
            <motion.article
              key={c.title}
              variants={childRiseVariants}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 220, damping: 22 }}
              className="group relative card p-6 sm:p-8 lg:p-10 overflow-hidden"
            >
              {/* Subtle gradient sweep on hover */}
              <div
                aria-hidden
                className="absolute -inset-px rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    'linear-gradient(120deg, rgba(113,162,47,0.06), transparent 40%, rgba(198,138,43,0.06))',
                }}
              />

              <div className="relative flex items-center gap-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-200/60 group-hover:scale-105 transition-transform duration-300">
                  <c.icon className="h-6 w-6" />
                </div>
                <span className="pill bg-ink-50 text-ink-700 ring-ink-200 text-[11px] uppercase tracking-wider font-semibold">
                  {c.tag}
                </span>
              </div>

              <h3 className="relative mt-5 sm:mt-6 text-[20px] sm:text-2xl lg:text-[28px] font-semibold tracking-tight text-ink-900 leading-snug">
                {c.title}
              </h3>

              <ul className="relative mt-6 space-y-3">
                {c.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-[15px] text-ink-700 leading-relaxed"
                  >
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500/10 text-brand-700 ring-1 ring-brand-500/20">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </RevealStagger>

        {/* Segment strip — quietly tells Google (and the user) every
            type of operator Dispenso is built for. */}
        <Reveal className="mt-12">
          <div className="rounded-2xl border border-ink-200/70 bg-white/60 backdrop-blur-sm px-4 sm:px-6 py-4 sm:py-5 flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-8 gap-y-3">
            <span className="text-eyebrow uppercase text-ink-500 mr-2">
              Also built for
            </span>
            {audienceSegments.map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-2 text-[13.5px] font-medium text-ink-700"
              >
                <s.icon className="h-4 w-4 text-brand-600" />
                {s.label}
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
