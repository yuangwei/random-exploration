import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full mb-10 h-5">
      <Link href="/">
        <h1 className="font-bold text-lg">Yuang Wei</h1>
      </Link>
      <nav className="flex text-sm gap-4 font-medium">
        <Link href="/posts">Posts</Link>
        <Link href="/projects">Projects</Link>
      </nav>
    </header>
  )
}