import React from 'react'
import { useDarkmodeContext } from '../../../darkmode/darkmodeContextProvider';
import styles from './home.module.scss';
import pic1 from '../../../media/pic1.png'
import pic2 from '../../../media/pic2.png'
import pic3 from '../../../media/pic3.png'

type HomeProps = {

}

const Home: React.FC<HomeProps> = () => {
  const {useDarkmode} = useDarkmodeContext()
  return (
      <div className={useDarkmode ? styles.dark : styles.light}>
        <div className={styles.container}>
          <h2>Hello, My Name Is</h2>
          <h3>Alex Toro</h3>
          <h4>Developer</h4>
          <h5>Welcome To My Portfolio!</h5>
        </div>
        <div className={styles.img}>
          <img src={pic1} alt='pic1' />
          <img src={pic2} alt='pic2' />
          <img src={pic3} alt='pic3' />
        </div>
      </div>
  )
}

export default Home
