'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ThemeToggle } from './ThemeToggle'

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/team', label: 'Team' },
]

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-sage/90 backdrop-blur border-b border-sage-200 dark:bg-navy-950/90 dark:border-navy-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/images/logo-mark-light.png"
            alt="Luminous Investment Solutions"
            width={36}
            height={36}
            className="dark:hidden"
          />
          <Image
            src="/images/logo-mark-gold.png"
            alt="Luminous Investment Solutions"
            width={36}
            height={36}
            className="hidden dark:block"
          />
          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-widest uppercase text-navy-950 dark:text-beige">Luminous</p>
            <p className="text-[10px] tracking-wider uppercase text-navy-500 dark:text-navy-400">Investment Solutions</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors ${
                pathname === href
                  ? 'text-gold-600 dark:text-gold-400'
                  : 'text-navy-600 hover:text-navy-950 dark:text-navy-300 dark:hover:text-beige'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/contact"
            className="text-sm font-medium px-4 py-2 rounded-lg bg-navy-950 text-white hover:bg-navy-800 transition-colors dark:bg-gold-500 dark:text-navy-950 dark:hover:bg-burnt"
          >
            Invest with us
          </Link>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-sage-200 dark:border-navy-700"
          >
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-sage-200 dark:border-navy-700 bg-sage dark:bg-navy-950 px-4 py-5 flex flex-col items-center gap-5">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-navy-700 dark:text-navy-200 text-center"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="w-full text-sm font-medium px-4 py-2 rounded-lg bg-navy-950 text-white text-center hover:bg-navy-800 transition-colors dark:bg-gold-500 dark:text-navy-950 dark:hover:bg-burnt"
          >
            Invest with us
          </Link>
        </div>
      )}
    </header>
  )
}
