'use client'
import { teamData } from '@/data/Data'
import React from 'react'
import {motion} from 'framer-motion'
import CustomGsapTextSplit from '../utils/CustomGsapTextSplit'
import CustomGsapTextSplitLine from '../utils/CustomGsapTextSplitLine'
const TeamSection = () => {
  return (
    <section>
            <div className="crew-9 bg-dark bg-opacity-25">
                <div className="container">
                    <div className="section-heading-8 section-heading-9">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <motion.h6 
                                className="pc-title-left"
                                initial={{
                                    x: -80,
                                    opacity: 0
                                }}
                                whileInView={{
                                    x: 0,
                                    opacity: 1
                                }}
                                transition={{
                                    duration: 1.2
                                }}
                                viewport={{once: true}}
                                >Team</motion.h6>
                                <motion.h2 
                                className="title-anim"
                                initial={{ opacity: 0}}
                                animate={{ opacity: 1}}
                                transition={{ duration: 1.2,ease: "linear", }}
                                viewport={{once: true}}
                                >
                                    <CustomGsapTextSplit
                                    children="Our Crew" 
                                    />
                                </motion.h2>
                            </div>
                            <motion.div 
                            className="col-xl-5 col-lg-6"
                            initial={{
                            opacity: 0,
                            }}
                            animate={{
                            opacity: 1,
                            }}
                            transition={{
                            duration: 1.5
                            }}
                            viewport={{once: true}}
                            >
                                <CustomGsapTextSplitLine className="title-txt title-anim">
                                    Content writing service is a business or individual that provides written content for websites, blogs, marketing materials, and other these services is to provide.
                                </CustomGsapTextSplitLine>
                            </motion.div>
                        </div>
                    </div>
                    <div className="crew-9-list fade_left">
                        {teamData.map((item,index) => (
                           <motion.div 
                           initial={{
                            x: -50,
                            opacity: 0
                           }}
                           whileInView={{
                            x:0,
                            opacity: 1
                           }}
                           transition={{
                            duration: 1.2 + index * 0.1,
                            ease: 'easeOut'
                           }}
                           viewport={{once: true}}
                           className="single-crew fade_left_item" 
                           key={index}>
                            <div>
                                <h3 className="crew-name"><a href="#">{item.name}</a></h3>
                                <span className="crew-role">{item.role}</span>
                            </div>
                            <div>
                                <h4 className="crew-subtitle">Follow Me:</h4>
                                <div className="social">
                                    <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                    <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                    <a href="#"><i className="fa-brands fa-tiktok"></i></a>
                                </div>
                            </div>
                            <div className="position-relative">
                                <h4 className="crew-subtitle">Film Awards</h4>
                                <span className="award-name">Venice Film Festival Awards</span>
                                <img src="img/award-logo.png" className="award-logo" alt="image"/>
                            </div>
                            <div>
                                <div className="part-img">
                                    <img src={item.img} alt="Image"/>
                                </div>
                            </div>
                            <div>
                                <a href="#" className="view-btn"><i className="fa-regular fa-arrow-up-right"></i></a>
                            </div>
                        </motion.div>  
                        ))}
                       
                    </div>
                </div>
            </div>
        </section>
  )
}

export default TeamSection