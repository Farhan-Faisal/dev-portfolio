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
            <motion.div style={{scaleY: scrollYProgress }} className='absolute left-8 top-0 w-[4px] h-full bg-dark origin-top'/>

            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details
                    position="Full Stack Developer Intern" company="University of Alberta"
                    time="May 2024 – Aug 2024" address="Alberta, Canada"
                    work="Developed a full stack Air Quality (AQHI) monitoring dashboard for the region of Edmonton to ensure children’s supervisors know when it is safe to play outside.
                            • Used React for dashboard frontend, NodeJS for backend, & designed CosmosDB schemas (SQL) for data storage. 
                            • Learned DevOps processes by creating a CI/CD pipeline via GitHub Actions to deploy application on Vercel (frontend) and Azure Functions (backend), reducing deployment times by 30%.
                            • Communicated with non-technical clients to gather & document requirements (as user stories) for development.

                        "
                />

                <Details
                    position="Frontend Developer Intern" company="University of Alberta"
                    time="Jan 2023 – Apr 2023" address="Alberta, Canada"
                    work="Developed a course scheduling web app (in a team of 3 people) integrating a ReactJS frontend and Java SpringBoot backend (REST API). 
                            • Created and executed unit test scripts via Selenium & Jest to ensure frontend and backend feature reliability.
                            • Designed a MySQL database of courses from Python web scraped course data enhancing data accessibility by 50%. 
                            • Utilized version control (Git/GitHub), followed AGILE practices (with Jira), and documented code, ensuring smooth collaboration and feature development.

                        "
                />

                <Details
                    position="Coop- Systems Analyst" company="Fairmont Banff Springs"
                    time="May 2023 – Aug 2023" address="Alberta, Canada"
                    work="Created Linux Shell scripts to automate MySQL database updates reducing manual workload by 50%.
                            • Troubleshoot IT tickets skills related to numerous hardware/firmware problems (desktop setups, Hubs, and switches) within a 24-hour turnaround time.
                        "
                />

            </ul>
        </div>
    
    </div>
  )
}

export default Experience