import { DM_Sans, Cormorant_Garamond, Dancing_Script } from 'next/font/google';
import CustomCursor from '@/components/CustomCursor';
import './globals.css';
import './hero-styles.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700'],
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['300', '400', '500', '600', '700'],
});

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-script',
  weight: ['500', '700'],
});

export const metadata = {
  title: 'Revive IV Hydration | Wellness Delivered',
  description: 'Premium mobile IV therapy serving GTA and surrounding areas. Physician-formulated drips delivered to your door.',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${cormorant.variable} ${dancingScript.variable}`}>
      <body className="bg-[#081818] overflow-x-hidden">
        <div className="grain-overlay" aria-hidden="true" />
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
