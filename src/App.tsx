// App.tsx
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import styles from './App.module.scss'
import avatar from './media/avatar.jpg'



const App: React.FC = () => {
  return (
    <Router basename='/portfolio'>
      
      <p className={styles.nimi}> Alexin Portfolio</p>
      <img className={styles.src} src={avatar} alt=""/>
      <p className={styles.cv}> </p>
    </Router>
  )
}

export default App
