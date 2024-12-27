import { AnimatedText } from '@/components/AnimatedText'
import { Layout } from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

import DTI_WAB_PIC from '../../public/images/research/DTI_WAB.png'
import NBack_PIC from '../../public/images/research/NBack_Poster.png'

import {motion} from 'framer-motion'

const Framerimage = motion(Image);

const FeaturedArticle = ({img, title, summary, link }) => {
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

const Article = ({img, title, date, link}) => {
  return (
    <li>
      
    </li>
  )
}

const Research = () => {
  return (
    <>
      <Head>
        <title> Farhan | Research Page </title>
        <meta name='description' description="Farhan's Research"></meta>
      </Head>

      <main className='w-full mb-16 flex flex-col items-center justify-center self-center overflow-hidden'>
        <Layout className='pt-16'>
          <AnimatedText text="My Research Works" className='mb-16' fontSize='60px' textAlign='center'/>
          <ul className='grid grid-cols-2 gap-16'>
            
            <FeaturedArticle 
              title="Using Diffusion Tensor Imaging (DTI) Streamline Count To Predict Aphasia Scores"
              summary="We quantified brain pathway damage and used that to diagnose language disorder in stroke patients "
              link="https://github.com/Farhan-Faisal/DTI_WAB.git"
              img={DTI_WAB_PIC}
            />

            <FeaturedArticle 
              title="Online Working Memory Training as a Treatment for Post-Stroke Aphasia"
              summary=""
              link="https://github.com/Farhan-Faisal/STM_N-Back_Training_Aphasia.git"
              img={NBack_PIC}
            />
          </ul>

          <h2 className="w-full text-center my-16 mt-32" style={{fontSize: '25px', fontWeight: 'bold'}}>All Articles</h2>
        </Layout>
      </main>
    </>
  )
}

export default Research