
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NORTH WEST REGIONAL FUND FOR HEALTH PROMOTION',
  description: 'This is the official website of NORTH WEST REGIONAL FUND FOR HEALTH PROMOTION',
}

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className=" mt-16 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
