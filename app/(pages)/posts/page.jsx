import {ThePostsList} from '../../components/posts-list/thepostslist/index.jsx'
import Socials from '../../components/socials'

export const metadata = {
  title: 'Posts Page',
  description: 'Some posts that I have made',
  alternates: {
    canonical: 'https://egxworld.net/posts',
  },
}

export default async function PostsPage() {
  return (
    <>
      <header>
        <h1>Blog posts _</h1>
      </header>
      <hr />
      <ThePostsList paginate={true} />
      <hr />
      <footer>
        <Socials />
      </footer>
    </>
  )
}
