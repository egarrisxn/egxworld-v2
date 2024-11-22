import getPosts from './lib/get-posts'
import getThoughts from './lib/get-thoughts'

export default async function sitemap() {
  const posts = await getPosts()
  const thoughts = await getThoughts()

  const blogs = posts
    .map((post) => ({
      url: `http://egxworld.net/posts/${post.slug}`,
      lastModified: post.lastModified
        ? new Date(post.lastModified).toISOString().split('T')[0]
        : new Date().toISOString().split('T')[0],
    }))
    .concat(
      thoughts.map((thought) => ({
        url: `http://egxworld.net/thoughts/${thought.slug}`,
        lastModified: thought.lastModified
          ? new Date(thought.lastModified).toISOString().split('T')[0]
          : new Date().toISOString().split('T')[0],
      })),
    )

  const routes = ['', '/about', '/projects', '/posts', '/thoughts', '/contact'].map((route) => ({
    url: `http://egxworld.net${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
