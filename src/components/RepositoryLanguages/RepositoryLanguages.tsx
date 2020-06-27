import React, { useEffect, useState, FC, useMemo } from 'react'
import { connect } from 'react-redux'

import { RootState } from '../../store/reducers'
import { fetchLanguages } from '../../store/action-creators'

const RepositoryLanguages: FC<Props> = ({
  languages_url,
  languages,
  languagesLoading,
  languagesLoaded,
  fetchLanguages,
}) => {
  useEffect(() => {
    !languagesLoading && !languagesLoaded && fetchLanguages(languages_url)
  }, [fetchLanguages, languagesLoading, languagesLoaded])

  if (languagesLoading) {
    return <div>Загрузка...</div>
  }

  if (languages !== undefined) {
    return (
      <div>
        {Object.entries(languages).map((lang, index) => (
          <div key={index}>
            <p>
              {lang[0]}: {lang[1]}
            </p>
          </div>
        ))}
      </div>
    )
  } else {
    return null
  }
}

interface Props {
  languages_url: string
  languages: any
  languagesLoading: boolean
  languagesLoaded: boolean
  fetchLanguages: any
}

const mapStateToProps = (state: RootState) => ({
  languages: state.languages.entities,
  languagesLoading: state.languages.loading,
  languagesLoaded: state.languages.loaded,
})

const mapDispatchToProps = {
  fetchLanguages,
}

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryLanguages)
