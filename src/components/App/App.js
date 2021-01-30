import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Sidebar from '../Sidebar/Sidebar'
import Dashboard from '../../pages/Dashboard'
import Profile from '../../pages/Profile'
import Services from '../../pages/Services'

import styles from './App.module.css'

function App() {
  return (
    <div className={styles.container}>
      <Router>
        <Sidebar />
        <Switch>
          <Route exact path="/main">
            <Dashboard />
          </Route>
          <Route exact path="/">
            <Profile />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
