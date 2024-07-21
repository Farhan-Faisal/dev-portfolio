import React, { useEffect, useRef } from 'react'
import {motion, useScroll} from "framer-motion"
import LiIcon from './LiIcon'

const Details = ({position, company, time, address, work}) => {
    const ref = useRef(null);
    return(
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[90%] mx-auto flex flex-col items-center justify-between'>
            <LiIcon reference={ref}/>
            <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:"spring"}}>
                <h3 className="" style={{fontWeight: 'bold', fontSize:'25px'}}>{position}&nbsp;@{company}</h3>
                <span className="" style={{fontWeight: 'bold', color: 'black', opacity:'75'}}>{time} | {address}</span>
                <ul className="w-full">
                    {
                        work.split('.').map((bullet, index) => {
                            return (
                                <li key={index}>
                                    <p style={{ textAlign: 'justify' }}>
                                        <span style={{fontWeight: 'bold'}}>-  </span>{bullet}
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
                    position="Software Engineer" company="Google"
                    time="2022-Present" address="Mountain View, CA"
                    work="Worked on a team responsible for developing new features for Google's 
                        search engine. Including improving the accuracy and relevance of search results and. 
                        Developing new tools for data analysis and visualization"
                />

                <Details
                    position="Software Engineer" company="Google"
                    time="2022-Present" address="Mountain View, CA"
                    work="Worked on a team responsible for developing new features for Google's 
                        search engine. Including improving the accuracy and relevance of search results and. 
                        Developing new tools for data analysis and visualization"
                />

                <Details
                    position="Software Engineer" company="Google"
                    time="2022-Present" address="Mountain View, CA"
                    work="Worked on a team responsible for developing new features for Google's 
                        search engine. Including improving the accuracy and relevance of search results and. 
                        Developing new tools for data analysis and visualization"
                />

            </ul>
        </div>
    
    </div>
  )
}

export default Experience