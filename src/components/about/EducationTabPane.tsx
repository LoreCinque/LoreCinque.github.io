'use client'
import { educationData } from '@/data/Data'
import React from 'react'
import {motion} from 'framer-motion'
const EducationTabPane = () => {
  return (
    <div className="row g-4">
        {educationData.map((item,index) => (
            <div className="col-sm-6" key={index}>
                <motion.div 
                className="education-card"
                initial={{
                    y: 40,
                    opacity: 0
                }}
                whileInView={{
                    y:0,
                    opacity: 1
                }}
                viewport={{once: true}}

                transition={{duration:1.2}}
                >
                    <span className="degree">{item.degree}</span>
                    <span className="institution">{item.institution}</span>
                    <span className="time-period">{item.timePeriod}</span>
                </motion.div>
            </div>  
        ))}
    </div>
  )
}

export default EducationTabPane