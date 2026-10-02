import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

const title = 'Marcus Vance | 12-Week Apex Physique Program'
const description =
  'Build athletic strength and strip body fat in 12 weeks. Science-backed workout and nutrition programming designed for busy professionals.'

export const metadata: Metadata = {
  title,
  description,
  generator: 'v0.app',
  keywords: [
    'personal trainer',
    'body composition coach',
    'hybrid training',
    '12-week program',
    'fat loss',
    'strength training',
  ],
  authors: [{ name: 'Marcus Vance' }],
  openGraph: {
    title,
    description,
    type: 'website',
    siteName: 'Marcus Vance Coaching',
    locale: 'en_US',
    images: [{ url: '/images/marcus-hero.png', alt: 'Coach Marcus Vance' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/marcus-hero.png'],
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#020617',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark scroll-smooth bg-slate-950 ${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <SpeedInsights />
      </body>
    </html>
  )
}
