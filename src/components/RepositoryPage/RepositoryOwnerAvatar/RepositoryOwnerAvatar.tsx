import React, { FC } from 'react'

import styles from './RepositoryOwnerAvatar.module.scss'

const RepositoryOwnerAvatar: FC<Props> = ({ avatar_url }) => {
  return (
    <div className={styles.ownerAvatar}>
      <img src={avatar_url} alt="Фото аккаунта" />
    </div>
  )
}

interface Props {
  avatar_url: string
}

export default RepositoryOwnerAvatar
