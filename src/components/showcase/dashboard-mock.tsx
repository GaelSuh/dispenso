'use client';

import { motion } from 'framer-motion';
import {
  Pill,
  Receipt,
  TrendingUp,
  Wifi,
  Search,
  ShoppingCart,
  LayoutDashboard,
  Boxes,
  BarChart3,
  Bell,
  Settings,
  ClipboardList,
} from 'lucide-react';

/**
 * DashboardMock — the "operational truth" centerpiece of the hero.
 *
 * Why we hand-build the mockup instead of using a screenshot:
 *   - It scales perfectly at every viewport, no PNG blur
 *   - It animates (sales bars pulse, sync chip breathes)
 *   - It costs zero bytes for media
 *   - It feels CRAFTED, not stock — the #1 stop-slop principle
 *
 * The chrome (top traffic-lights + sidebar) signals "desktop app", not
 * "web app", which is the entire product differentiator.
 */
export function DashboardMock() {
  return (
    <div className="relative">
      {/* Floating "Sync engine" callout — left side, lifts the eye from the chrome */}
      <FloatingChip
        className="hidden lg:flex absolute -left-6 top-20 z-20"
        delay={1.0}
      >
        <Wifi className="h-3.5 w-3.5 text-brand-500" />
        <span className="text-[11px] font-medium text-ink-700">
          Sync engine · last push 4s ago
        </span>
      </FloatingChip>

      {/* Floating "FEFO dispense" callout — right side */}
      <FloatingChip
        className="hidden lg:flex absolute -right-4 bottom-32 z-20"
        delay={1.4}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-brand-500 animate-pulse-soft" />
        <span className="text-[11px] font-medium text-ink-700">
          FEFO batch picked · LOT-2026-031
        </span>
      </FloatingChip>

      {/* Window chrome */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9], delay: 0.3 }}
        className="relative overflow-hidden rounded-2xl bg-white shadow-lift ring-1 ring-ink-200/70"
      >
        {/* Title bar */}
        <div className="flex items-center justify-between px-4 h-9 border-b border-ink-100 bg-paper">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="text-[11px] font-medium text-ink-500 tracking-tight">
            Dispenso — Douala
          </div>
          <div className="h-3 w-3" />
        </div>

        {/* App body */}
        <div className="grid grid-cols-[180px_1fr] min-h-[440px] sm:min-h-[480px]">
          {/* Sidebar */}
          <aside className="bg-ink-950 text-ink-300 px-3 py-4 flex flex-col gap-0.5">
            <SidebarItem icon={LayoutDashboard} label="Dashboard" active />
            <SidebarItem icon={Pill} label="Inventory" />
            <SidebarItem icon={ShoppingCart} label="Dispensing" />
            <SidebarItem icon={Receipt} label="Sales & Refunds" />
            <SidebarItem icon={Boxes} label="Receive Stock" />
            <SidebarItem icon={BarChart3} label="Reports" />
            <SidebarItem icon={ClipboardList} label="Audit Trails" />
            <div className="mt-auto pt-4 border-t border-ink-800/80">
              <SidebarItem icon={Settings} label="Settings" />
            </div>
          </aside>

          {/* Content */}
          <div className="px-5 py-4 bg-paper-warm">
            {/* Top toolbar */}
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[11px] uppercase tracking-wider font-semibold text-brand-700">
                  Dashboard
                </div>
                <div className="text-[15px] font-semibold text-ink-900 tracking-tight">
                  Tuesday, 14 May
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="hidden sm:flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-white ring-1 ring-ink-200">
                  <Search className="h-3 w-3 text-ink-400" />
                  <span className="text-[11px] text-ink-400">Search drugs…</span>
                </div>
                <div className="relative">
                  <Bell className="h-4 w-4 text-ink-500" />
                  <span className="absolute -top-0.5 -right-1 h-1.5 w-1.5 rounded-full bg-accent-500" />
                </div>
              </div>
            </div>

            {/* KPI cards */}
            <div className="mt-4 grid grid-cols-3 gap-2.5">
              <KpiCard label="Today's revenue" value="₣ 487 200" delta="+12%" />
              <KpiCard label="Dispenses" value="63" delta="+8%" />
              <KpiCard label="On-hand units" value="14,802" delta="" />
            </div>

            {/* Sales bars chart */}
            <div className="mt-4 rounded-lg bg-white ring-1 ring-ink-100 p-3.5">
              <div className="flex items-center justify-between mb-3">
                <div className="text-[11px] font-semibold text-ink-700">Daily revenue · last 7 days</div>
                <div className="flex items-center gap-1 text-[10px] text-brand-700 font-medium">
                  <TrendingUp className="h-3 w-3" />
                  +18% week-over-week
                </div>
              </div>
              <div className="flex items-end gap-1.5 h-20">
                {[34, 52, 41, 68, 57, 73, 88].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9], delay: 0.6 + i * 0.05 }}
                    className="flex-1 rounded-sm bg-brand-500/85"
                    style={{ originY: 1 }}
                  />
                ))}
              </div>
              <div className="mt-2 grid grid-cols-7 gap-1.5 text-[9px] text-ink-400 text-center">
                {['Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue'].map((d) => (
                  <span key={d}>{d}</span>
                ))}
              </div>
            </div>

            {/* Bottom: alerts row */}
            <div className="mt-3 grid grid-cols-2 gap-2.5">
              <AlertCard
                accent="amber"
                heading="3 batches expire in 14 days"
                detail="LOT-2026-014 · Amoxicillin · 240 units"
              />
              <AlertCard
                accent="brand"
                heading="2 stock receipts pending sync"
                detail="Auto-pushes when network returns"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ─── subcomponents ─────────────────────────────────────────────── */

