import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import {GoogleTagManager} from '@next/third-parties/google'

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
    <GoogleTagManager gtmId="GTM-KJPBZX2X"/>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KJPBZX2X"
                    height="0" width="0" style={{display: "none", visibility: "hidden"}}></iframe>
          </noscript>
          {children}
          <Footer/>
          <WhatsAppButton/>
          <InstagramButton/>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'
import InstagramButton from "@/components/insta-button";
