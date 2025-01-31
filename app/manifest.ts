import type {MetadataRoute} from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'egxo.dev',
    short_name: 'egxo',
    description: 'Full Stack Developer. Digital Product Designer.',
    start_url: '/',
    display: 'standalone',
    background_color: '#152028',
    theme_color: '#152028',
    icons: [
      {
        src: '/favicon/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicon/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/favicon/icon-mask.png',
        type: 'image/png',
        sizes: '512x512',
        purpose: 'maskable',
      },
    ],
  }
}
