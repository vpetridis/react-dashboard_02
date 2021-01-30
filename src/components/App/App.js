import React from 'react'
import Dashboard from '../../pages/Dashboard'
import Sidebar from '../Sidebar/Sidebar'
import styles from './App.module.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Profile from '../../pages/Profile'

function App() {
  return (
    <div className={styles.container}>
      <Router>
        <Sidebar />
        <Switch>
          <Route exact path="/main">
            <Dashboard />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
