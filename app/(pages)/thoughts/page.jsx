import {TheThoughtsList} from '../../components/thoughts-list/thethoughtslist/index.jsx'
import Socials from '../../components/socials'

export const metadata = {
  title: 'Thoughts Page',
  description: 'Some random thoughts I have',
  alternates: {
    canonical: 'https://egxworld.net/thoughts',
  },
}

export default async function ThoughtsPage() {
  return (
    <>
      <header>
        <h1>Random thoughts _</h1>
      </header>
      <hr />
      <TheThoughtsList paginate={true} />
      <hr />
      <footer>
        <Socials />
      </footer>
    </>
  )
}
