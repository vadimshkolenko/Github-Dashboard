import React, { FC } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// import styles from './App.module.scss'
import Header from '../Header/Header'
import Search from '../Search/Search'

const App: FC = () => {
  return (
    <>
      <Router>
        <Header />
        <Route exact path="/" component={Search} />
      </Router>
    </>
  )
}

export default App
