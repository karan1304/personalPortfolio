import React from 'react'
import {ReactTyped} from 'react-typed';
import styles from "../../styles/components/Home/home.module.css"
import {SVG} from "../../assets/images/index.js"
import { motion } from "framer-motion"

const Home = () => {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className={styles.home} id="home">
        <div className={styles.personalInfo}>
            <h1 className={styles.heading}>Welcome</h1>
            <p className={styles.title}>
            <ReactTyped
            strings={[
              "I'm Karan Sharma",
              "I'm a Developer.",
              "I'm a Designer.",
              "I'm a Freelancer."
            ]}
            typeSpeed={100}
            backSpeed={60}
            backDelay={2000}
            loop
          />
            </p>
            <p className={styles.location}>based in Delhi, India</p>
            <a href="#contact" className={styles.hireMe}>Hire Me</a>
        </div>
    </motion.div>
  )
}

export default Home