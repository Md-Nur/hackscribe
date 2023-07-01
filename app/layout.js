"use client"
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'
import { Athiti } from 'next/font/google'


const athiti = Athiti({
  subsets: ['latin'],
  weight: ['400'],
})

const metadata = {
  title: 'HackScribe - Blog your coding experience',
  description: 'Blog your coding experience with HackScribe. Share your coding journey with the world. Write about your coding journey.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={`${athiti.className} backgroundImage`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
