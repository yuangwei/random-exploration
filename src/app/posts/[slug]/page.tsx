import MDX from "@/components/mdx";
import { getPosts } from "@/libs/posts";
import { format } from "date-fns";
import { Headphones } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export default function Post({ params }: { params: { slug: string } }) {
  let post = getPosts().find(post => post.slug === params.slug)
  if (!post) {
    notFound()
  }
  return (
    <main>
      <h1 className="title font-medium text-2xl tracking-tighter">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <Suspense fallback={<p className="h-5" />}>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 flex gap-3">
            <Link href="/" className="text-slate-600 font-medium">Yuang Wei</Link>
            <span className="flex items-center gap-2">
              <span>{format(new Date(post.metadata.created), post.metadata.lang === 'en' ? 'Do MMM yyy' : 'yyyy-MM-dd')}</span>
              {/* <span className="flex items-center gap-1 cursor-pointer"><Headphones width={13} height={13} /> 59:10</span> */}
            </span>
          </p>
        </Suspense>
      </div>
      <article className="prose prose-quoteless prose-neutral dark:prose-invert">
        <MDX source={post.content} />
      </article>
    </main>
  )
}