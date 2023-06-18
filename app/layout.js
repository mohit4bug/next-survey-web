import './globals.css'
import { Inter_Tight } from 'next/font/google'

const FONT = Inter_Tight({ subsets: ['latin'] })

export const metadata = {
  title: 'Developer Survey',
  description: 'Enjoy reviews by developers for you!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={FONT.className}>{children}</body>
    </html>
  )
}
