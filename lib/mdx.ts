import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDir = path.join(process.cwd(), 'content/blog')

export interface PostMeta {
  slug: string
  title: string
  date: string
  excerpt: string
  category: string
  readTime: string
  author: string
}

export interface Post extends PostMeta {
  content: string
}

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(postsDir)
  return files
    .filter(f => f.endsWith('.mdx'))
    .map(fileName => {
      const slug = fileName.replace(/\.mdx$/, '')
      const { data } = matter(fs.readFileSync(path.join(postsDir, fileName), 'utf8'))
      return {
        slug,
        title: data.title ?? '',
        date: data.date ?? '',
        excerpt: data.excerpt ?? '',
        category: data.category ?? '',
        readTime: data.readTime ?? '',
        author: data.author ?? 'Luminous Investment Solutions',
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): Post {
  const fullPath = path.join(postsDir, `${slug}.mdx`)
  const { data, content } = matter(fs.readFileSync(fullPath, 'utf8'))
  return {
    slug,
    title: data.title ?? '',
    date: data.date ?? '',
    excerpt: data.excerpt ?? '',
    category: data.category ?? '',
    readTime: data.readTime ?? '',
    author: data.author ?? 'Luminous Investment Solutions',
    content,
  }
}
