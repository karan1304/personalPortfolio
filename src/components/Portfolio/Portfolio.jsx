import React, { useEffect, useRef, useState } from 'react'
import styles from "../../styles/components/Portfolio/portfolio.module.css"
import {SVG} from "../../assets/images/index.js"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const Portfolio = () => {

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



    const [itemsToShow, setItemsToShow] = useState(6);

    const allItems = [
        { id: 1, category: 'Development', img: SVG.TailorMan, link: 'https://wondrous-kelpie-26742f.netlify.app/', label: 'Tailor Man' },
        { id: 2, category: 'Development', img: SVG.Groco, link: 'https://66276239f876e3987419e417--scintillating-pastelito-981abe.netlify.app/', label: 'Groco' },
        { id: 3, category: 'Design', img: SVG.TailorManFigma, link: 'https://www.figma.com/design/ZAMH8RqGAJ9mrtoknxyeWn/React-project?node-id=0-1&t=y17f2e71TUin0rot-1', label: 'TailorMan Figma' },
        { id: 4, category: 'AI', img: SVG.HeyGen, link: 'https://drive.google.com/file/d/1YrsV8_4KAQocR58AghvLQmlrD7czVEBZ/view?usp=drive_link', label: 'HeyGen: Text to Video' },
        { id: 5, category: 'Development', img: SVG.Dashboard, link: 'https://effulgent-melba-62abef.netlify.app/', label: 'Dashboard' },
        { id: 6, category: 'Design', img: SVG.Portfolio, link: 'https://www.figma.com/design/7cccVUeHhJEjOCtTZq2qoP/Portfolio?node-id=0-1&t=43VFQlPrtpwHl9JK-1', label: 'Personal Portfolio Figma' },
        { id: 7, category: 'Development', img: SVG.FitClub, link: 'https://subtle-halva-896b47.netlify.app/', label: 'Fit Club' },
        { id: 8, category: 'Development', img: SVG.StepLuke, link: 'https://66339564a526c90ef119885c--cerulean-meerkat-36f6ac.netlify.app/', label: 'StepLuke' },
        { id: 9, category: 'Development', img: SVG.Mausam, link: 'https://keen-granita-2d2fa9.netlify.app/', label: 'Mausam' },
        { id: 10, category: 'Development', img: SVG.Notes, link: 'https://663c5cfea718f75abdbe01f5--fluffy-cendol-19687b.netlify.app/', label: 'Notes' },
    ];

    const [selected , setSelected] = useState("All");
    const handleOnClick = (e)=>
        {   
            e.preventDefault();
            setSelected(e.target.textContent);
            setItemsToShow(6);
        }
    const loadMoreItems = () => {
        setItemsToShow((prev) => prev + 6); // Load 6 more items when clicking "Load More"
    };

    const filteredItems = selected === 'All' ? allItems : allItems.filter(item => item.category === selected);
  return (
    <div className={styles.portfolio} id="portfolio">
        
        <motion.div ref={ref}
        animate={controls}
        initial="hidden"
        variants={containerVariants} 
        className={styles.container}>
            
            <div className={styles.headingContainer}>
                    <h1 className={styles.heading}>PORTFOLIO</h1>
                    <h1 className={styles.subHeading}>My Work</h1>
            </div>

            <div className={styles.workContainer}>
                <div className={styles.navigation}>
                    <a href="" className={`${styles.link} ${selected === 'All'?styles.active:''}`} onClick={handleOnClick}>All</a>
                    <a href="" className={`${styles.link} ${selected === 'Development'?styles.active:''}`} onClick={handleOnClick}>Development</a>
                    <a href="" className={`${styles.link} ${selected === 'Design'?styles.active:''}`} onClick={handleOnClick}>Design</a>
                    <a href="" className={`${styles.link} ${selected === 'AI'?styles.active:''}`} onClick={handleOnClick} >AI</a>
                </div>
            </div>
            
            <div className={styles.parent}>
                {filteredItems.slice(0, itemsToShow).map(item => (
                    <div key={item.id} className={styles.foroverlay}>
                        <img src={item.img} className={styles.Image} />
                        <div className={styles.overlay}>
                            <a href={item.link} target="_blank" className={styles.overlayLink}>{item.label}</a>
                        </div>
                    </div>
                ))}

            </div>
            {itemsToShow < filteredItems.length && (
                    <div className={styles.loadMoreContainer}>
                        <button className={styles.loadMoreButton} onClick={loadMoreItems}>Load More</button>
                    </div>
                )}
        </motion.div>



    </div>
  )
}

export default Portfolio