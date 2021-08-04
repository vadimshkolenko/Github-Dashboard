import React, { FC, useEffect } from 'react'
import { connect } from 'react-redux'

import styles from './Repositories.module.scss'
import RepositoryCard from '../RepositoryCard/RepositoryCard'
import { Repository } from '../../models/store/repository'
import { RepositoryCardTypes } from '../../models/store/repository'
import { RootState } from '../../store/reducers'
import { fetchRepositories } from '../../store/action-creators'

const Repositories: FC<Props> = ({
  repositories,
  repositoriesLoading,
  repositoriesLoaded,
  fetchRepositories,
  query,
  page,
}) => {
  useEffect(() => {
    !repositoriesLoading &&
      !repositoriesLoaded &&
      fetchRepositories(query, page)
  }, [fetchRepositories, repositoriesLoading, repositoriesLoaded, query, page])

  if (repositories === undefined && repositoriesLoaded) {
    return <div className={styles.wrapper}>rate limit exceeded</div>
  }

  if (repositories?.length === 0 && repositoriesLoaded) {
    return (
      <div className={styles.wrapper}>Данные по вашему запросу отсутствуют</div>
    )
  }

  if (repositoriesLoading) {
    return <div className={styles.wrapper}>Загрузка...</div>
  }

  return (
    <section className={styles.wrapper}>
      {repositories?.map((repository: RepositoryCardTypes) => (
        <RepositoryCard
          key={repository.id}
          id={repository.id}
          name={repository.name}
          stargazers_count={repository.stargazers_count}
          updated_at={repository.updated_at}
          html_url={repository.html_url}
        />
      ))}
    </section>
  )
}

interface Props {
  repositories: Array<Repository> | undefined
  repositoriesLoading: boolean
  repositoriesLoaded: boolean
  fetchRepositories: any
  query: string
  page: number
}

const mapStateToProps = (state: RootState) => ({
  repositories: state.repositories.entities?.items,
  repositoriesLoading: state.repositories.loading,
  repositoriesLoaded: state.repositories.loaded,
  query: state.repositories.query,
  page: state.repositories.page,
})

const mapDispatchToProps = {
  fetchRepositories,
}

export default connect(mapStateToProps, mapDispatchToProps)(Repositories)
