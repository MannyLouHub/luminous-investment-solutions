import type { Metadata } from 'next'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllPosts, getPostBySlug } from '@/lib/mdx'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllPosts().map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-sm text-navy-500 dark:text-navy-400 hover:text-navy-900 dark:hover:text-white mb-10 transition-colors"
      >
        ← All posts
      </Link>

      <header className="mb-10">
        <span className="text-xs font-medium px-2 py-1 rounded-full bg-olive dark:bg-navy-800 text-navy-700 dark:text-navy-400">
          {post.category}
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-navy-950 dark:text-white mt-4 mb-4 leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center gap-3 text-sm text-navy-400 dark:text-navy-500">
          <span>{post.author}</span>
          <span>·</span>
          <span>{new Date(post.date + 'T00:00:00').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          <span>·</span>
          <span>{post.readTime} read</span>
        </div>
      </header>

      <div className="prose prose-navy dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-navy-950 dark:prose-headings:text-white prose-a:text-gold-600 dark:prose-a:text-gold-400 prose-strong:text-navy-950 dark:prose-strong:text-white">
        <MDXRemote source={post.content} />
      </div>

      <div className="mt-16 pt-10 border-t border-sage-200 dark:border-navy-800">
        <p className="text-sm font-semibold text-navy-950 dark:text-white mb-2">Interested in investing?</p>
        <p className="text-sm text-navy-500 dark:text-navy-400 mb-4">
          We&apos;re always looking for aligned investors to grow with us.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-navy-950 text-white text-sm font-medium hover:bg-navy-800 transition-colors dark:bg-gold-500 dark:text-navy-950 dark:hover:bg-gold-400"
        >
          Get in touch
        </Link>
      </div>
    </div>
  )
}
