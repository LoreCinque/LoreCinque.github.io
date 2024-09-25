'use client'
import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'
type Props = {
    children: ReactNode;
}

const AnimatedFooterMenu = ({children}: Props) => {
  return (
    <motion.div
    initial = {{
        y: 40,
        opacity: 0
    }}
    whileInView = {{
        y: 0,
        opacity: 1
    }}
    transition={{ duration: 1.2 }}
    viewport={{once: true}}
    className="footer-menu"
    >{children}</motion.div>
  )
}

export default AnimatedFooterMenu