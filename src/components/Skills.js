import React, {useRef} from 'react'
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
    const ref = useRef(null);
    return (
        <>
        <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
          Skills
        </h2> 
        <div
            ref={ref}
            className="w-full h-[100vh] relative bg-circularLight dark:bg-circularDark  flex items-center justify-center 
            mb-64 md:mb-32 rounded-full
            lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd 
            sm:bg-circularLightSm sm:dark:bg-circularDarkSm lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
            "
        >
     
            <motion.div whileHover={{scale:1.05}} className="cursor-pointer flex rounded-full font-semibold bg-dark text-light p-8 shadow-dark
                dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2
                ">
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