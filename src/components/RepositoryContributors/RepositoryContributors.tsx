import React, { useEffect, useState, FC, useMemo } from 'react'
import { connect } from 'react-redux'

import { RootState } from '../../store/reducers'
import { fetchContributors } from '../../store/action-creators'
import { ContributorsData } from '../../models/store/contributor'

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

  if (contributors !== undefined) {
    return (
      <div>
        {contributors.splice(0, 10).map((contributor) => (
          <div key={contributor.id}>
            <p>{contributor.login}</p>
            <div>
              <img src={contributor.avatar_url} alt="Ава контрибьютера" />
            </div>
            <p>{contributor.html_url}</p>
          </div>
        ))}
      </div>
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
