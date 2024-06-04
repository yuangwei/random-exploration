"use client"

import { Activity } from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = {
  '/': {
    name: 'Home',
  },
  '/blog': {
    name: 'Blog',
  },
  'https://linkedin.com/in/yuangwei': {
    name: 'Work',
  },
  'https://github.com/yuangwei': {
    name: 'Projects',
  },
}

const themeTransMap = {
  'light': 'dark',
  'dark': 'light'
}

export function Navbar() {
  const pathname = usePathname()
  const { theme, systemTheme, setTheme } = useTheme()

  const onChangeTheme = function () {
    setTheme(themeTransMap[theme === 'system' ? systemTheme : theme])
  }
  return (
    <aside className="-ml-[2px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20 flex items-center justify-between">
        <div className='font-bold text-[20px] bg-black p-1 rounded-full dark:bg-white cursor-pointer' onClick={onChangeTheme}>
          <Activity className='w-5 h-5 font-bold text-white dark:text-black' />
        </div>
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  target={path.includes('https://') ? "_blank" : '_self'}
                  className={`transition-all hover:text-neutral-800 text-[15px] dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1 ${pathname === path &&
                    'underline underline-offset-4'
                    }`}
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
