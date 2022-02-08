import React from 'react'
import { useDarkmodeContext } from '../../../darkmode/darkmodeContextProvider';
import styles from './home.module.scss';

type HomeProps = {

}

const Home: React.FC<HomeProps> = () => {
  const {useDarkmode} = useDarkmodeContext()
  return (
    <div className={useDarkmode ? styles.dark : styles.light}>
      <div className={styles.container}>
        <h2>Hello, my name is</h2>
        <h3>ALEX TORO</h3>
        <h4>Developer</h4>
        <h5>Welcome To My Portfolio!</h5>
        </div>
        </div>
  )
}

export default Home
