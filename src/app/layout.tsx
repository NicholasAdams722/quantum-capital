import type { Metadata } from 'next'
import { Inter, Nunito } from 'next/font/google'
import './globals.css'
import { organizationSchema, personSchema, websiteSchema } from '@/lib/structured-data'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
  weight: ['900'],
  display: 'swap',
})

const BASE_URL = 'https://quantumcapital.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Quantum Capital : Institutional Ethereum Research & Managed Accounts',
    template: '%s | Quantum Capital',
  },
  description:
    'Quantum Capital applies Metcalfe\'s Law to Ethereum : the same methodology used by Grayscale and Fidelity analysts. Mark Berube, ChFC, manages accounts for investors who want institutional-grade crypto positioning.',
  keywords: [
    'Ethereum investment advisor',
    'Ethereum managed accounts',
    'Metcalfe\'s Law Ethereum',
    'crypto RIA',
    'registered investment adviser Ethereum',
    'Quantum Capital',
    'Mark Berube ChFC',
    'Ethereum valuation',
    'The Quantum Letter',
    'ETH price target',
    'institutional Ethereum research',
    'New Hampshire RIA',
  ],
  authors: [{ name: 'Mark Berube', url: BASE_URL }],
  creator: 'Mark Berube',
  publisher: 'Quantum Capital, a DBA of Patriot Advisory Group LLC',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'Quantum Capital',
    title: 'Quantum Capital : Institutional Ethereum Research & Managed Accounts',
    description:
      'Ethereum is priced like a speculative asset. It\'s being built like infrastructure. The gap between those two things is where we work.',
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Quantum Capital : Institutional Ethereum Research',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quantum Capital : Institutional Ethereum Research & Managed Accounts',
    description:
      'Ethereum is priced like a speculative asset. It\'s being built like infrastructure. The gap between those two things is where we work.',
    images: [`${BASE_URL}/og-image.png`],
    creator: '@QuantumCapital',
  },
  alternates: {
    canonical: BASE_URL,
  },
  category: 'finance',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${nunito.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased bg-black text-white font-sans">
        {children}
      </body>
    </html>
  )
}
