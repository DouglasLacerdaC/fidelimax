import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '@/styles/globals.css'

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap"
})

export const metadata: Metadata = {
  title: 'Fidelimax',
  description: 'Perguntas dinâmicas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href='/icon.png' type="image/png" />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
