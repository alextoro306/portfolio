import React from 'react'
import styles from './cv.module.scss'
import { contactData, eduData, hobbiesData, workData } from './cvData'

type CvProps = {

}

const Cv: React.FC<CvProps> = () => {
  return (
    <div className={styles.container}>

        <div className={styles.tag1}>
            <p>CV</p>
        </div>

        <div className={styles.tag2}>
            <p>Hi, My name is Alex Toro and im studying information and communication technologies. Im currently studying at Varia Myyrmäki Vantaa. The things i've learnt are the following: Basics of Java, JavaScript, TypeScript, React, CSS and SCSSI've studied the basics of Unity, and C# scripting for Unity. I have been studying for a little over a year and a half so far.</p>
        </div>

        <div className={styles.education}>

            <div className={styles.border}/>

            <div className={styles.tag3}>
                <p>Education</p>
            </div>

            {
                eduData.map(eduitem => (
                    <div className={styles.eduItem} key={eduitem.key}>
                        <h3 className={styles.eduLevel}>{eduitem.schoolLevel}<p className={styles.perioid}>{eduitem.schoolStart} - {eduitem.schoolEnd}</p></h3>
                        <p className={styles.description}>{eduitem.description}</p>
                    </div>
                ))
            }

        </div>

        <div className={styles.border}/>
        
        <div className={styles.tag4}>
          <p>Work Experience</p>
        </div>  
        
            <div className={styles.work}>

                {
                    workData.map(workitem => (
                        <div className={styles.eduItem} key={workitem.key}>
                            <h3 className={styles.eduLevel}>{workitem.schoolLevel}<p className={styles.perioid}>{workitem.schoolStart}</p></h3>
                            <p className={styles.description}>{workitem.description}</p>
                        </div>
                    ))
                }

            </div>
      
        <div className={styles.border}/>

        <div className={styles.tag5}>
            <p>My Hobbies</p>
        </div>

        <div className={styles.hobbies}>

                {
                    hobbiesData.map(hobbiesitem => (
                        <div className={styles.hobbiesItem} key={hobbiesitem.key}>
                            <p className={styles.description}>{hobbiesitem.description}</p>
                        </div>
                    ))
                }

        </div>

        <div className={styles.border}/>
        
        <div className={styles.tag6}>
            <p>Contact</p>
        </div>

        <div className={styles.contact}>

            {
                contactData.map(contactitem => (
                    <div className={styles.contactItem} key={contactitem.key}>
                        <p className={styles.description}>{contactitem.description}</p>
                    </div>
                ))
            }

        </div>

        <div className={styles.border}/>

    </div>

  )
}

export default Cv
