import React, { useRef } from 'react'
import {motion, useScroll} from "framer-motion"

import Details from "../molecules/ExperienceDetails"

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    });

  return (
    <div className='mt-32'>
        <h2 className="font-bold text-8xl mb-16 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Experience</h2>
        <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
            <motion.div style={{scaleY: scrollYProgress}} className='absolute left-8 top-0 w-[4px] h-full bg-dark origin-top'/>
            
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details
                    position="Data Analyst" company="Decision Neuroscience Lab"
                    time="Nov 2022 – May 2024" address="Ontario, Canada"
                    work="Developed ETL pipelines in Python & SQL to clean large textual survey datasets, improving operational efficiency by 60%.  
                        •	Utilized Python and GPT-4 embedding models to encode textual responses, enabling deeper investigation into human goal-setting behaviors.  
                        •	Enhanced data quality through imputation using KNN, linear regression, and logistic regression models, ensuring more accurate analysis.  
                        •	Created data visualizations with ggplot2 and Matplotlib, to present complex analysis results. 
                        •	Fine-tuned transformer models (BERT) with PyTorch to label qualitative data with 82% accuracy.
                        "
                />

                <Details
                    position="Coop – Developer Intern" company="Baycrest Hospital"
                    time="Aug 2022 – Dec 2022" address="Toronto, ON, Canada"
                    work="Programmed two web based interactive study paradigms using JavaScript (PsychoJS, NeuroBS) for neuroimaging and language research.                   
                        •	Analyzed neuroimaging datasets via pandas and scikit-learn, identifying trends between structural damage and language impairments, contributing to automated aphasia diagnostic tools.   
                        •   Developed and deployed simple data analysis dashboards in Excel & Tableau for non-technical users, simplifying insights for layman audiences.                   
                        •	Implemented Linux tcsh/bash & C++ scripts for batch processing neuroimaging data on remote servers.
                        •   Streamlined healthcare administration by managing MySQL databases and automating data processing tasks, reducing admin work by 30%.                                                                                        .
                        "
                />

            </ul>
        </div>
    
    </div>
  )
}

export default Experience