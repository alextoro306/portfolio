// App.tsx
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import styles from './App.module.scss'
import TopBar from './components/topBar/topBar';




const App: React.FC = () => {
  return (
    <Router basename='/portfolio'>
      <TopBar/>
      <p className={styles.a}>/\</p>
      {/* <p className={styles.nimi}>Alex's portfolio</p>
      <p className={styles.cv}> </p>
      <p className={styles.info}>About Me</p>
      <p className={styles.line}>|</p> */}

    </Router>
  )
}

export default App
