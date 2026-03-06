import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { dadosCliente } from "@/data/cliente"
import { ClienteProvider } from "@/components/cliente-provider"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: dadosCliente.seo.siteTitle,
  description: dadosCliente.seo.description,
  generator: "v0.app",
  openGraph: {
    title: dadosCliente.seo.siteTitle,
    description: dadosCliente.seo.description,
    type: "website",
    url: dadosCliente.seo.url,
    images: [
      {
        url: dadosCliente.seo.ogImage,
        width: 1200,
        height: 630,
      },
    ],
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: dadosCliente.seo.siteTitle,
    description: dadosCliente.seo.description,
    images: [dadosCliente.seo.ogImage],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Meta Description (SEO) */}
        <meta name="description" content={dadosCliente.seo.description} />

        <meta name="google-site-verification" content="OQ18zxm5jwjtUma02of36qhsH3hzOuIvHqnZSk-kd_A" />

        {/* Open Graph / Facebook / LinkedIn */}
        <meta property="og:title" content={dadosCliente.seo.siteTitle} />
        <meta property="og:description" content={dadosCliente.seo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={dadosCliente.seo.url} />
        <meta property="og:image" content={dadosCliente.seo.ogImage} />
        <meta property="og:locale" content="pt_BR" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={dadosCliente.seo.siteTitle} />
        <meta name="twitter:description" content={dadosCliente.seo.description} />
        <meta name="twitter:image" content={dadosCliente.seo.ogImage} />

        {/* WhatsApp / Telegram */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
      </head>
      <body className={`font-sans antialiased`}>
        <ClienteProvider>
          {children}
        </ClienteProvider>
        <Analytics />
      </body>
    </html>
  )
}
