import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'rose-gold': 'var(--rose-gold)',
        'rose-deep': 'var(--rose-deep)',
        'rose-glow': 'var(--rose-glow)',
        'gold': 'var(--gold)',
        'gold-light': 'var(--gold-light)',
        'cream': 'var(--cream)',
        'cream-deep': 'var(--cream-deep)',
        'teal': 'var(--teal)',
        'teal-deep': 'var(--teal-deep)',
        'teal-mid': 'var(--teal-mid)',
        'teal-light': 'var(--teal-light)',
        'teal-glow': 'var(--teal-glow)',
        'off-white': 'var(--off-white)',
        'charcoal': 'var(--charcoal)',
        'mid': 'var(--mid)',
        'muted': 'var(--muted)',
      },
    },
  },
  plugins: [],
};
export default config;
