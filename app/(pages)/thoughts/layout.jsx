import Outline from '../../components/layout-outline'

export const metadata = {
  title: 'Thoughts',
  description: 'Thoughts.',
}

export default function ThoughtsLayout({children}) {
  return (
    <Outline type='layout' name='Thoughts'>
      <article>{children}</article>
    </Outline>
  )
}
