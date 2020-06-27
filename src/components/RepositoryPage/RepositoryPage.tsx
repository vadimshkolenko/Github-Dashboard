import React, { useEffect, useState, FC, useMemo } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'

import RepositoryLanguages from '../RepositoryLanguages/RepositoryLanguages'
import RepositoryContributors from '../RepositoryContributors/RepositoryContributors'
import { RepositoriesData } from '../../models/store/repository'
import { RootState } from '../../store/reducers'
import { fetchRepositories } from '../../store/action-creators'

const RepositoryPage: FC<Props> = ({
  repositories,
  repositoriesLoading,
  repositoriesLoaded,
  fetchRepositories,
}) => {
  const { id } = useParams()

  const [repository, setRepository] = useState<RepositoriesData>()

  useEffect(() => {
    !repositoriesLoading && !repositoriesLoaded && fetchRepositories()
  }, [fetchRepositories, repositoriesLoading, repositoriesLoaded])

  useMemo(() => {
    setRepository(repositories.find((rep) => rep.id === Number(id)))
  }, [repositories])

  if (repositoriesLoading) {
    return <div>Загрузка...</div>
  }

  if (repository !== undefined) {
    return (
      <div>
        <div>{repository.name}</div>
        <div>{repository.stargazers_count}</div>
        <div>{repository.updated_at}</div>
        <div>{repository.description}</div>
        <div>
          <img src={repository.owner.avatar_url} alt="Фото аккаунта" />
        </div>
        <div>{repository.owner.login}</div>
        <div>{repository.owner.html_url}</div>
        <RepositoryLanguages languages_url={repository.languages_url} />
        <RepositoryContributors
          contributors_url={repository.contributors_url}
        />
      </div>
    )
  } else {
    return <div>Такого репозитория не существует</div>
  }
}

interface Props {
  repositories: Array<RepositoriesData>
  repositoriesLoading: boolean
  repositoriesLoaded: boolean
  fetchRepositories: any
}

const mapStateToProps = (state: RootState) => ({
  repositories: state.repositories.entities,
  repositoriesLoading: state.repositories.loading,
  repositoriesLoaded: state.repositories.loaded,
})

const mapDispatchToProps = {
  fetchRepositories,
}

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryPage)

//name - stargazers_count - updated_at
//owner {avatar_url} - login + html_url
//languages_url - ссылка на апишку
//description
//contributors_url - ссылка на апишку
