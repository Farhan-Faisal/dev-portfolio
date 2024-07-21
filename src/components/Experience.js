import React, { useEffect, useRef } from 'react'
import {motion, useScroll} from "framer-motion"
import LiIcon from './LiIcon'

const Details = ({position, company, time, address, work}) => {
    const ref = useRef(null);
    return(
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[80%] mx-auto flex flex-col items-center justify-between'>
            <LiIcon reference={ref}/>
            <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:"spring"}}>
                <h3 className="" style={{fontWeight: 'bold', fontSize:'25px'}}>{position}&nbsp;@{company}</h3>
                <span className="" style={{fontWeight: 'bold', color: 'black', opacity:'75'}}>{time} | {address}</span>
                <ul className="w-full">
                    {
                        work.split('•').map((bullet, index) => {
                            return (
                                <li key={index} className="p-2">
                                    <p style={{ textAlign: 'justify' }}>
                                        <span style={{fontWeight: 'bold'}}>•  </span>{bullet}
                                    </p>
                                </li>
                            )
                        })
                    }
                </ul>
            </motion.div>
        </li>
    )
}

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    });

  return (
    <div className='mt-32'>
        <h2 className='w-full text-center' style={{fontSize: '50px', fontWeight: 'bold'}}>Experience</h2>
        <div ref={ref} className='w-[75%] mx-auto relative'>
            <motion.div style={{scaleY: scrollYProgress}} className='absolute left-8 top-0 w-[4px] h-full bg-dark origin-top'/>

            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details
                    position="Data Analyst" company="Decision Neuroscience Lab"
                    time="Nov 2022 – Present" address="Ontario, Canada"
                    work="Implemented data pipelines in Python, pulling data from an SQL database, and transforming it to given needs reducing manual workload by 50%. 
                        •	Used LLMs via Python to calculate text similarity similarity on data sets of over 20,000 goal responses enabling investigation into human goal setting behaviors.
                        •	Communicated findings from data analysis to stakeholders in plain language with appropriate visuals generated with Python attesting to communication skills. 
                        •	Fine-tuned machine learning models (transformers) with PyTorch/TensorFlow to label qualitative data achieving 82% accuracy.
                        "
                />

                <Details
                    position="Frontend Developer Intern" company="University of Alberta"
                    time="Jan 2023 – Apr 2023" address="Alberta, Canada"
                    work="Developed a course scheduling web app following MVC architecture, integrating a JavaScript (ReactJS) front-end with a Java SpringBoot backend (REST API).
                        •	Created a MySQL database of courses from unstructured course data (obtained from web scraping using Python) enhancing data accessibility by 50%.
                        •	Set up a CI/CD pipeline using GitHub Actions for deployment on DockerHub (frontend) and AWS EC2 (backend) reducing deployment times by 60%. 
                        •	Utilized version control (Git/GitHub) and followed Agile methodologies including the code review process ensuring smooth collaboration and feature development.
                        "
                />

                <Details
                    position="Coop – Research Assistant" company="Baycrest Hospital"
                    time="Aug 2022 – Dec 2022" address="Toronto, ON, Canada"
                    work="Designed web based interactive study paradigms using JavaScript. 
                        •	Managed a MySQL data base to efficiently store and retrieve healthcare data.
                        •	Created Linux tcsh/bash & C++ scripts for neuroimaging data processing
                        "
                />

            </ul>
        </div>
    
    </div>
  )
}

export default Experience