import Footer from '../components/Footer'
import Nav from '../components/Nav'
import './globals.css'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'NORTH WEST REGIONAL FUND FOR HEALTH PROMOTION',
  description: 'This is the official website of NORTH WEST REGIONAL FUND FOR HEALTH PROMOTION',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
}

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="antialiased">
        <Nav />
        <main className="mt-16 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
