import React from 'react'
import { hot } from 'react-hot-loader'
import { HashRouter, Route } from 'react-router-dom'
import Home from 'src/renderer/components/containers/Home/Home'
import styles from './App.module.scss'

const App: React.FC = () => {
  return (
    <div className={styles.appStyles}>
      <HashRouter>
        <Route path="/" exact component={Home} />
      </HashRouter>
    </div>
  )
}

export default hot(module)(App)
