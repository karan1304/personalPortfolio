import React from 'react'
import styles from "../../styles/components/NewsCard/newsCard.module.css"
import {SVG} from "../../assets/images/index.js"

const NewsCard = ({Image, Title , Desc , link}) => {
  return (
    <div className={styles.newsCard}>
        <img src={Image} className={styles.newsImage}/>
        <div className={styles.details}>
            <p className={styles.tag}><span>in</span>Tech</p>
            <h1 className={styles.heading}>{Title}</h1>
            <p className={styles.desc}>{Desc}</p>
            <a href={link} target="_blank" className={styles.newsLink}>Read</a>
        </div>

    </div>
  )
}

export default NewsCard