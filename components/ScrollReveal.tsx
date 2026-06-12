'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    // Defer one frame so freshly-mounted route content is in the DOM before we
    // query it. Re-runs on every pathname change so navigation never leaves
    // already-revealed-once elements stuck hidden.
    const raf = requestAnimationFrame(() => {
      document
        .querySelectorAll('[data-reveal]:not(.is-visible)')
        .forEach((el) => observer.observe(el))
    })

    return () => {
      cancelAnimationFrame(raf)
      observer.disconnect()
    }
  }, [pathname])

  return null
}
