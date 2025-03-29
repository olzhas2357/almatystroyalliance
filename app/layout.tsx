import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  title: "Almaty Alliance Stroy - Строительство домов в Алматы",
  description:
    "Качественное строительство домов под ключ в Алматы и Алматинской области. Индивидуальный подход, современные технологии и доступные цены.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'
