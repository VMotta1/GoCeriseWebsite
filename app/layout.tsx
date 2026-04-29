import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'GoCerise — Cherry pick your grocery prices',
  description: 'Compare grocery prices across nearby stores and find the best deals in seconds.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{ background: '#FFFBF0', color: '#343434', overflowX: 'hidden' }}
      >
        {children}
      </body>
    </html>
  )
}