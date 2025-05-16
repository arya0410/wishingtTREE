import type { Metadata } from 'next'
import { Playfair_Display, Montserrat } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
})

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Wishing Tree - Luxury Wedding Planning',
    description: 'Premier wedding planning and events company renowned for curating extraordinary celebrations across the globe.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${playfair.variable} ${montserrat.variable} font-sans`}>
                {children}
            </body>
        </html>
    )
} 