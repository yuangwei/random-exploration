import Link from "next/link";


export default function Footer() {
  return (
    <footer className="my-10 flex justify-between text-sm">
      <p className="mt-8 text-neutral-600 dark:text-neutral-300">
        © {new Date().getFullYear()} <Link href="/">Yuang Wei</Link>
      </p>
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <Link
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="/rss"
          >
            <p className="ml-2 h-7">RSS</p>
          </Link>
        </li>
      </ul>
    </footer>
  )
}
