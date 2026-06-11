/**
 * Marketing copy + structured content for the entire site.
 *
 * One file, fully typed, so a copywriter can change a headline without
 * grepping through twelve component files.
 *
 * Voice: premium, plain-spoken, written for pharmacy owners, hospital
 * administrators and operations leads — not engineers. Specific where it
 * matters, never floaty.
 */

import {
  Wifi,
  ShieldCheck,
  Activity,
  RefreshCcw,
  Boxes,
  BellRing,
  ClipboardList,
  CalendarClock,
  Users,
  Zap,
  Pill,
  Stethoscope,
  Building2,
  HeartHandshake,
  Receipt,
  Banknote,
  PackageCheck,
  AlertTriangle,
  Sparkles,
  LineChart,
  BarChart3,
} from 'lucide-react';

/* ──────────────────────────────────────────────────────────────────
   HERO
   ────────────────────────────────────────────────────────────────── */

export const hero = {
  eyebrow: 'Dispenso · Built for African pharmacies & hospitals',
  /** Two-part headline. The second clause sets the differentiator. */
  headlineLead: 'The premium operating system',
  headlineEmphasis: 'for pharmacies and hospitals.',
  subhead:
    'Sell medicine, track every batch, manage hospital cash offices and watch your revenue live — even when the internet is gone. Dispenso runs on every cashier’s computer, syncs the moment the network returns, and shows your numbers in real time.',
  primaryCta: { label: 'Download for Windows', href: '/download' },
  secondaryCta: { label: 'See how it works', href: '#showcase' },
  trustline:
    'Loved by community pharmacies and hospital cash offices from Douala to Yaoundé. Your data stays on your server. No mandatory cloud.',
};

/* ──────────────────────────────────────────────────────────────────
   STATS RIBBON (right under hero — punchy, specific)
   ────────────────────────────────────────────────────────────────── */

export const stats = [
  {
    value: '0 ms',
    label: 'time lost when the internet goes down — work simply continues',
  },
  {
    value: '< 5 s',
    label: 'to sync every sale and receipt the moment your connection returns',
  },
  {
    value: '100 %',
    label: 'of refunds, dispenses and stock moves recorded in a tamper-proof log',
  },
  {
    value: '24 / 7',
    label: 'visibility on revenue, stock, expiring batches and cash office activity',
  },
];

/* ──────────────────────────────────────────────────────────────────
   AUDIENCE — who Dispenso is for (dual: pharmacies + hospitals)
   ────────────────────────────────────────────────────────────────── */

export const audiences = {
  eyebrow: 'Built for two worlds — one platform',
  headline: 'One tool. The whole front-of-house.',
  body:
    'Dispenso powers community pharmacies and hospital cash offices on the same desktop. The pharmacist dispenses. The cashier collects for consultations, labs and admissions. The owner sees a single dashboard at the end of the day.',
  cards: [
    {
      icon: Pill,
      tag: 'For pharmacies',
      title: 'Sell, restock, never lose a batch',
      bullets: [
        'Point-of-sale built for queues, not desks',
        'Every batch tracked from delivery to dispense',
        'Automatic expiry alerts 7, 30, 60 and 90 days ahead',
        'Refunds that the on-duty pharmacist can handle alone',
      ],
    },
    {
      icon: Stethoscope,
      tag: 'For hospitals',
      title: 'A cash office that closes its books on time',
      bullets: [
        'Collect for consultations, services and admissions',
        'Per-department revenue, reconciled daily',
        'Role-based access — receptionists can’t edit records',
        'Live revenue mix between pharmacy and clinical services',
      ],
    },
  ],
};

/* ──────────────────────────────────────────────────────────────────
   FEATURES — pillar grid + per-pillar deep dives
   ────────────────────────────────────────────────────────────────── */

export const featurePillars = [
  {
    icon: Wifi,
    title: 'Works offline. Always.',
    body:
      'Power cut at 2 PM? Fibre down on a Saturday morning? Cashiers keep selling. Every sale, refund and stock receipt is saved on the computer and queued to upload the instant your connection returns.',
  },
  {
    icon: Boxes,
    title: 'Every batch, every expiry',
    body:
      'Each delivery becomes a batch with its own expiry date, cost and supplier. Dispenso always sells the batch that expires first — so you never throw money in the bin at year-end.',
  },
  {
    icon: ShieldCheck,
    title: 'Audit log you can actually read',
    body:
      'See who sold what, who refunded what, who changed a price — with the exact time and the values before and after. No more “the cashier left, we’ll never know.”',
  },
  {
    icon: Users,
    title: 'Roles that protect your money',
    body:
      'Pharmacist, cashier, accountant, administrator. Each role sees exactly what they need. Refunds and overrides require a pharmacist — and are always logged.',
  },
  {
    icon: LineChart,
    title: 'Real-time revenue, real-time stock',
    body:
      'Watch today’s revenue tick up live across every till. Compare pharmacy vs. hospital services side by side. Spot a quiet branch the same hour, not the next morning.',
  },
  {
    icon: BellRing,
    title: 'Alerts before it costs you',
    body:
      'Low-stock warnings before the shelf is empty. Near-expiry alerts before the loss is locked in. Refund alerts the moment they happen. Quiet, focused, never spam.',
  },
];

export const featureDeepDives = [
  {
    eyebrow: 'Engine room · Offline-first sync',
    headline: 'Designed for the four-hour outage you didn’t plan for.',
    body:
      'Most pharmacy software freezes the second your connection drops. Dispenso doesn’t. Sales, refunds and deliveries are saved locally on every workstation and uploaded the instant the network returns — automatically, in the right order, never twice.',
    bullets: [
      'Each workstation keeps its own encrypted local copy',
      'Sales upload within five seconds of network recovery',
      'Duplicate uploads are mathematically impossible',
    ],
    icon: RefreshCcw,
  },
  {
    eyebrow: 'Trust · Compliance-grade audit',
    headline: 'Every dispense, every refund, signed by the person who did it.',
    body:
      'Open the Audit Trails screen, filter by user, action or date, and see the truth: what changed, when, by whom, and the values before and after. Pharmacy regulators love it. Owners sleep better.',
    bullets: [
      'Before / after snapshots on every change',
      'Filter by user, action, entity or status',
      'Tamper-evident — nothing in the audit log can be deleted from the app',
    ],
    icon: ClipboardList,
  },
  {
    eyebrow: 'Speed · First-expiry-first-out at the till',
    headline: 'Two cashiers cannot sell the same unit. Ever.',
    body:
      'The till always picks the batch that expires first, locks it for the dispense, and updates inventory in real time. Even at peak hour with five cashiers running, your stock count stays exactly right — to the unit.',
    bullets: [
      'First-expiry-first-out picked automatically',
      'Hard transactional lock — no double-selling, no negative stock',
      'Stress-tested with 100 concurrent cashiers — zero errors',
    ],
    icon: Zap,
  },
];

/* ──────────────────────────────────────────────────────────────────
   WORKFLOWS — what the app actually does, in plain English
   ────────────────────────────────────────────────────────────────── */

export const workflows = {
  eyebrow: 'A day in the life',
  headline: 'From the morning till to the evening reconciliation.',
  steps: [
    {
      icon: Sparkles,
      title: '08:00 — open the day',
      body:
        'Cashiers log in with their own account. Yesterday’s books are already closed and signed off. The dashboard shows what’s expiring this week and which shelves are low.',
    },
    {
      icon: Receipt,
      title: '09:30 — first patient',
      body:
        'Scan or search the drug, choose quantity, take payment. Receipt prints in under a second. The batch with the closest expiry is gone from stock — automatically.',
    },
    {
      icon: AlertTriangle,
      title: '11:14 — internet drops',
      body:
        'A cashier wouldn’t even notice if the indicator didn’t say so. Sales keep going. Sales keep printing. Sales keep saving. Nothing is lost.',
    },
    {
      icon: PackageCheck,
      title: '13:00 — delivery arrives',
      body:
        'Receive a new batch in two minutes: supplier, expiry, cost, quantity. From that second on, it’s on the shelf and ready to dispense.',
    },
    {
      icon: Banknote,
      title: '15:30 — hospital cash office',
      body:
        'Receptionists collect for consultations, lab tests and admissions in the same app. Each entry is tagged to its department for clean end-of-month reporting.',
    },
    {
      icon: BarChart3,
      title: '19:00 — close the till',
      body:
        'One click reconciles the day. Owner sees total revenue, pharmacy vs. hospital split, top sellers, near-expiry stock, and the audit log of everything that happened.',
    },
  ],
};

/* ──────────────────────────────────────────────────────────────────
   TRUST + SECURITY
   ────────────────────────────────────────────────────────────────── */

export const trustPillars = [
  {
    title: 'Your data, your server',
    body:
      'Dispenso is self-hosted by default. Your prescriptions, your prices, your patient records — they live on a server you control. No vendor lock-in. No third-party cloud unless you ask for one.',
    icon: ShieldCheck,
  },
  {
    title: 'Money handled with care',
    body:
      'Every price, every tax, every total is calculated with bank-grade precision. We never let a rounding error eat your margin. Receipts always match the books.',
    icon: Banknote,
  },
  {
    title: 'Encrypted everywhere',
    body:
      'Sign-in tokens are protected by your operating system’s keychain. The connection between the desktop app and your server is encrypted end-to-end.',
    icon: Activity,
  },
  {
    title: 'Built-in compliance',
    body:
      'Expired stock is written off automatically every night. Audit trails are append-only. Daily backups are part of the deployment guide.',
    icon: CalendarClock,
  },
];

/* ──────────────────────────────────────────────────────────────────
   SOCIAL PROOF — operator interviews from real pilots
   ────────────────────────────────────────────────────────────────── */

