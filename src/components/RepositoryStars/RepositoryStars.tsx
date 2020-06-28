import React, { useEffect, useState, FC, useMemo } from 'react'

import styles from './RepositoryStars.module.scss'
import star from '../../assets/images/star.png'

const RepositoryStars: FC<Props> = ({ stargazers_count }) => {
  const [starsCount, setStarsCount] = useState<string>()

  useMemo(() => {
    if (stargazers_count > 999) {
      setStarsCount(String(stargazers_count).slice(0, 3) + 'k')
    } else {
      setStarsCount(String(stargazers_count))
    }
  }, [stargazers_count])

  return (
    <div className={styles.stars}>
      <div className={styles.starIcon}>
        <img src={star} alt="Звезда" />
      </div>
      <p className={styles.starsCount}>{starsCount}</p>
    </div>
  )
}

interface Props {
  stargazers_count: number
}

export default RepositoryStars
