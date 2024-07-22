import Head from 'next/head'
import { AnimatedText } from '@/components/AnimatedText'
import { Layout } from '@/components/Layout'
import React, { useEffect, useRef } from 'react'
import profilePic from '../../public/images/profile/comic-pic.png'
import Image from 'next/image'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Education from '../components/Education'

const AnimatedNumbers = ({value}) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {duration: 3000})
    const isInView = useInView(ref, {once: true});

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [motionValue, value, isInView])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])

    return <span ref={ref}></span>

}

const About = () => {
  return (
    <>
        <Head>
            <title> Farhan | About Page </title>
            <meta name='description' description='any'></meta>
        </Head>
        <main className='flex w-full flex-col items-center justify-center self-center'>
            <Layout className='pt-16'>
                <AnimatedText text="Passion Fuels Purpose" className='mb-16' fontSize='60px' textAlign='center'/>

                <div className='grid w-full grid-cols-8 gap-16'>
                    <div className='col-span-3 flex flex-col items-start justify-start'>
                        <h2 className='mb-4' style={{fontWeight: 'bold', opacity:'70%'}}>BIOGRAPHY</h2>

                        <p  style={{font: 'medium', textAlign: 'justify' }}>
                            Hi, I'm Farhan, a full stack developer with a strong passion for creating beautiful, functional, and user-centered digital experiences. With 2 years of experience,  I am always looking for new and innovative ways to bring my clients&apos; visions to life
                        </p>

                        <p className='my-4' style={{font: 'medium', textAlign: 'justify' }}>
                            In addition to web development, I have delved a lot into data science. In doing so, I have honed my skills in implementing data pipelines, analyzing large datasets, data visualization, and fine-tuning machine learning models. 

                        </p>

                        <p className='' style={{font: 'medium', textAlign: 'justify' }}>
                            Whether I'm working on a website, mobile app, or other data pipelines, I bring my whole hearted commitment to every project I work on.
                        </p>
                    </div>

                    <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark p-8 bg-light'>
                        <div className='absolute top-0 -right-3 z-[-10] w-[102%] h-[103%] rounded-[2rem] bg-dark'/>
                        <Image src={profilePic} className= 'w-full h-auto rounded-2xl'/>
                    </div>

                    <div className='col-span-2 flex flex-col justify-between'>
                        
                        <div className='items-end flex flex-col justify-center' >
                            <span className='inline-block' style={{fontWeight: 'bold', fontSize:'50px'}}>
                                <AnimatedNumbers value={10} />+
                            </span>
                            <h2>Satisfied Clients</h2>
                        </div>
                    
                        <div className='items-end flex flex-col justify-center'>
                            <span className='inline-block' style={{fontWeight: 'bold', fontSize:'50px'}}>
                                <AnimatedNumbers value={10} />+
                            </span>
                            <h2>Projects Completed</h2>
                        </div>

                        <div className='items-end flex flex-col justify-center'>
                            <span className='inline-block' style={{fontWeight: 'bold', fontSize:'50px'}}>
                                <AnimatedNumbers value={2} />+
                            </span>
                            <h2>years  experience</h2>
                        </div>
                    </div>
                </div>

                <Skills />
                <Experience />
                <Education />
            </Layout>
        </main>
    </>
  )
}

export default About