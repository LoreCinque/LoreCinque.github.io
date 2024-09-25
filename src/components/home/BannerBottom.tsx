'use client'
import React from 'react'
import {motion} from 'framer-motion'
import { SocialIcon } from 'react-social-icons'
import Link from 'next/link'
type Props = {
    href: string;
}
const BannerBottom = ({href}: Props) => {
  return (
    <div className="banner-bottom">
        <motion.div 
        initial={{
            y: 100,
            opacity: 0,
            transform: "rotate(-90deg) translate(52px, -36%)"
        }}
        animate={{
            y: 0,
            opacity: 1,
            transform: "rotate(-90deg) translate(52px, -36%)"
        }}
        transition={{duration: 1.2}}
        className="social"
        >
            <h3 className='social-header-text'>Follow Me -</h3> 
            <SocialIcon 
            url='https://www.facebook.com/' 
            fgColor='white' 
            bgColor='transparent'
            />
            <SocialIcon 
            url='https://www.linkedin.com/' 
            fgColor='white' 
            bgColor='transparent'
            />
            <SocialIcon 
            url='https://www.pinterest.com/' 
            fgColor='white' 
            bgColor='transparent'
            />
        </motion.div>
        <motion.div 
        className="scroll-down"
        initial={{
            y: -100,
            opacity: 0,
        }}
        animate={{
            y: 0,
            opacity: 1,
        }}
        transition={{duration: 1.2}}
        >
            <Link href={href} role="button" id="goToMaincontent"><img src="img/arrow-scroll.png" alt="arrow"/></Link>
        </motion.div>
    </div>
  )
}

export default BannerBottom