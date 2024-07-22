import React from 'react'
import Head from 'next/head'
import { Layout } from '@/components/Layout'
import { AnimatedText } from '@/components/AnimatedText'
import Link from 'next/link'
import { GithubIcon } from '@/components/Icons'
import project1Img from '../../public/images/projects/crypto-screener-cover-image.jpg'
import Image from 'next/image'
import {motion} from 'framer-motion'

const Framerimage = motion(Image);

const FeaturedProject = ({type, title, summary, img, link, githubLink}) => {
    return (
        <article className='w-full flex items-center justify-between rounded-3xl 
            border border-solid border-dark bg-light shadow-2xl p-12 relative
            rounded-br-2xl'
            >
            <div className='absolute top-0 -right-3 z-[-10] w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl'/>
            
            <Link href={link} target={"_blank"} className="w-1/2 cursor-pointer overflow-hidden rounded-lg">
                <Framerimage src={img} alt={title} className="w-full h-auto"
                whileHover={{scale: 1.1}}
                transition={{duration: 0.2}}
                />
            </Link>

            <div className="w-1/2 flex flex-col items-start justify-between pl-6">
                <span style={{fontWeight: 'medium', fontSize: '20px', color: 'purple'}}>{type}</span>
                
                <Link href={link} target={"_blank"} className="hover:underline underline-offset-2">
                    <h2 className='my-2 w-full text-left' style={{fontWeight: 'bold', fontSize: '25px'}}>{title}</h2>
                </Link>

                <p className='my-2'>
                    {summary}
                </p>

                <div className='mt-2 flex items-center'>
                    <Link href={githubLink} className='w-10' target={"_blank"}> <GithubIcon /> </Link>
                    <Link href={link} target={"_blank"} className='ml-4 rounded-lg p-2 px-6 bg-dark'
                    style={{fontSize: '20px', color: 'white', fontWeight: 'semibold'}}> 
                        Visit Project 
                    </Link>
                </div>
            </div>

        </article>
    )
}

const Project = ({type, title, img, link, githubLink}) => {
    return(
        <article className='w-full flex-col flex items-center justify-center rounded-2xl 
            border border-solid border-dark bg-light shadow-2xl p-6 relative'
            >
            <div className='absolute top-0 -right-3 z-[-10] w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl'/>
            
            <Link href={link} target={"_blank"} className="w-full cursor-pointer overflow-hidden rounded-lg">
                <Framerimage src={img} alt={title} className="w-full h-auto"
                whileHover={{scale: 1.1}}
                transition={{duration: 0.2}}
                />
            </Link>

            <div className="w-full flex flex-col items-start justify-between mt-4">
                <span style={{fontWeight: 'medium', fontSize: '25px', color: 'purple'}}>{type}</span>
                
                <Link href={link} target={"_blank"} className="hover:underline underline-offset-2">
                    <h2 className='my-2 w-full text-left' style={{fontWeight: 'bold', fontSize: '25px'}}>{title}</h2>
                </Link>

                <div className='mt-2 flex items-center'>
                    <Link href={githubLink} className='w-10' target={"_blank"}> <GithubIcon /> </Link>
                    <Link href={link} target={"_blank"} className='ml-4 rounded-lg p-2 px-6 bg-dark'
                    style={{fontSize: '20px', color: 'white', fontWeight: 'semibold'}}> 
                        Visit 
                    </Link>
                </div>
            </div>
        </article>
    )
}

const Projects = () => {
  return (
    <>
        <Head>
            <title> Farhan | Projects Page </title>
            <meta name='description' description='project list full stack developer'></meta>
        </Head>
        <main className='mb-16 flex w-full flex-col items-center justify-center self-center'>
            <Layout className='pt-16'>
                <AnimatedText text="Imagination Trumps Knowledge!" className='mb-16' fontSize='60px' textAlign='center'/>

                <div className="grid grid-cols-12 gap-24">
                    <div className='col-span-12'>
                        <FeaturedProject 
                            title="Air Quality Monitoring Dashboard"
                            summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                                    It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                                    local currency."
                            link="/"
                            githubLink="/"
                            type="Featured Project"
                            img={project1Img}
                        />
                    </div>

                    <div className='col-span-6'>
                        <Project 
                            title="Air Quality Monitoring Dashboard"
                            link="/"
                            githubLink="/"
                            type="Project"
                            img={project1Img}
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project 
                            title="Air Quality Monitoring Dashboard"
                            link="/"
                            githubLink="/"
                            type="Project"
                            img={project1Img}
                        />
                    </div>

                    <div className='col-span-12'>
                        <FeaturedProject 
                            title="Air Quality Monitoring Dashboard"
                            summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                                    It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                                    local currency."
                            link="/"
                            githubLink="/"
                            type="Featured Project"
                            img={project1Img}
                        />
                    </div>

                    <div className='col-span-6'>
                        <Project 
                            title="Air Quality Monitoring Dashboard"
                            link="/"
                            githubLink="/"
                            type="Project"
                            img={project1Img}
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project 
                            title="Air Quality Monitoring Dashboard"
                            link="/"
                            githubLink="/"
                            type="Project"
                            img={project1Img}
                        />
                    </div>

                </div>
            </Layout>
        </main>
    </>
  )
}

export default Projects