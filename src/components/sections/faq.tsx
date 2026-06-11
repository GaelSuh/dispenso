'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/motion/reveal';
import { cn } from '@/lib/utils';
import { faq } from '@/lib/content';

/**
 * FAQ — single accordion column. We force-close the others when one
 * opens, the Linear-style behavior. Smooth height animation via
 * Framer's `AnimatePresence` + height auto.
 *
 * Each item is keyboard-accessible (Enter / Space) and aria-expanded
 * is wired correctly for screen readers.
 */
export function FAQ() {
  const [openIdx, setOpenIdx] = React.useState<number | null>(0);

  return (
    <section className="section relative">
      <Container size="narrow">
        <Reveal>
          <span className="eyebrow">Frequently asked</span>
          <h2 className="mt-4 text-display-md text-ink-900">
            Questions worth answering carefully.
          </h2>
          <p className="mt-4 text-[15px] text-ink-500 leading-relaxed max-w-xl">
            If yours isn&rsquo;t here, the deployment guide in the repo is the most
            detailed source. Or write to{' '}
            <a className="text-ink-900 font-medium underline-offset-4 hover:underline" href="mailto:hello@getdispenso.com">
              hello@getdispenso.com
            </a>
            .
          </p>
        </Reveal>

        <div className="mt-10 divide-y divide-ink-200/70 border-y border-ink-200/70">
          {faq.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <Reveal key={item.q} delay={idx * 0.04}>
                <button
                  type="button"
                  className={cn(
                    'w-full text-left py-5 flex items-start justify-between gap-6',
                    'group transition-colors',
                  )}
                  aria-expanded={isOpen}
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                >
                  <span
                    className={cn(
                      'text-[16px] font-semibold tracking-tight pr-4',
                      isOpen ? 'text-ink-900' : 'text-ink-800 group-hover:text-ink-900',
                    )}
                  >
                    {item.q}
                  </span>
                  <span
                    className={cn(
                      'shrink-0 inline-flex h-7 w-7 items-center justify-center rounded-full transition-colors',
                      isOpen ? 'bg-ink-900 text-white' : 'bg-ink-100 text-ink-700 group-hover:bg-ink-200',
                    )}
                  >
                    {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.2, 0.65, 0.3, 0.9] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-[14.5px] text-ink-600 leading-relaxed max-w-2xl">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
