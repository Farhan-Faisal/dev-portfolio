import { AnimatedText } from '@/components/AnimatedText'
import { Layout } from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import article1 from '../../public/images/articles/pagination component in reactjs.jpg'
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
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary=" Learn how to build a custom pagination component in ReactJS from scratch. 
                        Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              link="/"
              img={article1}
            />

            <FeaturedArticle 
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary=" Learn how to build a custom pagination component in ReactJS from scratch. 
                        Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              link="/"
              img={article1}
            />
          </ul>

          <h2 className="w-full text-center my-16 mt-32" style={{fontSize: '25px', fontWeight: 'bold'}}>All Articles</h2>
        </Layout>
      </main>
    </>
  )
}

export default Research