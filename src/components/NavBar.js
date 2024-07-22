import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Logo from './Logo'
import {GithubIcon, LinkedinIcon, InstaIcon} from './Icons'
import {motion} from 'framer-motion'

const CustomLink = ({href, title, className=""}) => {
    const router = useRouter();
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={`
                h-[2px] inline-block bg-dark
                absolute left-0 -bottom-0.5
                transition-[width] ease duration-300
                ${router.asPath === href ? 'w-full' : 'w-0'}
                group-hover:w-full
            `}
            >&nbsp;</span>
        </Link>
    )
}

const NavBar = () => {
    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between'> 
            <nav>
                <CustomLink href="/" title="Home" className='mr-4' /> 
                <CustomLink href="/About"  title="About" className='mx-4'/> 
                <CustomLink href="/Projects"  title="Projects" className='mx-4'/> 
                {/* <CustomLink href="/Research"  title="Research" className='ml-4'/> */}
            </nav>
            
            <nav className="flex items-center justify-center flex-wrap">
                {/* <motion.a className='w-6 mr-3' href="https://www.instagram.com/farhanbinfaisal/" target={"_blank"} whileHover={{ y:-2 }} whileTap={{ scale:0.9 }} > 
                    <InstaIcon /> 
                </motion.a> */}

                <motion.a className='w-6 mx-3' href="https://www.linkedin.com/in/fahrin" target={"_blank"} whileHover={{ y:-2 }} whileTap={{ scale:0.9 }}> 
                    <LinkedinIcon /> 
                </motion.a>

                <motion.a className='w-6 ml-3' href="https://github.com/Fahrin0802" target={"_blank"} whileHover={{ y:-2 }} whileTap={{ scale:0.9 }}> 
                    <GithubIcon /> 
                </motion.a>
            </nav>

            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>
        </header>
    )
}

export default NavBar