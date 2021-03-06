import React, { FC } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import styles from './App.module.scss'
import store from '../../store'
import Header from '../Header/Header'
import Search from '../Search/Search'
import Repositories from '../Repositories/Repositories'
import RepositoryPage from '../RepositoryPage/RepositoryPage'
import Paginator from '../Paginator/Paginator'

const App: FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Route exact path="/" component={Search} />
        <Route exact path="/" component={Repositories} />
        <Route exact path="/" component={Paginator} />
        <Route path="/repository/:id" render={() => <RepositoryPage />} />
      </Router>
    </Provider>
  )
}

export default App
