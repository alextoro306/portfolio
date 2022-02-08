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
           <p className={styles.regular}>Developer</p>
         </div>
         <ul>
           <li>
             <div className={styles.data}>
               Espoo, Suomi
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
             <div className={styles.skill_per}>[50%]</div>
           </li>
           <li>
             <div className={styles.skill_name}>
               CSS
             </div>
             <div className={styles.skill_progress}>
               <span style={{width: "50%"}}></span>
             </div>
             <div className={styles.skill_per}>[50%]</div>
           </li>
           <li>
             <div className={styles.skill_name}>
               React
             </div>
             <div className={styles.skill_progress}>
               <span style={{width: "50%"}}></span>
             </div>
             <div className={styles.skill_per}>[50%]</div>
           </li>
           <li>
             <div className={styles.skill_name}>
               Unity
             </div>
             <div className={styles.skill_progress}>
               <span style={{width: "50%"}}></span>
             </div>
             <div className={styles.skill_per}>[50%]</div>
           </li>
           <li>
             <div className={styles.skill_name}>
               TypeScript
             </div>
             <div className={styles.skill_progress}>
               <span style={{width: "50%"}}></span>
             </div>
             <div className={styles.skill_per}>[50%]</div>
           </li>
           <li>
             <div className={styles.skill_name}>
               JavaScript
             </div>
             <div className={styles.skill_progress}>
               <span style={{width: "50%"}}></span>
             </div>
             <div className={styles.skill_per}>[50%]</div>
           </li>
         </ul>
       </div>
       <div className={`${styles.class1resume_item} ${styles.class2resume_social}`}>
         <div className={styles.title}>
           <p className={styles.bold}>Social Media</p>
         </div>
         <ul>
         
           <li>
             <div className={styles.icon}>
               <i className="fab fa-twitter-square"></i>
             </div>
             <div className={styles.data}>
               <p className="semi-bold">Twitter</p>
               <p>@MrLexaaa</p>
             </div>
           </li>
           <li>
             <div className={styles.icon}>
               <i className="fab fa-youtube"></i>
             </div>
             <div className={styles.data}>
               <p className="semi-bold">Youtube</p>
               <p>LexaFlexaa</p>
             </div>
           </li>
           <li>
             <div className={styles.icon}>
               <i className="fab fa-youtube"></i>
             </div>
             <div className={styles.data}>
               <p className="semi-bold">Instagram</p>
               <p>@mrlexaaa</p>
             </div>
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
                <div className={styles.date}>2013 - 2015</div> 
                <div className={styles.info}>
                     <p className="semi-bold">Lorem ipsum dolor sit amet.</p> 
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
                </div>
            </li>
            <li>
              <div className={styles.date}>2015 - 2017</div>
              <div className={styles.info}>
                     <p className="semi-bold">Lorem ipsum dolor sit amet.</p> 
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
                </div>
            </li>
            <li>
              <div className={styles.date}>2017 - Present</div>
              <div className={styles.info}>
                     <p className="semi-bold">Lorem ipsum dolor sit amet.</p> 
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
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
                  <div className={styles.info}></div>
                </div>
            </li>
            <li>
              <div className={styles.date}>2020 - </div>
              <div className={styles.info}>
                     <p className="semi-bold">Vocational School</p> 
                  <p>I study at Varia Myyrmäki.</p>
                  <div className={styles.info}></div>
                </div>
            </li>
        </ul>
    </div>
    <div className={`${styles.class1resume_item} ${styles.class2resume_hobby}`}>
      <div className={styles.title}>
           <p className={styles.bold}>Hobby</p>
           <p>I play video games and hang out with my friends.</p>
         </div>
       <ul>
         <li><i className="fas fa-book"></i></li>
         <li><i className="fas fa-gamepad"></i></li>
         <li><i className="fas fa-music"></i></li>
         <li><i className="fab fa-pagelines"></i></li>
      </ul>
    </div>
  </div>
</div>
    </div>
  )
}

export default Cv
