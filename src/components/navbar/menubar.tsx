import React from 'react';
import { MenuItems } from './menuItems';
import styles from './navbar.module.scss';

type MenubarProps = {

}

const Menubar: React.FC<MenubarProps> = () => {
  return (
    <div className={styles.menubar}>
      {
          MenuItems.map((x, i, arr) => {
              return (
                  <div key={x.index} className={styles.menuItem}>
                      {
                        i % 2 === 0
                        ? null
                        : <p className={styles.spacing}>|</p>
                      }
                      <a href={x.linkTo}>{x.title}</a>
                      {
                        i % 2 === 0
                        ? null
                        : <p className={styles.spacing}>|</p>
                      }
                  </div>
              )
          })
      }
    </div>
  )
}

export default Menubar
