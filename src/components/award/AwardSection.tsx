'use client'
import { awardData } from '@/data/Data'
import React from 'react'
import ImageBadgeWrapper from './ImageBadgeWrapper'
import {motion} from 'framer-motion'
import CustomGsapTextSplit from '../utils/CustomGsapTextSplit'
import CustomGsapTextSplitLine from '../utils/CustomGsapTextSplitLine'

const AwardSection = () => {
  return (
    <section>
    <div className="award-8">
        <div className="container">
            <div className="row align-items-center justify-content-xl-between justify-content-center row-gap-4 row-gap-lg-0">
                <div className="col-lg-6 col-md-8">
                    <div className="award-8-part-txt">
                        <div className="section-heading-8">
                            <motion.h6 
                            className="pc-title-left"
                            initial={{
                                x: 80,
                                opacity: 0
                            }}
                            whileInView={{
                                x: 0,
                                opacity: 1
                            }}
                            transition={{
                                duration: 1
                            }}
                            viewport={{once: true}}
                            >Award</motion.h6>
                            <CustomGsapTextSplit>
                                <h2 className="title-anim">Awards Recognitions</h2>
                            </CustomGsapTextSplit>
                        </div>
                        <CustomGsapTextSplitLine className="title-anim">
                        We are thrilled to announce that our agency has been nominated for the prestigious Agency of the Year award among the top digital agencies globally. This recognition showcases our commitment to delivering exceptional digital solutions and solidifies.
                        </CustomGsapTextSplitLine>
                        <table className="table award-table">
                            <tbody>
                                {awardData.map((item) => (
                                    <motion.tr 
                                    key={item.id}
                                    initial={{
                                        x: -40,
                                        opacity: 0
                                    }}
                                    whileInView={{
                                        x: 0,
                                        opacity: 1
                                    }}
                                    transition={{duration: 1.4 + 0.2 * item.id}}
                                    viewport={{once: true}}
                                    >
                                        <td className="title-anim">{item.title}</td>
                                        <td className="title-anim">Winner</td>
                                        <td className="title-anim">{item.date}</td>
                                    </motion.tr>  
                                ))}
                              
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-xl-5 col-lg-6 col-md-8">
                    <div className="award-8-part-img fade_bottom">
                        <img src="img/award-img.png" alt="Award"/>
                        <ImageBadgeWrapper/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default AwardSection