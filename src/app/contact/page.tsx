'use client';

import * as React from 'react';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/motion/reveal';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Send, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Contact — a single form, no spam. We don't ship a "Choose a department"
 * picker because we don't have departments. The form posts to a backend
 * route (placeholder) and shows a success state in place.
 *
 * No metadata export here because this is a client component — Next 15
 * supports that but eslint warns; we set metadata via parent layout if needed.
 */
export default function ContactPage() {
  const [submitted, setSubmitted] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    const formData = new FormData(e.currentTarget);
    try {
      // Endpoint will live on the backend once we expose it; for now we
      // just simulate the network round-trip so the UX can be reviewed.
      // Replace with: await fetch('/api/v1/contact', { method: 'POST', body: formData })
      await new Promise((r) => setTimeout(r, 700));
      const _payload = Object.fromEntries(formData.entries());
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="pt-28 lg:pt-36 pb-20">
      <Container className="grid lg:grid-cols-12 gap-12">
        {/* Left column — context */}
        <div className="lg:col-span-5">
          <Reveal>
            <Badge tone="ink" dot>Get in touch</Badge>
            <h1 className="mt-4 text-display-lg text-ink-900">
              Talk to a human.
            </h1>
            <p className="mt-5 text-lg text-ink-600 leading-relaxed max-w-md">
              We&rsquo;re a small team in Douala. You won&rsquo;t reach a chatbot or a
              first-line ticket triager. Expect a reply within one business day.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-12 space-y-6 text-[14.5px] text-ink-700">
            <div>
              <div className="text-eyebrow uppercase text-ink-500">Email</div>
              <a
                className="mt-1 inline-block font-medium text-ink-900 underline-offset-4 hover:underline"
                href="mailto:hello@getdispenso.com"
              >
                hello@getdispenso.com
              </a>
            </div>
            <div>
              <div className="text-eyebrow uppercase text-ink-500">Sales</div>
              <a
                className="mt-1 inline-block font-medium text-ink-900 underline-offset-4 hover:underline"
                href="mailto:sales@getdispenso.com"
              >
sales@getdispenso.com
              </a>
            </div>
            <div>
              <div className="text-eyebrow uppercase text-ink-500">Security disclosures</div>
              <a
                className="mt-1 inline-block font-medium text-ink-900 underline-offset-4 hover:underline"
                href="mailto:security@getdispenso.com"
              >
security@getdispenso.com
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right column — form */}
        <div className="lg:col-span-7">
          <Reveal>
            <div className="card p-8 md:p-10">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="h-10 w-10 text-brand-500 mx-auto" />
                  <h2 className="mt-5 text-2xl font-semibold tracking-tight text-ink-900">
                    Got it — we&rsquo;ll reply within a day.
                  </h2>
                  <p className="mt-3 text-[15px] text-ink-600 max-w-md mx-auto leading-relaxed">
                    A real person reads every message. If it&rsquo;s urgent, write to{' '}
                    <a className="text-ink-900 underline-offset-4 hover:underline" href="mailto:hello@getdispenso.com">
                      hello@getdispenso.com
                    </a>{' '}
                    so it surfaces faster than a contact form.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field name="name"        label="Name"        required />
                    <Field name="email" type="email" label="Email" required />
                  </div>
                  <Field name="pharmacy" label="Pharmacy / organisation" />
                  <Field name="role"     label="Your role"  placeholder="Pharmacist, Owner, IT Lead…" />
                  <TextArea name="message" label="What's on your mind?" rows={5} required />

                  {error && (
                    <div className="text-sm text-destructive bg-red-50 border border-red-200 rounded-md p-3">
                      {error}
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    variant="primary"
                    iconRight={<Send className="h-4 w-4" />}
                    className="w-full sm:w-auto"
                    disabled={submitting}
                  >
                    {submitting ? 'Sending…' : 'Send message'}
                  </Button>

                  <p className="text-[11px] text-ink-500 leading-relaxed">
                    We use your details only to reply. No marketing emails, no
                    third-party tracking, no list rental — ever.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </div>
  );
}

/* ─── form primitives (local — these only appear here) ─────────── */

function Field({
  name,
  label,
  type = 'text',
  required,
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-[13px] font-medium text-ink-700 mb-1.5">
        {label}
        {required && <span className="text-brand-700 ml-1">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={cn(
          'w-full h-11 px-3.5 rounded-lg bg-white ring-1 ring-ink-200 text-[14px]',
          'placeholder:text-ink-400 text-ink-900',
          'focus:outline-none focus:ring-2 focus:ring-ink-900',
          'transition-all',
        )}
      />
    </div>
  );
}

function TextArea({
  name,
  label,
  required,
  rows = 4,
}: {
  name: string;
  label: string;
  required?: boolean;
  rows?: number;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-[13px] font-medium text-ink-700 mb-1.5">
        {label}
        {required && <span className="text-brand-700 ml-1">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        required={required}
        className={cn(
          'w-full px-3.5 py-2.5 rounded-lg bg-white ring-1 ring-ink-200 text-[14px]',
          'placeholder:text-ink-400 text-ink-900 resize-none',
          'focus:outline-none focus:ring-2 focus:ring-ink-900',
          'transition-all',
        )}
      />
    </div>
  );
}
