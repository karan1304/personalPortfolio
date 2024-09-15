import React, { useState } from 'react'
import styles from "../../styles/components/Sidebar/Sidebar.module.css"
import {SVG} from "../../assets/images/index.js"

const Sidebar = () => {
  const [selected , setSelected] = useState("Home");
  const handleOnClick = (e)=>
  {
      setSelected(e.target.textContent);
  }
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.profile}>
          <div className={styles.profileImage}>
            <img src={SVG.Karan}/>
          </div>
          <h1 className={styles.name}>Karan Sharma</h1>
        </div>
        <div className={styles.navigation}>
              <ul className={styles.list}>
                <a href="#home" className={`${styles.link} ${selected === 'Home'?styles.active:''}`} id="link1" onClick={handleOnClick} >Home</a>
                <a href="#about" className={`${styles.link} ${selected === 'About Me'?styles.active:''}`} id="link2" onClick={handleOnClick}>About Me</a>
                <a href="#portfolio" className={`${styles.link} ${selected === 'Portfolio'?styles.active:''}`} id="link4" onClick={handleOnClick}>Portfolio</a>
                <a href="#resume" className={`${styles.link} ${selected === 'Resume'?styles.active:''}`} id="link3" onClick={handleOnClick}>Resume</a>
                <a href="#contact" className={`${styles.link} ${selected === 'Contact'?styles.active:''}`} id="link5" onClick={handleOnClick}>Contact</a>
              </ul>
        </div>
        <div className={styles.socialMedia}>
          <div className={styles.sicon}>
            <a href="https://github.com/karan1304" target="_blank"><img src={SVG.GithubIcon}/></a>
          </div>
          <div className={styles.sicon}>
          <a href="https://leetcode.com/u/karan13sharma/" target="_blank"><img src={SVG.LeetcodeIcon}/></a>
          </div>
          <div className={styles.sicon}>
          <a href="https://www.linkedin.com/in/karan-sharma-524768238/" target="_blank"><img src={SVG.LinkedinIcon}/></a>
          </div>
          <div className={styles.sicon}>
          <a href="https://x.com/KaranSh06487718?t=MED3jTlcZB_PfeQPyW0jPg&s=08" target="_blank"><img src={SVG.TwitterIcon}/></a>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default Sidebar