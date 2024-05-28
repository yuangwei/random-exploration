import Link from 'next/link'
import { formatDate, getBlogPosts, getFeaturedBlogPosts, getRecommandBlogPost } from '@/libs/posts'


export function BlogPosts() {
  let blogs = getBlogPosts()
  if (!blogs.length) {
    return (
      <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2 justify-between">
        Not post in here.
      </div>
    )
  }
  return <PostList posts={blogs} />
}

export function FeaturePostList() {
  let blogs = getFeaturedBlogPosts()

  if (!blogs.length) {
    return null
  }
  return (
    <>
      <h2 className='font-bold text-lg mb-4 mt-10'>Featured</h2>
      <PostList posts={blogs} />
    </>
  )

}

export function RecommandPostList({ slug }: { slug: string }) {
  const posts = getBlogPosts(),
    current = posts.find(post => post.slug === slug)
  let blogs = getRecommandBlogPost(current.metadata.topic, current.slug).filter(post => post.slug === slug)
  if (!blogs.length) {
    blogs = posts.slice(0, 3)
  }
  return (
    <>
      <h2 className='font-bold text-lg mb-4'>Recommended to you</h2>
      <PostList posts={blogs} />
    </>
  )
}


export function PostList({ posts }) {
  return posts.sort((a, b) => {
    if (
      new Date(a.metadata.created) > new Date(b.metadata.created)
    ) {
      return -1
    }
    return 1
  })
    .map((post) => (
      <Link
        key={post.slug}
        className="flex flex-col space-y-1 mb-4"
        href={`/blog/${post.slug}`}
      >
        <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2 justify-between">
          <p className="text-neutral-900 dark:text-neutral-100 tracking-tight hover:text-neutral-600">
            {post.metadata.title}
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm tabular-nums">
            {formatDate(post.metadata.created, false)}
          </p>
        </div>
      </Link>
    ))
}
