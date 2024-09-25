'use client'
import React from 'react'
import CustomGsapTextSplit from '../utils/CustomGsapTextSplit'
import CustomGsapTextSplitLine from '../utils/CustomGsapTextSplitLine'
import { motion } from 'framer-motion'
const HomeSection5 = () => {
  return (
    <section id="Home">
        <div className="banner">
            <div className="animated-shape shape-1">
                <div className="layer-1"></div>
                <div className="layer-2"></div>
                <div className="layer-3"></div>
                <div className="layer-4"></div>
                <div className="layer-5"></div>
            </div>
            <div className="container">
                <div className="row justify-content-between align-items-end">
                    <div className="col-lg-7 col-md-7">
                        <div className="banner-text-sec">
                            <div className="banner-text-area">
                                <div className="text-anim">
                                    <CustomGsapTextSplitLine className="wellcome">
                                    I’m MR. Bakkar, Web Designer & Developer    
                                    </CustomGsapTextSplitLine>
                                </div>
                                <h1 className="banner-heading">
                                    <CustomGsapTextSplit>
                                    <span className="pc-title-left">An Expert Digital Marketing</span><br/> <span className="pc-title-right">Product Designer</span>    
                                    </CustomGsapTextSplit>
                                </h1>
                                <div className="text-anim">
                                    <CustomGsapTextSplitLine className="banner-description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor<br/> incididunt ut labore et dolore magna aliqua.
                                    </CustomGsapTextSplitLine>
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
                                    <a href="#" className="def-btn btn-hover"><span className="dot"></span> <span className="txt">Download CV <i className="fa-solid fa-download"></i></span></a>
                                    <a href="#" className="about-btn">About Me</a>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5 col-md-5">
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
                            <img src="img/02_home.png" className="banner-img" alt="#"/>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeSection5