import { Analytics } from '@vercel/analytics/react'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Realgraph demo',
  description: 'Demo page for realgraph npm package',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
      <Analytics />
    </html>
  )
}
