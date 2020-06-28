import React, { useEffect, FC } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import styles from './RepositoryContributors.module.scss'
import { RootState } from '../../../store/reducers'
import { fetchContributors } from '../../../store/action-creators'
import { ContributorsData } from '../../../models/store/contributor'

const RepositoryContributors: FC<Props> = ({
  contributors_url,
  contributors,
  contributorsLoading,
  contributorsLoaded,
  fetchContributors,
}) => {
  useEffect(() => {
    !contributorsLoading &&
      !contributorsLoaded &&
      fetchContributors(contributors_url)
  }, [fetchContributors, contributorsLoading, contributorsLoaded])

  if (contributorsLoading) {
    return <div>Загрузка...</div>
  }

  if (contributors !== undefined && contributors.length !== 0) {
    return (
      <section className={styles.wrapper}>
        <h2 className={styles.title}>Top 10 contributors</h2>
        <div className={styles.contributors}>
          {contributors.splice(0, 10).map((contributor) => (
            <article key={contributor.id} className={styles.contributor}>
              <NavLink to={contributor.html_url} className={styles.login}>
                {contributor.login}
              </NavLink>
              <div className={styles.avatar}>
                <img src={contributor.avatar_url} alt="Ава контрибьютера" />
              </div>
            </article>
          ))}
        </div>
      </section>
    )
  } else {
    return null
  }
}

interface Props {
  contributors_url: string
  contributors: Array<ContributorsData>
  contributorsLoading: boolean
  contributorsLoaded: boolean
  fetchContributors: any
}

const mapStateToProps = (state: RootState) => ({
  contributors: state.contributors.entities,
  contributorsLoading: state.contributors.loading,
  contributorsLoaded: state.contributors.loaded,
})

const mapDispatchToProps = {
  fetchContributors,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepositoryContributors)
