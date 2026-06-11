import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/motion/reveal';
import { Badge } from '@/components/ui/badge';
import { Download, FileCheck, ShieldCheck, Cpu, ArrowRight } from 'lucide-react';
import { downloads } from '@/lib/content';

/**
 * Downloads — the conversion section. Three platform cards with clear
 * primary action. Each card declares its readiness honestly: only
 * Windows is shipping today, the others are "coming". Lying about
 * availability is the fastest way to lose trust.
 */
export function Downloads() {
  return (
    <section id="download" className="section relative">
      <Container>
        <Reveal className="max-w-3xl">
          <span className="eyebrow">Download</span>
          <h2 className="mt-4 text-display-md text-ink-900">
            Install on every workstation. Auto-updates handle the rest.
          </h2>
          <p className="mt-5 text-lg text-ink-600 leading-relaxed">
            Version <span className="font-mono">{downloads.version}</span> · released{' '}
            <time>{downloads.releasedAt}</time>. The desktop app checks the backend
            every 10 minutes and prompts users to update when a newer build is
            available.
          </p>
        </Reveal>

        {/* Platform cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          {downloads.builds.map((build) => (
            <article
              key={build.os}
              className="card p-6 flex flex-col hover:shadow-lift transition-shadow duration-300"
            >
              <div className="flex items-start justify-between">
                <PlatformGlyph os={build.os} />
                {build.ready ? (
                  <Badge tone="success" dot>Ready</Badge>
                ) : (
                  <Badge tone="ink">Coming</Badge>
                )}
              </div>

              <h3 className="mt-5 text-xl font-semibold text-ink-900 tracking-tight">
                {build.os}
              </h3>
              <div className="mt-1 text-sm text-ink-500">{build.arch}</div>
              <div className="mt-1 text-xs text-ink-400 font-mono truncate">
                {build.file} · {build.size}
              </div>

              <div className="mt-6">
                {build.ready ? (
                  <Button
                    href={'url' in build ? build.url! : downloads.releasesUrl}
                    external={'url' in build ? false : true}
                    size="md"
                    variant="primary"
                    iconLeft={<Download className="h-4 w-4" />}
                    className="w-full"
                  >
                    Download {build.os}
                  </Button>
                ) : (
                  <Button
                    href="/contact?subject=notify-builds"
                    size="md"
                    variant="ghost"
                    className="w-full"
                    iconRight={<ArrowRight className="h-4 w-4" />}
                  >
                    Notify me
                  </Button>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* System requirements + release notes — split panel */}
        <div className="mt-16 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 card p-6 sm:p-7">
            <div className="flex items-center gap-2 text-eyebrow uppercase text-ink-500">
              <Cpu className="h-3.5 w-3.5" />
              System requirements
            </div>
            <ul className="mt-5 space-y-3">
              {downloads.systemRequirements.map((r) => (
                <li key={r} className="flex items-start gap-2.5 text-[14px] text-ink-700 leading-relaxed">
                  <span className="mt-2 h-1 w-1 rounded-full bg-brand-500 shrink-0" />
                  {r}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7 card p-6 sm:p-7 bg-ink-950 text-ink-200 ring-ink-800">
            <div className="flex items-center gap-2 text-eyebrow uppercase text-brand-400">
              <FileCheck className="h-3.5 w-3.5" />
              Release notes — v{downloads.version}
            </div>
            <p className="mt-5 text-[14.5px] text-ink-300 leading-relaxed">
              {downloads.notes}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button
                href={downloads.releasesUrl}
                external
                size="sm"
                variant="secondary"
                iconRight={<ArrowRight className="h-4 w-4" />}
              >
                View all releases
              </Button>
              <span className="inline-flex items-center gap-2 text-xs text-ink-500">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                Code-signed on Windows · SHA-256 published per artifact
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ── platform glyphs ─────────────────────────────────────────────── */

function PlatformGlyph({ os }: { os: string }) {
  if (os === 'Windows') {
    return (
      <svg viewBox="0 0 24 24" className="h-7 w-7 text-ink-900" aria-hidden>
        <path
          fill="currentColor"
          d="M3 4.5L11 3.4v8.1H3V4.5zm0 15L11 20.6v-8.1H3v7zm9 1.2L21 22V12.5h-9v8.2zm0-17.5V11.5h9V2L12 3.2z"
        />
      </svg>
    );
  }
  if (os === 'macOS') {
    return (
      <svg viewBox="0 0 24 24" className="h-7 w-7 text-ink-900" aria-hidden>
        <path
          fill="currentColor"
          d="M16.4 12.5c0-2.6 2.1-3.8 2.2-3.9-1.2-1.7-3-1.95-3.7-2-1.6-.16-3.1.9-3.9.9-.8 0-2-.88-3.4-.85-1.7.03-3.3.99-4.2 2.5-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.95 2.6 3.3 2.55 1.3-.05 1.8-.85 3.4-.85 1.6 0 2 .85 3.4.82 1.4-.03 2.3-1.25 3.1-2.46.94-1.36 1.34-2.7 1.36-2.78-.03-.02-2.6-1-2.66-3.94zM13.9 4.1c.7-.85 1.2-2.05 1.05-3.2-1.05.04-2.3.7-3.05 1.55-.66.76-1.25 1.97-1.1 3.13 1.17.07 2.4-.6 3.1-1.48z"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 text-ink-900" aria-hidden>
      <path
        fill="currentColor"
        d="M12.4 2c-2 0-3.4 1.4-3.4 3.5 0 .8.1 1.6.4 2.3-2.7 1.4-4 3.7-4 6.7 0 .6 0 1.2.1 1.7-.3.2-.6.4-.8.7-.7.8-.7 2 .1 2.7.4.3.9.4 1.4.4.7.7 1.6 1.2 2.7 1.5 1 .2 2 .2 3 0 2 .5 4-.1 5.6-1.5.5 0 1-.1 1.4-.4.8-.6.8-1.9.1-2.7-.2-.3-.5-.5-.8-.7v-1.7c0-3-1.3-5.3-4-6.7.3-.7.4-1.5.4-2.3C15.7 3.4 14.3 2 12.4 2zm-.5 4c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7zm1 0c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7z"
      />
    </svg>
  );
}
