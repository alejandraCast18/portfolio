import type { Metadata } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CunaguarosDev',
  icons: {
    icon: '/logo11.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es' className='dark'>
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans bg-[#020202] antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