function SidebarItem({
  icon: Icon,
  label,
  active,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  active?: boolean;
}) {
  return (
    <div
      className={
        active
          ? 'flex items-center gap-2 rounded-md px-2.5 py-1.5 text-[12px] font-medium bg-ink-800 text-white'
          : 'flex items-center gap-2 rounded-md px-2.5 py-1.5 text-[12px] text-ink-400'
      }
    >
      <Icon className="h-3.5 w-3.5" />
      {label}
    </div>
  );
}

function KpiCard({ label, value, delta }: { label: string; value: string; delta: string }) {
  return (
    <div className="rounded-lg bg-white ring-1 ring-ink-100 px-3 py-2.5">
      <div className="text-[10px] font-medium text-ink-500">{label}</div>
      <div className="text-base font-semibold text-ink-900 mt-0.5 num">{value}</div>
      {delta ? (
        <div className="text-[10px] font-medium text-brand-700 mt-0.5">{delta}</div>
      ) : (
        <div className="text-[10px] font-medium text-ink-400 mt-0.5">stable</div>
      )}
    </div>
  );
}

function AlertCard({
  accent,
  heading,
  detail,
}: {
  accent: 'amber' | 'brand';
  heading: string;
  detail: string;
}) {
  const dotClass = accent === 'amber' ? 'bg-accent-500' : 'bg-brand-500';
  return (
    <div className="rounded-lg bg-white ring-1 ring-ink-100 px-3 py-2.5">
      <div className="flex items-center gap-1.5 text-[11px] font-medium text-ink-800">
        <span className={`h-1.5 w-1.5 rounded-full ${dotClass}`} />
        {heading}
      </div>
      <div className="text-[10px] text-ink-500 mt-1">{detail}</div>
    </div>
  );
}

function FloatingChip({
  children,
  className,
  delay,
}: {
  children: React.ReactNode;
  className?: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9], delay }}
      className={`flex items-center gap-2 rounded-full bg-white px-3 py-1.5 shadow-card ring-1 ring-ink-200/70 animate-float ${className ?? ''}`}
    >
      {children}
    </motion.div>
  );
}
