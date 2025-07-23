
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import './globals.css'

export const metadata = {
  title: 'NORTH WEST REGIONAL FUND FOR HEALTH PROMOTION',
  description: 'This is the official website of NORTH WEST REGIONAL FUND FOR HEALTH PROMOTION',
}

export default function RootLayout({ children }) {
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
