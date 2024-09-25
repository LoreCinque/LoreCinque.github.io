'use client'
import React, { ReactNode } from 'react'
import {motion} from 'framer-motion'
type Props = {
    children: ReactNode;
    className?: string;
}

const BounceAnimatedBtn = ({children,className}: Props) => {
  return (
    <motion.div 
    className={className}
    initial={{opacity: 0, y: 20}}
    whileInView={{ y: [0, 40, 0], opacity: 1 }}
    transition={{ bounce: 0.2, ease:'easeIn', duration:1.2 }}
    viewport={{once: true}}
    >
        {children}
    </motion.div>
  )
}

export default BounceAnimatedBtn