'use client'
import React from 'react'
import CustomGsapTextSplitLine from '../utils/CustomGsapTextSplitLine'
import CustomGsapTextSplit from '../utils/CustomGsapTextSplit'
import { motion } from 'framer-motion'
const HomeSection6 = () => {
  return (
    <section>
        <div className="banner banner-2">
            <div className="container">
                <div className="row justify-content-between align-items-end">
                    <div className="col-lg-7 col-md-8">
                        <div className="banner-text-sec">
                            <div className="banner-text-area">
                                <div className="text-anim">
                                    <CustomGsapTextSplitLine className="wellcome">WELCOME TO MY WORLD</CustomGsapTextSplitLine>
                                </div>
                                <h1 className="banner-heading gsap-heading-anim">
                                    <CustomGsapTextSplit>
                                    <span className="pc-title-left">An Expert Digital Marketing</span><br/> 
                                    <span className="pc-title-right">Product Designer</span>
                                    </CustomGsapTextSplit>
                                    </h1>
                                <div className="text-anim">
                                    <CustomGsapTextSplitLine className="banner-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor<br/> incididunt ut labore et dolore magna aliqua. </CustomGsapTextSplitLine>
                                </div>
                                <motion.div 
                                className="banner-btn"
                                initial={{
                                y: 50,
                                opacity: 0
                                }}
                                whileInView={{
                                y: 0,
                                opacity: 1
                                }}
                                viewport={{once: true}}
                                transition={{duration:1.2}}
                                >
                                    <a href="#" className="def-btn def-btn-2 btn-hover"><span className="dot"></span> <span className="txt">Download CV</span> <i
                                        className="fa-solid fa-download"></i></a>
                                    <a href="#" className="about-btn">About Me</a>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5 col-md-4">
                        <motion.div 
                        className="banner-image"
                        initial={{
                        x: 100,
                        opacity: 0
                        }}
                        whileInView={{
                        x: 0,
                        opacity: 1
                        }}
                        viewport={{once: true}}
                        transition={{duration:1.2}}
                        >
                            <img src="img/banner-img-2.png" className="banner-img" alt="#"/>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeSection6