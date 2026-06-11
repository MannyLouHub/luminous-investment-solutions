import Link from 'next/link'
import { getAllPosts } from '@/lib/mdx'

const stats = [
  { value: '233+', label: 'Units under management' },
  { value: '23.5%', label: 'Projected IRR' },
  { value: '95.4%', label: 'Pittsburgh occupancy rate' },
  { value: '$242K', label: 'Pittsburgh median home price' },
]

const pillars = [
  {
    title: 'Dedicated to real estate',
    body: 'We focus exclusively on multifamily residential properties in Pittsburgh — the only major U.S. metro where it\'s cheaper to buy than rent, creating durable rental demand.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/></svg>
    ),
  },
  {
    title: 'Expert guidance',
    body: 'We partner with proven operators including Nighthawk Equity and Navigator Wealth Fund to bring institutional-grade strategy to every deal we underwrite.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"/></svg>
    ),
  },
  {
    title: 'Trust & transparency',
    body: 'Every investor relationship is built on clear communication, honest underwriting, and regular reporting. You will always know exactly where your capital is and how it\'s performing.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/></svg>
    ),
  },
]

export default function Home() {
  const posts = getAllPosts().slice(0, 3)

  return (
    <>
      <section className="relative overflow-hidden bg-white dark:bg-navy-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-36">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600 dark:text-gold-400 mb-4">
              Pittsburgh multifamily investing
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-navy-950 dark:text-white leading-tight mb-6">
              Your beacon in<br className="hidden sm:block" /> the investment world
            </h1>
            <p className="text-lg text-navy-600 dark:text-navy-300 leading-relaxed mb-10 max-w-xl">
              We identify, acquire, and manage income-producing apartment buildings in Pittsburgh&apos;s strongest submarkets — connecting investors to real returns backed by real research.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-navy-950 text-white font-medium hover:bg-navy-800 transition-colors dark:bg-gold-500 dark:text-navy-950 dark:hover:bg-gold-400"
              >
                Invest with us
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-navy-200 text-navy-700 font-medium hover:border-navy-400 transition-colors dark:border-navy-700 dark:text-navy-300 dark:hover:border-navy-500"
              >
                See our deals
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy-950 dark:bg-navy-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <p className="text-2xl md:text-3xl font-bold text-gold-400 mb-1">{value}</p>
                <p className="text-xs text-navy-400 leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-50 dark:bg-navy-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600 dark:text-gold-400 mb-2">What we do</p>
            <h2 className="text-3xl font-bold text-navy-950 dark:text-white">How we invest</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map(({ title, body, icon }) => (
              <div key={title} className="bg-white dark:bg-navy-900 rounded-2xl p-8 border border-navy-100 dark:border-navy-800">
                <div className="w-12 h-12 rounded-xl bg-navy-50 dark:bg-navy-800 flex items-center justify-center text-gold-600 dark:text-gold-400 mb-5">
                  {icon}
                </div>
                <h3 className="text-lg font-semibold text-navy-950 dark:text-white mb-3">{title}</h3>
                <p className="text-sm text-navy-600 dark:text-navy-400 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-navy-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600 dark:text-gold-400 mb-2">Active deals</p>
              <h2 className="text-3xl font-bold text-navy-950 dark:text-white">Featured projects</h2>
            </div>
            <Link href="/projects" className="text-sm font-medium text-gold-600 dark:text-gold-400 hover:underline hidden sm:block">
              All projects →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-navy-100 dark:border-navy-800 overflow-hidden">
              <div className="bg-navy-950 dark:bg-navy-900 px-6 py-4 flex items-center justify-between">
                <p className="text-sm font-semibold text-white">42 Baldwick Rd</p>
                <span className="text-xs px-2 py-1 rounded-full bg-gold-500/20 text-gold-400 font-medium">Active</span>
              </div>
              <div className="p-6">
                <p className="text-xs text-navy-500 dark:text-navy-400 mb-4">Crafton Borough, Pittsburgh PA · Buy &amp; Hold</p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-navy-400 dark:text-navy-500">Market occupancy</p>
                    <p className="text-lg font-bold text-navy-950 dark:text-white">95.4%</p>
                  </div>
                  <div>
                    <p className="text-xs text-navy-400 dark:text-navy-500">Transit access</p>
                    <p className="text-lg font-bold text-navy-950 dark:text-white">West Busway</p>
                  </div>
                </div>
                <p className="text-sm text-navy-600 dark:text-navy-400 leading-relaxed">
                  Inner-ring Pittsburgh location with walkable historic downtown access and strong long-term rental demand anchored by the Eds &amp; Meds economy.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-navy-100 dark:border-navy-800 overflow-hidden">
              <div className="bg-navy-950 dark:bg-navy-900 px-6 py-4 flex items-center justify-between">
                <p className="text-sm font-semibold text-white">3 Keys Communities</p>
                <span className="text-xs px-2 py-1 rounded-full bg-gold-500/20 text-gold-400 font-medium">Active</span>
              </div>
              <div className="p-6">
                <p className="text-xs text-navy-500 dark:text-navy-400 mb-4">Las Vegas, NV · Affordable Housing</p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-navy-400 dark:text-navy-500">Portfolio size</p>
                    <p className="text-lg font-bold text-navy-950 dark:text-white">233 units</p>
                  </div>
                  <div>
                    <p className="text-xs text-navy-400 dark:text-navy-500">Projected IRR</p>
                    <p className="text-lg font-bold text-navy-950 dark:text-white">Up to 23.5%</p>
                  </div>
                </div>
                <p className="text-sm text-navy-600 dark:text-navy-400 leading-relaxed">
                  Impact-driven affordable housing backed by Clark County rental guarantees, combining strong risk-adjusted returns with measurable social impact.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 sm:hidden text-center">
            <Link href="/projects" className="text-sm font-medium text-gold-600 dark:text-gold-400 hover:underline">
              All projects →
            </Link>
          </div>
        </div>
      </section>

      {posts.length > 0 && (
        <section className="bg-navy-50 dark:bg-navy-900/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600 dark:text-gold-400 mb-2">Insights</p>
                <h2 className="text-3xl font-bold text-navy-950 dark:text-white">From the blog</h2>
              </div>
              <Link href="/blog" className="text-sm font-medium text-gold-600 dark:text-gold-400 hover:underline hidden sm:block">
                All posts →
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {posts.map(post => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white dark:bg-navy-900 rounded-2xl p-6 border border-navy-100 dark:border-navy-800 hover:border-gold-500 dark:hover:border-gold-600 transition-colors"
                >
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-navy-50 dark:bg-navy-800 text-navy-500 dark:text-navy-400">
                    {post.category}
                  </span>
                  <h3 className="text-base font-semibold text-navy-950 dark:text-white mt-3 mb-2 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-navy-500 dark:text-navy-400 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <p className="text-xs text-navy-400 dark:text-navy-600 mt-4">
                    {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} · {post.readTime} read
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-navy-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-400 mb-4">Ready to invest?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join a growing community of investors
          </h2>
          <p className="text-navy-400 max-w-xl mx-auto mb-8 leading-relaxed">
            Together we navigate the complexities of real estate investing — leveraging our expertise to create a brighter financial future.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gold-500 text-navy-950 font-medium hover:bg-gold-400 transition-colors"
            >
              Get in touch
            </Link>
            <a
              href="https://manage.kmail-lists.com/subscriptions/subscribe?a=SWf6mJ&g=WNDWpH"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-navy-700 text-navy-300 font-medium hover:border-navy-500 transition-colors"
            >
              Join newsletter
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