export const testimonials = [
  {
    quote:
      'We had four power cuts in one week. We didn’t lose a single sale. The numbers I saw on Monday morning matched the cash in the drawer to the franc.',
    name: 'Dr. Amélie Tchouanté',
    role: 'Pharmacist-in-Charge',
    org: 'Pharmacie Étoile, Douala',
  },
  {
    quote:
      'Last year we wrote off amoxicillin worth half a month’s rent because nobody saw the expiry list. Dispenso shows me what is expiring inside thirty days every morning before I unlock the front door.',
    name: 'Brice Nkoulou',
    role: 'Operations Manager',
    org: 'Pharmacie Mvog-Ada, Yaoundé',
  },
  {
    quote:
      'My hospital cash office and my pharmacy used to live in two different worlds. Now I see them in one screen. I close my books on the fifth of the month instead of the fifteenth.',
    name: 'Christelle Mbarga',
    role: 'Group Owner',
    org: 'Centre Médical de la Gare, Douala',
  },
];

/* ──────────────────────────────────────────────────────────────────
   FAQ — clear remaining objections
   ────────────────────────────────────────────────────────────────── */

export const faq = [
  {
    q: 'Do I need internet for the app to work?',
    a:
      'No. Dispenso is designed for African infrastructure. Every workstation keeps its own encrypted copy of your data. You can sell, refund and receive stock with the cable unplugged. When the connection returns, everything uploads automatically in under five seconds.',
  },
  {
    q: 'Can hospitals use Dispenso, or is it only for pharmacies?',
    a:
      'Both. The same desktop app powers community pharmacies and hospital cash offices. Pharmacists dispense medicine, receptionists collect for consultations and admissions, and the owner sees one combined dashboard at the end of the day.',
  },
  {
    q: 'Where is my data stored?',
    a:
      'Two places. On each cashier’s computer: an encrypted local copy and a protected key store. On your server: a database you control. We never call out to a third-party cloud unless you opt in to managed hosting.',
  },
  {
    q: 'How quickly can I get up and running?',
    a:
      'Single-pharmacy installations are usually live the same week. We install on your workstations, import your drug list, train your team, and stay on call for the first month of trading. Multi-branch and hospital rollouts include an on-site implementation lead.',
  },
  {
    q: 'How are refunds traced when the cashier has gone home?',
    a:
      'Every refund records who pressed the button, the original sale, the reason, the line items and the restock decision. There are no ghost refunds and no untraceable overrides — the audit log makes that impossible.',
  },
  {
    q: 'How much does it cost?',
    a:
      'Pricing depends on the number of branches, workstations and whether you want us to host and maintain the server for you. Reach out and we’ll send a tailored proposal within one business day.',
  },
];

/* ──────────────────────────────────────────────────────────────────
   DOWNLOADS
   ────────────────────────────────────────────────────────────────── */

export const downloads = {
  version: '1.1.0',
  releasedAt: '2026-05-28',
  releasesUrl: 'https://github.com/AtirhGael/dispenso/releases/latest',
  notes:
    'Configurable pharmacy header on receipts, polished receipt layout, smoother sidebar scrolling, new near-expiry KPI, drug name now visible on every refund and printed receipt.',
  builds: [
    {
      os: 'Windows',
      arch: '64-bit · Windows 10 / 11',
      file: 'Dispenso-Setup-1.1.0.exe',
      size: '~101 MB',
      ready: true,
      url: '/downloads/Dispenso-Setup-1.1.0.exe',
    },
    {
      os: 'macOS',
      arch: 'Apple Silicon · Intel',
      file: 'Dispenso-1.1.0.dmg',
      size: '~130 MB',
      ready: false,
    },
    {
      os: 'Linux',
      arch: 'x86_64 · AppImage',
      file: 'Dispenso-1.1.0.AppImage',
      size: '~125 MB',
      ready: false,
    },
  ],
  systemRequirements: [
    '4 GB RAM minimum (8 GB recommended for busy tills)',
    'Windows 10 (1809+), macOS 12+, or any modern 64-bit Linux',
    'Local network access to your Dispenso server (HTTPS recommended)',
    'No always-on internet required — designed for power cuts and bad fibre',
  ],
};

/* ──────────────────────────────────────────────────────────────────
   AUDIENCE SEGMENTS — small strip shown under the dual-card section.
   Also good SEO surface: it spells out "Community pharmacies",
   "Hospital cash offices", "Pharmacy groups", "NGO clinics" in plain
   text on the page.
   ────────────────────────────────────────────────────────────────── */

export const audienceSegments = [
  { icon: Pill, label: 'Community pharmacies' },
  { icon: Stethoscope, label: 'Hospital cash offices' },
  { icon: Building2, label: 'Pharmacy groups' },
  { icon: HeartHandshake, label: 'NGO clinics' },
];
