import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Active and past multifamily real estate deals from Luminous Investment Solutions.',
}

const projects = [
  {
    name: '42 Baldwick Rd',
    location: 'Crafton Borough, Pittsburgh PA',
    type: 'Residential buy-and-hold',
    status: 'Active',
    date: 'May 2026',
    metrics: [
      { label: 'Strategy', value: 'Buy & Hold' },
      { label: 'Market occupancy', value: '95.4%' },
      { label: 'Avg market rent', value: '$1,454/mo' },
      { label: 'Distance to downtown', value: '4.5 miles' },
    ],
    description: 'An inner-ring Pittsburgh buy-and-hold positioned in Crafton Borough — walkable historic downtown, West Busway transit connectivity, and a stable rental base anchored by the region\'s Eds & Meds economy. Pittsburgh is the only major U.S. metro where buying is cheaper than renting, supporting durable long-term rental demand.',
    highlights: [
      '95.4% occupancy rate — above national average',
      'West Busway direct access to downtown',
      'Median home price ~$242K supports strong rent-to-price ratio',
      '18,200 new jobs added in prior 12 months',
    ],
  },
  {
    name: '3 Keys Communities',
    location: 'Las Vegas, NV',
    type: 'Affordable housing · Impact investing',
    status: 'Active',
    date: 'May 2025',
    metrics: [
      { label: 'Portfolio size', value: '233 units' },
      { label: 'Projected IRR', value: 'Up to 23.5%' },
      { label: 'Backing', value: 'Clark County' },
      { label: 'Housing type', value: 'Transitional + independent' },
    ],
    description: 'A 233-unit affordable housing portfolio in Las Vegas serving formerly incarcerated, homeless, and low-income populations. Backed by Clark County rental guarantees, this deal combines strong risk-adjusted returns with measurable social impact — proving that mission-driven investing and financial performance are not mutually exclusive.',
    highlights: [
      'Clark County rental guarantees reduce vacancy risk',
      'Transitional and independent living arrangements',
      'Projected IRRs up to 23.5% depending on investment class',
      'Directly addresses critical housing shortage for underserved populations',
    ],
  },
]

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
      <div className="mb-14">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600 dark:text-gold-400 mb-2">Our portfolio</p>
        <h1 className="text-4xl font-bold text-navy-950 dark:text-white mb-4">Projects</h1>
        <p className="text-lg text-navy-600 dark:text-navy-400 max-w-2xl leading-relaxed">
          Every deal we bring to investors has been thoroughly underwritten, stress-tested, and backed by market data. Here&apos;s what we&apos;re working on.
        </p>
      </div>

      <div className="space-y-10">
        {projects.map(project => (
          <div key={project.name} className="rounded-2xl border border-navy-100 dark:border-navy-800 overflow-hidden">
            <div className="bg-navy-950 dark:bg-navy-900 px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h2 className="text-xl font-bold text-white">{project.name}</h2>
                  <span className="text-xs px-2 py-1 rounded-full bg-gold-500/20 text-gold-400 font-medium">{project.status}</span>
                </div>
                <p className="text-sm text-navy-400">{project.location} · {project.type}</p>
              </div>
              <p className="text-sm text-navy-500">{project.date}</p>
            </div>

            <div className="p-6 md:p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {project.metrics.map(({ label, value }) => (
                  <div key={label} className="bg-navy-50 dark:bg-navy-900/50 rounded-xl p-4">
                    <p className="text-xs text-navy-400 dark:text-navy-500 mb-1">{label}</p>
                    <p className="text-base font-bold text-navy-950 dark:text-white">{value}</p>
                  </div>
                ))}
              </div>

              <p className="text-navy-600 dark:text-navy-400 leading-relaxed mb-6">{project.description}</p>

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

      <div className="mt-16 rounded-2xl bg-navy-950 p-8 md:p-12 text-center">
        <h3 className="text-2xl font-bold text-white mb-3">Interested in future deals?</h3>
        <p className="text-navy-400 mb-6 max-w-md mx-auto">
          Our investor list gets first access to new opportunities before they&apos;re publicly listed.
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
