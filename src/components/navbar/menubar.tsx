import React from 'react';
import { Link } from 'react-router-dom';
import Darkmodebutton from '../../darkmode/darkmodebutton';
import { useDarkmodeContext } from '../../darkmode/darkmodeContextProvider';
import { MenuItems } from './menuItems';
import styles from './navbar.module.scss';

type MenubarProps = {

}

const Menubar: React.FC<MenubarProps> = () => {
  const { useDarkmode } = useDarkmodeContext()
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
                      {/* <a href={x.linkTo}>{x.title}</a> */}
                      <Link to={x.linkTo}>{x.title}</Link>
                      {
                        i % 2 === 0
                        ? null
                        : <p className={styles.spacing}>|</p>
                      }
                  </div>
              )
          })
      }
      <div className={styles.darkmodeButton}>
      <Darkmodebutton />
        {
          useDarkmode
        }
      </div>

    </div>
  )
}

export default Menubar
