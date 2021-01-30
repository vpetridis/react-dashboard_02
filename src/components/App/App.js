import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Sidebar from '../Sidebar/Sidebar'
import Dashboard from '../../pages/Dashboard'
import Profile from '../../pages/Profile'
import Services from '../../pages/Services'

import styles from './App.module.css'

function App() {
  return (
    <Router>
      <div className={styles.container}>
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Profile} />
          <Route exact path="/main" component={Dashboard} />
          <Route exact path="/services" component={Services} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
