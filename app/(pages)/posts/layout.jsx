import Outline from '../../components/layout-outline'

export const metadata = {
  title: 'Posts',
  description: 'Posts.',
}

export default function PostsLayout({children}) {
  return (
    <Outline type='layout' name='Posts'>
      <article>{children}</article>
    </Outline>
  )
}
