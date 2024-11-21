import styles from './mdx-thought.module.css'
import Info from '../../components/icons/other/info'

export function MDXThought({children, ...props}) {
  return (
    <aside {...props} className={styles.thought}>
      <div className={styles.icon}>
        <Info />
      </div>
      <div className={styles.content}>
        <b>Thought: </b>
        {children}
      </div>
    </aside>
  )
}
