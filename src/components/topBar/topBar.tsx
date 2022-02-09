import React from 'react'
import styles from './topBar.module.scss'

type TopBarProps = {

}

const TopBar: React.FC<TopBarProps> = () => {
  return (
        <div className={styles.links}>
        <p className={styles.link}>Home</p> 
        <p className={styles.link}>Projects</p>
        <p className={styles.link}>CV</p>
        </div>
  )
}

export default TopBar
