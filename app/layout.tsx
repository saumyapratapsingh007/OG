import type { Metadata } from "next"
import { Bebas_Neue, Orbitron, Poppins } from "next/font/google"
import "./globals.css"

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-space",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Party With Snoop Dogg",
  description:
    "Premium investor-facing event concept for Party with Snoop Dogg across India's highest-value entertainment markets.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${bebas.variable} ${poppins.variable} ${orbitron.variable}`}>
      <body>{children}</body>
    </html>
  )
}
