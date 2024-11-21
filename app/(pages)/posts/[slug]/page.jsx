import getPosts, {getPost} from '../../../lib/get-posts'
import {BlogBody} from '../../../mdx/blog-body'
import {notFound} from 'next/navigation'

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({slug: post.slug}))
}

export default async function PostSlugPage({params}) {
  const post = await getPost(params.slug)
  if (!post) return notFound()
  return <BlogBody>{post?.body}</BlogBody>
}
