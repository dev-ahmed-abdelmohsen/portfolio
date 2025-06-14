import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: 'Resume - Ahmed Abd Elmohsen',
  description: 'Professional resume of Ahmed Abd Elmohsen - Software Engineer',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
