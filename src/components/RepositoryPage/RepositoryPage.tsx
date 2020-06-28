import React, { useEffect, useState, FC, useMemo } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

import styles from './RepositoryPage.module.scss'
import RepositoryOwnerAvatar from './RepositoryOwnerAvatar/RepositoryOwnerAvatar'
import RepositoryStars from '../RepositoryStars/RepositoryStars'
import RepositoryUpdate from '../RepositoryUpdate/RepositoryUpdate'
import RepositoryLanguages from './RepositoryLanguages/RepositoryLanguages'
import RepositoryContributors from './RepositoryContributors/RepositoryContributors'
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
      <div className={styles.pageWrapper}>
        <h1 className="visually-hidden">Страница репозитория</h1>
        <div className={styles.mainInfoWrapper}>
          <RepositoryOwnerAvatar avatar_url={repository.owner.avatar_url} />
          <div className={styles.mainInfoText}>
            <div className={styles.nameAndStarsWrapper}>
              <p className={styles.name}>{repository.name}</p>
              <RepositoryStars stargazers_count={repository.stargazers_count} />
            </div>
            <p className={styles.description}>{repository.description}</p>
          </div>
        </div>
        <RepositoryUpdate
          updated_at={repository.updated_at}
          ownerLink={repository.owner.html_url}
          ownerLogin={repository.owner.login}
        />
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
