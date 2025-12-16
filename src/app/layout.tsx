import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Helmi Aouali | Full-Stack Web Developer & Digital Architect',
  description: 'Crafting exceptional digital experiences through innovative web development, scalable SaaS solutions, WordPress expertise, and data-driven insights.',
  keywords: ['web developer', 'full-stack developer', 'WordPress developer', 'SaaS development', 'data visualization', 'React', 'Next.js'],
  authors: [{ name: 'Helmi Aouali' }],
  openGraph: {
    title: 'Helmi Aouali | Full-Stack Web Developer & Digital Architect',
    description: 'Crafting exceptional digital experiences through innovative web development.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-[var(--color-midnight)] text-[var(--color-cream)] antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
