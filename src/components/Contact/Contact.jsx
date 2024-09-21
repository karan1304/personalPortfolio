import React, { useEffect, useRef, useState } from 'react'
import styles from "../../styles/components/Contact/contact.module.css"
import {SVG} from "../../assets/images/index.js"
import emailjs from 'emailjs-com';
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"


const Contact = () => {


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

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });


      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        };
    
        emailjs
          .send('service_h1d83jp', 'template_e596659', templateParams, 'XpE-HySqyyNaUP6Bx')
          .then(
            (result) => {
              alert('Email sent successfully!');
            },
            (error) => {
              console.log(error.text);
              alert('Error sending email');
            }
          );

          setFormData({
            name: '',
            email: '',
            message: ''
          });
      };

  return (
    <div className={styles.contact} id="contact">
        <motion.div ref={ref}
        animate={controls}
        initial="hidden"
        variants={containerVariants}
         className={styles.container}>
            <div className={styles.headingContainer}>
                <h1 className={styles.heading}>CONTACT</h1>
                <h1 className={styles.subHeading}>Get In Touch</h1>
            </div>
            <div className={styles.contactForm}>
                <div className={styles.addressContainer}>
                    <h1 className={styles.addressheading}>Address</h1>
                    <p className={styles.address}>Pkt-6, Flat No-14, Rohini Sector-21, North West Delhi, Delhi, India</p>
                    <a href="tel:+918799719698" className={styles.phone}><img src={SVG.Call} width={30} height={30} />(+91) 8799719698</a>
                    <a href="mailto:ksharma1342000@gmail.com"className={styles.email}><img src={SVG.Mail} width={30} height={30}/>ksharma1342000@gmail.com</a>

                    <h1 className={styles.followHeading}>FOLLOW ME</h1>
                    <div className={styles.socialMediaContainer}>
                    <div className={styles.sicon}>
                        <a href="https://github.com/karan1304" target="_blank"><img src={SVG.Github}/></a>
                    </div>
                    <div className={styles.sicon}>
                        <a href="https://leetcode.com/u/karan13sharma/" target="_blank"><img src={SVG.LeetCode}/></a>
                    </div>
                    <div className={styles.sicon}>
                        <a href="https://www.linkedin.com/in/karan-sharma-524768238/" target="_blank"><img src={SVG.Linkedin}/></a>
                    </div>
                    <div className={styles.sicon}>
                        <a href="https://x.com/KaranSh06487718?t=MED3jTlcZB_PfeQPyW0jPg&s=08" target="_blank"><img src={SVG.Twitter}/></a>
                    </div>
                    </div>

                </div>
                <div className={styles.formContainer}>
                    <form className={styles.contactUsForm} onSubmit={handleSubmit}>
                        <h1 className={styles.formheading}>Contact</h1>
                        <div className={styles.firstEmail}>
                            <input type="text" name="name" placeholder='Name' className={styles.name} value={formData.name} onChange={handleChange} required/>
                            <input type="email" name="email" placeholder='Email' className={styles.email} value={formData.email} onChange={handleChange} required/>
                        </div>
                        <div className={styles.messageContainer}>
                            <textarea className={styles.message} name="message" rows="8" placeholder='Message...' value={formData.message} onChange={handleChange} required></textarea>
                        </div>
                        <div className={styles.buttonContainer}>
                            <button type="submit" className={styles.submitButton}>submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default Contact