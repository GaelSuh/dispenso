import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/motion/reveal';
import { Download, ArrowRight } from 'lucide-react';

/**
 * CTA — final-strike conversion block. Dark canvas, single primary
 * action ("Download"), single secondary ("Talk to us"). Two CTAs max.
 * Anything more here dilutes the click-through.
 */
export function CTA() {
  return (
    <section className="section relative">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-ink-950 text-white px-6 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-24 shadow-lift">
            {/* Decorative mesh — kept very subtle, not the gradient soup */}
            <div
              aria-hidden
              className="absolute inset-0 -z-10 opacity-40"
              style={{
                background:
                  'radial-gradient(at 0% 100%, rgba(113,162,47,0.4) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(198,138,43,0.18) 0px, transparent 50%)',
              }}
            />
            <div className="absolute inset-0 -z-10 bg-grid-soft opacity-[0.04] mask-radial" />

            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 items-end">
              <div>
                <span className="text-eyebrow uppercase text-brand-400 inline-flex items-center gap-2 before:content-[''] before:h-px before:w-6 before:bg-brand-400">
                  Stop losing batches to expiry
                </span>
                <h2 className="mt-4 text-[28px] leading-[1.1] sm:text-display-lg lg:text-display-xl text-white max-w-3xl">
                  Install Dispenso on every workstation today.
                  <br className="hidden lg:inline" />
                  <span className="text-ink-400"> Cancel any time.</span>
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                <Button
                  href="/download"
                  size="lg"
                  variant="secondary"
                  iconLeft={<Download className="h-4 w-4" />}
                >
                  Download for Windows
                </Button>
                <Button
                  href="/contact"
                  size="lg"
                  variant="ghost"
                  iconRight={<ArrowRight className="h-4 w-4" />}
                  className="bg-transparent text-white ring-white/30 hover:bg-white/10 hover:ring-white/50 hover:text-white"
                >
                  Talk to the team
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
