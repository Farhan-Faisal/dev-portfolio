import React, { useRef } from 'react'
import { motion } from "framer-motion"
import { LiIcon } from '../atoms/LiIcon'

const Details = ({position, company, time, address, work}) => {
    const ref = useRef(null);
    return(
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[80%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
            <LiIcon reference={ref}/>
            <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:"spring"}}>
            <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{position}&nbsp;@{company}</h3>
            <span className="capitalize text-dark/75 font-medium xs:text-sm">{time} | {address}</span>
                <ul className="font-medium w-full md:text-sm">
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

export default Details;