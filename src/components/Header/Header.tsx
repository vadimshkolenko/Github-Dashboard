import React, { FC } from 'react'

import styles from './Header.module.scss'
import logo from '../../assets/images/logo.png'

const Header: FC = () => {
  return (
    <header>
      <div className={styles.logoWrapper}>
        <a href="https://github.com">
          <img src={logo} alt="Логотип GitHub" />
        </a>
      </div>
      <div className={styles.projectName}>GITHUB DASHBOARD</div>
    </header>
  )
}

export default Header
