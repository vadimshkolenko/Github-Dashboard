import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

import { RepositoryCardTypes } from '../../models/store/repository'

const RepositoryCard: FC<RepositoryCardTypes> = ({
  id,
  name,
  stargazers_count,
  updated_at,
  html_url,
}) => {
  return (
    <article>
      <NavLink to={`/repository/` + id}>
        <h2>{name}</h2>
      </NavLink>
      <p>{stargazers_count}</p>
      <p>{updated_at}</p>
      <NavLink to={html_url} target="_blank">
        {html_url}
      </NavLink>
    </article>
  )
}

export default RepositoryCard
