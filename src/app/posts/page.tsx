import { getPosts, getPostsByYear } from "@/libs/posts";
import Link from "next/link";
import { format } from 'date-fns'

export const metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
};

export default async function PostsPage() {
  let posts = getPostsByYear(),
    years = Object.keys(posts).sort((a, b) => Number(b) - Number(a))
  return (
    <main>
      {
        years.map(data => (
          <section key={data}>
            <h2>{data}</h2>
            <ul>
              {posts[data].map(post => (
                <li key={post.slug}>
                  <Link href={`/posts/${post.slug}`} className="flex justify-between">
                    <p>{post.metadata.title}</p>
                    <span>{format(new Date(post.metadata.created), "Do MMMM yyyy")}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))
      }
    </main>
  )
}