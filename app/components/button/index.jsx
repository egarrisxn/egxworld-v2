import styles from './button.module.css'

export default function Button({children, className, onClick, ...props}) {
  return (
    <button
      className={`${styles.button} ${className ? className : ''}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}
