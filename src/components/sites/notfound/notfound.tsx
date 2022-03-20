import React from 'react'
import styles from './notfound.module.scss';

type NotfoundProps = {

}

const Notfound: React.FC<NotfoundProps> = () => {
  return (
    <div className={styles.container}>
      <h2>404</h2>
      <h4>Page Not Found</h4>
      <h3>😥</h3>
    </div>
  )
}

export default Notfound
