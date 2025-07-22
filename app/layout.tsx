import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CodUnlocks - Unfair Advantage Guaranteed',
  description: 'Stay ahead of the competition with our undetectable software.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary text-white`}>
        {children}
      </body>
    </html>
  )
} 