import styles from './entry.module.css'
import Link from '../link'
import Badge from '../badge'
import Image from 'next/image'

export const Entry = ({href, title, description, image, years, showYears = true}) => (
  <>
    <li className={styles.wrapper}>
      <div className={styles.head}>
        <p className={styles.title}>
          <Link href={href} external={true}>
            {title}
          </Link>
        </p>
        <div className={styles.badges}>
          {showYears && (
            <Badge>
              {years[0]} {years[1] ? '-' : ''} {years[1]}
            </Badge>
          )}
        </div>
      </div>
      <div className={styles.body}>
        <Image className={styles.image} src={image} width={170} height={100} alt={title} />
        <div className={styles.description}>{description}</div>
      </div>
    </li>
    <hr />
  </>
)
