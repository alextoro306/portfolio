import React from 'react'
import { useDarkmodeContext } from '../../../darkmode/darkmodeContextProvider';
import styles from "./cv.module.scss"

type CvProps = {

}

const Cv: React.FC<CvProps> = () => {
  const {useDarkmode} = useDarkmodeContext()
  return (
    <div className={useDarkmode ? styles.dark : styles.light}>

<div className={styles.resume}>
   <div className={styles.resume_left}>
     <div className={styles.resume_profile}>
       <img src="https://images.news18.com/ibnlive/uploads/2020/05/1590926604_anonymous-minneapolis-pd-video-message-facebook-may-29.jpg?im=FitAndFill,width=1200,height=675"alt="profile_pic"/>
     </div>
     <div className={styles.resume_content}>
       <div className={`${styles.class1resume_item} ${styles.class2resume_info}`}>
         <div className={styles.title}>
           <p className={styles.bold}>Alex Toro</p>
         </div>
         <ul>
           <li>
             <div className={styles.regular}>
                Developer
             </div>
           </li>
           <li>
             <div className={styles.data}>
               Espoo, Finland
             </div>
           </li>
           <li>
             <div className={styles.data}>
               +358442412749
             </div>
           </li>
           <li>
             <div className={styles.data}>
               alextoro306@gmail.com
             </div>
           </li>
           <li>
           </li>
         </ul>
       </div>
       <div className={`${styles.class1resume_item} ${styles.class2resume_skills}`}>
         <div className={styles.title}>
           <p className={styles.bold}>skill's</p>
         </div>
         <ul>
           <li>
             <div className={styles.skill_name}>
               HTML
             </div>
             <div className={styles.skill_progress}>
               <span style={{width: "50%"}}></span>
             </div>
             <div className={styles.skill_per}>[Advanced]</div>
           </li>
           <li>
             <div className={styles.skill_name}>
               CSS
             </div>
             <div className={styles.skill_progress}>
               <span style={{width: "50%"}}></span>
             </div>
             <div className={styles.skill_per}>[Advanced]</div>
           </li>
           <li>
             <div className={styles.skill_name}>
               React
             </div>
             <div className={styles.skill_progress}>
               <span style={{width: "50%"}}></span>
             </div>
             <div className={styles.skill_per}>[Advanced]</div>
           </li>
           <li>
             <div className={styles.skill_name}>
               Unity
             </div>
             <div className={styles.skill_progress}>
               <span style={{width: "50%"}}></span>
             </div>
             <div className={styles.skill_per}>[Advanced]</div>
           </li>
           <li>
             <div className={styles.skill_name}>
               TypeScript
             </div>
             <div className={styles.skill_progress}>
               <span style={{width: "50%"}}></span>
             </div>
             <div className={styles.skill_per}>[Advanced]</div>
           </li>
           <li>
             <div className={styles.skill_name}>
               JavaScript
             </div>
             <div className={styles.skill_progress}>
               <span style={{width: "50%"}}></span>
             </div>
             <div className={styles.skill_per}>[Advanced]</div>
           </li>
         </ul>
       </div>
     </div>
  </div>
  <div className={styles.resume_right}>
    <div className={`${styles.class1resume_item} ${styles.class2resume_about}`}>
        <div className={styles.title}>
           <p className={styles.bold}>About Me</p>
         </div>
        <p>Hi, My name is Alex and im studying information and communication technologies. Im currently studying at Varia Myyrmäki Vantaa. The things i've learnt are the following: Basics of Java, JavaScript, TypeScript, React, CSS and SCSSI've studied the basics of Unity, and C# scripting for Unity. I have been studying for a little over a year and a half so far.</p>
    </div>
    <div className={`${styles.class1resume_item} ${styles.class2resume_work}`}>
        <div className={styles.title}>
           <p className={styles.bold}>Work Experience</p>
         </div>
        <ul>
            <li>
                <div className={styles.date}>2018</div> 
                <div className={styles.info}>
                     <p className="semi-bold">Kindergarten</p> 
                  <p>I worked at kindergarten when i was 14 years old.</p>
                </div>
            </li>
            <li>
              <div className={styles.date}>2019</div>
              <div className={styles.info}>
                     <p className="semi-bold">Food Restaurant</p> 
                  <p>I worked at restaurant when i was 15 years old.</p>
                </div>
            </li>
        </ul>
    </div>
    <div className={`${styles.class1resume_item} ${styles.class2resume_education}`}>
      <div className={styles.title}>
           <p className={styles.bold}>Education</p>
         </div>
      <ul>
            <li>
                <div className={styles.date}>2011 - 2017</div> 
                <div className={styles.info}>
                     <p className="semi-bold">Primary School</p> 
                  <p>I was in three different schools. They were Koulumestarin koulu (2011-2014), Ymmerstan koulu (2014-2016) and Juvanpuiston koulu (2016-2017).
                  </p>
                </div>
            </li>
            <li>
              <div className={styles.date}>2017 - 2020</div>
              <div className={styles.info}>
                     <p className="semi-bold">Junior High School</p> 
                  <p>I studied the whole junior high school time at Juvanpuiston koulu.</p>
                </div>
            </li>
            <li>
              <div className={styles.date}>2020 - </div>
              <div className={styles.info}>
                     <p className="semi-bold">Vocational School</p> 
                  <p>I study at Varia Myyrmäki.</p>
                </div>
            </li>
        </ul>
    </div>
    <div className={`${styles.class1resume_item} ${styles.class2resume_hobby}`}>
      <div className={styles.title}>
           <p className={styles.bold}>Hobby</p>
           <p>I play video games and hang out with my friends.</p>
         </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Cv
