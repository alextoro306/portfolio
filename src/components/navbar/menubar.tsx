import React from 'react';
import { Link } from 'react-router-dom';
import Darkmodebutton from '../../darkmode/darkmodebutton';
import { useDarkmodeContext } from '../../darkmode/darkmodeContextProvider';
import { MenuItems } from './menuItems';
import styles from './navbar.module.scss';
import {AiOutlineInstagram, AiOutlineTwitter, AiFillYoutube} from 'react-icons/ai'

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
                      {}
                      <Link className={useDarkmode ? styles.darklink:styles.lightlink} to={x.linkTo}>{x.title}</Link>
                      {
                        i % 2 === 0
                        ? null
                        : <p className={styles.spacing}>|</p>
                      }
                  </div>
              )
          })
      }
      
      <div className={styles.links}>
        <a className={styles.instagram} href="https://www.instagram.com/mrlexaaa/" target="_blank" rel="noreferrer">
        <AiOutlineInstagram size={34} />
        </a>
        <a className={styles.twitter} href="https://twitter.com/MrLexaaa" target="_blank" rel="noreferrer">
        <AiOutlineTwitter size={40} />
        </a>
        <a className={styles.youtube} href="https://www.youtube.com/channel/UCv6IPKD1hza_8NQG5TyJLWw" target="_blank" rel="noreferrer">
        <AiFillYoutube size={40} />
        </a>
        <div className={styles.darkModeButton}>
          <Darkmodebutton />
        </div>
      </div>
    </div>
  )
}

export default Menubar
