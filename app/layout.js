
import './globals.css'

export const metadata = {
  title: 'Teasley Lawn Care Services',
  description: 'Luxury lawn care and landscaping in Raleigh, NC'
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
