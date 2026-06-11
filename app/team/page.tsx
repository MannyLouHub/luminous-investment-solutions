import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Team',
  description: 'Meet the founders, advisors, and operators behind Luminous Investment Solutions.',
}

const founders = [
  {
    name: 'Emmanuel Louison',
    role: 'Founder',
    initials: 'EL',
    bio: 'Coming from a family that immigrated from Haiti, Manny has always been driven by a deep work ethic and a passion for creating opportunity. He transitioned from a career in corporate IT and web development to real estate investing — now helping investors build generational wealth through multifamily real estate.',
  },
  {
    name: 'Lin Li',
    role: 'Co-Founder',
    initials: 'LL',
    bio: 'Multilingual professional fluent in Chinese, Japanese, and English. Lin grew up in China, studied in Japan, and brings entrepreneurial energy and an international perspective shaped by her experience with emerging companies like TikTok and EcoFlow.',
  },
]

const advisors = [
  {
    name: 'Michael Blank',
    role: 'Advisor',
    initials: 'MB',
    company: 'Nighthawk Equity',
    bio: 'CEO of Nighthawk Equity and a recognized authority on multifamily real estate, controlling $200M+ in apartment buildings. Author of a bestselling book on apartment investing and host of the Apartment Building Investing podcast.',
  },
  {
    name: 'Gualter Amarelo',
    role: 'Expert Operator',
    initials: 'GA',
    company: 'Alchemist Nation',
    bio: 'Founder of Alchemist Nation with 600+ units valued over $30M across multiple states. Specializes in acquiring distressed properties and managing government-backed HAP income strategies.',
  },
  {
    name: 'Mitchell Jaworski',
    role: 'Expert Operator',
    initials: 'MJ',
    company: 'ScaredyCatGuide',
    bio: 'Owner of ScaredyCatGuide with 10+ years in real estate including fix-and-flips and multifamily acquisitions. Working toward scaling a portfolio beyond 100 units.',
  },
  {
    name: 'Jeffrey Bell',
    role: 'Operator & Partner',
    initials: 'JB',
    company: 'Luxe Haven Homes',
    bio: 'Pittsburgh-based property owner and manager with 200+ units across Pennsylvania. Owner of Luxe Haven Homes, providing deep local market expertise and full-service property management.',
  },
  {
    name: 'Zachary Gaboury',
    role: 'Operator & Partner',
    initials: 'ZG',
    company: 'Pittsburgh Operations',
    bio: 'Pittsburgh operator and contractor managing 80+ multifamily units with goals to reach 200+. Brings boots-on-the-ground deal flow and construction expertise to every acquisition.',
  },
]

export default function Team() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
      <div className="mb-16">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600 dark:text-gold-400 mb-2">The people behind the firm</p>
        <h1 className="text-4xl font-bold text-navy-950 dark:text-white mb-4">Our team</h1>
        <p className="text-lg text-navy-600 dark:text-navy-400 max-w-2xl leading-relaxed">
          A tight-knit team of founders backed by experienced operators, advisors, and partners who bring decades of real-world real estate expertise.
        </p>
      </div>

      <div className="mb-16">
        <p className="text-xs font-semibold tracking-wider uppercase text-navy-400 dark:text-navy-500 mb-8">Founders</p>
        <div className="grid md:grid-cols-2 gap-6">
          {founders.map(({ name, role, initials, bio }) => (
            <div key={name} className="bg-white dark:bg-navy-900 rounded-2xl p-8 border border-navy-100 dark:border-navy-800">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-full bg-navy-950 dark:bg-navy-800 flex items-center justify-center text-gold-400 font-bold text-lg shrink-0">
                  {initials}
                </div>
                <div>
                  <p className="font-semibold text-navy-950 dark:text-white">{name}</p>
                  <p className="text-sm text-gold-600 dark:text-gold-400">{role}</p>
                </div>
              </div>
              <p className="text-sm text-navy-600 dark:text-navy-400 leading-relaxed">{bio}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold tracking-wider uppercase text-navy-400 dark:text-navy-500 mb-8">Advisors & operators</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advisors.map(({ name, role, initials, company, bio }) => (
            <div key={name} className="bg-white dark:bg-navy-900 rounded-2xl p-6 border border-navy-100 dark:border-navy-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-navy-100 dark:bg-navy-800 flex items-center justify-center text-navy-600 dark:text-navy-400 font-semibold text-sm shrink-0">
                  {initials}
                </div>
                <div>
                  <p className="font-semibold text-navy-950 dark:text-white text-sm">{name}</p>
                  <p className="text-xs text-navy-500 dark:text-navy-400">{role} · {company}</p>
                </div>
              </div>
              <p className="text-sm text-navy-600 dark:text-navy-400 leading-relaxed">{bio}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 rounded-2xl bg-navy-50 dark:bg-navy-900 border border-navy-100 dark:border-navy-800 p-8 md:p-12">
        <div className="max-w-xl">
          <h3 className="text-2xl font-bold text-navy-950 dark:text-white mb-3">Work with us</h3>
          <p className="text-navy-600 dark:text-navy-400 mb-6 leading-relaxed">
            Whether you&apos;re an experienced investor looking for passive income or exploring real estate for the first time, we&apos;d love to connect.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-navy-950 text-white font-medium hover:bg-navy-800 transition-colors dark:bg-gold-500 dark:text-navy-950 dark:hover:bg-gold-400"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  )
}
