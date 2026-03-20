import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: 'Dinely - Find and Book the Perfect Restaurant Instantly',
  description: 'Dinely is an AI-powered restaurant concierge that helps you discover, decide, and book restaurants instantly. Download the app today.',
  keywords: ['restaurant', 'dining', 'AI', 'booking', 'food', 'concierge', 'reservations'],
  openGraph: {
    title: 'Dinely - Your AI Restaurant Concierge',
    description: 'Discover, decide, and book restaurants instantly with AI-powered recommendations.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#E53935',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
