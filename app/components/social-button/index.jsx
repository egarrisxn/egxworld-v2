'use client'
import styles from './socialbutton.module.css'
import Tooltip from '../tooltip'
import {track} from '@vercel/analytics/react'

import Link from '../link'

export function SocialButton({tooltip, href, icon}) {
  return (
    <Tooltip text={tooltip} direction='top'>
      <Link
        href={href}
        className={styles.socialButton}
        external
        onClick={() =>
          track('clicked social link', {
            type: tooltip.toLowerCase(),
          })
        }
      >
        {icon}
      </Link>
    </Tooltip>
  )
}
