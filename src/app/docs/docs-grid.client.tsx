'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Rocket,
  ShoppingCart,
  Boxes,
  Receipt,
  Wifi,
  ShieldCheck,
  Users,
  CloudDownload,
  Settings,
  ArrowRight,
} from 'lucide-react';
import { RevealStagger, childRiseVariants } from '@/components/motion/reveal';

/**
 * Client island for the docs landing grid. Animations live here so the
 * page wrapping component can stay a Server Component and export metadata.
 */

const SECTIONS = [
  { icon: Rocket,        title: 'Getting started',        body: 'Install the desktop app, point it at your backend, log in for the first time.', href: '/docs/getting-started' },
  { icon: ShoppingCart,  title: 'POS & dispensing',       body: 'How FEFO picks the right batch, refund flows, prescription handling.',           href: '/docs/pos' },
  { icon: Boxes,         title: 'Inventory & batches',    body: 'Create drugs, receive stock, track expiry, reconcile the cache.',                href: '/docs/inventory' },
  { icon: Receipt,       title: 'Refunds',                body: 'When refunds need approval, how restock decisions affect FEFO, audit trail.',     href: '/docs/refunds' },
  { icon: Wifi,          title: 'Offline sync',           body: 'How the outbox works, sync intervals, conflict resolution, manual nudge.',         href: '/docs/sync' },
  { icon: ShieldCheck,   title: 'Security model',         body: 'JWT lifecycle, RBAC permissions, encrypted local storage, audit log integrity.',  href: '/docs/security' },
  { icon: Users,         title: 'User management',        body: 'Roles, permissions matrix, creating users, transferring ownership.',              href: '/docs/users' },
  { icon: CloudDownload, title: 'Self-host deployment',   body: 'Ubuntu setup, Postgres, Caddy + TLS, PM2 process supervision, backups.',          href: '/docs/deployment' },
  { icon: Settings,      title: 'Configuration',          body: 'Environment variables, email providers, app-version channel, retention.',         href: '/docs/configuration' },
];

export function DocsGrid() {
  return (
    <RevealStagger className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {SECTIONS.map((s) => (
        <motion.div key={s.title} variants={childRiseVariants}>
          <Link
            href={s.href}
            className="block card p-6 group hover:shadow-lift hover:-translate-y-0.5 transition-all duration-300 ease-out-expo"
          >
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-700 ring-1 ring-brand-200/60">
              <s.icon className="h-4 w-4" />
            </div>
            <h2 className="mt-4 text-[15px] font-semibold text-ink-900 tracking-tight">
              {s.title}
            </h2>
            <p className="mt-1.5 text-[13.5px] text-ink-600 leading-relaxed">
              {s.body}
            </p>
            <div className="mt-4 flex items-center gap-1.5 text-[12px] font-medium text-brand-700 group-hover:gap-2 transition-all">
              Read <ArrowRight className="h-3 w-3" />
            </div>
          </Link>
        </motion.div>
      ))}
    </RevealStagger>
  );
}
