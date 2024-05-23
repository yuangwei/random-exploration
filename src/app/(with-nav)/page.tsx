import { format } from "date-fns";
import Link from "next/link";


export default function Home() {
  return (
    <main className="flex flex-col">
      <h1 className="font-bold">Hi, I am Yuang Wei</h1>
      <ul className="not-italic flex gap-5 mt-4 text-sm font-medium">
        <Link href="/blog" className="hover:underline underline-offset-4">Blog</Link>
        <Link href="https://x.com/yuangwya" className="hover:underline underline-offset-4 ">Twitter</Link>
        <Link href="https://linkedin.com/in/yuangwei" className="hover:underline underline-offset-4 ">Linkedin</Link>
      </ul>
    </main>
  )
}
