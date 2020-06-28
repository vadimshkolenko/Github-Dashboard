import React, { FC, useEffect } from 'react'
import { connect } from 'react-redux'

import styles from './Repositories.module.scss'
import RepositoryCard from '../RepositoryCard/RepositoryCard'
import { RepositoriesData } from '../../models/store/repository'
import { RepositoryCardTypes } from '../../models/store/repository'
import { RootState } from '../../store/reducers'
import { fetchRepositories } from '../../store/action-creators'

const Repositories: FC<Props> = ({
  repositories,
  repositoriesLoading,
  repositoriesLoaded,
  fetchRepositories,
}) => {
  useEffect(() => {
    !repositoriesLoading && !repositoriesLoaded && fetchRepositories()
  }, [fetchRepositories, repositoriesLoading, repositoriesLoaded])

  if (repositories.length === 0 && repositoriesLoaded) {
    return <div>Данные по вашему запросу отсутствуют</div>
  }

  if (repositoriesLoading) {
    return <div>Загрузка...</div>
  }

  return (
    <section className={styles.wrapper}>
      {repositories.map((repository: RepositoryCardTypes) => (
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

export default connect(mapStateToProps, mapDispatchToProps)(Repositories)
