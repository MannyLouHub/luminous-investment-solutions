import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Active and past multifamily real estate deals from Luminous Investment Solutions — focused on Pittsburgh\'s inner-ring submarkets.',
}

const pittsburghProjects = [
  {
    name: 'Luminous Steel City Holdings',
    location: 'Southwestern Pennsylvania',
    type: 'Residential · Buy & Hold',
    status: 'Active',
    acquired: 'May 2026',
    role: 'Owner / Operator',
    submarket: 'Inner-ring metro',
    metrics: [
      { label: 'Strategy', value: 'Buy & Hold' },
      { label: 'Market occupancy', value: '95.4%' },
      { label: 'Avg market rent', value: '$1,454/mo' },
      { label: 'Distance to downtown', value: '4.5 miles' },
    ],
    thesis: 'This property sits on a dedicated transit corridor with direct access to a major urban employment center in under 20 minutes. The neighborhood features a walkable historic main street, low vacancy, and a stable renter base anchored by the region\'s Eds & Meds economy. The metro is one of the only major U.S. markets where buying is demonstrably cheaper than renting — creating structural, durable rental demand that doesn\'t evaporate in soft markets.',
    why: 'Pennsylvania offers a rare combination of affordability, stability, and long-term demand. With a median home price well below the national average, one of the lowest costs of living among major metros, and a workforce ecosystem anchored by major universities and health systems, the market supports reliable rent collection and consistent occupancy. Direct transit access and walkable neighborhood character add the kind of fundamentals that hold value across market cycles.',
    highlights: [
      'Direct transit corridor — under 20 min to major employment center',
      '95.4% market occupancy — well above the national average',
      'Affordable cost basis relative to most major U.S. metros',
      '18,200+ new jobs added in the target metro — prior 12 months',
      'Stable tenant demand from university and health system employment corridors',
      'Walkable historic main street with established neighborhood character',
    ],
  },
]

const lendingProgram = {
  metrics: [
    { label: 'Annual return', value: '10%' },
    { label: 'Minimum investment', value: '$25,000' },
    { label: 'Current lending pool', value: '$100,000' },
    { label: 'Annual payout to lenders', value: '$10,000' },
  ],
  terms: [
    { label: 'Return structure', value: '10% per annum, paid regularly' },
    { label: 'Security', value: 'Backed by real property assets' },
    { label: 'Deployment', value: 'Property acquisitions & experienced operators' },
    { label: 'Minimum commitment', value: '$25,000' },
  ],
  highlights: [
    'Simple, fixed 10% annual return — no operational complexity for the investor',
    'Capital secured by real property assets, not unsecured notes',
    'Funds deployed to vetted property acquisitions and experienced operators',
    '$25,000 minimum — accessible entry point into real estate debt investing',
    'Passive income stream with no landlord responsibilities',
    'Transparent reporting on how and where your capital is deployed',
  ],
}

