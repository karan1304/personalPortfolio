import React from 'react'
import styles from "../../styles/components/About/about.module.css"
import {SVG} from "../../assets/images/index.js"

const About = () => {
  return (
    <div className={styles.about} id="about">
        <div className={styles.container}>
            <div className={styles.headingContainer}>
                <h1 className={styles.heading}>ABOUT ME</h1>
                <h1 className={styles.subHeading}>Know Me More</h1>
            </div>
            <div className={styles.detailsContainer}>
                <div className={styles.descriptionContainer}>
                    <h1 className={styles.title}>I'm <span className={styles.name}>Karan Sharma,</span> a Web Developer</h1>
                    <p className={styles.summary}>I am Karan, a web developer with a passion for creating dynamic and engaging websites using React and Next.js. My two months of internship experience gave me valuable real-world exposure, but it's just a small part of my overall expertise. I pride myself on my creative approach to development, always seeking innovative solutions to design challenges and user experience problems.</p>
                    <p className={styles.summary}>One of my strengths is leveraging AI tools to enhance my productivity. This not only streamlines my workflow but also allows me to stay at the forefront of web development trends. Whether it's building interactive user interfaces or optimizing website performance, I combine my technical skills with creativity to deliver high-quality web solutions that meet and exceed client expectations.</p>
                </div>
                <div className={styles.personalDetails}>
                        <div className={styles.detail}>
                            <h1>Name : </h1>
                            <p>karan Sharma</p>
                        </div>
                        <div className={styles.detail}>
                            <h1>Email : </h1>
                            <a href="mailto:ksharma1342000@gmail.com">ksharma1342000@gmail.com</a>
                        </div>
                        <div className={styles.detail}>
                            <h1>Age : </h1>
                            <p>24</p>
                        </div>
                        <div className={styles.detail}>
                            <h1>From : </h1>
                            <p>Delhi, India</p>
                        </div>
                    <a href="./Resume.pdf" download="cv.pdf" className={styles.cv} >Download CV</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About