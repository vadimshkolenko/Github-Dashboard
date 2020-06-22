import React, { FC } from 'react'

import styles from './Search.module.scss'

const Search: FC = () => {
  return (
    <div className={styles.searchWrapper}>
      <label className={styles.searchLabel}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search"
        />
      </label>
    </div>
  )
}

export default Search
