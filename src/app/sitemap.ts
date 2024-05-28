import { getBlogPosts } from '@/libs/posts'

export const baseUrl = 'https://yuangwei.com'

export default async function sitemap() {
  let blogs = getBlogPosts().map((post: { slug: string; metadata: { created: string } }) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.created,
  }))

  let routes = ['', '/blog'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
