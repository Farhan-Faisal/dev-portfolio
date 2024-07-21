import React from "react";
import {motion} from "framer-motion"

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    }
  }
}

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    }
  }
}


export const AnimatedText =({text, className="", fontSize="", textAlign=""}) => {
    return (
        <div className={`${className} w-full py-0 mx-auto flex items-center justify-center text-center overflow-hidden`}>
            <motion.h1 style={{textColor: 'black', fontWeight: 'bold', fontSize: `${fontSize}`, textAlign: `${textAlign}`}} className='w-full inline-block capitalize'
            variants={quote}
            initial="initial"
            animate="animate">
            {
                text.split(" ").map((word, index) => 
                    <motion.span key={word+'-'+index} className='inline-block'
                    variants={singleWord}
                    >
                        {word}&nbsp;
                    </motion.span>
                )
            }
            </motion.h1>
        </div>
    )
}