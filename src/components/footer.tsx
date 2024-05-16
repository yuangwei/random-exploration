import { Linkedin, Rss, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="h-10 flex items-center justify-between text-sm mt-10">
      <span>&copy;2024 <Link href="/">Yuang Wei</Link></span>
      <ul className="flex items-center gap-3 text-gray-700">
        <Link href=""><Twitter width={16} height={16} /></Link>
        <Link href=""><Linkedin width={16} height={16} /></Link>
        <Link href=""><Rss width={16} height={16} /></Link>
      </ul>
    </footer>
  )
}