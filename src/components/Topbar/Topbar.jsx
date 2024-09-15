import React, { useState } from 'react'
import styles from "../../styles/components/Topbar/topbar.module.css"
import {SVG} from "../../assets/images/index.js"

const Topbar = () => {
    const [isMenuOpen , setIsMenuOpen] = useState(false);
  return (
    <div className={styles.topbar}>
        <div className={styles.header}>
            <a href="#" className={styles.headerName}>karan Sharma</a> 
            {isMenuOpen?<a className={styles.toggle} onClick={()=>setIsMenuOpen(false)}><img src={SVG.ToggleOff}/></a>:<a className={styles.toggle} onClick={()=>setIsMenuOpen(true)}><img src={SVG.ToggleOn}/></a>}
        </div>
        {isMenuOpen && <div className={styles.menu}>
            <ul className={styles.list}>
                <li className={styles.item}><a href="#home" className={styles.link} onClick={()=>setIsMenuOpen(false)}>Home</a></li>
                <li className={styles.item}><a href="#about" className={styles.link} onClick={()=>setIsMenuOpen(false)}>About Me</a></li>
                <li className={styles.item}><a href="#portfolio" className={styles.link} onClick={()=>setIsMenuOpen(false)}>Portfolio</a></li>
                <li className={styles.item}><a href="#resume" className={styles.link} onClick={()=>setIsMenuOpen(false)}>Resume</a></li>
                <li className={styles.item}><a href="#contact" className={styles.link} onClick={()=>setIsMenuOpen(false)}>Contact</a></li>
            </ul>
        </div>}
    </div>
  )
}

export default Topbar