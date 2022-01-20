import React from 'react';
import styles from './navbar.module.scss';

type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className={styles.container}>
      <h1>
        Alex Toro Portfolio
      </h1>
    </div>
  )
}

export default Navbar
