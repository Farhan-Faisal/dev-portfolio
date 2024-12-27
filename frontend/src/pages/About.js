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
import TransitionEffect from "@/components/TransitionEffect";

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
        <TransitionEffect />
            <main
                className={`flex  w-full flex-col items-center justify-center dark:text-light`}
            >
            <Layout className='pt-16'>
                <AnimatedText text="Passion Fuels Purpose" className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" fontSize='60px' textAlign='center'/>

                <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
                    <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
                        <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75"> BIOGRAPHY </h2>
                        <p  style={{font: 'medium', textAlign: 'justify' }}>
                            Hi, I&apos;m Farhan, a full stack developer with a strong passion for creating beautiful, functional, and user-centered digital experiences. With 2 years of experience,  I am always looking for new and innovative ways to bring my clients&apos; visions to life
                        </p>

                        <p className='my-4' style={{font: 'medium', textAlign: 'justify' }}>
                            In addition to web development, I have delved a lot into data science. In doing so, I have honed my skills in implementing data pipelines, analyzing large datasets, data visualization, and fine-tuning machine learning models. 

                        </p>

                        <p className='' style={{font: 'medium', textAlign: 'justify' }}>
                            Whether I&apos;m working on a website, mobile app, or other data pipelines, I bring my whole hearted commitment to every project I work on.
                        </p>
                    </div>

                    <div className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark 
                        bg-light p-8 dark:border-light dark:bg-dark
                        xl:col-span-4 md:col-span-8 md:order-1
                        ">
                        <div className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light " />
                            <Image src={profilePic} alt={"_blank"} className= 'w-full h-auto rounded-2xl'
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>

                        <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row 
                            xl:items-center md:order-3">
                        
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumbers value={10} />+
                                </span>
                                <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                                    xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    satisfied clients
                                </h2>
                            </div>

                    
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumbers value={10} />+
                                </span>
                                <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                                    xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    projects completed
                                </h2>
                            </div>

                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumbers value={2} />+
                                </span>
                                <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                                    xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    Years of experience
                                </h2>
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