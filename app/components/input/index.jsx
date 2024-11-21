import * as React from 'react'
import clsx from 'clsx'
import styles from './input.module.css'

const Input = React.forwardRef(({className, ...props}, ref) => {
  return <input type='text' className={clsx(styles['input'], className)} ref={ref} {...props} />
})
Input.displayName = 'Input'

export {Input}
