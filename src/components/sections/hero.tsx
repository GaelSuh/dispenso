'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DashboardMock } from '@/components/showcase/dashboard-mock';
import { hero, stats } from '@/lib/content';

/**
 * Hero — first impression. Three jobs in 5 seconds:
 *   1. Communicate the product (pharmacy software, offline-first)
 *   2. Establish trust (the screenshot looks real, the numbers are real)
 *   3. Offer the path forward (download, view product)
 *
 * Layout:
 *   - Above the fold on a 14" laptop (no copy hidden below 800px)
 *   - Stacked on mobile, two-column from md upward
 *   - Background is a calm radial mesh, NOT the floating-blob slop you
 *     see on Tailwind-template SaaS
 */
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-24 sm:pt-28 lg:pt-40 pb-16 sm:pb-24 lg:pb-32">
      {/* Background layers, ordered back-to-front */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-mesh-brand animate-mesh-drift" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid-soft mask-radial opacity-[0.6]" />

      <Container>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Copy column */}
          <div className="lg:col-span-6 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.2, 0.65, 0.3, 0.9] }}
            >
              <Badge tone="brand" dot className="mb-5">
                {hero.eyebrow}
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.2, 0.65, 0.3, 0.9], delay: 0.05 }}
              className="text-[34px] leading-[1.08] sm:text-display-lg md:text-display-xl text-ink-900 tracking-tight"
            >
              {hero.headlineLead}{' '}
              <span className="text-gradient-brand">{hero.headlineEmphasis}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.2, 0.65, 0.3, 0.9], delay: 0.15 }}
              className="mt-5 sm:mt-6 text-[16px] sm:text-lg leading-relaxed text-ink-600 max-w-xl"
            >
              {hero.subhead}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.2, 0.65, 0.3, 0.9], delay: 0.25 }}
              className="mt-7 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3"
            >
              <Button
                href={hero.primaryCta.href}
                size="lg"
                variant="primary"
                iconLeft={<Download className="h-4 w-4" />}
              >
                {hero.primaryCta.label}
              </Button>
              <Button
                href={hero.secondaryCta.href}
                size="lg"
                variant="ghost"
                iconRight={<ArrowRight className="h-4 w-4" />}
              >
                {hero.secondaryCta.label}
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-6 text-xs text-ink-500 max-w-md leading-relaxed"
            >
              {hero.trustline}
            </motion.p>
          </div>

          {/* Visual column — hidden on the smallest screens because the
              dashboard mock is information-dense and reads badly under
              360px. Returns from sm: upward. */}
          <div className="hidden sm:block lg:col-span-6 lg:-mr-8">
            <DashboardMock />
          </div>
        </div>

        {/* Stats ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px 0px' }}
          transition={{ duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="mt-14 sm:mt-20 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-6 sm:gap-6 lg:gap-10 border-y border-ink-200/70 py-7 sm:py-8 lg:py-10"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-ink-900 tracking-tight num">
                {stat.value}
              </div>
              <div className="mt-1.5 sm:mt-2 text-[11.5px] sm:text-xs lg:text-[13px] text-ink-500 leading-relaxed max-w-[28ch]">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
