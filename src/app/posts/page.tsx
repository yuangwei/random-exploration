import { getPosts, getPostsByYear } from "@/libs/posts";
import Link from "next/link";
import { format } from 'date-fns'
import Header from "@/components/header";

export const metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
};

export default async function PostsPage() {
  let posts = getPostsByYear(),
    years = Object.keys(posts).sort((a, b) => Number(b) - Number(a))
  return (
    <main className="w-full">
      <Header />
      {
        years.map(data => (
          <section key={data} className="mb-8">
            <h2 className="mb-2 font-bold">{data}</h2>
            <ul className="flex flex-col gap-3">
              {posts[data].map(post => (
                <li key={post.slug}>
                  <Link href={`/posts/${post.slug}`} className="flex justify-between items-center">
                    <p>{post.metadata.title}</p>
                    <span className="text-sm">{format(new Date(post.metadata.created), post.metadata.lang === 'en' ? 'Do MMM yyy' : 'yyyy-MM-dd')}</span>
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