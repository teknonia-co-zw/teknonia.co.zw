import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Teknonia | Where Craft Meets Intelligence",
  description:
    "Intelligent Digital Craftsmanship - Websites and digital systems built to earn trust, drive action, and grow Zimbabwean businesses.",
  keywords: [
    "web design",
    "Zimbabwe",
    "Harare",
    "website development",
    "e-commerce",
    "digital agency",
    "booking systems",
  ],
  authors: [{ name: "Teknonia" }],
  creator: "Teknonia",
  openGraph: {
    title: "Teknonia | Where Craft Meets Intelligence",
    description:
      "Intelligent Digital Craftsmanship - Websites and digital systems built to earn trust, drive action, and grow Zimbabwean businesses.",
    url: "https://teknonia.co.zw",
    siteName: "Teknonia",
    locale: "en_ZW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Teknonia | Where Craft Meets Intelligence",
    description: "Intelligent Digital Craftsmanship for Zimbabwean businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#0B1F2A",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
