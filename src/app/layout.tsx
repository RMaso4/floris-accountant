import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Floris Accountant | Daadkrachtige adviseur in Roermond',
  description: 'Floris is een daadkrachtige adviseur die met beide benen op de grond staat. Administratie, belastingzaken en advisering voor MKB-ondernemers in Roermond.',
  keywords: ['accountant', 'belastingadviseur', 'Roermond', 'MKB', 'administratie', 'jaarrekening'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  )
}