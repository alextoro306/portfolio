import React from 'react'
import styles from './notfound.module.scss';
import { Link } from 'react-router-dom';

type NotfoundProps = {

}

const Notfound: React.FC<NotfoundProps> = () => {
  return (
    <div className={styles.container}>
      <h2>404</h2>
      <h4>Page Not Found</h4>
      <h3>
        <Link to={"/"}>
          Home Here
        </Link>
      </h3>
    </div>
  )
}

export default Notfound
