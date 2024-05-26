// import { Activity } from "lucide-react";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <header className="flex justify-between items-center">
        <div className="cursor-pointer flex gap-2 items-center">
          {/* <div className="w-7 h-7 flex items-center justify-center rounded-full bg-black dark:bg-white">
            <Activity
              className="text-white dark:text-black w-5 h-5 font-bold"
              strokeWidth={2.5}
            />
          </div> */}
          <h1 className="font-bold text-lg not-italic">Yuang Wei</h1>
        </div>
        <ul className="not-italic flex items-center justify-end gap-5 text-sm font-medium">
          <Link href="/blog" className="hover:underline underline-offset-4">
            Blog
          </Link>
          <Link
            href="https://linkedin.com/in/yuangwei"
            target="_blank"
            className="hover:underline underline-offset-4 "
          >
            Work
          </Link>
          <Link
            href="https://github.com/yuangwei"
            target="_blank"
            className="hover:underline underline-offset-4 "
          >
            Projects
          </Link>
        </ul>
      </header>
      {children}
    </main>
  );
}
