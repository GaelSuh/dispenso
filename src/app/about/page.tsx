import type { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/motion/reveal';
import { Badge } from '@/components/ui/badge';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'About',
  description:
    'Why we built Dispenso: pharmacy software that respects the realities of African infrastructure — power cuts, capped bandwidth, real-world workflows.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <div className="pt-28 lg:pt-36 pb-20">
      <Container size="narrow">
        <Reveal>
          <Badge tone="ink" dot>About</Badge>
          <h1 className="mt-4 text-display-lg text-ink-900">
            Pharmacy software that respects where it&rsquo;s used.
          </h1>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 prose-styling">
          <p className="text-lg text-ink-700 leading-relaxed">
            Most pharmacy POS software is built in a place where the network
            just works. The fibre is up, the database round-trip is 20ms, the
            cashier doesn&rsquo;t have to sell paracetamol while ENEO restores
            power. That software does not survive contact with a Douala
            afternoon.
          </p>
          <p className="mt-6 text-[16px] text-ink-700 leading-relaxed">
            We started Dispenso after watching a pharmacist in Mvog-Ada lose
            a full day of sales because her cloud POS would not let her open
            without an internet handshake. We built the inverse: an
            offline-first, durable, audit-tracked desktop application that
            considers connectivity a bonus, not a precondition.
          </p>

          <h2 className="mt-12 text-2xl font-semibold text-ink-900 tracking-tight">
            What we believe
          </h2>

          <ul className="mt-6 space-y-5 text-[15.5px] text-ink-700 leading-relaxed">
            <li>
              <strong className="text-ink-900">Latency is a feature.</strong>{' '}
              When a cashier presses &ldquo;dispense&rdquo;, the sale is committed
              before the cloud is even consulted. We refuse to make humans wait
              for the network.
            </li>
            <li>
              <strong className="text-ink-900">Audit is not optional.</strong>{' '}
              Every meaningful action — a dispense, a refund, a price change —
              writes a tamper-evident log entry. The pharmacist who signed the
              refund at 5:42pm is named in the ledger forever.
            </li>
            <li>
              <strong className="text-ink-900">Pharmacies own their data.</strong>{' '}
              The Starter tier is free, self-hosted, and ours-to-host is an
              opt-in convenience. We never hold a pharmacy&rsquo;s data hostage to
              a subscription.
            </li>
            <li>
              <strong className="text-ink-900">Specifics over slogans.</strong>{' '}
              You won&rsquo;t see &ldquo;cutting-edge&rdquo;, &ldquo;robust&rdquo;
              or &ldquo;seamlessly&rdquo; on this site. We say 9.7ms p95 because
              we measured 9.7ms p95.
            </li>
          </ul>

          <h2 className="mt-12 text-2xl font-semibold text-ink-900 tracking-tight">
            Where we are
          </h2>
          <p className="mt-4 text-[16px] text-ink-700 leading-relaxed">
            Headquartered in Douala, Cameroon. Piloting with community
            pharmacies in the Littoral region. Building for the rest of West
            and Central Africa, then anywhere else with a network that lies
            about being available.
          </p>
        </Reveal>
      </Container>
    </div>
  );
}