const otherProjects = [
  {
    name: '3 Keys Communities',
    location: 'Las Vegas, NV',
    type: 'Affordable housing · Impact investing',
    status: 'Active',
    date: 'May 2025',
    role: 'Passive Investor',
    operatedBy: 'Third-party operator',
    metrics: [
      { label: 'Portfolio size', value: '233 units' },
      { label: 'Projected IRR', value: 'Up to 23.5%' },
      { label: 'Backing', value: 'Clark County' },
      { label: 'Housing type', value: 'Transitional + independent' },
    ],
    description: 'A 233-unit affordable housing portfolio in Las Vegas serving formerly incarcerated, homeless, and low-income populations. Backed by Clark County rental guarantees, this deal combines strong risk-adjusted returns with measurable social impact. Luminous is a passive investor in this deal — operations are managed by the 3 Keys Communities team.',
    highlights: [
      'Clark County rental guarantees reduce vacancy risk significantly',
      'Transitional and independent living arrangements across portfolio',
      'Projected IRRs up to 23.5% depending on investment class',
      'Directly addresses critical housing shortage for underserved populations',
    ],
  },
]

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">

      {/* Page header */}
      <div className="mb-16" data-reveal>
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600 dark:text-gold-400 mb-2">Our portfolio</p>
        <h1 className="text-4xl font-bold text-navy-950 dark:text-white mb-4">Projects</h1>
        <p className="text-lg text-navy-600 dark:text-navy-400 max-w-2xl leading-relaxed">
          We focus on income-producing multifamily real estate in Pennsylvania — affordable cost basis, strong occupancy fundamentals, and durable rental demand anchored by major universities and health systems. Every deal we bring to investors has been thoroughly underwritten and stress-tested against real market data.
        </p>
      </div>

      {/* Pittsburgh Portfolio */}
      <div className="mb-16">
        <div className="flex items-center gap-4 mb-8" data-reveal>
          <div>
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-gold-600 dark:text-gold-400 mb-1">Pennsylvania portfolio</p>
            <h2 className="text-2xl font-bold text-navy-950 dark:text-white">Our Market · Our Deals</h2>
          </div>
          <div className="flex-1 h-px bg-sage-200 dark:bg-navy-800 hidden sm:block" />
        </div>

        <div className="space-y-10">
          {pittsburghProjects.map(project => (
            <div key={project.name} data-reveal className="rounded-2xl border border-sage-200 dark:border-navy-700 shadow-sm overflow-hidden">
              <div className="bg-navy-950 dark:bg-navy-900 px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-xl font-bold text-white">{project.name}</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-gold-500/20 text-gold-400 font-medium">{project.status}</span>
                  </div>
                  <p className="text-sm text-navy-400">{project.location} · {project.type}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-navy-300 font-medium">{project.role}</p>
                  <p className="text-xs text-navy-500">Acquired {project.acquired}</p>
                </div>
              </div>

              <div className="p-6 md:p-8 bg-white dark:bg-navy-950">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {project.metrics.map(({ label, value }) => (
                    <div key={label} className="bg-olive dark:bg-navy-900/50 rounded-xl p-4">
                      <p className="text-xs text-navy-600 dark:text-navy-500 mb-1">{label}</p>
                      <p className="text-base font-bold text-navy-950 dark:text-white">{value}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-6 mb-8">
                  <div>
                    <p className="text-xs font-semibold tracking-wider uppercase text-navy-400 dark:text-navy-500 mb-2">The thesis</p>
                    <p className="text-navy-600 dark:text-navy-400 leading-relaxed text-sm">{project.thesis}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-wider uppercase text-navy-400 dark:text-navy-500 mb-2">Why this deal</p>
                    <p className="text-navy-600 dark:text-navy-400 leading-relaxed text-sm">{project.why}</p>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold tracking-wider uppercase text-navy-400 dark:text-navy-500 mb-3">Deal highlights</p>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {project.highlights.map(h => (
                      <li key={h} className="flex items-start gap-2 text-sm text-navy-600 dark:text-navy-400">
                        <span className="text-gold-500 mt-0.5 shrink-0">✦</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lending Program */}
      <div className="mb-16">
        <div className="flex items-center gap-4 mb-8" data-reveal>
          <div>
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-gold-600 dark:text-gold-400 mb-1">Debt investing</p>
            <h2 className="text-2xl font-bold text-navy-950 dark:text-white">Real Estate Lending</h2>
          </div>
          <div className="flex-1 h-px bg-sage-200 dark:bg-navy-800 hidden sm:block" />
        </div>
        <p className="text-sm text-navy-500 dark:text-navy-500 mb-8 max-w-2xl">
          Prefer fixed income over operations? Our lending program pays investors a flat 10% annual return — backed by real property assets with no landlord responsibilities required.
        </p>

        <div data-reveal className="rounded-2xl border border-sage-200 dark:border-navy-700 shadow-sm overflow-hidden">
          <div className="bg-navy-950 dark:bg-navy-900 px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-xl font-bold text-white">Real Estate Lending Program</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-gold-500/20 text-gold-400 font-medium">Active</span>
              </div>
              <p className="text-sm text-navy-400">Luminous Investment Solutions · Fixed Return Debt</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-navy-300 font-medium">Lender</p>
              <p className="text-xs text-navy-500">Ongoing · Open to new investors</p>
            </div>
          </div>

          <div className="p-6 md:p-8 bg-white dark:bg-navy-950">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {lendingProgram.metrics.map(({ label, value }) => (
                <div key={label} className="bg-olive dark:bg-navy-900/50 rounded-xl p-4">
                  <p className="text-xs text-navy-600 dark:text-navy-500 mb-1">{label}</p>
                  <p className="text-base font-bold text-navy-950 dark:text-white">{value}</p>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <div className="rounded-xl border border-sage-200 dark:border-navy-800 p-5">
                <p className="text-xs font-semibold tracking-wider uppercase text-navy-400 dark:text-navy-500 mb-4">Program terms</p>
                <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
                  {lendingProgram.terms.map(({ label, value }) => (
                    <div key={label} className="flex justify-between gap-4 text-sm">
                      <dt className="text-navy-500 dark:text-navy-400">{label}</dt>
                      <dd className="font-medium text-navy-950 dark:text-white text-right">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-xs font-semibold tracking-wider uppercase text-navy-400 dark:text-navy-500 mb-3">Why lend with us</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {lendingProgram.highlights.map(h => (
                  <li key={h} className="flex items-start gap-2 text-sm text-navy-600 dark:text-navy-400">
                    <span className="text-gold-500 mt-0.5 shrink-0">✦</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-sage-200 dark:border-navy-800">
              <p className="text-sm text-navy-600 dark:text-navy-400 leading-relaxed">
                Minimum investment is <span className="font-semibold text-navy-950 dark:text-white">$25,000</span>. Capital is deployed into property acquisitions and loans to experienced operators — not held idle. Interested in lending with us?{' '}
                <a href="/contact" className="text-gold-600 dark:text-gold-400 font-medium hover:underline">Get in touch →</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Other Projects */}
      <div className="mb-16">
        <div className="flex items-center gap-4 mb-8" data-reveal>
          <div>
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-gold-600 dark:text-gold-400 mb-1">Broader exposure</p>
            <h2 className="text-2xl font-bold text-navy-950 dark:text-white">Other Projects</h2>
          </div>
          <div className="flex-1 h-px bg-sage-200 dark:bg-navy-800 hidden sm:block" />
        </div>
        <p className="text-sm text-navy-500 dark:text-navy-500 mb-8 max-w-2xl">
          We selectively participate in deals alongside trusted operators where the thesis and risk profile align with our values.
        </p>

        <div className="space-y-10">
          {otherProjects.map(project => (
            <div key={project.name} data-reveal className="rounded-2xl border border-sage-200 dark:border-navy-700 shadow-sm overflow-hidden">
              <div className="bg-navy-950 dark:bg-navy-900 px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-xl font-bold text-white">{project.name}</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-gold-500/20 text-gold-400 font-medium">{project.status}</span>
                  </div>
                  <p className="text-sm text-navy-400">{project.location} · {project.type}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-navy-300 font-medium">{project.role}</p>
                  <p className="text-xs text-navy-500">Operated by {project.operatedBy}</p>
                </div>
              </div>

              <div className="p-6 md:p-8 bg-white dark:bg-navy-950">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {project.metrics.map(({ label, value }) => (
                    <div key={label} className="bg-olive dark:bg-navy-900/50 rounded-xl p-4">
                      <p className="text-xs text-navy-600 dark:text-navy-500 mb-1">{label}</p>
                      <p className="text-base font-bold text-navy-950 dark:text-white">{value}</p>
                    </div>
                  ))}
                </div>

                <p className="text-navy-600 dark:text-navy-400 leading-relaxed text-sm mb-6">{project.description}</p>

                <div>
                  <p className="text-xs font-semibold tracking-wider uppercase text-navy-400 dark:text-navy-500 mb-3">Deal highlights</p>
                  <ul className="space-y-2">
                    {project.highlights.map(h => (
                      <li key={h} className="flex items-start gap-2 text-sm text-navy-600 dark:text-navy-400">
                        <span className="text-gold-500 mt-0.5 shrink-0">✦</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-2xl bg-navy-950 p-8 md:p-12 text-center" data-reveal>
        <h3 className="text-2xl font-bold text-white mb-3">Interested in future deals?</h3>
        <p className="text-navy-400 mb-6 max-w-md mx-auto">
          Our investor list gets first access to new Pittsburgh opportunities before they&apos;re publicly listed.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gold-500 text-navy-950 font-medium hover:bg-gold-400 transition-colors"
        >
          Join the investor list
        </Link>
      </div>
    </div>
  )
}
