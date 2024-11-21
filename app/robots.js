export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/'],
      },
    ],
    sitemap: 'https://egxworld.net/sitemap.xml',
    host: 'https://egxworld.net',
  }
}
