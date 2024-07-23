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
const FramerVideo = motion.video;

const FeaturedProject = ({type, title, summary, video, img, link, githubLink}) => {
    return (
        <article className='w-full flex items-center justify-between rounded-3xl 
            border border-solid border-dark bg-light shadow-2xl p-12 relative
            rounded-br-2xl'
            >
            <div className='absolute top-0 -right-3 z-[-10] w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl'/>
            
            {/* <Link href={link} target={"_blank"} className="w-1/2 cursor-pointer overflow-hidden rounded-lg"> */}
                <FramerVideo src={video} poster={img} alt={title} className="w-[450px] h-[400px] border border-solid border-dark" style={{ borderWidth: '2px'}}
                    whileHover={{scale: 1.1}}
                    transition={{duration: 0.2}}
                    controls
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            {/* </Link> */}

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

const Project = ({type, title, img, video, link, githubLink}) => {
    return(
        <article className='w-full flex-col flex items-center justify-center rounded-2xl 
            border border-solid border-dark bg-light shadow-2xl p-6 relative'
            >
            <div className='absolute top-0 -right-3 z-[-10] w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl'/>
            
            {/* <Link href={link} target={"_blank"} className="w-full cursor-pointer overflow-hidden rounded-lg"> */}
                <FramerVideo src={video} poster={img} alt={title} className="w-[350px] h-[300px] border border-solid border-dark" style={{ borderWidth: '2px'}}
                    whileHover={{scale: 1.1}}
                    transition={{duration: 0.2}}
                    controls
                />
            {/* </Link> */}

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

// Images:
// ![engineering](https://github.com/user-attachments/assets/4cd8c958-3781-4137-b442-7b2b9615e2dc)
// ![simple-navigation-tool](https://github.com/user-attachments/assets/473675ec-4e6c-4671-a058-cace1e96d80d)
// ![MEDLIFE](https://github.com/user-attachments/assets/1cc04cdb-7cca-4d45-83da-7d606d1ea52e)
// ![gogo](https://github.com/user-attachments/assets/af8a5bc1-4122-4382-ab17-30ed0ccb1154)
// ![air-quality]("https://github.com/user-attachments/assets/3d794c3c-9d82-4f05-a25f-cddc961c346f")


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
                            summary="A feature-rich Air quality monitoring dashboard made using ReactJS, Tailwind CSS, PurpleAir API, Leaflet, & Azure Cloud. 
                                    It shows all Purple Air and AQHI monitoring stations in Edmonton and shows the nearest three sensors according to your location."
                            link="https://air-quality-dashboard-pi.vercel.app"
                            githubLink="https://github.com/Fahrin0802/air_quality_dashboard.git"
                            type="Featured Project"
                            img="https://github.com/user-attachments/assets/3d794c3c-9d82-4f05-a25f-cddc961c346f"
                            video="https://github.com/user-attachments/assets/1b72fc46-bdc7-4ae5-9080-9006b8e52092"
                        />
                    </div>

                    <div className='col-span-6'>
                        <Project 
                            title="Course Scheduler"
                            link="https://github.com/Farhan-Faisal/ENGG_Timetable.git"
                            githubLink="https://github.com/Farhan-Faisal/ENGG_Timetable.git"
                            type="Project"
                            video="https://github.com/Farhan-Faisal/ENGG_Timetable_Demo/assets/77621905/cecbcfc9-8b7d-49f6-ad74-9c6a50358ce6"
                            img="https://github.com/user-attachments/assets/4cd8c958-3781-4137-b442-7b2b9615e2dc"
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project 
                            title="Student Org Task Manager"
                            link="https://github.com/Farhan-Faisal/MEDLIFE_APP.git"
                            githubLink="https://github.com/Farhan-Faisal/MEDLIFE_APP.git"
                            type="Project"
                            video="https://github.com/Farhan-Faisal/MEDLIFE_APP/assets/77621905/26c32662-cdc4-4ba9-a71e-bb1ff9e4e386"
                            img="https://github.com/user-attachments/assets/1cc04cdb-7cca-4d45-83da-7d606d1ea52e"
                        />
                    </div>

                    <div className='col-span-12'>
                        <FeaturedProject 
                            title="GoGo - Better With You"
                            summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                                    It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                                    local currency."
                            link="https://github.com/Farhan-Faisal/GOGO_MERN.git"
                            githubLink="https://github.com/Farhan-Faisal/GOGO_MERN.git"
                            type="Featured Project"
                            video="https://github.com/Farhan-Faisal/GOGO_MERN/assets/77621905/6be8f11e-0026-4efd-9241-04540c6c3fb7"
                            img="https://github.com/user-attachments/assets/af8a5bc1-4122-4382-ab17-30ed0ccb1154"
                        />
                    </div>

                    <div className='col-span-6'>
                        <Project 
                            title="Simple Navigation Tool"
                            link="https://github.com/Farhan-Faisal/simple-navigation-tool.git"
                            githubLink="https://github.com/Farhan-Faisal/simple-navigation-tool.git"
                            type="Project"
                            img="https://github.com/user-attachments/assets/473675ec-4e6c-4671-a058-cace1e96d80d"
                            video="https://github.com/user-attachments/assets/57b66387-7118-418e-bb70-691d9acbc674"
                        />
                    </div>

                </div>
            </Layout>
        </main>
    </>
  )
}

export default Projects