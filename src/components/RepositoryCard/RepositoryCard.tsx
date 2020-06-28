import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

import styles from './RepositoryCard.module.scss'
import RepositoryStars from '../RepositoryStars/RepositoryStars'
import RepositoryUpdate from '../RepositoryUpdate/RepositoryUpdate'
import { RepositoryCardTypes } from '../../models/store/repository'

const RepositoryCard: FC<RepositoryCardTypes> = ({
  id,
  name,
  stargazers_count,
  updated_at,
  html_url,
}) => {
  return (
    <article className={styles.wrapper}>
      <NavLink to={`/repository/` + id} className={styles.name}>
        <h2>{name}</h2>
      </NavLink>
      <RepositoryStars stargazers_count={stargazers_count} />
      <br />
      <RepositoryUpdate updated_at={updated_at} />
      <NavLink to={html_url} target="_blank" className={styles.link}>
        GitHub
      </NavLink>
    </article>
  )
}

export default RepositoryCard
