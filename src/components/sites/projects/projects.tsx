import React from 'react'
import styles from './projects.module.scss';

type ProjectsProps = {

}

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <div className={styles.links}>
    <p className={styles.link}>GitHub</p> 
    <p className={styles.link}>Games</p>
    </div>
  )
}

export default Projects
