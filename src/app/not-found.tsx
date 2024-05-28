import { BlogPosts } from "@/components/posts";

export default function NotFound() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Page Not Found !
      </h1>
      <div className="my-8">
        <h2 className='font-bold mb-4 mt-10'>Featured Posts</h2>
        <BlogPosts />
      </div>
    </section>
  )
}