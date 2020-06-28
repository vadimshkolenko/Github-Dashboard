import React, { useEffect, useState, FC, useMemo } from 'react'
import { connect } from 'react-redux'

import styles from './RepositoryLanguages.module.scss'
import { RootState } from '../../../store/reducers'
import { fetchLanguages } from '../../../store/action-creators'

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

  if (languages !== undefined && Object.keys(languages).length !== 0) {
    return (
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Top languages</h2>
        <ul className={styles.list}>
          {Object.entries(languages).map((lang, index) => (
            <li className={styles.item} key={index}>
              {lang[0]}
            </li>
          ))}
        </ul>
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
