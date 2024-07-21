import React from 'react'
import {motion} from "framer-motion"

const Skill =({value, x, y}) => {
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

const Skills = () => {
  return (
    <>
        <h2 className='mt-32 w-full text-center' style={{fontSize: '50px', fontWeight: 'bold'}}>Skills</h2>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
            <motion.div className='flex items-center justify-center rounded-full bg-dark p-8 shadow-dark' 
                style={{color: 'white', fontWeight: 'bold'}}
                whileHover={{scale: 1.05}}
            >
                Web
            </motion.div>

            <Skill value="HTML" x='-22vw' y='-2vw'/>
            <Skill value="CSS" x='-5vw' y='-10vw'/>
            <Skill value="JavaScript" x='20vw' y='6vw'/>
            <Skill value="ReactJS" x='0vw' y='12vw'/>
            <Skill value="NextJS" x='-20vw' y='-15vw'/>
            <Skill value="NodeJS" x='15vw' y='-12vw'/>
            <Skill value="Azure Cloud" x='32vw' y='-5vw'/>
            <Skill value="AWS" x='0vw' y='-20vw'/>
            <Skill value="Python" x='-25vw' y='18vw'/>
            <Skill value="Machine Learning" x='18vw' y='18vw'/>

            
        </div>
    </>
  )
}

export default Skills