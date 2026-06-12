import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/mdx'

export const dynamic = 'force-static'

const BASE = 'https://luminousinvestmentsolutions.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['/', '/projects/', '/blog/', '/team/', '/contact/'].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
  }))

  const postRoutes = getAllPosts().map((post) => ({
    url: `${BASE}/blog/${post.slug}/`,
    lastModified: new Date(post.date + 'T00:00:00'),
  }))

  return [...staticRoutes, ...postRoutes]
}
