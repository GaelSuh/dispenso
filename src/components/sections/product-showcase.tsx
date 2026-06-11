'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/motion/reveal';
import { featureDeepDives } from '@/lib/content';

/**
 * ProductShowcase — three alternating-side rows, one per major feature.
 *
 * Each row pairs prose with a "data card" that visually represents the
 * feature: a sync log, an audit table, a FEFO lock indicator. These are
 * intentionally simple — they exist to anchor the eye, not to confuse.
 *
 * Pattern: row N is reversed-on-large from row N+1. This is the Stripe-
 * style alternating layout that maintains reading rhythm without turning
 * into the "feature/screenshot zipper" you see on Notion knock-offs.
 */
export function ProductShowcase() {
  return (
    <section id="showcase" className="section relative bg-ink-950 text-ink-200 overflow-hidden">
      {/* Background grid, soft & masked to keep the section readable */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] mask-radial"
        style={{
          backgroundImage:
            'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <Container className="relative">
        <Reveal className="max-w-2xl">
          <span className="text-eyebrow uppercase text-brand-400 inline-flex items-center gap-2 before:content-[''] before:h-px before:w-6 before:bg-brand-400">
            Inside the product
          </span>
          <h2 className="mt-4 text-display-md text-white">
            The architecture you&rsquo;d build if you had the time.
          </h2>
          <p className="mt-5 text-lg text-ink-400 leading-relaxed max-w-xl">
            Three engineering decisions that show up in your daily margin: an
            offline-first sync engine, an append-only audit log, and FEFO
            dispensing under hard transactional locks.
          </p>
        </Reveal>

        <div className="mt-14 sm:mt-20 space-y-16 sm:space-y-24 lg:space-y-32">
          {featureDeepDives.map((row, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={row.eyebrow}
                className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  reversed ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                {/* Copy side */}
                <Reveal className="lg:col-span-5">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/10 text-brand-400 ring-1 ring-brand-400/30">
                    <row.icon className="h-5 w-5" />
                  </div>
                  <div className="mt-5 text-eyebrow uppercase text-brand-400">{row.eyebrow}</div>
                  <h3 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-white leading-tight">
                    {row.headline}
                  </h3>
                  <p className="mt-4 text-[16px] leading-relaxed text-ink-400">{row.body}</p>
                  <ul className="mt-6 space-y-2.5">
                    {row.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-ink-300">
                        <Check className="h-4 w-4 text-brand-400 mt-0.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>

                {/* Visual side — switches per row */}
                <Reveal className="lg:col-span-7" delay={0.1}>
                  {i === 0 ? <SyncLogVisual /> : i === 1 ? <AuditLogVisual /> : <FefoLockVisual />}
                </Reveal>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

/* ─── visuals ────────────────────────────────────────────────────── */

function SyncLogVisual() {
  const entries = [
    { t: '14:02:17', op: 'PUSH', entity: 'sale',        id: 'INV-2026-3204', ok: true },
    { t: '14:02:17', op: 'PUSH', entity: 'sale',        id: 'INV-2026-3205', ok: true },
    { t: '14:02:17', op: 'PUSH', entity: 'refund',      id: 'RF-2026-088',   ok: true },
    { t: '14:02:14', op: 'OFFLINE', entity: 'queued',   id: '3 ops',          ok: null },
    { t: '13:58:02', op: 'PULL', entity: 'drug',        id: '+ 12 rows',     ok: true },
    { t: '13:58:02', op: 'PULL', entity: 'batches',     id: '+ 5 rows',      ok: true },
  ];
  return (
    <div className="rounded-2xl bg-ink-900 ring-1 ring-ink-800 shadow-lift overflow-hidden">
      <div className="flex items-center justify-between px-4 h-9 border-b border-ink-800 bg-ink-950">
        <div className="text-[11px] font-mono text-ink-500">~ dispenso / sync-engine</div>
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-soft" />
          <span className="text-[11px] font-medium text-emerald-300">connected</span>
        </div>
      </div>
      <div className="p-4 space-y-1.5 font-mono text-[11px]">
        {entries.map((e, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="flex items-center gap-3"
          >
            <span className="text-ink-500">{e.t}</span>
            <span
              className={
                e.op === 'PUSH'
                  ? 'text-brand-400'
                  : e.op === 'PULL'
                    ? 'text-sky-300'
                    : 'text-amber-300'
              }
            >
              {e.op.padEnd(7)}
            </span>
            <span className="text-ink-300">{e.entity.padEnd(10)}</span>
            <span className="text-ink-400">{e.id}</span>
            {e.ok === true && <span className="ml-auto text-emerald-400">ok</span>}
            {e.ok === null && <span className="ml-auto text-amber-400">queued</span>}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function AuditLogVisual() {
  const rows = [
    { when: '14:02', actor: 'm.tchouante', action: 'sale.refunded',     entity: 'INV-2026-3198', tone: 'amber' as const },
    { when: '14:01', actor: 'a.nkoulou',   action: 'stock.received',    entity: 'LOT-2026-031',  tone: 'brand' as const },
    { when: '14:00', actor: 'm.tchouante', action: 'drug.updated',      entity: 'Amoxicillin',   tone: 'ink'   as const },
    { when: '13:58', actor: 'admin',       action: 'role.assigned',     entity: 'cashier',       tone: 'ink'   as const },
    { when: '13:55', actor: 'a.nkoulou',   action: 'drug.created',      entity: 'Paracetamol',   tone: 'brand' as const },
    { when: '13:42', actor: 'c.mbarga',    action: 'user.login',        entity: 'desktop',       tone: 'ink'   as const },
  ];
  return (
    <div className="rounded-2xl bg-white text-ink-900 shadow-lift ring-1 ring-ink-200 overflow-hidden">
      <div className="flex items-center justify-between px-5 h-11 border-b border-ink-100">
        <div className="text-[12px] font-semibold tracking-tight">Audit trails · admin</div>
        <div className="text-[11px] text-ink-500">last 2 hours</div>
      </div>
      <table className="w-full text-[12.5px]">
        <thead className="bg-ink-50/60 text-[10px] font-semibold uppercase text-ink-500 tracking-wider">
          <tr>
            <th className="text-left px-4 py-2 font-semibold">Time</th>
            <th className="text-left px-4 py-2 font-semibold">Actor</th>
            <th className="text-left px-4 py-2 font-semibold">Action</th>
            <th className="text-left px-4 py-2 font-semibold">Entity</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, idx) => (
            <motion.tr
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="border-t border-ink-100"
            >
              <td className="px-4 py-2.5 font-mono text-ink-500 text-[11px]">{r.when}</td>
              <td className="px-4 py-2.5 font-mono text-ink-700 text-[11px]">{r.actor}</td>
              <td className="px-4 py-2.5">
                <span
                  className={
                    r.tone === 'brand'
                      ? 'pill bg-brand-50 text-brand-700 ring-brand-200 text-[10.5px]'
                      : r.tone === 'amber'
                        ? 'pill bg-amber-50 text-amber-800 ring-amber-200 text-[10.5px]'
                        : 'pill bg-ink-50 text-ink-700 ring-ink-200 text-[10.5px]'
                  }
                >
                  {r.action}
                </span>
              </td>
              <td className="px-4 py-2.5 text-ink-700">{r.entity}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FefoLockVisual() {
  return (
    <div className="rounded-2xl bg-white text-ink-900 shadow-lift ring-1 ring-ink-200 overflow-hidden">
      <div className="flex items-center justify-between px-5 h-11 border-b border-ink-100">
        <div className="text-[12px] font-semibold tracking-tight">Dispense — Amoxicillin 500mg × 3</div>
        <span className="pill bg-emerald-50 text-emerald-700 ring-emerald-200 text-[10.5px]">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          batch lock acquired
        </span>
      </div>
      <div className="p-5 space-y-3">
        {[
          { lot: 'LOT-2026-014', exp: '14 May 2027', qty: 3, picked: true,  remaining: 237 },
          { lot: 'LOT-2026-019', exp: '08 Aug 2027', qty: 0, picked: false, remaining: 480 },
          { lot: 'LOT-2026-027', exp: '21 Dec 2027', qty: 0, picked: false, remaining: 600 },
        ].map((b) => (
          <div
            key={b.lot}
            className={
              b.picked
                ? 'flex items-center justify-between rounded-lg ring-2 ring-brand-500/60 bg-brand-50/40 px-4 py-3'
                : 'flex items-center justify-between rounded-lg ring-1 ring-ink-200 bg-ink-50/30 px-4 py-3'
            }
          >
            <div>
              <div className="text-[13px] font-mono font-medium text-ink-800">{b.lot}</div>
              <div className="text-[11px] text-ink-500 mt-0.5">expires {b.exp} · remaining {b.remaining}</div>
            </div>
            {b.picked ? (
              <div className="text-right">
                <div className="text-[10px] uppercase tracking-wider font-semibold text-brand-700">FEFO pick</div>
                <div className="text-[14px] font-semibold text-ink-900">−{b.qty} units</div>
              </div>
            ) : (
              <div className="text-[10.5px] text-ink-400">waits in queue</div>
            )}
          </div>
        ))}
        <div className="pt-2 mt-1 text-[11px] text-ink-500 leading-relaxed">
          Pessimistic <code className="font-mono bg-ink-50 px-1 py-0.5 rounded text-ink-700 text-[10px]">SELECT … FOR UPDATE</code> on the chosen batch. Concurrent dispenses can never double-spend the same unit.
        </div>
      </div>
    </div>
  );
}
