import React, { useEffect, useRef } from 'react'
import {motion, useScroll} from "framer-motion"
import LiIcon from './LiIcon'

const EduDetails = ({type, time, place, info}) => {
    const ref = useRef(null);
    return(
        <li ref={ref} className='my-8 w-[80%] mx-auto flex flex-col items-left justify-between p-left-10'>
            <LiIcon reference={ref}/>
            <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:"spring"}}>
                <h3 className="" style={{fontWeight: 'bold', fontSize:'25px'}}>{type}</h3>
                
                <span className="" style={{fontWeight: 'bold', color: 'black', opacity:'75'}}>{time} | {place}</span>
                <ul className="w-full">
                    {
                        info.split(';').map((bullet, index) => {
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

const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    });

  return (
    <div className='mt-32'>
        <h2 className='w-full text-center' style={{fontSize: '50px', fontWeight: 'bold'}}>Education</h2>
        <div ref={ref} className='w-[75%] mx-auto relative'>
            <motion.div style={{scaleY: scrollYProgress}} className='absolute left-8 top-0 w-[4px] h-full bg-dark origin-top'/>

            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <EduDetails
                    type="HBSc in Computer Science & Neuroscience"
                    time="2020-2024" place="University of Toronto"
                    info="cGPA: 3.94; Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
                />

                <EduDetails
                    type="Masters in Data Science"
                    time="2024-2025" place="University of British Columbia"
                    info="cGPA: N/A"
                />

            </ul>
        </div>
    
    </div>
  )
}

export default Education