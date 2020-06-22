import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Header.module.scss'
import logo from '../../assets/images/logo.png'

const Header: FC = () => {
  return (
    <header>
      <div className={styles.logoWrapper}>
        <NavLink to="https://github.com/" target="_blank">
          <img src={logo} alt="Логотип GitHub" />
        </NavLink>
      </div>
      <div className={styles.projectName}>GITHUB DASHBOARD</div>
    </header>
  )
}

export default Header
