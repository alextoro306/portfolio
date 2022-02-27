import React from 'react'
import styles from './projects.module.scss';

type ProjectsProps = {

}

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <div className={styles.links}>
        <a className={styles.gitHubLink} href="https://github.com/alextoro306" target="_blank">
        Open In GitHub
        </a>
        <div className={styles.links2}>
          <a className={styles.portfolioLink} href="https://github.com/alextoro306/portfolio" target="_blank">
          Open In Unity
          </a>
        </div>
        <div className={styles.links3}>
          <a className={styles.gamesLink} href="https://play.unity.com/u/lexaaaaa" target="_blank">
          Open In GitHub
          </a>
        </div>
        <div className={styles.container}>
          <h2>👤GitHub Profile</h2>
          <h3>🎮Games</h3>
          <h4>📁Portfolio</h4>
        </div>
        </div>
  )
}

export default Projects
