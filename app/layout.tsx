import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ScrollReveal } from '@/components/ScrollReveal'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://luminousinvestmentsolutions.com'),
  title: {
    default: 'Luminous Investment Solutions',
    template: '%s | Luminous Investment Solutions',
  },
  description: 'Real estate lending and rental investments across Pennsylvania. Fixed lending returns and operated multifamily deals — your beacon in the investment world.',
  keywords: ['real estate investing', 'real estate lending', 'multifamily', 'Pennsylvania', 'passive income', 'apartment investing'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://luminousinvestmentsolutions.com',
    siteName: 'Luminous Investment Solutions',
    images: [{ url: '/images/logo-mark-gold.png', width: 442, height: 442, alt: 'Luminous Investment Solutions' }],
  },
  twitter: {
    card: 'summary',
    title: 'Luminous Investment Solutions',
    description: 'Real estate lending and rental investments across Pennsylvania. Your beacon in the investment world.',
    images: ['/images/logo-mark-gold.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <ScrollReveal />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
