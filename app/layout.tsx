import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Castrounlocks - Avantage Déloyal Garanti',
  description: 'Gardez une longueur d\'avance sur la concurrence avec nos logiciels indétectables.',
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