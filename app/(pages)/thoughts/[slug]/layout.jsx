import styles from '../../thoughts/[slug]/thoughtslayout.module.css'
import getThoughts from '../../../lib/get-thoughts'
import ContentFooter from '../../../components/content-footer/footer'
import Navigation from '../../../components/content-footer/navigation'

export async function generateStaticParams() {
  const thoughts = await getThoughts()
  return thoughts.map((thought) => ({slug: thought.slug}))
}

export async function generateMetadata(props) {
  const params = await props.params
  const thought = (await getThoughts()).find((p) => p?.slug === params.slug)

  return {
    title: thought?.title || 'Default Title',
    description: thought?.description || 'Default Description',
  }
}

async function getData({slug}) {
  const thoughts = await getThoughts()
  const thoughtIndex = thoughts.findIndex((p) => p?.slug === slug)

  if (thoughtIndex === -1) {
    throw new Error(`${slug} not found in thoughts. Did you forget to rename the file?`)
  }

  const thought = thoughts[thoughtIndex]

  return {
    previous: thoughts[thoughtIndex + 1] || null,
    next: thoughts[thoughtIndex - 1] || null,
    ...thought,
  }
}

export default async function ThoughtSlugLayout(props) {
  const params = await props.params

  const {children} = props
  const {previous, next, title, date} = await getData(params)

  return (
    <>
      <div className={styles.wrapper}>
        <span className={styles.date}>{date}</span>
      </div>
      <article>
        <h1 className={styles.title}>{title}</h1>
        {children}
      </article>
      <ContentFooter />
      <Navigation previous={previous} next={next} />
    </>
  )
}
