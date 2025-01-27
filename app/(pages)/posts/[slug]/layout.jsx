import styles from './postslayout.module.css'
import getPosts from '../../../lib/get-posts'
import Navigation from '../../../components/content-footer/navigation'
import ContentFooter from '../../../components/content-footer/footer'

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({slug: post.slug}))
}

export async function generateMetadata(props) {
  const params = await props.params
  const post = (await getPosts()).find((p) => p?.slug === params.slug)

  return {
    title: post?.title || 'Default Title',
    description: post?.description || 'Default Description',
  }
}

async function getData({slug}) {
  const posts = await getPosts()
  const postIndex = posts.findIndex((p) => p?.slug === slug)

  if (postIndex === -1) {
    throw new Error(`${slug} not found in posts. Did you forget to rename the file?`)
  }

  const post = posts[postIndex]

  return {
    previous: posts[postIndex + 1] || null,
    next: posts[postIndex - 1] || null,
    ...post,
  }
}

export default async function PostSlugLayout(props) {
  const params = await props.params

  const {children} = props
  const {previous, next, title, date, lastModified} = await getData(params)

  const lastModifiedDate = lastModified
    ? new Date(lastModified).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    : null

  return (
    <>
      <div className={styles.wrapper}>
        <span className={styles.date}>{date}</span>
        {lastModified ? (
          <span className={styles.lastModified}>Last modified {lastModifiedDate}</span>
        ) : null}
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
