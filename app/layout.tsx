import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ScrollReveal } from '@/components/ScrollReveal'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Luminous Investment Solutions',
    template: '%s | Luminous Investment Solutions',
  },
  description: 'Strategic multifamily real estate investing in Pittsburgh. Your beacon in the investment world.',
  keywords: ['real estate investing', 'multifamily', 'Pittsburgh', 'passive income', 'apartment investing'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://luminousinvestmentsolutions.com',
    siteName: 'Luminous Investment Solutions',
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
