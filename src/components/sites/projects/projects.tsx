import React from 'react'
import styles from './projects.module.scss';

type ProjectsProps = {

}

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <div className={styles.links}>
        <div className={styles.linkCard1}>
        <span><p>👤 GitHub Profile</p></span>
        <a href="https://github.com/alextoro306" target="_blank" rel="noreferrer">Open In GitHub</a>
        </div>
        <div className={styles.linkCard2}>
        <span><p>🎮 Games</p></span>
        <a href="https://play.unity.com/u/lexaaaaa" target="_blank" rel="noreferrer">Open In Unity</a>
        </div>
        <div className={styles.linkCard3}>
        <span><p>📁 Portfolio</p></span>
        <a href="https://github.com/alextoro306/portfolio" target="_blank" rel="noreferrer">Open In GitHub</a>
        </div>
    </div>
  )
}

export default Projects
