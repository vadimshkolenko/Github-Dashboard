import React, { FC, useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import debounce from 'lodash/debounce'

import { setQuery } from '../../store/action-creators'
import styles from './Search.module.scss'

const DEBOUNCE_TIME = 500

const Search: FC = () => {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()

  const debounceChangeText = useCallback(
    debounce((value) => dispatch(setQuery(value)), DEBOUNCE_TIME),
    []
  )

  const handleInputChange = (event: any) => {
    const value = event.currentTarget.value
    setInputValue(value)
    debounceChangeText(value)
  }
  return (
    <div className={styles.searchWrapper}>
      <label className={styles.searchLabel}>
        <input
          onChange={handleInputChange}
          value={inputValue}
          className={styles.searchInput}
          type="text"
          placeholder="Search"
        />
      </label>
    </div>
  )
}

export default Search
