import './styles/global.css'
import styles from './layout.module.css'
import {Space_Grotesk, Roboto_Mono} from 'next/font/google'
import {ThemeProvider} from 'next-themes'
import {Analytics} from '@vercel/analytics/react'

export const dynamic = 'force-static'

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space_grotesk',
  display: 'swap',
})

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://egxo.dev'),
  title: {
    template: '%s | egxworld',
    default: 'egxworld',
  },
  description: 'Full Stack Developer. Digital Product Designer.',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'eg, ethan_g, ethang, ethan-g, egarrisxn, egxworld, website, portfolio, projects, about, nextjs, next, next14, shadcn-ui, shadcn/ui, radixui, tailwindcss, javascript, react, fullstack, full-stack, webdeveloper, web-developer',
  ],
  creator: 'Ethan G. (https://github.com/egarrisxn)',
  openGraph: {
    type: 'website',
    siteName: 'egxo.dev',
    title: 'egxworld',
    url: 'https://egxo.dev',
    locale: 'en_US',
    images: [
      {
        url: `https://egxo.dev/opengraph-image`,
        width: 1200,
        height: 630,
        alt: 'egxworld',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'egxworld',
    creator: '@eg__xo',
  },
  icons: {
    shortcut: 'https://egxo.dev/favicons/favicon.ico',
  },
}

export const viewport = {
  themeColor: [
    {media: '(prefers-color-scheme: light)', color: '#152028'},
    {media: '(prefers-color-scheme: dark)', color: '#fcf5ff'},
  ],
}

export default function RootLayout({children}) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={`${space_grotesk.variable} ${roboto_mono.variable} `}
    >
      <body>
        <ThemeProvider>
          <div className={styles.wrapper}>
            <main className={styles.main}>{children}</main>
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
