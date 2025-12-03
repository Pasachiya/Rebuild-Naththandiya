import './globals.css'

export const metadata = {
  title: 'Rebuild Naththandiya - Ammoo.society',
  description: 'Help rebuild education for children in Naththandiya after the recent disaster',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}