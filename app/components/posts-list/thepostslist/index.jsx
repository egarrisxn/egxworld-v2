import getPosts from '../../../lib/get-posts'
import PostsList from '../index.jsx'

export async function ThePostsList({paginate}) {
  const posts = await getPosts()
  return <PostsList posts={posts} paginate={paginate} />
}
