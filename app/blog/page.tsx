import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/mdx'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Market insights, deal analysis, and investing strategies from Luminous Investment Solutions.',
}

export default function Blog() {
  const posts = getAllPosts()

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
      <div className="mb-14" data-reveal>
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600 dark:text-gold-400 mb-2">Insights & analysis</p>
        <h1 className="text-4xl font-bold text-navy-950 dark:text-white mb-4">Blog</h1>
        <p className="text-lg text-navy-600 dark:text-navy-400 max-w-2xl leading-relaxed">
          Market data, deal breakdowns, and the thinking behind how we invest. No fluff — just the research.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="text-navy-500 dark:text-navy-400">No posts yet — check back soon.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              data-reveal
              data-delay={String((i % 3) + 1)}
              className="group bg-white dark:bg-navy-900 shadow-sm rounded-2xl p-6 border border-sage-200 dark:border-navy-700 hover:border-gold-500 dark:hover:border-gold-600 transition-colors flex flex-col"
            >
              <div className="flex-1">
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-olive dark:bg-navy-800 text-navy-700 dark:text-navy-400">
                  {post.category}
                </span>
                <h2 className="text-base font-semibold text-navy-950 dark:text-white mt-3 mb-2 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-sm text-navy-500 dark:text-navy-400 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
              <div className="flex items-center justify-between mt-5 pt-4 border-t border-sage-200 dark:border-navy-800">
                <p className="text-xs text-navy-400 dark:text-navy-600">
                  {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                </p>
                <p className="text-xs text-navy-400 dark:text-navy-600">{post.readTime} read</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
