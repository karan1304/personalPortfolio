import React from 'react'
import styles from "../../styles/components/Card/card.module.css"

const Card = ({branch, institution, desc , duration}) => {
  return (
    <div className={styles.card}>
        <strong className={styles.duration}>{duration}</strong>
        <h1 className={styles.heading}>{branch}</h1>
        <h3 className={styles.subheading}>{institution}</h3>
        <p className={styles.desc}>
            {desc}
        </p>
    </div>
  )
}

export default Card