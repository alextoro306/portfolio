import React from 'react'
import styles from './topBar.module.scss'

type TopBarProps = {

}

const TopBar: React.FC<TopBarProps> = () => {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
          <h3>
            Alex Toro Portfolio
          </h3>
        </div>
        <div className={styles.links}>
        <p className={styles.link}>Home</p> 
        <p className={styles.link}>Projects</p>
        <p className={styles.link}>CV</p>
        </div>
      </div>
  )
}

export default TopBar
