import React, { useEffect, useRef, useState } from 'react'
import styles from "../../styles/components/News/news.module.css"
import {SVG} from "../../assets/images/index.js"
import NewsCard from '../NewsCard/NewsCard.jsx'
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const News = () => {


  const controls = useAnimation()
    const [ref, inView] = useInView({
      threshold: 0.1,
      triggerOnce: false
    })
  
    useEffect(() => {
      if (inView) {
        controls.start("visible")
      } else {
        controls.start("hidden")
      }
    }, [controls, inView])
  
    const containerVariants = {
      visible: { 
        opacity: 1, 
        scale: 1, 
        transition: { 
          duration: 0.5,
          type: "spring",
          damping: 25,
          stiffness: 100
        } 
      },
      hidden: { 
        opacity: 0, 
        scale: 0.8
      }
    }


    const newsArr =[
      {
        Image:SVG.NewsOne,  
        title:'GitHub Enterprise Server',
        desc:"GitHub has released Enterprise Server 3.13.3, addressing several security vulnerabilities, including a critical flaw affecting instances using SAML single sign-on....",
        link:'https://www.developer-tech.com/news/github-enterprise-server-3-13-3-tackles-critical-saml-vulnerability/'
      },
      {
        Image:SVG.NewsTwo,  
        title:'SQL, Python, and Java skills',
        desc:"SQL, Python, and Java remain the most sought-after programming skills by employers, according to new research from System Design School....",
        link:'https://www.developer-tech.com/news/sql-python-and-java-most-sought-after-skills/'
      },
      {
        Image:SVG.NewsThree,  
        title:'Artificial Intelligence market',
        desc:"The global artificial intelligence (AI) market — an industry that has been blessed with serious hype (and rightly so: such unexpected growth and innovative solutions .....",
        link:'https://www.developer-tech.com/news/artificial-intelligence-market-expected-to-fit-a-trillion-dollars-by-2030/',
      },
    ]
  return (
    <div className={styles.news}>
        <motion.div ref={ref}
        animate={controls}
        initial="hidden"
        variants={containerVariants}
         className={styles.container}>
            <h1 className={styles.heading}>READ</h1>
            <h2 className={styles.subheading}>Latest News</h2>
            <div className={styles.newsCardContainer}>
                {
                  newsArr && newsArr.map((news)=>(
                    <NewsCard Image={news.Image} Title={news.title} Desc={news.desc} link={news.link}/>
                  ))
                }
            </div>
        </motion.div>
    </div>
  )
}

export default News