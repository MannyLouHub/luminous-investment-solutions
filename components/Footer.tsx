import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-sage-200 dark:border-navy-700 bg-sage dark:bg-navy-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-navy-950 dark:text-beige mb-1">Luminous</p>
            <p className="text-xs tracking-wider uppercase text-navy-500 dark:text-navy-400 mb-3">Investment Solutions</p>
            <p className="text-sm text-navy-600 dark:text-navy-400 leading-relaxed">
              Illuminating the path to financial prosperity through strategic real estate lending and multifamily investing across Pennsylvania.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-wider uppercase text-navy-400 dark:text-navy-500 mb-4">Navigate</p>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/projects', label: 'Projects' },
                { href: '/blog', label: 'Blog' },
                { href: '/team', label: 'Team' },
                { href: '/contact', label: 'Contact' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-navy-600 hover:text-gold-600 dark:text-navy-400 dark:hover:text-burnt transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-wider uppercase text-navy-400 dark:text-navy-500 mb-4">Stay updated</p>
            <p className="text-sm text-navy-600 dark:text-navy-400 mb-3">
              Get market insights and deal updates delivered to your inbox.
            </p>
            <a
              href="https://manage.kmail-lists.com/subscriptions/subscribe?a=SWf6mJ&g=WNDWpH"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-medium px-4 py-2 rounded-lg border border-gold-500 text-gold-600 hover:bg-gold-500 hover:text-white transition-colors dark:text-gold-400 dark:hover:bg-burnt dark:hover:text-navy-950"
            >
              Join newsletter
            </a>
          </div>
        </div>

        <div className="border-t border-sage-200 dark:border-navy-700 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-navy-400 dark:text-navy-600">
            &copy; {new Date().getFullYear()} Luminous Investment Solutions. All rights reserved.
          </p>
          <p className="text-xs text-navy-400 dark:text-navy-600">
            Pennsylvania
          </p>
        </div>
      </div>
    </footer>
  )
}
