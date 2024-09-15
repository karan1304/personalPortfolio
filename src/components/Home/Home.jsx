import React from 'react'
import {ReactTyped} from 'react-typed';
import styles from "../../styles/components/Home/home.module.css"
import {SVG} from "../../assets/images/index.js"

const Home = () => {
  return (
    <div className={styles.home} id="home">
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
    </div>
  )
}

export default Home