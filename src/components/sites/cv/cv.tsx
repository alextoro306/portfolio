import React from 'react'
import { useDarkmodeContext } from '../../../darkmode/darkmodeContextProvider';
import styles from "./cv.module.scss"

type CvProps = {

}

const Cv: React.FC<CvProps> = () => {
  const {useDarkmode} = useDarkmodeContext()
  return (
    <div className={useDarkmode ? styles.dark : styles.light}>

      <div className={styles.container}>

        <div className={styles.tag1}>
          <span><p>CV</p></span>
        </div>

        <div className={styles.tag2}>
          <span><p>Hi, My name is Alex Toro and im studying information and communication technologies. Im currently studying at Varia Myyrmäki Vantaa. The things i've learnt are the following: Basics of Java, JavaScript, TypeScript, React, CSS and SCSSI've studied the basics of Unity, and C# scripting for Unity. I have been studying for a little over a year and a half so far.</p></span>
        </div>

        <div className={styles.tag3}>
          <span><p></p></span>
        </div>
        
        <div className={styles.tag4}>
          <span><p>Contact</p></span>
        </div>

        <div className={styles.tag5}>
          <span> <p>📩 alextoro306@gmail.com</p> <p>📞 +358442412749</p> <p>📍 Espoo, Finland</p> </span>
        </div>

        <div className={styles.tag6}>
          <span><p></p></span>
        </div>

        <div className={styles.tag7}>
          <span><p>Education</p></span>
        </div>

        <div className={styles.tag8}>
          <span><p>2011-2017</p></span>
        </div>

        <div className={styles.tag9}>
          <span><p>Primary School</p></span>
        </div>

        <div className={styles.tag10}>
          <span><p>I was in three different schools. They were Koulumestarin koulu (2011-2014), Ymmerstan koulu (2014-2016) and Juvanpuiston koulu (2016-2017).</p></span>
        </div>

        <div className={styles.tag11}>
          <span><p>2017-2020</p></span>
        </div>

        <div className={styles.tag12}>
          <span><p>Junior High School</p></span>
        </div>

        <div className={styles.tag13}>
          <span><p>I studied the whole junior high school time at Juvanpuiston koulu.</p></span>
        </div>

        <div className={styles.tag14}>
          <span><p>Vocational College</p></span>
        </div>

        <div className={styles.tag15}>
          <span><p>2020 -</p></span>
        </div>

        <div className={styles.tag16}>
          <span><p>I study at Varia Myyrmäki.</p></span>
        </div>

        <div className={styles.tag17}>
          <span><p></p></span>
        </div>

        <div className={styles.tag18}>
          <span><p>Work Experience</p></span>
        </div>

        <div className={styles.tag19}>
          <span><p>Kindergarten</p></span>
        </div>

        <div className={styles.tag20}>
          <span><p>2018</p></span>
        </div>

        <div className={styles.tag21}>
          <span><p>I worked at kindergarten when i was 14 years old.</p></span>
        </div>

        <div className={styles.tag22}>
          <span><p>Food Restaurant</p></span>
        </div>

        <div className={styles.tag23}>
          <span><p>2019</p></span>
        </div>

        <div className={styles.tag24}>
          <span><p>I worked at restaurant when i was 15 years old.</p></span>
        </div>

        <div className={styles.tag25}>
          <span><p></p></span>
        </div>

        <div className={styles.tag26}>
          <span><p>My Hobbies</p></span>
        </div>

        <div className={styles.tag27}>
          <span><p>I play video games and hang out with my friends.</p></span>
        </div>

        <div className={styles.tag28}>
          <span><p></p></span>
        </div>
        
      </div>
          </div>
  )
}

export default Cv
