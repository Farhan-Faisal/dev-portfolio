import React from "react";
import {motion} from "framer-motion"

const quote = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.7,
      }
    }
  }


export const AnimatedText =({text, fontSize=""}) => {
    return (
        <div className="w-full py-0 mx-auto flex items-center justify-center text-center overflow-hidden">
            <motion.h1 style={{textColor: 'black', fontWeight: 'bold', fontSize: `${fontSize}`, textAlign: 'left'}} className='w-full inline-block capitalize'
            variants={quote}
            initial="initial"
            animate="animate">
            {
                text.split(" ").map((word, index) => 
                    <motion.span key={word+'-'+index} className='inline-block'>
                        {word}&nbsp;
                    </motion.span>
                )
            }
            </motion.h1>
        </div>
    )
}