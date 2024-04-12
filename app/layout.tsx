import type { Metadata } from 'next'
import './globals.css'
import { metadataWithPWA } from '@/lib/pwa'


export const metadata: Metadata = metadataWithPWA({
  title: 'Random Exploration | Yuang Wei',
  description: 'Discovering the unknown and pursuing all possibilities.',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
