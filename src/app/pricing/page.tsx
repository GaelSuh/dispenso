import { redirect } from 'next/navigation';

// Pricing is now bespoke. Anyone landing on /pricing should reach the
// contact form pre-filled for a tailored quote.
export default function PricingRedirect() {
  redirect('/contact?subject=pricing');
}
