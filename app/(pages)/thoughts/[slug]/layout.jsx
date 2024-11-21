import styles from '../../thoughts/[slug]/thoughtslayout.module.css'
import getThoughts from '../../../lib/get-thoughts'
import ContentFooter from '../../../components/content-footer/footer'
import Navigation from '../../../components/content-footer/navigation'

export async function generateStaticParams() {
  const thoughts = await getThoughts()
  return thoughts.map((thought) => ({slug: thought.slug}))
}

export async function generateMetadata({params}) {
  const thought = (await getThoughts()).find((p) => p?.slug === params.slug)
  return {
    title: thought?.title,
    description: thought?.description,
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

export default async function ThoughtSlugLayout({children, params}) {
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
