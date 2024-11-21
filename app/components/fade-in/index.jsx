import styles from './fade-in.module.css'

export default function FadeIn({duration = 300, delay = 0, children, className}) {
  return (
    <div
      style={{
        animationDuration: `${duration}ms`,
        animationDelay: `${delay}ms`,
      }}
      className={`${className} ${styles.fadeIn}`}
    >
      {children}
    </div>
  )
}
