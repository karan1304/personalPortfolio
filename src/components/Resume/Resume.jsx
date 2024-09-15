import React from 'react'
import styles from "../../styles/components/Resume/resume.module.css"
import {SVG} from "../../assets/images/index.js"
import Card from '../Card/Card.jsx'
import SkillBar from '../SkillBar/SkillBar.jsx'

const Resume = () => {

    const leftSkills = [
        { name: 'Html', value: 85,  },
        { name: 'Css', value: 80, },
        { name: 'Javascript', value: 80, },
        { name: 'React', value: 80,}
      ];

      const rightSkills = [
        { name: 'Next', value: 65, },
        { name: 'Node', value: 50,  },
        { name: 'Express', value: 50, },
        { name: 'AI Tools', value: 30, }
      ];

      const educationArr = [
        {
            branch:'Secondary Education',
            institution:'Naveen Public School',
            desc:"In 10th grade, my passion for math, science, and computers drove my academic success and challenge-solving. I balanced studies with sports and explored technology and innovation. Reflecting on this period, I’m grateful for the growth and opportunities that shaped me as a student and individual.",
            duration:'2009 - 2016'
        },
        {
            branch:'Higher Education',
            institution:'Geeta Bal Bharti School',
            desc:"In 12th grade, I embraced challenges at a new school, focusing on math and business, which sparked my entrepreneurial spirit. Despite moments of loneliness, I stayed dedicated to academic excellence and personal growth, proud of my resilience and passion.",
            duration:'2016 - 2018'
        },
        {
            branch:'Bachelor Degree',
            institution:'Indra Gandhi National Open University',
            desc:"In college, I embraced my passion for technology, from coding software to exploring hardware. Focused on computer science and engineering, I seized opportunities to innovate and create. I'm eager to continue leveraging technology for positive change.",
            duration:'2018 - 2022'
        },
      ]

      const experienceArr = [
        {
            company:'Techlanz Pvt Ltd',
            position:'Web Developer Intern',
            duration:'Jun 2024 - Aug 2024',
            desc:"During my two-month web development internship, I mastered AI tools and Figma, developed new features, and fixed bugs on the startup's websites. This experience enhanced my skills in design and development, increasing my efficiency in web development tasks."
        },
    ]

  return (
    <div className={styles.resume} id="resume">
        <div className={styles.container}>

            <div className={styles.headingContainer}>
                <h1 className={styles.heading}>SUMMARY</h1>
                <h1 className={styles.subHeading}>Resume</h1>
            </div>
            
            <div className={styles.educationContainer}>
                <div className={styles.education}>
                    <h1 className={styles.heading}>My Education</h1>
                    {
                        educationArr.map((edu, index) => (
                            <Card key={index} branch={edu.branch} institution={edu.institution} desc={edu.desc} duration={edu.duration}/>
                        ))
                    }
                </div>
                <div className={styles.experience}>
                    <h1 className={styles.heading}>My Experience</h1>
                    {
                        experienceArr.map((exp, index) => (
                            <Card key={index} branch={exp.position} institution={exp.company} duration={exp.duration} desc={exp.desc}/>
                        ))
                    }
                </div>
            </div>

            <div className={styles.skills}>
            <h1 className={styles.heading}>My Skills</h1>
                <div className={styles.allSkills}>
                
                    <div className={styles.skillsContainer}>
                        {leftSkills.map((skill, index) => (
                            <SkillBar key={index} skill={skill.name} value={skill.value} />
                        ))}
                    </div>
                    <div className={styles.skillsContainer}>
                        {rightSkills.map((skill, index) => (
                            <SkillBar key={index} skill={skill.name} value={skill.value} />
                        ))}
                    </div>
                </div>
            </div>

            

        </div>
    </div>
  )
}

export default Resume