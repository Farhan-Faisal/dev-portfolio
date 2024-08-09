import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Logo from './Logo';
import { GithubIcon, LinkedinIcon } from './Icons';
import { motion } from 'framer-motion';

const CustomLink = ({ href, title, className = "" }) => {
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
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header className='w-full px-8 md:px-16 lg:px-32 py-8 font-medium flex items-center justify-between relative'>
            {/* Hamburger Button */}
            <button className="flex-col justify-center items-center lg:hidden" onClick={handleClick}>
                <span className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-dark block h-0.5 w-6 transition-all duration-300 ease-out rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-dark block h-0.5 w-6 transition-all duration-300 ease-out rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>

            {/* Navigation Links (hidden on small screens) */}
            <nav className='hidden lg:flex'>
                <CustomLink href="/" title="Home" className='mr-4' />
                <CustomLink href="/About" title="About" className='mx-4' />
                <CustomLink href="/Projects" title="Projects" className='mx-4' />
                <CustomLink href="/Research" title="Research" className='ml-4' />
            </nav>

            {/* Mobile Navigation Menu */}
            {isOpen && (
                <nav className="flex flex-col items-center justify-center lg:hidden absolute top-full left-0 w-full bg-white z-10 p-4">
                    <CustomLink href="/" title="Home" className='my-2' />
                    <CustomLink href="/About" title="About" className='my-2' />
                    <CustomLink href="/Projects" title="Projects" className='my-2' />
                    <CustomLink href="/Research" title="Research" className='my-2' />
                </nav>
            )}

            {/* Social Icons */}
            <nav className="flex items-center justify-center flex-wrap">
                <motion.a className='w-6 mx-3' href="https://www.linkedin.com/in/farhanbinfaisal" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
                    <LinkedinIcon />
                </motion.a>
                <motion.a className='w-6 ml-3' href="https://github.com/Farhan-Faisal" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
                    <GithubIcon />
                </motion.a>
            </nav>

            {/* Logo */}
            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>
        </header>
    )
}

export default NavBar;
