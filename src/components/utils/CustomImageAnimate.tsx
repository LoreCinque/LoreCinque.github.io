'use client'
import React from 'react'
import {motion} from 'framer-motion'
type Prop = {
    src: string
}
const CustomImageAnimate:React.FC<Prop> = ({src}) => {
  return (
    <motion.img 
    src={src}
    alt="image"
    initial={{
        scale:1.2
    }}
    whileInView={{
        scale: 1
    }}
    viewport={{once: true}}
    transition={{duration:1.5}}
    />
  )
}

export default CustomImageAnimate