import React from 'react'
import {motion} from "framer-motion"

export const Skill = ({value, x, y}) => {
    return (
        <motion.div className='flex items-center justify-center rounded-full bg-dark py-3 px-6 shadow-dark absolute ' 
            style={{color: 'white', fontWeight: 'bold'}}
            whileHover={{scale: 1.05}}
            initial={{x:0, y:0}}
            whileInView={{x:x, y:y}}
            transition={{duration: 3}}
        >
            {value}
        </motion.div>
    )
}