import React, { useState, FC, useMemo } from 'react'
import { NavLink } from 'react-router-dom'

import styles from './RepositoryUpdate.module.scss'

const RepositoryUpdate: FC<Props> = ({
  updated_at,
  ownerLink = '',
  ownerLogin = '',
}) => {
  const [lastCommit, setLastCommit] = useState<string>()

  useMemo(() => {
    const date = new Date(updated_at)
    setLastCommit(`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`)
  }, [updated_at])

  return (
    <div className={styles.lastCommit}>
      <NavLink to={ownerLink} className={styles.ownerLogin} target="_blank">
        {ownerLogin}
      </NavLink>{' '}
      updated {lastCommit}
    </div>
  )
}

interface Props {
  updated_at: string
  ownerLink?: string
  ownerLogin?: string
}

export default RepositoryUpdate
