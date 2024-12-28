import React from 'react'
import Head from 'next/head'
import { AnimatedText } from '@/molecules/AnimatedText'
import { Layout } from '@/organisms/Layout'
import { FeaturedArticle } from "../molecules/Article"

import DTI_WAB_PIC from '../../public/images/research/DTI_WAB.png'
import NBack_PIC from '../../public/images/research/NBack_Poster.png'

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
          <ul className='grid md:grid-cols-1 grid-cols-2 gap-8 md:gap-16'>
            
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

        </Layout>
      </main>
    </>
  )
}

export default Research;