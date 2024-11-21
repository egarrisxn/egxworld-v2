import getThoughts, {getThought} from '../../../lib/get-thoughts'
import {BlogBody} from '../../../mdx/blog-body'
import {notFound} from 'next/navigation'

export async function generateStaticParams() {
  const thoughts = await getThoughts()
  return thoughts.map((thought) => ({slug: thought.slug}))
}

export default async function ThoughtSlugPage({params}) {
  const thought = await getThought(params.slug)
  if (!thought) return notFound()
  return <BlogBody>{thought?.body}</BlogBody>
}
