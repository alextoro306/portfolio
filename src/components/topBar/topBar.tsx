import React from 'react'
import styles from './topBar.module.scss'

type TopBarProps = {

}

const TopBar: React.FC<TopBarProps> = () => {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
          <h3>
            Alex
          </h3>
        </div>
        <div className={styles.links}>
        <p className={styles.link}>link1</p> 
        <p className={styles.link}>link2</p>
        </div>
      </div>
  )
}

export default TopBar
