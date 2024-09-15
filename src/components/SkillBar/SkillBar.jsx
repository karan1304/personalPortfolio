import React from 'react'
import styles from "../../styles/components/SkillBar/skillbar.module.css"

const SkillBar = ({skill , value}) => {
  return (
    <>
        <div className={styles.skillBar}>
            <div className={styles.headingContainer}>
                <strong className={styles.skillName}>{skill}</strong>
                <strong className={styles.skillValue}>{`${value}%`}</strong>
            </div>
            <div className={styles.progressBarContainer}>
                <div className={styles.progressBar}>

                </div>
                <div className={styles.bar} style={{width:`${value}%`}}>

                </div>
            </div>
        </div>
    </>
  )
}

export default SkillBar