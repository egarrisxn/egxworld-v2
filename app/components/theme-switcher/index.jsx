'use client'
import styles from './theme.module.css'
import {useEffect, useState} from 'react'
import {useTheme} from 'next-themes'
import {Moon, Sun} from '../icons/other'
import FadeIn from '../fade-in'
import Tooltip from '../tooltip'

export default function ThemeSwitcher({
  className = '',
  iconSize = 24,
  hideTooltip = false,
  strokeWidth,
}) {
  const {theme: activeTheme, setTheme} = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const Wrapper = ({children}) =>
    hideTooltip ? (
      <>{children}</>
    ) : (
      <Tooltip text={activeTheme === 'light' ? 'Dark mode' : 'Light mode'}>{children}</Tooltip>
    )

  return (
    <Wrapper>
      <button
        onClick={() => setTheme(activeTheme === 'light' ? 'dark' : 'light')}
        aria-label='Change the theme'
        className={`${styles.themeSwitch} ${className}`}
      >
        {mounted ? (
          <FadeIn>
            {activeTheme === 'light' ? (
              <Moon size={iconSize} strokeWidth={strokeWidth || 2} />
            ) : (
              <Sun size={iconSize} strokeWidth={strokeWidth || 1} />
            )}{' '}
          </FadeIn>
        ) : (
          <span style={{opacity: 0}} aria-hidden>
            <Moon size={iconSize} />
          </span>
        )}
      </button>
    </Wrapper>
  )
}
