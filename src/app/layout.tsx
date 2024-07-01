import type { Metadata } from 'next'
import type { Viewport } from "next"

//css
import './globals.css'

//providers
import Providers from './provider'

//fonts
import { Poppins } from 'next/font/google'
const poppins = Poppins({ subsets: ['latin'], weight: ["400", "700"] })


export const metadata: Metadata = {
  title: 'Copa America 2024',
  description: 'Copa America 2024',
  manifest: '/manifest.json'
}


export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
