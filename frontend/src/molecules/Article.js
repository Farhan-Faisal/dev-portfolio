import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

import {motion} from 'framer-motion'

const Framerimage = motion(Image);

export const FeaturedArticle = ({img, title, summary, link }) => {
  return(
    <li className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl'>
      <div className='absolute top-0 -right-3 z-[-10] w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl'/>
      <Link href={link} target={"_blank"} 
      className="w-full inline-block ursor-pointer overflow-hidden rounded-lg">
          <Framerimage src={img} alt={title} className="w-full h-auto"
          whileHover={{scale: 1.1}}
          transition={{duration: 0.2}}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
      </Link>

      <Link href={link} target={"_blank"}>
          <h2 className='my-2 w-full text-left' style={{fontWeight: 'bold', fontSize: '25px'}}>{title}</h2>
      </Link>

      <p className='mb-2' style={{fontSize: '15px'}}>
        {summary}
      </p>
    </li>
  )
}