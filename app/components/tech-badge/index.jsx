import styles from './techbadge.module.css'
import Link from '../link'

export function TechBadge({href, label, icon, children}) {
  return (
    <Link external href={href} aria-label={label} className={styles.techBadge}>
      {icon}
      {children}
    </Link>
  )
}
