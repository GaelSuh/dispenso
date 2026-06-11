import type { Config } from 'tailwindcss';

/**
 * Tailwind config — calibrated for an enterprise healthcare SaaS feel.
 *
 * Design system rules (held to like a contract):
 *   - One brand hue (clinical green) + a deep navy neutral. NOT a rainbow.
 *   - One restrained accent (warm amber #C68A2B) for trust callouts only.
 *   - Type ramp uses Inter at one family, varied via weight + tracking.
 *   - Motion durations cluster around 200ms (UI) and 600ms (reveal).
 *   - Radii follow the 4/8/12/16/24 progression; never 7px or 11px.
 */
const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '2.5rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        // Brand — a clinical, trustworthy green derived from #71A22F.
        // Stops tuned in OKLCH for perceptual smoothness (don't recompute
        // by interpolating sRGB; you'll get muddy mids).
        brand: {
          50:  '#f4f8ec',
          100: '#e6efd2',
          200: '#cee0a8',
          300: '#b3cd7c',
          400: '#94b554',
          500: '#71a22f',       // canonical brand
          600: '#5a8324',
          700: '#45661c',
          800: '#324a16',
          900: '#22330f',
          950: '#131e07',
        },

        // Ink — deep navy-tinted neutrals. Avoids the cold sterility of
        // pure greyscale; reads as "intentional" against the green.
        ink: {
          50:  '#f7f8fa',
          100: '#eef0f4',
          200: '#dde1e9',
          300: '#bdc3d0',
          400: '#8a93a6',
          500: '#5d6679',
          600: '#444b5c',
          700: '#323848',
          800: '#1e2233',
          900: '#0f1320',
          950: '#080b16',
        },

        // Paper — warm off-white. Avoids the "white box" look of #ffffff.
        paper: {
          DEFAULT: '#fdfcf9',
          warm:    '#faf7f0',
        },

        // Accent — used ONCE per screen at most, for trust badges /
        // compliance pills. Warm amber so it doesn't fight the brand green.
        accent: {
          50:  '#fcf5e7',
          400: '#d4a04c',
          500: '#c68a2b',
          600: '#a06f1f',
        },
      },

      fontFamily: {
        sans: [
          'InterVariable',
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        display: [
          'InterVariable',
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'monospace',
        ],
      },

      fontSize: {
        // Custom display sizes — tighter line-height + negative letter-spacing
        // for serious editorial feel at large scale.
        'display-2xl': ['4.5rem',  { lineHeight: '1.02', letterSpacing: '-0.035em', fontWeight: '600' }],
        'display-xl':  ['3.5rem',  { lineHeight: '1.04', letterSpacing: '-0.03em',  fontWeight: '600' }],
        'display-lg':  ['2.75rem', { lineHeight: '1.08', letterSpacing: '-0.025em', fontWeight: '600' }],
        'display-md':  ['2.25rem', { lineHeight: '1.12', letterSpacing: '-0.02em',  fontWeight: '600' }],
        'eyebrow':     ['0.75rem', { lineHeight: '1',    letterSpacing: '0.12em',   fontWeight: '600' }],
      },

      borderRadius: {
        sm: '0.375rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },

      boxShadow: {
        // Sharper, more intentional than Tailwind defaults. Mimics the
        // layered shadows used by Linear / Stripe.
        'soft':  '0 1px 2px rgba(15, 19, 32, 0.04), 0 1px 1px rgba(15, 19, 32, 0.03)',
        'card':  '0 4px 16px -4px rgba(15, 19, 32, 0.06), 0 2px 4px -2px rgba(15, 19, 32, 0.05)',
        'lift':  '0 16px 40px -16px rgba(15, 19, 32, 0.18), 0 6px 12px -6px rgba(15, 19, 32, 0.08)',
        'inset-hairline': 'inset 0 0 0 1px rgba(15, 19, 32, 0.08)',
      },

      animation: {
        'fade-up':    'fade-up 0.6s cubic-bezier(0.2,0.65,0.3,0.9) both',
        'fade-in':    'fade-in 0.4s ease-out both',
        'shimmer':    'shimmer 2.4s linear infinite',
        'pulse-soft': 'pulse-soft 2.8s ease-in-out infinite',
        'float':      'float 6s ease-in-out infinite',
        'mesh-drift': 'mesh-drift 18s ease-in-out infinite',
      },

      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'shimmer': {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.5' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-6px)' },
        },
        'mesh-drift': {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%':      { transform: 'translate3d(-2%,-1%,0) scale(1.05)' },
        },
      },

      transitionTimingFunction: {
        // Linear's signature: tight in, soft out. Better than Tailwind's
        // generic ease-in-out for UI interactions.
        'out-expo':   'cubic-bezier(0.16, 1, 0.3, 1)',
        'out-circ':   'cubic-bezier(0.25, 1, 0.5, 1)',
        'spring':     'cubic-bezier(0.2, 0.65, 0.3, 0.9)',
      },

      backgroundImage: {
        // A SUBTLE radial mesh — not the gradient blob soup that
        // every AI-generated landing page ships with.
        'mesh-brand':
          'radial-gradient(at 15% 0%, rgba(113,162,47,0.10) 0px, transparent 50%), ' +
          'radial-gradient(at 85% 20%, rgba(198,138,43,0.06) 0px, transparent 50%), ' +
          'radial-gradient(at 50% 100%, rgba(113,162,47,0.05) 0px, transparent 60%)',

        // Used for the "OS chrome" of dashboard mockups.
        'grid-fade':
          'linear-gradient(to bottom, transparent 0%, rgba(15,19,32,0.04) 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
