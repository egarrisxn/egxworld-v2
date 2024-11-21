import styles from './link.module.css'
import NextLink from 'next/link'
import clsx from 'clsx'

export default function Link({
  external,
  href,
  children,
  className: classNameProp = '',
  title,
  underline = true,
  tabIndex = 0,
  ...props
}) {
  const className = clsx(styles.link, underline && styles.underline, classNameProp)

  if (external) {
    return (
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className={className}
        title={title}
        tabIndex={tabIndex}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <NextLink href={href} title={title} className={className} {...props} tabIndex={tabIndex}>
      {children}
    </NextLink>
  )
}
