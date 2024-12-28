import React, { useRef } from 'react'
import {motion, useScroll} from "framer-motion"
import EduDetails from "../molecules/EduationDetails"

const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-16 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Education</h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div style={{scaleY: scrollYProgress}} className='absolute left-8 top-0 w-[4px] h-full bg-dark origin-top'/>
        
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <EduDetails
                    type="Masters in Data Science"
                    time="2024-2025" place="University of British Columbia"
                    cGPA="4.00"
                    info="Relevant courses included Into to Databases (PostgreSQL), Supervised Learning, Data Vasualization, & Data Pipelines"
                />
                
                <EduDetails
                    type="HBSc in Computer Science & Neuroscience"
                    time="2020-2024" place="University of Toronto"
                    cGPA="3.94"
                    info="Relevant courses included Data Structures and Algorithms, Software Engineering, Intro to ML, and Software Architecture."
                />

            </ul>
        </div>
    
    </div>
  )
}

export default Education